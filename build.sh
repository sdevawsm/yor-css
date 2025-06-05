#!/bin/bash

echo "🚀 Building Yor CSS..."

# Criar diretórios de dist se não existirem
mkdir -p packages/yor-tokens/dist
mkdir -p packages/yor-buttons/dist
mkdir -p packages/yor-cards/dist
mkdir -p packages/yor-containers/dist
mkdir -p packages/yor-spacing/dist
mkdir -p packages/yor-typography/dist
mkdir -p themes/fluent/dist
mkdir -p themes/material/dist
mkdir -p themes/cupertino/dist

echo "📦 Building packages..."
npm run build:packages

echo "🎨 Building themes..."
npm run build:themes

echo "✅ Build completed!"
echo ""
echo "📋 Usage examples:"
echo "  Tokens only:     <link rel='stylesheet' href='packages/yor-tokens/dist/yor-tokens.css'>"
echo "  + Buttons:       <link rel='stylesheet' href='packages/yor-buttons/dist/yor-buttons.css'>"
echo "  + Material:      <link rel='stylesheet' href='themes/material/dist/material-theme.css'>"
