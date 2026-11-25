
// Navegação mobile, filtros, animações de entrada, galeria e botão voltar ao topo.
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  navLinks.classList.toggle('is-open', open);
});

navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Abrir menu');
  navLinks.classList.remove('is-open');
}));

// Cards individuais transcritos da placa do estabelecimento. Troque as fotos
// ilustrativas por fotografias próprias quando estiverem disponíveis.
const menuItems = [
  { name: 'Frango', category: 'tradicionais', description: 'Frango dourado na churrasqueira, preparado na hora.', image: 'https://img.magnific.com/fotos-premium/espetos-de-frango-em-palitos-de-madeira_84130-7062.jpg?semt=ais_hybrid&w=1200&q=90', alt: 'Espetos de frango grelhados em palitos de madeira' },
  { name: 'Carne', category: 'tradicionais', description: 'Carne grelhada na brasa com o sabor clássico do churrasco.', image: 'https://i.pinimg.com/originals/53/46/08/534608006dc7065eb50853b7072cbac4.jpg', alt: 'Espeto de carne assado na churrasqueira' },
  { name: 'Linguiça', category: 'tradicionais', description: 'Linguiça tostada na churrasqueira até ficar douradinha.', image: 'https://img.cdndsgni.com/preview/10072690-m.jpg', alt: 'Linguiça grelhada no espeto' },
  { name: 'Tulipa', category: 'tradicionais', description: 'Tulipa de frango assada na brasa até ficar bem dourada.', image: 'https://i.pinimg.com/originals/e5/ea/da/e5eada7b1bbd041cc69977af8adfbc19.jpg', alt: 'Tulipas de frango assadas na churrasqueira' },
  { name: 'Queijo coalho', category: 'tradicionais', description: 'Queijo coalho dourado, um clássico para acompanhar a brasa.', image: 'https://static.itdg.com.br/images/640-400/aefec7ca405f4e24942f089b26fb15cf/queijo-coalho-na-airfryer.jpg', alt: 'Queijo coalho dourado' },
  { name: 'Coração', category: 'tradicionais', description: 'Coração de frango na brasa, um clássico do churrasco.', image: 'https://www.receitasnestle.com.br/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/bfd0f5af81d9d43fa66a8970da90ffc5.jpeg?_itok=YqzQ9ZNX', alt: 'Corações de frango preparados no espeto' },
  { name: 'Lombo suíno', category: 'tradicionais', description: 'Lombo suíno assado na brasa, com exterior dourado.', image: 'https://chefpvshow.com.br/wp-content/uploads/2026/03/espetinho-suino-com-abacaxi-1-1-1024x683.png', alt: 'Espetinho de lombo suíno assado' },
  { name: 'Pão de alho', category: 'acompanhamentos', description: 'Pão de alho tostado na brasa para acompanhar seu espeto.', image: 'https://static.itdg.com.br/images/640-400/bdf5859e802e5edf6c66d25f4927b2bc/shutterstock-1658158945.jpg', alt: 'Pão de alho tostado' },
  { name: 'Kafta com queijo', category: 'especiais', description: 'Kafta com queijo, combinação especial listada no cardápio da casa.', image: 'https://conteudo.imguol.com.br/c/entretenimento/b5/2021/12/30/kafta-recheada---vai-ter-churras-1640900824021_v2_750x421.jpg', alt: 'Kafta recheada com queijo' },
  { name: 'Misto: carne e linguiça', category: 'especiais', description: 'Carne e linguiça reunidas em uma combinação feita na brasa.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB2VJbnL5eNRDTVO-9cenbschcrP9TUz21tKkmrl2m_VuaYRRF_Gc1xcnl&s=10', alt: 'Espeto misto de carne e linguiça' },
  { name: 'Misto: carne, frango e linguiça', category: 'especiais', description: 'Três sabores no mesmo misto: carne, frango e linguiça.', image: 'https://www.qdeliciaespeto.com.br/loja/wp-content/uploads/2016/10/misto.jpg', alt: 'Espeto misto de carne, frango e linguiça' },
  { name: 'Medalhão de carne', category: 'especiais', description: 'Medalhão preparado na brasa, listado entre as opções especiais.', image: 'https://comofazerespetinhos.com/wp-content/uploads/2026/02/espetinho-de-medalhao-com-bacon.webp', alt: 'Espetinho de medalhão de carne' },
  { name: 'Medalhão de frango', category: 'especiais', description: 'Medalhão de frango preparado na brasa, uma opção especial da casa.', image: 'https://www.bolonhaclub.com/files/2026/10/medalhao-frango-bacon-brasa.jpg', alt: 'Espetinho de medalhão de frango' }
];
const menuGrid = document.querySelector('.menu-grid');
document.querySelector('.filter-list').innerHTML = '<button class="filter-chip is-active" data-filter="todos" aria-pressed="true">Espetos da casa</button>';
document.querySelector('.gallery-section')?.remove();
document.querySelector('.feature-stamp')?.remove();
const sebastiaoPhoto = document.querySelector('.feature-photo img');
sebastiaoPhoto.src = 'https://images.unsplash.com/photo-1691410065039-25bdbb56c23b?auto=format&fit=crop&w=1600&q=88';
sebastiaoPhoto.alt = 'Carne e linguiça grelhando na churrasqueira';
document.querySelector('.feature-copy').innerHTML = `
  <p class="eyebrow"><span></span> NOSSA HISTÓRIA</p>
  <h2>UMA PAIXÃO DE 13 ANOS.<br><em>UM SONHO QUE VIROU CASA.</em></h2>
  <p>Meu nome é <strong>Sebastião Ferreira da Silva</strong> e sou churrasqueiro há 13 anos. Com o tempo, trabalhar com carnes deixou de ser apenas profissão e virou uma paixão de verdade.</p>
  <p>Depois de tantos anos aprendendo e aperfeiçoando meu trabalho, chegou a hora de realizar um sonho: ter meu próprio negócio. Assim nasceu a <strong>ESPETOS+QBOM</strong>, feita com muito esforço, dedicação e vontade de receber cada pessoa com carinho.</p>
  <p>Quero servir espetos preparados com capricho e compartilhar bons momentos à volta da brasa. Mais do que um negócio, este lugar carrega uma paixão que me acompanha há 13 anos.</p>
  <p class="story-signature">Com carinho,<br><strong>Sebastião Ferreira da Silva</strong></p>
  <a class="text-link" href="#localizacao">VENHA NOS CONHECER <span>↗</span></a>`;
