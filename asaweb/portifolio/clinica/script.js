
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIconOpen = document.getElementById('menu-icon-open');
  const menuIconClose = document.getElementById('menu-icon-close');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (menuButton && mobileMenu && menuIconOpen && menuIconClose) {
    menuButton.addEventListener('click', () => {
      const isExpanded = menuButton.getAttribute('aria-expanded') === 'true' || false;
      menuButton.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
      menuIconOpen.classList.toggle('hidden');
      menuIconClose.classList.toggle('hidden');
    });

    // Close mobile menu when a link is clicked
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (menuButton.getAttribute('aria-expanded') === 'true') {
            menuButton.setAttribute('aria-expanded', 'false');
            mobileMenu.classList.add('hidden');
            menuIconOpen.classList.remove('hidden');
            menuIconClose.classList.add('hidden');
        }
      });
    });
  }

  // Contact form handling
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');

  if (contactForm && formFeedback) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault(); 

      const formData = new FormData(contactForm);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');

      if (!name || !email || !message) {
        formFeedback.textContent = 'Por favor, preencha todos os campos obrigatórios.';
        formFeedback.style.color = 'red';
        return;
      }
      
      console.log('Formulário enviado:');
      console.log('Nome:', name);
      console.log('Email:', email);
      console.log('Telefone:', formData.get('phone'));
      console.log('Mensagem:', message);

      formFeedback.textContent = 'Obrigado pela sua mensagem! Entraremos em contato em breve.';
      formFeedback.style.color = 'green';
      contactForm.reset(); 
      
      setTimeout(() => {
        formFeedback.textContent = '';
      }, 5000);
    });
  }

  // Set current year in footer
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear().toString();
  }

  // Active navigation link highlighting
  const currentPath = window.location.pathname;
  const currentPageFilename = currentPath.substring(currentPath.lastIndexOf('/') + 1);
  const effectiveCurrentPage = (currentPageFilename === '' || currentPageFilename === 'index.html') ? 'index.html' : currentPageFilename;

  // Desktop nav links
  const desktopNavLinksQuery = document.querySelectorAll('header nav.hidden.md\\:flex a');
  desktopNavLinksQuery.forEach(link => {
      const linkHref = link.getAttribute('href');
      const linkPage = linkHref.substring(linkHref.lastIndexOf('/') + 1);
      const effectiveLinkPage = (linkPage === '' || linkPage === 'index.html') ? 'index.html' : linkPage;

      // Reset to base inactive style first
      link.classList.remove('text-blue-700', 'font-semibold', 'text-blue-600', 'hover:text-blue-700');
      link.classList.add('text-gray-600', 'hover:text-blue-600', 'font-medium');

      if (effectiveLinkPage === effectiveCurrentPage) {
          link.classList.remove('text-gray-600', 'hover:text-blue-600');
          link.classList.add('text-blue-700', 'font-semibold');
      }
  });

  // Mobile nav links
  const mobileNavLinksInMenuQuery = document.querySelectorAll('#mobile-menu nav a.mobile-nav-link');
  mobileNavLinksInMenuQuery.forEach(link => {
      const linkHref = link.getAttribute('href');
      const linkPage = linkHref.substring(linkHref.lastIndexOf('/') + 1);
      const effectiveLinkPage = (linkPage === '' || linkPage === 'index.html') ? 'index.html' : linkPage;
      
      // Reset to base inactive mobile style first
      link.classList.remove('text-blue-700', 'bg-blue-100', 'text-blue-600', 'bg-gray-100');
      link.classList.add('text-gray-700', 'hover:text-blue-600', 'hover:bg-gray-100');

      if (effectiveLinkPage === effectiveCurrentPage) {
          link.classList.remove('text-gray-700', 'hover:text-blue-600', 'hover:bg-gray-100');
          link.classList.add('text-blue-700', 'bg-blue-100');
      }
  });

});
