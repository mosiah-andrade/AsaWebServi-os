document.addEventListener('DOMContentLoaded', () => {
    const cursosContainer = document.getElementById('cursos-container');
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const sortBySelect = document.getElementById('sort-by');
    const sidebar = document.querySelector('.sidebar-filters');
    const productModal = document.getElementById('productModal');

    let allCursos = [];

    async function carregarCursos() {
        try {
            const response = await fetch('../cursos.json');
            if (!response.ok) throw new Error(`Erro HTTP! Status: ${response.status}`);
            const data = await response.json();
            allCursos = data.produtos_afiliados;
            document.querySelector('#category-filters').innerHTML = '';
            popularFiltrosCategoria(allCursos);
            applyFilters();
        } catch (error) {
            console.error('Erro ao carregar os cursos:', error);
            cursosContainer.innerHTML = `<p class="error-message col-12">Não foi possível carregar os cursos. Erro: ${error.message}</p>`;
        }
    }

    function popularFiltrosCategoria(cursos) {
        const categoryFiltersDiv = document.getElementById('category-filters');
        const categories = new Set(cursos.map(c => c.categoria).filter(Boolean));
        categoryFiltersDiv.innerHTML = '';
        if (categories.size === 0) {
            categoryFiltersDiv.innerHTML = '<p class="text-muted">Nenhuma categoria encontrada.</p>';
            return;
        }
        categories.forEach(category => {
            const formCheckDiv = document.createElement('div');
            formCheckDiv.classList.add('form-check');
            const checkboxId = `category-${category.replace(/\s+/g, '-')}`;
            formCheckDiv.innerHTML = `
                <input class="form-check-input" type="checkbox" value="${category}" id="${checkboxId}" checked>
                <label class="form-check-label" for="${checkboxId}">${category}</label>
            `;
            categoryFiltersDiv.appendChild(formCheckDiv);
        });
    }

    function exibirCursos(cursos) {
        cursosContainer.innerHTML = '';
        if (cursos.length === 0) {
            cursosContainer.innerHTML = '<p class="no-courses-message col-12">Nenhum produto encontrado.</p>';
            return;
        }

        cursos.forEach(curso => {
            const colDiv = document.createElement('div');
            colDiv.classList.add('col');
            const card = document.createElement('div');
            card.classList.add('card', 'h-100', 'card-custom');
            card.setAttribute('data-product-id', curso.id_hotmart);

            let badgesHTML = '<div class="badge-container">';
            if (curso.novo) badgesHTML += '<span class="badge-custom badge-new">Novo</span>';
            if (curso.preco_original && curso.preco_original > curso.preco) badgesHTML += '<span class="badge-custom badge-promo">Promoção</span>';
            badgesHTML += '</div>';

            let ratingHTML = (curso.avaliacoes && curso.avaliacoes.media) ? `
                <div class="rating-info"><i class="fas fa-star"></i> ${curso.avaliacoes.media.toFixed(1)}</div>` : '';

            let pricesHTML = (curso.preco_original && curso.preco_original > curso.preco) ? `
                <div class="card-prices">
                    <span class="price-original">${curso.moeda} ${curso.preco_original.toFixed(2).replace('.', ',')}</span>
                    <span class="price-current">${curso.moeda} ${curso.preco.toFixed(2).replace('.', ',')}</span>
                </div>` : `
                <div class="card-prices">
                    <span class="price-current">${curso.moeda} ${curso.preco.toFixed(2).replace('.', ',')}</span>
                </div>`;

            card.innerHTML = `
                ${badgesHTML}
                ${ratingHTML}
                <img src="${curso.imagem_principal}" class="card-img-top card-img-top-custom" alt="${curso.nome_produto}">
                <div class="card-body">
                    <h5 class="card-title">${curso.nome_produto}</h5>
                    <p class="card-text-description">${curso.descricao_curta}</p>
                    ${pricesHTML}
                </div>
                <div class="card-footer-custom">
                    <button type="button" class="btn btn-details" data-bs-toggle="modal" data-bs-target="#productModal" data-product-id="${curso.id_hotmart}">
                        Ver detalhes
                    </button>
                    <a href="${curso.link_afiliado}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-access btn-comprar">Adquira agora</a>
                </div>
            `;
            colDiv.appendChild(card);
            cursosContainer.appendChild(colDiv);

            card.addEventListener('click', (event) => {
                if (!event.target.classList.contains('btn-comprar')) {
                    const productId = card.getAttribute('data-product-id');
                    const cursoDetalhes = allCursos.find(p => p.id_hotmart === productId);
                    if (cursoDetalhes) {
                        preencherModal(cursoDetalhes);
                        const modal = new bootstrap.Modal(productModal);
                        modal.show();
                    }
                }
            });
        });
    }

    // --- FUNÇÃO applyFilters CORRIGIDA ---
    function applyFilters() {
        const searchQuery = searchInput.value.toLowerCase().trim();
        const selectedCategories = Array.from(document.querySelectorAll('#category-filters input:checked')).map(cb => cb.value);
        
        // CORREÇÃO: Sintaxe do seletor de atributo corrigida (adicionado 'name=')
        const priceFilter = document.querySelector('input[name="price-filter"]:checked')?.value;
        const ratingFilter = document.querySelector('input[name="rating-filter"]:checked')?.value;
        
        const promoOnly = document.getElementById('promo-filter')?.checked;
        const sortBy = sortBySelect.value;

        let filteredCursos = allCursos.filter(curso => {
            const matchesSearch = searchQuery === '' || curso.nome_produto.toLowerCase().includes(searchQuery) || curso.descricao_curta.toLowerCase().includes(searchQuery) || curso.categoria.toLowerCase().includes(searchQuery);
            const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(curso.categoria);
            const matchesPrice = (priceFilter === 'all' || !priceFilter) || (priceFilter === 'ate-50' && curso.preco <= 50) || (priceFilter === 'acima-50' && curso.preco > 50);
            const matchesRating = (ratingFilter === 'all' || !ratingFilter) || (ratingFilter === '4-mais' && curso.avaliacoes && curso.avaliacoes.media >= 4);
            const matchesPromo = !promoOnly || (curso.preco_original && curso.preco_original > curso.preco);
            return matchesSearch && matchesCategory && matchesPrice && matchesRating && matchesPromo;
        });

        switch (sortBy) {
            case 'price-asc': filteredCursos.sort((a, b) => a.preco - b.preco); break;
            case 'price-desc': filteredCursos.sort((a, b) => b.preco - a.preco); break;
            case 'rating-desc': filteredCursos.sort((a, b) => (b.avaliacoes?.media || 0) - (a.avaliacoes?.media || 0)); break;
            case 'random': default: filteredCursos.sort(() => Math.random() - 0.5); break;
        }
        exibirCursos(filteredCursos);
    }

    function preencherModal(curso) {
        const modalTitle = document.getElementById('productModalLabel');
        const modalBody = document.getElementById('modal-body-content');
        const modalAffiliateLink = document.getElementById('modal-affiliate-link');

        modalTitle.textContent = curso.nome_produto;
        modalAffiliateLink.href = curso.link_afiliado;

        const beneficiosHTML = curso.beneficios && curso.beneficios.length > 0 ?
            `<h4 class="modal-section-title">Benefícios</h4><ul>${curso.beneficios.map(b => `<li>${b}</li>`).join('')}</ul>` : '';

        const publicoAlvoHTML = curso.publico_alvo && curso.publico_alvo.length > 0 ?
            `<h4 class="modal-section-title">Para Quem é Este Produto?</h4><ul>${curso.publico_alvo.map(p => `<li>${p}</li>`).join('')}</ul>` : '';

        const precoHTML = curso.preco_original && curso.preco_original > curso.preco ?
            `<p class="mb-1"><span class="text-muted" style="text-decoration: line-through;">${curso.moeda} ${curso.preco_original.toFixed(2).replace('.', ',')}</span></p>
             <h4 class="mb-3">${curso.moeda} ${curso.preco.toFixed(2).replace('.', ',')}</h4>` :
            `<h4 class="mb-3">${curso.moeda} ${curso.preco.toFixed(2).replace('.', ',')}</h4>`;

        modalBody.innerHTML = `
            <div class="row">
                <div class="col-md-6 text-center">
                    <img src="${curso.imagem_principal}" class="img-fluid rounded modal-product-image" alt="${curso.nome_produto}">
                </div>
                <div class="col-md-6">
                    <p>${curso.descricao_longa || curso.descricao_curta}</p>
                    ${precoHTML}
                    ${beneficiosHTML}
                    ${publicoAlvoHTML}
                </div>
            </div>
        `;
    }

    if (productModal) {
        productModal.addEventListener('show.bs.modal', function (event) {
            const button = event.relatedTarget;
            const productId = button?.getAttribute('data-product-id');
            if (productId) {
                const curso = allCursos.find(p => p.id_hotmart === productId);
                if (curso) {
                    preencherModal(curso);
                }
            }
        });
    }

    searchForm.addEventListener('submit', (e) => e.preventDefault());
    searchInput.addEventListener('keyup', applyFilters);
    sortBySelect.addEventListener('change', applyFilters);
    if (sidebar) {
        sidebar.addEventListener('change', (e) => {
            if (e.target.type === 'checkbox' || e.target.type === 'radio') {
                applyFilters();
            }
        });
    }

    carregarCursos();
});