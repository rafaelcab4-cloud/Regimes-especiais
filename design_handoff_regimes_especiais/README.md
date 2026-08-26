# Handoff: Regimes Especiais — Monitor Global Fiscal & Imigratório

## Overview

Plataforma interativa de consulta a **regimes fiscais especiais e programas imigratórios** para HNWIs (High Net Worth Individuals) em 10 jurisdições estratégicas. O usuário navega por bandeiras de países numa barra fixa; ao clicar numa bandeira, abre-se um dossiê completo com dois eixos: regimes fiscais e programas imigratórios daquele país.

Conteúdo em **português do Brasil**, público-alvo: assessores de wealth planning, family offices e clientes HNWI brasileiros avaliando mudança de residência fiscal.

Jurisdições cobertas: 🇨🇭 Suíça · 🇮🇹 Itália · 🇵🇹 Portugal · 🇪🇸 Espanha · 🇬🇷 Grécia · 🇬🇧 Reino Unido · 🇦🇪 EAU · 🇺🇸 EUA · 🇺🇾 Uruguai · 🇭🇰 Hong Kong.

---

## About the Design Files

Os arquivos HTML deste pacote são **referências de design criadas em HTML** — protótipos que demonstram a aparência e o comportamento pretendidos, **não código de produção para copiar diretamente**.

A tarefa é **recriar estes designs no ambiente existente do codebase alvo** (React, Vue, Next.js, SwiftUI, etc.), usando os padrões e bibliotecas já estabelecidos nele. Se não houver ambiente ainda, escolha o framework mais apropriado (recomendação: **Next.js + React + TypeScript**, dado o volume de conteúdo estruturado e a necessidade de SEO/compartilhamento) e implemente lá.

O conteúdo jurídico-fiscal (textos, valores, fontes) deve ser tratado como **dados**, não como markup — ver seção *Modelo de Dados*.

---

## Fidelity

**Alta fidelidade (hifi).** Cores, tipografia, espaçamentos, estados e microinterações estão definidos e devem ser recriados com precisão. Todos os tokens estão listados abaixo. Fontes são Google Fonts públicas.

---

## Screens / Views

A aplicação tem **duas views** que se alternam (SPA sem rotas no protótipo — recomenda-se implementar com rotas reais: `/` e `/pais/[slug]`).

### Componentes globais (persistentes nas duas views)

#### 1. Topbar (sticky, `top: 0`, `z-index: 50`)

- Fundo `#ffffff`, borda inferior `1px solid #e9e3d5`
- Container: `max-width: 1480px`, `margin: 0 auto`, `padding: 22px 36px`
- Grid de 3 colunas: `auto 1fr auto`, `align-items: center`, `gap: 32px`

**Coluna esquerda** — botão de busca circular + meta:
- Botão: `36×36px`, `border: 1px solid #dcd5c7`, `border-radius: 50%`, fundo transparente, ícone lupa (Font Awesome `fa-magnifying-glass`), cor `#5b6b7d`
- Hover: `border-color: #1a2332`, `color: #1a2332`, transição `.2s`
- Texto: "Edição **Maio · 2026**" — `font-size: 10px`, `letter-spacing: 0.18em`, `text-transform: uppercase`, `font-weight: 500`, cor `#5b6b7d`; o valor da data em `#8b2e2e`, `font-weight: 600`

**Coluna central** — marca, centralizada:
- Título: "REGIMES ESPECIAIS" — Cormorant Garamond, `34px`, `weight 500`, `letter-spacing: 0.16em`, uppercase, cor `#1a2332`, `line-height: 1`
- Subtítulo: "MONITOR GLOBAL FISCAL & IMIGRATÓRIO" — Inter, `10px`, `letter-spacing: 0.5em`, uppercase, cor `#5b6b7d`, `margin-top: 8px`
- O subtítulo recebe um `+` em `::before` e `::after`, cor `#8b2e2e`, `font-weight: 600`, `margin: 0 8px`

