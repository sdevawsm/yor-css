# Yor CSS - Modular Design System (v2.0 - Refactored)

🎉 **Nova versão com classes mais limpas!** Removemos o prefixo `yor-` das classes CSS.

## ✨ O que mudou na v2.0

### ❌ Antes (v1.x):
```html
<button class="yor-btn yor-btn--primary yor-btn--lg">
  Botão
</button>
<div class="yor-card yor-card--elevated">
  <div class="yor-card__body">Conteúdo</div>
</div>
```

### ✅ Agora (v2.0):
```html
<button class="btn btn--primary btn--lg">
  Botão
</button>
<div class="card card--elevated">
  <div class="card__body">Conteúdo</div>
</div>
```

## 🚀 Instalação Rápida

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/yor-css.git
cd yor-css

# Instale dependências
npm install

# Build completo
npm run build
```

## 📦 Uso Modular

### Mínimo necessário:
```html
<!-- Tokens (obrigatório) -->
<link rel="stylesheet" href="packages/yor-tokens/dist/yor-tokens.css">

<!-- Componentes que você precisa -->
<link rel="stylesheet" href="packages/yor-buttons/dist/yor-buttons.css">

<!-- Tema (opcional) -->
<link rel="stylesheet" href="themes/material/dist/material-theme.css">
```

### Build completo:
```html
<!-- Tudo em um arquivo -->
<link rel="stylesheet" href="dist/yor-css.min.css">
<link rel="stylesheet" href="themes/material/dist/material-theme.min.css">
```

## 🎨 Classes Disponíveis

### Botões:
```html
<!-- Variantes -->
<button class="btn btn--primary">Primary</button>
<button class="btn btn--secondary">Secondary</button>
<button class="btn btn--outline">Outline</button>
<button class="btn btn--ghost">Ghost</button>

<!-- Tamanhos -->
<button class="btn btn--sm">Small</button>
<button class="btn">Default</button>
<button class="btn btn--lg">Large</button>
<button class="btn btn--xl">Extra Large</button>

<!-- Formas -->
<button class="btn btn--rounded">Rounded</button>
<button class="btn btn--square">Square</button>
<button class="btn btn--block">Full Width</button>
```

### Cards:
```html
<div class="card">
  <div class="card__header">Header</div>
  <div class="card__body">Body</div>
  <div class="card__footer">Footer</div>
</div>

<!-- Variantes -->
<div class="card card--elevated">Elevated</div>
<div class="card card--outlined">Outlined</div>
<div class="card card--filled">Filled</div>
<div class="card card--clickable">Clickable</div>
```

### Containers:
```html
<div class="container">Responsive container</div>
<div class="container container--fluid">Fluid container</div>
<div class="container container--sm">Small container</div>

<!-- Grid -->
<div class="row">
  <div class="col col-6">50%</div>
  <div class="col col-6">50%</div>
</div>
```

### Spacing:
```html
<!-- Margin -->
<div class="m-4">Margin all sides</div>
<div class="mt-2 mb-4">Margin top/bottom</div>
<div class="mx-auto">Margin horizontal auto</div>

<!-- Padding -->
<div class="p-6">Padding all sides</div>
<div class="px-4 py-2">Padding x/y</div>

<!-- Gap -->
<div class="flex gap-4">Flex with gap</div>
```

### Typography:
```html
<!-- Headings -->
<h1 class="h1">Heading 1</h1>
<h2 class="h2">Heading 2</h2>

<!-- Text sizes -->
<p class="text-xs">Extra small</p>
<p class="text-sm">Small</p>
<p class="text-base">Base</p>
<p class="text-lg">Large</p>

<!-- Font weights -->
<p class="font-normal">Normal</p>
<p class="font-medium">Medium</p>
<p class="font-semibold">Semibold</p>
<p class="font-bold">Bold</p>
```

## 🎯 Temas Disponíveis

### Material Design:
```html
<link rel="stylesheet" href="themes/material/dist/material-theme.css">
```

### Microsoft Fluent:
```html
<link rel="stylesheet" href="themes/fluent/dist/fluent-theme.css">
```

### Apple Cupertino:
```html
<link rel="stylesheet" href="themes/cupertino/dist/cupertino-theme.css">
```

## 🔧 Scripts de Build

```bash
# Build tudo
npm run build

# Build apenas componentes
npm run build:packages

# Build apenas temas
npm run build:themes

# Watch mode para desenvolvimento
npm run dev

# Limpar builds
npm run clean
```

## 🆕 Migração da v1.x para v2.0

### Buscar e substituir:
```bash
# Substituir todas as classes
sed -i 's/yor-btn/btn/g' **/*.html
sed -i 's/yor-card/card/g' **/*.html
sed -i 's/yor-container/container/g' **/*.html
```

### Ou usar script de migração:
```bash
npm run migrate:v2
```

---

**Yor CSS v2.0** - Classes mais limpas, mesmo poder! 🚀
```

## 12. Script de Migração

```javascript:scripts/migrate-v2.js
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Mapeamento de classes antigas para novas
const classMap = {
  'yor-btn': 'btn',
  'yor-card': 'card',
  'yor-container': 'container',
  'yor-row': 'row',
  'yor-col': 'col',
  'yor-h1': 'h1',
  'yor-h2': 'h2',
  'yor-h3': 'h3',
  'yor-text': 'text',
  'yor-font': 'font',
  'yor-leading': 'leading',
  'yor-m-': 'm-',
  'yor-p-': 'p-',
  'yor-mt-': 'mt-',
  'yor-mb-': 'mb-',
  'yor-