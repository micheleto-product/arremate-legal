//  ----------------------------- MENU ----------------------------------------

// Função auxiliar para verificar se estamos em desktop
function isDesktop() {
    return window.matchMedia("(min-width: 769px)").matches;
}

// Função para abrir/fechar a sidebar
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
    document.body.classList.toggle('no-scroll');

    const sidebarCoursesItem = document.getElementById('sidebarCoursesItem');
    const sidebarCoursesSubmenu = document.getElementById('sidebarCoursesSubmenu');

    if (!sidebar.classList.contains('open')) { 
        if (!isDesktop()) { 
            if (sidebarCoursesItem) sidebarCoursesItem.classList.remove('active');
            if (sidebarCoursesSubmenu) sidebarCoursesSubmenu.classList.remove('open');
        }
    } else { 
        if (isDesktop()) { 
            if (sidebarCoursesItem) sidebarCoursesItem.classList.add('active');
            if (sidebarCoursesSubmenu) sidebarCoursesSubmenu.classList.add('open');
        } else { 
            if (sidebarCoursesItem) sidebarCoursesItem.classList.remove('active');
            if (sidebarCoursesSubmenu) sidebarCoursesSubmenu.classList.remove('open');
        }
    }
}


// Nova função para lidar com o clique no item "Cursos" do header
function handleCoursesClick() {
    const sidebar = document.getElementById('sidebar');
    const sidebarCoursesItem = document.getElementById('sidebarCoursesItem');
    const sidebarCoursesSubmenu = document.getElementById('sidebarCoursesSubmenu');

    toggleMenu(); 

    if (sidebar.classList.contains('open')) {
        if (isDesktop()) {
            if (sidebarCoursesItem) sidebarCoursesItem.classList.add('active');
            if (sidebarCoursesSubmenu) sidebarCoursesSubmenu.classList.add('open');
        } else {
            if (sidebarCoursesItem) sidebarCoursesItem.classList.remove('active');
            if (sidebarCoursesSubmenu) sidebarCoursesSubmenu.classList.remove('open');
        }
    }
}


// Script da Barra de Progresso de Leitura (mantido)
document.addEventListener("DOMContentLoaded", function() {
    const progressBar = document.querySelector('.header-progress-bar'); 
    const progressContainer = document.querySelector('.header-progress-container'); 
    const content = document.querySelector('body');

    if (progressBar && content) {
        window.addEventListener('scroll', () => {
            let maxScrollTop = content.scrollHeight - window.innerHeight;
            if (maxScrollTop === 0) {
                progressBar.style.width = '0%';
                return;
            }
            let progress = (window.scrollY / maxScrollTop) * 100;
            progressBar.style.width = progress + '%';
        });

        window.dispatchEvent(new Event('scroll'));
    }

    // Fechar a sidebar ao clicar em um link interno (exceto o toggle de sub-menu)
    const sidebar = document.getElementById('sidebar'); 
    const sidebarLinks = sidebar.querySelectorAll('.sidebar-menu-item:not(.has-submenu) a, .sidebar-submenu-item a');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            setTimeout(() => {
                sidebar.classList.remove('open');
                document.body.classList.remove('no-scroll');
            }, 100); 
        });
    });

    // Lógica para o Accordion de Cursos (apenas para mobile)
    const submenuToggle = document.querySelector('.sidebar-submenu-toggle');
    const sidebarCoursesItem = document.getElementById('sidebarCoursesItem');
    const sidebarCoursesSubmenu = document.getElementById('sidebarCoursesSubmenu');

    if (submenuToggle && sidebarCoursesItem && sidebarCoursesSubmenu) {
        submenuToggle.addEventListener('click', function(e) {
            if (!isDesktop()) { 
                e.preventDefault(); 
                sidebarCoursesItem.classList.toggle('active');
                sidebarCoursesSubmenu.classList.toggle('open');
            } else {
                e.preventDefault(); 
            }
        });
    }

    window.addEventListener('resize', () => {
        if (sidebar.classList.contains('open')) {
            if (isDesktop()) {
                if (sidebarCoursesItem) sidebarCoursesItem.classList.add('active');
                if (sidebarCoursesSubmenu) sidebarCoursesSubmenu.classList.add('open');
            } else {
                if (sidebarCoursesItem) sidebarCoursesItem.classList.remove('active');
                if (sidebarCoursesSubmenu) sidebarCoursesSubmenu.classList.remove('open');
            }
        }
    });

    if (sidebar.classList.contains('open') && isDesktop()) {
        if (sidebarCoursesItem) sidebarCoursesItem.classList.add('active');
        if (sidebarCoursesSubmenu) sidebarCoursesSubmenu.classList.add('open');
    }
});

//  ----------------------------- MENU ----------------------------------------