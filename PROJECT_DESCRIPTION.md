# Yor CSS - Modular Design System

## 📋 Visão Geral

Yor CSS é uma biblioteca CSS modular baseada em **Design Tokens** que permite criar interfaces com diferentes design systems (Material Design, Fluent Design, Cupertino, etc.) mantendo **zero acoplamento** entre módulos.

## 🏗️ Estrutura do Projeto

```
yor-css/
├── 📁 packages/                    # Módulos independentes
│   ├── yor-tokens/                 # Design tokens base
│   ├── yor-buttons/                # Sistema de botões
│   ├── yor-cards/                  # Sistema de cards
│   ├── yor-containers/             # Sistema de containers
│   ├── yor-spacing/                # Utilitários de espaçamento
│   └── yor-typography/             # Sistema tipográfico
├── 📁 themes/                      # Temas de aparência
│   ├── fluent/                     # Microsoft Fluent Design
│   ├── material/                   # Google Material Design
│   ├── cupertino/                  # Apple Human Interface
│   └── custom/                     # Temas personalizados
├── 📁 examples/                    # Exemplos de uso
├── 📁 scripts/                     # Scripts de build
└── 📁 dist/                        # Builds finais
```

## 🧩 Arquitetura dos Módulos

### 1. **Yor Tokens** (Base obrigatória)
```scss
// Define variáveis CSS customizáveis
:root {
  --yor-color-primary: #3b82f6;
  --yor-space-4: 1rem;
  --yor-border-radius-md: 0.375rem;
  // ... mais tokens
}
```

**Responsabilidade:** Fornecer variáveis CSS que podem ser sobrescritas por temas.

### 2. **Módulos de Componentes**
```scss
// Cada módulo usa apenas tokens CSS
.yor-btn {
  padding: var(--yor-space-2) var(--yor-space-4);
  background-color: var(--yor-color-primary);
  border-radius: var(--yor-border-radius-md);
}
```

**Responsabilidade:** Implementar componentes usando apenas tokens CSS.

### 3. **Temas**
```scss
// Sobrescreve tokens para criar aparências diferentes
:root {
  --yor-color-primary: #0078d4;        /* Fluent blue */
  --yor-border-radius-md: 4px;         /* Fluent corners */
  --yor-font-family-sans: 'Segoe UI';  /* Fluent font */
}
```

**Responsabilidade:** Definir a aparência visual sobrescrevendo tokens.

## 🎨 Como Funciona o Sistema de Temas

### Fluxo de Carregamento:
1. **Tokens Base** → Define valores padrão
2. **Componentes** → Usa os tokens via `var(--token-name)`
3. **Tema** → Sobrescreve tokens com valores específicos

### Exemplo Prático:
```html
<!-- 1. Base tokens -->
<link rel="stylesheet" href="packages/yor-tokens/dist/yor-tokens.css">

<!-- 2. Componentes necessários -->
<link rel="stylesheet" href="packages/yor-buttons/dist/yor-buttons.css">

<!-- 3. Tema escolhido (sobrescreve tokens) -->
<link rel="stylesheet" href="themes/material/dist/material-theme.css">
```

## 🔧 Como Modificar e Estender

### ✅ Adicionando um Novo Componente

1. **Criar estrutura:**
```bash
mkdir packages/yor-inputs
mkdir packages/yor-inputs/src
mkdir packages/yor-inputs/dist
```

2. **Criar o componente usando tokens:**
```scss:packages/yor-inputs/src/yor-inputs.scss
.yor-input {
  padding: var(--yor-space-2) var(--yor-space-3);
  border: var(--yor-border-width) solid var(--yor-border-color);
  border-radius: var(--yor-border-radius-md);
  font-family: var(--yor-font-family-sans);
  font-size: var(--yor-font-size-base);
  background-color: var(--yor-color-surface);
  color: var(--yor-color-on-surface);
  transition: all var(--yor-transition-fast);
  
  &:focus {
    outline: 2px solid var(--yor-color-primary);
    outline-offset: 2px;
    border-color: var(--yor-color-primary);
  }
  
  &--error {
    border-color: var(--yor-color-danger, #ef4444);
  }
}
```

