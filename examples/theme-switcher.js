// ===== THEME SWITCHER - Debug Version =====

class ThemeSwitcher {
  constructor() {
    this.currentTheme = 'material';
    this.themeLink = null;
    this.init();
  }
  
  init() {
    // Encontrar ou criar o link do tema
    this.themeLink = document.getElementById('theme-css');
    
    if (!this.themeLink) {
      console.warn('⚠️ Theme link not found, creating one...');
      this.themeLink = document.createElement('link');
      this.themeLink.id = 'theme-css';
      this.themeLink.rel = 'stylesheet';
      this.themeLink.href = '../themes/material/dist/material-theme.css';
      document.head.appendChild(this.themeLink);
    }
    
    console.log('🎨 ThemeSwitcher initialized');
    console.log('📎 Theme link:', this.themeLink);
  }
  
  async changeTheme(themeName) {
    console.log(`🔄 Changing to theme: ${themeName}`);
    
    try {
      // Verificar se o arquivo existe primeiro
      const themeUrl = `../themes/${themeName}/dist/${themeName}-theme.css`;
      const exists = await this.checkFileExists(themeUrl);
      
      if (!exists) {
        throw new Error(`Theme file not found: ${themeUrl}`);
      }
      
      // Aplicar o tema
      this.themeLink.href = themeUrl;
      this.currentTheme = themeName;
      
      // Aguardar carregamento
      await this.waitForLoad();
      
      console.log(`✅ Theme changed to: ${themeName}`);
      this.updateUI();
      
    } catch (error) {
      console.error('❌ Error changing theme:', error);
      alert(`Erro ao trocar tema: ${error.message}`);
    }
  }
  
  async checkFileExists(url) {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      return response.ok;
    } catch {
      return false;
    }
  }
  
  waitForLoad() {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error('Theme load timeout'));
      }, 5000);
      
      this.themeLink.onload = () => {
        clearTimeout(timeout);
        resolve();
      };
      
      this.themeLink.onerror = () => {
        clearTimeout(timeout);
        reject(new Error('Theme load error'));
      };
    });
  }
  
  updateUI() {
    // Atualizar indicadores visuais
    const themeIndicator = document.getElementById('current-theme');
    const hrefIndicator = document.getElementById('current-href');
    
    if (themeIndicator) themeIndicator.textContent = this.currentTheme;
    if (hrefIndicator) hrefIndicator.textContent = this.themeLink.href;
    
    // Adicionar classe ao body para CSS específico
    document.body.className = document.body.className.replace(/theme-\w+/g, '');
    document.body.classList.add(`theme-${this.currentTheme}`);
  }
  
  getCurrentTheme() {
    return this.currentTheme;
  }
}

// Instância global
const themeSwitcher = new ThemeSwitcher();

// Funções globais para compatibilidade
function changeTheme(theme) {
  themeSwitcher.changeTheme(theme);
}

function getCurrentTheme() {
  return themeSwitcher.getCurrentTheme();
}