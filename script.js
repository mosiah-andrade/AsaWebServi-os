document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.template-carousel');
    const items = document.querySelectorAll('.template-item');
    const scrollSpeed = 2; // Velocidade de rolagem (pixels por frame)

    // Clonar os itens para criar o efeito de rolagem infinita
    items.forEach(item => {
        const clone = item.cloneNode(true);
        carousel.appendChild(clone);
    });

    // Função de rolagem automática
    function autoScroll() {
        carousel.scrollLeft += scrollSpeed; // Incrementa a posição de rolagem

        // Quando atingir o final, retorna ao início
        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
            carousel.scrollLeft = 0;
        }

        requestAnimationFrame(autoScroll); // Loop contínuo
    }

    // Ajustar estilos de rolagem no container
    carousel.style.display = 'flex';
    carousel.style.overflow = 'hidden';

    // Iniciar a rolagem automática
    requestAnimationFrame(autoScroll);
});
