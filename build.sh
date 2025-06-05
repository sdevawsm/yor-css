#!/bin/bash

echo "🚀 Building Yor CSS..."

# Criar diretórios de dist se não existirem
mkdir -p packages/yor-tokens/dist
mkdir -p packages/yor-buttons/dist
mkdir -p packages/yor-cards/dist
mkdir -p packages/yor-containers/dist
mkdir -p packages/yor-spacing/dist
mkdir -p packages/yor-typography/dist
mkdir -p packages/yor-colors/dist
mkdir -p themes/fluent/dist
mkdir -p themes/material/dist
mkdir -p themes/cupertino/dist

echo "📦 Building packages..."
npm run build:packages

echo "🎨 Building themes..."
npm run build:themes

echo "📄 Building distribution files..."
npm run build:dist

echo "✅ Build completed!"
echo ""
echo "📋 Usage examples:"
echo "  Tokens only:     <link rel='stylesheet' href='packages/yor-tokens/dist/yor-tokens.css'>"
echo "  + Buttons:       <link rel='stylesheet' href='packages/yor-buttons/dist/yor-buttons.css'>"
echo "  + Colors:        <link rel='stylesheet' href='packages/yor-colors/dist/yor-colors.css'>"
echo "  + Material:      <link rel='stylesheet' href='themes/material/dist/material-theme.css'>"
echo ""
echo "🎨 Color utilities available:"
echo "  Backgrounds:     .bg-primary, .bg-success, .bg-warning, .bg-error"
echo "  Text colors:     .text-primary, .text-success, .text-warning, .text-error"
echo "  Borders:         .border-primary, .border-success, .border-warning, .border-error"
echo "  Grays:           .bg-gray-100 to .bg-gray-900, .text-gray-100 to .text-gray-900"