**Coluna direita** — meta + botão hambúrguer:
- Texto: "10 JURISDIÇÕES · **4 ALERTAS**" (mesmo estilo do meta esquerdo)
- Botão hambúrguer: `36×36px` circular, 3 barras de `14×1px` em `#1a2332`, `gap: 4px`

#### 2. Flag Navigation (sticky, `top: 90px`, `z-index: 49`)

- Fundo `#ffffff`, borda inferior `1px solid #e9e3d5`
- Container `max-width: 1480px`, `padding: 0 36px`, `display: flex`, `overflow-x: auto`, scrollbar oculta

**Aba "Visão Geral"** (primeira, fixa):
- `flex: 0 0 auto`, `padding: 18px 22px`
- Ícone `fa-compass` `18px` + label "Visão / Geral" em duas linhas

**Abas de país** (10, uma por jurisdição):
- `flex: 1`, `min-width: 96px`, `padding: 18px 8px 16px`
- Coluna vertical, `gap: 6px`, centralizado
- Emoji de bandeira: `font-size: 30px`, `filter: saturate(0.92)`
- Label: nome do país, `font-size: 10px`, `letter-spacing: 0.18em`, uppercase, `weight 500`
- `border-bottom: 2px solid transparent`
- **Hover**: cor `#1a2332`, fundo `linear-gradient(180deg, transparent, rgba(0,0,0,0.02))`, bandeira `translateY(-2px)` em `.25s ease`
- **Ativa**: cor `#1a2332`, `border-bottom-color: #8b2e2e`, bandeira `filter: saturate(1.05)`
- **Alert dot**: países com alterações recentes (IT, PT, ES, GB) recebem um ponto `6×6px` `border-radius: 50%` `#8b2e2e` em `position: absolute; top: 14px; right: 18px`

#### 3. Footer

- `margin-top: 60px`, `padding: 32px 36px`, `border-top: 1px solid #dcd5c7`, fundo `#ffffff`
- Flex `space-between`, wrap, `gap: 16px`
- Esquerda: "Regimes Especiais © 2026 · Documento de uso interno"
- Direita: legenda de status com 5 itens (dot `8×8px` circular + label): Mantido `#3d6b4a` · Alterado `#a26d20` · Extinto `#8b2e2e` · Novo `#2e4f8b` · Atenção `#5e3d7a`
- Todo o texto: `11px`, `letter-spacing: 0.18em`, uppercase, `weight 500`, cor `#5b6b7d`

---

### View A — Visão Geral (default)

#### A1. Hero
`max-width: 1480px`, `padding: 48px 36px 24px`

- **Eyebrow**: "MAIO 2026 · BRIEFING EXECUTIVO" — `11px`, `letter-spacing: 0.32em`, uppercase, `#8b2e2e`, `weight 600`, `margin-bottom: 14px`
- **Título**: Cormorant Garamond, `60px`, `weight 400`, `line-height: 1.02`, `letter-spacing: -0.015em`, `max-width: 1000px`
  > Regimes fiscais especiais e programas imigratórios para *HNWIs* em 10 jurisdições estratégicas.

  ("HNWIs" em `<em>`: itálico, cor `#8b2e2e`, `weight 500`)
- **Subtítulo**: `15px`, cor `#5b6b7d`, `max-width: 740px`, `line-height: 1.7`
  > Monitor analítico das principais janelas de planejamento patrimonial e mobilidade global. Inclui mudanças de alto impacto entre 2024–2026: abolição do Non-Dom britânico, encerramento do Golden Visa espanhol, reajuste da Flat Tax italiana e lançamento do Trump Gold Card americano.