3. **Criar package.json:**
```json:packages/yor-inputs/package.json
{
  "name": "@yor-css/inputs",
  "version": "1.0.0",
  "description": "Yor CSS - Input components",
  "main": "dist/yor-inputs.css",
  "sass": "src/yor-inputs.scss",
  "scripts": {
    "build": "sass src/yor-inputs.scss dist/yor-inputs.css --style=compressed"
  }
}
```

4. **Adicionar ao build principal:**
```json:package.json
{
  "scripts": {
    "build:inputs": "sass packages/yor-inputs/src/yor-inputs.scss packages/yor-inputs/dist/yor-inputs.css --style=compressed",
    "build:packages": "npm run build:tokens && npm run build:buttons && npm run build:inputs"
  }
}
```

### ✅ Criando um Novo Tema

1. **Criar estrutura:**
```bash
mkdir themes/bootstrap
mkdir themes/bootstrap/dist
```

2. **Definir tokens do tema:**
```scss:themes/bootstrap/bootstrap-theme.scss
// ===== BOOTSTRAP THEME =====

:root {
  // === BOOTSTRAP COLORS ===
  --yor-color-primary: #0d6efd;
  --yor-color-primary-hover: #0b5ed7;
  --yor-color-primary-active: #0a58ca;
  --yor-color-primary-light: #cfe2ff;
  --yor-color-primary-dark: #084298;

  --yor-color-secondary: #6c757d;
  --yor-color-success: #198754;
  --yor-color-danger: #dc3545;
  --yor-color-warning: #ffc107;

  // === BOOTSTRAP TYPOGRAPHY ===
  --yor-font-family-sans: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --yor-font-weight-normal: 400;
  --yor-font-weight-bold: 700;

  // === BOOTSTRAP BORDERS ===
  --yor-border-radius-sm: 0.25rem;
  --yor-border-radius-md: 0.375rem;
  --yor-border-radius-lg: 0.5rem;
  --yor-border-color: #dee2e6;

  // === BOOTSTRAP SHADOWS ===
  --yor-shadow-sm: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  --yor-shadow-md: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  --yor-shadow-lg: 0 1rem 3rem rgba(0, 0, 0, 0.175);
}

// === BOOTSTRAP SPECIFIC OVERRIDES ===
.yor-btn {
  font-weight: var(--yor-font-weight-normal);
  
  &--primary {
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
  }
}
```

3. **Adicionar ao build:**
```json:package.json
{
  "scripts": {
    "build:bootstrap": "sass themes/bootstrap/bootstrap-theme.scss themes/bootstrap/dist/bootstrap-theme.css --style=compressed"
  }
}
```

### ✅ Adicionando Novos Tokens

1. **Adicionar ao yor-tokens:**
```scss:packages/yor-tokens/src/yor-tokens.scss
:root {
  // Novos tokens de animação
  --yor-animation-bounce: bounce 1s infinite;
  --yor-animation-pulse: pulse 2s infinite;
  --yor-animation-spin: spin 1s linear infinite;
  
  // Novos tokens de z-index
  --yor-z-dropdown: 1000;
  --yor-z-modal: 1050;
  --yor-z-tooltip: 1070;
  
  // Novos tokens de breakpoints
  --yor-breakpoint-xs: 0px;
  --yor-breakpoint-sm: 576px;
  --yor-breakpoint-md: 768px;
  --yor-breakpoint-lg: 992px;
  --yor-breakpoint-xl: 1200px;
}

// Definir keyframes
@keyframes bounce {
  0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
  40%, 43% { transform: translate3d(0, -30px, 0); }
  70% { transform: translate3d(0, -15px, 0); }
  90% { transform: translate3d(0, -4px, 0); }
}
```

2. **Usar nos componentes:**
```scss:packages/yor-buttons/src/yor-buttons.scss
.yor-btn {
  &--animated {
    animation: var(--yor-animation-pulse);
  }
  
  &:hover {
    z-index: var(--yor-z-dropdown);
  }
}
```

### ✅ Customizando Temas Existentes

