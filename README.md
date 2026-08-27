# Regimes Especiais — Monitor Global Fiscal & Imigratório

Plataforma de consulta a regimes fiscais especiais e programas imigratórios para HNWIs em 10 jurisdições, implementada em Next.js (App Router) + React + TypeScript a partir do handoff de design em `design_handoff_regimes_especiais/`.

## Stack

- **Next.js 16 (App Router)** com rotas reais: `/` (visão geral) e `/pais/[slug]` (dossiê por país), todas pré-renderizadas estaticamente (`generateStaticParams`).
- **React 19 + TypeScript**.
- **CSS puro** (`src/app/globals.css`) portando fielmente os design tokens do handoff (cores, tipografia, espaçamento, breakpoints).
- **next/font** para Cormorant Garamond, Inter e JetBrains Mono (self-hosted).
- **lucide-react** para os ícones (substitui Font Awesome do protótipo).
- **flag-icons** para bandeiras em SVG (substitui os emojis Unicode do protótipo, que não renderizam no Windows).
- **isomorphic-dompurify** para sanitizar o HTML inline (`<strong>`/`<em>`) presente nas descrições dos regimes.

## Estrutura de dados

O conteúdo jurídico-fiscal vive separado da apresentação em `src/data/`:

- `types.ts` — tipos (`Country`, `Regime`, `Alert`, `Status`, ...).
- `countries.ts` — os 10 países (`COUNTRIES`, `COUNTRY_ORDER`).
- `alerts.ts` — os 4 alertas prioritários da visão geral.
- `summaryTable.ts` — as linhas da tabela executiva comparativa.
- `overview.ts` — copy e estatísticas do hero da visão geral.
- `status.ts` — labels e classes CSS por `Status`.

> Os valores e datas de legislação (Finance Act 2025, Lei Orgânica 1/2025, etc.) foram portados exatamente do protótipo. Qualquer alteração de conteúdo jurídico deve passar por revisão jurídica antes de editar estes arquivos.

## Rodando localmente

```bash
npm install
npm run dev
```

```bash
npm run build   # build de produção (gera as 10 páginas de país estaticamente)
npm run lint
```

## Acessibilidade

- A navegação por bandeiras e o botão "Voltar" usam `<Link>` reais (não `onclick` em `<div>`), com `aria-current="page"` na aba ativa.
- As linhas da tabela executiva são focáveis (`tabIndex`, `role="link"`) e respondem a `Enter`/`Espaço`, além do clique.
- `prefers-reduced-motion` desativa a animação de entrada dos cards de regime.

## Referência de design

Os arquivos originais do handoff (`design_handoff_regimes_especiais/*.html` e `README.md`) documentam os tokens visuais completos e o modelo de dados de origem; foram usados como fonte única de verdade para esta implementação e não fazem parte do app.
