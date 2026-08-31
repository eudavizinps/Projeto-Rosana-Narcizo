# Rosana Narcizo — frontend Angular

Página inicial responsiva de Rosana Narcizo, criada em Angular 22, TypeScript, HTML5 e SCSS. Esta primeira etapa é exclusivamente visual: orçamento, agenda, pagamentos, contato e depoimentos usam dados demonstrativos e não enviam informações para nenhum serviço externo.

## Requisitos

- Node.js 22.22.3 ou superior compatível com Angular 22
- npm 10+ ou pnpm 11+

## Instalação e execução

Com npm:

```bash
npm install
npm start
```

Ou com pnpm:

```bash
pnpm install
pnpm start
```

Abra `http://localhost:4200/`.

## Build de produção

```bash
npm run build
```

O resultado otimizado é gravado em `dist/rosana-narcizo/browser/`.

## Organização

- `src/app/components/`: componentes visuais da página inicial
- `src/styles/`: variáveis, tipografia, reset e mixins
- `src/assets/images/hero/`: imagens do carrossel principal
- `src/assets/images/portfolio/`: imagens demonstrativas do portfólio
- `src/assets/images/about/`: fotografia original de Rosana, usada exclusivamente na seção Sobre
- `public/og.png`: imagem de compartilhamento social

## Escopo desta etapa

Não há backend, autenticação, banco de dados, pagamentos, WhatsApp real, IA ou integração de agenda. O sinal exibido no orçamento é sempre 20%.