- **Faixa de estatísticas**: `margin-top: 34px`, `border-top` e `border-bottom` `1px solid #e9e3d5`, flex
  - Cada célula: `flex: 1`, `min-width: 160px`, `padding: 18px 24px`, `border-right: 1px solid #e9e3d5` (exceto a última)
  - Número: Cormorant Garamond `38px` `weight 500` `line-height: 1`
  - Label: `10px` `letter-spacing: 0.22em` uppercase `#5b6b7d`
  - Valores: **10** Jurisdições · **3** Extinções · **4** Alterações · **2** Novos regimes · **4** Alertas ativos
  - Todos exceto o primeiro têm o número em `#8b2e2e`

#### A2. Alertas Prioritários
`padding: 32px 36px`

- Cabeçalho flex `space-between` com `border-bottom: 1px solid #e9e3d5`, `padding-bottom: 12px`, `margin-bottom: 18px`
  - Título "Alertas prioritários" — Cormorant Garamond `24px` `weight 500`
  - Pill: "MUDANÇAS DE ALTO IMPACTO · 2024–2026" — `10px`, `letter-spacing: 0.2em`, uppercase, `#8b2e2e`, `weight 600`
- Grid: `repeat(auto-fill, minmax(300px, 1fr))`, `gap: 18px`
- **Card**: fundo `#fff`, `border: 1px solid #e9e3d5`, `border-left: 3px solid <tom>`, `padding: 18px 20px`
  - Tons: `amber #a26d20` (default) · `red #8b2e2e` · `blue #2e4f8b`
  - Bandeira: `22px`, `display: block`, `margin-bottom: 10px`
  - Tag: JetBrains Mono `9px`, `letter-spacing: 0.2em`, uppercase, cor = tom do card, prefixada por "— "
  - Título: Cormorant Garamond `19px` `weight 600` `line-height: 1.25`, `margin: 6px 0 8px`
  - Corpo: `12.5px`, `#5b6b7d`, `line-height: 1.6`

Os 4 alertas (conteúdo exato em `alerts.json`): Reino Unido/Non-Dom (red) · Itália/Flat Tax (amber) · Espanha/Golden Visa (red) · EUA/Gold Card (blue).

#### A3. Tabela Executiva Comparativa
`padding: 32px 36px`

- **Section head**: `border-top: 1px solid #dcd5c7`, `padding-top: 28px`, flex `space-between` baseline
  - Numeração "— 01" — JetBrains Mono `11px`, `letter-spacing: 0.18em`, `#8b2e2e`
  - Título "Tabela executiva comparativa" — Cormorant Garamond `34px` `weight 500`
  - Meta à direita: "CLIQUE EM UMA LINHA PARA ABRIR O DOSSIÊ" — `11px`, `letter-spacing: 0.2em`, uppercase, `#5b6b7d`
- **Wrapper**: `border: 1px solid #e9e3d5`, fundo `#fff`, `overflow-x: auto`
- **Tabela**: `width: 100%`, `border-collapse: collapse`, `font-size: 13px`, `min-width: 920px`
  - `thead`: fundo `#1a2332`, texto `rgba(255,255,255,0.92)`; `th` `padding: 14px 16px`, `10px`, `letter-spacing: 0.2em`, uppercase, `weight 500`
  - **5 colunas**: País · Regime fiscal principal · Status fiscal · Programa imigratório · Status visto
  - `td`: `padding: 16px`, `border-bottom: 1px solid #e9e3d5`, `vertical-align: middle`
  - Linha: `cursor: pointer`; hover `background: #faf8f3`, transição `.15s`; clique abre o dossiê do país
  - Célula País: emoji `22px` + `margin-right: 10px`, nome em Cormorant Garamond `18px` `weight 600`

---

### View B — Dossiê de País

