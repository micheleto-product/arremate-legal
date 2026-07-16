// --------------------------- Menu ----------------------------------

function toggleSubMenu(className) {
    const subMenu = document.querySelector(`.${className}`);
    const allSubMenus = document.querySelectorAll('.sub-menu-produtos');

    allSubMenus.forEach(menu => {
      if (menu !== subMenu) {
        menu.style.display = 'none';
      }
    });

    subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
}
    
function toggleMenu() {
      const sidebar = document.getElementById('sidebar');
      
      if (sidebar.style.width === '0px' || !sidebar.style.width) {
        sidebar.style.width = '33.33%';
      } else {
        sidebar.style.width = '0';
      }
} 
    document.addEventListener("DOMContentLoaded", function () {
      const categoryButtons = document.querySelectorAll(".category-button");
      const products = document.querySelectorAll(".product");

      categoryButtons.forEach((button) => {
          button.addEventListener("click", function () {
              categoryButtons.forEach((btn) => btn.classList.remove("selected"));
              button.classList.add("selected");

              const selectedCategory = button.getAttribute("data-category");

              products.forEach((product) => {
                  product.style.display = "block"; // Exibe todos os produtos inicialmente

                  if (selectedCategory !== "todos" && !product.classList.contains(selectedCategory)) {
                      product.style.display = "none"; // Esconde produtos que não pertencem à categoria selecionada
                  }
              });
          });
      });
 });
// --------------------------- Menu ----------------------------------

// -------------------- Carregamento da tela --------------------
const progressBar = document.querySelector('.progress-bar');
const content = document.querySelector('body'); // Ou o elemento que contém todo o seu conteúdo

window.addEventListener('scroll', () => {
    let maxScrollTop = content.scrollHeight - window.innerHeight;
    let progress = window.scrollY / maxScrollTop;
    progressBar.style.width = progress * 100 + '%';
});
// -------------------- Carregamento da tela --------------------

// -------------- Carrossel / Hero ---------------

document.addEventListener('DOMContentLoaded', () => {
    // Carrossel de Categorias
    const categoryCarouselTrack = document.getElementById('categoryCarouselTrack');
    const categoryLeftArrow = document.querySelector('.category-left-arrow');
    const categoryRightArrow = document.querySelector('.category-right-arrow');

    let categoryCarouselCurrentIndex = 0;
    const categoryCardsPerPage = 3; // Quantidade de cards visíveis por vez no carrossel de categorias

    // Dados para o carrossel de categorias
    // Adicione mais objetos aqui para ter mais cards no carrossel
    const allCategoryCarouselCards = [
        // Os 3 primeiros já estão no HTML para serem carregados inicialmente,
        // mas o JS irá "gerenciá-los" se houver mais dados aqui.
        { category: 'leiloes', title: 'Leilões', subtitle: 'Segmentos de Leilões de Imóveis', icon: '../noticias/img/main/section-hero/icon-leiloes.png' },
        { category: 'guia', title: 'Guia', subtitle: 'Guia para arrematar imóveis', icon: '../noticias/img/main/section-hero/icon-guia.png' },
        { category: 'mercado', title: 'Mercado', subtitle: 'Sobre o mercado de Leilões de Imóveis', icon: '../noticias/img/main/section-hero/icon-mercado.png' },
        { category: 'lifestyle', title: 'Lifestyle', subtitle: 'Imóveis que combinam com você', icon: '../noticias/img/main/section-hero/icon-lifestyle.png' },
        { category: 'lugares', title: 'Lugares', subtitle: 'Imóveis em diversas regiões', icon: '../noticias/img/main/section-hero/icon-lugares.png' },
        { category: 'glossario', title: 'Glossário', subtitle: 'Dicionário do leilão imobiliário', icon: '../noticias/img/main/section-hero/icon-glossario.png' },
    ];

    // Carrossel de Categorias - Exibir e Esconder Cards
    function updateCategoryCarousel() {
        // Limpa os cards existentes no track para adicionar os visíveis
        categoryCarouselTrack.innerHTML = '';
        const visibleCards = allCategoryCarouselCards.slice(categoryCarouselCurrentIndex, categoryCarouselCurrentIndex + categoryCardsPerPage);

        visibleCards.forEach(cardData => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('category-card');
            cardElement.setAttribute('data-category', cardData.category);
            cardElement.innerHTML = `
                <div class="category-card-icon">
                    <img src="${cardData.icon}" alt="Ícone ${cardData.title}"> 
                </div>
                <h2>${cardData.title}</h2>
                <p>${cardData.subtitle}</p>
                <button class="category-btn-noticias">Notícias</button>
            `;
            categoryCarouselTrack.appendChild(cardElement);
        });

        // Habilitar/Desabilitar setas do carrossel de categorias
        categoryLeftArrow.disabled = categoryCarouselCurrentIndex === 0;
        categoryRightArrow.disabled = categoryCarouselCurrentIndex >= allCategoryCarouselCards.length - categoryCardsPerPage;
    }

    categoryLeftArrow.addEventListener('click', () => {
        if (categoryCarouselCurrentIndex > 0) {
            categoryCarouselCurrentIndex--;
            updateCategoryCarousel();
        }
    });

    categoryRightArrow.addEventListener('click', () => {
        if (categoryCarouselCurrentIndex < allCategoryCarouselCards.length - categoryCardsPerPage) {
            categoryCarouselCurrentIndex++;
            updateCategoryCarousel();
        }
    });

    // Inicializa o carrossel de categorias
    updateCategoryCarousel();

    // Se houver outras lógicas de JS na sua página, adicione-as aqui,
    // mas evite variáveis e seletores globais que possam conflitar.
});