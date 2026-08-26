import type { Country, CountryId } from "./types";

export const COUNTRY_ORDER: CountryId[] = [
  "ch",
  "it",
  "pt",
  "es",
  "gr",
  "gb",
  "ae",
  "us",
  "uy",
  "hk",
];

export const COUNTRIES: Record<CountryId, Country> = {
  ch: {
    id: "ch",
    flagCode: "ch",
    name: "Suíça",
    region: "Europa",
    attract: "⭐⭐⭐⭐⭐",
    attractLabel: "Máxima · Longo prazo",
    alert: false,
    sumFiscal: "Lump-Sum / Forfait Fiscal (CHF 435k+ base)",
    sumFS: "ok",
    sumVisa: "Residência fiscal por Lump-Sum",
    sumVS: "ok",
    fiscal: [
      {
        name: "Lump-Sum (Forfait Fiscal / Pauschalbesteuerung)",
        status: "ok",
        desc: `O regime de forfait fiscal — regulamentado pelo Art. 14 da Lei Federal sobre Impostos Diretos (DBG) — representa o principal instrumento de atração de HNWIs da Suíça, com origem no século XIX. Em vez de tributar a renda e o patrimônio global efetivos, o sistema aplica alíquotas ordinárias sobre uma base tributável fictícia calculada a partir das <strong>despesas de vida anuais do contribuinte</strong>.

<strong>Base de cálculo:</strong> O valor tributável deve ser o maior entre: (i) sete vezes o valor anual do aluguel do imóvel principal na Suíça; (ii) as despesas de vida mundiais anuais comprovadas; (iii) o mínimo federal de CHF 435.000 (indexado para 2026).

<strong>Cantos elegíveis (21 de 26):</strong> Regime abolido em Zurique, Basileia-Cidade, Basileia-Campo, Schaffhausen e Appenzell Ausserrhoden. Recomendados: Vaud, Valais, Genebra (europeus); Zug, Schwyz, Obwalden, Nidwalden (não-EU).

<strong>Imposto anual efetivo estimado:</strong> CHF 150.000–350.000 dependendo do cantão, do imóvel e do perfil.`,
        kv: [
          { l: "Base federal mín. (2026)", v: "CHF 435.000" },
          { l: "Regra do imóvel", v: "7× valor locatício" },
          { l: "Imposto efetivo", v: "CHF 150k–350k/ano" },
          { l: "Cantos elegíveis", v: "21 de 26" },
          { l: "Processamento", v: "3 a 7 meses" },
          { l: "Inclui", v: "IR + Patrimônio + SS" },
        ],
        impact:
          "Máxima eficiência fiscal para patrimônios USD 20M+. Sem declaração de ativos e rendimentos globais (privacidade integral). Ganhos de capital sobre ativos financeiros pessoais isentos. Rede de 60+ tratados CDT. Passaporte suíço acessível após 10–12 anos.",
        warning:
          "Não-EU/EFTA em Ticino devem ter ao menos 55 anos como regra geral. Proposta de imposto sucessório sobre patrimônio >CHF 50M em debate político (não aprovada). Referendum de 2014 rejeitou abolição por 59% a 41%.",
        sources: [
          { t: "admin.ch · Lei DBG Art. 14", u: "https://www.admin.ch" },
          { t: "KPMG Switzerland", u: "https://kpmg.com/ch" },
        ],
      },
    ],
    visa: [
      {
        name: "Residência por Lump-Sum Fiscal (B-permit)",
        status: "ok",
        desc: `A Suíça não opera um golden visa formal por investimento imobiliário. A residência é obtida através de um processo binário: <strong>(i) ruling fiscal</strong> negociado com a autoridade tributária cantonal e <strong>(ii) permissão de residência</strong> concedida pela autoridade de migração cantonal.

O resultado é uma permissão de residência B (anual, renovável). Estima-se que cerca de 4.500 indivíduos detenham este status. Requisitos: estrangeiro não-suíço; nenhuma atividade remunerada na Suíça; presença mínima de 183 dias/ano. Naturalização possível após 10–12 anos.`,
        kv: [
          { l: "Tipo de permissão", v: "B-permit anual" },
          { l: "Titulares ativos", v: "~4.500 (2025)" },
          { l: "Presença mínima", v: "183 dias/ano" },
          { l: "Trabalho na CH", v: "Proibido" },
          { l: "Processamento", v: "3 a 7 meses" },
          { l: "Naturalização", v: "10–12 anos" },
        ],
        impact:
          "Combinação exclusiva: residência estável, privacidade fiscal, zero CGT, passaporte de alta potência e qualidade de vida. Perfil ideal: patrimônio líquido USD 20M+.",
        sources: [
          { t: "Richmond Chambers", u: "https://www.richmondchambers.ch" },
          {
            t: "GlobalCitizens Solutions",
            u: "https://www.globalcitizensolutions.com",
          },
        ],
      },
    ],
  },
  it: {
    id: "it",
    flagCode: "it",
    name: "Itália",
    region: "Europa",
    attract: "⭐⭐⭐",
    attractLabel: "Média · Renda ativa",
    alert: true,
    sumFiscal: "Flat Tax €300k/ano (desde jan/2026)",
    sumFS: "changed",
    sumVisa: "Investor Visa €250k–€2M + Nômade Digital",
    sumVS: "ok",
    fiscal: [
      {
        name: "Flat Tax para Novos Residentes (Art. 24-bis TUIR)",
        status: "changed",
        desc: `Criado em 2017, o regime sofreu três reajustes: €100k (2017–ago/2024) → €200k (ago–dez/2024) → €300k/ano (desde 1 jan/2026, Lei Orçamentária 2026). Aplica imposto fixo anual <em>substitutivo</em> de €300.000 sobre <strong>todos os rendimentos de fonte estrangeira</strong>. Rendimentos italianos são tributados normalmente (IRPEF 23%–43%).

<strong>Familiar:</strong> €50.000/pessoa/ano. <strong>Duração máxima:</strong> 15 anos. <strong>Restrições:</strong> sem crédito de imposto sobre tributos pagos no exterior; sem acesso a redução de withholding em CDTs italianos para rendimentos estrangeiros isentos.`,
        kv: [
          { l: "Imposto fixo anual", v: "€300.000" },
          { l: "Familiar", v: "€50.000/pessoa" },
          { l: "Duração", v: "15 anos (irrenov.)" },
          { l: "Não-residente prévia", v: "9 dos 10 anos" },
          { l: "Renda italiana", v: "IRPEF normal" },
          { l: "Crédito ext.", v: "❌ Não disponível" },
        ],
        impact:
          "Vantajoso para rendas globais >€2M/ano, mas progressivamente menos competitivo. Grécia mantém €100k/ano — 3× mais barato. Residentes anteriores ao aumento mantêm €100k.",
        warning:
          "Risco de escalada: regime aumentado 3 vezes em 8 anos. Sem garantia de estabilidade por horizonte de 15 anos.",
        sources: [
          {
            t: "Agenzia delle Entrate · Art. 24-bis",
            u: "https://www.agenziaentrate.gov.it",
          },
          { t: "Gazzetta Ufficiale", u: "https://www.gazzettaufficiale.it" },
        ],
      },
      {
        name: "Flat Tax 7% para Aposentados Estrangeiros",
        status: "ok",
        desc: `Alíquota única de 7% sobre rendimentos estrangeiros para pensionistas que transfiram residência fiscal para municípios elegíveis do <strong>Sul da Itália</strong> com menos de 20.000 habitantes (Sicília, Sardenha, Calábria, Campânia, Basilicata, Abruzzo, Molise, Puglia). Duração de 10 anos. Adesão deve ocorrer no primeiro ano de residência.`,
        kv: [
          { l: "Alíquota", v: "7% renda estrangeira" },
          { l: "Duração", v: "10 anos" },
          { l: "Elegível", v: "Aposentados c/ pensão est." },
          { l: "Localização", v: "Sul (<20k hab.)" },
          { l: "Renda IT", v: "IRPEF normal" },
          { l: "Familiar", v: "Qualifica separadamente" },
        ],
        impact:
          "Melhor regime fiscal para aposentados com pensões internacionais na Europa Ocidental. Custo inferior ao regime HNWI (7% sobre renda real vs. €300k fixo).",
        sources: [
          { t: "Agenzia delle Entrate", u: "https://www.agenziaentrate.gov.it" },
        ],
      },
    ],
    visa: [
      {
        name: "Investor Visa — Visto per Investitori (VPI)",
        status: "ok",
        desc: `Programa formal com quatro modalidades: (A) €250.000 em startup inovadora italiana; (B) €500.000 em empresa italiana; (C) €1.000.000 em fundo de investimento italiano; (D) €2.000.000 em títulos do governo (BTP). Investimento mantido por 2 anos. Visto inicial: 2 anos. Residência permanente após 5 anos. Cidadania após 10 anos.`,
        kv: [
          { l: "Startup italiana", v: "€250.000" },
          { l: "Empresa italiana", v: "€500.000" },
          { l: "Fundo IT", v: "€1.000.000" },
          { l: "Títulos BTP", v: "€2.000.000" },
          { l: "Visto inicial", v: "2 anos" },
          { l: "Residência perm.", v: "Após 5 anos" },
        ],
        impact:
          "Modalidade startup (€250k) é a mais acessível para combinar regime fiscal 7% do Sul + residência ativa. Títulos governamentais (€2M) adequados para perfis passivos.",
        sources: [
          {
            t: "Ministero degli Esteri · VPI",
            u: "https://investorvisa.mise.gov.it",
          },
        ],
      },
    ],
  },
  pt: {
    id: "pt",
    flagCode: "pt",
    name: "Portugal",
    region: "Europa",
    attract: "⭐⭐",
    attractLabel: "Baixa · Pós-NHR",
    alert: true,
    sumFiscal: "IFICI / NHR 2.0 — escopo restrito",
    sumFS: "changed",
    sumVisa: "Golden Visa restrito (sem imóvel urbano)",
    sumVS: "changed",
    fiscal: [
      {
        name: "NHR — Non-Habitual Resident (Regime Original)",
        status: "ext",
        desc: `Criado em 2009, foi o regime mais popular da Europa Ocidental para HNWIs por mais de 14 anos. Oferecia isenção de imposto sobre rendimentos estrangeiros por 10 anos + alíquota flat de 20% sobre rendimentos profissionais de alto valor. Encerrado para novas adesões em 1 jan/2024, com janela transitória até 31 mar/2025.`,
        kv: [
          { l: "Status", v: "❌ Extinto jan/2024" },
          { l: "Beneficiários antigos", v: "Mantêm direitos" },
          { l: "Janela transitória", v: "Encerrada mar/2025" },
          { l: "Base legal", v: "Lei 82/2023" },
        ],
        impact:
          "Perda crítica de atratividade de Portugal para HNWIs passivos. Alternativas diretas: Grécia (€100k) e EAU (zero IR pessoal).",
        sources: [
          { t: "Portal das Finanças · AT", u: "https://www.portaldasfinancas.gov.pt" },
        ],
      },
      {
        name: "IFICI — Incentivo à Investigação (NHR 2.0)",
        status: "new",
        desc: `Criado pela Lei 82/2023, substituiu o NHR com escopo dramaticamente mais restrito. <strong>Benefício:</strong> alíquota flat de 20% sobre rendimentos portugueses qualificados. Pensões estrangeiras agora tributadas progressivamente (14,5%–48%). <strong>Elegibilidade:</strong> I&D, ensino superior, startups em setores estratégicos, profissionais de saúde, artistas reconhecidos.`,
        kv: [
          { l: "Alíquota flat", v: "20% renda PT qualif." },
          { l: "Renda passiva ext.", v: "Progressiva" },
          { l: "Pensões estrangeiras", v: "14,5%–48%" },
          { l: "Duração", v: "10 anos" },
          { l: "Prazo adesão", v: "Até 15 jan" },
          { l: "Base legal", v: "Lei 82/2023" },
        ],
        impact:
          "Não aplicável à maioria dos HNWIs com renda passiva. Portugal deixou de ser referência para planejamento fiscal passivo. Adequado apenas para profissionais qualificados.",
        warning:
          "Para brasileiros: a eliminação do NHR aumenta a atratividade relativa do Uruguai (territorial 5+5).",
        sources: [{ t: "Lei 82/2023 · AT", u: "https://www.portaldasfinancas.gov.pt" }],
      },
    ],
    visa: [
      {
        name: "Golden Visa — ARI (Autorização para Investimento)",
        status: "changed",
        desc: `Investimento imobiliário em áreas urbanas densas (Lisboa, Porto, Algarve) excluído desde out/2023. Opções remanescentes: (A) €1.500.000 em transferência de capital; (B) €500.000 em fundos de capital de risco/private equity portugueses não-imobiliários; (C) 10 postos de trabalho; (D) €500.000 em imóveis em zonas de baixa densidade. Permanente após 5 anos com presença mínima.`,
        kv: [
          { l: "Fundo de investimento", v: "€500.000" },
          { l: "Transferência capital", v: "€1.500.000" },
          { l: "Imóvel urbano", v: "❌ Excluído" },
          { l: "Presença mín.", v: "7 dias (1º ano)" },
          { l: "Residência perm.", v: "Após 5 anos" },
          { l: "Naturalização", v: "Após 5 anos" },
        ],
        impact:
          "Com NHR extinto e Golden Visa restrito, Portugal perdeu competitividade como destino HNWI. Combinação Golden Visa + IFICI ainda funciona para empreendedores qualificados.",
        sources: [{ t: "AIMA", u: "https://aima.gov.pt" }],
      },
    ],
  },
  es: {
    id: "es",
    flagCode: "es",
    name: "Espanha",
    region: "Europa",
    attract: "⭐⭐⭐",
    attractLabel: "Média · Lei Beckham",
    alert: true,
    sumFiscal: "Lei Beckham + Ley Mbappé (Madrid)",
    sumFS: "ok",
    sumVisa: "Golden Visa EXTINTO · NLV · DNV",
    sumVS: "ext",
    fiscal: [
      {
        name: "Ley Mbappé — Decreto Legislativo 5/2024 (Comunidade de Madrid)",
        status: "new",
        desc: `Aprovada pela Comunidade de Madrid em 2024 (Decreto-Lei 5/2024, BOCM), a chamada "Ley Mbappé" é uma <strong>dedução autonômica de IRPF</strong> de até <strong>20% do valor investido</strong> por novos residentes fiscais em Madrid em ativos específicos: títulos de dívida pública e privada espanhola, ações de empresas espanholas (não cotadas ou listadas), participações em entidades, e contribuições a empresas. Aplicável a quem não foi residente fiscal em Espanha nos 5 anos anteriores.

<strong>Distinções-chave vs. Beckham:</strong> a Ley Mbappé atua sobre a parte autonômica do IRPF e é dedução por investimento (não regime especial). Pode ser <strong>combinada com a Lei Beckham</strong>. Investimento deve ser mantido por 6 anos. Sem teto formal de dedução.`,
        kv: [
          { l: "Dedução IRPF", v: "20% do investimento" },
          { l: "Aplicável em", v: "Comunidade de Madrid" },
          { l: "Não-residência prévia", v: "5 anos" },
          { l: "Manutenção mín.", v: "6 anos" },
          { l: "Combinável Beckham", v: "✅ Sim" },
          { l: "Base legal", v: "DL 5/2024 · BOCM" },
        ],
        impact:
          "Reforço significativo da atratividade de Madrid: stack Beckham (24% sobre renda ES) + isenção de Wealth Tax (Bonificação 100%) + Ley Mbappé (dedução de 20% sobre investimento). Conjunto torna Madrid o território mais competitivo da Espanha para HNWIs.",
        sources: [
          { t: "Comunidad de Madrid · BOCM", u: "https://www.bocm.es" },
          { t: "Comunidad de Madrid · Decreto 5/2024", u: "https://www.comunidad.madrid" },
        ],
      },
      {
        name: "Lei Beckham — Régimen de Impatriados (Art. 93 LIRPF)",
        status: "ok",
        desc: `Criado em 2004, ampliado pela Lei de Startups (28/2022). Aplica alíquota fixa de <strong>24%</strong> sobre rendimentos espanhóis até €600.000/ano (47% acima). Rendimentos estrangeiros ficam <strong>fora da tributação espanhola</strong>. <strong>Wealth Tax sobre ativos estrangeiros:</strong> isento. Duração: 6 anos fiscais. Adesão em 6 meses da inscrição na SS espanhola.`,
        kv: [
          { l: "Alíquota ES", v: "24% (até €600k) · 47%" },
          { l: "Renda estrangeira", v: "Fora da tributação" },
          { l: "Wealth Tax (ext.)", v: "Isento" },
          { l: "Duração", v: "6 anos fiscais" },
          { l: "Prazo adesão", v: "6 meses" },
          { l: "CCAA 0% Wealth", v: "Madri, Andaluzia, Galícia" },
        ],
        impact:
          "Altamente competitivo para executivos com salário >€300k/ano. Madri oferece combinação única: Beckham + isenção total de Patrimônio. Menos vantajoso para HNWIs puramente passivos.",
        sources: [{ t: "AEAT · Art. 93 LIRPF", u: "https://www.agenciatributaria.es" }],
      },
    ],
    visa: [
      {
        name: "Golden Visa — Autorización por Inversión",
        status: "ext",
        desc: `Encerrado em 3 abr/2025 pela Lei Orgânica 1/2025 (BOE 3 jan/2025), que revogou os artigos 63–67 da Lei 14/2013. O programa atraiu mais de 14.000 vistos desde 2013. Titulares existentes mantêm direitos até a próxima renovação.`,
        kv: [
          { l: "Status", v: "❌ Encerrado abr/2025" },
          { l: "Base legal", v: "L.O. 1/2025" },
          { l: "Mín. anterior", v: "€500.000 (imóvel)" },
          { l: "Existentes", v: "Direitos até renovação" },
          { l: "Alternativa imed.", v: "NLV ou DNV" },
        ],
        impact:
          "Impacto significativo para HNWIs que planejavam o Golden Visa como porta de entrada para Beckham. NLV e DNV permanecem como alternativas viáveis.",
        sources: [{ t: "BOE · L.O. 1/2025", u: "https://www.boe.es" }],
      },
      {
        name: "Visto Nômade Digital — Lei 28/2022",
        status: "new",
        desc: `Criado pela Lei de Startups (dez/2022), permite que profissionais que trabalham remotamente para empresas estrangeiras obtenham residência espanhola. Renda mínima: €2.646/mês. Visto inicial 1 ano; autorização 3 anos. <strong>Compatível com Lei Beckham</strong> após adesão em 6 meses da SS.`,
        kv: [
          { l: "Renda mínima", v: "€2.646/mês" },
          { l: "Visto inicial", v: "1 ano" },
          { l: "Autorização", v: "3 anos (renov.)" },
          { l: "Beckham compatível", v: "✅ Sim" },
          { l: "Empresa ES", v: "❌ Proibido" },
        ],
        impact:
          "Melhor opção para HNWIs trabalhadores remotos que combinam presença na Espanha com Beckham. Especialmente atraente em Madri.",
        sources: [{ t: "Ministerio de Inclusión", u: "https://www.inclusion.gob.es" }],
      },
    ],
  },
  gr: {
    id: "gr",
    flagCode: "gr",
    name: "Grécia",
    region: "Europa",
    attract: "⭐⭐⭐⭐⭐",
    attractLabel: "Máxima · HNWI passivo",
    alert: false,
    sumFiscal: "Flat Tax €100k/ano · Mais competitivo da UE",
    sumFS: "ok",
    sumVisa: "Golden Visa ativo · Reforma 2024",
    sumVS: "changed",
    fiscal: [
      {
        name: "Flat Tax HNWIs — Art. 5A do Código Tributário",
        status: "ok",
        desc: `Atualmente o <strong>regime mais competitivo da Europa</strong> para HNWIs com renda passiva estrangeira. Imposto fixo de <strong>€100.000/ano</strong> sobre todos os rendimentos estrangeiros. Familiar: €20.000/pessoa/ano.

<strong>Elegibilidade:</strong> não-residência fiscal grega por 7 dos 8 anos anteriores. Investimento mínimo de €500.000 em ativos gregos em 3 anos. <strong>Duração:</strong> 15 anos.

<em>Comparativo:</em> Itália €300k, Portugal NHR extinto, UK Non-Dom abolido — Grécia é o único flat tax genuinamente competitivo.`,
        kv: [
          { l: "Imposto anual", v: "€100.000" },
          { l: "Familiar", v: "€20.000/pessoa" },
          { l: "Duração", v: "15 anos" },
          { l: "Não-residente", v: "7 dos 8 anos" },
          { l: "Investimento mín.", v: "€500.000 em 3 anos" },
          { l: "vs. Itália", v: "3× mais barato" },
        ],
        impact:
          "Melhor regime europeu ativo para HNWIs passivos. Combinação Golden Visa + Flat Tax oferece caminho para cidadania grega (7 anos). Passaporte grego = UE + mobilidade global excepcional.",
        sources: [{ t: "AADE", u: "https://www.aade.gr" }],
      },
      {
        name: "Flat Tax 7% para Aposentados Estrangeiros",
        status: "ok",
        desc: `Alíquota fixa de 7% sobre rendimentos estrangeiros, desde que provenientes de países com CDT vigente com a Grécia. Duração de 15 anos. Residência efetiva: 183+ dias/ano. Cada cônjuge se qualifica individualmente.`,
        kv: [
          { l: "Alíquota", v: "7%" },
          { l: "Duração", v: "15 anos" },
          { l: "Requer CDT", v: "País c/ tratado" },
          { l: "Presença", v: "183 dias/ano" },
          { l: "Familiar", v: "Separadamente" },
        ],
        impact:
          "Melhor regime europeu para aposentados — mais amplo e longo que o italiano. Ausência de CDT Brasil-Grécia pode ser limitador.",
        sources: [{ t: "AADE", u: "https://www.aade.gr" }],
      },
    ],
    visa: [
      {
        name: "Golden Visa — Lei 5100/2024",
        status: "changed",
        desc: `Reformado em set/2024 pela Lei 5100/2024 com nova estrutura por zonas:

<strong>Zona A:</strong> €800.000 — Ática (Atenas), Tessalônica, Mykonos, Santorini.
<strong>Zona B:</strong> €400.000 — demais regiões.
<strong>Não-imobiliárias:</strong> €350.000 fundos de VC/PE; €500.000 depósito 12 meses; €250.000 conversão comercial→residencial ou patrimônio histórico.

Visto inicial 5 anos. Residência permanente após 5 anos. <strong>Cidadania em 7 anos</strong> com 183 dias/ano.`,
        kv: [
          { l: "Zona A", v: "€800.000" },
          { l: "Zona B", v: "€400.000" },
          { l: "Conversão patrim.", v: "€250.000" },
          { l: "Fundo investimento", v: "€350.000" },
          { l: "Depósito 12m", v: "€500.000" },
          { l: "Cidadania", v: "7 anos · 183 dias" },
        ],
        impact:
          "Combinação Golden Visa + Flat Tax €100k é a oferta mais competitiva da Europa para HNWIs passivos com patrimônio USD 5M–50M.",
        sources: [
          { t: "Migration.gov.gr · Lei 5100/2024", u: "https://migration.gov.gr" },
        ],
      },
    ],
  },
  ae: {
    id: "ae",
    flagCode: "ae",
    name: "Emirados Árabes Unidos",
    region: "Oriente Médio",
    attract: "⭐⭐⭐⭐⭐",
    attractLabel: "Máxima · Zero IR pessoal",
    alert: false,
    sumFiscal: "Zero IR pessoal (estrutural)",
    sumFS: "ok",
    sumVisa: "Golden Visa 10 anos + Green Visa 5 anos",
    sumVS: "ok",
    fiscal: [
      {
        name: "Zero IR Pessoal — Sistema Fiscal dos EAU",
        status: "ok",
        desc: `Os EAU não possuem imposto de renda pessoal sobre qualquer categoria: salários, dividendos, ganhos de capital, aluguéis, royalties, juros. Característica estrutural sem horizonte de expiração.

<strong>Imposto Corporativo (jun/2023):</strong> 9% para PJs com receita >AED 375.000/ano. Não incide sobre rendimentos pessoais. <strong>Free Zones:</strong> DMCC, ADGM, IFZA, DIFC e 40+ zonas com benefícios próprios. <strong>VAT:</strong> 5%. Sem imposto sobre herança ou patrimônio.`,
        kv: [
          { l: "IR pessoal", v: "0%" },
          { l: "IR corporativo", v: "9% (PJ >AED 375k)" },
          { l: "Ganhos capital PF", v: "0%" },
          { l: "Herança", v: "0%" },
          { l: "VAT", v: "5%" },
          { l: "Withholding", v: "0%" },
        ],
        impact:
          "Máxima eficiência fiscal global. Para brasileiros: ausência de CDT Brasil–EAU significa que rendas de controladas no exterior podem estar sujeitas ao IRPF brasileiro (transparência fiscal — Lei 12.973/2014).",
        warning:
          "Para brasileiros: mudança de residência fiscal exige DIRPF de saída definitiva, recolhimento do ganho de capital na saída e planejamento das estruturas. Sem CDT, há risco de dupla tributação.",
        sources: [
          { t: "FTA", u: "https://tax.gov.ae" },
          { t: "u.ae", u: "https://u.ae" },
        ],
      },
    ],
    visa: [
      {
        name: "Golden Visa — 10 Anos",
        status: "ok",
        desc: `Programa de residência de longo prazo, válido por 10 anos com renovação automática. <strong>Vias:</strong> (A) imóvel AED 2M (~USD 545k); (B) AED 2M em fundos públicos; (C) empresa com capital AED 500k; (D) profissionais qualificados (médicos, engenheiros, artistas).

Incluídos: cônjuge, filhos, pais, empregados domésticos. <strong>Sem requisito de permanência mínima</strong>.`,
        kv: [
          { l: "Imóvel mín.", v: "AED 2M (USD 545k)" },
          { l: "Empresa", v: "AED 500k" },
          { l: "Validade", v: "10 anos" },
          { l: "Permanência", v: "Não exigida" },
          { l: "Família", v: "✅ Incluída" },
          { l: "Cidadania", v: "Excepcional" },
        ],
        impact:
          "Combinação imbatível: zero IR pessoal + 10 anos sem requisito de permanência. Ideal para HNWIs que desejam estrutura fiscal eficiente sem mudança permanente.",
        sources: [{ t: "ICP", u: "https://icp.gov.ae" }],
      },
      {
        name: "Green Visa — 5 Anos",
        status: "new",
        desc: `Introduzido em 2022 para profissionais qualificados, freelancers e empreendedores. Renda mínima: AED 360.000/ano (~USD 98k). Salário mínimo (emprego): AED 30.000/mês desde out/2025. Patrocínio familiar incluído. Renovável.`,
        kv: [
          { l: "Renda mínima", v: "AED 360k/ano" },
          { l: "Salário (emprego)", v: "AED 30k/mês" },
          { l: "Validade", v: "5 anos" },
          { l: "Grau acadêmico", v: "Exigido" },
          { l: "Familiar", v: "✅" },
          { l: "Para Golden Visa", v: "Via acumulação" },
        ],
        impact:
          "Porta de entrada eficiente para HNWIs que ainda não atingiram AED 2M em imóvel. Estágio intermediário para o Golden Visa.",
        sources: [{ t: "MOHRE", u: "https://mohre.gov.ae" }],
      },
    ],
  },
  us: {
    id: "us",
    flagCode: "us",
    name: "Estados Unidos",
    region: "Américas",
    attract: "Complexo",
    attractLabel: "Citizenship-Based Tax",
    alert: false,
    sumFiscal: "CBDT · Tributação por cidadania",
    sumFS: "risk",
    sumVisa: "Gold Card · Platinum · EB-2 NIW · EB-5",
    sumVS: "new",
    fiscal: [
      {
        name: "Sistema CBDT — Citizenship-Based Taxation",
        status: "risk",
        desc: `Os EUA são um dos únicos países do mundo (com a Eritréia) que tributa cidadãos e residentes permanentes sobre <strong>renda mundial independente de onde moram</strong>. Qualquer titular de cidadania americana ou green card é obrigado a declarar e pagar impostos sobre toda renda global ao IRS.

<strong>Estruturas para não-cidadãos:</strong> Foreign Grantor Trust (preserva assets antes do GC); Non-Grantor Trust (isolamento de rendimentos); Corporate Holding (atenção a CFC/PFIC rules); Pre-Immigration Planning (ganhos acumulados antes do GC são tributados).`,
        kv: [
          { l: "Base", v: "Renda mundial" },
          { l: "Não-residentes", v: "Apenas fonte EUA" },
          { l: "Estate (não-domic.)", v: "Isenção USD 60k" },
          { l: "Estate (cidadão/GC)", v: "USD 13,6M (2026)" },
          { l: "PFIC reporting", v: "Obrigatório" },
          { l: "FBAR/FATCA", v: ">USD 10k" },
        ],
        impact:
          "EUA não são destino de otimização fiscal passiva. São destino de acesso a mercado, proteção patrimonial via trust e mobilidade. Custo de compliance substancial.",
        warning:
          'Renunciar à cidadania implica "Exit Tax" sobre ganhos não realizados (Sec. 877A IRC). Coberto expatriado paga imposto como se tivesse vendido todos os ativos no dia anterior à saída.',
        sources: [
          { t: "IRS · IRC", u: "https://www.irs.gov" },
          { t: "USCIS", u: "https://www.uscis.gov" },
        ],
      },
    ],
    visa: [
      {
        name: "Trump Gold Card — Executive Order 14351",
        status: "new",
        desc: `Lançado em dez/2025 via trumpcard.gov, criado pelo Executive Order 14351 (set/2025). <strong>Não é categoria separada de visto</strong>, mas via expedita para as categorias EB-1 (capacidade extraordinária) ou EB-2 NIW (interesse nacional) da lei migratória existente.

<strong>Modalidades:</strong>
• <em>Individual Gold Card:</em> contribuição de USD 1.000.000 ao Tesouro americano (não recuperável) + USD 15.000 de taxa DHS no registro;
• <em>Corporate Gold Card:</em> patrocínio empresarial de USD 2.000.000 por funcionário.

<strong>Processo:</strong> registro em trumpcard.gov → taxa DHS → vetting (antecedentes, origem dos fundos) → I-140G → aprovação → processamento consular. Não permite Adjustment of Status nos EUA.

<strong>Situação abr/2026:</strong> apenas 1 aprovação reportada oficialmente. Programa enfrenta questionamentos constitucionais sobre autoridade executiva para alterar lei de imigração sem ato do Congresso.`,
        kv: [
          { l: "Individual", v: "USD 1.000.000 + USD 15k DHS" },
          { l: "Corporate", v: "USD 2.000.000/funcionário" },
          { l: "Visa base", v: "EB-1 ou EB-2 NIW" },
          { l: "AoS", v: "❌ Não permitido (consular only)" },
          { l: "Aprovações", v: "~1 (até abr/2026)" },
          { l: "Base legal", v: "Executive Order 14351" },
        ],
        impact:
          "Qualificação sob EB-1A ou EB-2 NIW é substancial e não dispensada pelo pagamento. Programa muito mais complexo que divulgado inicialmente.",
        warning:
          "Risco jurídico elevado: criado por Executive Order, não por lei do Congresso. Pode ser suspenso ou revogado por administração futura. Contribuição USD 1M é irrecuperável mesmo em caso de negativa ou revogação.",
        sources: [
          { t: "USCIS · Form I-140G", u: "https://www.uscis.gov/i-140g" },
          { t: "trumpcard.gov · Portal oficial", u: "https://www.trumpcard.gov" },
          {
            t: "White House · EO 14351",
            u: "https://www.whitehouse.gov/presidential-actions/",
          },
        ],
      },
      {
        name: "Trump Platinum Card — Em lista de espera",
        status: "new",
        desc: `Modalidade premium do programa Gold Card, anunciada em set/2025 mas ainda <strong>não liberada para aplicações</strong> até abr/2026. Diferenciador-chave em relação ao Gold Card individual: permite ao titular permanecer até <strong>270 dias por ano nos EUA sem ser sujeito ao Substantial Presence Test</strong> — ou seja, sem se tornar residente fiscal americano e, portanto, sem tributação americana sobre rendimentos de fonte estrangeira.

Contribuição: <strong>USD 5.000.000</strong> ao Tesouro (irrecuperável). Voltado para HNWIs globais que querem residência efetiva nos EUA sem o ônus do Citizenship-Based Taxation. Lista de espera ativa em trumpcard.gov.`,
        kv: [
          { l: "Contribuição", v: "USD 5.000.000" },
          { l: "Permanência sem SPT", v: "Até 270 dias/ano" },
          { l: "Tributação renda ext.", v: "Isenta (não-residente fiscal)" },
          { l: "Status atual", v: "Lista de espera (abr/2026)" },
          { l: "Recuperabilidade", v: "❌ Não recuperável" },
          { l: "Base legal", v: "Executive Order 14351" },
        ],
        impact:
          "O Platinum Card é o produto mais relevante para HNWIs passivos com renda global elevada — a isenção de SPT por 270 dias/ano elimina o principal obstáculo do CBDT americano. Porém, indisponibilidade prolongada e fundamentos legais incertos limitam a viabilidade prática até 2026.",
        warning:
          "Sem cronograma oficial de liberação. A própria existência depende da continuidade do EO 14351 — sem amparo legislativo, vulnerável a revogação.",
        sources: [
          { t: "trumpcard.gov · Portal oficial", u: "https://www.trumpcard.gov" },
          {
            t: "White House · EO 14351",
            u: "https://www.whitehouse.gov/presidential-actions/",
          },
        ],
      },
      {
        name: "EB-2 NIW — National Interest Waiver",
        status: "ok",
        desc: `Categoria estatutária da segunda preferência empregatícia (INA §203(b)(2)), permite que profissionais com grau acadêmico avançado ou habilidade excepcional obtenham green card <strong>sem oferta de emprego e sem certificação trabalhista (PERM)</strong>, mediante demonstração de que o seu trabalho beneficia o interesse nacional dos EUA.

<strong>Critérios (Matter of Dhanasar, 2016):</strong> (i) o empreendimento proposto tem mérito substancial e importância nacional; (ii) o requerente está bem posicionado para avançar o empreendimento; (iii) o waiver da oferta de emprego beneficia os EUA.

<strong>Perfis típicos:</strong> pesquisadores, médicos, engenheiros, profissionais STEM, empreendedores tecnológicos, executivos de alto escalão. Auto-petição permitida (sem necessidade de patrocinador). Adjustment of Status permitido se em status válido. Base do Trump Gold Card individual.`,
        kv: [
          { l: "Investimento", v: "❌ Não exigido" },
          { l: "Oferta de emprego", v: "❌ Não exigida" },
          { l: "Auto-petição", v: "✅ Permitida" },
          { l: "AoS", v: "✅ Permitida" },
          { l: "Processamento", v: "12–24 meses (varia por país)" },
          { l: "Base legal", v: "INA §203(b)(2)(B)" },
        ],
        impact:
          "Via mais eficiente em custo–benefício para HNWIs profissionais qualificados (STEM, biotech, finanças, AI). Sem investimento mínimo. Atratividade superior ao EB-5 para perfis com méritos acadêmicos ou empresariais comprováveis.",
        sources: [
          {
            t: "USCIS · EB-2 NIW Policy Manual",
            u: "https://www.uscis.gov/policy-manual/volume-6-part-f-chapter-5",
          },
          {
            t: "Matter of Dhanasar (AAO 2016)",
            u: "https://www.justice.gov/eoir/file/904501/dl",
          },
        ],
      },
      {
        name: "EB-5 Immigrant Investor Visa",
        status: "changed",
        desc: `Única via <em>estatutária</em> de residência por investimento — proteção legislativa que o Gold Card não possui. Reformado pelo EB-5 RIA (2022). <strong>Investimentos:</strong> USD 800.000 em TEA ou USD 1.050.000 em demais regiões. Criação de 10 empregos. Capital "em risco". Adjustment of Status permitido. Inclui cônjuge e filhos solteiros menores de 21 anos.`,
        kv: [
          { l: "Investimento TEA", v: "USD 800.000" },
          { l: "Geral", v: "USD 1.050.000" },
          { l: "Empregos", v: "10" },
          { l: "Processamento", v: "5–8 anos" },
          { l: "AoS", v: "✅ Permitido" },
          { l: "Base legal", v: "INA §203(b)(5)" },
        ],
        impact:
          "Segurança jurídica superior ao Gold Card. Capital tem possibilidade de retorno. Prazo 5–8 anos é limitador.",
        sources: [
          {
            t: "USCIS · EB-5 Program",
            u: "https://www.uscis.gov/working-in-the-united-states/permanent-workers/eb-5-immigrant-investor-program",
          },
          {
            t: "EB-5 Reform and Integrity Act 2022",
            u: "https://www.congress.gov/bill/117th-congress/house-bill/2471",
          },
        ],
      },
    ],
  },
  uy: {
    id: "uy",
    flagCode: "uy",
    name: "Uruguai",
    region: "Américas",
    attract: "⭐⭐⭐⭐",
    attractLabel: "Alta · América Latina",
    alert: false,
    sumFiscal: "IRNR · 7% vitalício ou tax holiday 11 anos",
    sumFS: "ok",
    sumVisa: "Residência por investimento ~USD 1,7M",
    sumVS: "ok",
    fiscal: [
      {
        name: "IRNR — Tax Holiday + Opções para Novos Residentes",
        status: "ok",
        desc: `Os novos residentes fiscais no Uruguai (não-residentes nos 5 anos anteriores) podem optar entre <strong>duas modalidades excludentes</strong> de tributação sobre rendimentos de capital mobiliário de fonte estrangeira (juros, dividendos), conforme o art. 6 bís do Título 7 do TO 1996 (Lei 19.937/2021):

<strong>Opção A — Tax Holiday ("feriado fiscal"):</strong> isenção total no exercício em que adquire residência + os <strong>10 exercícios fiscais seguintes</strong> (~11 anos no total). Após o período: tributação de <strong>12% (IRPF Cat. I)</strong> sobre rendimentos de capital mobiliário estrangeiro.

<strong>Opção B — Flat 7% Vitalício:</strong> alíquota fixa de <strong>7%</strong> sobre os mesmos rendimentos a partir do ano 1 — sem prazo de expiração, vitalícia.

<strong>Renda de outras fontes:</strong> sistema territorial geral mantido — ganhos de capital, aluguéis e renda do trabalho de fonte estrangeira permanecem isentos. Renda de fonte uruguaia tributada normalmente (IRPF progressivo 10%–36%; juros e dividendos uruguaios a 7% e 12%).

<strong>Sem imposto sobre herança, doações, CFC rules para PF ou controle de câmbio.</strong>`,
        kv: [
          { l: "Opção A — Tax holiday", v: "11 anos isento + 12% depois" },
          { l: "Opção B — Flat", v: "7% vitalício" },
          { l: "Não-residência prévia", v: "5 anos" },
          { l: "Demais rendas ext.", v: "Isentas (territorial)" },
          { l: "IRPF renda local", v: "10%–36% progressivo" },
          { l: "Herança / CFC PF", v: "0% / Não aplicável" },
        ],
        impact:
          "Flexibilidade única: HNWIs com horizonte de longo prazo (>11 anos) tendem a preferir Opção B (7% vitalício); perfis em transição (5–10 anos) preferem Opção A. Melhor janela de otimização fiscal na América Latina para brasileiros em desvinculação fiscal do Brasil. Maior rule of law da AL.",
        warning:
          "A opção entre A e B é <strong>irrevogável</strong> e deve ser exercida no primeiro exercício de residência. Saída fiscal do Brasil (DIRPF de saída definitiva + ganho de capital sobre patrimônio global) exige planejamento; obter residência UY não basta — é necessária comunicação formal à RFB.",
        sources: [
          { t: "DGI · Dirección General Impositiva", u: "https://www.dgi.gub.uy" },
          {
            t: "Lei 19.937/2021 · IMPO",
            u: "https://www.impo.com.uy/bases/leyes/19937-2021",
          },
          { t: "Decreto 163/020 · IMPO", u: "https://www.impo.com.uy" },
        ],
      },
    ],
    visa: [
      {
        name: "Residência por Investimento ou Rendas",
        status: "ok",
        desc: `Três vias principais: <strong>(A) Investimento:</strong> imóveis UI 15M (~USD 1,7M) ou 15 postos de trabalho — também qualifica para extensão fiscal de 5 a 10 anos. <strong>(B) Meios próprios:</strong> renda passiva ≥USD 1.500/mês ou imóvel >USD 380.000. <strong>(C) Aposentados:</strong> pensão ≥USD 1.500/mês.

Naturalização em 3 anos (investimento) ou 5 anos (geral). Passaporte uruguaio: +140 países sem visto.`,
        kv: [
          { l: "Investimento", v: "UI 15M (USD 1,7M)" },
          { l: "Meios próprios", v: "USD 1.500/mês" },
          { l: "Imóvel (rentista)", v: ">USD 380k" },
          { l: "Processamento", v: "3–6 meses" },
          { l: "Naturalização inv.", v: "3 anos" },
          { l: "Naturalização ger.", v: "5 anos" },
        ],
        impact:
          "Processo imigratório mais ágil e seguro da AL para HNWIs. Sem burocracia excessiva, sem corrupção sistêmica, sem risco político material. Montevidéu como centro financeiro regional.",
        sources: [
          { t: "Dirección Nacional de Migración", u: "https://migracion.minterior.gub.uy" },
        ],
      },
    ],
  },
  gb: {
    id: "gb",
    flagCode: "gb",
    name: "Reino Unido",
    region: "Europa",
    attract: "⭐⭐",
    attractLabel: "Baixa · Pós-Non-Dom",
    alert: true,
    sumFiscal: "FIG 4 anos · Non-Dom abolido abr/2025",
    sumFS: "new",
    sumVisa: "Innovator Founder · HPI",
    sumVS: "ok",
    fiscal: [
      {
        name: "Non-Domiciled (Remittance Basis) — EXTINTO",
        status: "ext",
        desc: `Regime com mais de 200 anos de existência foi abolido pelo <strong>Finance Act 2025</strong>, após o Autumn Budget de out/2024. A partir de 6 abr/2025, o conceito jurídico de "domicílio" foi removido. Estimava-se 74.000 indivíduos no regime, com £8,2 bi em receita fiscal anual.`,
        kv: [
          { l: "Status", v: "❌ Abolido abr/2025" },
          { l: "Base legal", v: "Finance Act 2025" },
          { l: "Beneficiários", v: "~74.000" },
          { l: "TRF", v: "Aberta até abr/2028" },
          { l: "Transição", v: "Tributação global desde abr/2025" },
        ],
        impact:
          "Impacto devastador para HNWIs em Londres. Saída massiva para Suíça, EAU e Grécia. TRF permite repatriar rendas históricas com alíquota reduzida (12% em 2025–26; 15% em 2026–28).",
        sources: [{ t: "HMRC · Finance Act 2025", u: "https://www.gov.uk" }],
      },
      {
        name: "FIG — Foreign Income & Gains Regime",
        status: "new",
        desc: `Substituto do Non-Dom criado pelo Finance Act 2025. <strong>Elegibilidade:</strong> torna-se residente após pelo menos 10 anos consecutivos de não-residência. Durante <strong>4 primeiros anos</strong>: isenção de IT e CGT sobre rendimentos estrangeiros.

Após 4 anos: tributação global (IT até 45%; CGT até 24%; IHT 40% >£325k). <strong>Overseas Workday Relief (OWR)</strong> ampliado para 4 anos.`,
        kv: [
          { l: "Elegibilidade", v: "10 anos não-residência" },
          { l: "Duração", v: "4 anos" },
          { l: "Após", v: "Tributação global" },
          { l: "IT máx.", v: "45%" },
          { l: "CGT máx.", v: "24%" },
          { l: "IHT", v: "40% (>£325k)" },
        ],
        impact:
          "Janela muito estreita: 4 anos vs. 15 anos da Grécia/Itália, sem prorrogação. Londres mantém atratividade para missões temporárias e gestores de fundos, mas perdeu relevância de longo prazo.",
        warning:
          "HNWIs no Non-Dom que permaneceram passam a ser tributados sobre renda global desde abr/2025. Avaliação urgente de reestruturação patrimonial.",
        sources: [{ t: "HMRC · FIG Guidance", u: "https://www.gov.uk" }],
      },
    ],
    visa: [
      {
        name: "Innovator Founder Visa",
        status: "ok",
        desc: `Para empreendedores com ideia de negócio inovadora, escalável e viável. Exige endosso de entidade credenciada pelo Home Office (aceleradoras, incubadoras). Sem valor mínimo formal. ILR após 3 anos com negócio ativo. Sem requisito de tempo mínimo de presença.`,
        kv: [
          { l: "Investimento", v: "Não definido" },
          { l: "Endosso", v: "Entidade credenciada" },
          { l: "ILR", v: "3 anos" },
          { l: "Presença", v: "Avaliada na renovação" },
          { l: "Cidadania", v: "1 ano após ILR" },
        ],
        impact:
          "Mais adequado para fundadores de startups do que HNWIs passivos. Combinável com FIG (se qualificado) para isenção nos primeiros 4 anos.",
        sources: [
          { t: "Home Office · UKVI", u: "https://www.gov.uk/innovator-founder-visa" },
        ],
      },
    ],
  },
  hk: {
    id: "hk",
    flagCode: "hk",
    name: "Hong Kong",
    region: "Ásia",
    attract: "⭐⭐⭐",
    attractLabel: "Média-alta · Risco político",
    alert: false,
    sumFiscal: "Tributação territorial · IR máx. 17%",
    sumFS: "ok",
    sumVisa: "CIES HKD 30M + TTPS",
    sumVS: "new",
    fiscal: [
      {
        name: "Sistema Territorial — Salaries Tax & Profits Tax",
        status: "ok",
        desc: `HK tributa exclusivamente rendimentos de <strong>fonte local</strong>. Dividendos, ganhos de capital, aluguéis estrangeiros, royalties internacionais e rendimentos de investimentos no exterior são <strong>integralmente isentos</strong>.

<strong>Salaries Tax:</strong> progressivo 2%–17% ou 15% sobre renda bruta — o que for menor. <strong>Profits Tax:</strong> 16,5% sobre lucros locais. <strong>Sem imposto sobre herança, ganhos de capital ou patrimônio.</strong>

<strong>BEPS Pillar 2:</strong> em implementação para grupos >€750M (impacto limitado para HNWIs individuais).`,
        kv: [
          { l: "IR máximo", v: "17% (ou 15%)" },
          { l: "Dividendos", v: "0%" },
          { l: "Ganhos capital", v: "0%" },
          { l: "Herança", v: "0%" },
          { l: "Profits Tax", v: "16,5%" },
          { l: "Renda ext.", v: "Isenta" },
        ],
        impact:
          "Sistema altamente eficiente para gestores de investimentos, family offices e traders. Atenção: risco político crescente desde 2019–2020 (Lei de Segurança Nacional, erosão de autonomia).",
        warning:
          "A Lei de Segurança Nacional (2020) e progressiva integração com legislação continental criaram incerteza jurídica. Avaliar Singapura ou EAU como contingência.",
        sources: [{ t: "Inland Revenue Department", u: "https://www.ird.gov.hk" }],
      },
    ],
    visa: [
      {
        name: "CIES — Capital Investment Entrant Scheme",
        status: "new",
        desc: `Reativado em mar/2024 após suspensão em 2015. Investimento mínimo de <strong>HKD 30.000.000</strong> (~USD 3,8M) em ativos financeiros elegíveis. <strong>Imóveis excluídos.</strong> Mínimo de 3 ativos distintos. Adicional HKD 3M no HKVIF (HK New Capital Investment Entrant Fund). Permanente após 7 anos.`,
        kv: [
          { l: "Investimento", v: "HKD 30M (USD 3,8M)" },
          { l: "HKVIF", v: "HKD 3M (USD 385k)" },
          { l: "Imóveis", v: "❌ Excluídos" },
          { l: "Ativos mín.", v: "3 categorias" },
          { l: "Permanência", v: "7 anos" },
          { l: "Reativado", v: "Março 2024" },
        ],
        impact:
          "Ticket elevado, mas HK oferece acesso único ao mercado financeiro chinês e asiático, além do sistema bancário mais sofisticado da Ásia. Adequado para family offices.",
        sources: [{ t: "Immigration Department", u: "https://www.immd.gov.hk" }],
      },
      {
        name: "Top Talent Pass Scheme (TTPS)",
        status: "ok",
        desc: `Para profissionais altamente qualificados. <strong>Cat. A:</strong> renda anual ≥HKD 2,5M (~USD 320k). <strong>Cat. B:</strong> top 100 universidades + 3 anos exp. <strong>Cat. C:</strong> top 100, sem exp. (até 5 anos formado). Validade: 1–2 anos, renovável.`,
        kv: [
          { l: "Cat. A renda", v: "≥HKD 2,5M/ano" },
          { l: "Cat. B", v: "Top 100 + 3 anos" },
          { l: "Validade", v: "1–2 anos" },
          { l: "Oferta emprego", v: "Não exigida" },
          { l: "Familiar", v: "✅" },
        ],
        impact:
          "Porta de entrada ágil para executivos e profissionais de alta renda sem o compromisso financeiro do CIES.",
        sources: [{ t: "Immigration · TTPS", u: "https://www.immd.gov.hk" }],
      },
    ],
  },
};

export function getCountry(id: string): Country | undefined {
  return COUNTRIES[id as CountryId];
}
