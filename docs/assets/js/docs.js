// Yor CSS Documentation JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Navegação ativa
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.yor-docs-nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath || 
            (currentPath.includes(link.getAttribute('href')) && link.getAttribute('href') !== '/')) {
            link.classList.add('active');
        }
    });

    // Navegação suave para âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Atualiza a URL sem recarregar a página
                history.pushState(null, null, this.getAttribute('href'));
            }
        });
    });

    // Highlight do código
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        // Adiciona classes para syntax highlighting
        block.classList.add('language-html');
        // Escapa caracteres HTML
        block.innerHTML = block.innerHTML
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    });

    // Menu mobile
    const menuToggle = document.createElement('button');
    menuToggle.className = 'yor-docs-menu-toggle';
    menuToggle.innerHTML = '<span></span><span></span><span></span>';
    document.querySelector('.yor-docs-header-content').prepend(menuToggle);

    menuToggle.addEventListener('click', () => {
        document.querySelector('.yor-docs-sidebar').classList.toggle('active');
    });

    // Fecha o menu ao clicar fora
    document.addEventListener('click', (e) => {
        const sidebar = document.querySelector('.yor-docs-sidebar');
        const menuToggle = document.querySelector('.yor-docs-menu-toggle');
        
        if (sidebar.classList.contains('active') && 
            !sidebar.contains(e.target) && 
            !menuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    });

    // Copiar código
    const copyButtons = document.createElement('button');
    copyButtons.className = 'yor-docs-copy-button';
    copyButtons.textContent = 'Copiar';
    
    document.querySelectorAll('.yor-docs-example-code').forEach(example => {
        const button = copyButtons.cloneNode(true);
        example.appendChild(button);
        
        button.addEventListener('click', () => {
            const code = example.querySelector('code').textContent;
            navigator.clipboard.writeText(code).then(() => {
                button.textContent = 'Copiado!';
                setTimeout(() => {
                    button.textContent = 'Copiar';
                }, 2000);
            });
        });
    });

    // Tema escuro
    const themeToggle = document.createElement('button');
    themeToggle.className = 'yor-docs-theme-toggle';
    themeToggle.innerHTML = '🌙';
    document.body.appendChild(themeToggle);

    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    function setTheme(isDark) {
        document.body.classList.toggle('yor-docs-dark', isDark);
        themeToggle.innerHTML = isDark ? '☀️' : '🌙';
        localStorage.setItem('yor-docs-theme', isDark ? 'dark' : 'light');
    }

    // Verifica preferência salva
    const savedTheme = localStorage.getItem('yor-docs-theme');
    if (savedTheme) {
        setTheme(savedTheme === 'dark');
    } else {
        setTheme(prefersDarkScheme.matches);
    }

    themeToggle.addEventListener('click', () => {
        setTheme(!document.body.classList.contains('yor-docs-dark'));
    });

    // Atualiza tema quando a preferência do sistema muda
    prefersDarkScheme.addEventListener('change', (e) => {
        if (!localStorage.getItem('yor-docs-theme')) {
            setTheme(e.matches);
        }
    });

    // Responsividade da tabela de conteúdos
    const toc = document.querySelector('.yor-docs-toc');
    if (toc) {
        const tocObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('id');
                        document.querySelectorAll('.yor-docs-toc a').forEach(link => {
                            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                        });
                    }
                });
            },
            { threshold: 0.5 }
        );

        document.querySelectorAll('.yor-docs-section[id]').forEach(section => {
            tocObserver.observe(section);
        });
    }
}); 