#### B1. Detail Hero (banner escuro)
- Fundo `linear-gradient(135deg, #1a2332 0%, #2c3e52 100%)`, texto branco, `padding: 56px 36px 48px`
- Overlay decorativo `::before`: `radial-gradient(circle at 90% 20%, rgba(168,94,58,0.18), transparent 50%)`
- Grid `1fr auto`, `align-items: end`, `gap: 32px`
  - **Esquerda**:
    - Bandeira: `84px`, `drop-shadow(0 4px 12px rgba(0,0,0,0.3))`, `margin-bottom: 14px`
    - Eyebrow: "— DOSSIÊ · {região}" — JetBrains Mono `11px`, `letter-spacing: 0.3em`, uppercase, `#a98b4a`
    - Nome do país: Cormorant Garamond `72px` `weight 400` `line-height: 1` `letter-spacing: -0.02em`, branco
    - **Badge de atratividade**: pill `border-radius: 30px`, fundo `rgba(168,94,58,0.18)`, `border: 1px solid rgba(168,94,58,0.4)`, `padding: 8px 16px`; estrelas `14px` `#a98b4a` + label `11px` `letter-spacing: 0.18em` uppercase `#f1d8a8`
  - **Direita**: botão "← VOLTAR À VISÃO GERAL" — transparente, `border: 1px solid rgba(255,255,255,0.25)`, `padding: 11px 20px`, `11px`, `letter-spacing: 0.2em`, uppercase; hover fundo `rgba(255,255,255,0.1)`, borda branca

- **Faixa-resumo** (`margin-top: 24px`, `border-top: 1px solid rgba(255,255,255,0.12)`, `padding-top: 24px`, flex wrap):
  - 4 células, cada uma `flex: 1`, `min-width: 200px`, separadas por `border-right: 1px solid rgba(255,255,255,0.1)` + `margin-right: 30px`
  - Label: JetBrains Mono `10px`, `letter-spacing: 0.2em`, uppercase, `rgba(255,255,255,0.5)`
  - Valor: Cormorant Garamond `20px` `weight 500` `line-height: 1.25`, branco
  - Campos: Regime fiscal principal · Status fiscal · Programa imigratório · Status visto

#### B2. Detail Body — duas colunas
`padding: 48px 36px`, `display: grid`, `grid-template-columns: 1fr 1fr`, `gap: 40px`, `max-width: 1480px`
(abaixo de `960px` colapsa para `1fr`)

- **Coluna 1** — "— 01 Regimes Fiscais" / sub "TRIBUTAÇÃO · PLANEJAMENTO PATRIMONIAL"
- **Coluna 2** — "— 02 Programas Imigratórios" / sub "RESIDÊNCIA · CAMINHO À CIDADANIA"
- Cabeçalho de coluna: Cormorant Garamond `28px` `weight 500`; numeração JetBrains Mono `11px` `#8b2e2e` `letter-spacing: 0.2em`
- Subtítulo: `11px`, `letter-spacing: 0.22em`, uppercase, `#5b6b7d`, `padding-bottom: 18px`, `border-bottom: 1px solid #dcd5c7`, `margin-bottom: 24px`

#### B3. Card de Regime (o componente central)
Fundo `#fff`, `border: 1px solid #e9e3d5`, `padding: 26px 28px`, `margin-bottom: 24px`
Hover: `border-color: #dcd5c7`, `box-shadow: 0 8px 30px -18px rgba(26,35,50,0.18)`
Entrada: `fadein .35s ease` com `animation-delay: index * 0.06s` (`opacity 0 → 1`, `translateY(6px) → none`)

Estrutura interna, em ordem:

1. **Topo** — flex `space-between`, `gap: 12px`, `padding-bottom: 14px`, `border-bottom: 1px solid #e9e3d5`
   - Nome do regime: Cormorant Garamond `21px` `weight 600` `line-height: 1.25`
   - **Status badge**: JetBrains Mono `9px`, `padding: 5px 9px`, `letter-spacing: 0.18em`, uppercase, `border: 1px solid`, `white-space: nowrap`, `margin-top: 3px`
     | Status | Label | Fundo | Texto | Borda |
     |---|---|---|---|---|
     | `ok` | Mantido | `#e7eee8` | `#3d6b4a` | `#cbdacd` |
     | `changed` | Alterado | `#f5ecd9` | `#8a6620` | `#e6d4a3` |
     | `ext` | Extinto | `#f1dfdf` | `#7a2727` | `#dec0c0` |
     | `new` | Novo | `#dde5ef` | `#2a4877` | `#bdcadd` |
     | `risk` | Atenção | `#e9dfee` | `#553870` | `#cdbed4` |

