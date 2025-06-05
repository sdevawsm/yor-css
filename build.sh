#!/bin/bash

echo "🚀 Building Yor CSS..."

# Verificar estrutura primeiro
echo "🔍 Verificando estrutura de arquivos..."
bash scripts/check-structure.sh

# Criar diretórios de dist se não existirem
echo "📁 Criando diretórios de distribuição..."
mkdir -p packages/yor-tokens/dist
mkdir -p packages/yor-buttons/dist
mkdir -p packages/yor-cards/dist
mkdir -p packages/yor-containers/dist
mkdir -p packages/yor-spacing/dist
mkdir -p packages/yor-typography/dist
mkdir -p themes/fluent/dist
mkdir -p themes/material/dist
mkdir -p themes/cupertino/dist
mkdir -p dist

# Verificar se Sass está instalado
if ! command -v sass &> /dev/null; then
    echo "❌ Sass não encontrado. Instalando..."
    npm install -g sass
fi

echo "📦 Building packages..."
if npm run build:packages; then
    echo "✅ Packages built successfully!"
else
    echo "❌ Error building packages"
    exit 1
fi

echo "🎨 Building themes..."
if npm run build:themes; then
    echo "✅ Themes built successfully!"
else
    echo "❌ Error building themes"
    exit 1
fi

echo "📦 Building distribution files..."
if npm run build:dist; then
    echo "✅ Distribution files built successfully!"
else
    echo "❌ Error building distribution files"
    exit 1
fi

echo "✅ Build completed successfully!"
echo ""
echo "📋 Usage examples:"
echo "  Tokens only:     <link rel='stylesheet' href='packages/yor-tokens/dist/yor-tokens.css'>"
echo "  + Buttons:       <link rel='stylesheet' href='packages/yor-buttons/dist/yor-buttons.css'>"
echo "  + Material:      <link rel='stylesheet' href='themes/material/dist/material-theme.css'>"
echo "  Complete build:  <link rel='stylesheet' href='dist/yor-css.min.css'>"