1. **Estender tema existente:**
```scss:themes/custom/my-material-theme.scss
// Importar tema base do Material
@import '../material/material-theme.scss';

// Sobrescrever apenas o que quero mudar
:root {
  --yor-color-primary: #9c27b0;        /* Purple ao invés de blue */
  --yor-border-radius-md: 16px;        /* Mais arredondado */
}

// Adicionar customizações específicas
.yor-btn--primary {
  background: linear-gradient(45deg, var(--yor-color-primary), #e91e63);
  
  &:hover {
    background: linear-gradient(45deg, var(--yor-color-primary-hover), #c2185b);
  }
}
```

## 🚀 Scripts de Build

### Build Completo:
```bash
npm run build                    # Builda tudo
npm run build:packages          # Só os componentes
npm run build:themes            # Só os temas
```

### Build Individual:
```bash
npm run build:tokens            # Só tokens
npm run build:buttons           # Só botões
npm run build:material          # Só tema Material
```

### Desenvolvimento:
```bash
npm run watch                   # Watch mode para desenvolvimento
npm run dev                     # Alias para watch
```

## 📦 Como Usar

### Instalação Modular:
```bash
# Instalar apenas o que precisa
npm install @yor-css/tokens @yor-css/buttons
```

### Uso no HTML:
```html
<!-- Mínimo necessário -->
<link rel="stylesheet" href="node_modules/@yor-css/tokens/dist/yor-tokens.css">
<link rel="stylesheet" href="node_modules/@yor-css/buttons/dist/yor-buttons.css">

<!-- Adicionar tema -->
<link rel="stylesheet" href="themes/material/dist/material-theme.css">
```

### Uso com Sass:
```scss
// Importar apenas o que precisa
@import '@yor-css/tokens';
@import '@yor-css/buttons';
@import 'themes/material/material-theme';
```

## 🎯 Vantagens da Arquitetura

### ✅ **Zero Acoplamento**
- Cada módulo funciona independentemente
- Pode usar apenas os componentes necessários
- Fácil manutenção e debugging

### ✅ **Theming Flexível**
- Qualquer design system pode ser implementado
- Mudança de tema em runtime via JavaScript
- Temas podem ser combinados ou estendidos

### ✅ **Performance**
- Carregue apenas o CSS necessário
- Builds otimizados e comprimidos
- CSS custom properties são performáticas

### ✅ **Extensibilidade**
- Fácil adicionar novos componentes
- Fácil criar novos temas
- Sistema de tokens padronizado

## 🔄 Mudança de Tema em Runtime

```javascript
// Mudar tema dinamicamente
function changeTheme(themeName) {
  const themeLink = document.getElementById('theme-css');
  themeLink.href = `themes/${themeName}/dist/${themeName}-theme.css`;
}

// Ou modificar tokens diretamente
function customizeTheme() {
  document.documentElement.style.setProperty('--yor-color-primary', '#ff6b6b');
  document.documentElement.style.setProperty('--yor-border-radius-md', '20px');
}
```

## 📚 Exemplos de Uso

### Projeto Simples:
```html
<!-- Só botões com tema Material -->
<link rel="stylesheet" href="packages/yor-tokens/dist/yor-tokens.css">
<link rel="stylesheet" href="packages/yor-buttons/dist/yor-buttons.css">
<link rel="stylesheet" href="themes/material/dist/material-theme.css">
```

### Projeto Completo:
```html
<!-- Todos os componentes com tema Fluent -->
<link rel="stylesheet" href="packages/yor-tokens/dist/yor-tokens.css">
<link rel="stylesheet" href="packages/yor-buttons/dist/yor-buttons.css">
<link rel="stylesheet" href="packages/yor-cards/dist/yor-cards.css">
<link rel="stylesheet" href="packages/yor-containers/dist/yor-containers.css">
<link rel="stylesheet" href="packages/yor-spacing/dist/yor-spacing.css">
<link rel="stylesheet" href="packages/yor-typography/dist/yor-typography.css">
<link rel="stylesheet" href="themes/fluent/dist/fluent-theme.css">
```

### Tema Personalizado:
```html
<!-- Componentes básicos + tema customizado -->
<link rel="stylesheet" href="packages/yor-tokens/dist/yor-tokens.css">
<link rel="stylesheet" href="packages/yor-buttons/dist/yor-buttons.css">
<link rel="stylesheet" href="themes/custom/my-brand-theme.css">
```

---

**