2. **Descrição** — `13.5px`, `#2c3e52`, `line-height: 1.75`, `margin-bottom: 18px`
   - Suporta `<strong>` (cor `#1a2332`, `weight 600`) e `<em>` (itálico, `#8b2e2e`)
   - Quebras de linha `\n` do dado viram `<br/>`

3. **Grade de dados-chave (KV grid)** — `grid-template-columns: 1fr 1fr`, bordas superior e esquerda `1px solid #e9e3d5`
   - Cada célula: `padding: 11px 14px`, `border-right` + `border-bottom` `1px solid #e9e3d5`, fundo `#faf8f3`
   - Label: JetBrains Mono `9px`, `letter-spacing: 0.18em`, uppercase, `#5b6b7d`, `margin-bottom: 4px`
   - Valor: Inter `13px` `weight 500` `#1a2332`

4. **Impact box** (opcional) — `border-left: 2px solid #2e4f8b`, fundo `#f4f6fa`, `padding: 14px 18px`
   - Label "— IMPACTO HNWI": JetBrains Mono `9px`, `letter-spacing: 0.22em`, uppercase, `#2e4f8b`, `weight 600`
   - Texto: `13px`, `#2c3e52`, `line-height: 1.7`

5. **Warning box** (opcional) — `border-left: 2px solid #a26d20`, fundo `#fbf6e8`, mesma estrutura
   - Label "— ATENÇÃO / RISCO", cor `#a26d20`

6. **Linha de fontes** — `border-top: 1px dashed #dcd5c7`, `padding-top: 14px`, flex wrap `gap: 8px`
   - Link: JetBrains Mono `10px`, `#5b6b7d`, sem sublinhado, ícone `fa-arrow-up-right-from-square` `9px`
   - Hover: cor `#8b2e2e`, `border-bottom: 1px solid #8b2e2e`
   - `target="_blank" rel="noopener"`

---

## Interactions & Behavior

| Ação | Comportamento |
|---|---|
| Clique numa aba de bandeira | Abre o dossiê daquele país; aba fica ativa; scroll suave ao topo |
| Clique numa linha da tabela executiva | Idem — abre o dossiê do país da linha |
| Clique em "Visão Geral" / "Voltar" | Retorna à view de overview; scroll suave ao topo |
| Hover em aba | Bandeira sobe `2px` em `.25s ease`; gradiente sutil de fundo |
| Hover em linha da tabela | Fundo `#faf8f3` em `.15s` |
| Hover em card de regime | Sombra `0 8px 30px -18px rgba(26,35,50,0.18)` |
| Entrada dos cards de regime | `fadein .35s ease`, escalonado em `60ms` por índice |
| Scroll | Topbar e flag nav ficam fixos (`sticky`) |

**Sem estados de loading, erro ou formulários** — o conteúdo é estático/embutido.

**Responsivo:**
- `< 960px`: dossiê passa a coluna única
- `< 780px`: topbar vira coluna única centralizada (título `24px`); hero `38px`; nome do país `46px`; flag nav perde o `sticky`

---

## State Management

Estado mínimo:

```ts
type View = { kind: 'overview' } | { kind: 'country'; id: CountryId }
type CountryId = 'ch'|'it'|'pt'|'es'|'gr'|'gb'|'ae'|'us'|'uy'|'hk'
```

- Uma única variável de view controla tudo.
- Recomendação para produção: usar **rotas** (`/` e `/pais/[slug]`) em vez de estado local — permite deep-linking, compartilhamento e SEO, que são valiosos para este tipo de conteúdo.
- Nenhum data fetching no protótipo. Em produção, os dados podem vir de CMS/JSON estático — a estrutura já está normalizada.

