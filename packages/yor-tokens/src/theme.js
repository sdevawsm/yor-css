// Yor CSS Theme Manager
class YorThemeManager {
  constructor() {
    this.themeKey = 'yor-theme';
    this.systemThemeKey = 'yor-system-theme';
    this.init();
  }

  init() {
    // Verifica se há um tema salvo
    const savedTheme = localStorage.getItem(this.themeKey);
    const useSystemTheme = localStorage.getItem(this.systemThemeKey) === 'true';

    if (savedTheme && !useSystemTheme) {
      this.setTheme(savedTheme);
    } else {
      // Se não houver tema salvo ou usar tema do sistema, detecta preferência do sistema
      this.setSystemTheme();
    }

    // Adiciona listener para mudanças no tema do sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (localStorage.getItem(this.systemThemeKey) === 'true') {
        this.setSystemTheme();
      }
    });
  }

  setTheme(theme) {
    if (theme === 'system') {
      this.setSystemTheme();
      localStorage.setItem(this.systemThemeKey, 'true');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem(this.themeKey, theme);
      localStorage.setItem(this.systemThemeKey, 'false');
    }

    // Dispara evento de mudança de tema
    window.dispatchEvent(new CustomEvent('yor-theme-change', { 
      detail: { theme: theme === 'system' ? this.getSystemTheme() : theme }
    }));
  }

  setSystemTheme() {
    const systemTheme = this.getSystemTheme();
    document.documentElement.setAttribute('data-theme', systemTheme);
    localStorage.setItem(this.themeKey, 'system');
    localStorage.setItem(this.systemThemeKey, 'true');
  }

  getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  getCurrentTheme() {
    const useSystemTheme = localStorage.getItem(this.systemThemeKey) === 'true';
    if (useSystemTheme) {
      return this.getSystemTheme();
    }
    return localStorage.getItem(this.themeKey) || 'light';
  }

  toggleTheme() {
    const currentTheme = this.getCurrentTheme();
    this.setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  }
}

// Exporta uma instância única do gerenciador de temas
window.yorTheme = new YorThemeManager();

// Adiciona método global para troca de tema
window.changeTheme = (theme) => {
  window.yorTheme.setTheme(theme);
};

// Adiciona método global para alternar tema
window.toggleTheme = () => {
  window.yorTheme.toggleTheme();
}; 