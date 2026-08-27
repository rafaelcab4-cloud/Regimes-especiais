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
    alert: false,
    sumFiscal: "Lump-Sum / Forfait Fiscal (CHF 435k+ base)",
    sumFS: "ok",
    sumVisa: "Residência fiscal por Lump-Sum",
    sumVS: "ok",
    fiscal: [
      {
        name: "Lump-Sum (Forfait Fiscal / Pauschalbesteuerung)",
        status: "ok",
        desc: `O regime de forfait fiscal — regulamentado pelo Art. 14 da Lei Federal sobre Impostos Diretos (DBG) — é aplicado desde o século XIX. Em vez de tributar a renda e o patrimônio global efetivos, o sistema aplica alíquotas ordinárias sobre uma base tributável fictícia calculada a partir das <strong>despesas de vida anuais do contribuinte</strong>.

<strong>Base de cálculo:</strong> o valor tributável deve ser o maior entre: (i) sete vezes o valor locativo anual do imóvel principal na Suíça — aplicado ao valor locativo estimado para quem é proprietário, ao aluguel efetivo para quem aluga, ou a três vezes o custo anual de pensão para quem reside em hotel; (ii) as despesas de vida mundiais anuais comprovadas; (iii) o mínimo federal de CHF 435.000, indexado para 2026 pela Ordonnance do DFF de 10/set/2025 (RO 2025 579).

<strong>Cantões elegíveis (21 de 26):</strong> regime abolido em Zurique, Basileia-Cidade, Basileia-Campo, Schaffhausen e Appenzell Ausserrhoden. Nos demais, o mínimo pode ser superior ao federal — em Genebra, por exemplo, a base cantonal e comunal combinada é de CHF 426.357 para 2026.

<strong>Cálculo de controle:</strong> paralelamente à base de despesa, a administração calcula o imposto que incidiria sobre os rendimentos de fonte suíça do contribuinte (imóveis, dividendos e royalties suíços); o imposto devido é o maior entre os dois cálculos.

<strong>Processo e duração do ruling:</strong> o acordo é negociado por requerimento à administração tributária cantonal — tipicamente com apoio de advogado ou fiduciário local — antes da mudança de residência ou, no mais tardar, antes da primeira tributação. É válido por cerca de 5 anos e renovável por processo semelhante; mudança de cantão durante a vigência exige nova negociação com o cantão de destino.

Não há, na lei federal, um patamar mínimo de patrimônio ou renda para acesso ao regime — apenas a base de despesa mínima indexada anualmente.

<strong>Imposto anual efetivo estimado:</strong> CHF 150.000–350.000 dependendo do cantão, do imóvel e do perfil.`,
        kv: [
          { l: "Base federal mín. (2026)", v: "CHF 435.000" },
          { l: "Mín. cantonal (Genebra, 2026)", v: "CHF 426.357" },
          { l: "Regra do imóvel", v: "7× valor locatício" },
          { l: "Imposto efetivo", v: "CHF 150k–350k/ano" },
          { l: "Cantões elegíveis", v: "21 de 26" },
          { l: "Duração do ruling", v: "~5 anos, renovável" },
          { l: "Processamento", v: "3 a 7 meses" },
          { l: "Inclui", v: "IR + Patrimônio + SS" },
        ],
        impact:
          "Não exige declaração de ativos e rendimentos globais. Ganhos de capital sobre ativos financeiros mobiliários pessoais são isentos — regra geral suíça para pessoas físicas sem atividade de negociação profissional, preservada também sob este regime; ganhos com imóveis situados na Suíça são tributados separadamente pelo imposto cantonal sobre ganhos imobiliários. Rede de 60+ tratados de dupla tributação (CDT). Elegibilidade a passaporte suíço após 10–12 anos. Não há patamar legal mínimo de patrimônio para acesso ao regime — referências de mercado a USD 20M+ refletem prática de planejamento, não exigência legal.",
        warning:
          "Nacionais de países fora da UE/EFTA precisam ter ao menos 55 anos para obter autorização de residência sem atividade lucrativa, por regra federal de imigração (Art. 28 OASA/VZAE) — cidadãos da UE/EFTA não têm essa restrição, sob o Acordo de Livre Circulação de Pessoas. Proposta de imposto sucessório sobre patrimônio >CHF 50M em debate político (não aprovada). Referendum de 2014 rejeitou abolição do regime por 59% a 41%.",
        sources: [
          { t: "Fedlex · Lei DBG Art. 14", u: "https://www.fedlex.admin.ch" },
          {
            t: "EFD/DFF · Imposition d'après la dépense",
            u: "https://www.efd.admin.ch/fr/imposition-depense",
          },
          {
            t: "ge.ch · Comment bénéficier de l'imposition d'après la dépense",
            u: "https://www.ge.ch/imposition-apres-depense/comment-beneficier-imposition-apres-depense",
          },
          { t: "KPMG Switzerland", u: "https://kpmg.com/ch" },
        ],
      },
    ],
    visa: [
      {
        name: "Residência por Lump-Sum Fiscal (B-permit)",
        status: "ok",
        desc: `A Suíça não opera um golden visa formal por investimento imobiliário. A residência é obtida através de um processo binário: <strong>(i) ruling fiscal</strong> negociado com a autoridade tributária cantonal e <strong>(ii) permissão de residência</strong> concedida pela autoridade de migração cantonal.

O resultado é uma permissão de residência B (anual, renovável). A última estatística oficial disponível registra 4.557 titulares em fins de 2018 (CHF 821 milhões arrecadados naquele ano). Requisitos: estrangeiro não-suíço; nenhuma atividade remunerada na Suíça; residência fiscal caracterizada pelo centro de vida efetivo no país — a Suíça não fixa uma contagem de dias isolada como critério de residência fiscal, diferente do que ocorre em convenções internacionais de dupla tributação. Nacionais de países fora da UE/EFTA precisam ter ao menos 55 anos (Art. 28 OASA/VZAE); cidadãos da UE/EFTA não têm essa restrição. Naturalização possível após 10–12 anos.

<strong>Família:</strong> cônjuge e filhos são incluídos na base de cálculo do forfait, mas precisam de processo migratório próprio de reagrupamento familiar (Art. 44 LEI), dentro de um prazo de 5 anos da concessão do permit principal (ou 12 meses se o filho tiver mais de 12 anos).`,
        kv: [
          { l: "Tipo de permissão", v: "B-permit anual" },
          { l: "Titulares (últ. estatística oficial)", v: "4.557 (2018)" },
          { l: "Critério de residência fiscal", v: "Centro de vida efetivo" },
          { l: "Trabalho na CH", v: "Proibido" },
          { l: "Idade mín. (não-EU/EFTA)", v: "55 anos" },
          { l: "Reagrupamento familiar", v: "Até 5 anos (Art. 44 LEI)" },
          { l: "Processamento", v: "3 a 7 meses" },
          { l: "Naturalização", v: "10–12 anos" },
        ],
        impact:
          "Combina residência estável e privacidade fiscal. Direcionado a patrimônio líquido a partir de USD 20M (referência de mercado, sem exigência legal formal de patrimônio mínimo).",
        sources: [
          {
            t: "SEM · Aufenthalt ohne Erwerbstätigkeit (factsheet)",
            u: "https://www.sem.admin.ch",
          },
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
    alert: true,
    sumFiscal: "Flat Tax €300k/ano (desde jan/2026)",
    sumFS: "changed",
    sumVisa: "Investor Visa €250k–€2M + Nômade Digital",
    sumVS: "ok",
    fiscal: [
      {
        name: "Flat Tax para Novos Residentes (Art. 24-bis TUIR)",
        status: "changed",
        desc: `Criado em 2017, o regime sofreu três reajustes: €100k (2017–ago/2024) → €200k (ago–dez/2024) → €300k/ano (desde 1 jan/2026, Lei Orçamentária 2026). Aplica imposto fixo anual <em>substitutivo</em> de €300.000 sobre <strong>todos os rendimentos de fonte estrangeira</strong>. Rendimentos italianos são tributados normalmente (IRPEF 23%–43%). Contribuintes que já haviam exercido a opção antes do aumento mantêm o valor vigente à época da adesão.

<strong>Familiar:</strong> €50.000/pessoa/ano. <strong>Duração máxima:</strong> 15 anos. <strong>Restrições:</strong> sem crédito de imposto sobre tributos pagos no exterior; sem acesso a redução de withholding em CDTs italianos para rendimentos estrangeiros isentos.

<strong>Exclusão:</strong> mais-valias de participações qualificadas (art. 67, co.1, letra "c", TUIR) realizadas nos primeiros cinco períodos de imposta de vigência da opção ficam fora do regime substitutivo, sendo tributadas pelo regime ordinário (art. 68, co.3 TUIR).

<strong>Fonte estrangeira:</strong> a qualificação segue critério de reciprocidade com o art. 23 TUIR — renda de trabalho prestado em território italiano é considerada de fonte italiana ainda que paga por empregador estrangeiro (ex.: home office a partir da Itália não se qualifica ao regime).

<strong>Adesão e cessação:</strong> a opção é formalizada na declaração de renda, com pagamento do imposto substitutivo até 30 de junho de cada ano (código-tributo NRPP); o interpello (ruling) prévio é facultativo. O regime cessa por falta de pagamento no prazo ou por transferência da residência fiscal para outro país; a cessação do titular principal extingue também a extensão aos familiares.`,
        kv: [
          { l: "Imposto fixo anual", v: "€300.000" },
          { l: "Familiar", v: "€50.000/pessoa" },
          { l: "Duração", v: "15 anos (irrenov.)" },
          { l: "Não-residente prévia", v: "9 dos 10 anos" },
          { l: "Renda italiana", v: "IRPEF normal" },
          { l: "Crédito ext.", v: "❌ Não disponível" },
          { l: "Pagamento", v: "Até 30/jun (cód. NRPP)" },
          { l: "Interpello (ruling)", v: "Facultativo" },
        ],
        impact:
          "Aplica-se a rendas globais acima de €2M/ano. O valor equivale a 3× o praticado pela Grécia (€100k/ano). Residentes anteriores ao aumento de 2026 mantêm a alíquota vigente à época da opção.",
        warning:
          "Regime aumentado 3 vezes em 8 anos, sem garantia de estabilidade por horizonte de 15 anos. Renda de trabalho prestado fisicamente em território italiano não se qualifica como renda estrangeira, mesmo se paga por empregador no exterior.",
        sources: [
          {
            t: "Agenzia delle Entrate · Scheda opzione neo-residenti",
            u: "https://www.agenziaentrate.gov.it/portale/schede/agevolazioni/opzione-per-i-neo-residenti/infogen-opzionale-neo-residenti",
          },
          {
            t: "Agenzia delle Entrate · Circolare 17/E (23/05/2017)",
            u: "https://www.agenziaentrate.gov.it",
          },
          { t: "Normattiva · Art. 24-bis TUIR (D.P.R. 917/1986)", u: "https://www.normattiva.it" },
          { t: "Gazzetta Ufficiale", u: "https://www.gazzettaufficiale.it" },
        ],
      },
      {
        name: "Flat Tax 7% para Aposentados Estrangeiros",
        status: "ok",
        desc: `Alíquota única de 7% sobre rendimentos estrangeiros para pensionistas que transfiram residência fiscal para municípios elegíveis do <strong>Sul da Itália</strong> (Sicília, Sardenha, Calábria, Campânia, Basilicata, Abruzzo, Molise, Puglia). Duração de 10 anos. Adesão deve ocorrer no primeiro ano de residência. Base legal: art. 24-ter TUIR.

<strong>Atualização (7/abr/2026):</strong> o limite populacional dos municípios elegíveis foi ampliado de 20.000 para 30.000 habitantes pelo art. 26 da Legge 11 de março de 2026, n. 34 ("Legge annuale PMI"), publicada na Gazzetta Ufficiale em 23/03/2026. O critério é aplicado por dados populacionais do ISTAT, sem uma lista nominal fechada publicada pela Agenzia delle Entrate.`,
        kv: [
          { l: "Alíquota", v: "7% renda estrangeira" },
          { l: "Duração", v: "10 anos" },
          { l: "Elegível", v: "Aposentados c/ pensão est." },
          { l: "Localização", v: "Sul (<30k hab., desde abr/2026)" },
          { l: "Renda IT", v: "IRPEF normal" },
          { l: "Familiar", v: "Qualifica separadamente" },
          { l: "Base legal", v: "Art. 24-ter TUIR" },
        ],
        impact:
          "Aplicável a aposentados com pensões internacionais residentes na Europa Ocidental. Alíquota de 7% sobre a renda efetiva, em contraste com o valor fixo de €300k do regime para novos residentes.",
        sources: [
          { t: "Agenzia delle Entrate", u: "https://www.agenziaentrate.gov.it" },
          {
            t: "Legge 11 marzo 2026, n. 34 (GU 23/03/2026)",
            u: "https://www.gazzettaufficiale.it",
          },
        ],
      },
    ],
    visa: [
      {
        name: "Investor Visa — Visto per Investitori (VPI)",
        status: "ok",
        desc: `Programa formal com quatro modalidades: (A) €250.000 em startup inovadora italiana; (B) €500.000 em empresa italiana; (C) €1.000.000 em fundo de investimento italiano; (D) €2.000.000 em títulos do governo (BTP). Investimento mantido por 2 anos. Visto inicial: 2 anos. Residência permanente após 5 anos. Cidadania após 10 anos.

<strong>Órgão gestor:</strong> Ministero delle Imprese e del Made in Italy (MIMIT, sucessor do MISE), através do Comitato Investor Visa for Italy. Após submissão completa da documentação, o Comitê delibera em até 30 dias; o Nulla Osta resultante é válido por 6 meses para requerer o visto no consulado italiano competente.

<strong>Família:</strong> cônjuge e filhos não são incluídos automaticamente — exige-se pedido específico de reunificação familiar (ricongiungimento familiare), com permesso di soggiorno per motivi familiari em processo apartado.`,
        kv: [
          { l: "Startup italiana", v: "€250.000" },
          { l: "Empresa italiana", v: "€500.000" },
          { l: "Fundo IT", v: "€1.000.000" },
          { l: "Títulos BTP", v: "€2.000.000" },
          { l: "Visto inicial", v: "2 anos" },
          { l: "Residência perm.", v: "Após 5 anos" },
          { l: "Deliberação do Comitê", v: "Até 30 dias" },
          { l: "Validade do Nulla Osta", v: "6 meses" },
        ],
        impact:
          "A modalidade startup (€250k) é a de menor valor entre as quatro opções e pode ser combinada com o regime de 7% do Sul da Itália. A modalidade de títulos governamentais (€2M) não exige atividade empresarial ativa. Família não incluída automaticamente — requer processo de reunificação familiar em separado.",
        sources: [
          {
            t: "MIMIT · Investor Visa",
            u: "https://www.mimit.gov.it/it/impresa/competitivita-e-nuove-imprese/investor-visa",
          },
          {
            t: "Investor Visa for Italy · Come funziona",
            u: "https://investorvisa.mise.gov.it/index.php/it/investor-visa-come-funziona",
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
          "Afeta o planejamento fiscal de HNWIs com renda passiva em Portugal. Regimes de imposto fixo alternativos incluem Grécia (€100k) e EAU (zero IR pessoal). Não há transição automática para o IFICI — o ex-beneficiário deve requerê-lo como novo pedido, sujeito aos critérios de elegibilidade mais restritos daquele regime.",
        sources: [
          { t: "Portal das Finanças · AT", u: "https://www.portaldasfinancas.gov.pt" },
          {
            t: "Ordem dos Advogados · Adesão ao RNH até março de 2025",
            u: "https://portal.oa.pt/comunicacao/imprensa/2024/2/20/adesao-ao-regime-do-residente-nao-habitual-sera-possivel-ate-marco-de-2025/",
          },
        ],
      },
      {
        name: "IFICI — Incentivo à Investigação (NHR 2.0)",
        status: "new",
        desc: `Criado pela Lei 82/2023, substituiu o NHR com escopo mais restrito. <strong>Benefício:</strong> alíquota flat de 20% sobre rendimentos portugueses qualificados. Pensões estrangeiras agora tributadas progressivamente (14,5%–48%). <strong>Elegibilidade:</strong> I&D, ensino superior, startups em setores estratégicos, profissionais de saúde, artistas reconhecidos.

<strong>Regulamentação:</strong> a Portaria n.º 352/2024/1 (23/dez/2024) define o procedimento de registo; a Portaria n.º 52-A/2025/1 e despacho conjunto AICEP/IAPMEI (fev/2025) fixaram a lista de profissões qualificadas e atividades económicas elegíveis, incluindo requisito de código CAE elegível e, para certas categorias, exportação igual ou superior a 50% do volume de negócios. O registo é feito por formulário próprio na área reservada do Portal das Finanças.

<strong>Rendimentos estrangeiros isentos:</strong> categorias A, B, E, F e G (trabalho, profissional, capitais, prediais, mais-valias), sujeitas a condições de tributação na fonte. Rendimento de fonte em jurisdição constante da lista portuguesa de regimes fiscais claramente mais favoráveis é tributado a taxa agravada de 35%, sem acesso ao benefício. Pensões de fonte estrangeira permanecem, em qualquer caso, fora do âmbito da isenção.`,
        kv: [
          { l: "Alíquota flat", v: "20% renda PT qualif." },
          { l: "Renda passiva ext.", v: "Progressiva" },
          { l: "Pensões estrangeiras", v: "14,5%–48%" },
          { l: "Duração", v: "10 anos" },
          { l: "Prazo adesão", v: "Até 15 jan" },
          { l: "Base legal", v: "Lei 82/2023" },
          { l: "Portaria regulamentadora", v: "352/2024/1 (23/dez/2024)" },
          { l: "Renda em paraíso fiscal (lista PT)", v: "35%, sem isenção" },
        ],
        impact:
          "Não se aplica a rendimentos passivos genéricos — o benefício está restrito a rendimentos portugueses qualificados das categorias A, B, E, F e G, conforme os critérios de elegibilidade e o código CAE da atividade exercida.",
        warning:
          "Para brasileiros: a extinção do NHR é um dos fatores que motivam a avaliação de regimes territoriais alternativos, como o do Uruguai (isenção de 5 anos + opção de 5 adicionais).",
        sources: [
          { t: "Lei 82/2023 · AT", u: "https://www.portaldasfinancas.gov.pt" },
          {
            t: "DRE · Portaria n.º 352/2024/1 (23/dez/2024)",
            u: "https://diariodarepublica.pt/dr/detalhe/portaria/352-2024-901014291",
          },
          {
            t: "AT · FAQ IFICI",
            u: "https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/questoes_frequentes/pages/faqs-01018.aspx",
          },
        ],
      },
    ],
    visa: [
      {
        name: "Golden Visa — ARI (Autorização para Investimento)",
        status: "changed",
        desc: `Investimento imobiliário em áreas urbanas densas (Lisboa, Porto, Algarve) excluído desde out/2023. Opções remanescentes: (A) €1.500.000 em transferência de capital; (B) €500.000 em fundos de capital de risco/private equity portugueses não-imobiliários; (C) 10 postos de trabalho; (D) €500.000 em imóveis em zonas de baixa densidade.

<strong>Permanência:</strong> mínimo de 7 dias (seguidos ou interpolados) no primeiro ano, e não menos de 14 dias em cada período subsequente de dois anos. Residência permanente após 5 anos.

<strong>Família:</strong> cônjuge, filhos menores ou incapazes e ascendentes dependentes do titular obtêm autorização de residência própria por reagrupamento familiar (art. 98.º), com os mesmos direitos de circulação no espaço Schengen, e podem requerer naturalização de forma independente.

<strong>Naturalização (atualizado):</strong> desde 19/mai/2026, com a Lei Orgânica n.º 1/2026, o prazo mínimo de residência legal para naturalização passou de 5 para <strong>7 anos</strong> (nacionais de países de língua oficial portuguesa, incluindo o Brasil) ou <strong>10 anos</strong> (demais nacionalidades). Pedidos protocolados até 18/mai/2026 continuam regidos pela regra anterior de 5 anos.`,
        kv: [
          { l: "Fundo de investimento", v: "€500.000" },
          { l: "Transferência capital", v: "€1.500.000" },
          { l: "Imóvel urbano", v: "❌ Excluído" },
          { l: "Presença mín.", v: "7 dias (1º ano) + 14 dias/biênio" },
          { l: "Residência perm.", v: "Após 5 anos" },
          { l: "Naturalização (CPLP/Brasil)", v: "7 anos (desde 19/mai/2026)" },
          { l: "Naturalização (demais)", v: "10 anos (desde 19/mai/2026)" },
          { l: "Pedidos até 18/mai/2026", v: "Regra antiga: 5 anos" },
        ],
        impact:
          "Com o NHR extinto e o Golden Visa restrito a modalidades não-imobiliárias, a combinação Golden Visa + IFICI permanece disponível para empreendedores elegíveis. O aumento do prazo de naturalização (Lei Orgânica 1/2026) afeta diretamente o planejamento de titulares que ainda não tenham submetido pedido.",
        sources: [
          {
            t: "AIMA · Autorização de Residência para Investimento (Art. 90.º-A)",
            u: "https://aima.gov.pt/pt/viver/autorizacao-de-residencia-para-investimento-art-90-o-a",
          },
          {
            t: "AIMA · Reagrupamento familiar (Art. 98.º)",
            u: "https://aima.gov.pt/pt/viver/reagrupamento-familiar-com-familiar-fora-de-territorio-nacional-art-98-o-n-o-1",
          },
          {
            t: "DRE · Lei Orgânica n.º 1/2026 (18/mai/2026)",
            u: "https://diariodarepublica.pt/dr/detalhe/lei-organica/1-2026-1123539996",
          },
        ],
      },
    ],
  },
  es: {
    id: "es",
    flagCode: "es",
    name: "Espanha",
    region: "Europa",
    alert: true,
    sumFiscal: "Lei Beckham + Ley Mbappé (Madrid)",
    sumFS: "ok",
    sumVisa: "Golden Visa EXTINTO · NLV · DNV",
    sumVS: "ext",
    fiscal: [
      {
        name: "Ley Mbappé — Ley 4/2024 (Comunidade de Madrid)",
        status: "new",
        desc: `Aprovada pela Comunidade de Madrid (Ley 4/2024, de 20 de novembro; BOCM 28/nov/2024, BOE-A-2025-3302), a chamada "Ley Mbappé" é uma <strong>dedução autonômica de IRPF</strong> de até <strong>20% do valor investido</strong> por novos residentes fiscais em Madrid em ativos específicos: títulos de dívida pública e privada espanhola, ações de empresas espanholas (não cotadas ou listadas), participações em entidades, e contribuições a empresas. Aplicável a quem não foi residente fiscal em Espanha nos 5 anos anteriores.

<strong>Distinções-chave vs. Beckham:</strong> a Ley Mbappé atua sobre a parte autonômica do IRPF e é dedução por investimento (não regime especial). É <strong>incompatível com a Lei Beckham</strong> — o contribuinte deve optar por um dos dois regimes. Investimento deve ser mantido por 6 anos. Sem teto formal ao valor do investimento; a dedução incide sobre a cuota íntegra autonômica, e o saldo não aproveitado no exercício pode ser reportado aos 5 exercícios seguintes (até 6 no total).`,
        kv: [
          { l: "Dedução IRPF", v: "20% do investimento" },
          { l: "Aplicável em", v: "Comunidade de Madrid" },
          { l: "Não-residência prévia", v: "5 anos" },
          { l: "Manutenção mín.", v: "6 anos" },
          { l: "Combinável Beckham", v: "❌ Não — regimes alternativos" },
          { l: "Reporte do saldo", v: "Até 5 exercícios seguintes" },
          { l: "Base legal", v: "Ley 4/2024 · BOE-A-2025-3302" },
        ],
        impact:
          "Incide sobre a cuota íntegra autonômica do IRPF em Madrid, sem teto formal ao valor do investimento. É incompatível com a Lei Beckham — a escolha entre os dois regimes deve considerar qual produz o benefício fiscal mais relevante para o perfil de renda do contribuinte.",
        sources: [
          {
            t: "BOE · Ley 4/2024 (BOE-A-2025-3302)",
            u: "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-3302",
          },
          { t: "BOCM · 28/nov/2024", u: "https://www.bocm.es" },
        ],
      },
      {
        name: "Lei Beckham — Régimen de Impatriados (Art. 93 LIRPF)",
        status: "ok",
        desc: `Criado em 2004, ampliado pela Lei de Startups (28/2022). Aplica alíquota fixa de <strong>24%</strong> sobre rendimentos espanhóis até €600.000/ano (47% acima). Rendimentos estrangeiros ficam <strong>fora da tributação espanhola</strong>. <strong>Wealth Tax sobre ativos estrangeiros:</strong> isento. Duração: 6 anos fiscais. Adesão em 6 meses da inscrição na SS espanhola, via Modelo 149.

<strong>Elegibilidade:</strong> não ter sido residente fiscal na Espanha nos 5 períodos impositivos anteriores, e o deslocamento decorrer de contrato de trabalho, nomeação como administrador (participação inferior a 25% na entidade, salvo em "empresas emergentes" nos termos da Lei 28/2022), ou de trabalho remoto para empregador estrangeiro ("teletrabajador internacional").

<strong>Impuesto de Solidaridad de las Grandes Fortunas (ISGF):</strong> beneficiários da Lei Beckham tributam o Impuesto sobre el Patrimonio e o ISGF por obligación real — apenas bens situados na Espanha; patrimônio estrangeiro permanece fora de ambos.`,
        kv: [
          { l: "Alíquota ES", v: "24% (até €600k) · 47%" },
          { l: "Renda estrangeira", v: "Fora da tributação" },
          { l: "Wealth Tax e ISGF", v: "Obligación real (só bens em ES)" },
          { l: "Duração", v: "6 anos fiscais" },
          { l: "Prazo adesão", v: "6 meses (Modelo 149)" },
          { l: "Participação como admin.", v: "<25%, exceto empresa emergente" },
          {
            l: "CCAA c/ bonificação 100% Patrimônio",
            v: "Madri, Andaluzia, Cantábria, Extremadura, La Rioja, Múrcia",
          },
        ],
        impact:
          "Aplica-se a rendimentos de trabalho de fonte espanhola; rendimentos de fonte estrangeira ficam fora da base de cálculo. Não alcança rendimentos passivos, que seguem as regras gerais. A Galícia aplica bonificação de 50% (não 100%) no Impuesto sobre el Patrimonio.",
        sources: [
          {
            t: "AEAT · Régimen especial impatriados (Art. 93 LIRPF)",
            u: "https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/manual-tributacion-no-residentes/regimenes-opcionales/regimen-especial-impatriados.html",
          },
          {
            t: "AEAT · Impuesto de Solidaridad de las Grandes Fortunas",
            u: "https://sede.agenciatributaria.gob.es/Sede/declaraciones-informativas-otros-impuestos-tasas/impuesto-temporal-solidaridad-grandes-fortunas.html",
          },
        ],
      },
    ],
    visa: [
      {
        name: "Golden Visa — Autorización por Inversión",
        status: "ext",
        desc: `Encerrado em 3 abr/2025 pela Lei Orgânica 1/2025 (BOE 3 jan/2025), que revogou os artigos 63–67 da Lei 14/2013. O programa atraiu mais de 14.000 vistos desde 2013.

Titulares com autorização válida na data de entrada em vigor mantêm a validade pelo período original; pedidos de renovação são resolvidos conforme a norma vigente na data da autorização inicial. Solicitações protocoladas antes de 3/abr/2025 ainda podem ser deferidas pelas regras anteriores.`,
        kv: [
          { l: "Status", v: "❌ Encerrado abr/2025" },
          { l: "Base legal", v: "L.O. 1/2025" },
          { l: "Mín. anterior", v: "€500.000 (imóvel)" },
          { l: "Existentes", v: "Validade mantida até renovação" },
          { l: "Renovação", v: "Regras da autorização original" },
          { l: "Alternativa imed.", v: "NLV ou DNV" },
        ],
        impact:
          "Afeta HNWIs que planejavam usar o Golden Visa como via de acesso à Lei Beckham. NLV e DNV permanecem como alternativas de residência.",
        sources: [{ t: "BOE · L.O. 1/2025", u: "https://www.boe.es" }],
      },
      {
        name: "Visto Nômade Digital — Lei 28/2022",
        status: "new",
        desc: `Criado pela Lei de Startups (dez/2022) e regulamentado pelo Real Decreto 1155/2024 (em vigor desde mai/2025), permite que profissionais que trabalham remotamente para empresas estrangeiras obtenham residência espanhola. Visto inicial 1 ano; autorização 3 anos, renovável. <strong>Compatível com Lei Beckham</strong> após adesão em 6 meses da SS.

<strong>Renda mínima:</strong> indexada a 200% do Salário Mínimo Interprofissional (SMI), reajustado anualmente — para 2026 (RD 126/2026), equivale a aproximadamente €2.849/mês. Reagrupamento familiar acrescenta 75% do SMI para o primeiro familiar (cônjuge) e 25% do SMI por dependente adicional, com renda comprovada dos últimos 3 meses. A Unidad de Grandes Empresas (UGE) resolve o pedido em até 20 dias úteis.`,
        kv: [
          { l: "Renda mínima (2026)", v: "≈€2.849/mês (200% SMI)" },
          { l: "Reagrupamento — 1º familiar", v: "+75% do SMI" },
          { l: "Reagrupamento — demais", v: "+25% do SMI cada" },
          { l: "Visto inicial", v: "1 ano" },
          { l: "Autorização", v: "3 anos (renov.)" },
          { l: "Resolução (UGE)", v: "Até 20 dias úteis" },
          { l: "Beckham compatível", v: "✅ Sim" },
          { l: "Empresa ES", v: "❌ Proibido" },
        ],
        impact:
          "Aplicável a trabalhadores remotos empregados por empresas estrangeiras que buscam presença na Espanha. Compatível com a Lei Beckham. O requisito de renda é reajustado anualmente por estar indexado ao SMI.",
        sources: [
          { t: "Ministerio de Inclusión", u: "https://www.inclusion.gob.es" },
          {
            t: "Unidad de Grandes Empresas · Teletrabajadores",
            u: "https://www.inclusion.gob.es/web/unidadgrandesempresas/teletrabajadores",
          },
        ],
      },
    ],
  },
  gr: {
    id: "gr",
    flagCode: "gr",
    name: "Grécia",
    region: "Europa",
    alert: false,
    sumFiscal: "Flat Tax €100k/ano",
    sumFS: "ok",
    sumVisa: "Golden Visa ativo · Reforma 2024",
    sumVS: "changed",
    fiscal: [
      {
        name: "Flat Tax HNWIs — Art. 5A do Código Tributário",
        status: "ok",
        desc: `Regime de imposto fixo para HNWIs com renda passiva estrangeira. Imposto fixo de <strong>€100.000/ano</strong> sobre todos os rendimentos estrangeiros. Familiar: €20.000/pessoa/ano — cada familiar incluído soma o valor integral, sem previsão oficial de exceção.

<strong>Elegibilidade:</strong> não-residência fiscal grega por 7 dos 8 anos anteriores. Investimento mínimo de €500.000 em ativos gregos, a ser concluído em até 3 anos <em>a partir da data do pedido</em> (não da mudança de residência) — em imóveis, participações societárias, ações/valores mobiliários negociados em mercados regulados gregos, títulos do Tesouro grego (prazo remanescente ≥3 anos, custodiados em instituição de crédito grega) ou fundos de investimento alternativo sediados na Grécia; um ajuste de portfólio é permitido dentro do período. <strong>Duração:</strong> 15 anos. Prazo de adesão: até 31 de março do ano fiscal seguinte à mudança de residência, com análise pela AADE em até 60 dias.

O não pagamento integral do imposto fixo em qualquer ano fiscal implica exclusão automática do regime a partir daquele exercício, retornando o contribuinte à tributação geral sobre renda mundial.

<em>Para contexto:</em> a Itália aplica €300.000/ano em regime equivalente; o NHR português foi extinto; o Non-Dom britânico foi abolido.`,
        kv: [
          { l: "Imposto anual", v: "€100.000" },
          { l: "Familiar", v: "€20.000/pessoa" },
          { l: "Duração", v: "15 anos" },
          { l: "Não-residente", v: "7 dos 8 anos" },
          { l: "Investimento mín.", v: "€500.000 em 3 anos do pedido" },
          { l: "Prazo de adesão", v: "Até 31 de março" },
          { l: "vs. Itália", v: "3× mais barato" },
        ],
        impact:
          "A combinação entre Golden Visa e Flat Tax oferece um caminho à cidadania grega em 7 anos, com acesso à cidadania da União Europeia.",
        sources: [
          { t: "AADE", u: "https://www.aade.gr" },
          {
            t: "AADE · Incentivos fiscais Art. 5A/5B/5C (PDF)",
            u: "https://www.aade.gr/sites/default/files/2023-08/forologika_kinitra_proselkysis_f.katoikiwn.pdf",
          },
        ],
      },
      {
        name: "Flat Tax 7% para Aposentados Estrangeiros (Art. 5B)",
        status: "ok",
        desc: `Alíquota fixa de 7% sobre rendimentos estrangeiros, para quem transfere residência fiscal de um Estado com <strong>acordo de cooperação administrativa em matéria tributária</strong> vigente com a Grécia — categoria que inclui, mas não se limita a, convenções bilaterais de dupla tributação (CDT). Não-residência exigida: 5 dos 6 anos anteriores. Duração de 15 anos. Residência efetiva: 183+ dias/ano. Cada cônjuge se qualifica individualmente, pagando o imposto separadamente. Adesão até 31 de março do ano fiscal; pagamento em parcela única até o último dia útil de julho.

Tipos de pensão cobertos: pensões públicas, de seguradoras/institutos previdenciários, e ocupacionais vinculadas a vínculo empregatício pretérito.`,
        kv: [
          { l: "Alíquota", v: "7%" },
          { l: "Duração", v: "15 anos" },
          { l: "Não-residente", v: "5 dos 6 anos anteriores" },
          { l: "Requer", v: "Acordo de cooperação tributária" },
          { l: "Presença", v: "183 dias/ano" },
          { l: "Prazo de adesão", v: "Até 31 de março" },
          { l: "Familiar", v: "Separadamente" },
        ],
        impact:
          "Vigora por 15 anos, ante 10 anos no regime equivalente italiano.",
        warning:
          "O Brasil não possui CDT bilateral com a Grécia, mas ambos os países são signatários da Convenção Multilateral OCDE/CoE sobre Assistência Administrativa Mútua em Matéria Tributária — se essa convenção satisfaz o requisito legal de 'acordo de cooperação administrativa' do Art. 5B é uma questão que exige verificação jurídica específica antes de qualquer decisão. Não está confirmado se rendimentos de investimento (além da pensão) também se beneficiam da alíquota de 7%.",
        sources: [
          { t: "AADE", u: "https://www.aade.gr" },
          {
            t: "TaxHeaven · Art. 5B do Código Tributário (N.4172/2013)",
            u: "https://www.taxheaven.gr/law/4172/2013/arthro/5%CE%92",
          },
        ],
      },
    ],
    visa: [
      {
        name: "Golden Visa — Lei 5100/2024",
        status: "changed",
        desc: `Reformado em set/2024 pela Lei 5100/2024 (Art. 64), com Decisão Ministerial Conjunta 214926/2025 (Diário do Governo B 6014, 11/nov/2025) e Circular 1/2026 (22/abr/2026), com nova estrutura por zonas:

<strong>Zona A:</strong> €800.000 — Ática (Atenas), Tessalônica, e ilhas gregas com população registrada acima de 3.100 habitantes (cerca de 32 ilhas, incluindo Mykonos, Santorini, Creta, Rodes, Corfu).
<strong>Zona B:</strong> €400.000 — demais regiões.
<strong>Não-imobiliárias:</strong> €350.000 fundos de VC/PE; €500.000 depósito 12 meses; €250.000 conversão comercial→residencial ou patrimônio histórico.

O imóvel deve ser uma unidade única de pelo menos 120 m² — não é permitido combinar múltiplos imóveis menores para atingir o valor mínimo. Locação de curta duração (estilo Airbnb) é proibida em imóveis do programa, sob pena de multa de €50.000 e revogação.

Visto inicial 5 anos, renovável mediante comprovação de manutenção do investimento. Residência permanente após 5 anos. <strong>Cidadania em 7 anos</strong> com 183 dias/ano.

<strong>Família:</strong> filhos solteiros estudantes podem permanecer no programa até os 24 anos (se incluídos antes dos 21); pais do titular e do cônjuge podem ser incluídos sem limite de idade ou comprovação de dependência financeira, com validade de 5 anos igual à do titular.`,
        kv: [
          { l: "Zona A", v: "€800.000" },
          { l: "Zona B", v: "€400.000" },
          { l: "Conversão patrim.", v: "€250.000" },
          { l: "Fundo investimento", v: "€350.000" },
          { l: "Depósito 12m", v: "€500.000" },
          { l: "Imóvel mín.", v: "Unidade única ≥120 m²" },
          { l: "Locação curta duração", v: "❌ Proibida" },
          { l: "Cidadania", v: "7 anos · 183 dias" },
        ],
        impact:
          "A combinação entre Golden Visa e Flat Tax de €100k é direcionada a HNWIs passivos com patrimônio na faixa de USD 5M–50M.",
        sources: [
          { t: "Migration.gov.gr · Lei 5100/2024", u: "https://migration.gov.gr" },
          {
            t: "WFW · Understanding Golden Visa Law 5100/2024",
            u: "https://www.wfw.com/articles/understanding-the-new-golden-visa-law-%CE%BD%CE%BF-5100-2024-key-points-and-implications/",
          },
        ],
      },
    ],
  },
  ae: {
    id: "ae",
    flagCode: "ae",
    name: "Emirados Árabes Unidos",
    region: "Oriente Médio",
    alert: false,
    sumFiscal: "Zero IR pessoal (estrutural)",
    sumFS: "ok",
    sumVisa: "Golden Visa 10 anos + Green Visa 5 anos",
    sumVS: "ok",
    fiscal: [
      {
        name: "Zero IR Pessoal — Sistema Fiscal dos EAU",
        status: "ok",
        desc: `Os EAU não possuem imposto de renda pessoal sobre qualquer categoria: salários, dividendos, ganhos de capital, aluguéis, royalties, juros. Característica estrutural sem horizonte de expiração — não há proposta ou decisão oficial anunciando IR pessoal para 2026/2027.

<strong>Imposto Corporativo (jun/2023):</strong> 9% para PJs com receita >AED 375.000/ano. Não incide sobre rendimentos pessoais. <strong>Qualifying Free Zone Person (QFZP):</strong> empresas em free zone mantêm 0% sobre "qualifying income" (manufatura, holding de participações/valores mobiliários, IP qualificante, tesouraria/financiamento intragrupo, serviços de headquarters a partes relacionadas), desde que a receita não-qualificante fique dentro do limite de minimis — 5% da receita total ou AED 5.000.000, o que for menor (Cabinet Decision 100/2023; Ministerial Decision 229/2025).

<strong>Domestic Minimum Top-up Tax (Pillar Two/BEPS):</strong> em vigor desde exercícios iniciados em 1/jan/2025, alíquota mínima de 15% para grupos multinacionais com receita consolidada ≥EUR 750M em pelo menos 2 dos 4 exercícios anteriores. Estruturas de holding em free zone que integrem tais grupos podem estar sujeitas a esse imposto mínimo mesmo mantendo status de QFZP.

<strong>Residência fiscal formal (Tax Residency Certificate):</strong> obtida via 183 dias de presença física em qualquer período de 12 meses consecutivos (sem condição adicional), ou 90–182 dias combinados a residência/emprego/negócio e centro de interesses financeiros/pessoais nos EAU (Cabinet Decision 85/2022).

<strong>VAT:</strong> 5%. Sem imposto sobre herança ou patrimônio.`,
        kv: [
          { l: "IR pessoal", v: "0%" },
          { l: "IR corporativo", v: "9% (PJ >AED 375k)" },
          { l: "QFZP — de minimis", v: "5% da receita ou AED 5M" },
          { l: "DMTT (Pillar Two)", v: "15%, grupos ≥€750M, desde 2025" },
          { l: "TRC — presença", v: "183 dias, ou 90–182 dias c/ vínculos" },
          { l: "Ganhos capital PF", v: "0%" },
          { l: "Herança", v: "0%" },
          { l: "VAT", v: "5%" },
        ],
        impact:
          "Ausência de imposto de renda pessoal sobre qualquer categoria de rendimento. Para brasileiros: a ausência de CDT Brasil–EAU significa que rendas de controladas no exterior podem estar sujeitas ao IRPF brasileiro (transparência fiscal — Lei 12.973/2014).",
        warning:
          "Para brasileiros: mudança de residência fiscal exige DIRPF de saída definitiva, recolhimento do ganho de capital na saída e planejamento das estruturas. Sem CDT, há risco de dupla tributação.",
        sources: [
          { t: "FTA", u: "https://tax.gov.ae" },
          { t: "u.ae", u: "https://u.ae" },
          {
            t: "MOF · Domestic Minimum Top-up Tax guidance",
            u: "https://mof.gov.ae",
          },
        ],
      },
    ],
    visa: [
      {
        name: "Golden Visa — 10 Anos",
        status: "ok",
        desc: `Programa de residência de longo prazo, válido por 10 anos com renovação automática. <strong>Vias:</strong> (A) imóvel AED 2M (~USD 545k); (B) AED 2M em fundos públicos; (C) empresa com capital AED 500k; (D) profissionais qualificados (médicos, engenheiros, artistas).

<strong>Atualização (fev/2026):</strong> o requisito de pagamento mínimo prévio (antes, 50% do valor ou AED 1.000.000) para a via imobiliária foi eliminado — qualifica-se com base no valor total certificado do imóvel (AED 2.000.000+), incluindo imóveis financiados (mediante NOC do banco credor) e imóveis off-plan de incorporadoras registradas na RERA (mediante Oqood).

Incluídos: cônjuge, filhos, pais (mediante comprovação de dependência financeira exclusiva do titular), empregados domésticos. <strong>Sem requisito de permanência mínima</strong>.`,
        kv: [
          { l: "Imóvel mín.", v: "AED 2M (USD 545k), qualquer forma de pgto." },
          { l: "Empresa", v: "AED 500k" },
          { l: "Validade", v: "10 anos" },
          { l: "Permanência", v: "Não exigida" },
          { l: "Pais incluídos", v: "Mediante dependência financeira" },
          { l: "Família", v: "✅ Incluída" },
          { l: "Cidadania", v: "Caso a caso" },
        ],
        impact:
          "Combina zero IR pessoal com validade de 10 anos e sem requisito de permanência mínima, permitindo manter a estrutura fiscal sem residência efetiva no país.",
        sources: [{ t: "ICP", u: "https://icp.gov.ae" }],
      },
      {
        name: "Green Visa — 5 Anos",
        status: "new",
        desc: `Introduzido em 2022 para profissionais qualificados, freelancers e empreendedores. Duas vias principais: <strong>emprego qualificado</strong> — salário mínimo AED 15.000/mês, ocupação classificada nos níveis 1 a 3 do MOHRE e diploma de bacharel; <strong>freelancer/autônomo</strong> — renda anual de AED 360.000 (~USD 98k) nos dois anos anteriores. Patrocínio familiar incluído. Renovável.

Titulares que passem a atender aos critérios do Golden Visa (imóvel, salário ou investimento) podem migrar mediante nova solicitação — não há conversão automática.`,
        kv: [
          { l: "Renda mínima (freelancer)", v: "AED 360k/ano" },
          { l: "Salário (emprego qualificado)", v: "AED 15k/mês" },
          { l: "Ocupação MOHRE", v: "Níveis 1 a 3" },
          { l: "Validade", v: "5 anos" },
          { l: "Grau acadêmico", v: "Exigido" },
          { l: "Familiar", v: "✅" },
          { l: "Para Golden Visa", v: "Nova solicitação (não automática)" },
        ],
        impact:
          "Porta de entrada para HNWIs que ainda não atingiram AED 2M em imóvel. Não é um estágio automático para o Golden Visa — a migração exige novo processo.",
        sources: [{ t: "MOHRE", u: "https://mohre.gov.ae" }],
      },
    ],
  },
  us: {
    id: "us",
    flagCode: "us",
    name: "Estados Unidos",
    region: "Américas",
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
          { l: "Estate/Gift (cidadão/GC, 2026)", v: "USD 15.000.000" },
          { l: "Covered expatriate (patrimônio)", v: "≥USD 2M" },
          { l: "Covered expatriate (IR médio 5a)", v: "≥USD 211.000 (2026)" },
          { l: "Exclusão do ganho no Exit Tax", v: "USD 910.000 (2026)" },
          { l: "PFIC reporting", v: "Obrigatório" },
        ],
        impact:
          "EUA não são destino de otimização fiscal passiva. São destino de acesso a mercado, proteção patrimonial via trust e mobilidade. Custo de compliance substancial.",
        warning:
          'Renunciar à cidadania implica "Exit Tax" sobre ganhos não realizados (Sec. 877A IRC) para "covered expatriates" — patrimônio líquido ≥USD 2M, ou imposto de renda médio dos últimos 5 anos ≥USD 211.000 (2026), ou não certificação de conformidade fiscal via Form 8854. O coberto expatriado é tributado como se tivesse vendido todos os ativos no dia anterior à saída, com os primeiros USD 910.000 de ganho isentos (2026). FBAR (FinCEN 114): limiar único de USD 10.000 agregados em contas no exterior. FATCA (Form 8938): USD 50k/75k para residentes solteiros; USD 200k/300k para não-residentes solteiros ("living abroad"); USD 400k/600k para casados não-residentes.',
        sources: [
          { t: "IRS · IRC", u: "https://www.irs.gov" },
          { t: "IRS Newsroom · Tax Inflation Adjustments 2026", u: "https://www.irs.gov/newsroom" },
          { t: "IRS · Expatriation Tax", u: "https://www.irs.gov" },
          { t: "USCIS", u: "https://www.uscis.gov" },
        ],
      },
    ],
    visa: [
      {
        name: "Trump Gold Card — Executive Order 14351",
        status: "new",
        desc: `Lançado em dez/2025 via trumpcard.gov, criado pelo Executive Order 14351 (set/2025). <strong>Não é categoria separada de visto</strong>, mas via expedita para as categorias EB-1 (capacidade extraordinária) ou EB-2 NIW (interesse nacional) da lei migratória existente — o Form I-140G dispensa aprovação prévia de um I-140 tradicional, e o requerente comprova os critérios de EB-1A ou EB-2 NIW diretamente no próprio formulário do programa.

<strong>Modalidades:</strong>
• <em>Individual Gold Card:</em> contribuição de USD 1.000.000 ao Tesouro americano (não recuperável) + USD 15.000 de taxa DHS no registro;
• <em>Corporate Gold Card:</em> patrocínio empresarial de USD 2.000.000 por funcionário.

<strong>Processo:</strong> registro em trumpcard.gov → taxa DHS → vetting (antecedentes, origem dos fundos) → I-140G → aprovação → processamento consular. Não permite Adjustment of Status nos EUA.

<strong>Situação (dado mais recente publicamente disponível, abr/2026):</strong> 338 registros no portal desde o lançamento, dos quais 165 pagaram a taxa e 59 protocolaram efetivamente o Form I-140G; apenas 1 aprovação reportada (declaração do Secretário de Comércio Howard Lutnick), sem retificação identificada até ago/2026 [fonte jornalística]. O programa é objeto de ação judicial em curso — <em>AAUP v. DHS</em> (D.D.C., Juiz Richard J. Leon), questionando sua base legal sob a Administrative Procedure Act e a Immigration and Nationality Act; até ago/2026 não há decisão de mérito, apenas moção de dismissal do governo pendente, focada em standing dos autores.`,
        kv: [
          { l: "Individual", v: "USD 1.000.000 + USD 15k DHS" },
          { l: "Corporate", v: "USD 2.000.000/funcionário" },
          { l: "Visa base", v: "EB-1 ou EB-2 NIW" },
          { l: "AoS", v: "❌ Não permitido (consular only)" },
          { l: "Registros/protocolos/aprovações", v: "338 / 59 / ~1 (até ago/2026)" },
          { l: "Litígio em curso", v: "AAUP v. DHS, sem decisão de mérito" },
          { l: "Base legal", v: "Executive Order 14351" },
        ],
        impact:
          "Qualificação sob EB-1A ou EB-2 NIW é substancial e não dispensada pelo pagamento. Programa muito mais complexo que divulgado inicialmente.",
        warning:
          "Risco jurídico elevado: criado por Executive Order, não por lei do Congresso, e sob questionamento judicial em curso. Pode ser suspenso ou revogado por decisão judicial ou por administração futura. Contribuição USD 1M é irrecuperável mesmo em caso de negativa ou revogação.",
        sources: [
          { t: "USCIS · Form I-140G", u: "https://www.uscis.gov/i-140g" },
          { t: "trumpcard.gov · Portal oficial", u: "https://www.trumpcard.gov" },
          {
            t: "White House · EO 14351",
            u: "https://www.whitehouse.gov/presidential-actions/",
          },
          {
            t: "CBS News · Gold Card approvals (jornalístico)",
            u: "https://www.cbsnews.com",
          },
        ],
      },
      {
        name: "Trump Platinum Card — Em lista de espera",
        status: "new",
        desc: `Modalidade premium do programa Gold Card, anunciada em set/2025 mas ainda <strong>não liberada para aplicações</strong> até ago/2026 — nenhuma fonte oficial ou jornalística indica data de lançamento definida. Diferenciador-chave em relação ao Gold Card individual: permite ao titular permanecer até <strong>270 dias por ano nos EUA sem ser sujeito ao Substantial Presence Test</strong> — ou seja, sem se tornar residente fiscal americano e, portanto, sem tributação americana sobre rendimentos de fonte estrangeira.

Contribuição: <strong>USD 5.000.000</strong> ao Tesouro (irrecuperável). Voltado para HNWIs globais que querem residência efetiva nos EUA sem o ônus do Citizenship-Based Taxation. Lista de espera ativa em trumpcard.gov.`,
        kv: [
          { l: "Contribuição", v: "USD 5.000.000" },
          { l: "Permanência sem SPT", v: "Até 270 dias/ano" },
          { l: "Tributação renda ext.", v: "Isenta (não-residente fiscal)" },
          { l: "Status atual", v: "Lista de espera (ago/2026)" },
          { l: "Recuperabilidade", v: "❌ Não recuperável" },
          { l: "Base legal", v: "Executive Order 14351" },
        ],
        impact:
          "Para HNWIs passivos com renda global elevada, a isenção do Substantial Presence Test por até 270 dias/ano remove a exigência de residência fiscal americana que normalmente decorreria dessa permanência. O programa segue indisponível para novas aplicações e sua base legal (Executive Order, sem amparo do Congresso) permanece incerta.",
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
          { l: "Visa Bulletin (Brasil)", v: "Current — sem backlog" },
          { l: "Visa Bulletin (Índia/China)", v: "Unavailable / ~5 anos backlog" },
          { l: "Base legal", v: "INA §203(b)(2)(B)" },
        ],
        impact:
          'Não exige investimento mínimo nem oferta de emprego, ao contrário do EB-5. Aplicável a profissionais com grau acadêmico avançado ou habilidade excepcional em áreas como STEM, biotecnologia, finanças ou IA, mediante comprovação de mérito acadêmico ou empresarial. Para nascidos no Brasil, a categoria está correntemente "Current" no Visa Bulletin (sem data de corte), diferente do backlog enfrentado por Índia e China — a cota pode retrogredir antes do fim do ano fiscal por alta demanda, aplicável a todos os países.',
        sources: [
          {
            t: "USCIS · EB-2 NIW Policy Manual",
            u: "https://www.uscis.gov/policy-manual/volume-6-part-f-chapter-5",
          },
          {
            t: "Matter of Dhanasar (AAO 2016)",
            u: "https://www.justice.gov/eoir/file/904501/dl",
          },
          {
            t: "Department of State · Visa Bulletin",
            u: "https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin.html",
          },
        ],
      },
      {
        name: "EB-5 Immigrant Investor Visa",
        status: "changed",
        desc: `Única via <em>estatutária</em> de residência por investimento — proteção legislativa que o Gold Card não possui. Reformado pelo EB-5 RIA (2022). <strong>Investimentos:</strong> USD 800.000 em TEA (Targeted Employment Area) ou USD 1.050.000 em demais regiões. Criação de 10 empregos. Capital "em risco". Adjustment of Status permitido. Inclui cônjuge e filhos solteiros menores de 21 anos.

<strong>Definição de TEA:</strong> área rural (fora de qualquer Metropolitan Statistical Area e fora de cidade/vila com 20.000+ habitantes pelo censo mais recente) ou área de alto desemprego (census tract, ou tracts contíguos, com taxa de desemprego ≥150% da média nacional). Desde a reforma de 2022, o USCIS tem autoridade exclusiva para determinar se uma área se qualifica como TEA — os estados não determinam mais essa classificação.`,
        kv: [
          { l: "Investimento TEA", v: "USD 800.000" },
          { l: "Geral", v: "USD 1.050.000" },
          { l: "Empregos", v: "10" },
          { l: "Processamento", v: "5–8 anos" },
          { l: "AoS", v: "✅ Permitido" },
          { l: "Determinação de TEA", v: "Exclusiva do USCIS (desde 2022)" },
          { l: "Base legal", v: "INA §203(b)(5)" },
        ],
        impact:
          "Via estatutária, prevista em lei — diferente do Gold Card, criado por Executive Order. O capital investido tem possibilidade de retorno. Processamento em 5–8 anos.",
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
    alert: false,
    sumFiscal: "IRNR · 7% vitalício ou tax holiday 11 anos (reformado 2026)",
    sumFS: "changed",
    sumVisa: "Residência por investimento ~USD 1,7M–2M",
    sumVS: "ok",
    fiscal: [
      {
        name: "IRNR — Tax Holiday + Opções para Novos Residentes",
        status: "changed",
        desc: `Os novos residentes fiscais no Uruguai (não-residentes nos 5 anos anteriores) podem optar entre <strong>duas modalidades excludentes</strong> de tributação sobre rendimentos de capital mobiliário de fonte estrangeira (juros, dividendos), conforme o art. 6 bís do Título 7 do TO 1996 (Lei 19.937/2021), formalizada uma única vez e de forma irrevogável pelo Formulário 0306 da DGI:

<strong>Opção A — Tax Holiday ("feriado fiscal"):</strong> isenção total no exercício em que adquire residência + os <strong>10 exercícios fiscais seguintes</strong> (~11 anos no total). Após o período: transição de 5 anos a 6% (metade da alíquota padrão), seguida do regime permanente de <strong>12% (IRPF Cat. I)</strong>.

<strong>Opção B — Flat 7% Vitalício:</strong> alíquota fixa de <strong>7%</strong> sobre os mesmos rendimentos a partir do ano 1 — sem prazo de expiração, vitalícia.

<strong>Reforma da Lei 20.446 (Presupuesto 2025–2029), em vigor desde 1/jan/2026:</strong> para quem adquire residência fiscal a partir dessa data, a base do IRPF sobre renda estrangeira foi ampliada — além de juros e dividendos, passam a ser alcançados também ganhos de capital (venda de participações/ações no exterior) e aluguéis de imóveis no exterior, às mesmas alíquotas de 12%/7%, porém sobre base de cálculo presumida (15%–20% do valor da venda ou do aluguel bruto), reduzindo a alíquota efetiva a cerca de 1,8%–2,4%, com crédito pelo imposto pago no exterior. Demais rendas (trabalho de fonte estrangeira) permanecem isentas pelo sistema territorial geral. Renda de fonte uruguaia tributada normalmente (IRPF progressivo 10%–36%; juros e dividendos uruguaios a 7% e 12%).

<strong>Sem imposto sobre herança, doações, CFC rules para PF ou controle de câmbio.</strong>`,
        kv: [
          { l: "Opção A — Tax holiday", v: "11 anos isento + transição 6% + 12%" },
          { l: "Opção B — Flat", v: "7% vitalício" },
          { l: "Não-residência prévia", v: "5 anos" },
          {
            l: "Ganhos de capital/aluguéis ext. (desde 2026)",
            v: "12%/7% sobre base presumida",
          },
          { l: "Trabalho de fonte ext.", v: "Isento (territorial)" },
          { l: "IRPF renda local", v: "10%–36% progressivo" },
          { l: "Herança / CFC PF", v: "0% / Não aplicável" },
          { l: "Opção formalizada por", v: "Formulário 0306 (DGI)" },
        ],
        impact:
          "Perfis com horizonte de longo prazo (>11 anos) tendem a optar pela Opção B (7% vitalício); perfis em transição (5–10 anos) tendem a optar pela Opção A. Relevante para brasileiros em processo de desvinculação da residência fiscal no Brasil. Quem adquire residência a partir de 2026 passa a ter ganhos de capital e aluguéis estrangeiros também alcançados pelo regime, ainda que a base de cálculo presumida reduza a alíquota efetiva.",
        warning:
          "A opção entre A e B é <strong>irrevogável</strong> e deve ser exercida no primeiro exercício de residência, via Formulário 0306. Saída fiscal do Brasil (DIRPF de saída definitiva + ganho de capital sobre patrimônio global) exige planejamento; obter residência UY não basta — é necessária comunicação formal à RFB. Os efeitos da Lei 20.446 (regulamentada por Decreto 95/026 e Resolução DGI 1.517/026) devem ser confirmados no texto oficial antes de decisões — os dados desta reforma foram obtidos de fontes secundárias convergentes (Ferrere, Guyer & Regules, Posadas, Deloitte, PwC), sem confirmação direta no texto do IMPO nesta revisão.",
        sources: [
          { t: "DGI · Dirección General Impositiva", u: "https://www.dgi.gub.uy" },
          {
            t: "Lei 19.937/2021 · IMPO",
            u: "https://www.impo.com.uy/bases/leyes/19937-2021",
          },
          { t: "Decreto 163/020 · IMPO", u: "https://www.impo.com.uy" },
          {
            t: "Lei 20.446/2025 (Presupuesto 2025–2029) · IMPO",
            u: "https://www.impo.com.uy/bases/leyes-originales/20446-2025/648",
          },
        ],
      },
    ],
    visa: [
      {
        name: "Residência por Investimento ou Rendas",
        status: "ok",
        desc: `A residência <strong>legal</strong> (migratória, tramitada perante a Dirección Nacional de Migración) e a residência <strong>fiscal</strong> (tributária, DGI) são processos distintos, com autoridades e critérios próprios. O critério de residência fiscal é 183 dias de permanência no ano ou centro de interesses econômicos/vitais no país — presumido quando cônjuge e filhos menores residem habitualmente no Uruguai.

Três vias principais de residência legal: <strong>(A) Investimento empresarial:</strong> geração de 15 postos de trabalho diretos em relação de dependência, ou investimento imobiliário — este último sujeito aos critérios de acesso ao tax holiday fiscal, alterados pela Lei 20.446 desde 1/jan/2026 (ver regime IRNR). <strong>(B) Meios próprios:</strong> renda passiva ≥USD 1.500/mês ou imóvel >USD 380.000. <strong>(C) Aposentados:</strong> pensão ≥USD 1.500/mês.

Naturalização em 3 anos (investimento) ou 5 anos (geral). Passaporte uruguaio: +140 países sem visto. Documentos tipicamente exigidos: certificado de antecedentes penais e certidão de nascimento/casamento apostilados (documentos emitidos pelo Brasil são dispensados de tradução juramentada).`,
        kv: [
          { l: "Investimento (15 empregos)", v: "Emprego direto, em dependência" },
          { l: "Meios próprios", v: "USD 1.500/mês" },
          { l: "Imóvel (rentista)", v: ">USD 380k" },
          { l: "Critério de residência fiscal", v: "183 dias ou centro de interesses" },
          { l: "Processamento", v: "3–6 meses" },
          { l: "Naturalização inv.", v: "3 anos" },
          { l: "Naturalização ger.", v: "5 anos" },
        ],
        impact:
          "Processamento de residência em 3–6 meses. Montevidéu funciona como centro financeiro regional. Residência legal (DNM) e residência fiscal (DGI) exigem trâmites separados — obter uma não confere automaticamente a outra.",
        sources: [
          { t: "Dirección Nacional de Migración", u: "https://migracion.minterior.gub.uy" },
          {
            t: "DGI · Causales de Residencia Fiscal",
            u: "https://www.gub.uy/direccion-general-impositiva",
          },
        ],
      },
    ],
  },
  gb: {
    id: "gb",
    flagCode: "gb",
    name: "Reino Unido",
    region: "Europa",
    alert: true,
    sumFiscal: "FIG 4 anos · Non-Dom abolido abr/2025",
    sumFS: "new",
    sumVisa: "Innovator Founder · HPI",
    sumVS: "ok",
    fiscal: [
      {
        name: "Non-Domiciled (Remittance Basis) — EXTINTO",
        status: "ext",
        desc: `Regime com mais de 200 anos de existência foi abolido pelo <strong>Finance Act 2025 (c. 8)</strong>, após o Autumn Budget de out/2024. A partir de 6 abr/2025, o conceito jurídico de "domicílio" foi removido. Estimava-se 74.000 indivíduos no regime, com £8,2 bi em receita fiscal anual.

<strong>Temporary Repatriation Facility (TRF):</strong> alíquota reduzida de 12% para repatriar rendas e ganhos estrangeiros históricos nos anos fiscais 2025-26 <em>e</em> 2026-27; a alíquota sobe para 15% apenas no último ano de vigência, 2027-28. A facilidade encerra em 5/abr/2028, quando rendas/ganhos históricos não designados voltam a ficar sujeitos às alíquotas normais de Income Tax e CGT caso remetidos ao Reino Unido.`,
        kv: [
          { l: "Status", v: "❌ Abolido abr/2025" },
          { l: "Base legal", v: "Finance Act 2025 (c. 8)" },
          { l: "Beneficiários", v: "~74.000" },
          { l: "TRF 2025-26 e 2026-27", v: "12%" },
          { l: "TRF 2027-28 (último ano)", v: "15%" },
          { l: "TRF encerramento", v: "5/abr/2028" },
        ],
        impact:
          "Afeta diretamente HNWIs residentes em Londres sob o regime anterior, que passam a ser tributados sobre renda mundial desde abr/2025. A TRF permite repatriar rendas e ganhos estrangeiros históricos a alíquota reduzida durante o período de transição.",
        sources: [
          { t: "HMRC · Finance Act 2025", u: "https://www.gov.uk" },
          {
            t: "HMRC · RDRM71000 (Temporary Repatriation Facility)",
            u: "https://www.gov.uk/hmrc-internal-manuals/residence-domicile-and-remittance-basis/rdrm71000",
          },
        ],
      },
      {
        name: "FIG — Foreign Income & Gains Regime",
        status: "new",
        desc: `Substituto do Non-Dom criado pelo Finance Act 2025. <strong>Elegibilidade:</strong> torna-se residente após pelo menos 10 anos consecutivos de não-residência. Durante <strong>4 primeiros anos</strong>: isenção de IT e CGT sobre rendimentos estrangeiros.

Após 4 anos: tributação global (IT até 45%; CGT até 24%; IHT 40% >£325k).

<strong>IHT por residência de longo prazo (Long-Term Resident/LTR):</strong> o Finance Act 2025 substitui o conceito de "domicílio" por um teste de residência: um indivíduo fica sujeito a IHT sobre patrimônio mundial se tiver sido residente fiscal no Reino Unido em pelo menos 10 dos últimos 20 anos fiscais anteriores ao evento tributável. Ao deixar o país, uma "tail provision" mantém a exposição por um período de 3 a 10 anos fiscais, proporcional ao tempo de residência prévia (mínimo de 3 anos para quem residiu até 13 anos, acrescido de 1 ano de tail por ano adicional de residência). A exposição cessa após 10 anos fiscais consecutivos de não-residência, o que também reinicia a janela de 20 anos.

<strong>Trusts:</strong> a proteção de trusts constituídos por não-domiciliados antes de se tornarem "deemed domiciled" (regime de 2017) foi abolida desde 6/abr/2025 — settlors residentes no Reino Unido passam a ser tributados sobre a totalidade da renda e dos ganhos do trust estrangeiro, independentemente da data de constituição.

<strong>Overseas Workday Relief (OWR):</strong> ampliado para até 4 anos fiscais consecutivos, sujeito a um teto anual equivalente ao menor valor entre 30% da renda de trabalho qualificada ou £300.000.`,
        kv: [
          { l: "Elegibilidade", v: "10 anos não-residência" },
          { l: "Duração", v: "4 anos" },
          { l: "Após", v: "Tributação global" },
          { l: "IT máx.", v: "45%" },
          { l: "CGT máx.", v: "24%" },
          { l: "IHT (Long-Term Resident)", v: "10 de 20 anos de residência" },
          { l: "Tail provision (saída)", v: "3 a 10 anos fiscais" },
          { l: "OWR — teto anual", v: "Menor entre 30% da renda ou £300k" },
        ],
        impact:
          "Duração de 4 anos, sem prorrogação, ante 15 anos nos regimes equivalentes da Grécia e da Itália. Aplicável a missões temporárias e gestores de fundos; não cobre planejamento de longo prazo. A exposição a IHT sobre patrimônio mundial agora depende de anos de residência (teste LTR), não mais do conceito de domicílio.",
        warning:
          "HNWIs no Non-Dom que permaneceram passam a ser tributados sobre renda global desde abr/2025. Trusts constituídos antes de 2017 perderam a proteção fiscal que tinham sob o regime anterior. Avaliação urgente de reestruturação patrimonial.",
        sources: [
          { t: "HMRC · FIG Guidance", u: "https://www.gov.uk" },
          {
            t: "HMRC · Inheritance Tax and Long-Term UK Residence",
            u: "https://www.gov.uk/guidance/inheritance-tax-and-long-term-uk-residence",
          },
          {
            t: "HMRC · EIM43600 (Overseas Workday Relief)",
            u: "https://www.gov.uk/hmrc-internal-manuals/employment-income-manual/eim43600",
          },
        ],
      },
    ],
    visa: [
      {
        name: "Innovator Founder Visa",
        status: "ok",
        desc: `Para empreendedores com ideia de negócio inovadora, escalável e viável, avaliada quanto a esses três critérios pela entidade credenciada (endorsing body). Exige endosso de entidade credenciada pelo Home Office — atualmente UK Endorsing Services, Innovator International e Envestors Limited, além do Global Entrepreneurs Programme para founders já selecionados nesse programa; a lista é atualizada periodicamente. Sem valor mínimo formal. ILR após 3 anos com negócio ativo. Sem requisito de tempo mínimo de presença, mas avaliado na renovação.

<strong>Contexto regulatório:</strong> o White Paper de Imigração de mai/2025 propôs elevar o prazo padrão de qualificação para ILR de 5 para 10 anos ("earned settlement"), mas manteve explicitamente a trilha de 3 anos para os vistos Innovator Founder e Global Talent.

<strong>Pós-ILR:</strong> naturalização exige 12 meses adicionais de residência com ILR (ou 3 anos se casado com cidadão britânico), aprovação no Life in the UK Test (24 questões, nota mínima de 75%) e inglês nível B1, além do critério de "bom caráter".`,
        kv: [
          { l: "Investimento", v: "Não definido" },
          { l: "Endosso", v: "UK Endorsing Services, Innovator International, Envestors" },
          { l: "ILR", v: "3 anos (mantido pelo White Paper 2025)" },
          { l: "Presença", v: "Avaliada na renovação" },
          { l: "Naturalização pós-ILR", v: "12 meses + Life in the UK Test + inglês B1" },
          { l: "Cidadania", v: "1 ano após ILR" },
        ],
        impact:
          "Mais adequado para fundadores de startups do que HNWIs passivos. Combinável com FIG (se qualificado) para isenção nos primeiros 4 anos. A trilha de 3 anos para ILR foi mantida mesmo após a proposta de 'earned settlement' de 10 anos para o caso geral.",
        sources: [
          { t: "Home Office · UKVI", u: "https://www.gov.uk/innovator-founder-visa" },
          {
            t: "Home Office · Endorsing bodies (Innovator Founder/Scale-up)",
            u: "https://www.gov.uk/government/publications/endorsing-bodies-innovator-founder-and-scale-up-visas",
          },
          { t: "GOV.UK · Life in the UK Test", u: "https://www.gov.uk/life-in-the-uk-test" },
        ],
      },
    ],
  },
  hk: {
    id: "hk",
    flagCode: "hk",
    name: "Hong Kong",
    region: "Ásia",
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

<strong>Salaries Tax:</strong> compara o imposto progressivo (2%–17% sobre a renda líquida, após deduções) com uma taxa-padrão de dois níveis ("two-tiered standard rate") — 15% até HKD 5.000.000 de renda líquida tributável, 16% acima disso — pagando-se o menor valor entre os dois cálculos.

<strong>Profits Tax:</strong> também de dois níveis — 8,25% sobre os primeiros HKD 2.000.000 de lucro tributável e 16,5% sobre o excedente, para sociedades (7,5%/15% para empresas não incorporadas); apenas uma entidade por grupo pode usar a faixa reduzida. <strong>Sem imposto sobre herança, ganhos de capital ou patrimônio.</strong>

<strong>Hong Kong Minimum Top-up Tax (Pillar Two/BEPS):</strong> em vigor desde 1/jan/2025 para grupos multinacionais com receita consolidada ≥€750M em pelo menos 2 dos últimos 4 exercícios, com alíquota mínima de 15%; a primeira notificação é devida em 2026 e o primeiro relatório (GIR) em 2027.`,
        kv: [
          { l: "Salaries Tax", v: "2%–17% ou 15%/16% (o menor)" },
          { l: "Profits Tax", v: "8,25% (até HKD 2M) / 16,5%" },
          { l: "Dividendos", v: "0%" },
          { l: "Ganhos capital", v: "0%" },
          { l: "Herança", v: "0%" },
          { l: "HK Minimum Top-up Tax", v: "15%, grupos ≥€750M, desde 01/2025" },
          { l: "Renda ext.", v: "Isenta" },
        ],
        impact:
          "Sistema territorial aplicável a gestores de investimentos, family offices e traders com renda predominantemente de fonte estrangeira.",
        warning:
          "A Lei de Segurança Nacional (2020) e a progressiva integração com legislação continental criaram incerteza jurídica quanto à autonomia regulatória de longo prazo.",
        sources: [
          { t: "Inland Revenue Department", u: "https://www.ird.gov.hk" },
          {
            t: "IRD · Two-tiered Profits Tax Rates FAQ",
            u: "https://www.ird.gov.hk/eng/faq/2tr.htm",
          },
          {
            t: "IRD · Global Minimum Tax and HK Minimum Top-up Tax",
            u: "https://www.ird.gov.hk/eng/tax/bus_beps.htm",
          },
        ],
      },
    ],
    visa: [
      {
        name: "CIES — Capital Investment Entrant Scheme",
        status: "new",
        desc: `Reativado em mar/2024 após suspensão em 2015. Investimento mínimo total de <strong>HKD 30.000.000</strong> (~USD 3,8M): HKD 27.000.000 em ativos financeiros elegíveis e/ou imóveis, mais HKD 3.000.000 obrigatórios no CIES Investment Portfolio, gerido pela Hong Kong Investment Corporation Limited (HKIC).

<strong>Atualização (out/2024):</strong> imóveis voltaram a ser elegíveis — não-residenciais, e residenciais com preço unitário ≥HKD 50.000.000 — limitados a um teto agregado de HKD 10.000.000 do investimento total. Ativos financeiros elegíveis incluem ações listadas na SEHK, títulos de dívida, certificados de depósito (prazo remanescente ≥12 meses, teto de 10%/HKD 3M) e fundos constantes da lista de "Eligible Collective Investment Schemes" mantida pela SFC.

<strong>Processo:</strong> (1) Net Asset Assessment por contador certificado, comprovando patrimônio líquido ≥HKD 30M por 6 meses antes do pedido; (2) Approval-in-Principle (AIP), com visto de visitante de até 180 dias para efetivar o investimento; (3) comprovação do investimento e Formal Approval, válido por até 24 meses; (4) extensão por 3 anos; (5) relatório anual de cumprimento por contador certificado. Dependentes: cônjuge e filhos solteiros menores de 18 anos, mediante patrocínio. Direito de residência permanente após 7 anos de residência ordinária e contínua — ausências temporárias (férias, negócios, estudo) não interrompem a contagem.`,
        kv: [
          { l: "Investimento total", v: "HKD 30M (USD 3,8M)" },
          { l: "Ativos financeiros/imóveis", v: "HKD 27M" },
          { l: "CIES Investment Portfolio (HKIC)", v: "HKD 3M" },
          { l: "Teto para imóveis", v: "HKD 10M" },
          { l: "AIP — prazo p/ efetivar", v: "Até 180 dias" },
          { l: "Formal Approval", v: "Até 24 meses" },
          { l: "Permanência", v: "7 anos (residência contínua)" },
        ],
        impact:
          "Requer investimento elevado. Hong Kong oferece acesso ao mercado financeiro chinês e asiático. Imóveis voltaram a ser elegíveis desde out/2024, dentro de um teto de HKD 10M.",
        sources: [
          { t: "Immigration Department · New CIES", u: "https://www.immd.gov.hk/eng/services/visas/newcies.html" },
          {
            t: "Government · Enhancement measures on New CIES (out/2024)",
            u: "https://www.info.gov.hk/gia/general/202410/16/P2024101600293.htm",
          },
        ],
      },
      {
        name: "Top Talent Pass Scheme (TTPS)",
        status: "ok",
        desc: `Para profissionais altamente qualificados. <strong>Cat. A:</strong> renda anual ≥HKD 2,5M (~USD 320k), validade inicial de 36 meses desde 16/out/2024. <strong>Cat. B:</strong> lista de universidades elegíveis + 3 anos de experiência, validade inicial de 24 meses. <strong>Cat. C:</strong> lista de universidades elegíveis, sem experiência exigida (até 5 anos de formado), validade inicial de 24 meses.

<strong>Lista de universidades:</strong> não é um recorte fixo de "top 100" — é revisada anualmente pelo governo de Hong Kong, combinando as 100 melhores posições em quatro rankings internacionais (QS, Times Higher Education, US News &amp; World Report e Shanghai Jiao Tong/ARWU), acrescida de instituições especializadas em hotelaria e artes/design, e das 20 melhores universidades chinesas continentais. A lista vigente desde 1/jan/2026 contém 200 instituições.

<strong>Renovação:</strong> não é automática desde 30/jan/2026 — exige "Exclusive Survey" e, no ciclo de extensão (3+3 anos), comprovação de vínculo econômico efetivo em Hong Kong (emprego compatível com o grau em salário de mercado, ou negócio substantivo estabelecido). Dependentes: cônjuge/parceiro e filhos solteiros menores de 18 anos, com direito irrestrito a trabalho e estudo.`,
        kv: [
          { l: "Cat. A renda", v: "≥HKD 2,5M/ano" },
          { l: "Cat. A validade inicial", v: "36 meses (desde out/2024)" },
          { l: "Cat. B/C validade inicial", v: "24 meses" },
          { l: "Lista de universidades", v: "200 instituições (desde 01/2026)" },
          { l: "Renovação", v: "Não automática — exige vínculo econômico" },
          { l: "Oferta emprego", v: "Não exigida" },
          { l: "Familiar", v: "✅ Trabalho/estudo irrestritos" },
        ],
        impact:
          "Via de acesso para executivos e profissionais de alta renda, sem o compromisso financeiro do CIES. A renovação, desde jan/2026, passou a exigir comprovação de vínculo econômico efetivo em Hong Kong.",
        sources: [
          { t: "Immigration · TTPS", u: "https://www.immd.gov.hk/eng/services/visas/TTPS.html" },
          {
            t: "Government · Annual update of eligible universities under TTPS",
            u: "https://www.info.gov.hk/gia/general/202412/27/P2024122700198.htm",
          },
        ],
      },
    ],
  },
};

export function getCountry(id: string): Country | undefined {
  return COUNTRIES[id as CountryId];
}