menuGrid.innerHTML = menuItems.map((item, index) => `
  <article class="menu-card" data-category="${item.category}" data-reveal>
    <div class="menu-photo"><img src="${item.image}" alt="${item.alt}" loading="lazy"></div>
    <div class="menu-info"><div class="menu-title"><span>${String(index + 1).padStart(2, '0')}</span><h3>${item.name}</h3></div><p>${item.description}</p><div class="menu-foot"><span>${item.category === 'especiais' ? 'COMBINAÇÃO DA CASA' : item.category === 'acompanhamentos' ? 'PRA ACOMPANHAR' : 'ESPETO DA CASA'}</span><b>PREÇO NO LOCAL</b></div></div>
  </article>`).join('');
document.querySelector('.menu-disclaimer')?.remove();
document.querySelector('.footer-contact a')?.remove();
const paymentCell = document.querySelector('.contact-strip>div:last-child');
paymentCell.querySelector('span').textContent = 'FORMAS DE PAGAMENTO';
paymentCell.querySelector('p').outerHTML = '<div class="payment-methods"><div class="payment-logos"><span class="pix-brand"><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Logo%E2%80%94pix_powered_by_Banco_Central_(Brazil,_2020).svg" alt="Pix"></span><span class="card-brand mastercard"><i aria-hidden="true"></i>mastercard</span><span class="card-brand visa">VISA</span><span class="card-brand elo">elo</span></div><span class="payment-types">DÉBITO <b>·</b> CRÉDITO</span></div>';
const detailLabels = document.querySelectorAll('.detail-label');
detailLabels[0].insertAdjacentHTML('afterbegin', '<svg class="detail-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>');
detailLabels[1].insertAdjacentHTML('afterbegin', '<svg class="detail-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>');
const mapLink = document.querySelector('.map-card>a');
mapLink.classList.add('map-open-link');
document.querySelector('.contact-strip>div:first-child>span').insertAdjacentHTML('afterbegin', '<img class="contact-icon" src="https://cdn.simpleicons.org/whatsapp/25D366" alt="">');
document.querySelectorAll('.feature-copy p, .visit-inner p, .footer-bottom span').forEach(element => {
  if (element.textContent.includes('ESPETOS+QBOM')) {
    element.innerHTML = element.innerHTML.replaceAll('ESPETOS+QBOM', 'ESPETOS+<span class="brand-inline-plus">QBOM</span>');
  }
});
menuGrid.insertAdjacentHTML('beforebegin', '<aside class="promo-callout" data-reveal><span class="promo-spark">✳</span><div><strong>O MELHOR PREÇO DE ESPETO DA REGIÃO</strong><p>Venham conferir!</p></div><span class="promo-spark">✳</span></aside>');
const testimonialSamples = [
  { name: 'Mariana Oliveira', quote: 'Lugar muito bom! Os espetinhos são deliciosos, bem preparados e chegam quentinhos. Dá vontade de voltar sempre. Recomendo demais!' },
  { name: 'Rafael Martins', quote: 'Rapaz, que espetinho bom! Carne macia, bem temperada e aquele sabor de churrasco de verdade. Já virou parada certa quando bate a fome!' },
  { name: 'Camila Ferreira', quote: 'Adorei a experiência! Ambiente agradável, comida gostosa e aquele atendimento que faz a gente se sentir em casa. Voltarei com certeza!' },
  { name: 'Lucas Almeida', quote: 'Pra quem gosta de um bom churrasquinho, esse lugar é uma ótima escolha. Tudo muito saboroso e feito com capricho. Nota 10!' },
  { name: 'Juliana Costa', quote: 'Fui conhecer e gostei muito! Os espetinhos são muito gostosos e o tempero é sensacional. Já estou querendo voltar para experimentar outros sabores.' },
  { name: 'Felipe Rodrigues', quote: 'Sabe aquele lugar que você conhece e já quer voltar? É esse! Espetinhos bem feitos, saborosos e com aquele gostinho de churrasco que a gente ama.' },
  { name: 'Patrícia Santos', quote: 'Uma ótima opção para sair com a família ou encontrar os amigos. Comida gostosa, clima agradável e muita qualidade. Super recomendo!' },
  { name: 'André Carvalho', quote: 'Muito bom mesmo! Dá pra perceber o cuidado no preparo. O sabor é incrível e o espetinho é daqueles que acabam rápido porque dá vontade de pedir mais!' },
  { name: 'Beatriz Nascimento', quote: 'Gostei bastante! Tudo muito saboroso e bem preparado. É aquele tipo de lugar que vale a pena conhecer e indicar para os amigos.' },
  { name: 'Eduardo Ribeiro', quote: 'Churrasquinho de qualidade, bom atendimento e muito sabor! Uma ótima escolha para quem quer comer bem e aproveitar um momento agradável.' }
];
const reviewerPortraits = [
  'https://images.unsplash.com/photo-1757254315866-6987b8f9b844?auto=format&fit=crop&crop=faces&w=220&q=82',
  'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&crop=faces&w=220&q=82',
  'https://images.unsplash.com/photo-1642026981430-a048bd43afd1?auto=format&fit=crop&crop=faces&w=220&q=82',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&crop=faces&w=220&q=82',
  'https://images.unsplash.com/photo-1595380785068-8608441faa8e?auto=format&fit=crop&crop=faces&w=220&q=82',
  'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&crop=faces&w=220&q=82',
  'https://images.unsplash.com/photo-1599566219227-2efe0c9b7f5f?auto=format&fit=crop&crop=faces&w=220&q=82',
  'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&crop=faces&w=220&q=82',
  'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&crop=faces&w=220&q=82',
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&crop=faces&w=220&q=82'
];
const reviewSlides = [];
for (let i = 0; i < testimonialSamples.length; i += 3) {
  const cards = testimonialSamples.slice(i, i + 3).map(review => `<article class="review-card"><div class="review-stars" aria-label="Cinco estrelas">★★★★★</div><p>“${review.quote}”</p><div class="review-person"><span>${review.name}</span></div></article>`).join('');
  reviewSlides.push(`<div class="review-slide" role="group" aria-label="Grupo ${reviewSlides.length + 1} de ${Math.ceil(testimonialSamples.length / 3)}" ${reviewSlides.length ? 'hidden' : ''}>${cards}</div>`);
}
const reviewDots = reviewSlides.map((_, index) => `<button class="review-dot${index ? '' : ' is-active'}" type="button" aria-label="Mostrar grupo ${index + 1}" aria-pressed="${index === 0}"></button>`).join('');
document.querySelector('.visit-section').insertAdjacentHTML('beforebegin', `<section class="testimonials-section section-pad" aria-labelledby="testimonials-title"><div class="testimonials-inner" data-reveal><p class="eyebrow"><span></span> DEPOIMENTOS</p><h2 id="testimonials-title">O QUE ESTÃO <em>FALANDO.</em></h2><p class="brand-invitation">Quem já veio conta como foi a experiência. Veja alguns recados de clientes da ESPETOS+QBOM.</p><div class="review-carousel" aria-roledescription="carrossel" aria-label="Depoimentos de clientes"><div class="review-slides" aria-live="polite">${reviewSlides.join('')}</div><div class="review-controls"><button class="review-arrow" type="button" data-review-direction="-1" aria-label="Grupo anterior">←</button><div class="review-dots">${reviewDots}</div><button class="review-arrow" type="button" data-review-direction="1" aria-label="Próximo grupo">→</button></div></div></div></section>`);
const reviewCarousel = document.querySelector('.review-carousel');
const slides = [...reviewCarousel.querySelectorAll('.review-slide')];
const dots = [...reviewCarousel.querySelectorAll('.review-dot')];
let activeReviewSlide = 0;
let reviewTimer;
const showReviewSlide = index => {
  activeReviewSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, slideIndex) => { slide.hidden = slideIndex !== activeReviewSlide; });
  dots.forEach((dot, dotIndex) => {
    const active = dotIndex === activeReviewSlide;
    dot.classList.toggle('is-active', active);
    dot.setAttribute('aria-pressed', String(active));
  });
};
const stopReviewTimer = () => window.clearInterval(reviewTimer);
const startReviewTimer = () => {
  stopReviewTimer();
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    reviewTimer = window.setInterval(() => showReviewSlide(activeReviewSlide + 1), 6000);
  }
};
reviewCarousel.querySelectorAll('[data-review-direction]').forEach(button => button.addEventListener('click', () => {
  showReviewSlide(activeReviewSlide + Number(button.dataset.reviewDirection));
  startReviewTimer();
}));
dots.forEach((dot, index) => dot.addEventListener('click', () => { showReviewSlide(index); startReviewTimer(); }));
reviewCarousel.addEventListener('mouseenter', stopReviewTimer);
reviewCarousel.addEventListener('mouseleave', startReviewTimer);
reviewCarousel.addEventListener('focusin', stopReviewTimer);
reviewCarousel.addEventListener('focusout', event => { if (!reviewCarousel.contains(event.relatedTarget)) startReviewTimer(); });
startReviewTimer();
if (document.body.classList.contains('reveal-ready')) menuGrid.querySelectorAll('[data-reveal]').forEach(item => item.classList.add('is-revealed'));

