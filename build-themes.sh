#!/bin/bash

echo "🎨 Building themes with debug info..."

# Material Theme
echo "📦 Building Material theme..."
if sass themes/material/material-theme.scss themes/material/dist/material-theme.css --style=expanded; then
    echo "✅ Material theme built successfully"
    ls -la themes/material/dist/material-theme.css
else
    echo "❌ Error building Material theme"
fi

# Fluent Theme
echo "📦 Building Fluent theme..."
if sass themes/fluent/fluent-theme.scss themes/fluent/dist/fluent-theme.css --style=expanded; then
    echo "✅ Fluent theme built successfully"
    ls -la themes/fluent/dist/fluent-theme.css
else
    echo "❌ Error building Fluent theme"
fi

# Cupertino Theme
echo "📦 Building Cupertino theme..."
if sass themes/cupertino/cupertino-theme.scss themes/cupertino/dist/cupertino-theme.css --style=expanded; then
    echo "✅ Cupertino theme built successfully"
    ls -la themes/cupertino/dist/cupertino-theme.css
else
    echo "❌ Error building Cupertino theme"
fi

echo "🔍 Checking theme file contents..."
echo "--- Material theme preview ---"
head -20 themes/material/dist/material-theme.css
echo ""
