# Documentação do Yor CSS

Este diretório contém a documentação do Yor CSS, um framework CSS modular e moderno para desenvolvimento web.

## Estrutura

```
docs/
├── assets/
│   ├── css/
│   │   └── docs.css
│   ├── js/
│   │   └── docs.js
│   └── images/
├── modules/
│   ├── forms/
│   │   └── index.html
│   ├── buttons/
│   │   └── index.html
│   ├── cards/
│   │   └── index.html
│   ├── containers/
│   │   └── index.html
│   ├── spacing/
│   │   └── index.html
│   ├── typography/
│   │   └── index.html
│   └── colors/
│       └── index.html
├── components/
├── examples/
├── index.html
└── README.md
```

## Desenvolvimento

Para desenvolver a documentação localmente:

1. Certifique-se de que todos os módulos CSS estão construídos:
   ```bash
   npm run build
   ```

2. Inicie um servidor local (por exemplo, usando Python):
   ```bash
   python -m http.server 8000
   ```

3. Acesse a documentação em `http://localhost:8000/docs/`

## Estrutura da Documentação

- `index.html`: Página inicial com visão geral do framework
- `modules/`: Documentação específica de cada módulo
- `components/`: Exemplos de componentes compostos
- `examples/`: Exemplos de uso em diferentes contextos
- `assets/`: Arquivos estáticos (CSS, JavaScript, imagens)

## Estilos

Os estilos da documentação estão em `assets/css/docs.css`. Eles incluem:

- Layout responsivo
- Tema claro/escuro
- Navegação
- Exemplos de código
- Componentes de documentação

## JavaScript

O JavaScript da documentação está em `assets/js/docs.js`. Ele fornece:

- Navegação ativa
- Navegação suave
- Highlight de código
- Menu mobile
- Copiar código
- Alternância de tema
- Tabela de conteúdos responsiva

## Contribuindo

Para contribuir com a documentação:

1. Crie uma branch para sua contribuição
2. Faça suas alterações
3. Teste localmente
4. Envie um pull request

## Convenções

- Use HTML semântico
- Mantenha a acessibilidade
- Siga o guia de estilo do CSS
- Documente exemplos claros
- Inclua código comentado
- Mantenha a consistência visual

## Licença

A documentação está sob a mesma licença do Yor CSS. 