---

## Modelo de Dados

Os textos jurídicos são o núcleo do produto. Extraia-os para JSON/CMS. Formato atual:

```ts
type Status = 'ok' | 'changed' | 'ext' | 'new' | 'risk'

interface Regime {
  name: string           // nome do regime + base legal
  status: Status
  desc: string           // HTML inline permitido (<strong>, <em>), \n = quebra
  kv: { l: string; v: string }[]   // pares label/valor (par, para grid 2 col)
  impact?: string        // bloco azul "Impacto HNWI"
  warning?: string       // bloco âmbar "Atenção / Risco"
  sources: { t: string; u: string }[]  // fontes oficiais
}

interface Country {
  flag: string           // emoji
  name: string
  region: 'Europa' | 'Américas' | 'Oriente Médio' | 'Ásia'
  attract: string        // string de estrelas ou 'Complexo'
  attractLabel: string
  alert: boolean         // exibe o alert dot na aba
  sumFiscal: string; sumFS: Status   // resumo p/ tabela e faixa do hero
  sumVisa: string;   sumVS: Status
  fiscal: Regime[]       // coluna 01
  visa: Regime[]         // coluna 02
}
```

Ordem de exibição dos países: `['ch','it','pt','es','gr','gb','ae','us','uy','hk']`.

**Nota de conteúdo:** os dados incluem legislação atualizada até 2026 — Finance Act 2025 (UK), Lei Orgânica 1/2025 (ES), Lei Orçamentária 2026 (IT), Executive Order 14351 (US), Lei 19.937/2021 (UY), Decreto-Lei 5/2024 BOCM (Ley Mbappé), Lei 5100/2024 (GR). Cada regime carrega links para fontes governamentais oficiais. **Não altere valores nem datas sem verificação jurídica.**

---

## Design Tokens

### Cores

```css
--ink:       #1a2332;  /* texto principal, thead, hero escuro */
--ink-2:     #2c3e52;  /* texto de corpo em cards */
--ink-soft:  #5b6b7d;  /* texto secundário, labels */
--paper:     #f6f3ee;
--paper-2:   #ecead9;
--line:      #dcd5c7;  /* bordas fortes */
--line-soft: #e9e3d5;  /* bordas suaves */
--bg:        #faf8f3;  /* fundo da página */
--accent:    #8b2e2e;  /* bordô — acento principal */
--accent-2:  #a85e3a;
--gold:      #a98b4a;  /* eyebrow do hero escuro */
--green:     #3d6b4a;  /* status Mantido */
--amber:     #a26d20;  /* status Alterado */
--red:       #8b2e2e;  /* status Extinto */
--blue:      #2e4f8b;  /* status Novo, impact box */
--purple:    #5e3d7a;  /* status Atenção */
```

Fundos de badge/pill: ver tabela de status em *B3*.

### Tipografia

| Família | Uso | Pesos |
|---|---|---|
| **Cormorant Garamond** (serif) | Títulos, nomes de país, nomes de regime, números de estatística, valores da faixa-resumo | 300, 400, 500, 600, 700 |
| **Inter** (sans) | Corpo de texto, labels, valores de KV | 300, 400, 500, 600, 700 |
| **JetBrains Mono** (mono) | Numeração de seção, labels de KV, badges de status, tags, links de fonte | 400, 500 |

Base do documento: Inter `14px` / `line-height 1.55` / `-webkit-font-smoothing: antialiased`.

Escala usada: `9 · 10 · 11 · 12.5 · 13 · 13.5 · 14 · 15 · 18 · 19 · 20 · 21 · 22 · 24 · 28 · 30 · 34 · 38 · 46 · 60 · 72 · 84 px`

