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


