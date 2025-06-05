#!/bin/bash

echo "🔍 Verificando estrutura de arquivos..."

# Verificar se todos os arquivos fonte existem
files=(
  "packages/yor-tokens/src/yor-tokens.scss"
  "packages/yor-buttons/src/yor-buttons.scss"
  "packages/yor-cards/src/yor-cards.scss"
  "packages/yor-containers/src/yor-containers.scss"
  "packages/yor-spacing/src/yor-spacing.scss"
  "packages/yor-typography/src/yor-typography.scss"
  "themes/material/material-theme.scss"
  "themes/fluent/fluent-theme.scss"
  "themes/cupertino/cupertino-theme.scss"
)

missing_files=()

for file in "${files[@]}"; do
  if [ ! -f "$file" ]; then
    missing_files+=("$file")
    echo "❌ Arquivo não encontrado: $file"
  else
    echo "✅ Arquivo encontrado: $file"
  fi
done

if [ ${#missing_files[@]} -eq 0 ]; then
  echo "🎉 Todos os arquivos estão presentes!"
else
  echo "⚠️  ${#missing_files[@]} arquivo(s) não encontrado(s)"
  echo "Criando arquivos faltantes..."
  
  for file in "${missing_files[@]}"; do
    mkdir -p "$(dirname "$file")"
    touch "$file"
    echo "📝 Criado: $file"
  done
fi
