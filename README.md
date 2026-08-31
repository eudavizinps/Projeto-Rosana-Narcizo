# Rosana Narcizo — frontend Angular

Página inicial responsiva de Rosana Narcizo, criada em Angular 22, TypeScript, HTML5 e SCSS. Esta primeira etapa é predominantemente visual: orçamento, agenda, pagamentos e depoimentos usam dados demonstrativos; os links de contato abrem uma conversa externa no WhatsApp.

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

Não há backend, autenticação, banco de dados, pagamentos, IA ou integração de agenda. Os links de contato abrem uma conversa externa no WhatsApp e o sinal exibido no orçamento é sempre 20%.