document.querySelectorAll('.filter-chip').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.filter-chip').forEach(chip => {
    const active = chip === button;
    chip.classList.toggle('is-active', active);
    chip.setAttribute('aria-pressed', String(active));
  });
  const filter = button.dataset.filter;
  document.querySelectorAll('.menu-card').forEach(card => {
    card.classList.toggle('is-hidden', filter !== 'todos' && card.dataset.category !== filter);
  });
}));

const revealItems = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window) {
  document.body.classList.add('reveal-ready');
  const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-revealed');
      revealObserver.unobserve(entry.target);
    }
  }), { threshold: 0.12 });
  revealItems.forEach(item => revealObserver.observe(item));
} else revealItems.forEach(item => item.classList.add('is-revealed'));

const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox.querySelector('img');
const showLightbox = (src, alt) => {
  lightboxImage.src = src;
  lightboxImage.alt = alt;
  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  lightbox.querySelector('.lightbox-close').focus();
};
const closeLightbox = () => {
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
};
document.querySelectorAll('[data-lightbox]').forEach(item => item.addEventListener('click', () => {
  showLightbox(item.dataset.lightbox, item.querySelector('img').alt);
}));
document.querySelectorAll('.menu-photo img').forEach(img => {
  img.tabIndex = 0;
  img.setAttribute('role', 'button');
  img.setAttribute('aria-label', `Ampliar foto: ${img.alt}`);
  img.addEventListener('click', () => showLightbox(img.currentSrc || img.src, img.alt));
  img.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      showLightbox(img.currentSrc || img.src, img.alt);
    }
  });
});
lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', event => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && lightbox.classList.contains('is-open')) closeLightbox(); });

const backTop = document.querySelector('.back-top');
window.addEventListener('scroll', () => backTop.classList.toggle('is-visible', window.scrollY > 500), { passive: true });
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
document.querySelector('#year').textContent = new Date().getFullYear();