Letter-spacing recorrente: `0.16em` (marca) · `0.18em` (meta/label) · `0.2em` (th, badges) · `0.22em` (labels de stat) · `0.3–0.32em` (eyebrows) · `0.5em` (subtítulo da marca) · negativo `-0.015em` / `-0.02em` em títulos grandes serif.

### Espaçamento

Escala efetiva: `4 · 6 · 8 · 10 · 12 · 14 · 16 · 18 · 20 · 22 · 24 · 26 · 28 · 30 · 32 · 34 · 36 · 40 · 48 · 56 · 60 px`
Padding horizontal padrão de container: `36px`. Largura máxima: `1480px`.

### Border radius

`0` na maioria (linguagem editorial, cantos retos) · `2px` em pills e badges · `30px` no badge de atratividade · `50%` em botões circulares e dots.

### Sombras

- Card de regime (hover): `0 8px 30px -18px rgba(26,35,50,0.18)`
- Bandeira no hero: `drop-shadow(0 4px 12px rgba(0,0,0,0.3))`

### Transições

`.15s` (hover de linha) · `.2s` (botões, bordas) · `.25s ease` (translate da bandeira) · `.35s ease` (fadein de card)

---

## Assets

- **Fontes**: Google Fonts (Cormorant Garamond, Inter, JetBrains Mono) — substitua pelas fontes do design system do codebase se houver equivalentes.
- **Ícones**: Font Awesome 6.5.0 free — apenas 3 glifos usados: `fa-magnifying-glass`, `fa-compass`, `fa-arrow-left`, `fa-arrow-up-right-from-square`. Substitua pelo icon set do codebase (Lucide, Heroicons, etc.) — não vale a pena carregar o Font Awesome inteiro por 4 ícones.
- **Bandeiras**: emojis Unicode nativos. **Atenção**: emojis de bandeira não renderizam no Windows (aparecem como códigos de país). Para produção, considere SVGs de bandeira (ex.: `flag-icons`, `circle-flags`) — isso é uma correção necessária, não opcional.
- **Nenhuma imagem raster.** Sem dependências de mídia.

---

## Files

| Arquivo | Descrição |
|---|---|
| `Regimes Especiais.html` | **Fonte principal** — protótipo completo, HTML/CSS/JS vanilla, ~750 linhas. Todos os dados estão no objeto `DATA` no `<script>` no final. |
| `Regimes Especiais (Standalone).html` | Versão auto-contida (~1.5 MB), fontes e ícones embutidos, funciona offline. Referência visual — **não use como base de código.** |

Pontos de entrada no arquivo fonte:
- `:root` (linha ~12) — todos os tokens de cor
- `const ALERTS` — os 4 cards de alerta
- `const DATA` — o conteúdo completo dos 10 países
- `const SUMDATA` — linhas da tabela executiva
- `const COUNTRY_ORDER` — ordem de exibição
- `showCountry(id)` / `goOverview()` — troca de view
- `regimeHtml(item, idx)` — o template do card de regime

---

## Recomendações de implementação

1. **Separe dados de apresentação já no primeiro commit.** O conteúdo é volátil (legislação muda) e precisa de revisão jurídica independente do ciclo de deploy de código.
2. **Use rotas reais**, não estado local — deep-link por país é um requisito prático para este produto.
3. **Substitua os emojis de bandeira por SVG** — ver *Assets*.
4. **A descrição dos regimes contém HTML inline.** Se vier de CMS, sanitize (`DOMPurify` ou equivalente) ou migre para um formato estruturado (Portable Text, MDX).
5. **Acessibilidade**: as linhas da tabela são clicáveis via `onclick` no protótipo — em produção, use `<a>` envolvendo a célula ou adicione `role="button"` + `tabIndex` + handler de teclado. As abas devem seguir o padrão ARIA de tablist ou virar navegação de links.
6. **Impressão/PDF** não está implementada. Se o produto exigir exportação de dossiê, é trabalho adicional.
