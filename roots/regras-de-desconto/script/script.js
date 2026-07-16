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

// --------------------------- Formulário ----------------------------------
        const form = document.getElementById('discountForm');
        const successMessage = document.getElementById('formSuccessMessage');

        form.addEventListener('submit', async (e) => {
            e.preventDefault(); // Impede o envio padrão do formulário

            const formData = new FormData(form); // Coleta os dados do formulário
            try {
                // Envia os dados para o endpoint do Formspree
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json' // Garante que a resposta seja JSON
                    }
                });

                if (response.ok) {
                    form.reset(); // Limpa todos os campos do formulário
                    successMessage.style.display = 'block'; // Mostra a mensagem de sucesso
                    form.style.display = 'none'; // Opcional: Esconde o formulário para evitar múltiplos envios
                } else {
                    // Trata erros de envio do formulário
                    alert('Houve um erro ao enviar seu formulário. Por favor, tente novamente.');
                }
            } catch (error) {
                // Trata erros de conexão ou rede
                console.error('Erro no envio do formulário:', error);
                alert('Houve um erro de conexão. Por favor, tente novamente mais tarde.');
            }
        });

        // --------------------------- Formulário ----------------------------------

// -------------------------------- Footer --------------------------------

document.addEventListener('DOMContentLoaded', function() {
            const backToTopLink = document.getElementById('backToTop');

            // Verifica se o link foi encontrado para evitar erros
            if (backToTopLink) {
                backToTopLink.addEventListener('click', function(e) {
                    e.preventDefault(); // Impede o comportamento padrão do link
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            }
        });


// -------------------------------- Footer --------------------------------