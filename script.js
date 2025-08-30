// JS livre. Mantido mínimo para: menu mobile, link ativo e ano no rodapé.
(function(){
  const current = document.body.dataset.page;
  document.querySelectorAll('.site-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if ((current === 'sobre' && href.includes('index')) ||
        (current === 'formacao' && href.includes('formacao')) ||
        (current === 'portfolio' && href.includes('portfolio')) ||
        (current === 'contato' && href.includes('contato'))) {
      a.classList.add('active');
    }
  });

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('menu');
  if (toggle && menu){
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  const form = document.querySelector('form.contact-form');
  if (form){
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // visual only
      alert('Formulário enviado (simulado).');
    });
  }
})();
