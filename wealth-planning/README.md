# Wealth Planning — Material de Consulta Patrimonial

Compêndio HTML standalone (`../wealth-planning.html`) reunindo cinco módulos de wealth planning:

1. **Sociedades** — LLC americana, PICs de BVI/Cayman/Bahamas, documentos societários, cisão, usufruto de participações.
2. **Veículos Sucessórios** — trust, testamento, Lei 14.754/2023, holding familiar, PTC, foundations offshore.
3. **Ativos de Alto Valor Agregado** — aeronaves, embarcações, obras de arte.
4. **Regimes Especiais** — reaproveita o conteúdo já existente em `src/data/countries.ts` (10 jurisdições).
5. **Providências — SCE IED e SCE Crédito** — declarações ao Banco Central sobre capitais estrangeiros.

## Estrutura

- `data/*.json` — dados de origem (uma seção por arquivo), no formato descrito abaixo. **Fonte de verdade** — edite aqui, nunca no HTML final.
- `wealth-planning.template.html` — template com marcadores `"@@SOC@@"`, `"@@SUC@@"`, `"@@ATV@@"`, `"@@REGIMES@@"`, `"@@SCE@@"`.
- `build.mjs` — injeta os JSONs de `data/` no template e gera `../wealth-planning.html`.

Para regenerar o HTML depois de editar qualquer JSON em `data/`:

```bash
node wealth-planning/build.mjs
```

`data/04-regimes-especiais-raw.json` foi extraído de `src/data/countries.ts` via:

```bash
node --experimental-strip-types -e "
import { COUNTRIES, COUNTRY_ORDER } from './src/data/countries.ts';
import fs from 'fs';
fs.writeFileSync('wealth-planning/data/04-regimes-especiais-raw.json', JSON.stringify({COUNTRIES, COUNTRY_ORDER}));
"
```

Rode esse comando novamente e depois `node wealth-planning/build.mjs` sempre que `src/data/countries.ts` for atualizado, para manter a Seção 4 sincronizada com o app principal.

## Modelo de dados (seções 1, 2, 3 e 5)

```ts
interface Topic {
  name: string;
  eyebrow?: string;            // rótulo curto no topo do card
  legalBasis?: string;         // HTML inline permitido (<strong>, <em>)
  desc: string;                 // corpo central, rich text
  kv?: { l: string; v: string }[];
  requirements?: string[];
  process?: { step: string; timing?: string; detail: string }[];
  costs?: { item: string; value: string; note?: string }[];
  sections?: { title: string; body: string }[];  // acordeões de aprofundamento
  warning?: string;             // sempre visível, caixa de risco
  brazilNote?: string;
  impact?: string;
  sources: { t: string; u: string }[];
}

interface SectionFile {
  sectionId: string;
  sectionTitle: string;
  sectionSubtitle: string;
  topics: Topic[];
}
```

A Seção 4 usa o modelo `Country`/`Regime` já existente em `src/data/types.ts`.

## ⚠️ Nota de verificação de fontes — leia antes de usar com cliente

Este material foi pesquisado por agentes com acesso a busca na web, mas o ambiente de execução **bloqueou o acesso direto** (WebFetch) a vários domínios oficiais durante a pesquisa — incluindo `bcb.gov.br`, `planalto.gov.br` e `gov.br` em alguns momentos. Isso obrigou os agentes das Seções 2 (Veículos Sucessórios) e 5 (SCE) a corroborar dispositivos legais e valores por meio de **fontes secundárias** (escritórios de advocacia, portais jurídicos, agentes de câmbio) em vez de ler o texto primário diretamente.

Cada `topic` que contém uma afirmação não plenamente confirmada carrega uma marca `[VERIFICAR: ...]` explicando o que falta checar. **Antes de usar este material com um cliente, especialmente a Seção 5 (SCE — valores de corte, prazos e multas) e os pontos assinalados na Seção 2 (Lei 14.754/2023, ITCMD sobre trust)**, é recomendável:

1. Buscar todos os `[VERIFICAR: ...]` no HTML (Ctrl+F) e confirmar cada um contra o texto oficial (planalto.gov.br, bcb.gov.br, agenciatributaria etc.).
2. Revisar valores monetários e alíquotas contra a norma vigente na data de uso — vários regimes (TIPI, valores de corte do Bacen) mudam periodicamente.
3. Dar baixa nesta nota após a revisão, ou repetir a pesquisa das Seções 2 e 5 num ambiente com acesso irrestrito às fontes primárias.

Nenhum agente inventou número de lei, artigo, alíquota ou prazo — onde a fonte não pôde ser confirmada, o texto foi escrito com ressalva ou marcado para verificação, em vez de apresentado como fato.
