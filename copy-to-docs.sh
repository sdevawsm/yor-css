#!/bin/bash

echo "📁 Copiando arquivos para a pasta docs..."

# Criar diretórios necessários
mkdir -p docs/assets/css
mkdir -p docs/assets/css/themes/dist

# Copiar arquivo principal
cp dist/yor-css.css docs/assets/css/yor.css

# Copiar temas
cp themes/material/dist/material-theme.css docs/assets/css/themes/dist/
cp themes/fluent/dist/fluent-theme.css docs/assets/css/themes/dist/
cp themes/cupertino/dist/cupertino-theme.css docs/assets/css/themes/dist/
cp themes/dark/dist/dark-theme.css docs/assets/css/themes/dist/

echo "✅ Arquivos copiados com sucesso!" 