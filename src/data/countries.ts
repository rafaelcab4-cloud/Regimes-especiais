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
        legalBasis:
          "Art. 14 LIFD/DBG (RS 642.11) e Art. 6 LHID (RS 642.14). Ordonnance sobre a imposição segundo a despesa em matéria de imposto federal direto, de 20/2/2013 (RO 2013/157). Ordonnance do DFF de 10/9/2025 (RO 2025 579), que fixa a indexação para 2026. Circulaire AFC n.º 44, de 24/7/2018 (substitui a n.º 9/1993). Legislação cantonal própria em cada cantão que pratica o regime.",
        desc: `O regime de forfait fiscal — regulamentado pelo Art. 14 da Lei Federal sobre Impostos Diretos (LIFD/DBG) — é aplicado desde o século XIX. Em vez de tributar a renda e o patrimônio global efetivos, o sistema aplica alíquotas ordinárias sobre uma base tributável fictícia calculada a partir das <strong>despesas de vida anuais do contribuinte</strong>.

<strong>Base de cálculo:</strong> o valor tributável é o <strong>maior</strong> entre quatro grandezas: (i) sete vezes o aluguel ou valor locativo da residência principal; (ii) três vezes o custo anual de pensão, para quem reside em hotel; (iii) as despesas de vida mundiais efetivas do contribuinte e dependentes; (iv) o mínimo legal indexado. Desde 1/jan/2016, para o imposto cantonal e comunal, a fortuna é considerada por <strong>majoração de 10%</strong> sobre a base retida.

<strong>Cantões elegíveis (21 de 26):</strong> regime abolido em Zurique, Basileia-Cidade, Basileia-Campo, Schaffhausen e Appenzell Ausserrhoden.

<strong>Imposto anual efetivo estimado:</strong> CHF 150.000–350.000 dependendo do cantão, do imóvel e do perfil.`,
        kv: [
          { l: "Base federal mín. (2026)", v: "CHF 435.000" },
          { l: "Mín. cantonal Genebra (2026)", v: "CHF 426.357" },
          { l: "Regra do imóvel", v: "7× aluguel ou valor locativo" },
          { l: "Regra do hotel", v: "3× custo anual de pensão" },
          { l: "Majoração p/ fortuna (ICC)", v: "+10% sobre a base" },
          { l: "Imposto efetivo", v: "CHF 150k–350k/ano" },
          { l: "Cantões elegíveis", v: "21 de 26" },
          { l: "Duração do ruling", v: "~5 anos, renovável" },
          { l: "Patrimônio mínimo legal", v: "❌ Não existe" },
        ],
        requirements: [
          "<strong>Nacionalidade estrangeira.</strong> Cidadãos suíços não podem aderir; bipátridas com nacionalidade suíça também ficam excluídos.",
          "<strong>Primeira instalação fiscal na Suíça</strong>, ou retorno após ausência mínima de 10 anos. A Circular n.º 44 eliminou a possibilidade, antes admitida, de suíços que retornavam após 10 anos usarem o forfait no ano de retorno.",
          "<strong>Ausência de atividade lucrativa na Suíça ou a partir da Suíça.</strong> A detenção passiva de participações, o recebimento de dividendos e a gestão do patrimônio privado próprio não contam como atividade lucrativa. Atividade lucrativa exercida no exterior é admitida para fins fiscais (mas veja a restrição migratória no regime de residência).",
          "<strong>Ambos os cônjuges</strong> que vivem em economia doméstica comum devem preencher <strong>individual e integralmente</strong> todas as condições — mudança introduzida pela revisão de 2014 e pela Circular 44; antes, bastava que um deles preenchesse.",
          "Não há, na lei federal, patamar mínimo de <strong>patrimônio ou renda</strong> — apenas a base de despesa mínima indexada. Referências de mercado a USD 20M+ refletem prática de planejamento, não exigência legal.",
        ],
        process: [
          {
            step: "Pré-análise e escolha do cantão",
            timing: "Semanas 0–4",
            detail:
              "Verificação de que o cantão pratica o regime (21 de 26) e comparação de mínimos cantonais e alíquotas efetivas.",
          },
          {
            step: "Submissão do pedido à administração fiscal cantonal",
            detail:
              "Dossiê com carta descritiva da situação civil, profissional e econômica; atestado de que não exercerá atividade lucrativa na Suíça; <strong>proposta de montante</strong> de base tributável; cópia do contrato de locação ou formulário de valor locativo; e o formulário cantonal oficial sobre o padrão de vida do contribuinte e dependentes.",
          },
          {
            step: "Negociação e assinatura da convenção fiscal (ruling)",
            timing: "Validade de ~5 anos",
            detail:
              "Acordo firmado entre a administração e o contribuinte, podendo ter prazo reduzido conforme as circunstâncias. Recomenda-se ruling prévio confirmando a ausência de atividade lucrativa proibida. Mudança de cantão durante a vigência exige nova negociação com o cantão de destino.",
          },
          {
            step: "Pedido migratório paralelo",
            detail:
              "Apresentado à autoridade cantonal de migração, que se baseia no interesse fiscal cantonal atestado pelo ruling. <em>Prazo oficial de decisão não localizado em fonte publicada.</em>",
          },
          {
            step: "Anúncio de chegada na comuna (Anmeldung)",
            timing: "Até 14 dias da mudança",
            detail: "Registro obrigatório junto ao controle de habitantes do município de residência.",
          },
          {
            step: "Biometria e emissão do permit",
            detail:
              "Convite escrito para comparecer ao centro de documentos de identidade. O permit é emitido em formato cartão e enviado à comuna; os dados biométricos têm validade de 5 anos.",
          },
          {
            step: "Renovação",
            timing: "Anual / quinquenal",
            detail:
              "Mesmo formulário cantonal usado por novos residentes serve para renovações. A indexação da base mínima ocorre <strong>automaticamente e em separado</strong> para o imposto federal direto e para o cantonal e comunal.",
          },
        ],
        costs: [
          { item: "Base tributável mínima federal (2026)", value: "CHF 435.000" },
          {
            item: "Base mínima cantonal — Genebra (2026)",
            value: "CHF 426.357",
            note: "acrescida de majoração de 10% pela fortuna",
          },
          {
            item: "Imposto total anual — Vaud",
            value: "CHF 250.000–400.000",
            note: "estimativa de mercado, não oficial",
          },
          {
            item: "Imposto total anual — Valais",
            value: "CHF 180.000–300.000",
            note: "estimativa de mercado, não oficial",
          },
          {
            item: "Imposto total anual — Ticino",
            value: "CHF 200.000–350.000",
            note: "estimativa de mercado, não oficial",
          },
          {
            item: "AVS/AI/APG — pessoas sem atividade lucrativa",
            value: "CHF 530 – 26.500/ano",
            note: "por pessoa; teto atingido com fortuna determinante ≥ CHF 8.950.000",
          },
          {
            item: "Seguro-saúde LAMal — prêmio médio adulto (2026)",
            value: "CHF 465,30/mês",
            note: "jovem adulto CHF 326,30 · criança CHF 122,50",
          },
          {
            item: "Carga marginal máxima ordinária por cantão",
            value: "21,9% – 43,2%",
            note: "de Zug a Genebra, entre capitais cantonais",
          },
        ],
        sections: [
          {
            title: "Como a base tributável é calculada, na prática",
            body: `Exemplo numérico, Genebra, 2026:

Aluguel anual de <strong>CHF 90.000</strong> → 7× = <strong>CHF 630.000</strong>.
Despesas de vida mundiais declaradas: CHF 480.000.
Mínimo federal: CHF 435.000. Mínimo cantonal: CHF 426.357.

<strong>Base para o imposto federal direto (IFD)</strong> = maior valor = <strong>CHF 630.000</strong>.
<strong>Base para o imposto cantonal e comunal (ICC)</strong> = 630.000 + 10% = <strong>CHF 693.000</strong>.

Sobre essas bases aplicam-se as tabelas ordinárias de IFD e ICC.

<em>Ponto de virada:</em> a regra dos 7× o aluguel passa a prevalecer sobre o mínimo federal quando o aluguel anual supera cerca de <strong>CHF 62.143</strong>.`,
          },
          {
            title: "Cálculo de controle (calcul de contrôle)",
            body: `Paralelamente à base de despesa, a administração calcula o imposto que incidiria sobre <strong>todos os elementos de renda e fortuna de fonte suíça</strong>, mais os rendimentos para os quais se pede alívio convencional. <strong>Retém-se a base que resultar no imposto mais alto.</strong>

Na prática, isso significa que rendimentos suíços relevantes podem anular a vantagem do forfait.`,
          },
          {
            title: "O que o regime cobre e o que não cobre",
            body: `<strong>Substitui:</strong> o imposto de renda federal, cantonal e comunal e — via majoração de 10%, em cantões como Genebra — o imposto sobre a fortuna.

<strong>Não exonera:</strong> impostos indiretos; o imposto sobre imóveis suíços apurado no cálculo de controle; nem os impostos cantonais sobre sucessões e doações.

<em>NÃO CONFIRMADO em fonte oficial:</em> o tratamento exato de ganhos de capital mobiliários vs. imobiliários sob o forfait — o imposto cantonal sobre ganhos imobiliários (gain immobilier) permanece devido, mas a articulação com o regime carece de confirmação normativa direta.`,
          },
          {
            title: "Herança e doações: matéria estritamente cantonal",
            body: `<strong>Não há imposto sucessório federal</strong> — a matéria é integralmente cantonal.

<strong>Cônjuge sobrevivente é isento em todos os 26 cantões, sem exceção.</strong> Descendentes diretos são isentos na maioria dos cantões (entre eles Zurique, Berna, Vaud, Friburgo e Valais). <strong>Schwyz e Obwalden isentam todos os herdeiros</strong>, qualquer que seja o grau de parentesco. Neuchâtel não tributa a linha direta.

Vaud, desde 1/jan/2025, aplica franquia sucessória de até <strong>CHF 1.000.000 por estirpe</strong> e franquia de doação de <strong>CHF 300.000 por filho por ano civil</strong>.

<em>NÃO CONFIRMADO:</em> a lista completa dos cantões que ainda tributam descendentes diretos.`,
          },
          {
            title: "Acesso a tratados de dupla tributação sob o forfait",
            body: `Este é um dos pontos mais técnicos do regime. <strong>Alemanha, Áustria, Bélgica, Itália, Noruega, Estados Unidos e Canadá</strong> reconhecem a residência do forfaitaire, mas só concedem os benefícios convencionais se <strong>todos</strong> os rendimentos provenientes desses Estados — não apenas os tributados na fonte — forem tributáveis segundo o direito suíço e efetivamente submetidos ao IFD e ao ICC. É a figura do <strong>forfait majoré</strong> (imposição modificada), que Genebra documenta em página oficial própria.

<strong>França é caso à parte:</strong> instrução publicada no Journal Officiel de 26/12/2012 encerrou mais de 40 anos de tolerância. A França passou a recusar o benefício da convenção França–Suíça aos forfaitaires, inclusive no forfait majoré, quando tributados sobre o valor locativo.`,
          },
          {
            title: "Perda do regime e consequências",
            body: `O regime cessa se qualquer condição deixar de ser preenchida — aquisição da nacionalidade suíça, início de atividade lucrativa na Suíça, ou separação de cônjuges com um deles deixando de cumprir os requisitos.

<strong>Consequência:</strong> passagem à tributação ordinária mundial sobre renda e fortuna.

<em>NÃO CONFIRMADO em fonte oficial:</em> os efeitos retroativos e os prazos exatos dessa transição.`,
          },
        ],
        brazilNote: `A <strong>Convenção Brasil–Suíça</strong> foi assinada em 3/5/2018, <strong>entrou em vigor em 16/3/2021</strong>, foi promulgada pelo Decreto n.º 10.714 de 8/6/2021 e produz efeitos, em geral, desde 1/jan/2022.

<strong>Alíquotas convencionais:</strong> dividendos a <strong>10%</strong> quando o beneficiário efetivo é sociedade detentora de ao menos 10% do capital; pisos convencionais de <strong>4,9%</strong> para juros e <strong>10%</strong> para royalties. A convenção cobre também a CSLL, contém <strong>cláusula PPT (antiabuso)</strong> e trata de entidades transparentes como trusts e partnerships.

<em>NÃO CONFIRMADO:</em> as alíquotas gerais de dividendos, juros e serviços técnicos exigem leitura do texto integral do Decreto 10.714/2021. Também não foi localizada posição oficial da Receita Federal ou da administração suíça sobre se o forfait afeta o acesso a esse tratado — o Brasil <strong>não</strong> consta da lista de países que restringem benefícios convencionais a forfaitaires.

<strong>Saída fiscal do Brasil</strong> (IN SRF 208/2002): Comunicação de Saída Definitiva do dia da saída até o <strong>último dia de fevereiro</strong> do ano-calendário seguinte; Declaração de Saída Definitiva entregue <strong>de março a maio</strong>, sem prorrogação.

<strong>CRS:</strong> a coleta de dados entre Brasil e Suíça começou em 1/jan/2018, com o primeiro intercâmbio automático efetivo em 2019, referente ao ano-base 2018.`,
        impact:
          "Não exige declaração de ativos e rendimentos globais. Ganhos de capital sobre ativos financeiros mobiliários pessoais são isentos — regra geral suíça para pessoas físicas sem atividade de negociação profissional, preservada também sob este regime. Rede de 60+ tratados de dupla tributação. Elegibilidade a passaporte suíço após 10–12 anos.",
        warning:
          "Ambos os cônjuges devem preencher individualmente todos os requisitos — regra endurecida pela Circular 44. O acesso a tratados de dupla tributação é restrito: sete países exigem o forfait majoré e a França recusa o benefício convencional desde 2012. Proposta de imposto sucessório federal sobre patrimônio >CHF 50M esteve em debate político (não aprovada); referendo de 2014 rejeitou a abolição do regime por 59% a 41%.",
        sources: [
          {
            t: "Fedlex · LIFD Art. 14 (RS 642.11)",
            u: "https://www.fedlex.admin.ch/eli/cc/1991/1184_1184_1184/fr",
          },
          {
            t: "Fedlex · Ordonnance imposition d'après la dépense (RO 2013/157)",
            u: "https://www.fedlex.admin.ch/eli/cc/2013/157/fr",
          },
          {
            t: "EFD/DFF · Imposition d'après la dépense",
            u: "https://www.efd.admin.ch/fr/imposition-depense",
          },
          {
            t: "ge.ch · Le calcul lié à l'imposition d'après la dépense",
            u: "https://www.ge.ch/imposition-apres-depense/calcul-lie-imposition-apres-depense",
          },
          {
            t: "ge.ch · L'imposition modifiée (forfait majoré)",
            u: "https://www.ge.ch/imposition-apres-depense/imposition-modifiee",
          },
          {
            t: "OFSP · Prêmios LAMal 2026",
            u: "https://www.bag.admin.ch/fr/newnsb/d2okh_kUK_OFhmMDfpyiy",
          },
          {
            t: "AHV/AVS · Cotisations des non-actifs (memento 2.03)",
            u: "https://www.ahv-iv.ch/p/2.03.f",
          },
          {
            t: "Receita Federal · Decreto 10.714/2021 (CDT Brasil–Suíça)",
            u: "https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/legislacao/acordos-internacionais/acordos-para-evitar-a-dupla-tributacao/suica/decreto-no-10-714-de-8-de-junho-de-2021",
          },
        ],
      },
    ],
    visa: [
      {
        name: "Residência por Lump-Sum Fiscal (B-permit)",
        status: "ok",
        legalBasis:
          "LEI/AIG (RS 142.20): Art. 28 (rentistas), Art. 30 al. 1 let. b (derrogação por interesse público preponderante) e Art. 44 (reagrupamento familiar). OASA/VZAE (RS 142.201): Art. 25 (rentistas) e Art. 32 (interesses cantonais maiores em matéria fiscal). Directives LEI da SEM. ALCP/FZA (RS 0.142.112.681) para nacionais da UE/AELE.",
        desc: `A Suíça não opera um golden visa formal por investimento imobiliário. A residência é obtida por um processo binário: <strong>(i) ruling fiscal</strong> negociado com a autoridade tributária cantonal e <strong>(ii) permissão de residência</strong> concedida pela autoridade de migração cantonal.

O resultado é uma permissão de residência <strong>B</strong>, anual e renovável. A última estatística oficial disponível registra <strong>4.557 titulares</strong> ao final de 2018, que pagaram CHF 821 milhões em impostos naquele ano.

<strong>Há duas vias distintas para nacionais de países fora da UE/AELE — e a diferença entre elas é frequentemente confundida:</strong>

<strong>Via do interesse fiscal (Art. 30 al. 1 let. b LEI):</strong> a autorização é concedida por derrogação, e o Art. 32 da OASA cita expressamente os "interesses cantonais maiores em matéria fiscal" como fundamento. A SEM <strong>não exige</strong> idade mínima nem laços estreitos prévios com a Suíça nesse fundamento.

<strong>Via do rentista (Art. 28 LEI / Art. 25 OASA):</strong> exige, cumulativamente, <strong>idade mínima de 55 anos</strong>, laços pessoais especiais com a Suíça, meios financeiros suficientes e <strong>nenhuma atividade lucrativa nem na Suíça nem no exterior</strong> — restrição mais severa do que a regra fiscal do Art. 14 LIFD, que admite atividade no exterior.

Nacionais da UE/AELE seguem o Acordo de Livre Circulação (ALCP), com requisitos de meios financeiros suficientes e cobertura de saúde.`,
        kv: [
          { l: "Tipo de permissão", v: "B-permit anual" },
          { l: "Titulares (últ. estatística oficial)", v: "4.557 (2018)" },
          { l: "Arrecadação (2018)", v: "CHF 821 milhões" },
          { l: "Via interesse fiscal", v: "Art. 30 al. 1 let. b — sem idade mínima" },
          { l: "Via rentista", v: "Art. 28 — 55 anos + sem atividade global" },
          { l: "Anmeldung na comuna", v: "Até 14 dias da chegada" },
          { l: "Permit C (estabelecimento)", v: "5 anos (UE/AELE) · 10 anos (demais)" },
          { l: "Naturalização", v: "10–12 anos" },
        ],
        requirements: [
          "<strong>Via interesse fiscal (Art. 30 al. 1 let. b LEI + Art. 32 OASA):</strong> demonstração de interesse cantonal maior em matéria fiscal, atestado pelo ruling. A SEM não exige laços prévios com a Suíça nesse fundamento.",
          "<strong>Via rentista (Art. 28 LEI + Art. 25 OASA), cumulativamente:</strong> idade mínima de <strong>55 anos</strong>; laços pessoais especiais com a Suíça; meios financeiros suficientes; e <strong>nenhuma atividade lucrativa na Suíça nem no exterior</strong>, salvo a gestão do próprio patrimônio.",
          "<strong>Nacionais da UE/AELE:</strong> residência sem atividade lucrativa ao abrigo do ALCP, com meios financeiros suficientes e cobertura de saúde. <em>Valores de suficiência não confirmados em fonte oficial.</em>",
          "Contratação obrigatória do <strong>seguro-saúde LAMal</strong>.",
          "Manutenção de <strong>domicílio efetivo</strong> no cantão — a prática é cantonal e não há regra numérica federal publicada de dias mínimos de permanência.",
        ],
        process: [
          {
            step: "Ruling fiscal cantonal",
            detail:
              "Negociado antes ou em paralelo ao pedido migratório — a autoridade de migração se baseia no interesse fiscal cantonal atestado pelo acordo.",
          },
          {
            step: "Pedido à autoridade cantonal de migração",
            detail:
              "Aprovação cantonal seguida de <strong>aprovação federal da SEM</strong> nos casos fundados no Art. 30 al. 1 let. b LEI. <em>Prazos oficiais não publicados.</em>",
          },
          {
            step: "Entrada na Suíça",
            detail:
              "Com visto D quando exigido pela nacionalidade. <em>NÃO CONFIRMADO: se brasileiros, isentos de visto de curta duração, precisam de visto nacional D para residência.</em>",
          },
          {
            step: "Anúncio de chegada na comuna (Anmeldung)",
            timing: "Até 14 dias",
            detail: "Registro junto ao controle de habitantes do município.",
          },
          {
            step: "Biometria e emissão do permit",
            detail:
              "Comparecimento ao centro de documentos de identidade; permit em formato cartão, enviado à comuna. Dados biométricos válidos por 5 anos.",
          },
          {
            step: "Contratação do seguro LAMal",
            detail:
              "Obrigatória para todos os residentes. <em>Prazo legal de 3 meses da chegada não confirmado em fonte oficial.</em>",
          },
          {
            step: "Renovação anual",
            detail:
              "Verificação da manutenção do ruling, do pagamento efetivo do imposto, da ausência de atividade lucrativa e da residência efetiva no cantão. O permit C (estabelecimento) vem após 5 anos para UE/AELE ou 10 anos para as demais nacionalidades.",
          },
        ],
        costs: [
          {
            item: "Custo fiscal",
            value: "Idêntico ao forfait",
            note: "o permit é condicionado ao ruling",
          },
          {
            item: "AVS/AHV sem atividade lucrativa",
            value: "CHF 530 – 26.500/ano",
            note: "por pessoa; casal sem atividade pode aproximar-se de CHF 53.000/ano",
          },
          {
            item: "LAMal — adulto (2026)",
            value: "CHF 465,30/mês",
            note: "média nacional",
          },
          { item: "LAMal — criança (2026)", value: "CHF 122,50/mês" },
          {
            item: "Emolumentos de permit e biometria",
            value: "Não confirmado",
            note: "tabela oficial de emolumentos cantonais não localizada",
          },
        ],
        sections: [
          {
            title: "Interação entre o regime fiscal e o migratório",
            body: `A autorização de residência depende do ruling fiscal. A perda do regime fiscal tende a retirar o fundamento do Art. 30 al. 1 let. b LEI e afeta a renovação do permit.

<em>NÃO CONFIRMADO:</em> se a consequência migratória da perda do regime fiscal é automática.`,
          },
          {
            title: "Residência efetiva e dias de permanência",
            body: `A manutenção do permit exige domicílio efetivo no cantão. A doutrina especializada suíça trata das exigências de duração mínima de estadia para o forfaitaire.

<em>NÃO CONFIRMADO:</em> não há regra numérica federal publicada de dias mínimos — a prática é definida cantão a cantão. A Suíça também não fixa uma contagem de dias isolada como critério de residência fiscal, diferentemente do que ocorre em convenções internacionais.`,
          },
          {
            title: "Família",
            body: `Cônjuge e filhos são incluídos na base de cálculo do forfait, mas precisam de processo migratório próprio de <strong>reagrupamento familiar (Art. 44 LEI)</strong>, dentro do prazo de 5 anos da concessão do permit principal — ou 12 meses, se o filho tiver mais de 12 anos.

Lembrete importante do regime fiscal: <strong>ambos os cônjuges</strong> devem preencher individualmente todos os requisitos do forfait.`,
          },
        ],
        brazilNote: `Brasileiros são <strong>nacionais de terceiro Estado</strong> para efeitos da LEI e, portanto, sujeitos à via do interesse fiscal (Art. 30 al. 1 let. b) ou à via do rentista (Art. 28, com idade mínima de 55 anos) — não ao ALCP, que se aplica apenas a nacionais da UE/AELE.

Aplicam-se integralmente as obrigações brasileiras de saída fiscal descritas no regime fiscal: Comunicação de Saída Definitiva até o último dia de fevereiro do ano seguinte e Declaração de Saída Definitiva de março a maio.

O <strong>CRS entre Brasil e Suíça</strong> tem coleta de dados desde 1/jan/2018, com o primeiro intercâmbio automático em 2019.`,
        impact:
          "Combina residência estável e privacidade fiscal. A via do interesse fiscal (Art. 30) não impõe idade mínima, ao contrário da via do rentista (Art. 28, 55 anos). Direcionado a patrimônio líquido a partir de USD 20M — referência de mercado, sem exigência legal formal.",
        warning:
          "A via do rentista (Art. 28) exige ausência de atividade lucrativa também no exterior — restrição mais severa que a do regime fiscal do Art. 14 LIFD, que admite atividade fora da Suíça. Confirme qual via fundamenta o pedido antes de estruturar a mudança.",
        sources: [
          {
            t: "SEM · Directives LEI (PDF)",
            u: "https://www.sem.admin.ch/dam/sem/fr/data/rechtsgrundlagen/weisungen/auslaender/weisungen-aug-f.pdf",
          },
          {
            t: "EFD/DFF · Imposition d'après la dépense (estatísticas)",
            u: "https://www.efd.admin.ch/fr/imposition-depense",
          },
          {
            t: "vd.ch · Titre de séjour e biometria",
            u: "https://www.vd.ch/population/documents-didentite/nouveau-titre-de-sejour-et-deplacement-au-centre-de-biometrie",
          },
          {
            t: "Lausanne · Anúncio de chegada em 14 dias",
            u: "https://www.lausanne.ch/prestations/controle-des-habitants/arrivee-etrangers-permis-b-f-l-etudiants-touristes.html",
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
    sumVisa: "Investor Visa €250k–€2M",
    sumVS: "ok",
    fiscal: [
      {
        name: "Flat Tax para Novos Residentes (Art. 24-bis TUIR)",
        status: "changed",
        legalBasis:
          "Art. 24-bis TUIR (D.P.R. 917/1986), introduzido pelo art. 1, co. 152, da L. 232/2016; dispensa de monitoraggio, IVIE/IVAFE e regra sucessória no co. 153. Provvedimento do Diretor da Agenzia delle Entrate de 8/3/2017. Circolare 17/E de 23/5/2017. Elevação a €200.000 pelo D.L. 113/2024 (conv. L. 143/2024); a €300.000 pela L. 199/2025 (Legge di Bilancio 2026).",
        desc: `Criado em 2017, o regime sofreu três reajustes: €100k (2017–ago/2024) → €200k (ago/2024–dez/2025) → €300k/ano (desde 1 jan/2026). Aplica imposto fixo anual <em>substitutivo</em> de €300.000 sobre <strong>todos os rendimentos de fonte estrangeira</strong>. Rendimentos italianos são tributados normalmente (IRPEF). Quem já exerceu a opção antes de cada aumento mantém o valor vigente à época da adesão.

<strong>Familiar:</strong> €50.000/pessoa/ano. <strong>Duração máxima:</strong> 15 anos, com renovação tácita ano a ano.

<strong>Exclusão:</strong> mais-valias de participações qualificadas (art. 67, co. 1, letra "c", TUIR) realizadas nos <strong>primeiros cinco períodos de imposta</strong> ficam fora do regime substitutivo, tributadas pelo regime ordinário (art. 68, co. 3, TUIR).`,
        kv: [
          { l: "Imposto fixo anual", v: "€300.000" },
          { l: "Familiar", v: "€50.000/pessoa" },
          { l: "Duração", v: "15 anos" },
          { l: "Não-residente prévia", v: "9 dos 10 anos" },
          { l: "Renda italiana", v: "IRPEF normal" },
          { l: "Crédito ext.", v: "❌ Não disponível" },
          { l: "IVIE / IVAFE", v: "❌ Não devidas" },
          { l: "Quadro RW (monitoraggio)", v: "❌ Dispensado" },
          { l: "Pagamento", v: "Até 30/jun (F24 ELIDE, cód. NRPP)" },
          { l: "Interpello (ruling)", v: "Facultativo · resposta em 120 dias" },
        ],
        requirements: [
          "Pessoa física que transfere a residência fiscal para a Itália — <strong>independe de nacionalidade</strong>; italianos repatriados também podem aderir.",
          "<strong>Não ter sido residente fiscal na Itália em ao menos 9 dos 10 períodos de imposta anteriores</strong> ao início da validade da opção.",
          "Adquirir efetivamente a residência fiscal italiana pelo art. 2 do TUIR, reescrito pelo D.Lgs. 209/2023 (efeitos desde 1/jan/2024). Basta <strong>um</strong> de quatro critérios alternativos, por mais da metade do período de imposta (183 dias; 184 em ano bissexto), computadas frações de dia.",
          "Familiares elegíveis à extensão são apenas os do <strong>art. 433 do Código Civil</strong>: cônjuge, filhos e descendentes, pais e ascendentes, genros e noras, sogros, irmãos e irmãs germanos ou unilaterais.",
          "Cada familiar deve satisfazer <strong>autonomamente</strong> o teste de não-residência de 9 dos 10 anos.",
        ],
        process: [
          {
            step: "Interpello probatorio (opcional)",
            timing: "Resposta em 120 dias",
            detail:
              'Pedido à Agenzia delle Entrate nos termos do art. 11, co. 1, letra "f", da L. 212/2000, instruído com a <strong>check-list obrigatória</strong> anexa ao Provvedimento de 8/3/2017. Não é condição de acesso ao regime. Causas de inadmissibilidade incluem check-list incompleta ou documentação de suporte ausente. Isento de taxa.',
          },
          {
            step: "Transferência efetiva da residência",
            detail:
              "Inscrição na anagrafe da população residente e configuração de um dos critérios do art. 2 do TUIR por mais de 183 dias no período de imposta.",
          },
          {
            step: "Exercício da opção na declaração de renda",
            timing: "Ano da transferência ou o seguinte",
            detail:
              "A opção é feita na <em>dichiarazione dei redditi</em> relativa ao período em que a residência foi transferida <strong>ou na do período imediatamente seguinte</strong>. É obrigatório indicar a jurisdição de última residência fiscal e os <strong>Estados que o contribuinte exclui</strong> do perímetro da substitutiva.",
          },
          {
            step: "Pagamento do imposto substitutivo",
            timing: "Até 30 de junho, anualmente",
            detail:
              'Parcela única, via <strong>F24 ELIDE</strong>, código tributo <strong>NRPP</strong> ("Imposta sostitutiva dell\'Irpef – Nuovi residenti – art. 24-bis, co. 2, TUIR"). O não pagamento integral no prazo causa <em>decadência</em> do regime.',
          },
          {
            step: "Extensão a familiares",
            detail:
              "Indicada na declaração do período em que <strong>o familiar</strong> transfere a residência, ou na seguinte. Pode ser feita a qualquer momento ao longo da vigência da opção e revogada individualmente.",
          },
        ],
        costs: [
          { item: "Imposto substitutivo anual (titular)", value: "€300.000" },
          { item: "Por familiar estendido", value: "€50.000/ano" },
          {
            item: "IRPEF sobre renda de fonte italiana",
            value: "23% / 33% / 43%",
            note: "escalões 2026: até €28k · €28–50k · acima de €50k",
          },
          { item: "IVIE e IVAFE", value: "Não devidas" },
          {
            item: "Imposto sucessório — cônjuge e linha reta",
            value: "4%",
            note: "acima de franquia de €1.000.000 por beneficiário",
          },
          {
            item: "Imposto sucessório — irmãos",
            value: "6%",
            note: "acima de franquia de €100.000",
          },
          {
            item: "Imposto sucessório — demais parentes até 4º grau",
            value: "6%",
            note: "sem franquia",
          },
          { item: "Imposto sucessório — demais pessoas", value: "8%", note: "sem franquia" },
          { item: "Interpello probatorio", value: "Isento" },
        ],
        sections: [
          {
            title: "O que conta como renda de fonte estrangeira",
            body: `O perímetro da substitutiva é a renda produzida no exterior segundo o <strong>art. 165, co. 2, do TUIR</strong>, que remete de forma espelhada ao art. 23. Pelo art. 23, co. 1, letra "c", a renda de trabalho dependente é <strong>produzida na Itália quando a prestação é executada no território do Estado</strong>.

<strong>Consequência prática para trabalho remoto:</strong> quem reside na Itália e trabalha fisicamente da Itália para empregador estrangeiro gera <strong>renda italiana</strong>, tributada por IRPEF ordinária — fica fora da flat tax. É um dos erros de planejamento mais comuns neste regime.

O art. 23, co. 2, sujeita à tributação italiana, independentemente do local de execução, as pensões, o TFR, os royalties e as compensações por patentes pagos por sujeitos residentes ou por estabelecimentos permanentes italianos.`,
          },
          {
            title: "Cherry picking e acesso a tratados",
            body: `Imposto pago no exterior sobre renda coberta pela substitutiva <strong>não gera crédito</strong> e não é recuperável. O único mecanismo para acessar proteção convencional e crédito por impostos estrangeiros é <strong>excluir a jurisdição</strong> do perímetro da opção, submetendo aquela renda à tributação ordinária italiana.

A exclusão abrange <strong>toda a renda produzida naquele país</strong> e é <strong>irreversível</strong>: jurisdições excluídas não podem ser reintegradas à flat tax em anos seguintes.

<em>Ponto em aberto:</em> não há posição oficial consolidada sobre se administrações fiscais estrangeiras concedem benefícios convencionais a residentes italianos sob o 24-bis — a questão do requisito "liable to tax" do art. 4 das convenções é objeto de debate doutrinário.`,
          },
          {
            title: "Monitoraggio fiscale, IVIE e IVAFE",
            body: `O <strong>art. 1, co. 153, da L. 232/2016</strong> dispensa os optantes do <em>monitoraggio fiscale</em>: não preenchem o quadro RW para investimentos e ativos estrangeiros, e não devem IVIE (imposto sobre imóveis no exterior) nem IVAFE (sobre ativos financeiros no exterior).

Para referência, quem não está no regime paga IVIE de 1,06% e IVAFE de 0,2% (0,4% para jurisdições privilegiadas), além de €34,20 fixos por conta corrente com saldo médio superior a €5.000.

<em>Ponto de atenção documentado:</em> há divergências interpretativas entre o texto legal e posições da Agenzia sobre a extensão da dispensa, especialmente quanto a participações qualificadas durante o período de exclusão quinquenal.`,
          },
          {
            title: "Sucessões e doações sob o regime",
            body: `Durante a validade do 24-bis, o imposto de sucessão e doação incide <strong>apenas sobre bens e direitos existentes na Itália</strong>, com exclusão integral dos ativos estrangeiros. É uma das características estruturais do regime.

<em>NÃO CONFIRMADO:</em> se a regra se estende automaticamente aos familiares incluídos por extensão da opção.`,
          },
          {
            title: "Saída do regime: revoca vs. decadenza",
            body: `Três eventos distintos encerram o regime, com efeitos diferentes:

<strong>Cessação natural</strong> — ao fim dos 15 anos contados do primeiro período de validade.

<strong>Revoca</strong> — voluntária, a qualquer tempo. A substitutiva já paga é utilizável em compensação. <strong>Não impede</strong> o reexercício futuro da opção.

<strong>Decadenza</strong> — por omissão ou pagamento parcial da substitutiva no prazo, ou por transferência da residência para outro Estado. <strong>Impede o reexercício futuro da opção.</strong> Não se admite <em>remissione in bonis</em> para o pagamento em atraso.

A decadência do titular principal extingue também a extensão aos familiares; o inverso não ocorre.`,
          },
        ],
        brazilNote: `A <strong>Convenção Brasil–Itália</strong> foi assinada em Roma em 3/10/1978, promulgada pelo Decreto 85.985 de 6/5/1981 e está em vigor desde 24/4/1981. O art. 4 define "residente de um Estado Contratante" e traz a sequência de critérios de desempate para dupla residência.

<strong>Aplicação prática sob o 24-bis:</strong> a renda de fonte brasileira é renda estrangeira para o optante e cai na substitutiva — <strong>sem crédito pelo IRRF brasileiro</strong>. Para invocar as reduções convencionais na fonte brasileira e recuperar o imposto retido, seria necessário excluir o Brasil do perímetro da opção.

<em>NÃO CONFIRMADO:</em> não foi localizada posição da Receita Federal ou da Agenzia delle Entrate sobre se o optante do 24-bis é considerado "residente" para fins do art. 4 do tratado Brasil–Itália.

<strong>Saída fiscal do Brasil</strong> (IN SRF 208/2002): Comunicação de Saída Definitiva até o <strong>último dia de fevereiro</strong> do ano seguinte à saída; Declaração de Saída Definitiva até o <strong>último dia útil de abril</strong> do mesmo ano. Sem esses atos, o contribuinte permanece residente fiscal no Brasil, tributado em bases universais.`,
        impact:
          "Aplica-se a rendas globais acima de €2M/ano. O valor equivale a 3× o praticado pela Grécia (€100k/ano). Residentes anteriores ao aumento de 2026 mantêm a alíquota vigente à época da opção.",
        warning:
          "Regime aumentado 3 vezes em 8 anos, sem garantia de estabilidade por horizonte de 15 anos. Renda de trabalho prestado fisicamente em território italiano não se qualifica como renda estrangeira, mesmo se paga por empregador no exterior. A decadência por falta de pagamento impede o reexercício futuro da opção.",
        sources: [
          {
            t: "Agenzia delle Entrate · Scheda opzione neo-residenti",
            u: "https://www.agenziaentrate.gov.it/portale/schede/agevolazioni/opzione-per-i-neo-residenti/infogen-opzionale-neo-residenti",
          },
          {
            t: "Agenzia delle Entrate · Circolare 20/E (4/11/2024) — residência fiscal",
            u: "https://www.agenziaentrate.gov.it/portale/documents/20143/6519685/circolare+n.+20+de+4+novembre+2024+residenza+pdf.pdf",
          },
          {
            t: "Agenzia delle Entrate · Imposta di successione",
            u: "https://www.agenziaentrate.gov.it/portale/schede/pagamenti/imposta-di-successione/aliquote-e-franchigie",
          },
          { t: "Normattiva · Art. 24-bis TUIR (D.P.R. 917/1986)", u: "https://www.normattiva.it" },
          {
            t: "Decreto 85.985/1981 · CDT Brasil–Itália",
            u: "https://www.planalto.gov.br/ccivil_03/atos/decretos/1981/d85985.html",
          },
        ],
      },
      {
        name: "Flat Tax 7% para Aposentados Estrangeiros (Art. 24-ter TUIR)",
        status: "ok",
        legalBasis:
          "Art. 24-ter TUIR (D.P.R. 917/1986), introduzido pela L. 145/2018 (Legge di Bilancio 2019) e modificado pela L. 58/2019 (conversão do D.L. 34/2019). Provvedimento do Diretor da Agenzia delle Entrate de 31/5/2019. Risoluzione 19/E/2020 (código tributo 1899). Limite populacional elevado a 30.000 habitantes pelo art. 26 da L. 34 de 11/3/2026.",
        desc: `Alíquota substitutiva de <strong>7%</strong> para quem transfere residência fiscal para municípios elegíveis do <strong>Sul da Itália</strong> (Sicília, Calábria, Sardenha, Campânia, Basilicata, Abruzzo, Molise, Puglia). Duração de <strong>10 anos</strong> — o período de exercício mais os 9 seguintes.

<strong>Escopo mais amplo do que o nome sugere:</strong> apesar de ser conhecido como "regime dos aposentados", a alíquota de 7% incide sobre <strong>toda categoria de renda produzida no exterior</strong> — dividendos, juros, aluguéis, mais-valias — e não apenas sobre a pensão. A pensão estrangeira é <strong>requisito de acesso</strong>, não o limite do perímetro tributável.

<strong>Atualização (7/abr/2026):</strong> o limite populacional dos municípios elegíveis foi ampliado de 20.000 para 30.000 habitantes pelo art. 26 da Legge 11 de março de 2026, n. 34 ("Legge annuale PMI"), publicada na Gazzetta Ufficiale em 23/03/2026 — o que tornou elegíveis centros urbanos médios antes excluídos.`,
        kv: [
          { l: "Alíquota", v: "7% sobre toda renda estrangeira" },
          { l: "Duração", v: "10 anos" },
          { l: "Não-residente prévia", v: "5 anos" },
          { l: "Localização", v: "Sul, <30.000 hab. (desde abr/2026)" },
          { l: "Zonas sísmicas", v: "Limite de 3.000 hab." },
          { l: "Renda italiana", v: "IRPEF normal" },
          { l: "Familiar", v: "Sem extensão — qualifica separadamente" },
          { l: "Pagamento", v: "Até 30/jun (F24, cód. 1899)" },
        ],
        requirements: [
          "Ser <strong>titular de rendimento de pensão de fonte estrangeira</strong> — rendimentos do art. 49, co. 2, letra \"a\", do TUIR pagos por sujeitos estrangeiros. A prassi estendeu o regime também a rendimentos de liquidação/capital correlatos.",
          "<strong>Não ter sido residente fiscal na Itália nos 5 períodos de imposta anteriores</strong> ao de início da opção.",
          "Transferir a residência <strong>de um país com o qual esteja em vigor acordo de cooperação administrativa em matéria fiscal</strong> (troca de informações) com a Itália.",
          "Transferir a residência fiscal para um <em>comune</em> de uma das <strong>8 regiões elegíveis</strong> com população <strong>não superior a 30.000 habitantes</strong>.",
          "Para <em>comuni</em> em zonas sísmicas listadas no D.L. 189/2016 e atingidos pelo sismo de 6/4/2009, o limite permanece em <strong>3.000 habitantes</strong>.",
          "Adquirir residência fiscal italiana pelos critérios do art. 2 do TUIR (mesmo teste dos 183 dias do regime 24-bis).",
        ],
        process: [
          {
            step: "Verificar a elegibilidade do município",
            detail:
              "Confirmar antes da mudança que o <em>comune</em> pertence a uma das 8 regiões e respeita o limite populacional, cruzando com dados do ISTAT. Este é o ponto de maior risco operacional do regime.",
          },
          {
            step: "Transferir a residência e inscrever-se na anagrafe",
            detail: "Registro no <em>comune</em> elegível e configuração da residência fiscal pelo art. 2 do TUIR.",
          },
          {
            step: "Exercer a opção na declaração de renda",
            timing: "Ano da transferência",
            detail:
              "Indicando obrigatoriamente: a jurisdição de última residência fiscal (entre as com acordo de cooperação administrativa); os Estados estrangeiros excluídos da substitutiva; o Estado de residência do sujeito que paga a pensão; e o montante da renda estrangeira submetida à substitutiva.",
          },
          {
            step: "Pagamento do imposto substitutivo",
            timing: "Até 30 de junho, anualmente",
            detail:
              "Parcela única, via F24, código tributo <strong>1899</strong> (instituído pela Risoluzione 19/E/2020) — código distinto do NRPP usado no 24-bis.",
          },
        ],
        costs: [
          {
            item: "Imposto substitutivo",
            value: "7% da renda estrangeira",
            note: "alíquota proporcional, sem valor mínimo nem forfait",
          },
          {
            item: "Extensão a familiares",
            value: "Não existe",
            note: "cada pessoa exerce a própria opção, se qualificar",
          },
          {
            item: "IRPEF sobre renda de fonte italiana",
            value: "23% / 33% / 43%",
            note: "escalões 2026",
          },
          {
            item: "Imposto sucessório",
            value: "Regime ordinário italiano",
            note: "sem a limitação a bens italianos que existe no 24-bis",
          },
        ],
        sections: [
          {
            title: "Municípios elegíveis: como verificar",
            body: `Não há lista oficial única publicada pela Agenzia delle Entrate. A verificação se faz cruzando dois dados: (a) o <em>comune</em> pertencer a uma das <strong>8 regiões</strong> listadas; (b) a <strong>população residente</strong> conforme dados do ISTAT.

<em>NÃO CONFIRMADO:</em> permanece indefinido, em fonte primária, qual data de referência do ISTAT vale (censo permanente vs. população em 1º de janeiro do ano anterior) e se a perda de elegibilidade por crescimento populacional afeta quem já optou. Exige verificação caso a caso antes da mudança.`,
          },
          {
            title: "Diferenças estruturais frente ao regime 24-bis",
            body: `Comparação puramente descritiva entre os dois regimes italianos:

<strong>Base de cálculo:</strong> proporcional (7% da renda efetiva) no 24-ter; forfetária (€300.000 fixos) no 24-bis.
<strong>Não-residência prévia:</strong> 5 anos no 24-ter; 9 dos 10 anos no 24-bis.
<strong>Duração:</strong> 10 anos no 24-ter; 15 anos no 24-bis.
<strong>Localização:</strong> vínculo geográfico obrigatório no 24-ter; livre escolha do domicílio no 24-bis.
<strong>Troca de informações:</strong> exigida com o país de origem no 24-ter; não exigida no 24-bis.
<strong>Família:</strong> sem extensão no 24-ter; €50.000 por familiar no 24-bis.
<strong>Sucessões:</strong> regime ordinário no 24-ter; limitado a bens italianos no 24-bis.`,
          },
          {
            title: "Cherry picking",
            body: `Mesma lógica do 24-bis: o contribuinte pode indicar Estados excluídos da substitutiva, cuja renda passa a ser tributada por IRPEF ordinária, com crédito por impostos estrangeiros.`,
          },
        ],
        brazilNote: `Para aposentados brasileiros, é necessário verificar se a pensão é paga por sujeito estrangeiro — pensões do <strong>INSS</strong> e de previdência privada brasileira qualificam como fonte estrangeira para a Itália.

O <strong>requisito de troca de informações está satisfeito</strong>: Brasil e Itália têm CDT em vigor com cláusula de troca de informações (Decreto 85.985/1981) e ambos aderem ao CRS da OCDE.

<strong>Tributação na fonte brasileira:</strong> a pensão paga do Brasil pode sofrer retenção; sob a substitutiva de 7% <strong>não há crédito</strong>, salvo se o Brasil for excluído do perímetro da opção.

<em>NÃO CONFIRMADO:</em> o tratamento de pensões públicas vs. privadas sob os arts. 18 e 19 do CDT Brasil–Itália não foi verificado no texto convencional.

<strong>Saída fiscal do Brasil:</strong> mesmas obrigações da IN SRF 208/2002 — Comunicação até o último dia de fevereiro; Declaração até o último dia útil de abril.`,
        impact:
          "Aplicável a titulares de pensão estrangeira que fixem residência no Sul da Itália. A alíquota de 7% incide sobre a renda estrangeira efetiva de qualquer categoria, em contraste com o valor fixo de €300k do regime para novos residentes.",
        warning:
          "A elegibilidade do município é o principal risco operacional: não há lista oficial publicada, e a data de referência dos dados do ISTAT não está definida em fonte primária. Confirme o enquadramento do comune antes de transferir a residência.",
        sources: [
          {
            t: "Agenzia delle Entrate · Regime pensionati esteri",
            u: "https://www.agenziaentrate.gov.it/portale/schede/agevolazioni/regime-opzionale-per-i-pensionati-esteri-che-cose-cittadini",
          },
          {
            t: "Agenzia delle Entrate · Come si perfeziona l'opzione",
            u: "https://www.agenziaentrate.gov.it/portale/schede/agevolazioni/regime-opzionale-per-i-pensionati-esteri/come-si-perfeziona-l-opzione-cittadini",
          },
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
        legalBasis:
          "Art. 26-bis do D.Lgs. 286/1998 (Testo Unico Immigrazione), introduzido pelo art. 1, co. 148-149, da L. 232/2016. Decreto interministerial MISE–MAECI–Interno de 21/7/2017 (procedimento e composição do Comitato). Policy Guidance e Manuale Operativo publicados pelo MIMIT.",
        desc: `Programa formal com quatro modalidades: (A) <strong>€250.000</strong> em startup inovadora inscrita na seção especial do Registro delle Imprese; (B) <strong>€500.000</strong> em quotas ou ações de sociedade de capitais italiana operante; (C) <strong>€1.000.000</strong> em <strong>doação filantrópica a fundo perdido</strong>, em projeto de interesse público nas áreas de cultura, instrução, gestão da imigração, pesquisa científica ou recuperação de bens culturais e paisagísticos; (D) <strong>€2.000.000</strong> em títulos da dívida pública italiana (BTP e afins).

<strong>Característica distintiva:</strong> o desembolso ocorre <strong>depois</strong> da aprovação — o investimento só precisa ser efetivado em até 3 meses da entrada na Itália, e não como condição prévia ao pedido.

<strong>Órgão gestor:</strong> Ministero delle Imprese e del Made in Italy (MIMIT, sucessor do MISE), através do Comitato Investor Visa for Italy.

<strong>Sem requisito de permanência mínima</strong> para obtenção ou renovação do permesso — o que separa o status migratório do status fiscal.`,
        kv: [
          { l: "Startup inovadora", v: "€250.000" },
          { l: "Sociedade de capitais IT", v: "€500.000" },
          { l: "Doação filantrópica", v: "€1.000.000" },
          { l: "Títulos públicos (BTP)", v: "€2.000.000" },
          { l: "Deliberação do Comitê", v: "Até 30 dias" },
          { l: "Validade do Nulla Osta", v: "6 meses" },
          { l: "Visto inicial", v: "2 anos" },
          { l: "Prazo p/ efetivar investimento", v: "3 meses da entrada" },
          { l: "Renovação", v: "3 anos" },
          { l: "Permanência mínima", v: "❌ Não exigida" },
        ],
        requirements: [
          "Ser <strong>cidadão não-UE</strong> (extracomunitário), maior de idade. Brasileiros com cidadania italiana ou de outro Estado-membro não são elegíveis e não precisam do instrumento.",
          "Assumir <strong>compromisso de realizar uma das quatro modalidades</strong> de investimento ou doação.",
          "Comprovar <strong>titularidade e disponibilidade</strong> dos recursos, demonstrando que são lícitos e efetivamente transferíveis para a Itália.",
          "Apresentar <strong>declaração escrita de compromisso</strong> de utilizar os recursos na modalidade indicada dentro de 3 meses da entrada.",
          "<strong>Ausência de condenações</strong> e de motivos de segurança que impeçam a entrada.",
          "Manter o investimento por, no mínimo, 2 anos (modalidades A, B e D).",
        ],
        process: [
          {
            step: "Registro no portal e submissão",
            detail:
              "Criação de conta em <em>investorvisa.mise.gov.it</em> e preenchimento do formulário eletrônico. Procedimento integralmente digital e gratuito nesta fase. Upload de passaporte, comprovação da origem lícita dos fundos, descrição do investimento-alvo, declaração de compromisso e certidões de antecedentes, em italiano ou inglês.",
          },
          {
            step: "Instrução pelo Comitato Investor Visa for Italy",
            timing: "30 dias para deliberar",
            detail:
              "O Comitê pode solicitar documentação integrativa; o requerente tem <strong>30 dias</strong> para atender, com o processo suspenso nesse intervalo. Deliberação e emissão do <strong>Nulla Osta</strong> em até 30 dias da apresentação completa.",
          },
          {
            step: "Pedido de visto no consulado",
            timing: "Janela de 6 meses",
            detail:
              "A partir do recebimento do Nulla Osta, o requerente tem 6 meses para apresentar o pedido na representação diplomático-consular italiana competente pela sua residência. É emitido <strong>visto nacional tipo D, válido por 2 anos</strong>.",
          },
          {
            step: "Entrada e pedido do permesso di soggiorno",
            timing: "8 dias da entrada",
            detail:
              'Pedido do <em>permesso di soggiorno "per investitori"</em> junto ao Sportello Unico/Questura, via kit postale, em até 8 dias da entrada em território italiano. Duração de 2 anos.',
          },
          {
            step: "Efetivação do investimento",
            timing: "3 meses da entrada",
            detail:
              "Realização integral do investimento ou doação, com upload da comprovação no portal antes do vencimento do prazo. <strong>O descumprimento acarreta revogação.</strong>",
          },
          {
            step: "Renovação e residência de longo período",
            timing: "3 anos / 5 anos",
            detail:
              "Renovação por 3 anos mediante nulla osta do Comitê atestando a manutenção do investimento. Após <strong>5 anos</strong> de manutenção contínua, abre-se a possibilidade do <em>permesso di soggiorno UE per soggiornanti di lungo periodo</em>.",
          },
        ],
        costs: [
          { item: "Procedimento de Nulla Osta (portal)", value: "Sem taxa" },
          {
            item: "Contributo do permesso di soggiorno",
            value: "€50,00",
            note: "faixa de mais de 1 e até 2 anos",
          },
          { item: "Marca da bollo", value: "€16,00" },
          { item: "Produção do permesso eletrônico", value: "€30,46" },
          { item: "Serviço postal (kit postale)", value: "€30,00" },
          {
            item: "Total aproximado do permesso",
            value: "≈ €126,46",
            note: "não inclui taxa consular do visto",
          },
          {
            item: "Taxa consular do visto tipo D",
            value: "Não confirmada",
            note: "varia por representação e reciprocidade",
          },
        ],
        sections: [
          {
            title: "Sequência completa de prazos",
            body: `Apresentação do pedido → <strong>30 dias</strong> (deliberação do Comitê) → <strong>6 meses</strong> (janela para pedir o visto) → <strong>2 anos</strong> (validade do visto para entrada) → <strong>8 dias</strong> (pedido do permesso após entrar) → <strong>3 meses</strong> (efetivação do investimento) → <strong>2 anos</strong> (duração do permesso) → <strong>3 anos</strong> (renovações) → <strong>5 anos</strong> (permesso UE de longo período).`,
          },
          {
            title: "Status migratório não é status fiscal",
            body: `O VPI <strong>não confere por si um regime fiscal</strong>. A residência fiscal segue os critérios do art. 2 do TUIR: sem permanência física relevante, o titular pode manter-se <strong>não-residente fiscal na Itália</strong>, tributado apenas sobre renda de fonte italiana pelo art. 23.

O VPI é <strong>combinável com o regime do art. 24-bis</strong> para quem efetivamente transfere a residência — o próprio portal do Investor Visa dedica seção ao regime fiscal para novos residentes.`,
          },
          {
            title: "Família",
            body: `Cônjuge e filhos <strong>não são incluídos automaticamente</strong> no visto do investidor. Exige-se pedido específico de <em>ricongiungimento familiare</em>, com instrução própria no Sportello Unico per l'Immigrazione, resultando em <em>permesso di soggiorno per motivi familiari</em> em processo apartado, que não segue os prazos do Comitê.

<em>NÃO CONFIRMADO:</em> se o titular de VPI goza de procedimento simplificado ou de dispensa dos requisitos de renda e alojamento normalmente exigidos no ricongiungimento.`,
          },
          {
            title: "Causas de revogação",
            body: `Não realização do investimento no prazo de 3 meses; desinvestimento antecipado; alteração da destinação do investimento; irrastreabilidade do titular no endereço declarado. O Comitê pode revogar o permesso a qualquer tempo se a Secretaria constatar qualquer dessas hipóteses.`,
          },
        ],
        brazilNote: `Brasileiros são elegíveis por serem cidadãos não-UE. Quem já possui cidadania italiana ou de outro Estado-membro não precisa do instrumento.

<strong>Transferência de recursos:</strong> operações de câmbio para a Itália sujeitam-se às normas do Banco Central do Brasil; ativos mantidos no exterior podem exigir a <strong>Declaração de Capitais Brasileiros no Exterior (CBE)</strong> ao BCB, quando ultrapassados os limites vigentes.

<strong>Comprovação de origem lícita</strong> ao Comitê pode exigir declarações de imposto de renda brasileiras, contratos e extratos — documentos que devem ser traduzidos e, conforme o caso, apostilados (Brasil e Itália são partes da Convenção da Apostila da Haia).

<strong>Atenção:</strong> o VPI <strong>não desencadeia por si a saída fiscal do Brasil</strong>. A Comunicação e a Declaração de Saída Definitiva só são cabíveis se houver efetiva mudança de residência. O titular de VPI que não se transfere fisicamente <strong>permanece residente fiscal brasileiro</strong>, tributado em bases universais.`,
        impact:
          "A modalidade de startup (€250k) é a de menor valor entre as quatro e pode ser combinada com o regime de 7% do Sul da Itália. A modalidade de títulos públicos (€2M) não exige atividade empresarial ativa. O capital só é desembolsado após a aprovação do pedido.",
        warning:
          "O investimento deve ser efetivado em até 3 meses da entrada, sob pena de revogação. Alterar a destinação do investimento ou desinvestir antecipadamente também causa revogação. Família não é incluída automaticamente — exige processo de reunificação familiar em separado.",
        sources: [
          {
            t: "MIMIT · Investor Visa",
            u: "https://www.mimit.gov.it/it/impresa/competitivita-e-nuove-imprese/investor-visa",
          },
          {
            t: "Investor Visa for Italy · Come funziona",
            u: "https://investorvisa.mise.gov.it/index.php/it/investor-visa-come-funziona",
          },
          {
            t: "Investor Visa · Policy Guidance (PDF)",
            u: "https://investorvisa.mise.gov.it/images/documenti/Investor_Visa_for_Italy_Policy_guidance_ENG_19_07_2021.pdf",
          },
          {
            t: "Poste Italiane · Kit postale permesso di soggiorno",
            u: "https://www.poste.it/guida-rilascio-e-rinnovo-permesso-di-soggiorno",
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
        legalBasis:
          "Art. 16.º, n.os 8 a 12, do CIRS (versão anterior). Revogação e regime transitório pela Lei n.º 82/2023, de 29 de dezembro (Orçamento do Estado para 2024).",
        desc: `Criado em 2009, foi por mais de 14 anos o regime português de referência para residentes com rendimentos de fonte estrangeira. Oferecia isenção de imposto sobre rendimentos estrangeiros por 10 anos, mais alíquota flat de 20% sobre rendimentos profissionais de alto valor acrescentado. Encerrado para novas adesões em 1/jan/2024, com janela transitória até 31/mar/2025.

O estatuto dura <strong>10 anos contados do primeiro ano de residência fiscal e não é renovável nem prorrogável</strong>. Não há renovação anual — mantém-se automaticamente até ao termo. Findo o prazo, o contribuinte passa a ser tributado pelas regras gerais do IRS.`,
        kv: [
          { l: "Status", v: "❌ Extinto jan/2024" },
          { l: "Beneficiários antigos", v: "Mantêm os 10 anos" },
          { l: "Janela transitória", v: "Encerrada mar/2025" },
          { l: "Renovação", v: "❌ Não existe" },
          { l: "Migração para o IFICI", v: "❌ Vedada" },
          { l: "Base legal", v: "Lei 82/2023" },
        ],
        sections: [
          {
            title: "O que muda para quem já tem NHR",
            body: `O estatuto extingue-se automaticamente ao fim dos 10 anos, sem qualquer possibilidade de renovação ou prorrogação para o mesmo beneficiário.

<strong>Migração NHR → IFICI é vedada.</strong> O art. 58.º-A do EBF exclui expressamente quem beneficia ou beneficiou do NHR (e do Programa Regressar), com exceções transitórias estreitas que só operaram em 2024. O titular de NHR não pode "saltar" para o IFICI para estender o benefício.

<em>NÃO CONFIRMADO:</em> o texto literal do número do art. 58.º-A que contém essa exclusão.

<strong>Consequência de planeamento:</strong> no ano 11, rendimentos estrangeiros até então isentos entram na tributação normal, categoria a categoria, pelas taxas progressivas do IRS.`,
          },
        ],
        impact:
          "Afeta o planejamento fiscal de residentes com renda passiva estrangeira em Portugal. Regimes de imposto fixo alternativos incluem Grécia (€100k) e EAU (zero IR pessoal). Não há transição para o IFICI: o ex-beneficiário está expressamente excluído daquele regime.",
        warning:
          "O prazo de 10 anos é improrrogável e a migração para o IFICI é vedada por lei. Quem se aproxima do ano 10 deve planejar a transição para a tributação geral do IRS ou avaliar outra jurisdição — não há continuidade automática de benefício em Portugal.",
        sources: [
          { t: "Portal das Finanças · AT", u: "https://www.portaldasfinancas.gov.pt" },
          {
            t: "Ordem dos Advogados · Adesão ao RNH até março de 2025",
            u: "https://portal.oa.pt/comunicacao/imprensa/2024/2/20/adesao-ao-regime-do-residente-nao-habitual-sera-possivel-ate-marco-de-2025/",
          },
        ],
      },
      {
        name: "IFICI — Incentivo à Investigação e Inovação (NHR 2.0)",
        status: "new",
        legalBasis:
          "Art. 58.º-A do Estatuto dos Benefícios Fiscais, aditado pela Lei n.º 82/2023, de 29/12 (OE2024). Portaria n.º 352/2024/1, de 23 de dezembro (Anexos I e II). Portaria n.º 52-A/2025/1, de 25 de fevereiro. Aviso n.º 4812/2025/2 (IAPMEI) e Aviso n.º 5309/2025/2 (AICEP). Ofício Circulado n.º 20276/2025 (AT). Lei n.º 21/2023, de 25 de maio (Lei das Startups).",
        desc: `Criado pela Lei 82/2023 para substituir o NHR, com escopo substancialmente mais restrito. <strong>Benefício:</strong> alíquota especial de <strong>20%</strong> sobre o rendimento líquido das categorias A (trabalho dependente) e B (empresarial e profissional) de <strong>fonte portuguesa</strong>, derivado da atividade elegível.

<strong>Rendimentos estrangeiros isentos:</strong> categorias <strong>A, B, E (capitais), F (prediais) e G (mais-valias)</strong>. A isenção é <strong>com progressividade</strong> — os rendimentos estrangeiros isentos são considerados para determinar a taxa aplicável aos rendimentos não isentos.

<strong>Categoria H (pensões) está expressamente excluída da isenção</strong> — é a única categoria fora. Pensões estrangeiras entram na tabela progressiva do IRS.

<strong>Duração:</strong> 10 anos, contados do primeiro ano de residência fiscal.

É um regime de <em>trabalho qualificado</em>, não de residência passiva: o rentista puro, o aposentado e o investidor passivo não se qualificam.`,
        kv: [
          { l: "Alíquota especial", v: "20% sobre renda PT qualificada" },
          { l: "Renda estrangeira (A, B, E, F, G)", v: "Isenta, com progressividade" },
          { l: "Pensões estrangeiras (cat. H)", v: "12,5%–48% (progressiva)" },
          { l: "Renda de jurisdição listada", v: "35%, sem isenção" },
          { l: "Duração", v: "10 anos" },
          { l: "Prazo de inscrição", v: "Até 15 de janeiro" },
          { l: "Confirmação pelas entidades", v: "Até 15 de fevereiro" },
          { l: "Comprovativo da AT", v: "Até 31 de março" },
          { l: "Nacionalidade", v: "Irrelevante" },
        ],
        requirements: [
          "Tornar-se <strong>residente fiscal em Portugal</strong> no ano do pedido, nos termos do art. 16.º do CIRS.",
          "<strong>Não ter sido residente fiscal em Portugal nos 5 anos anteriores.</strong>",
          "<strong>Não beneficiar nem ter beneficiado</strong> do NHR nem do Programa Regressar.",
          "Exercer <strong>atividade elegível</strong> em <strong>entidade elegível</strong> — ambas as condições são cumulativas.",
          "<strong>Habilitação:</strong> doutoramento, <em>ou</em> licenciatura/mestrado com no mínimo <strong>3 anos de experiência profissional</strong> comprovada.",
          "<strong>Nacionalidade é irrelevante</strong> — portugueses, cidadãos da UE e nacionais de países terceiros qualificam-se igualmente. Relevante para o brasileiro com dupla nacionalidade.",
          "Para profissões exercidas em <strong>empresas industriais e de serviços</strong>: a empresa deve ter atividade principal em código CAE do Anexo II e <strong>exportar ao menos 50%</strong> do volume de negócios.",
        ],
        process: [
          {
            step: "Obter NIF e registar residência fiscal",
            detail:
              "NIF junto da AT (com representante fiscal, se ainda não residente) e alteração do domicílio fiscal no Portal das Finanças. É pressuposto do benefício.",
          },
          {
            step: "Iniciar a atividade elegível",
            detail: "Em entidade elegível, conforme o Anexo I (profissão) e o Anexo II (CAE da entidade).",
          },
          {
            step: "Submeter o pedido de inscrição",
            timing: "Até 15 de janeiro do ano seguinte",
            detail:
              "Submissão no <strong>Portal das Finanças</strong>. A Portaria n.º 52-A/2025/1 centralizou todas as inscrições diretamente no Portal, mediante protocolo entre as entidades envolvidas.",
          },
          {
            step: "Confirmação pelas entidades certificadoras",
            timing: "Até 15 de fevereiro",
            detail:
              "FCT, ANI, AICEP, IAPMEI ou Startup Portugal, conforme o caso, comunicam à AT; as empresas confirmam o cumprimento dos requisitos.",
          },
          {
            step: "Disponibilização do comprovativo",
            timing: "Até 31 de março",
            detail:
              "A AT disponibiliza na área reservada do Portal das Finanças a informação sobre o estado da inscrição e o respetivo comprovativo.",
          },
          {
            step: "Comunicação anual de alterações",
            timing: "Até 15 de janeiro do ano seguinte",
            detail:
              "Qualquer alteração aos pressupostos deve ser comunicada pelo Portal das Finanças. Cumprimento declarativo anual pela Modelo 3 de IRS, com o anexo próprio do regime, ao longo dos 10 anos.",
          },
        ],
        costs: [
          {
            item: "Taxa de candidatura ao IFICI",
            value: "Não existe",
            note: "custo é honorários e obtenção das certificações setoriais",
          },
          {
            item: "IRS — 1.º escalão (2026)",
            value: "12,5%",
            note: "taxas do 2.º ao 5.º escalão reduzidas em 0,3 p.p.",
          },
          {
            item: "IRS — escalões intermédios (2026)",
            value: "15,7% · 21,2% · 24,1% · 31,1%",
          },
          {
            item: "IRS — taxa máxima (2026)",
            value: "48%",
            note: "a partir de €86.634 de rendimento coletável",
          },
          {
            item: "Mais-valias mobiliárias",
            value: "28%",
            note: "englobamento obrigatório se títulos <365 dias e coletável ≥ €86.634",
          },
          {
            item: "Mais-valias imobiliárias (residentes)",
            value: "50% do ganho englobado",
            note: "isenção possível por reinvestimento em habitação própria",
          },
          {
            item: "Imposto do Selo — transmissões gratuitas",
            value: "10%",
            note: "cônjuge, descendentes e ascendentes são isentos, mas declaram",
          },
        ],
        sections: [
          {
            title: "Rendimentos abrangidos e excluídos, categoria a categoria",
            body: `<strong>Fonte portuguesa:</strong> taxa especial de 20% sobre o rendimento líquido das categorias <strong>A</strong> (trabalho dependente) e <strong>B</strong> (empresarial e profissional) derivado da atividade elegível.

<strong>Fonte estrangeira:</strong> isenção de IRS para as categorias <strong>A, B, E</strong> (capitais), <strong>F</strong> (prediais) e <strong>G</strong> (mais-valias).

<strong>Método:</strong> isenção <em>com progressividade</em> — os rendimentos estrangeiros isentos entram no cálculo da taxa aplicável aos rendimentos não isentos. Consequência concreta: uma pensão brasileira empurra para cima a taxa aplicável aos rendimentos portugueses.

<strong>Categoria H (pensões) está fora da isenção</strong> e entra na tabela progressiva de 12,5% a 48%. Foi precisamente a tributação de pensões que gerou a pressão política europeia sobre o NHR original.

<em>Contexto (não normativo):</em> o IFICI foi desenhado como incentivo à atividade produtiva — investigação, inovação, emprego qualificado — e não como regime de captação de reformados.`,
          },
          {
            title: "Quem certifica cada via de elegibilidade",
            body: `<strong>ANI</strong> (Agência Nacional de Inovação) — entidades reconhecidas em I&D no âmbito do SIFIDE.
<strong>Startup Portugal</strong> — startups e scale-ups certificadas ao abrigo da Lei n.º 21/2023.
<strong>AICEP</strong> — empresas industriais e de serviços com atividade reconhecida de interesse económico nacional em contratos de incentivo ao investimento.
<strong>AICEP / IAPMEI</strong> — empresas sob benefícios fiscais contratuais ou RFAI.
<strong>FCT, I.P.</strong> — unidades de investigação públicas e instituições de ensino superior reconhecidas.

<strong>Profissões do Anexo I</strong> (códigos CPP): 112 (diretor-geral e gestor executivo); 12 (diretores administrativos e comerciais); 13 (diretores de produção e serviços especializados, exceto 1349); 21 (especialistas em ciências físicas, matemáticas e engenharias, exceto 216); 2163.1 (designer de produto industrial); 221 (médicos); 231 (professor do ensino universitário e superior); 25 (especialistas em TIC).

<em>NÃO CONFIRMADO:</em> a enumeração completa do Anexo II (códigos CAE) e o período de referência do cálculo dos 50% de exportação.`,
          },
          {
            title: "Lista portuguesa de jurisdições de tributação privilegiada",
            body: `Base: <strong>Portaria n.º 150/2004</strong>, de 13 de fevereiro, com alterações posteriores.

<strong>Atualização relevante:</strong> a <strong>Portaria n.º 292/2025/1</strong>, de 5 de setembro, <strong>excluiu Hong Kong, Liechtenstein e Uruguai</strong> da lista, com efeitos a <strong>1 de janeiro de 2026</strong>. A lista conta atualmente com cerca de 77 jurisdições.

<strong>Efeito prático:</strong> dividendos e mais-valias com origem em entidade listada são tributados a <strong>35%</strong> e ficam fora da isenção do IFICI. A lista serve ainda de gatilho para preços de transferência e para o regime CFC.

<strong>O Brasil não consta da lista.</strong> Mas estruturas offshore frequentes no património de HNWIs brasileiros — BVI, Cayman, Panamá, Bahamas — constam. Este é o ponto de maior risco silencioso na transição para a residência portuguesa.`,
          },
          {
            title: "Residência fiscal vs. residência legal em Portugal",
            body: `<strong>Art. 16.º, n.º 1, do CIRS</strong> — é residente fiscal quem, no ano dos rendimentos:
(a) permaneceu <strong>mais de 183 dias</strong>, seguidos ou interpolados, em qualquer período de 12 meses com início ou fim no ano em causa; ou
(b) tendo permanecido menos tempo, <strong>dispunha de habitação</strong>, em qualquer dia daquele período, em condições que façam supor intenção atual de a manter e ocupar como residência habitual.

A jurisprudência do CAAD exige, na alínea (b), a reunião de um <em>corpus</em> (o local de residência) e de um <em>animus</em> (a intenção de a manter como residência habitual).

<strong>Distinção operacional decisiva:</strong> ter título de residência ARI <strong>não</strong> torna alguém residente fiscal — o ARI exige apenas 7 dias no primeiro ano e 14 por biénio. Inversamente, um brasileiro sem qualquer título pode tornar-se residente fiscal apenas por permanência. São eixos independentes.

<em>NÃO CONFIRMADO:</em> os n.os 3 e 4 do art. 16.º, que regulam a residência fiscal parcial e o momento inicial e final do estatuto no ano de mudança.`,
          },
        ],
        brazilNote: `<strong>CDT Brasil–Portugal:</strong> Convenção celebrada em Brasília em 16/mai/2000, promulgada pelo <strong>Decreto n.º 4.012, de 13/11/2001</strong>, em vigor desde 5 de outubro de 2001. Cobre os impostos federais sobre o rendimento dos dois Estados (IRPF/IRPJ e IRS/IRC). <strong>Não cobre</strong> ITCMD, IOF, contribuições nem o Imposto do Selo português — o risco sucessório fica inteiramente fora da Convenção.

<strong>Retenções máximas na fonte:</strong> dividendos <strong>15%</strong> para pessoa singular residente em Portugal; juros <strong>15%</strong>; royalties <strong>15%</strong>. Método de eliminação: <strong>crédito de imposto</strong>.

<strong>Atenção operacional decisiva:</strong> sob o IFICI, o rendimento estrangeiro está <em>isento</em> em Portugal — não há imposto português contra o qual creditar, e a retenção brasileira torna-se <strong>custo final</strong>.

<strong>Aposentadorias e pensões — bifurcação frequentemente mal compreendida:</strong> pelo <strong>art. 18.º, n.º 2</strong>, as pensões pagas ao abrigo da legislação de Segurança Social de um Estado só podem ser tributadas pelo Estado da fonte — <strong>a aposentadoria do INSS só é tributável no Brasil</strong>. Já as pensões privadas e complementares (PGBL, VGBL, previdência fechada) seguem a regra do Estado da residência.

<em>NÃO CONFIRMADO:</em> a redação exata do art. 18.º, n.º 1 (competência exclusiva vs. cumulativa nas pensões privadas) e se Portugal considera a pensão do INSS, isenta, para efeitos de progressividade. A resposta altera materialmente a carga efetiva.

<strong>Desempate de dupla residência (art. 4.º, n.º 2):</strong> na ordem — habitação permanente disponível; centro de interesses vitais (relações pessoais e económicas mais estreitas); permanência habitual; nacionalidade. O brasileiro que mantém casa nos dois países cai no segundo critério, que é factual e probatório.

<strong>Segurança social:</strong> Acordo Brasil–Portugal de 1991 (Decreto n.º 1.457/1995, alterado pelo Decreto n.º 7.999/2013) e Convenção Multilateral Ibero-Americana (Decreto n.º 8.358/2014 no Brasil; Decreto n.º 20/2014 em Portugal). Mecanismo de <strong>totalização de períodos</strong> — somam-se os períodos contributivos e cada país paga a parcela proporcional. <strong>Limitação:</strong> a Convenção Ibero-Americana não cobre aposentadoria por tempo de contribuição.

<strong>Saída fiscal do Brasil</strong> (IN SRF 208/2002): Comunicação de Saída Definitiva da data da saída até o <strong>último dia de fevereiro</strong> do ano seguinte; Declaração de Saída Definitiva reportando a situação patrimonial na data da saída; e comunicação formal da condição de não residente a todas as fontes pagadoras no Brasil. <strong>Ganho de capital do não residente</strong> sobre bens situados no Brasil: alíquotas de 15% até R$ 5 mi, 17,5% até R$ 10 mi, 20% até R$ 30 mi e 22,5% acima — <strong>sem</strong> as isenções e reduções previstas para residentes.

<strong>CRS:</strong> Brasil participa desde 2018; Portugal implementou em 1/jan/2016, com primeira troca em 2017. A declaração de residência fiscal prestada ao banco português determina para onde os dados são enviados — uma Comunicação de Saída não apresentada gera divergência detetável por cruzamento automático.

<strong>Estatuto de Igualdade (Tratado de Porto Seguro, Decreto n.º 3.927/2001):</strong> equipara o brasileiro ao nacional português em direitos civis; a modalidade que inclui direitos políticos exige 3 anos de residência habitual e requerimento próprio, e <strong>importa a suspensão dos direitos políticos no Brasil</strong> enquanto durar. <strong>Não confere nacionalidade portuguesa, passaporte português nem cidadania da União Europeia</strong>, e não substitui a naturalização. Portugal retomou a concessão a brasileiros em setembro de 2025.`,
        impact:
          "Restrito a rendimentos portugueses qualificados das categorias A e B, mediante atividade e entidade elegíveis. Não alcança rentistas, aposentados nem investidores passivos. A isenção sobre rendimentos estrangeiros das categorias A, B, E, F e G opera com progressividade, o que eleva a taxa aplicável aos rendimentos portugueses.",
        warning:
          "A lista de profissões do Anexo I é fechada por código: advogados, contabilistas, arquitetos e profissionais financeiros não-TIC ficam de fora. Rendimento com origem em jurisdição da lista portuguesa (que inclui BVI, Cayman, Panamá e Bahamas) é tributado a 35% sem isenção — ponto de risco frequente em patrimônios com estruturas offshore. Hong Kong, Liechtenstein e Uruguai saíram dessa lista com efeitos a 1/jan/2026.",
        sources: [
          {
            t: "DRE · Portaria n.º 352/2024/1 (23/dez/2024)",
            u: "https://diariodarepublica.pt/dr/detalhe/portaria/352-2024-901014291",
          },
          {
            t: "DRE · Portaria n.º 52-A/2025/1 (25/fev/2025)",
            u: "https://diariodarepublica.pt/dr/detalhe/portaria/52-a-2025-908703847",
          },
          {
            t: "AT · FAQ IFICI",
            u: "https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/questoes_frequentes/pages/faqs-01018.aspx",
          },
          {
            t: "AT · Folheto informativo IFICI (PDF)",
            u: "https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/Folhetos_informativos/Documents/incentivos_investigacao.pdf",
          },
          {
            t: "AT · Art. 16.º do CIRS (residência fiscal)",
            u: "https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/codigos_tributarios/cirs_rep/Pages/irs16.aspx",
          },
          {
            t: "DRE · Portaria n.º 292/2025/1 (lista de jurisdições)",
            u: "https://diariodarepublica.pt/dr/detalhe/portaria/292-2025-934278891",
          },
          {
            t: "Planalto · Decreto n.º 4.012/2001 (CDT Brasil–Portugal)",
            u: "http://www.planalto.gov.br/ccivil_03/decreto/2001/D4012.htm",
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
    sumFiscal: "Lei Beckham (art. 93 LIRPF) · Ley Mbappé (Madrid)",
    sumFS: "ok",
    sumVisa: "Golden Visa extinto · Teletrabalho internacional",
    sumVS: "ext",
    fiscal: [
      {
        name: "Lei Beckham — Regime de Impatriados (Art. 93 LIRPF)",
        status: "ok",
        legalBasis:
          "Art. 93 da Ley 35/2006, de 28 de novembro (LIRPF), na redação dada pela Ley 28/2022, de 21 de dezembro (Ley de fomento del ecosistema de las empresas emergentes, «Ley de Startups»), disposición final tercera. Desenvolvimento regulamentar: Real Decreto 439/2007 (RIRPF), arts. 113 a 120. Modelos 149 e 151 aprovados pela Orden HFP/1338/2023, de 13 de dezembro (BOE-A-2023-25416). Exclusão de desportistas profissionais: Real Decreto 1006/1985, com efeitos desde 1/jan/2015.",
        desc: `Regime opcional que permite ao trabalhador deslocado para a Espanha ser tributado <strong>pelas regras do Imposto sobre a Renda de Não Residentes (IRNR)</strong>, mantendo formalmente a condição de contribuinte do IRPF. Alíquota fixa de <strong>24% até €600.000</strong> de base liquidável e <strong>47% sobre o excedente</strong>; a base do poupança (dividendos, juros e mais-valias de <em>fonte espanhola</em>) segue a escala do aforro de 19% / 21% / 23% / 27% / 30%.

Duração: o período impositivo da mudança de residência <strong>mais os 5 seguintes</strong> — seis exercícios no total.

<strong>Ponto mais frequentemente mal compreendido:</strong> o art. 93.2.b) determina que <strong>a totalidade dos rendimentos do trabalho</strong> obtidos durante a aplicação do regime <em>se entende obtida em território espanhol</em>. Isso significa que salário pago por empregador estrangeiro, por trabalho fisicamente realizado no exterior, <strong>é tributado na Espanha</strong> a 24%/47% — admitida a dedução por dupla tributação internacional. O regime <strong>não</strong> é um sistema de tributação territorial sobre o trabalho.

Em contrapartida, <strong>rendas de capital de fonte estrangeira</strong> (dividendos, juros, mais-valias e aluguéis obtidos fora da Espanha) ficam <strong>fora</strong> da base espanhola.

A Ley 28/2022 reduziu de 10 para 5 os anos de não residência prévia exigidos e estendeu o regime ao <strong>cônjuge, aos filhos menores de 25 anos</strong> (ou com deficiência, sem limite de idade) e ao progenitor dos filhos, sob condições próprias.`,
        kv: [
          { l: "Alíquota — trabalho", v: "24% até €600k · 47% acima" },
          { l: "Base do aforro (fonte ES)", v: "19% · 21% · 23% · 27% · 30%" },
          { l: "Rendas de capital estrangeiras", v: "Fora da base espanhola" },
          { l: "Rendimento do trabalho estrangeiro", v: "Tributado na Espanha" },
          { l: "Duração", v: "6 exercícios (ano da mudança + 5)" },
          { l: "Não residência prévia", v: "5 períodos impositivos" },
          { l: "Prazo de opção", v: "6 meses (Modelo 149)" },
          { l: "Declaração anual", v: "Modelo 151" },
          { l: "IP e ISGF", v: "Obligación real (só bens em ES)" },
          { l: "Família", v: "Cônjuge · filhos < 25 anos" },
        ],
        requirements: [
          "Não ter sido residente fiscal na Espanha nos <strong>5 períodos impositivos</strong> anteriores ao do deslocamento.",
          "O deslocamento decorrer de uma das causas admitidas: contrato de trabalho com empregador espanhol ou estrangeiro; <strong>teletrabalho internacional</strong> por meios exclusivamente telemáticos; aquisição da condição de <strong>administrador</strong> de entidade; atividade econômica qualificada como <strong>empreendedora</strong>; ou prestação de serviços como profissional altamente qualificado a empresas emergentes ou de I+D+i.",
          "No caso de administrador: a participação no capital <strong>não pode ser igual ou superior a 25%</strong> se a entidade for <strong>patrimonial</strong>. Para entidades não patrimoniais, a Ley 28/2022 removeu o limite.",
          "Não obter rendas por meio de <strong>estabelecimento permanente</strong> situado na Espanha, salvo nas hipóteses empreendedoras expressamente admitidas.",
          "<strong>Desportistas profissionais</strong> submetidos ao Real Decreto 1006/1985 estão expressamente excluídos desde 1/jan/2015.",
          "Extensão a familiares: exige deslocamento com o contribuinte principal (ou em momento posterior, sem que tenha terminado o primeiro período impositivo do regime) e que a soma das bases liquidáveis dos familiares seja inferior à do contribuinte principal.",
        ],
        process: [
          {
            step: "Deslocamento e alta na Seguridad Social",
            detail:
              "Inscrição no sistema espanhol de seguridade social, ou apresentação de documentação equivalente — certificado de legislação aplicável emitido pelo país de origem, ao abrigo de acordo bilateral. A data de início da atividade constante da alta é o marco inicial do prazo de opção.",
            timing: "Na chegada",
          },
          {
            step: "Comunicação da opção — Modelo 149",
            detail:
              "Apresentação do <strong>Modelo 149</strong> à AEAT comunicando a opção pelo regime. Prazo máximo: <strong>6 meses contados da data de início da atividade</strong> que consta da alta na Seguridad Social. Perdido o prazo, a opção não pode ser exercida.",
            timing: "Até 6 meses",
          },
          {
            step: "Emissão do documento acreditativo",
            detail:
              "A Administração emite o documento que acredita a sujeição ao regime, a apresentar ao empregador para efeitos de retenção na fonte pela alíquota do regime.",
            timing: "Até 10 dias úteis",
          },
          {
            step: "Declaração anual — Modelo 151",
            detail:
              "O impatriado declara pelo <strong>Modelo 151</strong>, e não pelo Modelo 100 do IRPF geral. Prazo coincidente com a campanha anual da Renta (abril a junho do ano seguinte).",
            timing: "Anual",
          },
          {
            step: "Renúncia ou exclusão",
            detail:
              "A renúncia ao regime comunica-se também pelo <strong>Modelo 149</strong>, nos meses de novembro e dezembro anteriores ao início do ano civil em que deva produzir efeitos. A exclusão (por deixar de cumprir os requisitos) é igualmente comunicada por Modelo 149, no prazo de um mês.",
            timing: "Nov–dez / 1 mês",
          },
          {
            step: "Fim do regime",
            detail:
              "Esgotados os seis exercícios, o contribuinte passa automaticamente ao IRPF geral: tributação por renda mundial, escalas estatal e autonômica, e Impuesto sobre el Patrimonio e ISGF por <em>obligación personal</em> (patrimônio mundial).",
            timing: "6º exercício",
          },
        ],
        costs: [
          {
            item: "Rendimento do trabalho até €600.000",
            value: "24%",
            note: "Alíquota fixa, sem escala autonômica",
          },
          {
            item: "Rendimento do trabalho acima de €600.000",
            value: "47%",
          },
          {
            item: "Base do aforro — fonte espanhola",
            value: "19% a 30%",
            note: "5 tramos",
          },
          {
            item: "Impuesto sobre el Patrimonio (IP)",
            value: "Só bens em ES",
            note: "Obligación real; mínimo isento estatal €700.000 + €300.000 de habitação habitual",
          },
          {
            item: "ISGF — Imposto de Solidariedade das Grandes Fortunas",
            value: "1,7% a 3,5%",
            note: "0% até €3.000.000; Modelo 718, apresentado de 1 a 31 de julho",
          },
          {
            item: "Seguridad Social — autônomo (RETA), 2026",
            value: "≈€217 a ≈€796/mês",
            note: "15 tramos por rendimento líquido real; bases congeladas nos valores de 2025",
          },
          {
            item: "Modelos 149 e 151",
            value: "Sem taxa",
          },
        ],
        sections: [
          {
            title: "Impuesto sobre el Patrimonio e ISGF sob o regime",
            body: `O impatriado tributa o <strong>Impuesto sobre el Patrimonio</strong> e o <strong>Impuesto Temporal de Solidaridad de las Grandes Fortunas (ISGF)</strong> por <strong>obligación real</strong> — apenas sobre bens e direitos situados em território espanhol. O patrimônio mantido no exterior fica fora de ambos.

<strong>Escala estatal supletória do IP</strong> (mínimo isento de €700.000, mais isenção da habitação habitual até €300.000): 0,2% até €167.129 · 0,3% até €334.252 · 0,5% até €668.499 · 0,9% até €1.336.999 · 1,3% até €2.673.999 · 1,7% até €5.347.998 · 2,1% até €10.695.996 · <strong>3,5%</strong> acima.

<strong>ISGF</strong> (estatal, não cedido às Comunidades Autônomas): 0% até €3.000.000 · 1,7% de €3.000.000 a €5.347.998 · 2,1% até €10.695.996 · 3,5% acima. Prorrogado por prazo indeterminado pelo Real Decreto-ley 8/2023.

<strong>Bonificações autonômicas no IP:</strong> bonificação de 100% em Madrid, Andaluzia, Cantábria, Extremadura, La Rioja e Região de Múrcia. <strong>Galiza: 50%</strong>. Extremadura fixa mínimo isento próprio de €500.000; as Baleares não bonificam, mas aplicam mínimo isento de €3.000.000.

<strong>Mecânica de neutralização:</strong> o ISGF estatal permite deduzir a cuota efetivamente paga de IP. Onde o IP resulta em €0 por bonificação autonômica, o ISGF é devido integralmente acima de €3.000.000 — a bonificação autonômica fica economicamente neutralizada nessa faixa, mantendo efeito apenas entre o mínimo isento e €3.000.000. Diversas Comunidades Autônomas responderam criando gravames próprios para reter a arrecadação.

<strong>Alteração de 2026:</strong> a Orden HAC/652/2026, de 26 de junho (BOE 29/06/2026, BOE-A-2026-14011), eliminou do Modelo 718 a restrição que aplicava o limite da cuota íntegra "unicamente a sujetos pasivos por obligación personal", passando a admiti-lo também para <strong>obligación real</strong> — situação típica do impatriado. Aplicável já ao exercício de 2025, com apresentação a partir de 1/jul/2026.`,
          },
          {
            title: "Obrigações informativas: Modelos 720 e 721",
            body: `<strong>Modelo 720</strong> — declaração informativa de bens e direitos situados no estrangeiro, dividida em três blocos: (i) contas em instituições financeiras; (ii) valores, direitos, seguros e rendas; (iii) bens imóveis. Limiar de <strong>€50.000 por bloco</strong> em 31 de dezembro. A reapresentação em anos seguintes só é exigida se houver incremento superior a <strong>€20.000</strong> em relação à última declaração. Prazo: <strong>1 de janeiro a 31 de março</strong>.

<strong>Modelo 721</strong> — criptoativos custodiados no exterior, mesmo limiar de €50.000 e mesmo prazo.

<strong>Regime sancionatório:</strong> o acórdão do <strong>TJUE de 27/01/2022 (processo C-788/19)</strong> declarou contrário ao Direito da União o regime anterior — imprescritibilidade e multas proporcionais de 150%, além de multas fixas desproporcionadas. A <strong>Ley 5/2022, de 9 de março</strong>, suprimiu esses regimes; aplicam-se hoje as regras gerais da Ley General Tributaria (arts. 198 e 199, infrações por não apresentar ou apresentar de forma incompleta declarações informativas) e o prazo ordinário de prescrição de <strong>4 anos</strong>.

<em>Nota de verificação:</em> os importes fixos exatos das sanções após a Ley 5/2022 devem ser confirmados nos arts. 198 e 199 da LGT antes de qualquer quantificação.`,
          },
          {
            title: "Exit tax espanhol — art. 95 bis LIRPF",
            body: `Aplica-se ao contribuinte que <strong>perde a residência fiscal espanhola</strong> tendo sido residente em <strong>pelo menos 10 dos 15 períodos impositivos</strong> anteriores ao último a declarar.

Tributa as <strong>mais-valias latentes</strong> de ações e participações de qualquer entidade quando, na data do último período a declarar:
· o <strong>valor de mercado conjunto</strong> das participações exceder <strong>€4.000.000</strong>; ou
· a participação numa entidade for <strong>superior a 25%</strong> e o valor dessas ações exceder <strong>€1.000.000</strong>.

Introduzido pela Ley 26/2014, em vigor desde 1/jan/2015. Existem regras de diferimento e parcelamento para deslocamentos à União Europeia ou ao Espaço Económico Europeu e para deslocamentos temporários por motivo laboral.

<strong>Relevância prática:</strong> os seis exercícios da Lei Beckham não são suficientes para atingir o limiar de 10 em 15 anos. A exposição ao exit tax surge para quem permanece residente fiscal na Espanha depois de esgotado o regime.`,
          },
          {
            title: "Escalas do IRPF geral, para comparação",
            body: `Quem não opta (ou deixa de estar) sob o art. 93 tributa pelo IRPF geral, cuja alíquota resulta da soma de uma escala <strong>estatal</strong> e de uma escala <strong>autonômica</strong>.

<strong>Escala estatal 2026:</strong> de 9,5% (até €12.450) a 24,5% (acima de €300.000).
<strong>Escala autonômica de Madrid 2026:</strong> de 8,50% a 20,50% (acima de €60.000), resultando em marginal máximo agregado de <strong>45,00%</strong> em Madrid.
<strong>Tipo supletório estatal</strong> (aplicável quando não há escala autonômica própria): 47%.
Comunidades com marginais mais elevados, como a Catalunha e a Comunidade Valenciana, chegam a aproximadamente 54%.

<em>Nota de verificação:</em> há fontes secundárias divergentes que citam 43,50% como marginal agregado de Madrid. O valor deve ser confirmado no texto refundido madrileno vigente para 2026 antes de ser usado em cálculo.`,
          },
          {
            title: "Imposto sobre sucessões e doações (ISD)",
            body: `O ISD é <strong>cedido às Comunidades Autônomas</strong>, e a carga varia radicalmente conforme a residência do falecido ou do donatário e o grau de parentesco.

· <strong>Madrid</strong> — bonificação de 99% na cuota para os Grupos I e II (descendentes, ascendentes e cônjuge).
· <strong>Andaluzia</strong> — redução própria e bonificação de 99% para os Grupos I e II.
· <strong>Catalunha</strong> — reduções por parentesco (descendentes menores de 21 anos até €100.000; demais descendentes e cônjuge até €50.000; ascendentes até €30.000) e bonificações decrescentes conforme a base, <strong>sem</strong> bonificação geral de 99%.

<em>Nota de verificação:</em> os percentuais e limites exatos por Comunidade Autônoma para 2026 devem ser conferidos na normativa autonômica vigente antes de qualquer planejamento sucessório.`,
          },
        ],
        brazilNote: `<strong>CDT Brasil–Espanha:</strong> Convenção para evitar a dupla tributação assinada em Brasília em <strong>14/nov/1974</strong>, publicada no BOE (BOE-A-1975-26928) e promulgada no Brasil pelo <strong>Decreto n.º 76.975</strong>. Há troca de Cartas interpretativas de 17 e 26/fev/2003 (BOE-A-2003-18257). Indicações preliminares apontam limite de 15% para dividendos e juros e cláusulas de <em>tax sparing / matching credit</em> com alíquotas fictas de 20% (juros) e 25% (royalties) — <strong>as alíquotas-limite por artigo devem ser confirmadas no Anexo III «Límites de imposición en los convenios» da AEAT antes de aplicação</strong>.

<strong>Ponto crítico — Beckham e o acesso ao CDT.</strong> Quem opta pelo art. 93 LIRPF <strong>não tem, em regra, a condição de «residente» para efeitos de aplicação de um Convênio de Dupla Tributação</strong>: o impatriado é submetido a tributação exclusivamente sobre rendas de fonte espanhola (<em>obligación real</em>), enquanto a definição de residente do art. 4 dos CDT exige sujeição a imposto por renda mundial. Consequências práticas para o brasileiro: dificuldade de obter da AEAT o certificado de residência fiscal «a efeitos de convênio»; risco de o Brasil não reconhecer a residência espanhola e manter a tributação de renda mundial; e retenções na fonte no Brasil sem a redução convencional. <em>Recomenda-se localizar consulta vinculante da DGT sobre o tema antes de estruturar a operação.</em>

<strong>Seguridade social:</strong> o Acordo Brasil–Espanha, promulgado pelo <strong>Decreto n.º 1.689/1995</strong>, permite a <strong>totalização</strong> de períodos de seguro (art. 16.2) para aposentadoria por idade, invalidez, pensão por morte e acidentes de trabalho, e a emissão de <strong>Certificado de Deslocamento</strong>, que mantém a filiação no país de origem durante deslocamentos temporários.

<strong>Saída fiscal do Brasil</strong> — dois atos distintos e complementares: (1) <strong>Comunicação de Saída Definitiva do País (CSDP)</strong>, a partir da data de saída e até o último dia útil de fevereiro do ano-calendário seguinte; (2) <strong>Declaração de Saída Definitiva do País (DSDP)</strong>, no mesmo prazo da DIRPF do ano seguinte. Sem esses atos, o contribuinte continua tratado como residente fiscal no Brasil, com tributação de renda mundial e risco de dupla residência. A condição de não residente aplica-se a partir da data da saída (saída com caráter permanente) ou após <strong>12 meses consecutivos de ausência</strong> (saída sem caráter permanente).

<strong>CRS:</strong> Espanha e Brasil são jurisdições participantes do Common Reporting Standard da OCDE. Instituições financeiras espanholas reportam contas de residentes fiscais brasileiros à AEAT, que as troca com a Receita Federal, e vice-versa. Somando-se o Modelo 720/721 espanhol e a e-Financeira brasileira, há dupla via de visibilidade patrimonial.

<strong>ITCMD:</strong> a Convenção de 1974 não cobre imposto sucessório. Sucessões e doações que envolvam bens na Espanha e herdeiros no Brasil ficam sujeitas cumulativamente ao ISD autonômico espanhol e ao ITCMD estadual brasileiro, sem instrumento convencional de alívio.`,
        warning: `O art. 93.2.b) faz com que <strong>todo o rendimento do trabalho</strong>, inclusive o pago por empregador estrangeiro por trabalho realizado fora da Espanha, seja considerado obtido em território espanhol e tributado a 24%/47%. Estruturas montadas sobre a premissa oposta — de que só o salário de fonte espanhola seria alcançado — produzem passivo tributário retroativo.

A perda da condição de residente convencional para efeitos do CDT Brasil–Espanha é a segunda exposição relevante: o impatriado pode ficar sem acesso às reduções de retenção na fonte no Brasil e sem certificado de residência fiscal aceitável pela Receita Federal.`,
        sources: [
          {
            t: "AEAT · Régimen especial de impatriados (art. 93 LIRPF)",
            u: "https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/manual-tributacion-no-residentes/regimenes-opcionales/regimen-especial-impatriados.html",
          },
          {
            t: "AEAT · Modelo 149 — comunicação da opção",
            u: "https://sede.agenciatributaria.gob.es/Sede/procedimientos/G606.shtml",
          },
          {
            t: "AEAT · Modelo 151 — declaração anual do impatriado",
            u: "https://sede.agenciatributaria.gob.es/Sede/procedimientoini/G615.shtml",
          },
          {
            t: "BOE · Orden HFP/1338/2023 (modelos 149 e 151)",
            u: "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2023-25416",
          },
          {
            t: "AEAT · Impuesto Temporal de Solidaridad de las Grandes Fortunas",
            u: "https://sede.agenciatributaria.gob.es/Sede/declaraciones-informativas-otros-impuestos-tasas/impuesto-temporal-solidaridad-grandes-fortunas.html",
          },
          {
            t: "AEAT · Modificação do ITSGF (Modelo 718), 29/06/2026",
            u: "https://sede.agenciatributaria.gob.es/Sede/todas-noticias/2026/junio/29/modificacion-impuesto-temporal-solidaridad-grandes-fortunas.html",
          },
          {
            t: "AEAT · Anexo III — límites de imposición en los convenios",
            u: "https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/manual-tributacion-no-residentes/anexos/limites-imposicion-convenios.html",
          },
          {
            t: "BOE · Convenio España–Brasil 1974 (BOE-A-1975-26928)",
            u: "https://www.boe.es/buscar/act.php?id=BOE-A-1975-26928",
          },
          {
            t: "Planalto · Decreto n.º 76.975 (promulgação da CDT)",
            u: "https://www.planalto.gov.br/ccivil_03/decreto/1970-1979/d76975.htm",
          },
          {
            t: "Planalto · Decreto n.º 1.689/1995 (acordo previdenciário)",
            u: "https://www.planalto.gov.br/ccivil_03/decreto/1995/d1689.htm",
          },
          {
            t: "Receita Federal · Comunicação de Saída Definitiva do País",
            u: "https://www.csdp.receita.fazenda.gov.br/csdp/pages/orientacoes/orientacoes-gerais.xhtml",
          },
        ],
      },
      {
        name: "Ley Mbappé — Dedução autonômica de Madrid (Ley 4/2024)",
        status: "new",
        legalBasis:
          "Ley 4/2024, de 20 de novembro, da Comunidade de Madrid, que modifica o Decreto Legislativo 1/2010, de 21 de outubro (texto refundido das disposições legais da Comunidade de Madrid em matéria de tributos cedidos pelo Estado). Publicada no BOCM em 28/11/2024; publicação estatal BOE-A-2025-3302. Produz efeitos para residências fiscais adquiridas a partir de 1/jan/2024.",
        desc: `Dedução na <strong>cuota íntegra autonômica</strong> do IRPF de Madrid, correspondente a <strong>20% do valor de aquisição</strong> de determinados investimentos realizados por quem se torna contribuinte do IRPF com residência habitual na Comunidade de Madrid vindo do exterior.

<strong>Não é um regime especial de tributação.</strong> É uma dedução dentro do IRPF geral — quem a utiliza tributa pela renda mundial, com as escalas estatal e autonômica, e sujeita-se ao Impuesto sobre el Patrimonio e ao ISGF por <em>obligación personal</em> (patrimônio mundial).

<strong>Relação com a Lei Beckham:</strong> os dois não se somam. A dedução é autonômica, dentro do IRPF geral; o impatriado do art. 93 tributa pelas regras do IRNR e não acede a deduções autonômicas. A escolha é excludente na prática.

Base da dedução: valor de aquisição, incluindo gastos e tributos inerentes. Insuficiência de cuota íntegra: o saldo não aproveitado aplica-se no exercício e nos <strong>5 exercícios seguintes, imediatos e sucessivos</strong>.`,
        kv: [
          { l: "Dedução", v: "20% do valor de aquisição" },
          { l: "Âmbito", v: "Cuota íntegra autonômica · Madrid" },
          { l: "Não residência prévia", v: "5 anos" },
          { l: "Prazo do investimento", v: "Ano da mudança ou o seguinte" },
          { l: "Manutenção obrigatória", v: "6 anos (investimento e residência)" },
          { l: "Participação máxima", v: "40% (com grupo familiar)" },
          { l: "Imóveis", v: "Excluídos da base" },
          { l: "Saldo não aproveitado", v: "5 exercícios seguintes" },
          { l: "Tributação", v: "IRPF geral · renda mundial" },
        ],
        requirements: [
          "Ser pessoa física <strong>não residente</strong> na Espanha que passa a contribuinte do IRPF com <strong>residência habitual na Comunidade de Madrid</strong>.",
          "Não ter sido residente na Espanha nos <strong>5 anos</strong> anteriores à mudança.",
          "Investir em <strong>valores representativos da cessão a terceiros de capitais próprios</strong> (renda fixa) ou em <strong>valores representativos da participação em fundos próprios</strong> de entidades de qualquer tipo, cotados ou não em mercados organizados.",
          "<strong>Investimento imobiliário está excluído</strong> da base da dedução.",
          "Ficam excluídas entidades domiciliadas em <strong>paraísos fiscais ou territórios não cooperativos</strong>.",
          "Participação direta ou indireta <strong>não superior a 40%</strong> do capital ou dos direitos de voto da entidade, computando-se cônjuge e parentes em linha reta ou colateral, por consanguinidade ou afinidade, <strong>até o 2.º grau inclusive</strong>.",
          "<strong>Não exercer funções executivas ou de direção</strong> na entidade investida nem manter com ela relação laboral.",
          "Manter o investimento <strong>e</strong> a residência na Comunidade de Madrid durante <strong>6 anos</strong>.",
        ],
        process: [
          {
            step: "Aquisição de residência fiscal em Madrid",
            detail:
              "Passar a contribuinte do IRPF com residência habitual na Comunidade de Madrid, pelos critérios gerais do art. 9 da LIRPF (permanência superior a 183 dias em território espanhol ou núcleo principal de interesses económicos), com permanência majoritária em Madrid.",
            timing: "Ano 0",
          },
          {
            step: "Realização do investimento elegível",
            detail:
              "O investimento deve ser realizado <strong>no exercício de aquisição da residência ou no exercício seguinte</strong>.",
            timing: "Ano 0 ou ano 1",
          },
          {
            step: "Declaração na Renta",
            detail:
              "A dedução é declarada no bloco de deduções autonômicas de Madrid da declaração anual do IRPF, no intervalo de casillas <strong>1039–1051</strong>.\n<em>Nota de verificação: a casilla exata dentro desse intervalo, para o modelo do exercício corrente, deve ser confirmada no manual de ajuda da AEAT.</em>",
            timing: "Campanha anual",
          },
          {
            step: "Aproveitamento do saldo",
            detail:
              "Havendo insuficiência de cuota íntegra autonômica, o saldo é aplicável no próprio exercício e nos <strong>5 exercícios seguintes, imediatos e sucessivos</strong>.",
            timing: "Até 6 exercícios",
          },
          {
            step: "Manutenção e regularização",
            detail:
              "O descumprimento do prazo de manutenção de 6 anos — do investimento ou da residência em Madrid — obriga à <strong>regularização</strong> das quantias deduzidas, com os juros correspondentes.",
            timing: "6 anos",
          },
        ],
        costs: [
          { item: "Taxa administrativa própria", value: "Não há" },
          {
            item: "IRPF geral (estatal + Madrid)",
            value: "9,5%–24,5% + 8,5%–20,5%",
            note: "Marginal agregado máximo em Madrid: 45,00% — a confirmar no texto refundido madrileno de 2026",
          },
          {
            item: "IP e ISGF",
            value: "Obligación personal",
            note: "Patrimônio mundial; IP bonificado em 100% em Madrid, ISGF devido acima de €3.000.000",
          },
        ],
        sections: [
          {
            title: "Incompatibilidades declaradas",
            body: `Para os mesmos investimentos, a dedução é <strong>incompatível</strong> com as demais deduções madrilenhas «por inversión en adquisición de acciones y participaciones de nuevas entidades» e «por inversiones en entidades cotizadas en el Mercado Alternativo Bursátil (MAB)».

<em>Nota de verificação:</em> o texto literal da incompatibilidade entre esta dedução e o regime do art. 93 LIRPF, no articulado da Ley 4/2024, deve ser lido diretamente no BOE-A-2025-3302. A incompatibilidade prática decorre da própria mecânica: o impatriado tributa pelas regras do IRNR e não acede às deduções autonômicas do IRPF.`,
          },
          {
            title: "Comparação factual entre os dois regimes",
            body: `<strong>Art. 93 (Beckham):</strong> alíquota fixa de 24% até €600.000; sem escalas autonômicas; rendas de capital de fonte estrangeira fora da base espanhola; IP e ISGF por <em>obligación real</em> (apenas bens espanhóis); sem acesso a deduções autonômicas do IRPF; sem acesso, em regra, aos benefícios do CDT; duração de 6 exercícios; rendimento do trabalho de fonte estrangeira <em>é</em> tributado na Espanha.

<strong>Ley 4/2024 (Mbappé):</strong> tributação pelo IRPF geral — escalas estatal e autonômica de Madrid, renda mundial, IP e ISGF por <em>obligación personal</em> sobre o patrimônio mundial; crédito de 20% do valor de aquisição do investimento elegível; sem limite temporal de 6 anos para a condição de residente; exige imobilização de 6 anos e residência mantida em Madrid; mantém acesso pleno ao CDT como residente convencional.`,
          },
        ],
        brazilNote: `Por tributar pelo IRPF geral, quem utiliza a dedução da Ley 4/2024 <strong>mantém a condição de residente para efeitos do CDT Brasil–Espanha</strong> (Decreto n.º 76.975) — diferentemente do impatriado do art. 93. Isso preserva o acesso ao certificado de residência fiscal «a efeitos de convênio» emitido pela AEAT, às alíquotas-limite convencionais sobre dividendos, juros e royalties de fonte brasileira, e ao crédito de imposto pago no Brasil.

Em contrapartida, a tributação por renda mundial alcança rendimentos de fonte brasileira (aluguéis, dividendos, juros, ganhos de capital), e o Impuesto sobre el Patrimonio e o ISGF passam a incidir por <em>obligación personal</em> sobre o patrimônio global, incluindo bens no Brasil — com a ressalva de que Madrid bonifica o IP em 100%, restando o ISGF acima de €3.000.000.

Obrigações informativas espanholas aplicáveis ao patrimônio brasileiro: <strong>Modelo 720</strong> (contas, valores e imóveis, limiar de €50.000 por bloco) e <strong>Modelo 721</strong> (criptoativos custodiados no exterior). No Brasil, permanecem exigíveis a CSDP e a DSDP para formalizar a saída fiscal.`,
        sources: [
          {
            t: "BOE · Ley 4/2024 da Comunidade de Madrid (BOE-A-2025-3302)",
            u: "https://www.boe.es/diario_boe/txt.php?id=BOE-A-2025-3302",
          },
          {
            t: "AEAT · Deducción por inversiones de nuevos contribuyentes procedentes del extranjero",
            u: "https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025-deducciones-autonomicas/comunidad-madrid/inversiones-nuevos-contribuyentes-procedentes-extranjero.html",
          },
          {
            t: "AEAT · Cumplimentación — casillas 1039–1051",
            u: "https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-ayuda-presentacion/irpf-2025/10-cumplimentacion-irpf-deducciones-autonomicas/10_12-comunidad-madrid/10_12_23-inversiones-nuevos-contribuyentes-procedentes-extranjero.html",
          },
          {
            t: "Gómez-Acebo & Pombo · Análise da Ley Mbappé (PDF)",
            u: "https://ga-p.com/wp-content/uploads/2024/11/Ley_Mbappe.pdf",
          },
        ],
      },
    ],
    visa: [
      {
        name: "Golden Visa — Autorização de Residência por Investimento",
        status: "ext",
        legalBasis:
          "Revogado pela Ley Orgánica 1/2025, de 2 de janeiro, de medidas en materia de eficiencia del Servicio Público de Justicia — disposición final vigésima primera, que derroga os arts. 63, 64, 65, 66 e 67 da Ley 14/2013, de 27 de setembro. Entrada em vigor da derrogação: 3 de abril de 2025. Regime transitório: disposición transitoria segunda.",
        desc: `<strong>Encerrado para novas admissões desde 3 de abril de 2025.</strong> A Ley Orgánica 1/2025 revogou os artigos da Ley 14/2013 que instituíam a autorização de residência para investidores — incluindo a via de aquisição de imóvel a partir de €500.000, que concentrava a maior parte dos pedidos.

<strong>Regime transitório:</strong> pedidos apresentados <strong>antes de 3/abr/2025</strong> continuam a ser tramitados pela normativa vigente na data de apresentação. Vistos e autorizações <strong>já concedidos mantêm validade por todo o período para o qual foram emitidos</strong>, e os pedidos de <strong>renovação</strong> tramitam-se e resolvem-se pela normativa vigente na data da concessão inicial.

Titulares que já não pretendam manter o investimento devem avaliar a migração para outra figura de residência — teletrabalho internacional, profissional altamente qualificado ou residência não lucrativa. <strong>Não há direito adquirido de conversão automática</strong> entre figuras.`,
        kv: [
          { l: "Status", v: "Extinto em 3/abr/2025" },
          { l: "Base da revogação", v: "L.O. 1/2025 · D.F. 21.ª" },
          { l: "Artigos revogados", v: "Arts. 63 a 67 da Ley 14/2013" },
          { l: "Limiar imobiliário anterior", v: "€500.000" },
          { l: "Autorizações vigentes", v: "Mantêm validade integral" },
          { l: "Renovações", v: "Regras da concessão inicial" },
          { l: "Pedidos anteriores a 3/abr/2025", v: "Tramitados pelo regime anterior" },
        ],
        requirements: [
          "Não há novas admissões — o regime está revogado.",
          "Para titulares atuais: a manutenção da autorização segue as condições da concessão inicial, incluindo a manutenção do investimento durante a vigência.",
          "Para pedidos protocolados antes de 3/abr/2025: aplicam-se integralmente os requisitos da Ley 14/2013 na redação vigente na data de apresentação.",
        ],
        sections: [
          {
            title: "Vias de residência que permanecem abertas",
            body: `Com o encerramento do Golden Visa, as figuras de residência disponíveis a nacionais de terceiros Estados na Espanha passam a ser, entre outras:

· <strong>Teletrabalho internacional</strong> (arts. 74 bis e seguintes da Ley 14/2013) — detalhada no cartão seguinte.
· <strong>Profissional altamente qualificado</strong> e <strong>transferência intraempresarial</strong>, também na Sección de movilidad internacional da Ley 14/2013.
· <strong>Empreendedor</strong> — projeto de interesse geral com relatório favorável da ENISA.
· <strong>Residência não lucrativa</strong> — via do regime geral de estrangeria, que exige meios económicos suficientes e <strong>proíbe o exercício de atividade laboral ou profissional</strong> na Espanha.

<em>Nota de verificação:</em> os limiares de meios económicos e a documentação da residência não lucrativa sob o Real Decreto 1155/2024 (vigente desde 20/05/2025) devem ser confirmados na sede eletrónica do Ministerio de Inclusión antes de qualquer candidatura.`,
          },
        ],
        brazilNote: `Brasileiros titulares de Golden Visa concedido antes de 3/abr/2025 mantêm a autorização e o direito de renovação pelas regras originais. O encerramento não altera a situação fiscal: residência legal e residência fiscal continuam a ser figuras distintas, e a permanência inferior a 183 dias por ano na Espanha não gera, por si só, residência fiscal espanhola.

Para quem pretendia usar o Golden Visa como porta de entrada para a Lei Beckham, a via remanescente mais direta é a autorização de <strong>teletrabalho internacional</strong>, que é causa de deslocamento expressamente admitida pelo art. 93 LIRPF.`,
        sources: [
          {
            t: "Ministerio de Vivienda · Fim das Golden Visa (3/abr/2025)",
            u: "https://www.mivau.gob.es/el-ministerio/sala-de-prensa/noticias/mie-02042025-1739",
          },
          {
            t: "KPMG · Legal Alert — eliminação do Golden Visa (L.O. 1/2025)",
            u: "https://assets.kpmg.com/content/dam/kpmgsites/es/pdf/2025/01/legal-alert-eliminacion-golden-visa.pdf.coredownload.inline.pdf",
          },
          {
            t: "Laboral-Social · L.O. 1/2025 e o fim das golden visa",
            u: "https://www.laboral-social.com/ley-organica-2025-fin-golden-visa-espana",
          },
        ],
      },
      {
        name: "Teletrabalho Internacional — Visto de Nômade Digital",
        status: "new",
        legalBasis:
          "Ley 14/2013, de 27 de setembro, Sección de movilidad internacional, arts. 74 bis a 74 quinquies, introduzidos pela Ley 28/2022, de 21 de dezembro, disposición final undécima. Regulamento de estrangeria: Real Decreto 1155/2024, de 19 de novembro, vigente desde 20/05/2025. Instrução conjunta da DG de Españoles en el Exterior e da DG de Migraciones sobre teletrabalhadores de caráter internacional.",
        desc: `Autorização de residência para nacionais de terceiros Estados que exerçam atividade laboral ou profissional <strong>à distância, para empresas situadas fora do território espanhol</strong>, por meios exclusivamente informáticos e telemáticos.

<strong>Duas vias de acesso:</strong> (i) <strong>visto consular</strong>, pedido no consulado espanhol da demarcação de residência no Brasil, com vigência máxima de 1 ano; (ii) <strong>autorização pela UGE-CE</strong>, para quem já esteja em situação regular na Espanha — inclusive em estada de turista dentro dos 90 dias —, com vigência de até 3 anos.

<strong>Renda mínima exigida:</strong> 200% do Salário Mínimo Interprofissional, o que corresponde em 2026 a aproximadamente <strong>€2.849/mês</strong> (cerca de €34.188/ano), sobre um SMI de €1.221 em 14 pagas. Acrescem <strong>75% do SMI</strong> pelo primeiro familiar e <strong>25% do SMI</strong> por cada familiar adicional.

<strong>É causa de deslocamento admitida pelo art. 93 LIRPF</strong> — o titular pode optar pela Lei Beckham, desde que apresente o Modelo 149 nos 6 meses seguintes à alta na Seguridad Social.`,
        kv: [
          { l: "Renda mínima (2026)", v: "≈€2.849/mês (200% do SMI)" },
          { l: "1.º familiar", v: "+75% do SMI" },
          { l: "Familiares adicionais", v: "+25% do SMI cada" },
          { l: "Visto consular", v: "Até 1 ano" },
          { l: "Autorização UGE-CE", v: "Até 3 anos, renovável por 3" },
          { l: "Resolução UGE-CE", v: "Máx. 20 dias · silêncio positivo" },
          { l: "Cliente espanhol (autônomo)", v: "Até 20% da atividade" },
          { l: "Antiguidade do vínculo", v: "Mínimo 3 meses" },
          { l: "Atividade da empresa estrangeira", v: "Mínimo 1 ano" },
          { l: "Residência de longa duração", v: "Após 5 anos" },
          { l: "Lei Beckham", v: "Causa de deslocamento admitida" },
        ],
        requirements: [
          "Ser nacional de terceiro Estado e exercer atividade <strong>à distância para empresas situadas fora da Espanha</strong>, por meios exclusivamente informáticos e telemáticos.",
          "Por conta alheia: só pode trabalhar para empresas fora da Espanha. Por conta própria: admite-se cliente espanhol desde que <strong>não exceda 20%</strong> da atividade profissional total.",
          "A empresa ou o cliente estrangeiro deve ter <strong>atividade real e contínua há pelo menos 1 ano</strong>.",
          "Relação laboral ou mercantil com <strong>antiguidade mínima de 3 meses</strong>, com autorização expressa do empregador para o teletrabalho a partir da Espanha.",
          "Qualificação: graduação ou pós-graduação de universidade, formação profissional ou escola de negócios de reconhecido prestígio, <strong>ou</strong> experiência profissional mínima de <strong>3 anos</strong>.",
          "Meios económicos de <strong>200% do SMI</strong> (≈€2.849/mês em 2026), acrescidos de 75% do SMI pelo primeiro familiar e 25% por cada familiar adicional.",
          "<strong>Seguro de doença</strong>, público ou privado, contratado com entidade autorizada a operar na Espanha e ativo durante toda a vigência da autorização.",
          "Certificado de antecedentes criminais dos países de residência dos <strong>últimos 2 anos</strong>, acompanhado de declaração de inexistência de antecedentes nos últimos 5 anos.",
          "Não figurar como rejeitável no espaço Schengen.",
          "Certificado de cobertura de seguridade social ao abrigo de acordo bilateral, ou alta no sistema espanhol.",
        ],
        process: [
          {
            step: "Via consular — pedido no Brasil",
            detail:
              "Pedido apresentado no <strong>Consulado da Espanha</strong> da demarcação de residência no Brasil. Documentos apostilados nos termos da Convenção da Haia e traduzidos por tradutor juramentado. O visto emitido habilita a residir e trabalhar, com vigência <strong>máxima de 1 ano</strong>.",
            timing: "Antes da mudança",
          },
          {
            step: "Via UGE-CE — pagamento da tasa 038",
            detail:
              "Para quem já está em situação regular na Espanha: autoliquidação da <strong>tasa 038</strong> pelo modelo 790, na modalidade «Principal», hecho imponible n.º 7, «Autorización inicial».",
            timing: "Antes do pedido",
          },
          {
            step: "Via UGE-CE — apresentação telemática",
            detail:
              "Pedido apresentado por via telemática à <strong>Unidad de Grandes Empresas y Colectivos Estratégicos</strong>. Prazo de resolução de <strong>20 dias no máximo</strong>; decorrido o prazo sem resolução, aplica-se o <strong>silêncio administrativo positivo</strong>.",
            timing: "Até 20 dias",
          },
          {
            step: "Emissão da autorização",
            detail:
              "Autorização com vigência de <strong>até 3 anos</strong> (ou período menor, se solicitado), <strong>renovável por mais 3</strong>. Após 5 anos de residência, abre-se o acesso à residência de longa duração.",
            timing: "3 + 3 anos",
          },
          {
            step: "TIE — Tarjeta de Identidad de Extranjero",
            detail:
              "Pedido no prazo de <strong>1 mês</strong> contado da entrada em território espanhol ou da notificação favorável. Formulário EX-17, taxa modelo 790-012, cita prévia e recolha de impressões digitais.",
            timing: "Até 1 mês",
          },
          {
            step: "Reagrupamento familiar",
            detail:
              "Cônjuge ou parceiro, filhos menores e ascendentes a cargo podem solicitar <strong>conjuntamente</strong> com o titular — mesmo procedimento e mesmos prazos, com os meios económicos majorados na proporção indicada.",
            timing: "Conjunto ou posterior",
          },
          {
            step: "Opção pela Lei Beckham",
            detail:
              "Sendo o teletrabalho internacional causa de deslocamento admitida pelo art. 93 LIRPF, o titular pode apresentar o <strong>Modelo 149</strong> nos <strong>6 meses</strong> seguintes à alta na Seguridad Social.",
            timing: "Até 6 meses",
          },
        ],
        costs: [
          {
            item: "Tasa 038 (autorização inicial UGE-CE)",
            value: "A confirmar",
            note: "Fontes secundárias indicam ≈€70; o importe oficial de 2026 deve ser lido na sede eletrónica do Ministerio de Inclusión",
          },
          {
            item: "TIE — modelo 790-012",
            value: "≈€16,08",
            note: "Valor de 2026",
          },
          {
            item: "Taxa consular de visto nacional no Brasil",
            value: "A confirmar",
            note: "Cobrada em reais pelo consulado; consultar a tabela vigente em exteriores.gob.es",
          },
          {
            item: "Seguro de doença privado",
            value: "Custo de mercado",
            note: "Obrigatório durante toda a vigência da autorização",
          },
          {
            item: "Seguridad Social — RETA, se autônomo",
            value: "≈€217 a ≈€796/mês",
            note: "15 tramos por rendimento líquido real; base mínima de €1.000/mês para autônomo societário",
          },
        ],
        sections: [
          {
            title: "Residência legal e residência fiscal",
            body: `A autorização de teletrabalho internacional confere <strong>residência legal</strong>. A <strong>residência fiscal</strong> é definida autonomamente pelo art. 9 da LIRPF: permanência superior a <strong>183 dias</strong> em território espanhol no ano civil, ou localização na Espanha do núcleo principal ou da base das atividades ou interesses económicos.

Presume-se, salvo prova em contrário, que o contribuinte reside na Espanha quando aí residam habitualmente o cônjuge não separado e os filhos menores dependentes.

O titular da autorização que permaneça menos de 183 dias e mantenha o centro de interesses fora da Espanha pode não adquirir residência fiscal espanhola — situação que, contudo, é incompatível com a opção pelo art. 93 LIRPF, que pressupõe a aquisição da residência fiscal.`,
          },
        ],
        brazilNote: `Para o brasileiro, o pedido consular é feito no consulado espanhol da sua demarcação, com documentos <strong>apostilados</strong> (Brasil e Espanha são partes da Convenção da Haia sobre apostila) e traduzidos por tradutor público juramentado.

<strong>Seguridade social:</strong> o Acordo Brasil–Espanha (Decreto n.º 1.689/1995) permite obter <strong>Certificado de Deslocamento</strong>, mantendo a filiação ao INSS durante deslocamentos temporários e evitando a dupla contribuição, além de permitir a <strong>totalização</strong> de períodos para efeitos de aposentadoria.

<strong>Saída fiscal:</strong> o titular que adquira residência fiscal espanhola deve formalizar no Brasil a <strong>CSDP</strong> e a <strong>DSDP</strong>. Sem elas, permanece residente fiscal brasileiro, com tributação de renda mundial no Brasil em paralelo à espanhola.

<strong>Atenção ao art. 93:</strong> quem opta pela Lei Beckham vê o rendimento do trabalho pago por empresa estrangeira ser considerado obtido em território espanhol — o que, no desenho típico do nômade digital, significa que a remuneração paga por empregador de fora da Espanha é integralmente tributada a 24%/47%.`,
        sources: [
          {
            t: "UGE-CE · Teletrabajadores de carácter internacional",
            u: "https://www.inclusion.gob.es/en/web/unidadgrandesempresas/teletrabajadores",
          },
          {
            t: "Sede Inclusión · Tasa 038",
            u: "https://sede.inclusion.gob.es/en/w/autorizaciones-de-trabajo-y-residencia-tasa-038",
          },
          {
            t: "PRIE · Teletrabajadores de carácter internacional",
            u: "https://prie.comercio.gob.es/es-es/Paginas/Teletrabajadores-caracter-internacional.aspx",
          },
          {
            t: "Instrucción conjunta · Teletrabajadores de carácter internacional (PDF)",
            u: "https://www.inclusion.gob.es/documents/410169/0/report_report_2301+Instrucci%C3%B3n+conjunta+Teletrabajadores+de+car%C3%A1cter+internacional_rev13_FIRMADAS.pdf",
          },
          {
            t: "Exteriores · Requisitos do visto de teletrabalho internacional (PDF)",
            u: "https://www.exteriores.gob.es/Consulados/santiagodechile/es/ServiciosConsulares/Documents/Requisitos%20visado%20TEL.pdf",
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
    alert: true,
    sumFiscal: "Art. 5A €100k · Art. 5B 7% · Art. 5C 50%",
    sumFS: "changed",
    sumVisa: "Golden Visa €250k–€800k · Nômade digital",
    sumVS: "changed",
    fiscal: [
      {
        name: "Art. 5A — Imposto fixo de €100.000 para HNWIs (regime «non-dom»)",
        status: "ok",
        legalBasis:
          "Art. 5A da Lei 4172/2013 (Código do Imposto sobre o Rendimento), introduzido pela Lei 4646/2019. Investimentos elegíveis e período de retenção: Decisão Ministerial n.º 46834/2023 (ΦΕΚ Β΄ 3393, de 19/mai/2023), que substituiu a Decisão Conjunta 147269 ΕΞ 2020; alterada pela Decisão Ministerial 30257 ΕΞ 2024 (ΦΕΚ Β΄ 1271, de 23/fev/2024). Alterado pela Lei 5313/2026 (ΦΕΚ de 25/jun/2026).",
        desc: `Quem transfere a residência fiscal para a Grécia e é admitido ao regime paga <strong>imposto fixo de €100.000 por ano</strong> sobre a <strong>totalidade do rendimento de fonte estrangeira</strong>, qualquer que seja o montante desse rendimento — é o chamado <em>esgotamento da obrigação tributária</em>.

Consequências diretas:
· <strong>não há obrigação de declarar</strong> o rendimento de fonte estrangeira na Grécia;
· <strong>não há crédito</strong> na Grécia por imposto pago no exterior sobre esse rendimento, porque a obrigação já está esgotada;
· o <strong>rendimento de fonte grega</strong> é tributado pelas regras ordinárias (escala progressiva, 5% sobre dividendos, 15% sobre juros);
· o contribuinte fica <strong>isento de imposto sucessório e de doação sobre bens móveis situados no exterior</strong>.

<strong>Duração máxima: 15 exercícios fiscais</strong>, não prorrogáveis.`,
        kv: [
          { l: "Imposto anual", v: "€100.000 fixos" },
          { l: "Por familiar", v: "€20.000/ano" },
          { l: "Base", v: "Todo rendimento de fonte estrangeira" },
          { l: "Investimento exigido", v: "€500.000 em até 3 anos" },
          { l: "Não residência prévia", v: "7 dos 8 anos anteriores" },
          { l: "Duração", v: "15 exercícios fiscais" },
          { l: "Decisão da AADE", v: "60 dias" },
          { l: "Vencimento do imposto", v: "Último dia útil de dezembro" },
          { l: "Acordo com país de origem", v: "Não exigido" },
          { l: "Rendimento de fonte grega", v: "Regras ordinárias" },
        ],
        requirements: [
          "<strong>Não ter sido residente fiscal grego em 7 dos 8 anos</strong> anteriores à transferência da residência fiscal para a Grécia.",
          "Transferir <strong>efetivamente</strong> a residência fiscal para a Grécia, nos termos do art. 4 da Lei 4172/2013.",
          "Comprovar ter investido, ou que investirá, <strong>pelo menos €500.000 na Grécia</strong>.",
          "Concluir o investimento no prazo máximo de <strong>3 anos</strong> contados da data do pedido.",
          "O investimento deve enquadrar-se nas <strong>categorias elegíveis</strong> da Decisão Ministerial 46834/2023 (imóveis, valores mobiliários, participações societárias, entre outras).",
          "O investimento pode ser realizado <strong>pelo próprio requerente</strong>, por <strong>parente</strong> (cônjuge e parentes em linha ascendente ou descendente) ou por <strong>pessoa jurídica</strong> em que o requerente detenha a maioria das ações ou quotas.",
          "Pagar integralmente o imposto fixo de €100.000 no prazo legal, em <strong>prestação única</strong>.",
          "Apresentar <strong>declaração anual de manutenção do investimento</strong> até 31 de maio de cada ano.",
          "<em>Dispensa do investimento:</em> há entendimento de que o requisito de €500.000 é dispensado a quem obteve autorização de residência por investimento (Golden Visa). <em>Verificar a redação vigente do art. 5A, §2, e o efeito da Lei 5275/2026 sobre a remissão legislativa.</em>",
        ],
        process: [
          {
            step: "Obtenção do AFM (número fiscal grego)",
            detail:
              "Pedido na <strong>Δ.Ο.Υ. Κατοίκων Εξωτερικού</strong> (Repartição Fiscal para Residentes no Exterior) da AADE. Se aplicável, obter também o AMKA (número de seguridade social).",
            timing: "1–3 semanas",
          },
          {
            step: "Estruturação e início do investimento",
            detail:
              "Estruturação do investimento de €500.000 em categoria elegível. O investimento não precisa estar concluído no pedido — basta o compromisso, com prazo de 3 anos para conclusão.",
            timing: "Variável",
          },
          {
            step: "Pedido de adesão ao regime",
            detail:
              "Apresentado ao <strong>Departamento de Tributação Alternativa</strong> da Repartição Fiscal para Residentes no Exterior e Tributação Alternativa de Residentes Fiscais Nacionais, em Atenas.\n<strong>O prazo legal de 31 de março foi abolido pela Lei 5313/2026</strong> — a data passa a ser fixada por decisão do Governador da AADE. <em>Verificar a decisão vigente no momento do pedido.</em>",
            timing: "Calendário da AADE",
          },
          {
            step: "Decisão de deferimento",
            detail:
              "Análise e decisão pela AADE no prazo de <strong>60 dias</strong> contados da apresentação.",
            timing: "60 dias",
          },
          {
            step: "Pagamento do imposto fixo",
            detail:
              "Pagamento dos €100.000 em <strong>parcela única</strong>. A Lei 5313/2026 moveu o vencimento do último dia útil de julho para o <strong>último dia útil de dezembro</strong>.",
            timing: "Dezembro",
          },
          {
            step: "Conclusão do investimento",
            detail:
              "Conclusão e comprovação do investimento de €500.000 à AADE, dentro de <strong>3 anos</strong> contados do pedido.",
            timing: "Até 3 anos",
          },
          {
            step: "Declaração anual de manutenção",
            detail:
              "Apresentação da <em>application-declaration for the continuous retention of the completed investment</em>, com os documentos do art. 5 da Decisão Ministerial 46834/2023, até <strong>31 de maio</strong> de cada ano — e a qualquer momento, se solicitado pela administração.",
            timing: "31 de maio, anual",
          },
        ],
        costs: [
          {
            item: "Imposto fixo — requerente principal",
            value: "€100.000/ano",
            note: "Prestação única; não há pro-rata identificado no ano de entrada",
          },
          {
            item: "Imposto fixo — por familiar admitido",
            value: "€20.000/ano",
            note: "Sem escalonamento por número de familiares",
          },
          {
            item: "Investimento mínimo obrigatório",
            value: "€500.000",
            note: "Ativo do próprio investidor, não é taxa",
          },
          {
            item: "Taxa administrativa de análise",
            value: "Não identificada",
            note: "Nenhuma taxa governamental específica localizada; verificar em aade.gr",
          },
        ],
        sections: [
          {
            title: "Regras de família",
            body: `Podem ser incluídos os <strong>familiares</strong> na acepção do art. 2 da Lei 4172/2013 — cônjuge ou parceiro em união civil registada e dependentes.

<strong>Custo:</strong> €20.000/ano por familiar, contra €100.000 do requerente principal.

<strong>Momento da inclusão:</strong> originalmente só era possível no pedido inicial; alteração legislativa recente permite que os familiares adiram <strong>a qualquer momento durante os 15 anos</strong>.

<strong>Efeito:</strong> os familiares admitidos ficam igualmente com a obrigação esgotada quanto ao rendimento de fonte estrangeira e fora do imposto sucessório e de doação grego sobre bens móveis no exterior.

<strong>Investimento:</strong> um único investimento de €500.000 cobre todo o núcleo familiar — não há exigência de aporte adicional por familiar.`,
          },
          {
            title: "Como se sai do regime",
            body: `<strong>Renúncia voluntária</strong> — pedido de revogação em qualquer exercício dos 15 anos; o contribuinte passa a ser tributado pelas regras gerais, sobre o rendimento mundial, a partir daquele exercício.

<strong>Não pagamento integral do imposto fixo</strong> — o regime especial é abolido e o contribuinte é tributado sobre o rendimento mundial.

<strong>Não conclusão do investimento</strong> nos 3 anos — revogação.

<strong>Interrupção do investimento por mais de 6 meses contínuos</strong> após a conclusão — revogação.

<strong>Termo dos 15 anos</strong> — passagem automática à tributação ordinária sobre o rendimento mundial.

<em>Nota de verificação:</em> a existência de vedação legal expressa ao reingresso após a perda do regime deve ser confirmada no texto do art. 5A.`,
          },
          {
            title: "Isenção sucessória sobre bens móveis no exterior",
            body: `O admitido ao art. 5A fica <strong>isento de imposto sucessório e de doação grego sobre bens móveis situados no exterior</strong>, recebidos por morte ou por doação.

Segundo alteração recente, a isenção estende-se também aos <strong>bens transferidos pelo próprio investidor a terceiros</strong> e alcança <strong>donatários e herdeiros</strong> do não-domiciliado.

<strong>Ressalva:</strong> <em>imóveis situados na Grécia continuam integralmente sujeitos</em> ao imposto sucessório grego — a isenção alcança apenas bens móveis no exterior.

<em>Nota de verificação:</em> a extensão exata da isenção a donatários e herdeiros deve ser confirmada no parágrafo específico do art. 5A na redação vigente.`,
          },
        ],
        brazilNote: `<strong>Não existe Convenção para evitar a dupla tributação entre Brasil e Grécia.</strong> A Grécia não consta da lista de acordos da Receita Federal (38 acordos abrangentes em vigor em agosto de 2026), e o Brasil não figura entre os mais de 55 parceiros de CDT da Grécia.

<strong>Consequência mais grave:</strong> não há <em>tie-breaker</em> convencional para resolver dupla residência fiscal. Se as leis internas dos dois países considerarem a pessoa residente simultaneamente, não existe regra de desempate (habitação permanente → centro de interesses vitais → estada habitual → nacionalidade → acordo amigável). Também não há limitação convencional de alíquotas na fonte, cláusula de pensões, procedimento amigável nem cláusula de não discriminação.

<strong>Ponto favorável ao art. 5A:</strong> este é o <strong>único dos três regimes gregos que não exige acordo de cooperação administrativa</strong> com o país de origem — os arts. 5B e 5C exigem. Para quem vem do Brasil, o art. 5A não apresenta o obstáculo estrutural que afeta os outros dois.

<strong>Crédito de imposto no Brasil:</strong> o art. 26 da Lei 9.249/1995 admite crédito por imposto pago no exterior mediante <strong>reciprocidade de tratamento</strong>, mesmo sem CDT. <em>Nota de verificação — item de prioridade máxima: é necessário confirmar se existe ato declaratório ou parecer da RFB reconhecendo reciprocidade com a Grécia. Sem CDT e sem reciprocidade reconhecida, o imposto grego não é creditável no Brasil.</em>

<strong>Saída fiscal do Brasil</strong> (IN SRF 208/2002): <strong>CSDP</strong> — Comunicação de Saída Definitiva do País, da data da saída até o último dia de fevereiro do ano-calendário seguinte, pelo portal csdp.receita.fazenda.gov.br ou e-CAC; e <strong>DSDP</strong> — Declaração de Saída Definitiva, no prazo geral da declaração de ajuste. Sem esses atos, o contribuinte continua residente fiscal no Brasil, com tributação de renda mundial — o cenário mais oneroso possível na ausência de tie-breaker convencional.

<strong>CRS:</strong> Brasil e Grécia são partes da Convenção Multilateral sobre Assistência Mútua Administrativa em Matéria Fiscal e do MCAA/CRS; a Grécia está ainda vinculada pela DAC2 (Diretiva 2014/107/UE). Contas no exterior de residente fiscal grego <strong>continuam a ser reportadas à AADE</strong> mesmo sob o art. 5A — a dispensa de declarar é legal, não é opacidade.

<strong>Acordo de Previdência Social Brasil–Grécia: existe</strong> e está em vigor, confirmado inclusive por formulário oficial do e-EFKA grego (GR-B3). Permite <strong>totalização de tempos de contribuição</strong>. Gestão pelo INSS (APSAI Brasília) e pelo e-EFKA. <em>Nota de verificação: o número do Decreto de promulgação e a data de vigência não puderam ser confirmados.</em> <strong>Atenção:</strong> é instrumento previdenciário, não tributário — <strong>não resolve</strong> a dupla tributação da renda, e não serve para satisfazer o requisito de «cooperação administrativa em matéria fiscal» dos arts. 5B e 5C.

<strong>Pensão do INSS — mudança relevante:</strong> o <strong>STF, no ARE 1.327.491 (Tema 1.174)</strong>, julgado em outubro de 2024, declarou <strong>inconstitucional</strong> a alíquota fixa de 25% de IRRF sobre aposentadoria e pensão pagas a residente no exterior (art. 7.º da Lei 9.779/1999, com a redação da Lei 13.315/2016). Aplica-se a <strong>tabela progressiva</strong>, com isenções e deduções, e cabe <strong>restituição do indevido dos últimos 5 anos</strong>.

<strong>ITCMD sobre bens no exterior:</strong> o STF, no Tema 825 (RE 851.108, 2021), declarou inconstitucional a cobrança pelos Estados sem lei complementar federal. A EC 132/2023 atribuiu competência aos Estados, mas o STF e os tribunais estaduais têm mantido a necessidade da lei complementar (referência recente: RE 1.553.620/SP; ADI 6.830/SP). O <strong>PLP 108/2024</strong>, aprovado pelo Senado em 30/set/2025, é o fator de risco a monitorar.`,
        warning: `A ausência de CDT Brasil–Grécia é o risco estrutural mais relevante deste dossiê: sem <em>tie-breaker</em> convencional, uma situação de dupla residência fiscal não tem solução negociada — resolve-se apenas por litígio administrativo em cada país.

O crédito, no Brasil, do imposto grego depende de <strong>reconhecimento de reciprocidade de tratamento pela Receita Federal</strong>, que não foi possível confirmar. Sem esse reconhecimento, os €100.000 pagos na Grécia não são creditáveis no Brasil.

Quatro leis gregas entre julho de 2025 e junho de 2026 alteraram materialmente o quadro (Leis 5222/2025, 5246/2025, 5275/2026 e 5313/2026). Material de consultoria produzido antes de julho de 2026 está desatualizado — o «prazo de 31 de março», em particular, deixou de ser a regra legal.`,
        sources: [
          {
            t: "AADE · Tax Incentives (arts. 5A, 5B, 5C do CIR) — PDF",
            u: "https://www.aade.gr/sites/default/files/2024-01/Tax%20Incentives%20(articles%205A,5B,%205C%20of%20the%20ITC).pdf",
          },
          {
            t: "AADE · Alternative Taxation (5A, 5B, 5C)",
            u: "https://www.aade.gr/en/greeks-abroad-non-residents/income-taxation/alternative-taxation-5a-5b-5c",
          },
          {
            t: "AADE · Guia fiscal para gregos no exterior e não residentes (PDF, 9/jul/2025)",
            u: "https://www.aade.gr/sites/default/files/2025-07/Useful%20Tax%20Guide%20for%20Greeks%20abroad%20and%20Non-residents_enriched_9.7.2025.pdf",
          },
          {
            t: "AADE · Residência fiscal de pessoas físicas (CIR)",
            u: "https://www.aade.gr/en/greeks-abroad-non-residents/income-taxation/tax-residence-natural-persons-itc",
          },
          {
            t: "International Bar Association · Procedimento e documentação para o regime non-dom grego",
            u: "https://www.ibanet.org/Procedure-and-supporting-documentation-for-application-to-the-Greek-non-dom-taxation-regime",
          },
          {
            t: "Grant Thornton Greece · Lei 5313/2026 — mudanças em imposto imobiliário e investimentos",
            u: "https://www.grant-thornton.gr/en/insights/article/new-law-5313-2026-tax-real-estate/",
          },
          {
            t: "Receita Federal · Acordos para evitar a dupla tributação",
            u: "https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/legislacao/acordos-internacionais/acordos-para-evitar-a-dupla-tributacao/acordos-para-evitar-a-dupla-tributacao-e-prevenir-a-evasao-fiscal",
          },
          {
            t: "STF · Tema 1.174 (ARE 1.327.491) — IR de 25% sobre aposentadoria no exterior",
            u: "https://portal.stf.jus.br/jurisprudenciaRepercussao/verAndamentoProcesso.asp?incidente=6179161&numeroProcesso=1327491&classeProcesso=ARE&numeroTema=1174",
          },
        ],
      },
      {
        name: "Art. 5B — Regime dos aposentados estrangeiros (7%)",
        status: "risk",
        legalBasis:
          "Art. 5B da Lei 4172/2013, introduzido por lei de julho de 2020 (a referência usualmente citada é a Lei 4714/2020, não confirmada). Procedimento e documentação: decisão do Governador da AADE. Alterado pela Lei 5313/2026 (ΦΕΚ de 25/jun/2026), que aboliu o prazo de 31 de março e moveu o pagamento para dezembro.",
        desc: `A pessoa física beneficiária de <strong>rendimento de pensão de fonte estrangeira</strong> que transfere a residência fiscal para a Grécia é tributada à <strong>alíquota fixa de 7%</strong> sobre a <strong>totalidade do rendimento de fonte estrangeira</strong> — não apenas sobre a pensão.

A alíquota de 7% abrange também dividendos, juros, rendimentos prediais de imóveis no exterior, mais-valias de fonte estrangeira e montantes de resgate de planos de pensão estrangeiros.

Diferentemente do art. 5A (valor absoluto fixo), aqui há uma <strong>alíquota proporcional</strong> — o imposto cresce com o rendimento. O rendimento de fonte grega é tributado pelas regras ordinárias.

<strong>Duração: 15 exercícios fiscais.</strong>

<strong>Requisito que condiciona o acesso do brasileiro:</strong> o regime exige transferência de residência fiscal a partir de Estado com o qual esteja em vigor um <strong>acordo de cooperação administrativa em matéria fiscal</strong> com a Grécia — ver a nota de interação com o Brasil.`,
        kv: [
          { l: "Alíquota", v: "7% flat" },
          { l: "Base", v: "Todo rendimento de fonte estrangeira" },
          { l: "Duração", v: "15 exercícios fiscais" },
          { l: "Investimento exigido", v: "Nenhum" },
          { l: "Valor mínimo de pensão", v: "Nenhum limiar identificado" },
          { l: "Não residência prévia", v: "5 dos 6 anos anteriores" },
          { l: "Acordo com país de origem", v: "Exigido — ponto crítico" },
          { l: "Declaração anual", v: "Obrigatória (Ε1)" },
          { l: "Decisão da AADE", v: "60 dias" },
          { l: "Vencimento", v: "Último dia útil de dezembro" },
        ],
        requirements: [
          "Ser <strong>beneficiário de rendimento de pensão pago no exterior</strong> — por instituição de segurança social estrangeira, autoridade governamental, fundo de pensões profissional ou seguro equivalente.",
          "<strong>Não ter sido residente fiscal grego em 5 dos 6 anos</strong> anteriores à transferência da residência fiscal.",
          "Transferir a residência fiscal <strong>a partir de um Estado com o qual esteja em vigor um acordo de cooperação administrativa em matéria fiscal com a Grécia</strong> — CDT ou outro instrumento de troca de informações.",
          "Transferir <strong>efetivamente</strong> a residência fiscal para a Grécia.",
          "Pagar o imposto de 7% em <strong>prestação única</strong> no prazo legal.",
        ],
        process: [
          {
            step: "Obtenção do AFM",
            detail:
              "Pedido de número fiscal grego na Δ.Ο.Υ. Κατοίκων Εξωτερικού (AADE), e do AMKA se aplicável.",
            timing: "1–3 semanas",
          },
          {
            step: "Reunião da prova documental",
            detail:
              "Certificado de residência fiscal do Estado de origem, comprovativo da pensão estrangeira e prova de não-residência fiscal grega em 5 dos 6 anos anteriores.\nDocumentos brasileiros exigem <strong>apostila da Haia</strong> (Brasil e Grécia são partes da Convenção) e tradução oficial para o grego.",
            timing: "Variável",
          },
          {
            step: "Pedido de adesão",
            detail:
              "Apresentado ao Departamento de Tributação Alternativa da Δ.Ο.Υ. Κατοίκων Εξωτερικού και Εναλλακτικής Φορολόγησης Φορολογικών Κατοίκων Ημεδαπής (AADE). <strong>Prazo de 31 de março abolido pela Lei 5313/2026</strong>; calendário atual fixado por decisão do Governador da AADE.",
            timing: "Calendário da AADE",
          },
          {
            step: "Decisão",
            detail: "Análise e decisão de deferimento ou indeferimento pela AADE.",
            timing: "60 dias",
          },
          {
            step: "Declaração anual de rendimento",
            detail:
              "Diferentemente do art. 5A, o regime do 5B <strong>exige declaração anual</strong> (formulário Ε1) do rendimento de fonte estrangeira.",
            timing: "Anual",
          },
          {
            step: "Pagamento",
            detail:
              "Pagamento dos 7% em prestação única, até o <strong>último dia útil de dezembro</strong> (a Lei 5313/2026 moveu o vencimento, que antes era em julho).",
            timing: "Dezembro",
          },
        ],
        costs: [
          {
            item: "Imposto sobre rendimento de fonte estrangeira",
            value: "7% flat",
            note: "Sobre a totalidade, não apenas sobre a pensão",
          },
          { item: "Investimento mínimo", value: "Nenhum" },
          {
            item: "Valor mínimo de pensão",
            value: "Nenhum limiar legal identificado",
          },
          {
            item: "Taxa governamental de análise",
            value: "Não identificada",
          },
          {
            item: "Contribuição de saúde (EFKA/PEKA) sobre pensão estrangeira",
            value: "A confirmar",
            note: "Ponto materialmente relevante que não pôde ser verificado",
          },
        ],
        sections: [
          {
            title: "Regras de família",
            body: `O art. 5B <strong>não prevê mecanismo de extensão a familiares com preço fixo</strong>, ao contrário dos €20.000 do art. 5A.

Cada cônjuge que seja, ele próprio, beneficiário de pensão estrangeira e cumpra os requisitos deve apresentar <strong>pedido autónomo</strong>.

Um cônjuge sem pensão estrangeira própria <strong>não é abrangido</strong> pelos 7% do outro e é tributado pelas regras gerais sobre o seu rendimento.

<em>Nota de verificação: a redação do art. 5B quanto a familiares deve ser confirmada.</em>`,
          },
          {
            title: "Como se sai do regime",
            body: `<strong>Renúncia voluntária</strong> — passagem à tributação ordinária sobre o rendimento mundial.

<strong>Não pagamento integral</strong> do imposto no prazo — perda do regime.

<strong>Deixar de ser residente fiscal grego</strong> — cessação.

<strong>Termo dos 15 anos</strong> — para um aposentado, a pensão estrangeira passaria a ser tributada pela escala ordinária de 9% a 44%.`,
          },
        ],
        brazilNote: `<strong>Este é o ponto de maior incerteza de todo o dossiê grego para o público brasileiro.</strong>

A leitura corrente de que «a ausência de CDT Brasil–Grécia inviabiliza o art. 5B» <strong>merece correção técnica</strong>: a norma não exige CDT, exige <strong>«acordo de cooperação administrativa em matéria fiscal em vigor»</strong>. E Brasil e Grécia são <strong>ambos partes da Convenção Multilateral sobre Assistência Mútua Administrativa em Matéria Fiscal</strong> (OCDE/Conselho da Europa, 1988, alterada pelo Protocolo de 2010) e do <strong>MCAA/CRS</strong>. Em tese, isso satisfaz o requisito.

<strong>Porém não foi possível localizar circular, decisão ou lista da AADE</strong> que (i) confirme a aceitação de instrumento multilateral em lugar de CDT bilateral para efeitos do art. 5B, nem (ii) enumere o Brasil como Estado de origem elegível.

<strong>Providência recomendada antes de qualquer decisão:</strong> obter confirmação escrita do Departamento de Tributação Alternativa da Δ.Ο.Υ. Κατοίκων Εξωτερικού και Εναλλακτικής Φορολόγησης Φορολογικών Κατοίκων Ημεδαπής (AADE, Atenas).

<strong>Alternativa de mitigação:</strong> fazer a transferência da residência fiscal a partir de um Estado da UE/EEE ou de país com CDT com a Grécia — solução que exige planeamento de vários anos e cuidado com os requisitos de não residência prévia (5 em 6 anos para o 5B).

<strong>Nota sobre o acordo previdenciário:</strong> existe Acordo de Previdência Social Brasil–Grécia em vigor, mas ele <strong>não satisfaz</strong> o requisito do art. 5B — o instrumento a invocar é a Convenção Multilateral de Assistência Administrativa Mútua <em>em matéria fiscal</em>, não o acordo previdenciário.

<strong>Dupla tributação da pensão:</strong> sem CDT, a pensão do INSS pode ser tributada nos dois países — no Brasil como fonte pagadora, pela tabela progressiva (após o STF, Tema 1.174, que afastou a alíquota fixa de 25%), e na Grécia como Estado de residência, a 7%. O alívio depende do reconhecimento de reciprocidade de tratamento pela Receita Federal, que não pôde ser confirmado.

<strong>Saída fiscal do Brasil:</strong> CSDP e DSDP são indispensáveis — sem elas, todo o benefício grego é neutralizado pela tributação brasileira sobre o rendimento mundial, sem crédito garantido.`,
        warning: `<strong>Não recomende nem estruture o art. 5B para cliente vindo do Brasil sem confirmação escrita da AADE</strong> de que (i) a Convenção Multilateral de Assistência Administrativa Mútua satisfaz o requisito legal de «acordo de cooperação administrativa em matéria fiscal», e (ii) o Brasil é Estado de origem elegível.

O art. 5A não tem esse requisito e é, por isso, o único dos três regimes gregos sem obstáculo estrutural identificado para quem vem do Brasil.`,
        sources: [
          {
            t: "AADE · Alternative Taxation (5A, 5B, 5C)",
            u: "https://www.aade.gr/en/greeks-abroad-non-residents/income-taxation/alternative-taxation-5a-5b-5c",
          },
          {
            t: "AADE · FAQs para gregos no exterior e não residentes (PDF, 26/nov/2025)",
            u: "https://www.aade.gr/sites/default/files/2025-11/FAQs_omogeneis_en_0.pdf",
          },
          {
            t: "AADE · Questões de cooperação administrativa internacional",
            u: "https://www.aade.gr/en/taxonomy/term/29511",
          },
          {
            t: "OCDE · Convenção sobre assistência administrativa mútua em matéria fiscal",
            u: "https://www.oecd.org/en/topics/convention-on-mutual-administrative-assistance-in-tax-matters.html",
          },
          {
            t: "e-EFKA · Acordo de Previdência Social Grécia–Brasil, formulário GR-B3 (PDF)",
            u: "https://www.e-efka.gov.gr/sites/default/files/2019-01/GR-B3%20%CE%91%CE%99%CE%A4%CE%97%CE%A3%CE%97%20%CE%93%CE%99%CE%91%20%CE%A3%CE%A5%CE%9D%CE%A4%CE%91%CE%9E%CE%97.pdf",
          },
        ],
      },
      {
        name: "Art. 5C — Isenção de 50% para trabalhadores e profissionais",
        status: "changed",
        legalBasis:
          "Art. 5C da Lei 4172/2013, introduzido pela Lei 4758/2020, de 4/dez/2020 («brain gain»). Decisão de execução do Governador da AADE (a referência usualmente citada é A.1087/2021, não confirmada). <strong>Alterado materialmente pela Lei 5222/2025, art. 206(7)</strong> — ΦΕΚ Α΄ 134, de 28/jul/2025.",
        desc: `Quem transfere a residência fiscal para a Grécia e passa a auferir <strong>rendimento do trabalho dependente e/ou de atividade empresarial ou profissional de fonte grega</strong> beneficia de <strong>isenção de 50% desse rendimento</strong>, tanto do imposto sobre o rendimento quanto da contribuição especial de solidariedade, durante <strong>7 exercícios fiscais</strong> consecutivos.

<strong>Diferenças estruturais em relação aos arts. 5A e 5B:</strong>
· incide sobre rendimento de <strong>fonte grega</strong> (os outros dois incidem sobre fonte estrangeira);
· <strong>não</strong> exige investimento;
· <strong>não</strong> é imposto fixo — é uma exclusão de 50% da base tributável, aplicando-se depois a escala progressiva normal sobre a metade tributável;
· aplica-se também a rendimentos de <strong>atividade empresarial</strong> iniciada na Grécia.

<strong>Mudança de 28/jul/2025:</strong> a Lei 5222/2025 <strong>aboliu o requisito de criação de «novo posto de trabalho»</strong>, aplicando-se a novos pedidos e aos pedidos pendentes de análise naquela data. O indivíduo qualifica-se independentemente de o posto ser de nova criação, de assumir posição já existente ou de constituir a própria atividade na Grécia.`,
        kv: [
          { l: "Benefício", v: "Isenção de 50% da base" },
          { l: "Base", v: "Rendimento de fonte grega" },
          { l: "Duração", v: "7 exercícios fiscais" },
          { l: "Investimento exigido", v: "Nenhum" },
          { l: "Não residência prévia", v: "5 dos 6 anos anteriores" },
          { l: "Compromisso de permanência", v: "Mínimo 2 anos" },
          { l: "Novo posto de trabalho", v: "Requisito abolido em 28/jul/2025" },
          { l: "Acordo com país de origem", v: "Exigido (UE/EEE ou cooperação)" },
          { l: "Contribuições EFKA", v: "Sobre 100% do rendimento" },
        ],
        requirements: [
          "<strong>Não ter sido residente fiscal grego em 5 dos 6 anos</strong> anteriores à transferência da residência fiscal. <em>Uma das fontes refere «5 dos 7 anos» — divergência a resolver no texto consolidado do CIR.</em>",
          "Transferir a residência fiscal <strong>a partir de Estado-Membro da UE/EEE ou de Estado com acordo de cooperação administrativa em matéria fiscal em vigor com a Grécia</strong>.",
          "Prestar serviços na Grécia — como <strong>trabalhador dependente de empregador grego</strong>, ou como <strong>profissional independente / atividade empresarial</strong> exercida na Grécia.",
          "<strong>Declarar a intenção de permanecer na Grécia por, no mínimo, 2 anos.</strong>",
          "Transferir <strong>efetivamente</strong> a residência fiscal.",
          "<strong>Requisito de «novo posto de trabalho»: ABOLIDO</strong> pela Lei 5222/2025, com efeitos desde 28/jul/2025.",
        ],
        process: [
          {
            step: "AFM, AMKA e inscrição no EFKA",
            detail:
              "Obtenção do número fiscal e do número de seguridade social, com inscrição no e-EFKA.",
            timing: "1–4 semanas",
          },
          {
            step: "Contrato de trabalho ou abertura de atividade",
            detail:
              "Celebração de contrato com empregador grego, ou abertura de atividade (έναρξη εργασιών) junto à AADE.",
            timing: "Variável",
          },
          {
            step: "Pedido de adesão ao regime",
            detail:
              "Apresentado à repartição fiscal competente (Δ.Ο.Υ.). O prazo usualmente indicado é <strong>até 31 de março</strong> do exercício relevante.\n<em>Nota de verificação: a Lei 5313/2026 aboliu expressamente o prazo de 31 de março para os arts. 5A e 5B; não foi possível confirmar se a abolição alcança também o art. 5C.</em>",
            timing: "31 de março (a confirmar)",
          },
          {
            step: "Decisão",
            detail:
              "Análise e decisão pela AADE. <em>Não foi possível confirmar se se aplica o prazo de 60 dias dos arts. 5A e 5B.</em>",
            timing: "A confirmar",
          },
          {
            step: "Aplicação da isenção",
            detail:
              "A isenção aplica-se na retenção na fonte pelo empregador e/ou na declaração anual de rendimento.",
            timing: "Anual",
          },
          {
            step: "Manutenção durante 7 exercícios",
            detail:
              "O benefício mantém-se por 7 exercícios fiscais consecutivos, sem prorrogação.",
            timing: "7 anos",
          },
        ],
        costs: [
          {
            item: "Imposto efetivo",
            value: "9%–44% sobre 50% do rendimento",
            note: "Escala progressiva aplicada à metade tributável",
          },
          { item: "Investimento mínimo", value: "Nenhum" },
          { item: "Taxa governamental de análise", value: "Não identificada" },
          {
            item: "Contribuições sociais e-EFKA — trabalhador dependente",
            value: "35,16% do bruto",
            note: "13,37% empregado + 21,79% empregador; teto de €7.761,94/mês desde jan/2026",
          },
          {
            item: "Contribuições e-EFKA — profissional independente",
            value: "A partir de ≈€220/mês",
            note: "Classes fixas por faixa; Circular e-EFKA n.º 6/2026, mais €10 de OAED",
          },
        ],
        sections: [
          {
            title: "Como se sai do regime",
            body: `<strong>Cessação de qualquer condição</strong> — deixar de trabalhar ou de exercer atividade na Grécia, deixar de ser residente fiscal grego, ou sair antes de completar os 2 anos declarados: o indivíduo deixa de estar sujeito ao regime especial e passa a ser tributado sobre a totalidade do rendimento grego a partir daí.

<strong>Termo dos 7 anos</strong> — tributação ordinária integral.

Nas fontes consultadas, o efeito da cessação é descrito como <strong>prospetivo</strong> («onwards»), não retroativo. <em>Nota de verificação: confirmar se há recaptura (clawback) do benefício já gozado, em especial no caso de saída antes de completar os 2 anos.</em>`,
          },
          {
            title: "Sobreposição com o visto de nômade digital",
            body: `Um nômade digital que se torne residente fiscal grego e passe a exercer atividade empresarial ou profissional <strong>na Grécia</strong> pode, em tese, candidatar-se ao art. 5C.

Há, contudo, uma <strong>tensão estrutural</strong>: o visto de nômade digital exige que o empregador ou os clientes estejam <strong>fora</strong> da Grécia, enquanto o art. 5C incide sobre rendimento de <strong>fonte grega</strong>. A qualificação da fonte do rendimento de um profissional independente estabelecido na Grécia que fatura para o exterior é matéria técnica que exige análise casuística.

<em>Nota de verificação — item crítico: não foi localizada posição oficial da AADE sobre a aplicação do art. 5C a titulares de visto de nômade digital nem sobre a qualificação da fonte do rendimento nesse desenho.</em>`,
          },
        ],
        brazilNote: `Aplica-se aqui a <strong>mesma incerteza do art. 5B</strong>: a norma admite Estado da UE/EEE <strong>ou</strong> Estado com acordo de cooperação administrativa em matéria fiscal em vigor. Brasil e Grécia são ambos partes da Convenção Multilateral de Assistência Administrativa Mútua e do MCAA/CRS, o que em tese satisfaz o requisito — mas <strong>não foi possível confirmar a aceitação pela AADE nem a inclusão do Brasil em lista de Estados elegíveis</strong>.

Confirmação escrita junto ao Departamento de Tributação Alternativa da AADE é indispensável antes de estruturar a operação para cliente vindo do Brasil.

<strong>Contribuições sociais:</strong> a isenção do art. 5C é <strong>fiscal, não contributiva</strong> — as contribuições ao e-EFKA incidem sobre 100% do rendimento. <em>Nota de verificação: confirmar se a base do EFKA é reduzida sob o regime.</em>

O Acordo de Previdência Social Brasil–Grécia permite <strong>totalização de tempos de contribuição</strong> entre INSS e e-EFKA, o que é relevante para quem exerce atividade dependente ou autónoma na Grécia sob este regime.

<strong>Saída fiscal do Brasil</strong> (CSDP e DSDP) permanece indispensável.`,
        sources: [
          {
            t: "EY Greece · Incentivos fiscais para transferência de residência (Lei 4758/2020)",
            u: "https://www.ey.com/en_gr/technical/tax/tax-alerts/greece-tax-incentives-for-the-transfer-of-tax-residence-of-indiv",
          },
          {
            t: "KPMG Greece · Tax Updates, 6/ago/2025 (Lei 5222/2025)",
            u: "https://kpmg.com/gr/en/insights/2025/08/tax-updates-06082025.html",
          },
          {
            t: "PwC Greece · Tax Flash sobre o art. 5C (PDF)",
            u: "https://www.pwc.com/gr/en/newsletters/tax-flash-%205c_en.pdf",
          },
          {
            t: "International Tax Review · Grécia introduz isenção de 50% para profissionais realocados",
            u: "https://www.internationaltaxreview.com/article/2a68rfy5bw2ycq1ybdoq7/greece-introduces-50-tax-break-for-relocating-professionals",
          },
        ],
      },
      {
        name: "Tributação ordinária — escalas, capital, ENFIA e sucessões",
        status: "changed",
        legalBasis:
          "Lei 4172/2013 (Código do Imposto sobre o Rendimento), art. 15, com a redação da Lei 5246/2025 (ΦΕΚ Α΄ 198, de 11/nov/2025), com efeitos desde 1/jan/2026. ENFIA: Lei 4223/2013 e alterações. Sucessões e doações: Lei 2961/2001. Contribuições: Circular e-EFKA n.º 6/2026.",
        desc: `Quadro da tributação ordinária grega, aplicável a quem não está (ou deixou de estar) sob os arts. 5A, 5B ou 5C — e, em todos os casos, ao <strong>rendimento de fonte grega</strong>.

A <strong>Lei 5246/2025</strong> reformou a escala do imposto sobre o rendimento com efeitos a partir de <strong>1 de janeiro de 2026</strong>, criando um novo escalão de 39% e deslocando o topo de 44% de €40.000 para €60.000. A <strong>contribuição especial de solidariedade foi abolida</strong> para rendimento do setor privado e pensões a partir de 2026.`,
        kv: [
          { l: "IRPF — faixa inicial", v: "9% até €10.000" },
          { l: "IRPF — topo", v: "44% acima de €60.000" },
          { l: "Contribuição de solidariedade", v: "Abolida em 2026" },
          { l: "Dividendos", v: "5%" },
          { l: "Juros", v: "15%" },
          { l: "Mais-valias em ações", v: "15% (com isenções)" },
          { l: "Mais-valia imobiliária (PF)", v: "Suspensa até 31/dez/2026" },
          { l: "ENFIA — imposto principal", v: "≈€2,50 a €16,25/m²" },
          { l: "Sucessões — Categoria A", v: "1% a 10%, isento até €150.000" },
          { l: "Transmissão imobiliária (ΦΜΑ)", v: "3,09%" },
          { l: "IVA em construção nova", v: "Suspenso até 31/dez/2026" },
          { l: "e-EFKA — teto mensal", v: "€7.761,94" },
        ],
        sections: [
          {
            title: "Escala do imposto sobre o rendimento — 2026",
            body: `<strong>Escala vigente desde 1/jan/2026</strong> (Lei 5246/2025), com a escala anterior entre parênteses:

· €0 – €10.000 → <strong>9%</strong> (9%)
· €10.001 – €20.000 → <strong>20%</strong> (22%)
· €20.001 – €30.000 → <strong>26%</strong> (28%)
· €30.001 – €40.000 → <strong>34%</strong> (36%)
· €40.001 – €60.000 → <strong>39%</strong> (escalão novo; antes já 44%)
· acima de €60.000 → <strong>44%</strong> (44% já a partir de €40.000)

<strong>Reduções por perfil:</strong>
· contribuintes com <strong>menos de 25 anos</strong>: alíquota de <strong>0%</strong> sobre rendimento até €20.000;
· contribuintes entre <strong>26 e 30 anos</strong>: alíquota de <strong>9%</strong> no segundo escalão (€10.000–€20.000);
· <strong>famílias com filhos</strong>: a alíquota do escalão €10.000–€20.000 é reduzida em função do número de filhos, chegando a <strong>0% para agregados com 4 ou mais filhos dependentes</strong>.`,
          },
          {
            title: "Rendimento de capital e mais-valias",
            body: `<strong>Dividendos: 5%</strong>, com retenção na fonte e esgotamento da obrigação.
<strong>Juros: 15%</strong>, com retenção na fonte e esgotamento da obrigação.
<strong>Royalties:</strong> <em>alíquota a confirmar (usualmente citada como 20%).</em>
<strong>Rendimento predial (aluguéis):</strong> escala progressiva de <strong>15% a 45%</strong> em 2026. <em>Os limites dos escalões devem ser confirmados.</em>

<strong>Mais-valias:</strong>
· ações <strong>não cotadas</strong> → 15%
· ações <strong>cotadas</strong>, alienante com <strong>≥ 0,5%</strong> do capital → 15%
· ações <strong>cotadas</strong>, alienante com <strong>&lt; 0,5%</strong> do capital → <strong>isento</strong>
· participações em ΙΚΕ/ΕΠΕ e sociedades de pessoas → 15%
· obrigações do Estado, bilhetes do tesouro, obrigações societárias e derivados → 15%
· fundos <strong>UCITS</strong> gregos e da UE/EEE → <strong>isento</strong>
· alienação de empresa ou estabelecimento → 15%
· <strong>imóveis (pessoas físicas)</strong> → 15% na lei, mas com <strong>suspensão em vigor até 31/dez/2026</strong>: na prática, o ganho de capital imobiliário de pessoa física <strong>não é tributado</strong> durante o período de suspensão.

<em>Alerta de janela temporal:</em> a suspensão da mais-valia imobiliária vai até 31/dez/2026, e há notícias de julho de 2026 sobre possibilidade de extensão ou mesmo de eliminação definitiva do imposto. <em>Confirmar antes de qualquer planeamento de desinvestimento.</em>`,
          },
          {
            title: "ENFIA — imposto anual sobre imóveis",
            body: `Estrutura em camadas:

<strong>Imposto principal:</strong> aproximadamente <strong>€2,50 a €16,25 por m²</strong>, conforme a zona (τιμή ζώνης) e o tipo de imóvel.

<strong>Sobretaxa patrimonial</strong> — incide quando o valor total tributável do património imobiliário excede €500.000:
· €500.000 – €650.000 → +5%
· €650.000 – €800.000 → +10%
· €800.000 – €1.000.000 → +15%
· acima de €1.000.000 → <strong>+20%</strong>

<strong>Reduções automáticas para patrimónios menores:</strong>
· até €100.000 → −30% · até €150.000 → −25% · até €250.000 → −20%
· até €300.000 → −15% · até €400.000 → −10% · acima de €400.000 → sem redução

<strong>Reduções específicas de 2026:</strong>
· <strong>−50%</strong> para residentes fiscais na Grécia cuja residência principal se situe em localidade com até <strong>1.500 habitantes</strong> (1.700 em certas regiões de fronteira);
· <strong>−5% a −10%</strong> por instalação de painéis solares certificados, bombas de calor, ou certificação energética Classe A.

Pagamento parcelado, com calendário anual publicado pela AADE.`,
          },
          {
            title: "Imposto sucessório e de doação",
            body: `<strong>Categoria A</strong> — cônjuge; descendentes de 1.º grau (filhos); descendentes consanguíneos de 2.º grau (netos); ascendentes consanguíneos de 1.º grau (pais).
Abatimento: <strong>€150.000 por beneficiário</strong>. Alíquotas: <strong>1% a 10%</strong>.

<strong>Categoria B</strong> — demais parentes. Abatimento: <strong>€30.000</strong>. Alíquotas: <strong>5% a 20%</strong>.

<strong>Categoria C</strong> — não parentes, incluindo companheiros não casados. Abatimento: <strong>€6.000</strong>. Alíquotas: <strong>20% a 40%</strong>.

<strong>Regimes especiais:</strong>
· <strong>Doação em vida de pais a filhos (γονική παροχή):</strong> abatimento único de <strong>€800.000</strong> para beneficiários da Categoria A, com alíquota fixa de 10% sobre o excedente. Aplica-se a <strong>doações em vida</strong>, não a sucessões causa mortis.
· <strong>Cônjuge sobrevivo</strong> de casamento com pelo menos 5 anos e filhos menores: abatimento adicional de <strong>€400.000 por beneficiário</strong>.
· <strong>Isenção do art. 5A:</strong> o não-domiciliado admitido ao regime fica isento sobre bens móveis situados no exterior.

<strong>Base de cálculo de imóveis:</strong> o <strong>valor objetivo</strong> (αντικειμενική αξία), determinado por fatores do Ministério das Finanças, à data do óbito.

<strong>Âmbito territorial:</strong> o imposto sucessório grego incide sobre todo bem móvel e imóvel situado na Grécia, independentemente da residência do falecido ou dos herdeiros.

<em>Nota de verificação: os limites exatos das faixas dentro de cada categoria não puderam ser confirmados em fonte oficial. Verificar em aade.gr e na Lei 2961/2001 antes de qualquer quantificação.</em>`,
          },
          {
            title: "Transmissão imobiliária, IVA e contribuições sociais",
            body: `<strong>Imposto de transmissão (ΦΜΑ): 3,09%</strong> (3% mais 0,3% de sobretaxa municipal), incidente sobre o <strong>maior</strong> entre o preço de venda e o valor objetivo.

<strong>IVA sobre construção nova:</strong> taxa normal de 24%, mas <strong>suspensa até 31/dez/2026</strong> pela Lei 5246/2025 (suspensão introduzida originalmente pela Lei 4646/2019). Enquanto suspensa, a construção nova elegível paga <strong>3,09% de ΦΜΑ em vez de 24% de IVA</strong>. O regime é opcional para o promotor, que pode preferir aplicar o IVA para recuperar o imposto a montante.

<strong>Custos acessórios de aquisição</strong> — notário, registo predial e cadastro, honorários advocatícios e due diligence: indicações de mercado apontam para <strong>7% a 10% do preço do imóvel</strong> no conjunto.

<strong>Contribuições sociais e-EFKA 2026 — trabalhador dependente:</strong>
· alíquota global de <strong>35,16%</strong> do salário bruto
· parte do trabalhador: <strong>13,37%</strong>
· parte do empregador: <strong>21,79%</strong>
· <strong>teto contributivo mensal: €7.761,94</strong> de salário bruto, desde janeiro de 2026

<strong>Trabalhador independente:</strong> montantes fixos mensais por classe de rendimento, a partir de aproximadamente <strong>€220/mês</strong>, mais €10 de OAED. Os montantes de cada classe constam da <strong>Circular e-EFKA n.º 6/2026</strong>.`,
          },
          {
            title: "Regime de family office (art. 71H)",
            body: `A reforma de 2025 alterou o regime grego de family office em dois pontos com efeito direto para famílias brasileiras:

<strong>1. Âmbito subjetivo alargado</strong> para incluir <strong>pessoas físicas residentes fiscais no estrangeiro</strong> — o family office estabelecido na Grécia deixa de estar limitado a gerir o património de residentes fiscais gregos.

<strong>2. Cláusula de segurança quanto ao <em>place of effective management</em>:</strong> a residência fiscal de entidades estrangeiras detidas pela família <strong>não pode ser contestada</strong> com base na prestação de serviços pelo family office grego. A norma confirma que a prestação de serviços a entidades estrangeiras detidas, direta ou indiretamente, pelos indivíduos ou seus familiares <strong>não implica</strong> que tais entidades sejam efetivamente geridas a partir da Grécia.

Esta segunda regra é operacionalmente relevante para estruturas offshore de famílias brasileiras que instalem um family office na Grécia.

<em>Nota de verificação: o modelo de tributação do family office grego (margem cost-plus) não pôde ser confirmado. Verificar em aade.gr e no ΦΕΚ da lei de 2025.</em>`,
          },
        ],
        brazilNote: `Sem CDT Brasil–Grécia, o residente fiscal brasileiro que <strong>mantenha</strong> a residência brasileira e tenha ativos na Grécia enfrenta tributação nos dois países, com alívio dependente do reconhecimento de reciprocidade pela RFB.

<strong>Rendimentos gregos para residente fiscal brasileiro:</strong>
· <strong>Aluguéis de imóvel na Grécia</strong> — Carnê-Leão Web, tabela progressiva mensal, alíquota marginal até 27,5%, além do ENFIA grego;
· <strong>Aplicações financeiras no exterior</strong> (Lei 14.754/2023) — <strong>15% definitivo</strong>, apurado anualmente na DIRPF;
· <strong>Lucros de entidades controladas no exterior</strong> — 15% em regime de competência, tributação automática independentemente de distribuição (Lei 14.754/2023, regulamentada pela IN RFB 2.180/2024, com efeitos desde 1/jan/2024);
· <strong>Trusts</strong> — regime específico de transparência fiscal da Lei 14.754/2023;
· <strong>Ganho de capital na alienação de imóvel grego</strong> — alíquotas progressivas de 15% a 22,5%;
· <strong>Obrigação acessória</strong> — Declaração de Capitais Brasileiros no Exterior (CBE) ao Banco Central, quando atingidos os limiares regulamentares.

<strong>Interação crítica:</strong> um brasileiro que mantenha residência fiscal no Brasil e adquira imóvel na Grécia paga <strong>ENFIA na Grécia e IRPF sobre aluguéis no Brasil</strong>, sem CDT que resolva a sobreposição, e com crédito por imposto grego dependente do reconhecimento de reciprocidade pela Receita Federal.

<strong>Sucessões:</strong> o imposto sucessório grego incide sobre bens situados na Grécia independentemente da residência do falecido ou dos herdeiros. Do lado brasileiro, o ITCMD sobre bens no exterior permanece inexigível na ausência de lei complementar federal (STF, Tema 825 e ADI 6.830), com o <strong>PLP 108/2024</strong> como fator de risco a monitorar. Existe hoje uma janela em que bens móveis no exterior podem escapar simultaneamente ao ITCMD brasileiro e — sob o art. 5A — ao imposto sucessório grego; <strong>essa janela é instável e depende diretamente da não entrada em vigor do PLP 108</strong>.`,
        sources: [
          {
            t: "AADE · Tributação do rendimento",
            u: "https://www.aade.gr/en/greeks-abroad-non-residents/income-taxation/tax-incentives-order-attract-new-tax-residents",
          },
          {
            t: "AADE · Imposto sucessório",
            u: "https://www.aade.gr/en/greeks-abroad-non-residents/property-taxation/inheritance-tax",
          },
          {
            t: "AADE · Tributação de doações e provisões parentais",
            u: "https://www.aade.gr/en/greeks-abroad-non-residents/property-taxation/taxation-gifts-and-parental-provisions",
          },
          {
            t: "AADE · ENFIA — pagamento 2026, 1.ª prestação",
            u: "https://www.aade.gr/en/node/15200",
          },
          {
            t: "Lei 5246/2025 (ΦΕΚ Α΄ 198, 11/nov/2025) — texto consolidado",
            u: "https://www.e-nomothesia.gr/kat-oikonomia/n-5246-2025.html",
          },
          {
            t: "Ministério da Economia e Finanças · Guia fiscal — tributação do capital",
            u: "https://minfin.gov.gr/en/tax-policy/tax-guide/capital-taxation/",
          },
          {
            t: "Zepos & Yannopoulos · Family offices gregos — novo enquadramento",
            u: "https://www.zeya.com/newsletters/greek-family-offices-newly-evolved-framework",
          },
        ],
      },
    ],
    visa: [
      {
        name: "Golden Visa — Autorização de Residência Permanente para Investidor",
        status: "changed",
        legalBasis:
          "Lei 5038/2023 (Código de Imigração de 2023), arts. 99 e 100. Reprecificação e restrições: Lei 5100/2024, art. 64. Prorrogação do regime transitório: Lei 5167/2024. <strong>Novo Código de Imigração: Lei 5275/2026 (ΦΕΚ Α΄ 17, de 6/fev/2026)</strong>, que transpõe a Diretiva (UE) 2024/1233. Regime anterior: Lei 4251/2014, art. 16.",
        desc: `Autorização de residência permanente concedida a nacional de país terceiro que realize investimento qualificado na Grécia. <strong>Não há requisito de permanência mínima</strong> na Grécia para manter ou renovar a autorização.

<strong>Limiares imobiliários por zona</strong> (regime em vigor em 2026):
· <strong>€800.000</strong> — zonas de alta pressão: Unidade Regional da Ática (incluindo Grande Atenas), Município de Salónica, Míconos, Thira (Santorini) e ilhas com população superior a 3.100 habitantes (cerca de 32 ilhas, incluindo Creta, Rodes, Corfu e Zakynthos). Área mínima de <strong>120 m²</strong>.
· <strong>€400.000</strong> — restante território. Área mínima de <strong>120 m²</strong>.
· <strong>€250.000</strong> — imóvel de <strong>conversão de uso</strong> (áreas principais convertidas de outro uso para uso residencial), ou <strong>edifício classificado</strong> objeto de restauro ou reconstrução integral.
· <strong>€250.000</strong> — <strong>startup inscrita no registo nacional Elevate Greece</strong> (via criada pela Lei 5275/2026).

<strong>Regra do imóvel único:</strong> o investimento deve concentrar-se num <strong>único imóvel</strong> — não é permitido somar vários imóveis de menor valor para atingir o limiar.

<strong>Mudança da Lei 5275/2026:</strong> o prazo de validade de 5 anos passou a correr <strong>da data de emissão do cartão de residência</strong>, e não da data do pedido — antes, o tempo de espera pela decisão consumia a própria validade da autorização. A lei introduziu ainda <strong>distribuição automática de processos</strong> ao serviço de migração com menor pendência.`,
        kv: [
          { l: "Zona de alta pressão", v: "€800.000 · mín. 120 m²" },
          { l: "Restante território", v: "€400.000 · mín. 120 m²" },
          { l: "Conversão de uso", v: "€250.000" },
          { l: "Edifício classificado", v: "€250.000" },
          { l: "Startup (Elevate Greece)", v: "€250.000" },
          { l: "Contribuição de capital", v: "€500.000" },
          { l: "Depósito bancário a prazo", v: "€500.000 · mín. 12 meses" },
          { l: "Obrigações do Tesouro", v: "€500.000 · maturidade ≥ 3 anos" },
          { l: "Fundo de Investimento Alternativo", v: "€350.000" },
          { l: "Validade", v: "5 anos, renovável" },
          { l: "Permanência mínima exigida", v: "Nenhuma" },
          { l: "Aluguel de curta duração", v: "Proibido · coima de €50.000" },
          { l: "Prazo total típico", v: "4–9 meses" },
        ],
        requirements: [
          "Ser <strong>nacional de país terceiro</strong> (não UE/EEE) e ter <strong>18 anos ou mais</strong>.",
          "Realizar investimento imobiliário no montante e nas condições da zona aplicável — <strong>imóvel único</strong>, área principal de <strong>pelo menos 120 m²</strong> nos escalões de €400.000 e €800.000.",
          "Na via de <strong>conversão de uso (€250.000)</strong>, a mudança de uso deve estar <strong>concluída antes da apresentação</strong> do pedido de autorização.",
          "Investimento <strong>integralmente pago</strong>, com escritura notarial formalizada e registada no Cadastro (Κτηματολόγιο) ou Conservatória.",
          "Pagamento por <strong>meios bancários rastreáveis</strong> — transferência para conta grega ou cheque bancário; não em numerário.",
          "Deter <strong>seguro de saúde</strong> válido na Grécia.",
          "Apresentar <strong>registo criminal</strong> do país de origem ou de residência, apostilado e traduzido.",
          "Não constituir ameaça à ordem pública ou à segurança, e não constar do SIS.",
          "Comprometer-se a <strong>não arrendar o imóvel em regime de curta duração</strong>.",
          "Prestar <strong>dados biométricos presencialmente</strong> na Grécia (ou em consulado, quando disponível).",
        ],
        process: [
          {
            step: "AFM e conta bancária grega",
            detail:
              "Obtenção do número fiscal grego junto da AADE e abertura de conta em banco grego, indispensável para a rastreabilidade do pagamento.",
            timing: "2–4 semanas",
          },
          {
            step: "Procuração ao advogado grego",
            detail:
              "Outorga de procuração, apostilada e traduzida, perante notário ou consulado grego no Brasil.",
            timing: "1–3 semanas",
          },
          {
            step: "Due diligence do imóvel",
            detail:
              "Verificação de título, ónus, licenças, conformidade urbanística, <strong>elegibilidade da zona</strong> e <strong>área principal ≥ 120 m²</strong>. Envolve advogado, engenheiro civil e consulta ao Cadastro (Κτηματολόγιο).",
            timing: "2–6 semanas",
          },
          {
            step: "Escritura e pagamento do ΦΜΑ",
            detail:
              "Escritura de compra e venda perante notário, com pagamento do imposto de transmissão de <strong>3,09%</strong> sobre o maior entre preço e valor objetivo.",
            timing: "1–4 semanas",
          },
          {
            step: "Registo",
            detail:
              "Registo da aquisição no Cadastro (Κτηματολόγιο) ou na Conservatória (Υποθηκοφυλακείο).",
            timing: "1–8 semanas",
          },
          {
            step: "Submissão do pedido",
            detail:
              "Pedido de autorização de residência permanente para investidor, apresentado ao <strong>Ministério da Migração e Asilo</strong>. A Lei 5275/2026 introduziu <strong>distribuição automática do processo</strong> ao serviço de migração com menor fila.",
            timing: "Eletrónica",
          },
          {
            step: "Comprovativo de submissão («blue receipt»)",
            detail:
              "Emissão do comprovativo, que confere <strong>direito de estada legal</strong> enquanto o pedido é analisado.",
            timing: "Imediato",
          },
          {
            step: "Biometria",
            detail:
              "Recolha de impressões digitais e fotografia — <strong>única etapa presencial obrigatória</strong>. Marcação tipicamente 1 a 2 semanas após a submissão.",
            timing: "1–2 semanas",
          },
          {
            step: "Decisão e emissão do cartão",
            detail:
              "Decisão do Ministério da Migração e Asilo e emissão do cartão de residência. <strong>Os 5 anos de validade correm a partir desta emissão</strong> (Lei 5275/2026).",
            timing: "1–2 meses após a biometria",
          },
        ],
        costs: [
          {
            item: "Taxa governamental — requerente principal",
            value: "€2.000",
            note: "Autorização inicial de 5 anos; mesmo valor na renovação",
          },
          {
            item: "Taxa governamental — cada familiar adulto",
            value: "€150",
            note: "Mesmo valor na renovação",
          },
          {
            item: "Menores de 18 anos",
            value: "Isentos",
            note: "Da taxa de pedido",
          },
          {
            item: "Cartão eletrónico de residência",
            value: "€16",
            note: "Por pessoa",
          },
          {
            item: "Imposto de transmissão imobiliária (ΦΜΑ)",
            value: "3,09%",
            note: "Sobre o maior entre preço e valor objetivo",
          },
          {
            item: "Notário, registo, cadastro e due diligence",
            value: "7% a 10% do preço",
            note: "Estimativa de mercado, não valor legal",
          },
          {
            item: "Honorários advocatícios",
            value: "€5.000–€15.000",
            note: "Estimativa de mercado, conforme dimensão do agregado",
          },
          {
            item: "ENFIA anual",
            value: "Variável",
            note: "Ver o dossiê de tributação ordinária",
          },
        ],
        sections: [
          {
            title: "Restrições de uso do imóvel",
            body: `<strong>Proibição de arrendamento de curta duração.</strong> Imóveis adquiridos ao abrigo do Golden Visa <strong>não podem ser arrendados em regime de curta duração</strong> — Airbnb, Booking ou arranjo privado. A lei grega trata como curta duração <strong>qualquer arrendamento inferior a 60 dias</strong>, esteja ou não anunciado em plataforma.

<strong>Sanção:</strong> coima administrativa de <strong>€50.000</strong> e <strong>revogação da autorização de residência</strong>. Pode ainda desencadear auditorias fiscais e migratórias.

<strong>Arrendamento de longa duração: permitido.</strong> Arrendamentos de longa duração a empresas turísticas que operem estabelecimentos de tipo hoteleiro permanecem permitidos, desde que sejam prestados serviços adicionais.

<strong>Sede social:</strong> imóveis da via de conversão de uso (€250.000) <strong>não podem servir de sede social nem de sucursal</strong> de empresa.

<strong>Direito adquirido:</strong> Golden Visas emitidas ao abrigo de quadros anteriores mantêm-se em vigor e <strong>não estão sujeitas</strong> às novas restrições, incluindo a proibição de arrendamento de curta duração. Transações realizadas a partir de 1/set/2024 cumprem integralmente o novo regime.`,
          },
          {
            title: "Vias de investimento não imobiliárias",
            body: `<strong>Contribuição de capital — €500.000:</strong> em sociedade com sede na Grécia, incluindo Sociedade de Investimento Imobiliário (REIC), Sociedade de Capital de Risco ou Fundo de Capital de Risco (AIF), desde que o objeto seja investir <strong>exclusivamente na Grécia</strong>.

<strong>Depósito bancário a prazo — €500.000:</strong> em banco grego, mantido por <strong>pelo menos 12 meses</strong>.

<strong>Obrigações do Tesouro grego — €500.000:</strong> com maturidade residual de <strong>pelo menos 3 anos</strong>, adquiridas através de instituição de crédito estabelecida na Grécia, que atua como custodiante.

<strong>Fundo de Investimento Alternativo (AIF) — €350.000:</strong> constituído na Grécia ou noutro Estado-Membro da UE, que invista <strong>exclusivamente na Grécia</strong> e detenha ativos de pelo menos €3 milhões.

<strong>Startup — €250.000</strong> (novidade de 2026): startup inscrita no registo nacional <strong>Elevate Greece</strong>. A via escala com o montante: 1 autorização para investidor individual, até 3 autorizações em investimentos maiores que suportem quadros-chave.

<em>Nota de verificação: a via de ações e obrigações societárias cotadas (usualmente citada como €800.000) não pôde ser confirmada.</em>`,
          },
          {
            title: "Regras de família — três gerações",
            body: `<strong>Cônjuge</strong> — sem condição adicional.
<strong>Filhos do investidor e/ou do cônjuge</strong> — até aos <strong>21 anos</strong>, prorrogável até aos <strong>24 anos</strong> enquanto matriculados como estudantes.
<strong>Pais do investidor</strong> — <strong>sem limite de idade e sem necessidade de provar dependência económica</strong>.
<strong>Pais do cônjuge (sogros)</strong> — nas mesmas condições.

O programa abrange, portanto, <strong>três gerações</strong>.

<strong>Custo adicional:</strong> €150 por familiar adulto (menores isentos), mais €16 de cartão por pessoa. <strong>Não é exigido investimento adicional</strong> por familiar — um único investimento qualificado cobre todo o agregado.

<strong>Direitos dos dependentes:</strong> autorização com a mesma validade da do investidor principal; acesso a educação e a serviços; circulação no Espaço Schengen nos limites gerais (90 dias em 180).

<em>Nota de verificação: o direito de trabalhar na Grécia sob a Golden Visa é matéria historicamente restritiva; verificar o regime de acesso ao mercado de trabalho sob a Lei 5275/2026.</em>

Filhos que atingem 21 ou 24 anos deixam de ser abrangidos como dependentes e devem transitar para categoria autónoma de autorização.`,
          },
          {
            title: "Renovação, perda e saída do regime",
            body: `A autorização é de <strong>5 anos, renovável indefinidamente de 5 em 5 anos</strong>, enquanto o investimento for <strong>mantido</strong>.

<strong>Alienação do imóvel a nacional de país terceiro</strong> — o comprador pode adquirir o direito à Golden Visa; o vendedor <strong>perde</strong> a autorização.
<strong>Alienação a nacional da UE ou a grego</strong> — o vendedor perde a autorização, sem transmissão do direito.
<strong>Arrendamento de curta duração</strong> — coima de €50.000 e revogação.
<strong>Uso do imóvel de conversão como sede de empresa</strong> — violação de condição, com risco de revogação.
<strong>Não renovação no prazo</strong> — caducidade. <strong>Renúncia voluntária</strong> — cessação.
<strong>Ausência prolongada</strong> — <strong>não há requisito de permanência mínima</strong> para manter a Golden Visa.

<strong>Consequência fiscal da saída:</strong> a perda da autorização de residência <strong>não implica automaticamente</strong> a perda de um regime fiscal dos arts. 5A, 5B ou 5C — são procedimentos distintos, perante órgãos distintos (Ministério da Migração e AADE). Se, porém, a residência fiscal grega deixar de ser sustentável, o regime fiscal cessa por essa via.`,
          },
          {
            title: "Regime transitório — encerrado",
            body: `Todos os prazos transitórios <strong>já expiraram</strong>. Exigia-se depósito de 10% (ou pré-contrato qualificado com prova bancária) até <strong>31/ago/2024</strong> e conclusão da compra até <strong>31/dez/2024</strong>, prorrogada pela Lei 5167/2024 para <strong>28/fev/2025</strong>; substituição de imóvel até <strong>30/abr/2025</strong>.

<strong>Pedidos apresentados em 2026 estão integralmente sujeitos aos limiares de €400.000 e €800.000.</strong>

<em>Nota de verificação:</em> a articulação formal entre a Lei 5038/2023 (arts. 99 e 100) e a Lei 5275/2026 — se há revogação total ou apenas alteração — deve ser confirmada no ΦΕΚ Α΄ 17/2026 e em migration.gov.gr.`,
          },
        ],
        brazilNote: `Brasileiros são nacionais de país terceiro e, portanto, elegíveis por qualquer das vias.

<strong>Documentos brasileiros</strong> exigem <strong>apostila da Haia</strong> (Brasil e Grécia são partes da Convenção) e tradução oficial para o grego. A procuração ao advogado grego é o instrumento que permite conduzir o processo à distância — apenas a biometria é presencial.

<strong>Residência legal ≠ residência fiscal.</strong> A Golden Visa <strong>não exige permanência mínima</strong> e, por si só, <strong>não gera residência fiscal grega</strong>. Quem mantém residência fiscal no Brasil continua a tributar em bases universais: aluguéis do imóvel grego pelo Carnê-Leão (até 27,5%), ganho de capital na venda a 15%–22,5%, e o imóvel declarado na DIRPF e, acima dos limiares, na CBE ao Banco Central. O ENFIA grego incide em paralelo, e o crédito por imposto grego depende do reconhecimento de reciprocidade pela RFB — não confirmado.

<strong>Cuidado com o arrendamento de curta duração.</strong> A prática, comum em imóveis de investimento na Grécia, é <strong>vedada</strong> ao imóvel da Golden Visa: coima de €50.000 e revogação da autorização. Recomenda-se cláusula contratual expressa de proibição de arrendamento inferior a 60 dias e gestão profissional com <em>compliance</em> documentado.`,
        warning: `<strong>A Golden Visa não converte automaticamente em cidadania.</strong> O relógio dos 7 anos começa na data de emissão da primeira autorização, mas <strong>deter o imóvel por 7 anos vivendo fora da Grécia não qualifica</strong>: a naturalização exige <strong>presença física de pelo menos 183 dias por ano</strong> e residência fiscal grega ao longo de todo o período. Há assimetria estrutural entre os dois regimes — a Golden Visa não exige permanência, a naturalização exige.

<em>Item de verificação prioritária:</em> as fontes divergem sobre se o tempo passado sob a autorização de investidor conta integralmente para o cômputo dos 7 anos de naturalização. Recomenda-se parecer jurídico grego específico antes de apresentar a Golden Visa como caminho para o passaporte da União Europeia.`,
        sources: [
          {
            t: "Ministério da Migração e Asilo",
            u: "https://migration.gov.gr",
          },
          {
            t: "Watson Farley & Williams · Compreendendo a Lei 5100/2024 do Golden Visa",
            u: "https://www.wfw.com/articles/understanding-the-new-golden-visa-law-%CE%BD%CE%BF-5100-2024-key-points-and-implications/",
          },
          {
            t: "Zepos & Yannopoulos · Nova Lei de Imigração 5275/2026",
            u: "https://www.zeya.com/newsletters/new-immigration-law-52752026-key-provisions-and-practical-implications",
          },
          {
            t: "Stylopoulos & Associates · Art. 100 da Lei 5038/2023 — o Golden Visa",
            u: "https://slo.gr/publications/article-100-of-law-5038-2023-the-golden-visa-para-en.htm",
          },
          {
            t: "IMI Daily · Grécia intensifica combate a fraude no Golden Visa",
            u: "https://www.imidaily.com/europe/greece-cracks-down-on-golden-visa-fraud-in-sprawling-new-circular/",
          },
          {
            t: "Eurofast · Golden Visa grego 2026 — vias de imóvel e startup",
            u: "https://eurofast.eu/greeces-golden-visa-2026-real-estate-and-start-up-investment-routes/",
          },
        ],
      },
      {
        name: "Visto de Nômade Digital",
        status: "changed",
        legalBasis:
          "Lei 4825/2021, consolidada na Lei 5038/2023 (Código de Imigração). Alterada pela Lei 5100/2024 e, materialmente, pela <strong>Lei 5275/2026 (ΦΕΚ Α΄ 17, de 6/fev/2026)</strong>, que pôs fim ao pedido «in-country».",
        desc: `Regime em duas fases:

<strong>1. Visto nacional D de nômade digital</strong> — permite estada de até <strong>12 meses</strong>.
<strong>2. Autorização de residência de nômade digital</strong> — obtida na Grécia após a entrada com o visto D, com validade de <strong>2 anos</strong>, renovável enquanto se mantiverem as condições de rendimento.

<strong>Requisito estrutural:</strong> o trabalho deve ser prestado <strong>remotamente para empregador ou clientes situados FORA da Grécia</strong>. O titular <strong>não pode</strong> prestar serviços a empresas gregas nem exercer atividade dependente na Grécia.

<strong>Mudança material de 6/fev/2026:</strong> a Lei 5275/2026 <strong>acabou com o pedido «in-country»</strong> — o visto D passou a ser <strong>obrigatório antes da entrada</strong>. Não é mais possível entrar com visto C ou isenção de visto e requerer a autorização de residência já em território grego.

<em>Nota: as fontes divergem quanto à duração e à periodicidade de renovação da autorização (2 anos com renovação trienal, ou 2 anos renováveis por 2). Verificar em migration.gov.gr.</em>`,
        kv: [
          { l: "Renda líquida mínima", v: "€3.500/mês (≈€42.000/ano)" },
          { l: "Acréscimo — cônjuge", v: "+20% (→ €4.200/mês)" },
          { l: "Acréscimo — por filho", v: "+15% (+€525/mês cada)" },
          { l: "Visto D", v: "Até 12 meses" },
          { l: "Autorização de residência", v: "2 anos, renovável" },
          { l: "Pedido in-country", v: "Vedado desde 6/fev/2026" },
          { l: "Clientes gregos", v: "Proibidos" },
          { l: "Residência fiscal", v: "183 dias em 12 meses" },
        ],
        requirements: [
          "Ser <strong>nacional de país terceiro</strong> (não UE/EEE) — brasileiros qualificam-se.",
          "Trabalhar <strong>remotamente</strong> por conta de empregador, ou como profissional independente ou empresário, <strong>estabelecido fora da Grécia</strong>.",
          "Comprovar <strong>rendimento líquido mensal mínimo de €3.500</strong> (aproximadamente €42.000/ano), <strong>após impostos</strong>.",
          "Acrescer <strong>20% para o cônjuge</strong> (€4.200/mês) e <strong>15% por cada filho dependente</strong> (+€525/mês por filho).",
          "Apresentar <strong>contrato de trabalho ou contratos de prestação de serviços</strong> com entidades estrangeiras.",
          "Apresentar <strong>declaração de que não prestará serviços a empregador estabelecido na Grécia</strong>.",
          "Apresentar <strong>seguro de saúde</strong> válido para a Grécia.",
          "Apresentar <strong>registo criminal</strong> apostilado e traduzido.",
          "Apresentar <strong>comprovativo de alojamento</strong> na Grécia.",
          "<strong>Desde 6/fev/2026:</strong> apresentar o pedido no consulado grego (ou portal digital) <strong>ANTES da viagem</strong>. Pedidos apresentados já em território grego <strong>não são aceites</strong>.",
        ],
        process: [
          {
            step: "Legalização de documentos no Brasil",
            detail:
              "Apostila da Haia em cartórios brasileiros e tradução oficial para o grego por tradutor juramentado.",
            timing: "3–6 semanas",
          },
          {
            step: "Pedido de visto D no consulado",
            detail:
              "Apresentado no <strong>Consulado-Geral da Grécia em São Paulo</strong> (Av. Paulista, 2073, Conjunto Nacional, Ed. Horsa II, 23.º andar, cj. 2303, CEP 01311-940) ou outra representação grega competente. Há Embaixada em Brasília e consulados no Rio de Janeiro, Curitiba, Manaus, Recife, Salvador, Santos e Vitória — <em>nem todos processam vistos nacionais D; confirmar a competência consular</em>.",
            timing: "Até 10 dias úteis (a confirmar)",
          },
          {
            step: "Entrada na Grécia com o visto D",
            detail:
              "O visto D habilita a entrada e a permanência por até 12 meses.",
            timing: "—",
          },
          {
            step: "Pedido da autorização de residência",
            detail:
              "Apresentado ao serviço de migração competente do Ministério da Migração e Asilo, dentro da validade do visto D.",
            timing: "Variável",
          },
          {
            step: "Biometria e emissão do cartão",
            detail:
              "Recolha biométrica e emissão do cartão de residência de nômade digital.",
            timing: "1–3 meses (a confirmar)",
          },
          {
            step: "Renovação",
            detail:
              "Renovação enquanto se mantiverem as condições de rendimento.",
            timing: "Ver nota de duração",
          },
        ],
        costs: [
          {
            item: "Taxa do visto D",
            value: "A confirmar",
            note: "Indicação corrente de €75; não confirmada em fonte oficial",
          },
          {
            item: "Taxa administrativa de processamento",
            value: "A confirmar",
            note: "Indicação corrente de €150",
          },
          {
            item: "Taxa da autorização de residência",
            value: "A confirmar",
            note: "Indicação corrente de €1.000",
          },
          {
            item: "Cartão eletrónico de residência",
            value: "€16",
            note: "Por analogia com a Golden Visa; confirmar",
          },
          { item: "Seguro de saúde privado", value: "Custo de mercado" },
          {
            item: "Apostilas e traduções juramentadas",
            value: "Custo de mercado",
          },
        ],
        sections: [
          {
            title: "Tratamento fiscal — o ponto que decide a estrutura",
            body: `A residência fiscal grega segue o art. 4 da Lei 4172/2013. Permanência <strong>superior a 183 dias em qualquer período de 12 meses</strong> torna o indivíduo residente fiscal grego <strong>desde o primeiro dia</strong> desse período, com sujeição ao rendimento mundial.

<strong>Estada inferior a 183 dias:</strong> o titular do visto D pode, em princípio, permanecer não-residente fiscal na Grécia — mas os <strong>outros critérios do art. 4</strong> (residência habitual, centro de interesses vitais) continuam a aplicar-se autonomamente, e são independentes do teste de dias.

<em>Nota de verificação:</em> algumas fontes de consultoria referem um regime de não tributação do rendimento estrangeiro no primeiro período para titulares do visto D. <strong>Não foi localizada base legal para essa afirmação — tratar como inexistente até confirmação.</strong>`,
          },
        ],
        brazilNote: `A ausência de CDT Brasil–Grécia torna o desenho do nômade digital brasileiro particularmente sensível: se a permanência ultrapassar 183 dias em 12 meses, há residência fiscal grega sobre o rendimento mundial, <strong>sem tie-breaker convencional</strong> caso o Brasil também considere a pessoa residente.

<strong>Providência indispensável:</strong> quem pretende exceder os 183 dias deve formalizar a <strong>saída fiscal do Brasil</strong> (CSDP e DSDP). Quem pretende permanecer abaixo desse limiar deve documentar rigorosamente as entradas e saídas e a manutenção do centro de interesses no Brasil.

O <strong>Acordo de Previdência Social Brasil–Grécia</strong> permite totalização de tempos de contribuição entre INSS e e-EFKA — relevante para quem se inscreve no sistema grego.

Documentos brasileiros exigem <strong>apostila da Haia</strong> e tradução juramentada para o grego.`,
        sources: [
          {
            t: "Palaiologos Law Office · Lei 4825/2021 — nômades digitais e investidores",
            u: "https://www.palaiologos.law/l4825-2021-digital-nomads-and-investors/",
          },
          {
            t: "EY Greece · Lei 5275/2026 — políticas de imigração legal",
            u: "https://www.ey.com/en_gr/technical/tax/tax-alerts/law-5275-2026-immigration-policies",
          },
          {
            t: "Consulado-Geral da Grécia em São Paulo",
            u: "https://embassies.info/ConsulateGeneralofgreeceinSaoPauloBrazil",
          },
        ],
      },
      {
        name: "Caminho para a cidadania — naturalização",
        status: "ok",
        legalBasis:
          "Código da Nacionalidade Grega — Lei 3284/2004. Reforma do processo de naturalização: Lei 4735/2020, que introduziu o ΠΕΓΠ (Certificado de Adequação de Conhecimentos para Naturalização) como pré-requisito. Autoridade: Ministério do Interior (Υπουργείο Εσωτερικών), Direção de Cidadania, e Secretarias Descentralizadas.",
        desc: `A naturalização de nacional de país terceiro exige <strong>7 anos de residência legal e contínua</strong> na Grécia, com <strong>presença física de pelo menos 183 dias por ano</strong> e condição de <strong>residente fiscal e contribuinte</strong> ao longo do período.

O prazo cai para <strong>3 anos</strong> no caso de cidadãos da UE, refugiados reconhecidos e cônjuges de cidadãos gregos.

<strong>A Grécia permite a dupla e a múltipla cidadania</strong>, sem exigência de renúncia à nacionalidade anterior.

<strong>Via alternativa, independente e prioritária:</strong> brasileiros descendentes de gregos podem ter direito à cidadania por <strong>ius sanguinis</strong>, <strong>sem exigência de residência</strong>, mediante registo da ascendência nos registos municipais gregos (Lei 3284/2004, arts. 1.º e seguintes). Quando disponível, esta via precede em prioridade qualquer análise de Golden Visa.`,
        kv: [
          { l: "Residência exigida", v: "7 anos (3 para UE e cônjuges)" },
          { l: "Presença física", v: "≥ 183 dias por ano" },
          { l: "Residência fiscal grega", v: "Exigida no período" },
          { l: "Língua", v: "Nível B1 do QECR" },
          { l: "Exame", v: "ΠΕΓΠ · abril e outubro" },
          { l: "Nota mínima", v: "70/100" },
          { l: "Dupla cidadania", v: "Permitida" },
          { l: "Via por ascendência", v: "Sem exigência de residência" },
        ],
        requirements: [
          "Ser <strong>maior de 18 anos</strong>.",
          "Ter completado <strong>7 anos de residência legal e contínua</strong> na Grécia imediatamente antes do pedido.",
          "Ter permanecido <strong>pelo menos 183 dias por ano</strong> na Grécia durante esse período — exigência de <strong>presença física real</strong>.",
          "Ter sido <strong>residente fiscal e contribuinte</strong> na Grécia durante o período de qualificação, com declarações fiscais e histórico de emprego ou atividade.",
          "Deter <strong>autorização de residência válida</strong> de categoria que permita a naturalização.",
          "Ter obtido o <strong>ΠΕΓΠ</strong> — aprovação no exame panhelénico de naturalização.",
          "Comprovar <strong>proficiência em grego ao nível B1</strong> do Quadro Europeu Comum de Referência.",
          "Demonstrar <strong>integração económica e social</strong>.",
          "Não ter condenações que obstem à naturalização.",
        ],
        process: [
          {
            step: "Acumulação do período de residência",
            detail:
              "Sete anos de residência legal, com pelo menos <strong>183 dias por ano</strong> de presença física e declarações fiscais gregas em todo o período.",
            timing: "7 anos",
          },
          {
            step: "Exame ΠΕΓΠ",
            detail:
              "Inscrição e aprovação no exame panhelénico. Realizado tipicamente em <strong>abril e outubro</strong>. Estrutura: <strong>língua grega</strong>, 40 pontos (mínimo de 20 para aprovação); <strong>conhecimentos gerais</strong> — História, Geografia e Instituições Políticas —, 60 pontos (mínimo de 40). <strong>Nota mínima global: 70/100.</strong>\n<em>Nota de verificação: a fonte apresenta a estrutura de pontos de forma internamente inconsistente; confirmar no site do Ministério do Interior.</em>",
            timing: "Abril e outubro",
          },
          {
            step: "Pedido de naturalização",
            detail:
              "Apresentação do dossiê completo na Secretaria Descentralizada ou na Direção de Cidadania do Ministério do Interior.",
            timing: "—",
          },
          {
            step: "Entrevista",
            detail: "Entrevista perante a Comissão de Naturalização.",
            timing: "Variável",
          },
          {
            step: "Decisão ministerial",
            detail:
              "Decisão do Ministro do Interior e publicação no ΦΕΚ. Historicamente, <strong>2 a 5 anos</strong> de análise.\n<em>Obter o prazo médio atual junto do Ministério do Interior.</em>",
            timing: "2–5 anos (histórico)",
          },
          {
            step: "Juramento",
            detail: "Cerimónia de juramento de cidadania perante o município.",
            timing: "—",
          },
        ],
        sections: [
          {
            title: "Golden Visa e cidadania — a assimetria estrutural",
            body: `As fontes são convergentes: <strong>a Golden Visa não isenta da exigência de presença física</strong>.

· O relógio dos 7 anos <strong>começa na data de emissão da primeira autorização</strong> Golden Visa;
· mas <strong>deter o imóvel por 7 anos vivendo fora da Grécia NÃO qualifica</strong> para a cidadania;
· é necessária <strong>presença física de pelo menos 183 dias por ano</strong> e <strong>residência fiscal grega</strong> ao longo de todo o período.

Há, portanto, uma assimetria estrutural entre os dois regimes: a Golden Visa <strong>não exige permanência mínima</strong> para ser mantida e renovada, mas a naturalização <strong>exige 183 dias por ano durante 7 anos</strong>.

<em>Item de verificação prioritária:</em> as fontes divergem sobre se o tempo passado sob a autorização de investidor (μόνιμη άδεια διαμονής επενδυτή) conta integralmente para o cômputo dos 7 anos de naturalização. Recomenda-se parecer jurídico grego específico.`,
          },
        ],
        brazilNote: `<strong>Do lado brasileiro:</strong> a Constituição Federal, art. 12, §4.º, II, com a redação da Emenda Constitucional de Revisão n.º 3/1994, previa a perda da nacionalidade brasileira por aquisição voluntária de outra nacionalidade, ressalvados o reconhecimento de nacionalidade originária pela lei estrangeira e a imposição de naturalização como condição de permanência ou de exercício de direitos civis.

A <strong>EC 131/2023</strong> alterou o dispositivo para restringir a perda essencialmente a <strong>pedido expresso do próprio interessado</strong>, ressalvadas situações de apatridia. Na prática, <strong>a naturalização grega voluntária deixou de acarretar perda automática da nacionalidade brasileira</strong>.

<em>Nota de verificação: confirmar o texto vigente do art. 12, §4.º, II da CF/88 após a EC 131/2023 e a regulamentação aplicável.</em>

<strong>Via por ascendência — verificar primeiro.</strong> Brasileiros descendentes de gregos podem ter direito à cidadania por <strong>ius sanguinis</strong>, sem residência e sem investimento, mediante registo da ascendência nos registos municipais gregos. Quando disponível, esta via torna desnecessária toda a análise de Golden Visa e de residência.`,
        sources: [
          {
            t: "Dafni I. Siopi · Guia da cidadania por naturalização para nacionais de países terceiros",
            u: "https://siopi-law.gr/en/a-guide-to-citizenship-by-naturalization-for-third-country-nationals-in-greece/",
          },
          {
            t: "AIDA · Naturalização — Grécia",
            u: "https://asylumineurope.org/reports/country/greece/content-international-protection/status-and-residence/naturalisation/",
          },
          {
            t: "Generation 2.0 · Novo processo de naturalização",
            u: "https://g2red.org/new-naturalization-process-what-is-it-about/",
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
    sumFiscal: "Zero IR pessoal · Corporate Tax 9% · VAT 5%",
    sumFS: "ok",
    sumVisa: "Golden Visa 10 anos · Green Visa 5 anos",
    sumVS: "ok",
    fiscal: [
      {
        name: "Ausência de imposto de renda pessoal e o sistema tributário federal",
        status: "ok",
        legalBasis:
          "Federal Decree-Law n.º 47/2022 (Corporate Tax); Cabinet Decision n.º 100/2023 (qualifying income do QFZP); Ministerial Decisions n.º 229/2025 e n.º 230/2025 (atividades qualificantes e excluídas — revogam e substituem a MD 265/2023, com efeito retroativo a 1/jun/2023); Cabinet Decision n.º 142/2024 (DMTT, vigente desde 1/jan/2025); Cabinet Decision n.º 85/2022 (critérios de residência fiscal); Federal Decree-Law n.º 8/2017 (VAT); Cabinet Decision n.º 57/2020, alterada pela n.º 98/2024 (Economic Substance Regulations); Federal Decree-Law n.º 41/2022 (Estatuto Pessoal Civil para não muçulmanos).",
        desc: `Os Emirados <strong>não têm imposto de renda sobre pessoas físicas</strong> em nenhuma categoria: salários, dividendos recebidos, ganho de capital pessoal, juros e aluguéis recebidos fora de atividade empresarial. Também não há imposto sobre <strong>herança, doação ou patrimônio líquido</strong>.

Não se trata de um regime opcional: não há cadastro, opção nem declaração anual de imposto de renda pessoal. Não existe, até esta edição, proposta ou decisão oficial anunciando a criação de imposto de renda pessoal.

<strong>O que existe:</strong> VAT de 5%; <strong>Corporate Tax de 9%</strong> sobre lucro tributável acima de AED 375.000 — que alcança também a <strong>pessoa natural com receita de negócio superior a AED 1.000.000/ano</strong>; taxa municipal de habitação de 5% sobre o aluguel anual residencial em Dubai, cobrada mensalmente na conta da DEWA; 4% de transferência no Dubai Land Department mais taxas fixas; excise tax sobre bebidas açucaradas e tabaco; e taxas de turismo hoteleiro.

<strong>Distinção essencial:</strong> visto de residência não é residência fiscal. O visto autoriza a permanência; a residência fiscal é definida pelo Cabinet Decision 85/2022 e é o que a Federal Tax Authority certifica no <strong>Tax Residency Certificate (TRC)</strong>.`,
        kv: [
          { l: "IR pessoal", v: "Inexistente" },
          { l: "Imposto sucessório / doação", v: "Inexistente" },
          { l: "Imposto sobre patrimônio", v: "Inexistente" },
          { l: "Corporate Tax", v: "9% acima de AED 375.000" },
          { l: "CT — pessoa natural", v: "Registro se receita > AED 1M/ano" },
          { l: "VAT", v: "5%" },
          { l: "DMTT (grupos ≥ €750M)", v: "15% desde 1/jan/2025" },
          { l: "Taxa municipal — Dubai", v: "5% do aluguel anual" },
          { l: "Transferência imobiliária (DLD)", v: "4% + taxas fixas" },
          { l: "Câmbio", v: "AED 3,6725/USD desde 2002" },
          { l: "Controle cambial", v: "Inexistente" },
          { l: "Rede de CDTs", v: "137 acordos concluídos" },
        ],
        requirements: [
          "<strong>Residência fiscal</strong> (Cabinet Decision 85/2022) — basta uma das hipóteses: (i) residência habitual e centro de interesses financeiros e pessoais nos EAU; (ii) <strong>183 dias</strong> de presença em período de 12 meses; ou (iii) <strong>90 a 182 dias</strong>, para nacional dos EAU, residente ou cidadão do GCC, <strong>com</strong> moradia permanente ou emprego/negócio no país.",
          "<strong>Emissão do TRC</strong> — visto de residência válido há pelo menos <strong>180 dias</strong>, Emirates ID, contrato de locação ou título de propriedade registrado (<strong>Ejari</strong>), fonte de renda comprovada e relatório de entradas e saídas emitido pela ICP.",
          "<strong>Corporate Tax</strong> — registro obrigatório na Federal Tax Authority para pessoas jurídicas e para pessoas naturais com receita de negócio superior a AED 1.000.000/ano.",
          "<strong>Economic Substance Regulations</strong> — a obrigação de <em>relatório</em> foi abolida para exercícios iniciados a partir de 1/jan/2023 (Cabinet Decision 98/2024, alterando a 57/2020). A exigência de substância permanece, agora dentro do Corporate Tax.",
        ],
        process: [
          {
            step: "Obtenção do visto de residência",
            detail:
              "Por qualquer das vias disponíveis — Golden Visa, Green Visa, visto de empregado patrocinado por empresa, ou visto de investidor vinculado a licença comercial.",
            timing: "Prévio",
          },
          {
            step: "Estabelecimento de moradia e Ejari",
            detail:
              "Registro do contrato de locação (<strong>Ejari</strong>, em Dubai) ou do título de propriedade. É documento exigido para o TRC e integra a demonstração de centro de interesses.",
            timing: "Após a residência",
          },
          {
            step: "Acumulação do período mínimo",
            detail:
              "O TRC para fins de tratado exige visto de residência válido há pelo menos <strong>180 dias</strong> e presença física documentada pelo relatório de entradas e saídas da ICP.",
            timing: "180 dias",
          },
          {
            step: "Pedido do TRC no EmaraTax",
            detail:
              "Conta no portal <strong>EmaraTax</strong> → «Tax Residency Certificate» → escolha da finalidade (tratado específico ou uso doméstico) → upload de passaporte, visto, Emirates ID, Ejari ou título, comprovante de renda e relatório de entradas e saídas da ICP → pagamento da taxa de submissão.\n<em>Nota de verificação: a dispensa de extratos bancários para pessoa física sob tratado não foi confirmada no guia oficial da FTA.</em>",
            timing: "Submissão",
          },
          {
            step: "Emissão do TRC",
            detail:
              "Análise pela Federal Tax Authority e emissão eletrônica em <strong>5 a 7 dias úteis</strong> quando o dossiê está completo. Via física opcional, com taxa adicional.",
            timing: "5–7 dias úteis",
          },
          {
            step: "Constituição de estrutura (opcional)",
            detail:
              "<strong>Free zone:</strong> escolha da zona → reserva de nome → aprovação inicial → assinatura de MOA/AOA → contrato de espaço (flexi-desk ou escritório) → emissão da licença → <em>establishment card</em> → alocação de cota de vistos → e-channel → vistos individuais. Prazo típico de 5 a 15 dias úteis.\n<strong>Mainland (DED/DET):</strong> licença emitida pelo departamento econômico do emirado, com Ejari comercial obrigatório. Desde a Lei Federal 26/2020, a maioria das atividades admite 100% de propriedade estrangeira.",
            timing: "5–15 dias úteis",
          },
        ],
        costs: [
          { item: "TRC — submissão", value: "AED 50", note: "≈ USD 14" },
          {
            item: "TRC — emissão com TRN de Corporate Tax",
            value: "AED 500",
            note: "≈ USD 136",
          },
          {
            item: "TRC — pessoa física sem TRN",
            value: "AED 1.000",
            note: "≈ USD 272",
          },
          {
            item: "TRC — pessoa jurídica sem TRN",
            value: "AED 1.750",
            note: "≈ USD 477",
          },
          {
            item: "TRC — cópia impressa (opcional)",
            value: "AED 250",
            note: "≈ USD 68",
          },
          {
            item: "Licença anual RAKEZ (a partir de)",
            value: "≈ AED 10.000",
            note: "Ano 1 típico: AED 18.500–25.000",
          },
          {
            item: "IFZA — formação",
            value: "AED 12.900–18.500",
            note: "Conforme o número de vistos",
          },
          {
            item: "DMCC — licença (a partir de)",
            value: "≈ AED 20.000",
            note: "Ano 1 típico: AED 35.000–55.000+",
          },
          {
            item: "Establishment card",
            value: "≈ AED 1.825",
            note: "≈ USD 497",
          },
          {
            item: "ADGM e DIFC — licença anual",
            value: "A confirmar",
            note: "Regimes de common law; faixas oficiais devem ser consultadas em adgm.com e difc.ae",
          },
          {
            item: "Seguro-saúde — pacote básico federal",
            value: "AED 320/ano",
            note: "≈ USD 87; obrigatório em todo o país desde 1/jan/2025",
          },
          {
            item: "DIFC Wills — Full Will",
            value: "USD 1.400",
            note: "Categoria única: USD 840; atualização anual USD 200",
          },
        ],
        sections: [
          {
            title: "Corporate Tax e o regime de Qualifying Free Zone Person",
            body: `A alíquota de <strong>0%</strong> aplicável a um <strong>Qualifying Free Zone Person (QFZP)</strong> incide apenas sobre <em>qualifying income</em>.

<strong>Qualifying Activities</strong> sob a Ministerial Decision 229/2025: manufatura e processamento de bens; <em>trading</em> de <em>qualifying commodities</em>; detenção de ações e valores mobiliários para investimento; entre outras.

<strong>Excluded Activities:</strong> transações com pessoas naturais (com exceções); atividades bancárias; seguros (salvo resseguro qualificado); financiamento e leasing (salvo hipóteses específicas); propriedade ou exploração de imóveis (com exceções limitadas); e atividades acessórias a essas.

<strong>Teste de <em>de minimis</em>:</strong> a receita não-qualificante não pode exceder o <strong>menor</strong> entre 5% da receita total e AED 5.000.000.

<strong>Consequência do descumprimento:</strong> excedido o <em>de minimis</em> — ou descumprido qualquer outro requisito (substância adequada, contabilidade auditada, preços de transferência, não-opção pelo regime geral) — o QFZP <strong>perde a alíquota de 0% no período fiscal corrente e nos quatro subsequentes</strong>.

<strong>DMTT:</strong> desde 1/jan/2025, grupos com receita consolidada igual ou superior a €750 milhões estão sujeitos ao Domestic Minimum Top-up Tax de <strong>15%</strong>, que prevalece sobre o 0% do QFZP nesses grupos.`,
          },
          {
            title: "Visto, residência fiscal e substância",
            body: `Um Golden Visa <strong>sem presença física, sem moradia e sem centro de interesses não sustenta, isoladamente, uma alegação de residência fiscal</strong> perante o fisco de origem.

O TRC é o documento que a autoridade estrangeira normalmente exige para aplicar um tratado. Sem ele, a alocação de residência sob o art. 4.º do CDT tende a ser resolvida pelos critérios de desempate: moradia permanente à disposição, centro de interesses vitais, permanência habitual e, por último, nacionalidade.

Há aqui uma tensão estrutural: o Golden Visa é expressamente isento da regra dos 180 dias de ausência justamente porque <strong>não pressupõe presença</strong> — e é essa mesma característica que enfraquece a alegação de residência fiscal. O Green Visa, sujeito à regra dos 180 dias, tende a produzir um histórico de presença mais consistente com a obtenção do TRC.`,
          },
          {
            title: "Sucessão e direito de família",
            body: `Para muçulmanos, aplica-se a Sharia.

Para <strong>não muçulmanos</strong>, o <strong>Decreto-Lei Federal n.º 41/2022 sobre Estatuto Pessoal Civil</strong>, em vigor desde <strong>1/fev/2023</strong>, rege casamento, divórcio, herança, testamentos e filiação — salvo se o interessado invocar a lei de seu país de origem.

<strong>Na ausência de testamento:</strong> metade ao cônjuge e metade dividida igualmente entre os filhos, sem distinção de sexo; não havendo filhos, aos pais.

<strong>DIFC Wills Service Centre:</strong> registro de testamento que cobre ativos nos sete emirados, aberto a não muçulmanos residentes ou não residentes. <em>Full Will</em>: USD 1.400. Testamentos de categoria única (imóveis, participações societárias, ativos financeiros, guarda de menores): USD 840 cada. Atualização anual: USD 200. Honorários de redação à parte, tipicamente AED 3.000–10.000. Abu Dhabi mantém registro equivalente no ADJD.

<em>Nota de verificação:</em> referências correntes a uma «Lei 15/2020» em matéria sucessória não foram confirmadas — o instrumento operativo é o Decreto-Lei 41/2022.`,
          },
          {
            title: "Repatriação de capital e regras cambiais",
            body: `Não há controles cambiais nem restrições à remessa de lucros ou à repatriação de capital.

O dirham está atrelado ao dólar em <strong>AED 3,6725/USD</strong> desde 2002, com o Banco Central dos EAU reafirmando a manutenção da paridade fixa.

<strong>Declaração alfandegária obrigatória</strong> de numerário, cheques, metais e pedras preciosas acima de <strong>AED 60.000</strong>, tanto na entrada quanto na saída do país.`,
          },
        ],
        brazilNote: `<strong>CDT Brasil–EAU: existe e está em vigor.</strong> Assinado em Brasília em 12/nov/2018; aprovado pelo Decreto Legislativo n.º 4/2021; promulgado pelo <strong>Decreto n.º 10.705, de 26/mai/2021</strong>; vigência internacional desde <strong>15/mar/2021</strong> (art. 31). Cobre, no Brasil, IRPJ, IRPF e CSLL; nos EAU, <em>income tax</em> e <em>corporate tax</em>.

<strong>Limites de tributação na fonte:</strong> dividendos reduzidos a <strong>5%</strong> para beneficiário efetivo qualificado (15% nos demais casos); juros a <strong>10%</strong> em empréstimos de prazo igual ou superior a 5 anos concedidos a bancos para aquisição de equipamentos ou projetos de investimento (regra geral de 15%); royalties e serviços técnicos a <strong>15%</strong>. A Convenção contém <strong>cláusula de limitação de benefícios (LOB)</strong>, que nega o tratado quando um dos propósitos principais da sociedade ou de sua condução for obter benefício em proveito de não residente nos EAU. <em>Nota de verificação: a data exata de produção de efeitos e o texto literal das alíquotas devem ser lidos no Decreto 10.705/2021 antes de qualquer cálculo.</em>

<strong>Lista da IN RFB 1.037/2010 — mudança decisiva.</strong> Os Emirados foram <strong>excluídos</strong> da lista de jurisdições com tributação favorecida pela <strong>Instrução Normativa RFB n.º 2.265, de 9/mai/2025, publicada em 13/mai/2025</strong>. A base legal é o art. 24-C da Lei 9.430/1996, incluído pela Lei n.º 15.079/2024, que permite excluir país que promova desenvolvimento nacional mediante investimentos significativos. A mesma IN reduziu de 20% para <strong>17%</strong> a alíquota mínima de referência.
<strong>Consequências:</strong> fim da alíquota de 25% de IRRF do art. 8.º da Lei 9.779/1999; fim da presunção agravada em preços de transferência; e fim do enquadramento automático como «controlada» para fins da Lei 14.754/2023.
<strong>Duas ressalvas:</strong> (a) a exclusão foi concedida sob condição de plano de investimento e é, por natureza, <strong>reversível</strong>; (b) resta verificar, no texto consolidado da IN 1.037/2010, se algum regime de <em>free zone</em> dos EAU permanece listado no art. 2.º como <em>regime fiscal privilegiado</em>. Materiais em português que ainda tratam os EAU como paraíso fiscal estão desatualizados desde 13/mai/2025.

<strong>Lei 14.754/2023.</strong> Vigente desde 1/jan/2024, regulamentada pela IN RFB 2.180/2024. Tributa a <strong>15%</strong>, anualmente e independentemente de distribuição, os lucros de entidades controladas no exterior por pessoa física residente no Brasil, quando a entidade (a) esteja em jurisdição com tributação favorecida ou goze de regime fiscal privilegiado, <strong>ou</strong> (b) apure renda ativa própria inferior a <strong>60%</strong> da renda total.
<strong>Efeito prático da exclusão da lista:</strong> o gatilho (a) deixou de operar automaticamente para os EAU, e a análise passa a recair sobre o <strong>teste de renda ativa inferior a 60%</strong>. Uma FZCO de natureza <em>holding</em>, cuja receita seja majoritariamente dividendos, juros e royalties, tende a cair no gatilho (b) e a ser tributada anualmente a 15% no Brasil — a mudança de lista <strong>não neutraliza</strong> a Lei 14.754. <em>Trusts</em> com <em>settlor</em> residente no Brasil permanecem transparentes, com bens e rendimentos atribuídos ao <em>settlor</em> até a distribuição.

<strong>Saída fiscal.</strong> Comunicação de Saída Definitiva do País até o último dia de fevereiro do ano seguinte ao da saída, e Declaração de Saída Definitiva do País até o último dia útil de abril do ano seguinte, nos termos da <strong>IN SRF n.º 208/2002</strong>. A ausência por mais de 12 meses consecutivos sem comunicação também caracteriza a não residência, com prazo de 30 dias a contar do 12.º mês. Sem a formalização, a pessoa permanece residente fiscal no Brasil, tributada em bases universais.

<strong>CRS.</strong> O Brasil participa do Common Reporting Standard desde 2018; os EAU assumiram compromisso de primeira troca em 2018, relativa a dados de 2017. <em>Nota de verificação: a ativação bilateral específica Brasil–EAU na matriz do MCAA da OCDE e o ano da primeira troca efetiva devem ser conferidos no portal da OCDE.</em> Independentemente disso, o CDT contém cláusula de troca de informações a pedido.

<strong>Obrigações acessórias.</strong> Contas e participações societárias nos EAU são declaráveis no IRPF (ficha de bens e direitos e ficha específica de entidades controladas) e, acima dos limites, na <strong>Declaração de Capitais Brasileiros no Exterior (DCBE)</strong> ao Banco Central.`,
        warning: `A exclusão dos EAU da lista da IN RFB 1.037/2010 é <strong>condicionada e reversível</strong>: foi concedida em contrapartida a um plano de investimentos no Brasil, com fundamento no art. 24-C da Lei 9.430/1996. Estruturas montadas sobre a premissa de permanência indefinida dessa exclusão devem prever o cenário de reinclusão.

A Lei 14.754/2023 <strong>continua a alcançar</strong> holdings dos EAU pelo teste de renda ativa inferior a 60%, mesmo com os Emirados fora da lista — a tributação anual de 15% sobre lucros não distribuídos permanece aplicável a estruturas predominantemente passivas.`,
        sources: [
          {
            t: "Planalto · Decreto n.º 10.705/2021 (CDT Brasil–EAU)",
            u: "http://www.planalto.gov.br/ccivil_03/_ato2019-2022/2021/decreto/d10705.htm",
          },
          {
            t: "Receita Federal · Listas de jurisdições com tributação favorecida atualizadas (IN 2.265/2025)",
            u: "https://www.gov.br/receitafederal/pt-br/assuntos/noticias/2025/maio/listas-de-jurisdicoes-com-tributacao-favorecida-e-de-regimes-fiscais-privilegiados-e-atualizada",
          },
          {
            t: "Ministry of Finance · Ministerial Decision n.º 229/2025 (PDF)",
            u: "https://mof.gov.ae/wp-content/uploads/2025/09/EN-Ministerial-Decision-No.-229-of-2025-Regarding-Qualifying-Activities-and-Excluded-Activities.pdf",
          },
          {
            t: "Federal Tax Authority · Emissão de certificados de residência fiscal",
            u: "https://tax.gov.ae/en/services/issuance.of.tax.certificates.aspx",
          },
          {
            t: "Ministry of Finance · Acordos de dupla tributação dos EAU",
            u: "https://mof.gov.ae/en/public-finance/international-relations/double-taxation-agreements-dtas/",
          },
          {
            t: "Ministry of Finance · Alteração das Economic Substance Regulations",
            u: "https://mof.gov.ae/en/news/ministry-of-finance-announces-amendment-to-cabinet-decision-on-economic-substance-requirements/",
          },
          {
            t: "UAE Legislation · Federal Decree-Law n.º 41/2022 (Estatuto Pessoal Civil)",
            u: "https://uaelegislation.gov.ae/en/legislations/1586/download",
          },
          {
            t: "CBUAE Rulebook · Movimentação transfronteiriça de numerário",
            u: "https://rulebook.centralbank.ae/en/rulebook/2311-cross-border-movement-cash-and-cash-couriers",
          },
          {
            t: "Receita Federal · IN SRF n.º 208/2002",
            u: "http://normas.receita.fazenda.gov.br/sijut2consulta/link.action?idAto=15079&visao=original",
          },
        ],
      },
    ],
    visa: [
      {
        name: "Golden Visa — Residência de Longo Prazo (10 anos)",
        status: "ok",
        legalBasis:
          "Federal Decree-Law n.º 29/2021 sobre Entrada e Residência de Estrangeiros e sua regulamentação (Cabinet Decision n.º 65/2022). Circular federal de fevereiro de 2026 sobre a via imobiliária — número e data oficiais a confirmar. Regime federal de seguro-saúde básico obrigatório desde 1/jan/2025.",
        desc: `Autorização de residência renovável de <strong>10 anos</strong>, sem necessidade de patrocinador local, com Emirates ID de igual validade.

<strong>Característica distintiva:</strong> o Golden Visa <strong>não está sujeito ao cancelamento por permanência superior a 180 dias consecutivos fora do país</strong>. O portal oficial lista expressamente como benefício a possibilidade de permanecer fora «por mais do que o período usual de seis meses». Isso não é uma alteração recente — é isenção existente desde a criação do programa. Vistos de residência comuns permanecem sujeitos à regra dos 180 dias, com serviço de <em>re-entry permit</em> para regularizar ausências mais longas.

<strong>Mudança de fevereiro de 2026 na via imobiliária:</strong> caiu a exigência de pagamento prévio de 50% ou de AED 1.000.000. Imóvel <strong>financiado</strong> passa a qualificar mediante <strong>NOC do banco</strong>, e imóvel <strong>off-plan</strong> qualifica mediante <strong>Oqood</strong>, desde que a avaliação certificada atinja AED 2.000.000. A base passou a ser a avaliação certificada, não o desembolso. Múltiplos imóveis podem ser somados.`,
        kv: [
          { l: "Validade", v: "10 anos, renovável" },
          { l: "Patrocinador local", v: "Dispensado" },
          { l: "Regra dos 180 dias", v: "Não se aplica" },
          { l: "Via imóvel", v: "AED 2.000.000 (avaliação)" },
          { l: "Via depósito / fundo", v: "AED 2.000.000" },
          { l: "Depósito — imobilização", v: "Mínimo 2 anos" },
          { l: "Via empresa", v: "Capital ou participação ≥ AED 2M" },
          { l: "Via tributos pagos", v: "≥ AED 250.000/ano à FTA" },
          { l: "Via empreendedor", v: "Projeto ≥ AED 500.000" },
          { l: "Dependentes", v: "Cônjuge e filhos, sem limite de idade" },
          { l: "Emirates ID", v: "10 anos" },
          { l: "Prazo típico", v: "5–15 dias úteis" },
        ],
        requirements: [
          "<strong>Comuns a todas as vias:</strong> passaporte válido por pelo menos 6 meses; exame médico (sorologia e raio-X de tórax) em centro credenciado; seguro-saúde válido (obrigatório em todo o país desde 1/jan/2025 e verificado na emissão e na renovação); biometria e Emirates ID de 10 anos; certidão de antecedentes e liberação de segurança; comprovante de endereço.",
          "<strong>Via imóvel:</strong> carta do departamento de registro imobiliário (DLD, em Dubai) comprovando titularidade de um ou mais imóveis com valor total igual ou superior a <strong>AED 2.000.000</strong> pela avaliação registrada. Imóvel financiado qualifica com <strong>NOC do banco</strong>; <em>off-plan</em> qualifica com <strong>Oqood</strong>.",
          "<strong>Via depósito ou fundo:</strong> depósito fixo de AED 2.000.000 ou mais em banco nacional dos EAU, <strong>imobilizado por no mínimo 2 anos</strong>, com certificado bancário de bloqueio; ou carta de fundo de investimento credenciado atestando aporte de AED 2.000.000. Capital próprio, não financiado, com prova de origem.",
          "<strong>Via empresa ou sócio:</strong> licença comercial ou industrial válida com capital igual ou superior a AED 2.000.000, ou participação societária de valor equivalente; alternativamente, carta da Federal Tax Authority confirmando pagamento anual de tributos de pelo menos <strong>AED 250.000</strong>. <em>Consta ainda uma via de empresa com receita anual igual ou superior a AED 2.500.000, não confirmada em fonte oficial.</em>",
          "<strong>Via empreendedor (5 ou 10 anos):</strong> projeto de valor igual ou superior a AED 500.000 com aprovação de incubadora credenciada nos EAU, ou PME com receita anual superior a AED 1.000.000, mais carta de auditor e aprovação da autoridade local competente.",
          "<strong>Via talento especializado:</strong> endosso da autoridade setorial competente <strong>antes</strong> da submissão à ICP — Ministério da Saúde (médicos), Conselho dos Cientistas dos EAU (cientistas), Ministério da Economia (inventores), Ministério da Cultura e Juventude (artistas e criativos), Conselho Geral de Esportes (atletas). Executivos e especialistas devem comprovar diploma, contrato e salário mínimo.",
          "<strong>Via estudante ou graduado:</strong> alunos de ensino médio nos EAU com média igual ou superior a 95% (5 anos); graduados de universidades classificadas com GPA elevado (10 anos, extensível aos pais).",
          "<strong>Dependentes:</strong> cônjuge e filhos <strong>sem limite de idade</strong>; pais admitidos mediante comprovação de dependência financeira; empregados domésticos em número limitado.",
        ],
        process: [
          {
            step: "Aquisição e registro do imóvel (via imobiliária)",
            detail:
              "Pagamento no <em>trustee office</em> e emissão do <strong>title deed</strong> pelo Dubai Land Department — ou do <strong>Oqood</strong>, no caso de imóvel <em>off-plan</em>.",
            timing: "Ano 0",
          },
          {
            step: "Carta de elegibilidade",
            detail:
              "Em Dubai, solicitada pelo canal do DLD/GDRFA (aplicativos Amer e Dubai REST). Nos demais emirados, pela ICP.",
            timing: "Dias",
          },
          {
            step: "Submissão à ICP ou GDRFA",
            detail:
              "Apresentação do dossiê completo e validação federal — passaporte, verificação de segurança e biometria.",
            timing: "Dias",
          },
          {
            step: "Entry permit ou mudança de status",
            detail:
              "<strong>Entry permit</strong> para quem está fora do país, ou <strong>status change</strong> para quem já está nos EAU. Validade de 60 dias.",
            timing: "60 dias de validade",
          },
          {
            step: "Exame médico e biometria",
            detail:
              "Sorologia e raio-X de tórax em centro credenciado, seguidos da coleta biométrica para o Emirates ID.",
            timing: "1–3 dias",
          },
          {
            step: "Emissão da residência",
            detail:
              "Estampagem eletrônica da residência e emissão do <strong>Emirates ID de 10 anos</strong>.",
            timing: "5–15 dias úteis no total",
          },
          {
            step: "Renovação",
            detail:
              "Ao fim dos 10 anos, a renovação exige a comprovação de que o requisito da via original permanece atendido.",
            timing: "10 anos",
          },
        ],
        costs: [
          {
            item: "Taxas governamentais — total por via",
            value: "AED 4.600–10.250",
            note: "≈ USD 1.253–2.791; via de depósito bancário no piso, via imobiliária no topo",
          },
          {
            item: "Taxa de solicitação",
            value: "AED 2.150",
            note: "≈ USD 586",
          },
          { item: "Exame médico", value: "AED 700", note: "≈ USD 191" },
          {
            item: "Emirates ID (10 anos)",
            value: "AED 1.153",
            note: "≈ USD 314",
          },
          { item: "Estampagem", value: "AED 500", note: "≈ USD 136" },
          {
            item: "Dependentes — taxas por pessoa",
            value: "AED 7.000–9.000",
            note: "≈ USD 1.906–2.451",
          },
          {
            item: "Seguro-saúde",
            value: "A partir de AED 320/ano",
            note: "Pacote básico federal; planos amplos a partir de AED 3.000",
          },
          {
            item: "DLD — transferência imobiliária",
            value: "4% do valor",
            note: "Mais AED 4.000 de trustee e AED 250 de title deed",
          },
          {
            item: "Oqood (off-plan)",
            value: "AED 4.020",
            note: "≈ USD 1.095",
          },
          {
            item: "PRO / agente",
            value: "AED 3.000–15.000",
            note: "Faixa de mercado, não regulada",
          },
        ],
        sections: [
          {
            title: "Custos recorrentes de manutenção do status",
            body: `Seguro-saúde anual obrigatório; <strong>taxa municipal de habitação de 5%</strong> sobre o aluguel anual residencial em Dubai, cobrada mensalmente na conta da DEWA; <em>service charges</em> do condomínio, no caso de imóvel; e renovação do Emirates ID no fim do período.

Para a via de depósito bancário, o capital deve permanecer <strong>imobilizado por no mínimo 2 anos</strong>. Para a via imobiliária, a manutenção da titularidade é condição de renovação.`,
          },
          {
            title: "Sucessão do imóvel nos EAU",
            body: `O imóvel situado nos Emirados integra o espólio regido pelo <strong>Decreto-Lei Federal n.º 41/2022</strong> (Estatuto Pessoal Civil para não muçulmanos), salvo invocação da lei do país de origem.

O mecanismo usual de destinação é o registro de <strong>Property Will</strong> no DIFC Wills Service Centre, ao custo de USD 840 para testamento de categoria única — ou USD 1.400 para o <em>Full Will</em>, que cobre todas as categorias de ativos nos sete emirados.`,
          },
        ],
        brazilNote: `<strong>O Golden Visa, isoladamente, não encerra a residência fiscal brasileira.</strong> Sem a Comunicação e a Declaração de Saída Definitiva do País (IN SRF 208/2002), o titular continua tributado em bases universais no Brasil — inclusive sobre o ganho de capital na venda do imóvel nos EAU e sobre os rendimentos de aluguel —, com o CDT operando apenas como mecanismo de crédito e alocação.

<strong>Obrigações declaratórias:</strong> a aquisição do imóvel deve constar da Declaração de Bens e Direitos do IRPF pelo custo de aquisição em reais e, se o valor superar os limites vigentes, da <strong>Declaração de Capitais Brasileiros no Exterior (DCBE)</strong> ao Banco Central. As remessas para a compra seguem o regime cambial ordinário.

<strong>Efeito da IN RFB 2.265/2025:</strong> com a exclusão dos EAU da lista de jurisdições com tributação favorecida, deixou de incidir automaticamente a alíquota de 25% de IRRF sobre remessas e caiu a presunção agravada em preços de transferência. A exclusão é, contudo, <strong>condicionada e reversível</strong>.

<strong>Ponto de atenção:</strong> a natureza do Golden Visa — que dispensa presença física — é justamente o que enfraquece a alegação de residência fiscal nos EAU perante a Receita Federal. Quem pretende invocar o CDT precisa de <strong>TRC emitido pela FTA</strong>, que por sua vez exige presença efetiva, moradia registrada (Ejari) e centro de interesses nos Emirados.`,
        sources: [
          {
            t: "u.ae · Long-term residence visas in the UAE",
            u: "https://u.ae/en/information-and-services/visa-and-emirates-id/residence-visa/long-term-residence-visas-in-the-uae",
          },
          {
            t: "u.ae · Golden visa",
            u: "https://u.ae/en/information-and-services/visa-and-emirates-id/residence-visas/golden-visa",
          },
          {
            t: "ICP · Golden Residency",
            u: "https://icp.gov.ae/en/golden-residency/",
          },
          {
            t: "ADDED · Abu Dhabi Golden Visa — investidores não imobiliários",
            u: "https://www.added.gov.ae/en/live/long-term-residency/abu-dhabi-golden-visa/Investors/visa-for-non-real-estate-investors",
          },
          {
            t: "Ministry of Economy & Tourism · Golden Visa para investidor em investimentos públicos",
            u: "https://www.moet.gov.ae/en/-/what-are-the-requirements-for-issuing-a-golden-visa-to-an-investor-in-public-investments-",
          },
          {
            t: "MOHRE · Basic Health Insurance Scheme",
            u: "https://mohre.gov.ae/en/guidance-and-awareness-portal-new/the-basic-health-insurance-scheme",
          },
        ],
      },
      {
        name: "Green Visa — Residência de 5 anos sem patrocinador",
        status: "ok",
        legalBasis:
          "Federal Decree-Law n.º 29/2021 e Cabinet Decision n.º 65/2022 (Green Residence, disposições relativas a trabalhadores autônomos e qualificados); regulamentação do MOHRE sobre <em>self-employment</em> e níveis ocupacionais; Federal Decree-Law n.º 47/2022 (Corporate Tax aplicável a pessoa natural); regime federal de seguro-saúde básico.",
        desc: `Residência de <strong>5 anos</strong> que <strong>dispensa patrocinador ou empregador</strong>, destinada a trabalhadores autônomos e a empregados qualificados.

Permite ao titular patrocinar cônjuge, filhos (filhos homens até 25 anos; filhas sem limite de idade) e pais. Concede <strong>período de graça de 6 meses</strong> após o cancelamento ou a expiração.

<strong>Diferença material em relação ao Golden Visa:</strong> o Green Visa <strong>está sujeito</strong> à regra de cancelamento por permanência superior a 180 dias consecutivos fora dos Emirados. Existe serviço de <em>re-entry permit</em> para ausências acima de 6 meses.

<strong>Migração para o Golden Visa</strong> exige nova solicitação independente — não há conversão automática.`,
        kv: [
          { l: "Validade", v: "5 anos" },
          { l: "Patrocinador", v: "Dispensado" },
          { l: "Regra dos 180 dias", v: "Aplica-se" },
          { l: "Autônomo — renda mínima", v: "AED 360.000/ano" },
          { l: "Autônomo — histórico", v: "2 anos anteriores" },
          { l: "Empregado — nível MOHRE", v: "1, 2 ou 3" },
          { l: "Dependentes", v: "Cônjuge, filhos e pais" },
          { l: "Filhos homens", v: "Até 25 anos" },
          { l: "Filhas", v: "Sem limite de idade" },
          { l: "Período de graça", v: "6 meses" },
          { l: "Prazo típico", v: "10–20 dias úteis" },
        ],
        requirements: [
          "<strong>Autônomo / freelancer:</strong> licença de trabalho autônomo ou permissão de <em>self-employment</em> emitida pelo <strong>MOHRE</strong>; diploma de bacharelado, diploma especializado ou equivalente; e <strong>renda anual não inferior a AED 360.000</strong> proveniente da atividade autônoma em cada um dos dois anos anteriores — ou comprovação de solvência financeira para o período de residência.",
          "<strong>Empregado qualificado:</strong> contrato de trabalho válido; classificação nos <strong>níveis ocupacionais 1, 2 ou 3 do MOHRE</strong>; bacharelado ou equivalente. <em>Fontes secundárias indicam salário mínimo de AED 15.000/mês; esse valor não foi confirmado em fonte oficial e deve ser verificado em icp.gov.ae.</em>",
          "<strong>Comuns:</strong> exame médico, seguro-saúde válido, Emirates ID de 5 anos e certidão de antecedentes.",
          "<strong>Presença:</strong> o visto é cancelado por permanência superior a 180 dias consecutivos fora dos EAU, salvo <em>re-entry permit</em>.",
        ],
        process: [
          {
            step: "Obtenção da licença ou do contrato",
            detail:
              "Licença ou permissão de <em>self-employment</em> do MOHRE, no caso do autônomo; contrato de trabalho registrado, no caso do empregado qualificado.",
            timing: "Prévio",
          },
          {
            step: "Submissão à ICP",
            detail:
              "Apresentação à ICP ou à autoridade de residência do emirado, com <strong>diploma atestado</strong> (consulado dos EAU no país de origem e, depois, MOFA nos Emirados) e comprovantes de renda dos dois anos anteriores.",
            timing: "Dias",
          },
          {
            step: "Entry permit ou mudança de status",
            detail:
              "Emissão do <em>entry permit</em> para quem está fora do país, ou mudança de status para quem já está nos EAU.",
            timing: "Dias",
          },
          {
            step: "Exame médico e biometria",
            detail:
              "Exame médico em centro credenciado e coleta biométrica para o Emirates ID.",
            timing: "1–3 dias",
          },
          {
            step: "Emissão da residência",
            detail:
              "Emissão do Emirates ID de <strong>5 anos</strong> e estampagem eletrônica da residência.",
            timing: "10–20 dias úteis no total",
          },
          {
            step: "Renovação",
            detail:
              "Ao 5.º ano, a renovação exige a recomprovação integral dos requisitos — licença, qualificação e renda.",
            timing: "5 anos",
          },
        ],
        costs: [
          {
            item: "Permissão de freelance / self-employment (MOHRE)",
            value: "A confirmar",
            note: "Faixa praticada no mercado de AED 7.500–20.000/ano, conforme a autoridade emissora (MOHRE, GoFreelance/TECOM, free zones) — não confirmada em fonte oficial",
          },
          {
            item: "Visto e Emirates ID (5 anos)",
            value: "AED 3.000–5.000",
            note: "≈ USD 817–1.362; conjunto entry permit + médico + EID + estampagem",
          },
          { item: "Exame médico", value: "AED 700", note: "≈ USD 191" },
          {
            item: "Seguro-saúde",
            value: "A partir de AED 320/ano",
            note: "Pacote básico federal",
          },
          {
            item: "Atestação de diploma",
            value: "AED 1.500–3.000",
            note: "Valor de mercado, não confirmado em fonte oficial",
          },
          {
            item: "Ejari residencial",
            value: "≈ AED 220",
            note: "Obrigatório para patrocinar dependentes; valor não confirmado em fonte oficial",
          },
        ],
        sections: [
          {
            title: "Green e Golden na ótica da residência fiscal",
            body: `O <strong>Green Visa</strong> exige presença efetiva — pela regra dos 180 dias — e recomprovação periódica de renda. O <strong>Golden Visa</strong> não exige nenhuma das duas coisas.

Para quem efetivamente transfere o centro de vida para os Emirados, o Green tende a produzir um <strong>histórico de presença mais consistente</strong> com os requisitos do TRC: visto válido há pelo menos 180 dias, Ejari registrado e relatório de entradas e saídas da ICP demonstrando permanência.`,
          },
          {
            title: "Renda de freelancer e Corporate Tax",
            body: `A pessoa natural com <strong>receita de negócio acima de AED 1.000.000/ano</strong> no ano-calendário fica sujeita a registro na Federal Tax Authority e ao <strong>Corporate Tax de 9%</strong> sobre a parcela do lucro tributável que exceder AED 375.000.

O patamar de renda de <strong>AED 360.000</strong> exigido pelo Green Visa para autônomos situa-se abaixo do limiar de registro — mas a <strong>soma de todas as fontes de receita de negócio</strong> deve ser monitorada, já que é o total que determina a obrigação.`,
          },
        ],
        brazilNote: `O titular de Green Visa que passa a residir efetivamente nos Emirados deve formalizar a saída fiscal brasileira: <strong>Comunicação</strong> até o último dia de fevereiro do ano seguinte ao da saída e <strong>Declaração de Saída Definitiva</strong> até o último dia útil de abril do ano seguinte.

Enquanto permanecer residente fiscal no Brasil, a renda de freelancer auferida nos EAU é tributável pelo <strong>carnê-leão</strong> a alíquotas progressivas de até 27,5%, com eventual crédito sob o CDT (Decreto 10.705/2021) — cuja aplicação depende de <strong>TRC emitido pela FTA</strong>.

Conta bancária nos Emirados é reportável no IRPF e, acima dos limites, na <strong>DCBE</strong> ao Banco Central. Aplicam-se o CRS e a Lei 14.754/2023 nos mesmos termos descritos no dossiê fiscal: com os EAU fora da lista da IN 1.037/2010 desde a IN 2.265/2025, o enquadramento de uma eventual entidade dos Emirados como controlada passa a depender do <strong>teste de renda ativa inferior a 60%</strong>.`,
        sources: [
          {
            t: "u.ae · Green visa",
            u: "https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/Investor-visa/Green-visa",
          },
          {
            t: "ICP · UAE Green Residency",
            u: "https://icp.gov.ae/en/services/uae-green-residency/",
          },
          {
            t: "Receita Federal · IN SRF n.º 208/2002",
            u: "http://normas.receita.fazenda.gov.br/sijut2consulta/link.action?idAto=15079&visao=original",
          },
          {
            t: "Receita Federal · Acordos para intercâmbio de informações",
            u: "https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/legislacao/acordos-internacionais/acordos-para-intercambio-de-informacoes-relativas-a-tributos/acordos-para-intercambio-de-informacoes-relativas-a-tributos",
          },
        ],
      },
    ],
  },
  us: {
    id: "us",
    flagCode: "us",
    name: "Estados Unidos",
    region: "Américas",
    alert: true,
    sumFiscal: "Tributação por cidadania · estate tax de USD 60k",
    sumFS: "risk",
    sumVisa: "EB-5 USD 800k · EB-1A · EB-2 NIW · Gold Card",
    sumVS: "new",
    fiscal: [
      {
        name: "Residência fiscal — green card test e substantial presence test",
        status: "ok",
        legalBasis:
          "<strong>IRC §7701(b)</strong> — <em>Definition of resident alien and nonresident alien</em> (26 U.S.C. §7701(b)). <strong>Treas. Reg. §301.7701(b)-1 a -9</strong> (26 C.F.R.). IRS: <em>Determining an individual's tax residency status</em> e <em>Substantial Presence Test</em>.",
        desc: `Uma pessoa física estrangeira é <strong>resident alien</strong> — tributada sobre <strong>renda mundial</strong>, como um cidadão — se satisfizer <strong>qualquer um</strong> dos dois testes:

<strong>(a) Green Card Test</strong> — IRC §7701(b)(1)(A)(i). Ser <em>lawful permanent resident</em> em qualquer momento do ano-calendário. O status fiscal começa no primeiro dia de presença física nos EUA na condição de LPR e <strong>persiste até que o green card seja formalmente abandonado (Form I-407), revogado, ou administrativa ou judicialmente determinado como abandonado</strong>. <strong>Morar fora dos EUA não encerra automaticamente a obrigação fiscal.</strong>

<strong>(b) Substantial Presence Test (SPT)</strong> — IRC §7701(b)(3). Cumulativamente:
· <strong>31 dias ou mais</strong> de presença física no ano-calendário corrente; <strong>e</strong>
· <strong>183 dias ou mais</strong> na soma ponderada de três anos: ano corrente × <strong>1</strong>; ano anterior × <strong>1/3</strong>; segundo ano anterior × <strong>1/6</strong>.

<strong>Regra prática derivada:</strong> uma permanência estável de <strong>até 121 dias por ano</strong> mantém o total ponderado abaixo de 183 (121 + 40,33 + 20,17 = 181,5). <strong>A partir de 122 dias por ano constantes, o teste é satisfeito.</strong>`,
        kv: [
          { l: "Green card", v: "Residência fiscal imediata" },
          { l: "SPT — ano corrente", v: "Peso 1" },
          { l: "SPT — ano anterior", v: "Peso 1/3" },
          { l: "SPT — segundo ano anterior", v: "Peso 1/6" },
          { l: "Limiar do SPT", v: "183 dias ponderados" },
          { l: "Presença segura estável", v: "Até 121 dias/ano" },
          { l: "Closer connection", v: "Só se < 183 dias efetivos" },
          { l: "Form 8840", v: "Prazo do 1040-NR" },
          { l: "Form 8843", v: "Dias de exempt individual" },
          { l: "Tie-breaker de tratado", v: "Indisponível ao Brasil" },
        ],
        requirements: [
          "<strong>Para permanecer NRA:</strong> não deter green card em nenhum dia do ano.",
          "Manter <strong>dias ponderados abaixo de 183</strong> — planilha de contagem por <strong>ano-calendário</strong>, não por ano fiscal.",
          "Se ultrapassar 183 ponderados: presença no ano corrente <strong>inferior a 183 dias efetivos</strong> e protocolo do <strong>Form 8840</strong>.",
          "Documentar entradas e saídas — registos <strong>I-94</strong> do CBP, cartões de embarque, extratos.",
          "Não realizar eleição de residência — §7701(b)(4) (<em>first-year election</em>) ou §6013(g) (<em>joint election</em>).",
          "<strong>Closer connection (IRC §7701(b)(3)(B) e (C); Treas. Reg. §301.7701(b)-2):</strong> presença nos EUA <strong>inferior a 183 dias no ano-calendário corrente</strong> — a exceção é <strong>indisponível a partir de 183 dias efetivos</strong>.",
          "<strong>Closer connection:</strong> manter <em>tax home</em> (IRC §911(d)(3)) em país estrangeiro durante todo o ano.",
          "<strong>Closer connection:</strong> demonstrar vínculo mais estreito com esse país (ou com dois países, sob a regra especial do §301.7701(b)-2(f)) — avaliado por domicílio permanente, localização da família, bens pessoais, filiações sociais, políticas, culturais e religiosas, local de atividade económica, jurisdição da carteira de motorista, país de registo eleitoral, e país declarado como residência em formulários e contratos.",
          "<strong>Closer connection:</strong> <strong>não</strong> ter requerido, nem ter pendente, pedido de green card — a solicitação de LPR, ou passos nessa direção, afasta a exceção (§7701(b)(3)(C)).",
        ],
        process: [
          {
            step: "Contagem e documentação dos dias",
            detail:
              "Planilha por ano-calendário, com registos I-94 do CBP, cartões de embarque e extratos. A contagem ponderada de três anos deve ser refeita a cada ano.",
            timing: "Contínua",
          },
          {
            step: "Form 8843 — dias de exempt individual",
            detail:
              "<em>Statement for Exempt Individuals and Individuals With a Medical Condition</em>. Veículo declaratório dos dias que <strong>não contam</strong>: portador de visto <strong>A/G</strong> (diplomata ou organismo internacional); <strong>F/J/M/Q</strong> (estudante — até 5 anos-calendário; professor ou pesquisador J/Q — 2 de 6 anos); atleta profissional em evento beneficente; dias em que a pessoa não pôde sair por <strong>condição médica surgida nos EUA</strong>; dias de trânsito (menos de 24h) entre dois pontos fora dos EUA; e <em>commuters</em> regulares do Canadá e do México.\n<strong>A falta de protocolo pode implicar contagem dos dias.</strong>",
            timing: "Anual",
          },
          {
            step: "Form 8840 — closer connection",
            detail:
              "Anexo ao <strong>Form 1040-NR</strong>, se houver obrigação de declarar; ou envio isolado ao IRS, se não houver 1040-NR devido. <em>Endereço de protocolo isolado a confirmar nas instruções vigentes do formulário.</em>",
            timing: "15/abr, 15/jun ou 15/out",
          },
          {
            step: "Prazo do 1040-NR",
            detail:
              "<strong>15 de abril</strong> se houver salário sujeito a retenção; <strong>15 de junho</strong> se não houver salário; extensão até <strong>15 de outubro</strong> via Form 4868.",
            timing: "Anual",
          },
        ],
        costs: [
          { item: "Form 8840", value: "Sem taxa" },
          { item: "Form 8843", value: "Sem taxa" },
          { item: "Form 1040-NR", value: "Sem taxa" },
          {
            item: "Custo da perda do status de NRA",
            value: "Tributação mundial",
            note: "Renda, herança e doação sobre patrimônio global, mais o pacote declaratório completo",
          },
        ],
        sections: [
          {
            title: "Data de início e término da residência",
            body: `<strong>Início</strong> (§7701(b)(2)(A)): primeiro dia de presença física no ano em que o SPT é satisfeito, com regra de <em>de minimis</em> de até <strong>10 dias</strong> desconsiderados, se houver <em>closer connection</em> nesse período.

<strong>Término</strong> (§7701(b)(2)(B)): último dia de presença, desde que no restante do ano haja <em>closer connection</em> com país estrangeiro e nenhuma residência no ano seguinte.

<strong>Dual-status return:</strong> no ano de entrada ou de saída, declara-se parte do ano como NRA e parte como <em>resident</em> — 1040 com anexo 1040-NR, ou vice-versa. <strong>Não se permite <em>married filing jointly</em></strong> no ano de <em>dual-status</em>, salvo eleição §6013(g) ou (h).`,
          },
          {
            title: "Por que o Form 8840 é a única saída para o brasileiro",
            body: `Como <strong>não há tratado de renda entre Brasil e Estados Unidos</strong>, <strong>não existe cláusula de <em>tie-breaker</em> de residência</strong> disponível ao brasileiro.

O <strong>Form 8840</strong> é o <strong>único mecanismo doméstico de desempate</strong>.

Nacionais de países com tratado dispõem, adicionalmente, do <strong>Form 8833</strong> (<em>treaty-based return position</em>) — via <strong>indisponível ao residente do Brasil</strong>.

<strong>Consequência do protocolo intempestivo:</strong> o Form 8840 <strong>não pode ser protocolado após o vencimento</strong> do 1040-NR correspondente, incluídas as extensões. A perda do prazo pode implicar tratamento como <em>resident alien</em>, com tributação mundial, salvo demonstração de <em>reasonable cause</em> (Treas. Reg. §301.7701(b)-8).`,
          },
        ],
        brazilNote: `<strong>O brasileiro que cruza o SPT sem perceber é o cenário mais comum e mais caro deste dossiê.</strong> A contagem ponderada de três anos surpreende quem raciocina apenas com «menos de 183 dias por ano»: alguém que passe 150 dias por ano nos EUA satisfaz o teste no terceiro ano (150 + 50 + 25 = 225).

<strong>Sem tratado, sem tie-breaker.</strong> Se o Brasil e os Estados Unidos considerarem a pessoa residente simultaneamente, não há regra convencional de desempate. O alívio depende do Form 8840 — que exige presença inferior a 183 dias efetivos no ano — e, no Brasil, do crédito por reciprocidade.

<strong>Green card holder residindo no Brasil</strong> é o cenário de atrito máximo: US person por green card (renda mundial para o IRS) e residente fiscal brasileiro (renda mundial para a RFB), sem tie-breaker. Os alívios disponíveis são o <em>Foreign Tax Credit</em> (Form 1116) e o FEIE (Form 2555) do lado americano, e o crédito por reciprocidade (ADI SRF 28/2000) do lado brasileiro — este último <strong>rendimento a rendimento</strong>, sem <em>pooling</em>.

<strong>Riscos residuais nesse cenário:</strong> (i) diferença de ano-base e de regime de caixa ou competência; (ii) rendimentos <strong>isentos no Brasil e tributáveis nos EUA</strong> — dividendos brasileiros, ganho em bolsa até R$ 20.000/mês, poupança, LCI e LCA — que geram imposto americano <strong>sem crédito brasileiro correspondente</strong>; (iii) regime PFIC sobre fundos brasileiros; (iv) o pacote FBAR, 8938, 5471 e 3520; e (v) <em>state income tax</em>, que <strong>não é creditável</strong> no Brasil.`,
        sources: [
          {
            t: "IRS · Substantial Presence Test",
            u: "https://www.irs.gov/individuals/international-taxpayers/substantial-presence-test",
          },
          {
            t: "IRS · Determining an individual's tax residency status",
            u: "https://www.irs.gov/individuals/international-taxpayers/determining-an-individuals-tax-residency-status",
          },
          {
            t: "Cornell LII · 26 U.S. Code §7701(b)",
            u: "https://www.law.cornell.edu/uscode/text/26/7701",
          },
          {
            t: "IRS · Form 8840 — Closer Connection Exception Statement for Aliens",
            u: "https://www.irs.gov/forms-pubs/about-form-8840",
          },
          {
            t: "IRS · Publication 519 — U.S. Tax Guide for Aliens",
            u: "https://www.irs.gov/forms-pubs/about-publication-519",
          },
        ],
      },
      {
        name: "Tributação do não residente — FDAP, ECI e a isenção de ganho de capital",
        status: "ok",
        legalBasis:
          "<strong>IRC §871(a)</strong> — imposto de 30% sobre FDAP. <strong>IRC §871(b)</strong> e <strong>§864(c)</strong> — ECI, alíquotas progressivas sobre lucro líquido. <strong>IRC §1441</strong> — retenção na fonte sobre pagamentos a estrangeiros; §1442 para corporações. <strong>IRS Publication 519</strong> e <strong>Publication 515</strong>. Formulários: 1040-NR, Schedule NEC, W-8BEN, 1042-S, 1042.",
        desc: `O não residente é tributado por dois regimes distintos e mutuamente excludentes.

<strong>FDAP — <em>Fixed, Determinable, Annual or Periodical income</em>:</strong> alíquota <strong>fixa de 30% sobre o valor bruto</strong>, sem dedução alguma. Retido na fonte pelo <em>withholding agent</em> (§1441) e reportado em <strong>Form 1042-S</strong>. Alcança dividendos de empresas americanas, juros não abrangidos pela <em>portfolio interest exemption</em>, royalties, aluguéis (salvo eleição §871(d)), pensões e prémios. Declarado no <strong>Schedule NEC</strong> do Form 1040-NR.

<strong>Redutível por tratado — mas não para o Brasil: aplica-se 30% cheio.</strong>

<strong>ECI — <em>Effectively Connected Income</em>:</strong> renda vinculada a <em>U.S. trade or business</em> (§864(b)-(c)). Tributação por <strong>alíquotas progressivas</strong> — sete faixas de <strong>10% a 37%</strong> em 2026, estrutura tornada permanente pelo <strong>One Big Beautiful Bill Act</strong> (Pub. L. 119-21, de 4/jul/2025), com parâmetros na Rev. Proc. 2025-32 e topo de 37% acima de USD 640.600 para solteiro. Incide <strong>sobre o lucro líquido</strong>, admitindo deduções ordinárias e necessárias. Declarado na página 1 do Form 1040-NR.

<strong>O NRA não tem direito à <em>standard deduction</em></strong> (USD 16.100 para solteiro em 2026 — inaplicável). A exceção histórica prevista em tratado para estudantes da Índia <strong>não se aplica ao Brasil</strong>.`,
        kv: [
          { l: "Dividendos de US corp", v: "30% — sem redução por tratado" },
          { l: "Portfolio interest", v: "0%" },
          { l: "Juros de depósito bancário", v: "0%" },
          { l: "Royalties", v: "30%" },
          { l: "Aluguel bruto (sem eleição)", v: "30% sobre o bruto" },
          { l: "Aluguel com eleição §871(d)", v: "10%–37% sobre o líquido" },
          { l: "Ganho em ações — < 183 dias", v: "0%" },
          { l: "Ganho em ações — ≥ 183 dias", v: "30%" },
          { l: "Ganho em imóvel US", v: "FIRPTA · ECI progressivo" },
          { l: "ECI", v: "10% a 37%" },
          { l: "Standard deduction", v: "Indisponível ao NRA" },
          { l: "NIIT (3,8%)", v: "Não se aplica ao NRA" },
        ],
        requirements: [
          "<strong>Portfolio interest exemption</strong> (IRC §871(h) e §881(c)) — requisitos cumulativos: o <strong>devedor é US person</strong> (ou o juro é de fonte americana); a obrigação está em <strong>forma registada</strong> (<em>registered form</em>, §163(f)) — obrigações ao portador emitidas após 18/mar/2012 não qualificam; o credor entrega <strong>Form W-8BEN</strong> (pessoa física) ou W-8BEN-E (entidade) ao pagador; o credor <strong>não é acionista de 10% ou mais</strong> do devedor (§871(h)(3)); o juro <strong>não é contingente</strong> (§871(h)(4)) — não atrelado a receita, lucro, fluxo de caixa, dividendos, valorização ou variação patrimonial do devedor; o credor <strong>não é banco</strong> recebendo o juro em extensão de crédito no curso ordinário; e o devedor <strong>não é CFC relacionado</strong> ao credor.",
          "<strong>Efeito da portfolio interest:</strong> retenção <strong>zero</strong>; sem Form 1042 ou 1042-S; e, sem outra fonte de renda americana, <strong>não há obrigação de declarar</strong> nos EUA.",
          "<strong>Juros de depósito bancário</strong> (§871(i)(2)(A)) — juros pagos por bancos, associações de poupança e instituições depositárias americanas a NRA <strong>não são tributados</strong>, desde que não conectados a US trade or business. Isenção <strong>distinta</strong> da portfolio interest, e <strong>não exige forma registada</strong>.",
          "<strong>Ganho de capital — regra geral:</strong> ganho de capital de fonte americana não-ECI <strong>é isento</strong> para o NRA presente menos de 183 dias no ano-calendário.",
          "<strong>Ganho de capital — exceção do §871(a)(2):</strong> se o NRA esteve presente <strong>183 dias ou mais no ano-calendário</strong> (aqui a contagem é de <strong>dias efetivos no ano</strong>, não ponderada), os ganhos líquidos de capital de fonte americana são tributados a <strong>30%</strong>, no Schedule NEC, <strong>sem compensação de perdas de outros anos</strong>.",
          "<strong>Ganho de capital — exceção permanente:</strong> USRPI (FIRPTA, §897) é sempre tratado como ECI.",
        ],
        sections: [
          {
            title: "Não incidência de contribuições",
            body: `<strong>Net Investment Income Tax (3,8%, IRC §1411):</strong> por <strong>IRC §1411(e)(1)</strong>, <strong>não se aplica a nonresident aliens</strong>. <em>A citação da subseção deve ser confirmada em law.cornell.edu/uscode/text/26/1411.</em>

<strong>FICA e Medicare:</strong> não incidem sobre NRA sem vínculo empregatício nos EUA. Incidem sobre salário pago nos EUA, com isenções específicas (F/J/M/Q).

<strong>Acordo de Previdência Brasil–EUA:</strong> assinado em 30/jun/2015 em Washington, promulgado pelo <strong>Decreto n.º 9.422, de 25 de junho de 2018</strong>, <strong>em vigor desde 1 de outubro de 2018</strong>. Disciplina a lei aplicável, evita a dupla contribuição previdenciária, e permite <strong>totalização de períodos</strong> — cobre aposentadoria por idade, pensão por morte e aposentadoria por invalidez.`,
          },
          {
            title: "O trade-off estrutural do brasileiro que investe nos EUA",
            body: `Um brasileiro NRA que detenha <strong>ações de empresas americanas</strong> está simultaneamente:
· <strong>isento de imposto de renda americano</strong> sobre o ganho de capital, se presente menos de 183 dias; e
· <strong>exposto a estate tax de até 40%</strong> sobre o mesmo ativo acima de <strong>USD 60.000</strong>, porque ação de US corporation é <em>US situs</em> (§2104(a)).

O mesmo brasileiro que detenha <strong>ETF UCITS irlandês</strong> replicando o S&amp;P 500 está:
· <strong>fora do estate tax americano</strong> (§2105); e
· sujeito à retenção de <strong>15% sobre dividendos</strong> na camada Irlanda–EUA (tratado EUA–Irlanda), com <em>leakage</em> não recuperável no Brasil, em vez dos 30% da retenção direta. <em>Alíquota do tratado EUA–Irlanda a confirmar.</em>

<strong>É a escolha central do desenho da carteira americana para o brasileiro:</strong> exposição direta preserva a isenção de ganho de capital, mas cria exposição sucessória de 40% acima de USD 60.000. A via UCITS elimina a exposição sucessória ao custo de uma camada de retenção sobre dividendos.`,
          },
          {
            title: "Nota sobre o reporte de juros de depósito",
            body: `Desde <strong>2013</strong>, instituições americanas devem reportar em <strong>Form 1042-S</strong> os juros de depósito pagos a residentes de países listados como parceiros de troca automática. A lista foi publicada e atualizada por <em>Revenue Procedures</em> — Rev. Proc. 2012-24 e sucessoras, incluindo a Rev. Proc. 2014-64.

<strong>O Brasil consta dessa lista</strong> — logo, o juro é <strong>isento de imposto, porém reportado</strong>.

<em>A Revenue Procedure mais recente que atualiza as listas do §1.6049-8(a) e do §1.6049-4(b)(5), e a inclusão corrente do Brasil, devem ser confirmadas.</em>`,
          },
        ],
        brazilNote: `<strong>Fluxo Brasil ↔ EUA, sem tratado — o quadro completo:</strong>

· <strong>Dividendos de US corp</strong> → <strong>30%</strong> na fonte nos EUA, sem redução; no Brasil, Carnê-Leão até 27,5% (recebimento direto) ou <strong>15%</strong> se via entidade offshore controlada (Lei 14.754/2023). <strong>Crédito por reciprocidade, limitado ao IR brasileiro do mesmo rendimento</strong> — e, como 30% excede os 27,5% brasileiros, <strong>a diferença é custo definitivo</strong>.
· <strong>Portfolio interest</strong> → 0% nos EUA; <strong>15%</strong> no Brasil (Lei 14.754/2023). Não há crédito, pois não houve imposto americano.
· <strong>Juros de depósito bancário americano</strong> → 0% nos EUA (reportado em 1042-S); 15% no Brasil.
· <strong>US Treasuries</strong> → 0% (portfolio interest); 15% no Brasil.
· <strong>Ganho de capital em ações, com menos de 183 dias</strong> → <strong>0%</strong> nos EUA; 15% no Brasil (Lei 14.754/2023) ou 15%–22,5% (GCAP), conforme a classificação.
· <strong>Ganho de capital em ações, com 183 dias ou mais</strong> → 30% nos EUA; crédito por reciprocidade no Brasil.
· <strong>Aluguel de imóvel americano, sem eleição</strong> → 30% sobre o <strong>bruto</strong> (FDAP); Carnê-Leão no Brasil; crédito limitado.
· <strong>Aluguel com eleição §871(d)</strong> → progressivo sobre o líquido, com depreciação dedutível; Carnê-Leão no Brasil.
· <strong>State income tax</strong> sobre qualquer dos acima → <strong>NÃO é creditável</strong> no Brasil (o ADI SRF 28/2000 exclui tributos estaduais e municipais).

<strong>Cálculo ilustrativo — dividendo de USD 100.000:</strong> retenção americana de USD 30.000 (30%); líquido de USD 70.000; imposto brasileiro pelo Carnê-Leão até USD 27.500 (27,5%); crédito por reciprocidade de até USD 27.500; imposto adicional no Brasil de USD 0; e <strong>excedente de USD 2.500 perdido</strong> — não restituível, não compensável com outros rendimentos, não carregável para anos seguintes.

<strong>A carga efetiva do dividendo americano para o residente brasileiro é a retenção americana de 30%</strong>, superior à alíquota brasileira máxima.

<strong>No sentido inverso — americano investindo no Brasil:</strong> dividendos brasileiros <strong>não são <em>qualified dividends</em></strong> (IRC §1(h)(11)(C)(i)(II) exige tratado abrangente com cláusula de troca de informações), sendo tributados como <strong>renda ordinária, até 37%</strong>, em vez de 0/15/20%. <em>Verificar a lista do IRS de tratados qualificados na Notice 2011-64 e sucessoras.</em>`,
        warning: `<strong>Os 30% de retenção sobre dividendos americanos não são reduzíveis para o residente do Brasil.</strong> Um residente do Reino Unido paga 15%; do México, 10% ou 15%. A ausência de tratado é um custo direto e permanente, não uma formalidade.

E como a alíquota americana (30%) <strong>excede</strong> a brasileira máxima (27,5%), o crédito por reciprocidade <strong>nunca cobre a diferença</strong> — os 2,5 pontos percentuais excedentes são perda definitiva a cada distribuição.`,
        sources: [
          {
            t: "IRS · Taxation of nonresident aliens",
            u: "https://www.irs.gov/individuals/international-taxpayers/taxation-of-nonresident-aliens",
          },
          {
            t: "IRS · Publication 515 — Withholding of Tax on Nonresident Aliens and Foreign Entities",
            u: "https://www.irs.gov/forms-pubs/about-publication-515",
          },
          {
            t: "IRS · Nontaxable types of interest income for nonresident aliens",
            u: "https://www.irs.gov/individuals/international-taxpayers/nontaxable-types-of-interest-income-for-nonresident-aliens",
          },
          {
            t: "IRS · Effectively Connected Income (ECI)",
            u: "https://www.irs.gov/individuals/international-taxpayers/effectively-connected-income-eci",
          },
          {
            t: "Planalto · Decreto n.º 9.422/2018 (Acordo de Previdência Brasil–EUA)",
            u: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/decreto/d9422.htm",
          },
        ],
      },
      {
        name: "Estate & Gift Tax do não domiciliado — a exclusão de USD 60.000",
        status: "risk",
        legalBasis:
          "<strong>IRC §2101</strong> — imposto sucessório sobre o espólio de <em>nonresident not a citizen</em>. <strong>IRC §2102(b)(1)</strong> — <em>unified credit</em> de <strong>USD 13.000</strong>, equivalente a exclusão de <strong>USD 60.000</strong>. <strong>IRC §2001(c)</strong> — tabela progressiva, alíquota marginal máxima de <strong>40%</strong>. <strong>IRC §§2103 a 2106</strong> — base de cálculo, situs e deduções proporcionais. <strong>IRC §2501(a)(2)</strong> — gift tax do NRA restrito a bens tangíveis nos EUA. <strong>IRC §2010(c)(3)(A)</strong> — <em>basic exclusion amount</em> do cidadão ou residente, fixado em <strong>USD 15.000.000</strong> para 2026 pelo <strong>One Big Beautiful Bill Act (Pub. L. 119-21, de 4/jul/2025)</strong>, <strong>sem sunset</strong>, com indexação a partir de 2027.",
        desc: `<strong>O contraste numérico — o dado mais importante deste dossiê:</strong>

| Parâmetro (2026) | Cidadão ou residente domiciliado | <strong>Não residente não domiciliado</strong> |
· Exclusão (estate) → USD <strong>15.000.000</strong> → <strong>USD 60.000</strong>
· Unified credit → ≈USD 5.945.800 <em>(a confirmar)</em> → <strong>USD 13.000</strong>
· Indexação da exclusão → sim, a partir de 2027 → <strong>nenhuma — congelada desde 1988</strong>
· Base tributável → patrimônio <strong>mundial</strong> → apenas <strong>US situs assets</strong>
· Alíquota marginal máxima → 40% → <strong>40%</strong>
· Exclusão <em>lifetime</em> de gift tax → USD 15.000.000 → <strong>zero</strong>
· Exclusão anual de doação, por donatário → USD 19.000 (2026) → <strong>USD 19.000</strong>
· Exclusão anual — cônjuge não-cidadão → USD 194.000 → USD 194.000
· <em>Marital deduction</em> ilimitada → sim, se cônjuge cidadão → <strong>não, salvo QDOT (§2056A)</strong>
· <em>Gift splitting</em> entre cônjuges → sim → <strong>indisponível</strong> se o cônjuge for NRNC
· Tratado sucessório com o Brasil → — → <strong>não existe</strong>

<strong>Razão de proporção: 15.000.000 ÷ 60.000 = 250 vezes.</strong>

<strong>Cálculo ilustrativo.</strong> Brasileiro não domiciliado falece em 2026 titular de <strong>USD 5.000.000 em ações de empresas americanas</strong> custodiadas em corretora nos EUA, sem estrutura: <em>gross estate</em> de 5.000.000, menos exclusão de 60.000, base de 4.940.000, imposto pela tabela do §2001(c) de aproximadamente <strong>USD 1.921.800</strong> <em>(cálculo aproximado, a recalcular pela tabela vigente)</em>. <strong>E não há crédito no Brasil para esse imposto.</strong>`,
        kv: [
          { l: "Exclusão do NRNC", v: "USD 60.000" },
          { l: "Exclusão do cidadão (2026)", v: "USD 15.000.000" },
          { l: "Razão de proporção", v: "250 vezes" },
          { l: "Alíquota marginal máxima", v: "40%" },
          { l: "Indexação da exclusão do NRNC", v: "Nenhuma desde 1988" },
          { l: "Exclusão lifetime de gift tax", v: "Zero" },
          { l: "Exclusão anual por donatário", v: "USD 19.000" },
          { l: "Cônjuge não-cidadão — anual", v: "USD 194.000" },
          { l: "Marital deduction ilimitada", v: "Só com QDOT" },
          { l: "Tratado sucessório com o Brasil", v: "Inexistente" },
          { l: "Form 706-NA", v: "9 meses do óbito" },
          { l: "Transfer Certificate", v: "Meses a anos" },
        ],
        requirements: [
          "<strong>Domicílio para transfer tax ≠ residência para income tax.</strong> Treas. Reg. §20.0-1(b)(1): domicílio é residir no país, ainda que por breve período, <strong>com a intenção de ali permanecer indefinidamente</strong> (<em>animus manendi</em>). É teste <strong>subjetivo e factual</strong>, distinto do SPT.",
          "<strong>Consequência prática:</strong> uma pessoa pode ser <strong>NRA para income tax e, ainda assim, domiciliada para estate tax</strong> — com exposição mundial —, ou o inverso.",
          "<strong>Fatores examinados:</strong> green card, imóvel de residência principal, localização da família, declarações em vistos e testamentos, sepultura, clubes, carteira de motorista, registo eleitoral.",
          "<strong>A obtenção de green card é forte indício de domicílio</strong> — o titular passa, em regra, à exclusão de USD 15.000.000 e à base <strong>mundial</strong>.",
          "<strong>Gift tax do NRNC — assimetria estrutural:</strong> a <strong>doação de bens intangíveis de situs americano não é tributada</strong> (IRC §2501(a)(2)) — ações de empresas americanas, títulos, participações societárias, contas bancárias. A <strong>doação de bens tangíveis situados nos EUA é tributada</strong> — imóveis, obras de arte fisicamente nos EUA, joias, dinheiro em espécie fisicamente nos EUA, veículos.",
          "<strong>Não há exclusão lifetime de gift tax para o NRNC</strong> — apenas a exclusão anual (USD 19.000, ou USD 194.000 para cônjuge não-cidadão).",
          "<strong>Consequência documentada:</strong> ações de empresas americanas <strong>podem ser doadas em vida por NRNC sem gift tax</strong>, mas, se mantidas até a morte, integram o <em>gross estate</em> a 40%. O tratamento diverge radicalmente conforme o evento.",
        ],
        process: [
          {
            step: "Form 706-NA — declaração do espólio",
            detail:
              "Devida quando os <em>US situs assets</em> superam <strong>USD 60.000</strong> no falecimento. Prazo de <strong>9 meses do óbito</strong>, com extensão de 6 meses via Form 4768.",
            timing: "9 meses",
          },
          {
            step: "Form 709 — gift tax",
            detail:
              "Devido na doação de bem <strong>tangível</strong> situado nos EUA acima da exclusão anual. Prazo: 15 de abril do ano seguinte.",
            timing: "15 de abril",
          },
          {
            step: "Transfer Certificate (Form 5173)",
            detail:
              "Documento que libera aos herdeiros os ativos custodiados nos EUA. Emitido após aceitação do 706-NA. <strong>Na prática, meses a anos.</strong>\n<strong>Ponto operacional crítico:</strong> custodiantes e <em>transfer agents</em> americanos costumam <strong>bloquear a transferência dos ativos aos herdeiros até a emissão do Transfer Certificate</strong>, o que prolonga a iliquidez do espólio <strong>independentemente do valor do imposto</strong>.",
            timing: "Meses a anos",
          },
          {
            step: "Form 706-QDT",
            detail: "Declaração anual de distribuições de QDOT.",
            timing: "Anual",
          },
        ],
        costs: [
          {
            item: "Exclusão do não residente não domiciliado",
            value: "USD 60.000",
            note: "Unified credit de USD 13.000; congelada desde 1988",
          },
          {
            item: "Alíquota sobre o excedente",
            value: "Até 40%",
            note: "Tabela progressiva do §2001(c); topo de 40% acima de USD 1.000.000",
          },
          {
            item: "Exclusão anual de doação, por donatário",
            value: "USD 19.000",
            note: "Valor de 2026",
          },
          {
            item: "Exclusão anual — cônjuge não-cidadão",
            value: "USD 194.000",
            note: "Valor de 2026",
          },
          {
            item: "DIFC Wills equivalente nos EUA",
            value: "Não existe",
            note: "O planejamento é feito por estrutura, não por registo de testamento",
          },
        ],
        sections: [
          {
            title: "Situs rules — o mapa dos ativos (estate tax)",
            body: `<strong>Base legal:</strong> IRC §2104 (<em>Property within the United States</em>) e §2105 (<em>Property without</em>); Treas. Reg. §20.2104-1 e §20.2105-1; IRM 4.25.4.

<strong>SÃO US situs:</strong>
· <strong>Ações de corporação americana</strong> — <strong>mesmo que custodiadas fora dos EUA</strong>, mesmo em conta de corretora estrangeira (§2104(a)). Inclui ADRs de <em>US issuer</em> e ações não negociadas;
· <strong>imóvel</strong> localizado nos EUA;
· <strong>bens tangíveis</strong> fisicamente nos EUA — arte, joias, veículo, ouro em cofre;
· <strong>caixa parado em conta de corretora (<em>brokerage</em>) ou <em>money market fund</em></strong> nos EUA — <strong>não é «bank deposit»</strong> para efeito do §2105(b);
· <strong>US mutual funds e ETFs domiciliados nos EUA</strong> (registados como RIC) — são ações de entidade americana;
· seguro de vida sobre a vida de <strong>terceiro</strong>, com apólice detida pelo NRNC <em>(a confirmar)</em>;
· plano de aposentadoria americano — 401k, IRA <em>(a confirmar)</em>.

<strong>NÃO SÃO US situs:</strong>
· ações de corporação <strong>estrangeira</strong> — mesmo que custodiadas nos EUA e mesmo que a empresa detenha só ativos americanos;
· <strong>depósito bancário em banco comercial americano</strong> (conta corrente, poupança, CD), não conectado a US trade or business — <strong>§2105(b)</strong>;
· <em>proceeds</em> de <strong>seguro de vida sobre a vida do próprio NRNC</strong> — §2105(a);
· dívida que se qualifique como <strong>portfolio debt</strong> (§871(h)) — §2105(b)(3);
· <strong>US Treasuries</strong> e obrigações que gerem juros isentos ao NRA, em regra;
· <strong>ETFs irlandeses ou luxemburgueses (UCITS)</strong> com carteira de ações americanas;
· conta bancária em <strong>filial estrangeira</strong> de banco americano.

<strong>Zonas cinzentas:</strong>
· <strong><em>Partnership interest</em></strong> (LLC ou LP americana) — <strong>incerto</strong>; o IRS historicamente sustenta situs americano se a <em>partnership</em> tem US trade or business. Matéria litigiosa;
· <strong>criptoativos</strong> custodiados em <em>exchange</em> americana — <strong>não há regra de situs específica publicada</strong>; posição do IRS não definida.

<strong>Correção a material em circulação:</strong> «dinheiro em conta corrente doméstica» é frequentemente listado entre os US situs assets. <strong>Não é.</strong> Depósito em <strong>banco comercial</strong> americano não é US situs para estate tax (§2105(b)). <strong>É</strong> US situs, contudo, o <strong>caixa mantido em conta de corretora ou money market</strong> — distinção decisiva e frequentemente confundida.

<strong>Situs para GIFT TAX (NRNC):</strong> ações de empresa americana → <strong>NÃO</strong> tributadas (intangível); conta bancária americana → <strong>NÃO</strong> (intangível); <strong>imóvel nos EUA → SIM</strong>; <strong>bens tangíveis nos EUA → SIM</strong>.`,
          },
          {
            title: "Estruturas de blocker corporation e QDOT",
            body: `<em>Descrição técnica de estruturas documentadas na literatura fiscal americana. Não constitui recomendação — cada estrutura tem custo de compliance, exposição a regras anti-abuso e efeitos colaterais de income tax que devem ser avaliados caso a caso.</em>

<strong>Foreign blocker corporation.</strong> O NRNC constitui sociedade em jurisdição estrangeira; a sociedade detém o ativo americano; o NRNC detém <strong>ações da sociedade estrangeira</strong>, que por §2105 são bens de situs não-americano — logo, fora do <em>gross estate</em>.
<strong>Efeitos colaterais documentados:</strong> <strong>branch profits tax</strong> (IRC §884) — 30% adicional sobre o <em>dividend equivalent amount</em>, <strong>não reduzido por tratado no caso brasileiro</strong>; <em>corporate income tax</em> de 21% (IRC §11) sobre ECI; <strong>perda do tratamento de <em>long-term capital gain</em></strong> (0/15/20%) na venda do imóvel — o ganho da corporação é tributado a 21% e a distribuição sofre o <em>branch profits tax</em>; perda do <em>step-up in basis</em>; e <strong>FIRPTA continua incidindo</strong> sobre a venda pela corporação (§1445(e)).

<strong>Estrutura de duas camadas</strong> (foreign corp → US corp): elimina o <em>branch profits tax</em> na camada operacional e mantém situs estrangeiro na camada detida pelo indivíduo; introduz tributação corporativa de 21% e retenção de <strong>30% sobre dividendos</strong> pagos à holding estrangeira, sem redução no caso brasileiro. É também a estrutura que pode acionar o <strong>§2104(b)</strong> (transferências com retenção de controlo) se mal desenhada.

<strong>Irrevocable foreign trust</strong> constituído por NRNC <strong>antes</strong> de qualquer conexão americana. Riscos: §2036 e §2038 (poderes retidos); tratamento de <em>foreign grantor trust</em> (§672(f)); e, se houver beneficiário US person, Forms 3520 e 3520-A e tributação sob §679.

<strong>Seguro de vida.</strong> IRC §2105(a) exclui do <em>gross estate</em> o <em>proceeds</em> de seguro sobre a vida do próprio NRNC. Estruturas de <em>private placement life insurance</em> emitidas fora dos EUA são usadas nesse contexto. <em>Apólices emitidas por seguradora americana podem gerar retenção FDAP em certos componentes — a confirmar.</em>

<strong>Debt financing.</strong> Financiar o imóvel americano com dívida <em>non-recourse</em> de terceiro reduz o valor líquido do US situs asset. <strong>Atenção à dedução proporcional do §2106(a)(1):</strong> o espólio de NRNC só deduz despesas e dívidas na <strong>proporção entre o gross estate americano e o gross estate mundial</strong> — o que <strong>exige revelar ao IRS o patrimônio global</strong>. Dívida <em>non-recourse</em> garantida apenas pelo imóvel é tratada de forma distinta (redução do valor do ativo, sem dedução proporcional). <em>A confirmar em Reg. §20.2053-7.</em>

<strong>QDOT — Qualified Domestic Trust (IRC §2056A).</strong> A <em>marital deduction</em> ilimitada (§2056) exige cônjuge sobrevivente <strong>cidadão americano</strong>; o §2056(d)(1) a nega quando o cônjuge é não-cidadão. O <strong>§2056A</strong> permite a dedução se os bens passarem a um <strong>QDOT</strong>: ao menos um <em>trustee</em> americano, retenção do imposto sobre distribuições de principal, e requisitos de garantia para trusts acima de USD 2.000.000 <em>(limiar a confirmar em Reg. §20.2056A-2(d))</em>.
<strong>Efeito: diferimento, não eliminação</strong> — o imposto incide sobre distribuições de principal e no falecimento do cônjuge sobrevivente, à <strong>alíquota marginal máxima do primeiro falecido</strong>.
O QDOT pode ser criado pelo executor <strong>após</strong> o óbito, ou por reforma do trust, dentro do prazo do 706 ou 706-NA.
<strong>Alternativa legal:</strong> o cônjuge sobrevivente naturalizar-se cidadão americano antes do protocolo do 706 e ter residido nos EUA continuamente desde o óbito (§2056(d)(4)).`,
          },
        ],
        brazilNote: `<strong>Não existe tratado de estate ou gift tax entre Brasil e Estados Unidos.</strong> Os EUA mantêm cerca de 16 tratados sucessórios — Alemanha, Reino Unido, França, Japão, Suíça, Áustria, Dinamarca, Finlândia, Grécia, Irlanda, Itália, Holanda, Noruega, África do Sul, Austrália e Canadá. <strong>O Brasil não está entre eles.</strong> Logo, não há elevação da exclusão de USD 60.000 por tratado, nem regra de situs modificada, nem alívio de dupla tributação sucessória.

<strong>ITCMD × Estate Tax — as duas incidências são independentes e não se compensam:</strong>
· <strong>Estate Tax federal americano</strong> — imposto sobre o <strong>espólio</strong>, competência federal, base do NRNC limitada aos <em>US situs assets</em>, exclusão de USD 60.000, alíquota progressiva até 40%;
· <strong>ITCMD brasileiro</strong> — imposto sobre a <strong>transmissão</strong>, devido pelo herdeiro ou donatário, competência <strong>estadual</strong> (CF, art. 155, I), alíquota de até 8% (teto da Resolução do Senado n.º 9/1992), com <strong>progressividade obrigatória</strong> pela EC 132/2023.

<strong>Crédito recíproco: NENHUM.</strong> O estate tax americano <strong>não é creditável</strong> contra o ITCMD, e o ITCMD <strong>não é creditável</strong> contra o estate tax. O ADI SRF 28/2000 trata de imposto sobre a <strong>renda</strong>, não de imposto sobre transmissão causa mortis — não há base normativa para creditamento.

<strong>Efeito documentado:</strong> o mesmo ativo — ações de empresa americana detidas por brasileiro falecido — pode ser alcançado <strong>cumulativamente</strong> pelo estate tax federal americano (até 40% acima de USD 60.000) e pelo ITCMD do estado brasileiro de domicílio do <em>de cujus</em> (até 8%), <strong>sem qualquer mecanismo de alívio</strong>.

<strong>ITCMD sobre bens no exterior — o estado da questão:</strong>
· <strong>CF, art. 155, §1.º, III</strong> exige lei complementar federal para o ITCMD incidir quando o doador tem domicílio no exterior, ou quando o <em>de cujus</em> possuía bens, era residente ou teve o inventário processado no exterior;
· <strong>STF, RE 851.108 (Tema 825), 2021</strong> — declarou inconstitucional a cobrança pelos Estados nessas hipóteses <strong>enquanto não houver lei complementar federal</strong>;
· <strong>EC 132/2023</strong> — inseriu o <strong>art. 16 do ADCT</strong>, estabelecendo <strong>regra transitória de competência</strong> até que sobrevenha a lei complementar: bens imóveis, ao Estado da situação do bem; bens móveis, títulos e créditos com doador no exterior, ao Estado do domicílio do donatário (ou, se este também for domiciliado no exterior, onde se encontrar o bem); bens do <em>de cujus</em>, ainda que no exterior, ao Estado onde ele era domiciliado (ou, se domiciliado no exterior, ao do domicílio do sucessor);
· <strong>STF, outubro de 2025</strong> — ao julgar norma do Mato Grosso, <strong>reafirmou a necessidade de lei complementar federal</strong> e <strong>rejeitou expressamente a tese de «constitucionalidade superveniente»</strong>: leis estaduais anteriormente declaradas inconstitucionais (como a Lei paulista n.º 10.705/2000 no ponto) <strong>não recobram validade automaticamente</strong> com a EC 132/2023. Contexto correlato: ADI 6.838.

<strong>Situação em agosto de 2026:</strong> a cobrança de ITCMD sobre heranças e doações com elementos no exterior <strong>permanece inviabilizada até a edição da lei complementar federal</strong>; e, ainda que a LC venha a ser editada, os Estados precisarão de <strong>leis estaduais novas</strong>, observando anterioridade anual e nonagesimal. <em>Verificar o status do PLP 108/2024.</em>

<strong>Leitura para o cliente:</strong> um brasileiro com patrimônio nos EUA que faleça hoje enfrenta o <strong>estate tax americano com certeza</strong> e o <strong>ITCMD sobre bens no exterior com incerteza jurídica</strong> — dois riscos de naturezas distintas, sem compensação recíproca.`,
        warning: `<strong>A exclusão de USD 60.000 é o risco mais subestimado do investimento brasileiro nos Estados Unidos.</strong> Ela está <strong>congelada desde 1988</strong>, não é indexada, e é <strong>250 vezes menor</strong> que a do cidadão americano.

Uma carteira de USD 5 milhões em ações americanas, detida diretamente por brasileiro não domiciliado, gera aproximadamente <strong>USD 1,9 milhão</strong> de estate tax no falecimento — <strong>sem crédito no Brasil</strong>, e cumulativamente com o ITCMD estadual sobre os bens brasileiros.

Acresce a <strong>iliquidez</strong>: custodiantes americanos bloqueiam a transferência aos herdeiros até a emissão do <strong>Transfer Certificate</strong> pelo IRS, que na prática leva <strong>meses a anos</strong> — independentemente do valor do imposto devido.

<strong>E a assimetria decisiva:</strong> ações de empresas americanas podem ser <strong>doadas em vida sem gift tax</strong> (são intangíveis), mas integram o <em>gross estate</em> a 40% se mantidas até a morte.`,
        sources: [
          {
            t: "IRS · Some nonresidents with U.S. assets must file estate tax returns",
            u: "https://www.irs.gov/businesses/small-businesses-self-employed/some-nonresidents-with-us-assets-must-file-estate-tax-returns",
          },
          {
            t: "IRS · Estate tax for nonresidents not citizens of the United States",
            u: "https://www.irs.gov/businesses/small-businesses-self-employed/frequently-asked-questions-on-estate-taxes-for-nonresidents-not-citizens-of-the-united-states",
          },
          {
            t: "Cornell LII · 26 U.S. Code §2104 — Property within the United States",
            u: "https://www.law.cornell.edu/uscode/text/26/2104",
          },
          {
            t: "Cornell LII · 26 U.S. Code §2105 — Property without the United States",
            u: "https://www.law.cornell.edu/uscode/text/26/2105",
          },
          {
            t: "IRS · Form 706-NA",
            u: "https://www.irs.gov/forms-pubs/about-form-706-na",
          },
          {
            t: "STF · Tema 825 (RE 851.108) — ITCMD sobre bens no exterior",
            u: "https://portal.stf.jus.br/jurisprudenciaRepercussao/verAndamentoProcesso.asp?incidente=4667945&numeroProcesso=851108&classeProcesso=RE&numeroTema=825",
          },
        ],
      },
      {
        name: "FIRPTA — alienação de imóveis por estrangeiro",
        status: "ok",
        legalBasis:
          "<strong>FIRPTA</strong>, Pub. L. 96-499, Title XI (1980); <strong>PATH Act de 2015</strong> (Pub. L. 114-113) elevou a retenção de 10% para 15%. <strong>IRC §897</strong> — ganho na alienação de USRPI tratado como ECI. <strong>IRC §1445</strong> — obrigação de retenção do adquirente. <strong>26 C.F.R. §1.1445-1 a -11</strong> e <strong>§1.897-1</strong> e seguintes. Formulários: <strong>8288</strong>, <strong>8288-A</strong>, <strong>8288-B</strong> e <strong>8288-C</strong>.",
        desc: `Na alienação, por pessoa estrangeira, de <em>U.S. Real Property Interest</em> (USRPI), o <strong>comprador</strong> (<em>transferee</em>) é obrigado a reter <strong>15% do <em>amount realized</em></strong> — o <strong>preço bruto, não o ganho</strong> — e recolher ao IRS.

<strong>A retenção é antecipação, não imposto definitivo:</strong> o vendedor apura o ganho real no Form 1040-NR (ou 1120-F) e pede restituição do excedente.

<strong>USRPI abrange:</strong> imóveis nos EUA; benfeitorias; direitos minerários; e <strong>ações de <em>U.S. Real Property Holding Corporation</em> (USRPHC)</strong> — corporação americana cujo valor de USRPI represente 50% ou mais do valor agregado de seus ativos imobiliários (americanos e estrangeiros) mais ativos de <em>trade or business</em>, testado nos últimos 5 anos (§897(c)(2)).

<strong>Escala de retenção:</strong>
· regra geral → <strong>15%</strong> do <em>amount realized</em>
· preço de <strong>até USD 300.000</strong> <strong>e</strong> comprador pessoa física que residirá no imóvel (teste dos 50% dos dias em cada um dos dois períodos de 12 meses subsequentes) → <strong>0%</strong>
· preço entre <strong>USD 300.001 e USD 1.000.000</strong> <strong>e</strong> mesmo requisito de residência → <strong>10%</strong>
· preço <strong>acima de USD 1.000.000</strong> → <strong>15%</strong> (a exceção de residência não reduz)
· distribuições por corporações, <em>partnerships</em> e trusts (§1445(e)) → <strong>21%</strong> ou 15%, conforme o caso
· alienação de interesse em <em>partnership</em> com ECI (§1446(f)) → <strong>10%</strong>`,
        kv: [
          { l: "Retenção padrão", v: "15% do preço bruto" },
          { l: "Até USD 300.000 + residência", v: "0%" },
          { l: "USD 300k–1M + residência", v: "10%" },
          { l: "Acima de USD 1.000.000", v: "15%" },
          { l: "Distribuições §1445(e)", v: "21% ou 15%" },
          { l: "Partnership com ECI §1446(f)", v: "10%" },
          { l: "Natureza", v: "Antecipação, não definitivo" },
          { l: "Prazo do Form 8288", v: "20 dias da transferência" },
          { l: "Withholding certificate", v: "Resposta-alvo em 90 dias" },
          { l: "Depreciation recapture", v: "25%" },
        ],
        requirements: [
          "<strong>Exceção — non-foreign affidavit</strong> (§1445(b)(2)): o vendedor certifica, sob pena de perjúrio, <strong>não ser pessoa estrangeira</strong>, informando o TIN.",
          "<strong>Exceção — residência até USD 300.000:</strong> comprador pessoa física que residirá no imóvel, com o teste dos 50% dos dias em cada um dos dois períodos de 12 meses subsequentes.",
          "<strong>Exceção — withholding certificate (Form 8288-B, §1445(b)(4)):</strong> reduz ou elimina a retenção quando o imposto efetivo devido é inferior — venda com prejuízo, base elevada, operação §1031. Deve ser protocolado <strong>até a data do fechamento</strong>; o IRS tem prazo-alvo de <strong>90 dias</strong> para responder, e enquanto pendente o valor fica retido em <em>escrow</em>.",
          "<strong>Exceção — ações negociadas em bolsa reconhecida</strong> e o alienante detinha <strong>5% ou menos</strong> da classe nos 5 anos anteriores (§897(c)(3)).",
          "<strong>Exceção — certificação de que a corporação não é USRPHC</strong> (§1445(b)(3)).",
          "<strong>Exceção — transações não reconhecidas</strong> (§1031, reorganizações), mediante notificação ao IRS.",
        ],
        process: [
          {
            step: "Obtenção do ITIN",
            detail:
              "O vendedor estrangeiro obtém o ITIN pelo <strong>Form W-7</strong>, se ainda não o tiver. <em>Prazo corrente a confirmar; historicamente 7 a 11 semanas.</em>",
            timing: "7–11 semanas",
          },
          {
            step: "Form 8288-B (opcional)",
            detail:
              "Protocolo do pedido de <em>withholding certificate</em> para reduzir a retenção. Deve ser apresentado <strong>até o fechamento</strong>.",
            timing: "Resposta-alvo em 90 dias",
          },
          {
            step: "Fechamento e retenção",
            detail:
              "O comprador ou o <em>closing agent</em> retém 15% do <em>amount realized</em> na data do <em>closing</em>.",
            timing: "Data do closing",
          },
          {
            step: "Forms 8288 e 8288-A",
            detail:
              "O comprador remete os formulários com o valor retido ao IRS no prazo de <strong>20 dias</strong> após a transferência.",
            timing: "20 dias",
          },
          {
            step: "Cópia B do 8288-A",
            detail:
              "O IRS carimba e devolve a cópia B ao vendedor — documento necessário para reivindicar o crédito na declaração.",
            timing: "Semanas a meses",
          },
          {
            step: "Form 1040-NR e pedido de restituição",
            detail:
              "O vendedor declara e apura o ganho real, pedindo a restituição do excedente retido.",
            timing: "15/abr ou 15/jun do ano seguinte",
          },
          {
            step: "Restituição",
            detail:
              "<em>Historicamente, 6 a 18 meses. Prazo corrente a confirmar.</em>",
            timing: "6–18 meses",
          },
        ],
        costs: [
          {
            item: "Retenção FIRPTA",
            value: "15% do preço bruto",
            note: "Antecipação; excedente restituível após a declaração",
          },
          {
            item: "Imposto efetivo — ganho de capital de longo prazo",
            value: "0%, 15% ou 20%",
            note: "Conforme a faixa de renda",
          },
          {
            item: "Depreciation recapture",
            value: "25%",
            note: "Sobre a depreciação acumulada deduzida",
          },
          {
            item: "Retenção estadual adicional",
            value: "Variável",
            note: "Califórnia 3,33%, e regimes próprios em Nova York, Maryland e Havaí — percentuais a verificar por estado",
          },
          {
            item: "Form W-7 (ITIN)",
            value: "Sem taxa",
          },
        ],
        sections: [
          {
            title: "Regras de família e co-propriedade",
            body: `O FIRPTA não tem regra de família própria.

A <strong>co-propriedade entre cônjuges é tratada pro rata</strong> — a retenção é proporcional à participação do alienante estrangeiro.

Se um dos cônjuges for <em>US person</em> com <em>non-foreign affidavit</em>, a retenção incide <strong>apenas sobre a parcela do estrangeiro</strong>.`,
          },
        ],
        brazilNote: `<strong>Dupla incidência sem alívio pleno.</strong> O ganho imobiliário nos EUA é tributado nos EUA (FIRPTA e ECI) <strong>e também no Brasil</strong>, se o alienante for residente fiscal brasileiro — ganho de capital sob a Lei 13.259/2016, com alíquotas progressivas de <strong>15%, 17,5%, 20% e 22,5%</strong>.

<strong>O imposto federal americano pode ser compensado no Brasil</strong> sob a reciprocidade do <strong>ADI SRF 28/2000</strong>.

<strong>Mas o imposto estadual e municipal americano NÃO é compensável</strong> — <em>state income tax</em>, <em>transfer tax</em> e <em>property tax</em> ficam expressamente fora da reciprocidade reconhecida pelo Ato Declaratório.

<strong>Atenção à retenção estadual adicional:</strong> alguns estados impõem retenção própria na venda por não residente — Califórnia a 3,33%, e regimes próprios em Nova York, Maryland e Havaí. <em>Percentuais a verificar individualmente.</em> Essa camada é <strong>custo puro</strong> para o brasileiro, sem crédito no Brasil.

<strong>Planejamento de fluxo de caixa:</strong> a retenção de 15% incide sobre o <strong>preço bruto</strong>, não sobre o ganho. Numa venda com ganho pequeno ou com prejuízo, o valor retido pode exceder largamente o imposto devido — e a restituição leva de 6 a 18 meses. O <strong>Form 8288-B</strong>, protocolado até o fechamento, é o instrumento para evitar essa imobilização de capital.`,
        sources: [
          {
            t: "IRS · FIRPTA withholding",
            u: "https://www.irs.gov/individuals/international-taxpayers/firpta-withholding",
          },
          {
            t: "IRS · Exceptions from FIRPTA withholding",
            u: "https://www.irs.gov/individuals/international-taxpayers/exceptions-from-firpta-withholding",
          },
          {
            t: "IRS · Form 8288",
            u: "https://www.irs.gov/forms-pubs/about-form-8288",
          },
          {
            t: "Cornell LII · 26 U.S. Code §897",
            u: "https://www.law.cornell.edu/uscode/text/26/897",
          },
        ],
      },
      {
        name: "Green card, tributação mundial e o pacote declaratório",
        status: "risk",
        legalBasis:
          "<strong>FBAR:</strong> 31 U.S.C. §5314; 31 C.F.R. §1010.350. <strong>FATCA:</strong> IRC §6038D. <strong>Form 5471:</strong> IRC §6038 e §6046. <strong>Form 3520:</strong> IRC §6048. <strong>PFIC:</strong> IRC §§1291 a 1298 e §1298(f). <strong>FEIE:</strong> IRC §911. <strong>Foreign Tax Credit:</strong> IRC §901 e §904.",
        desc: `Tornar-se <em>US person</em> — cidadão, LPR ou <em>resident alien</em> pelo SPT — submete a pessoa a:
· <strong>tributação sobre renda mundial</strong> (IRC §1 e §61) — dividendos, juros, aluguéis, ganhos, lucros de empresas, <strong>independentemente da fonte e de remessa</strong>;
· <strong>herança e doação sobre patrimônio mundial</strong>, com a contrapartida da exclusão de USD 15.000.000 (2026);
· <strong>um dos dois únicos sistemas de tributação por cidadania do mundo</strong>, ao lado da Eritreia.

<strong>Créditos disponíveis:</strong> <em>Foreign Tax Credit</em> (IRC §901 e §904, Form 1116) e, para renda de trabalho, <em>Foreign Earned Income Exclusion</em> (§911, Form 2555), cujo limite é de <strong>USD 132.900 em 2026</strong> <em>(a confirmar na Rev. Proc. 2025-32)</em>.

<strong>PFIC — a armadilha crítica para brasileiros.</strong> Corporação estrangeira em que 75% ou mais da receita bruta é passiva, <strong>ou</strong> 50% ou mais dos ativos produzem renda passiva (§1297(a)). <strong>Não há limiar mínimo de participação — uma única cota aciona o regime.</strong>`,
        kv: [
          { l: "FBAR — limiar", v: "USD 10.000 agregados" },
          { l: "FBAR — prazo", v: "15/abr, extensão a 15/out" },
          { l: "Form 8938 — no exterior, solteiro", v: "USD 200k / 300k" },
          { l: "Form 8938 — no exterior, casado", v: "USD 400k / 600k" },
          { l: "Form 5471", v: "≥ 10% de voto ou valor" },
          { l: "Form 3520 — doação do exterior", v: "> USD 100.000 de PF" },
          { l: "Form 3520-A", v: "15 de março" },
          { l: "Form 8621 (PFIC)", v: "Uma cota já aciona" },
          { l: "FEIE 2026", v: "≈USD 132.900" },
          { l: "Penalidade FBAR não-willful", v: "Até USD 16.536 por formulário" },
          { l: "Penalidade FBAR willful", v: "50% do saldo" },
          { l: "Penalidade Form 3520", v: "35% do valor transferido" },
        ],
        requirements: [
          "<strong>FinCEN 114 (FBAR)</strong> — agregado superior a <strong>USD 10.000</strong> em qualquer momento do ano, em contas financeiras no exterior, <strong>inclusive por assinatura autorizada sem titularidade</strong>. Prazo: 15 de abril, com extensão automática para 15 de outubro. Penalidade não-willful: até <strong>USD 16.536 por formulário/ano</strong> — após <em>Bittner v. United States</em>, 598 U.S. 118 (2023), a penalidade é <strong>por formulário, não por conta</strong>. Willful: o maior entre cerca de USD 165.000 e <strong>50% do saldo</strong>, mais crime.",
          "<strong>Form 8938 (FATCA)</strong> — ativos financeiros estrangeiros. Limiares: USD 50k/75k (solteiro nos EUA); USD 100k/150k (casado nos EUA); <strong>USD 200k/300k (solteiro no exterior)</strong>; <strong>USD 400k/600k (casado no exterior)</strong>. Penalidade: USD 10.000, até USD 50.000 por continuação.",
          "<strong>Form 5471</strong> — participação em corporação estrangeira, tipicamente 10% ou mais de voto ou valor (5 categorias de <em>filers</em>). Penalidade: <strong>USD 10.000 por empresa/ano</strong>, mais até USD 50.000.",
          "<strong>Form 3520</strong> — criação ou transferência a trust estrangeiro; distribuições recebidas; e <strong>doação ou herança do exterior superior a USD 100.000</strong> (de pessoa física) ou superior a cerca de USD 20.116 (de pessoa jurídica estrangeira) <em>(limiar indexado, a confirmar)</em>. Penalidade: <strong>35% do valor transferido</strong>, ou 5% ao mês até 25% para doações.",
          "<strong>Form 3520-A</strong> — <em>foreign grantor trust</em> com <em>US owner</em>. Prazo: <strong>15 de março</strong>. Penalidade: 5% do valor dos ativos do trust.",
          "<strong>Form 8621</strong> — ações de PFIC. <strong>A omissão suspende a prescrição de todo o ano fiscal</strong> enquanto não protocolado (§6501(c)(8)).",
          "<strong>Form 8865</strong> (partnership estrangeira), <strong>Form 926</strong> (transferência de bens a corporação estrangeira — 10% do valor, até USD 100.000), <strong>Form 5472</strong> (USD 25.000) e <strong>Form 8858</strong> (<em>foreign disregarded entity</em> — USD 10.000).",
        ],
        sections: [
          {
            title: "PFIC — o que é PFIC no portfólio brasileiro típico",
            body: `· <strong>Fundos de investimento brasileiros</strong> — multimercado, renda fixa, ações, DI → <strong>PFIC, praticamente todos</strong>
· <strong>Fundos exclusivos e FIC-FIA</strong> → PFIC
· <strong>FIIs (fundos imobiliários)</strong> → PFIC, em regra
· <strong>PGBL e VGBL</strong> → <strong>PFIC ou <em>foreign trust</em></strong> — tratamento contestado, tipicamente PFIC pela composição da carteira; o VGBL pode ainda <strong>não qualificar como seguro de vida sob IRC §7702</strong>
· <strong>ETFs brasileiros</strong> (BOVA11 e similares) → PFIC
· <strong>Ações individuais de empresas brasileiras</strong> (PETR4, VALE3) → <strong>não</strong> são PFIC (empresas operacionais), mas geram Form 8938
· <strong>Holding patrimonial brasileira</strong> Ltda. ou S.A. → <strong>PFIC e/ou CFC</strong>; se controlada por US persons, prevalece o regime de <strong>CFC</strong> (Subpart F e GILTI), com Form 5471
· <strong>Poupança, CDB, LCI, LCA e Tesouro Direto</strong> → não são PFIC (são dívida), mas entram no FBAR e no 8938

<strong>Os três regimes de tributação:</strong>

<strong>1. Excess distribution (regime padrão, §1291) — o mais oneroso.</strong> Distribuições «em excesso» e o ganho na venda são <strong>alocados linearmente por todo o período de detenção</strong>; a parcela atribuída a anos anteriores é tributada à <strong>alíquota marginal máxima daquele ano</strong> — não à alíquota do contribuinte —, <strong>acrescida de juros compostos</strong> desde então. <strong>A carga efetiva pode superar o próprio ganho</strong> em posições antigas. Não há aproveitamento de perda.

<strong>2. QEF — Qualified Electing Fund (§1295).</strong> Inclusão anual pro rata da renda ordinária e do ganho de capital líquido do fundo. <strong>Exige que o fundo forneça um <em>PFIC Annual Information Statement</em></strong> — que <strong>fundos brasileiros, na prática, não fornecem</strong>, o que torna a eleição <strong>normalmente indisponível de fato</strong>.

<strong>3. Mark-to-market (§1296).</strong> Exige que a ação seja <em>marketable</em> — negociada em bolsa qualificada. Ganhos anuais tributados como <strong>renda ordinária</strong>; perdas dedutíveis apenas até ganhos previamente reconhecidos. Aplicável a ETFs listados, raramente a fundos abertos brasileiros.

<strong>Regra de eleição tardia:</strong> feita a eleição QEF ou MTM em ano posterior ao primeiro de detenção, é necessário um <em>purging election</em> — venda ficta com tributação sob §1291 — para «limpar» o histórico.

<strong>Consequência operacional decisiva:</strong> o brasileiro que se torna <em>US person</em> <strong>carrega para dentro do regime americano todo o portfólio brasileiro de fundos, com o histórico de detenção anterior</strong> — e o §1291 alcança o <strong>período inteiro de detenção</strong>, inclusive anos anteriores à residência, salvo eleição de <em>purging</em> na entrada.`,
          },
          {
            title: "Planejamento pré-imigratório — a janela que se fecha",
            body: `<em>Técnicas documentadas na literatura fiscal americana. Todas dependem de execução <strong>antes</strong> da <em>residency starting date</em> (§7701(b)(2)(A)) — primeiro dia de presença física no ano em que o SPT é satisfeito, ou primeiro dia como LPR.</em>

· <strong>Step-up de base</strong> — venda e recompra de ativos apreciados. <strong>Não há step-up automático na entrada</strong>; a base histórica é preservada. A venda prévia realiza o ganho <strong>sob a lei brasileira</strong> (15%–22,5%), evitando tributação americana futura sobre a valorização pré-residência. Custo fiscal imediato no Brasil; atenção à Lei 14.754/2023.
· <strong>Check-the-box election</strong> (Form 8832; Treas. Reg. §301.7701-3) — converte a holding em <em>disregarded entity</em> ou <em>partnership</em> antes da entrada, permitindo liquidação com step-up. Prazo de eficácia retroativa de 75 dias; efeitos no Brasil a analisar.
· <strong>Liquidação de posições em PFIC</strong> antes da entrada — evita que o período pré-residência seja alcançado pelo regime de <em>excess distribution</em>.
· <strong>Aceleração de renda</strong> (dividendos, bónus, resgates) para o ano anterior — tributa no Brasil e não nos EUA.
· <strong>Diferimento de deduções e perdas</strong> para após a entrada — aproveitamento contra renda americana.
· <strong>Foreign grantor trust irrevogável</strong> constituído antes da entrada, com <em>grantor</em> não-US. <strong>Atenção ao §679:</strong> trata como <em>grantor trust</em> o trust estrangeiro constituído por quem se torna <em>US person</em> <strong>dentro de 5 anos</strong> antes da mudança de residência, se houver beneficiário americano — a «regra dos 5 anos». <strong>O trust deve ser estabelecido com antecedência.</strong>
· <strong>Reestruturação de PGBL e VGBL</strong> — evita classificação como PFIC ou como seguro não qualificado sob §7702. O resgate no Brasil tem custo fiscal e perde a tabela regressiva.
· <strong>Revisão de testamento e regime de bens</strong> — evita perda da <em>marital deduction</em> (§2056(d) e §2056A). A comunhão universal brasileira e o <em>community property</em> americano têm efeitos distintos.

<strong>Streamlined Filing Compliance Procedures</strong> permanece disponível para regularização não-willful: <strong>penalidade de 0%</strong> para quem reside no exterior (SFOP) e <strong>5% do maior saldo agregado</strong> para quem reside nos EUA (SDOP). <em>O IRS já sinalizou revisões dos programas de regularização — verificar a disponibilidade corrente.</em>`,
          },
          {
            title: "Expatriação e Exit Tax — IRC §877A",
            body: `<strong>Base legal:</strong> IRC §877A (introduzido pelo <strong>HEART Act de 2008</strong>, Pub. L. 110-245, §301, para expatriações a partir de 17/jun/2008); IRC §877(a)(2); IRC §7701(a)(50) e §877A(g)(4); <strong>IRC §2801</strong> — regulamentos finais publicados em janeiro de 2025, com <strong>Form 708</strong>. Formulários: <strong>Form 8854</strong> e <strong>Form I-407</strong>.

<strong>A quem se aplica:</strong> (i) <strong>cidadão americano</strong> que renuncia à cidadania; e (ii) <strong>long-term resident (LTR)</strong> — titular de green card em <strong>8 dos últimos 15 anos fiscais</strong>, <strong>contando qualquer fração de ano como ano inteiro</strong> (§877(e)(2)) — que abandone o status (I-407), tenha-o revogado, ou passe a ser tratado como residente de outro país sob tratado (o que <strong>não é possível para o Brasil</strong>, por inexistir tratado).

<strong>Testes de <em>covered expatriate</em> — basta UM:</strong>
· <strong>Net worth test:</strong> patrimônio líquido de <strong>USD 2.000.000 ou mais</strong> na data da expatriação. <strong>Valor fixo, não indexado desde 2008.</strong>
· <strong>Tax liability test:</strong> média do imposto de renda federal líquido dos <strong>5 anos</strong> anteriores superior a <strong>USD 211.000</strong> (2026; era USD 206.000 em 2025) <em>(a confirmar na Rev. Proc. 2025-32)</em>.
· <strong>Certification test:</strong> deixar de certificar, sob pena de perjúrio, <strong>conformidade fiscal integral nos 5 anos anteriores</strong> (Form 8854, Part IV). <strong>A simples omissão de protocolar o Form 8854 torna a pessoa covered expatriate automaticamente, independentemente de patrimônio.</strong>

<strong>Consequências:</strong>
· <strong>Mark-to-market (§877A(a))</strong> — venda ficta de <strong>todo o patrimônio mundial</strong> pelo valor de mercado no <strong>dia anterior</strong> à expatriação, com <strong>exclusão de ganho de USD 910.000</strong> (2026, indexado). O excedente é tributado às alíquotas de <em>capital gain</em>. As <em>wash sale rules</em> não se aplicam (§877A(a)(2)(B)). Há <strong>eleição de diferimento</strong> (§877A(b)) até a venda efetiva, mediante <strong>garantia adequada</strong>, <strong>renúncia irrevogável a benefícios de tratado</strong> e incidência de juros.
· <strong>Regimes especiais (§877A(c)-(e))</strong> — <em>deferred compensation items</em>: planos americanos elegíveis sofrem retenção de <strong>30%</strong> nas distribuições futuras; planos não elegíveis são tratados como recebidos no dia anterior. <em>Specified tax deferred accounts</em> (IRA, 529, HSA): distribuição integral ficta. Interesses em <em>non-grantor trusts</em>: retenção de 30% na porção tributável de cada distribuição futura.
· <strong>IRC §2801 — o efeito de mais longo alcance:</strong> o <em>US citizen</em> ou <em>resident</em> que <strong>receba</strong> doação ou herança de um <em>covered expatriate</em> paga imposto de <strong>40%</strong> sobre o valor recebido acima da exclusão anual, <strong>sem limite de tempo após a expatriação</strong>. Declarado em <strong>Form 708</strong>. <strong>Atinge a geração seguinte.</strong>
· <strong>INA §212(a)(10)(E) — «Reed Amendment»:</strong> inadmissibilidade do ex-cidadão que renunciou «com propósito de evasão fiscal». Historicamente <strong>sem aplicação operacional relevante</strong> por ausência de regulamento. <em>Verificar se houve mudança em 2025-2026.</em>

<strong>Custos:</strong> taxa consular de renúncia à cidadania de <strong>USD 2.350</strong> <em>(houve proposta de redução para USD 450 em 2023, com litígio — verificar a taxa vigente)</em>; <strong>Form I-407 sem taxa</strong>; Form 8854 sem taxa.

<strong>A via mais frequente de exposição para brasileiros: obter green card e depois desistir.</strong>
· O <strong>relógio de 8 anos</strong> começa no primeiro ano-calendário de posse do green card, <strong>contando frações de ano como ano cheio</strong> — um green card obtido em <strong>dezembro de 2026 já consome o ano-calendário de 2026</strong>;
· consequência aritmética: green card emitido em <strong>dezembro de 2026</strong> e abandonado em <strong>janeiro de 2033</strong> já perfaz <strong>8 anos-calendário</strong> (2026 a 2033);
· <strong>abandono com 7 anos ou menos de contagem afasta integralmente o regime de LTR</strong> — não há teste de patrimônio, nem exit tax, nem Form 8854;
· o <strong>net worth test de USD 2.000.000</strong> considera o <strong>patrimônio mundial</strong>, inclusive imóveis, participações societárias e previdência no Brasil — limiar alcançado por boa parte do público de family office.`,
          },
          {
            title: "State tax e state estate tax",
            body: `<strong>Nove estados sem imposto de renda estadual sobre pessoa física (2026):</strong> Alasca, Flórida, Nevada, New Hampshire, Dakota do Sul, Tennessee, Texas, Washington e Wyoming.

<strong>Notas de precisão:</strong>
· <strong>New Hampshire</strong> revogou o <em>Interest &amp; Dividends Tax</em> com efeitos a partir de <strong>1/jan/2025</strong> — passou a não ter imposto de renda nem imposto sobre vendas, combinação que compartilha apenas com o Alasca;
· <strong>Tennessee</strong> revogou o <em>Hall Income Tax</em> a partir de 2021;
· <strong>Washington</strong> não tributa renda ordinária, mas <strong>tributa ganho de capital de longo prazo a 7%</strong> na primeira faixa e <strong>9,9%</strong> acima de USD 1.000.000, com dedução-padrão de aproximadamente USD 262.000 <em>(valores de 2026 a confirmar)</em>;
· ausência de imposto de renda estadual <strong>não</strong> implica ausência de outros tributos — <em>property tax</em>, <em>sales tax</em>, <em>franchise/margin tax</em> (Texas) e regimes municipais.

<strong>Residência fiscal estadual:</strong> cada estado define de forma própria. Regras recorrentes: <strong>domicílio</strong> (intenção) mais <strong>statutory residence</strong> — em Nova York, <em>permanent place of abode</em> mais <strong>183 dias</strong> no estado. Estados de alta tributação (NY, CA) conduzem <strong>auditorias de mudança de domicílio</strong> com escrutínio documental intenso — registos de celular, cartões de crédito, dentista, veterinário. <strong>Não há tratado nem crédito estadual disponível ao Brasil.</strong>

<strong>Doze estados mais o Distrito de Columbia com estate tax:</strong> Connecticut, Havaí, Illinois, Maine, Maryland, Massachusetts, Minnesota, Nova York, Oregon, Rhode Island, Vermont e Washington.
· <strong>Oregon: USD 1.000.000</strong> — a menor exclusão do país
· Massachusetts: USD 2.000.000 · Minnesota: USD 3.000.000
· <strong>Washington: USD 3.076.000</strong> até 30/jun/2026; <strong>USD 3.000.000</strong> a partir de 1/jul/2026
· Illinois: USD 4.000.000
· <strong>Maryland: USD 5.000.000</strong> — <strong>único estado com estate tax E inheritance tax</strong> (10%)
· Maine: USD 7.160.000
· <strong>Nova York: USD 7.350.000</strong> — possui o <strong>«cliff»</strong>: ultrapassados 105% da exclusão, tributa-se <strong>todo</strong> o espólio
· <strong>Connecticut: USD 15.000.000</strong> — acompanha o valor federal
· Havaí, Rhode Island, Vermont e D.C. têm valores próprios <em>(a verificar)</em>

<strong>Cinco estados com inheritance tax</strong> (imposto sobre o herdeiro, com alíquota variando pelo grau de parentesco): Kentucky, Maryland, Nebraska, Nova Jersey e Pensilvânia.

<strong>O ponto crítico para o não domiciliado:</strong> diversos estados com estate tax <strong>tributam o não residente sobre imóveis e bens tangíveis localizados no estado</strong>, com exclusão calculada de forma proporcional — e <strong>as exclusões estaduais são muito inferiores à federal</strong>. Um brasileiro NRNC com apartamento em Manhattan ou em Boston pode enfrentar <strong>estate tax estadual além do federal</strong>, e <strong>nenhum dos dois é creditável no Brasil</strong>. <em>As regras de incidência sobre não residentes e o método de proporcionalização variam por estado e devem ser verificados individualmente.</em>

<strong>Estados sem estate tax nem inheritance tax</strong> incluem Flórida, Texas, Nevada e Arizona. A Califórnia tem <em>income tax</em> elevado, mas <strong>não tem estate tax</strong>.`,
          },
        ],
        brazilNote: `<strong>Não existe tratado para evitar a dupla tributação da renda entre Brasil e Estados Unidos.</strong> As negociações remontam à década de 1960 e nunca se concluíram — os obstáculos historicamente apontados incluem os <strong>juros sobre capital próprio (JCP)</strong> brasileiros, a exigência americana de cláusula de <em>limitation on benefits</em>, e a tributação brasileira na fonte.

<strong>O mecanismo substitutivo: reciprocidade de tratamento.</strong>
· <strong>Lei n.º 4.862/1965, art. 5.º</strong> — autoriza a dedução do imposto pago no exterior quando houver reciprocidade;
· <strong>Ato Declaratório SRF n.º 28, de 26 de abril de 2000</strong> — <strong>reconhece expressamente a reciprocidade de tratamento entre Brasil e Estados Unidos</strong>;
· <strong>IN SRF n.º 208/2002, art. 16</strong> — disciplina a compensação;
· <strong>Decreto n.º 9.580/2018 (RIR/2018)</strong>.

<strong>Conteúdo do ADI SRF 28/2000:</strong> (1) a legislação <strong>federal</strong> americana admite a dedução, do imposto lá devido, do imposto pago no Brasil sobre rendimentos ali auferidos e tributados — configurando reciprocidade; (2) o imposto pago nos EUA <strong>pode ser compensado</strong> com o imposto devido no Brasil, dentro dos limites estabelecidos; e (3) <strong>a reciprocidade NÃO se estende aos impostos pagos a governos estaduais e municipais americanos</strong>.

<strong>Requisitos de eficácia da compensação:</strong> compensação <strong>rendimento a rendimento</strong> (não há <em>pooling</em> global como no FTC americano); crédito <strong>limitado ao imposto brasileiro devido sobre aquele mesmo rendimento</strong>; conversão pela taxa de câmbio do BACEN <em>(regra exata a confirmar no art. 16)</em>; e <strong>comprovação documental</strong> do imposto pago — Form 1042-S, comprovante de retenção do custodiante, ou documento consularizado. A RFB pode exigir documento reconhecido pelo órgão arrecadador estrangeiro e traduzido por tradutor juramentado.

<strong>O que EXISTE entre Brasil e EUA:</strong>
· <strong>Reciprocidade de tratamento</strong> — ADI SRF 28/2000
· <strong>TIEA</strong> — Acordo para Troca de Informações Tributárias, assinado em 20/mar/2007 <em>(número do decreto de promulgação a confirmar)</em> — troca de informações <strong>a pedido</strong>
· <strong>IGA FATCA (Modelo 1)</strong> — assinado em 23/set/2014, promulgado pelo <strong>Decreto n.º 8.506, de 24 de agosto de 2015</strong> — troca automática de informações de contas financeiras
· <strong>Acordo de Previdência Social</strong> — Decreto n.º 9.422/2018, em vigor desde 1/out/2018
· <strong>Convenção de dupla tributação da renda: NÃO EXISTE</strong>
· <strong>Tratado de estate ou gift tax: NÃO EXISTE</strong>

<strong>Nenhum desses instrumentos substitui uma convenção de dupla tributação.</strong> O TIEA e o IGA são de cooperação <strong>informacional</strong>; o acordo previdenciário trata de <strong>contribuições sociais</strong>, não de imposto de renda.

<strong>CRS × FATCA — a assimetria.</strong> <strong>Os Estados Unidos NÃO aderiram ao Common Reporting Standard.</strong> Optaram por manter o FATCA (IRC §§1471 a 1474, do HIRE Act de 2010) como regime próprio, aplicado por IGAs bilaterais, e não assinaram o MCAA/CRS — ao qual mais de 120 jurisdições aderiram, <strong>o Brasil incluído</strong>.
· <strong>O que o Brasil envia aos EUA:</strong> contas financeiras mantidas no Brasil por <em>US persons</em> e por entidades brasileiras com <em>substantial U.S. owners</em> — saldo, receitas brutas, produto de alienações, identificação do titular e do <strong>beneficiário final</strong>.
· <strong>O que os EUA enviam ao Brasil:</strong> juros de depósito pagos a residentes do Brasil (Reg. §1.6049-8) e dividendos e outros rendimentos sujeitos a retenção reportados em Form 1042-S. <strong>Não incluem, em regra:</strong> saldos de conta; produto de alienações (<em>gross proceeds</em>); nem identificação do beneficiário final de entidades — o <em>look-through</em> para <em>controlling persons</em> de sociedades, trusts e LLCs americanas. <em>O escopo exato do fluxo IRS → RFB deve ser verificado nos Anexos I e II do IGA (Decreto 8.506/2015).</em>
· No texto do IGA, «<strong>o Governo dos Estados Unidos reconhece a necessidade de alcançar nível equivalente de troca automática de informações com o Brasil</strong>» — formulação de <strong>compromisso político</strong>, não de obrigação exigível de reciprocidade plena.
· O <strong>Corporate Transparency Act</strong> (31 U.S.C. §5336) criou registo de <em>beneficial ownership</em> junto ao FinCEN, mas é registo <strong>doméstico de aplicação da lei</strong>, não instrumento de troca automática tributária — e em <strong>março de 2025 o FinCEN publicou regra interina restringindo a exigência às <em>foreign reporting companies</em></strong>, dispensando as empresas domésticas americanas. <em>Status corrente a verificar.</em>

<strong>Isso não altera a obrigação legal de declarar.</strong> O residente fiscal brasileiro está obrigado, independentemente da troca de informações, a declarar bens no exterior na DIRPF; apresentar a <strong>CBE</strong> ao Banco Central; e tributar os rendimentos sob a <strong>Lei 14.754/2023</strong> — <strong>15%</strong> sobre aplicações financeiras no exterior e sobre lucros de entidades controladas, estas apuradas em 31 de dezembro, <strong>independentemente de distribuição</strong>, quando a entidade esteja em jurisdição de tributação favorecida <strong>ou</strong> tenha renda ativa própria inferior a 60%. Trusts seguem regime específico de transparência.`,
        warning: `<strong>O green card é uma decisão fiscal, não apenas migratória.</strong> Ele submete a pessoa à tributação sobre <strong>renda mundial</strong> e ao pacote declaratório completo — FBAR, 8938, 5471, 3520, 8621 —, com penalidades que partem de USD 10.000 por formulário e chegam a 50% do saldo no caso de FBAR <em>willful</em>.

<strong>O portfólio brasileiro padrão entra no regime PFIC no momento da residência</strong>, e o §1291 alcança o <strong>período inteiro de detenção</strong>, inclusive anos anteriores. A eleição QEF, que seria a saída, é <strong>indisponível de fato</strong>, porque fundos brasileiros não emitem o <em>PFIC Annual Information Statement</em>.

<strong>E a saída tem preço.</strong> O relógio de 8 anos do <em>long-term resident</em> conta <strong>frações de ano como ano cheio</strong>; o limiar de patrimônio de <strong>USD 2.000.000</strong> não é indexado desde 2008; e o <strong>§2801</strong> alcança, a 40% e <strong>sem limite de tempo</strong>, qualquer <em>US person</em> que venha a receber doação ou herança de um <em>covered expatriate</em> — atingindo a geração seguinte.

<strong>Todo o planejamento eficaz é pré-imigratório</strong>, e a janela fecha na <em>residency starting date</em>.`,
        sources: [
          {
            t: "IRS · Report of Foreign Bank and Financial Accounts (FBAR)",
            u: "https://www.irs.gov/businesses/small-businesses-self-employed/report-of-foreign-bank-and-financial-accounts-fbar",
          },
          {
            t: "IRS · Form 8938 — Statement of Specified Foreign Financial Assets",
            u: "https://www.irs.gov/forms-pubs/about-form-8938",
          },
          {
            t: "IRS · Form 8621 — Information Return by a Shareholder of a PFIC",
            u: "https://www.irs.gov/forms-pubs/about-form-8621",
          },
          {
            t: "IRS · Expatriation tax",
            u: "https://www.irs.gov/individuals/international-taxpayers/expatriation-tax",
          },
          {
            t: "IRS · Form 8854 — Initial and Annual Expatriation Statement",
            u: "https://www.irs.gov/forms-pubs/about-form-8854",
          },
          {
            t: "Receita Federal · Acordo Multilateral sobre o intercâmbio automático de informações (MCAA-CRS)",
            u: "https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/legislacao/acordos-internacionais/acordos-para-intercambio-de-informacoes-relativas-a-tributos/convencao-multilateral-sobre-assistencia-mutua-administrativa-em-materia-tributaria/acordo-multilateral-entre-autoridades-competentes-sobre-o-intercambio-automatico-de-informacoes-financeiras-mcaa-crs",
          },
          {
            t: "Receita Federal · Perguntas e respostas — offshores, Lei 14.754 e IN RFB 2.180 (PDF)",
            u: "https://www.gov.br/receitafederal/pt-br/assuntos/noticias/2024/abril/receita-federal-e-secretaria-da-reforma-tributaria-lancam-atualizacao-do-perguntas-e-respostas-sobre-tributacao-de-rendimentos-no-exterior/perguntas-e-respostas-offshores-lei-14-754-e-in-rfb-2-180.pdf",
          },
          {
            t: "Receita Federal · Comunicação de Saída Definitiva do País",
            u: "https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda/preenchimento/dsdp",
          },
        ],
      },
    ],
    visa: [
      {
        name: "EB-5 Immigrant Investor Program",
        status: "changed",
        legalBasis:
          "<strong>INA §203(b)(5)</strong> — 8 U.S.C. §1153(b)(5). Criado pelo <strong>Immigration Act of 1990</strong>, Pub. L. 101-649, §121. <strong>EB-5 Reform and Integrity Act of 2022 (RIA)</strong> — Division BB do Consolidated Appropriations Act, 2022, <strong>Pub. L. 117-103</strong>, sancionado em <strong>15 de março de 2022</strong>. <strong>8 C.F.R. §204.6</strong> (petição) e <strong>§216.6</strong> (remoção de condições). <strong>INA §216A</strong> — residência condicional. Formulários: I-526, I-526E, I-829, I-485, I-956, I-956F e I-956G.",
        desc: `<strong>Valores de investimento vigentes:</strong>
· <strong>TEA rural</strong> → <strong>USD 800.000</strong>
· <strong>TEA de alta taxa de desemprego (HUA)</strong> → <strong>USD 800.000</strong>
· <strong>Projeto de infraestrutura</strong> → <strong>USD 800.000</strong>
· <strong>Padrão (fora de TEA)</strong> → <strong>USD 1.050.000</strong>

<strong>Reajuste automático programado.</strong> O RIA determina ajuste inflacionário <strong>a cada 5 anos, a partir de 1 de janeiro de 2027</strong>, pelo <strong>CPI-U</strong> acumulado desde a base de dezembro de 2021, com arredondamento para baixo ao múltiplo de USD 50.000; o valor de TEA e infraestrutura é fixado em <strong>75% do valor padrão ajustado</strong>.
<em>Dados de base: CPI-U de dez/2021 = 278,802; jan/2026 = 325,252 — variação acumulada de cerca de 16,7%. Projeções de mercado para 1/jan/2027: TEA entre USD 900.000 e USD 937.500; padrão entre USD 1.200.000 e USD 1.250.000. São projeções de fontes privadas do setor — o valor oficial dependerá do CPI-U até a data-base e de publicação pelo USCIS.</em>

<strong>Reserved visas (set-asides), INA §203(b)(5)(B):</strong> do total anual de EB-5 (7,1% do teto de imigração baseada em emprego), <strong>20% rural</strong>, <strong>10% HUA</strong>, <strong>2% infraestrutura</strong> e <strong>68% unreserved</strong>. Vistos reservados não utilizados transitam para o ano seguinte <strong>dentro da mesma categoria</strong>; se não usados no segundo ano, migram para <em>unreserved</em>.

<strong>Visa Bulletin — situação do Brasil (agosto e setembro de 2026):</strong> <strong>EB-5 unreserved CURRENT</strong> para «All Chargeability Areas Except Those Listed», faixa que <strong>inclui o Brasil</strong>. <strong>Todas as categorias reservadas CURRENT para todos os países.</strong> China (mainland) com <em>final action date</em> de 22/set/2016 (cerca de 9,5 anos de backlog) e Índia em 1/mai/2022 (cerca de 4 anos).
<strong>Advertência do Departamento de Estado:</strong> o aumento de demanda na EB-5 Unreserved pode exigir <strong>retrogressão ou tornar a categoria indisponível antes do fim do FY-2026</strong> (30/set/2026). <em>Verificar o Visa Bulletin do mês antes de qualquer protocolo — travel.state.gov.</em>`,
        kv: [
          { l: "TEA rural / HUA / infraestrutura", v: "USD 800.000" },
          { l: "Padrão (fora de TEA)", v: "USD 1.050.000" },
          { l: "Próximo reajuste", v: "1 de janeiro de 2027" },
          { l: "Empregos exigidos", v: "10 full-time" },
          { l: "Sustainment period", v: "2 anos" },
          { l: "Set-aside rural", v: "20% da cota anual" },
          { l: "Set-aside HUA", v: "10%" },
          { l: "Set-aside infraestrutura", v: "2%" },
          { l: "Brasil no Visa Bulletin", v: "Current (ago/2026)" },
          { l: "Green card inicial", v: "Condicional, 2 anos" },
          { l: "Concurrent filing", v: "Permitido se já nos EUA" },
          { l: "Regional Center Program", v: "Autorizado até 30/set/2027" },
        ],
        requirements: [
          "Investimento de <strong>USD 800.000</strong> (TEA, rural ou infraestrutura) ou <strong>USD 1.050.000</strong> (padrão) em <em>new commercial enterprise</em> (NCE) constituída após <strong>29/nov/1990</strong>, ou reestruturada ou expandida.",
          "<strong>Capital <em>at risk</em></strong> — sem garantia de retorno, sem acordo de recompra, sem arranjo de <em>redemption</em> garantida.",
          "<strong>Comprovação lícita da origem dos fundos</strong> (<em>source of funds</em>) e do <strong>caminho dos fundos</strong> (<em>path of funds</em>). O RIA ampliou a exigência: documentação de <strong>7 anos</strong> de declarações de imposto e de transações, com rastreamento de cada transferência internacional. <strong>Fundos emprestados são admitidos se garantidos por ativos de propriedade do investidor</strong> — mudança do RIA.",
          "<strong>Criação ou preservação de 10 empregos full-time</strong> (35 horas ou mais por semana) para <em>qualifying U.S. workers</em> — cidadãos, LPRs, asilados e refugiados. <strong>Não conta o próprio investidor nem cônjuge e filhos.</strong>",
          "<strong>Investimento direto:</strong> apenas empregos <strong>diretos</strong> da NCE. <strong>Via regional center:</strong> admite empregos <strong>indiretos e induzidos</strong> por modelagem econométrica (RIMS II, IMPLAN); o RIA limitou os <strong>empregos de construção com duração inferior a 2 anos a no máximo 75%</strong> do total computado.",
          "<strong>Sustainment period de 2 anos</strong> — o RIA e a política do USCIS (2023/2024) fixam a manutenção do capital em risco por <strong>2 anos a contar da colocação integral do capital à disposição da NCE ou JCE</strong>, e não mais pelo período de residência condicional.",
          "<strong>Envolvimento na gestão</strong> — como <em>limited partner</em> ou membro de LLC com direitos estatutários, o requisito é satisfeito; <strong>não exige gestão diária</strong>.",
          "Admissibilidade migratória geral (INA §212).",
          "<strong>Definição de TEA (pós-RIA):</strong> <strong>rural</strong> — fora de qualquer <em>Metropolitan Statistical Area</em> <strong>e</strong> fora do limite territorial de cidade ou vila com <strong>20.000 habitantes ou mais</strong> pelo censo decenal mais recente; <strong>HUA</strong> — <em>census tract</em>, ou conjunto de <em>tracts</em> diretamente contíguos, com taxa de desemprego de <strong>pelo menos 150% da média nacional</strong>; <strong>infraestrutura</strong> — projeto administrado por agência governamental como financiamento de obra pública.",
          "<strong>Autoridade exclusiva do USCIS</strong> para designar TEA — o RIA <strong>eliminou</strong> a designação por autoridades estaduais. A designação vale por <strong>2 anos</strong>, renovável.",
        ],
        process: [
          {
            step: "Seleção de projeto e due diligence",
            detail:
              "Verificação do regional center — I-956F aprovado, histórico e estrutura. Análise do PPM e da modelagem de empregos.",
            timing: "1–3 meses",
          },
          {
            step: "Subscrição e transferência do capital",
            detail:
              "Assinatura da <em>subscription</em> e do PPM; transferência do capital, em <em>escrow</em> ou direta.",
            timing: "1–2 meses",
          },
          {
            step: "Montagem do dossiê de source of funds",
            detail:
              "Documentação de 7 anos de declarações e transações, com rastreamento de cada transferência internacional — a etapa mais trabalhosa para o investidor brasileiro.",
            timing: "2–4 meses",
          },
          {
            step: "Protocolo do I-526E ou I-526",
            detail:
              "<strong>I-526E</strong> para investimento via regional center; <strong>I-526</strong> para investimento direto.",
            timing: "—",
          },
          {
            step: "Adjudicação do I-526E",
            detail:
              "Prazos por categoria (dados de março de 2026): <strong>rural: 11,5 a 36,5 meses</strong>; <strong>HUA: 17 a 52 meses</strong>; <strong>unreserved: 30,5 a 61 meses</strong>. Média geral reportada em agosto de 2026: cerca de <strong>35 meses</strong> para o I-526E e 34 meses para o I-526.",
            timing: "11,5–61 meses",
          },
          {
            step: "Concurrent filing do I-485 — inovação do RIA",
            detail:
              "Se já estiver nos EUA em status válido e a categoria estiver <strong>current</strong>, o I-485 pode ser protocolado <strong>junto</strong> com o I-526E. <strong>Vantagem operacional decisiva:</strong> o investidor obtém <strong>EAD</strong> (I-765) e <strong>Advance Parole</strong> (I-131) em prazo tipicamente muito inferior à adjudicação do I-526E, com autorização de trabalho e viagem enquanto aguarda.",
            timing: "Simultâneo ao I-526E",
          },
          {
            step: "Alternativa — processamento consular",
            detail:
              "NVC → <strong>DS-260</strong> → entrevista no Consulado (Rio de Janeiro ou São Paulo). NVC: 2 a 6 meses; entrevista variável.",
            timing: "2–6 meses no NVC",
          },
          {
            step: "Green card condicional de 2 anos",
            detail:
              "Emissão do visto CR/IR ou aprovação do I-485. Prazo do I-485 em categoria EB: <strong>9 a 42,5 meses</strong>.",
            timing: "9–42,5 meses",
          },
          {
            step: "Protocolo do I-829",
            detail:
              "Nos <strong>90 dias anteriores</strong> ao segundo aniversário do green card condicional. <em>Adjudicação de vários anos; prazos correntes a verificar em egov.uscis.gov/processing-times.</em>",
            timing: "90 dias antes do 2.º aniversário",
          },
          {
            step: "Green card permanente e cidadania",
            detail:
              "Green card de 10 anos após o I-829. Elegibilidade ao N-400 <strong>5 anos a contar da data de admissão como residente condicional</strong>.",
            timing: "5 anos até o N-400",
          },
        ],
        costs: [
          {
            item: "Investimento — TEA, rural ou infraestrutura",
            value: "USD 800.000",
            note: "Reajuste previsto para 1/jan/2027; capital at risk, com possibilidade de retorno",
          },
          {
            item: "Investimento — padrão",
            value: "USD 1.050.000",
          },
          {
            item: "Taxa administrativa do regional center",
            value: "USD 50.000–70.000",
            note: "Não reembolsável; varia por RC e estrutura",
          },
          {
            item: "Form I-526E — filing fee",
            value: "USD 3.675",
            note: "Restaurado por decisão judicial (Moody et al. v. Mayorkas), que anulou o aumento de abril/2024 para USD 11.160 por ausência do fee study exigido pelo RIA",
          },
          {
            item: "EB-5 Integrity Fund fee",
            value: "USD 1.000",
            note: "Por petição, para investimentos de USD 800.000 ou mais",
          },
          {
            item: "Form I-485 (adjustment of status)",
            value: "USD 1.440",
            note: "Por requerente",
          },
          {
            item: "Taxa consular DS-260 / NVC",
            value: "USD 345",
            note: "Por requerente, se via consular — a confirmar em travel.state.gov",
          },
          {
            item: "USCIS Immigrant Fee",
            value: "USD 235",
            note: "Após emissão do visto, antes da entrada — a confirmar",
          },
          {
            item: "Exame médico (panel physician, Brasil)",
            value: "USD 200–400",
          },
          {
            item: "Form I-829",
            value: "USD 3.750",
            note: "Fee restaurado; algumas fontes ainda indicam USD 9.525 (tabela de abril/2024) — divergência a confirmar no Form G-1055",
          },
          {
            item: "Honorários advocatícios de imigração",
            value: "USD 25.000–60.000",
            note: "Mercado, não oficial",
          },
          {
            item: "Assessoria de source of funds e contabilidade",
            value: "USD 5.000–20.000",
            note: "Mercado",
          },
          {
            item: "Premium processing",
            value: "Indisponível",
            note: "Para I-526E e I-829 — a confirmar",
          },
        ],
        sections: [
          {
            title: "Regras de família",
            body: `<strong>INA §203(d):</strong> o <strong>cônjuge</strong> e os <strong>filhos solteiros menores de 21 anos</strong> (<em>derivative beneficiaries</em>) obtêm green card com o investidor principal, <strong>sem investimento adicional</strong> — apenas as taxas por requerente (I-485 ou DS-260, exame médico, <em>immigrant fee</em>).

<strong>Child Status Protection Act (CSPA)</strong>, Pub. L. 107-208: protege o filho que completa 21 anos durante a adjudicação — a idade «congela» durante o período de pendência do I-526 ou I-526E. Requer <em>«sought to acquire»</em> dentro de 1 ano da disponibilidade do visto.

<strong>Filhos casados e filhos com 21 anos ou mais não são derivativos</strong> — precisam de petição própria.

Filhos adotados e enteados seguem as regras do INA §101(b)(1) — no caso do enteado, casamento antes dos 18 anos do menor.

<em>Nota: há debate sobre se o RIA alterou a forma como os derivativos contam contra a cota anual de vistos — item a verificar.</em>`,
          },
          {
            title: "Riscos documentados",
            body: `· A <strong>autorização do Regional Center Program</strong> foi estendida pelo RIA até <strong>30 de setembro de 2027</strong>. Investimentos diretos (I-526) <strong>não dependem</strong> dessa autorização.
· <strong>Capital «at risk» significa possibilidade real de perda</strong> — não há garantia de devolução; historicamente houve projetos com perda total.
· <strong>I-829 negado</strong> implica <strong>perda do green card condicional</strong>, mesmo com o capital investido.
· O Federal Register de <strong>2 de julho de 2026</strong> publicou norma sobre <strong>revogação automática de petições</strong> em contexto de integridade do programa. <em>Conteúdo específico a verificar — federalregister.gov, documento 2026-13392.</em>
· <strong>Volatilidade das taxas:</strong> em outubro de 2025 o DHS publicou proposta de novo <em>fee rule</em>; em novembro de 2025 decisão judicial restaurou as taxas anteriores a abril de 2024; há regra proposta pendente. <strong>As taxas devem ser conferidas no Form G-1055 na data do protocolo.</strong>`,
          },
        ],
        brazilNote: `<strong>O Brasil está CURRENT em EB-5 unreserved e em todas as categorias reservadas</strong> no Visa Bulletin de agosto de 2026 — situação materialmente diferente da de China e Índia, que enfrentam <em>backlogs</em> de 9,5 e 4 anos na categoria <em>unreserved</em>.

<strong>Mas há advertência formal do Departamento de Estado</strong> de que o aumento de demanda pode exigir <strong>retrogressão ou indisponibilidade da EB-5 Unreserved antes do fim do ano fiscal de 2026</strong> (30 de setembro). O reinício do ano fiscal em 1 de outubro tipicamente restaura a disponibilidade. <strong>As categorias reservadas — rural, HUA e infraestrutura — permanecem current para todos os países</strong>, e são a via de menor exposição a esse risco.

<strong>Consequência fiscal decisiva:</strong> o EB-5 concede <strong>green card</strong> — e, com ele, o <strong>status de US person</strong> descrito no dossiê fiscal: tributação sobre renda mundial; herança e doação sobre patrimônio mundial; pacote declaratório completo (FBAR, 8938, 5471, 3520, 8621); e <strong>regime PFIC sobre todo o portfólio brasileiro de fundos</strong>, alcançando inclusive o período de detenção anterior à residência.

<strong>O planejamento pré-imigratório precisa ser concluído antes da <em>residency starting date</em></strong> — que, no EB-5, é o primeiro dia de presença física nos EUA na condição de LPR. Liquidação de PFICs, step-up de base, <em>check-the-box</em> e estruturação de trust devem estar feitos antes disso.

<strong>E a saída tem preço:</strong> o relógio de <strong>8 anos</strong> do <em>long-term resident</em> começa no primeiro ano-calendário de posse do green card, contando frações de ano como ano cheio. Um green card obtido em dezembro de 2026 e abandonado em janeiro de 2033 já perfaz 8 anos-calendário — acionando o exit tax do §877A se o patrimônio mundial atingir USD 2.000.000.

<strong>Reajuste de 1/jan/2027:</strong> quem pretende entrar pelo valor de USD 800.000 tem uma janela até 31 de dezembro de 2026. Projeções de mercado apontam para USD 900.000 a 937.500 a partir de 2027 — mas o valor oficial dependerá do CPI-U apurado e de publicação pelo USCIS.`,
        sources: [
          {
            t: "USCIS · EB-5 Immigrant Investor Program",
            u: "https://www.uscis.gov/working-in-the-united-states/permanent-workers/eb-5-immigrant-investor-program",
          },
          {
            t: "USCIS · EB-5 Reform and Integrity Act of 2022",
            u: "https://www.uscis.gov/working-in-the-united-states/permanent-workers/eb-5-immigrant-investor-program/eb-5-reform-and-integrity-act-of-2022",
          },
          {
            t: "Cornell LII · 8 U.S. Code §1153(b)(5)",
            u: "https://www.law.cornell.edu/uscode/text/8/1153",
          },
          {
            t: "Departamento de Estado · Visa Bulletin",
            u: "https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin.html",
          },
          {
            t: "USCIS · Form G-1055 — Fee Schedule",
            u: "https://www.uscis.gov/g-1055",
          },
          {
            t: "USCIS · Check case processing times",
            u: "https://egov.uscis.gov/processing-times/",
          },
        ],
      },
      {
        name: "E-2 Treaty Investor — o Brasil NÃO é país-tratado",
        status: "ext",
        legalBasis:
          "<strong>INA §101(a)(15)(E)(ii)</strong> — 8 U.S.C. §1101(a)(15)(E)(ii). <strong>8 C.F.R. §214.2(e)</strong>. <strong>9 FAM 402.9</strong> (Foreign Affairs Manual). Lista oficial de países-tratado: Departamento de Estado, <em>Treaty Countries</em>. Restrição: <strong>AMIGOS Act</strong> — <em>Advancing Mutual Interests and Growing Our Success Act</em> —, incorporado ao <strong>National Defense Authorization Act for FY2023, Pub. L. 117-263</strong>, sancionado em dezembro de 2022.",
        desc: `<strong>O visto E-2 depende da existência de tratado bilateral de comércio e navegação, ou de investimento (BIT), em vigor com os Estados Unidos, que contemple a categoria E.</strong>

<strong>O Brasil está entre as maiores economias excluídas da lista de países-tratado E-2.</strong> As fontes consultadas são convergentes e explícitas. <strong>Nacionais brasileiros não podem requerer o E-2 com base na nacionalidade brasileira.</strong>

<strong>Contexto histórico:</strong> o tratado de comércio e navegação Brasil–EUA de 1935 foi <strong>denunciado</strong>; o BIT assinado em 1995 <strong>nunca foi ratificado</strong> pelo Senado americano; e o <strong>ATEC</strong> (Acordo de Cooperação Económica e Comercial de 2011) e seus protocolos <strong>não incluem cláusula de investidor E-2</strong>. Houve, em legislaturas sucessivas, projetos de lei para incluir o Brasil (<em>Brazil Treaty Trader and Investor Act</em> e correlatos), <strong>nenhum aprovado</strong> até este levantamento. <em>Status legislativo corrente a verificar em congress.gov.</em>

A lista do Departamento de Estado abrange <strong>mais de 80 países</strong>, incluindo Alemanha, Reino Unido, Canadá, Espanha, México, Colômbia, Turquia e Granada.`,
        kv: [
          { l: "Brasil na lista E-2", v: "Não consta" },
          { l: "BIT de 1995", v: "Nunca ratificado" },
          { l: "Tratado de 1935", v: "Denunciado" },
          { l: "ATEC de 2011", v: "Sem cláusula E-2" },
          { l: "Países-tratado", v: "Mais de 80" },
          { l: "AMIGOS Act — domicílio exigido", v: "3 anos contínuos" },
          { l: "Vigência do AMIGOS Act", v: "Dezembro de 2022" },
          { l: "Natureza do E-2", v: "Não-imigrante; não gera green card" },
          { l: "Cônjuge — trabalho", v: "Autorizado automaticamente" },
          { l: "Filhos — trabalho", v: "Não autorizado" },
          { l: "Filhos — perda do status", v: "Aos 21 anos, sem CSPA" },
        ],
        requirements: [
          "<strong>Nacionalidade de país-tratado</strong> — o requisito é de <strong>nacionalidade</strong>, não de residência. <strong>Brasileiros não qualificam pela nacionalidade brasileira.</strong>",
          "<strong>Restrição decisiva do AMIGOS Act:</strong> o estrangeiro que <strong>adquiriu a nacionalidade do país-tratado por meio de investimento financeiro</strong> e que <strong>nunca antes obteve status E</strong> deve ter estado <strong>domiciliado naquele país por período contínuo de, no mínimo, 3 anos</strong>, em algum momento anterior ao pedido do visto E.",
          "<strong>Não estão sujeitos ao requisito de 3 anos:</strong> quem já obteve status E anteriormente; e quem adquiriu a nacionalidade do país-tratado por <strong>nascimento, ascendência, casamento ou naturalização por residência</strong> — ou seja, por via não-investimento.",
          "<strong>Investimento substancial</strong> — não há valor mínimo legal; a prática consular aplica o <strong>teste de proporcionalidade</strong>: o investimento deve ser substancial em relação ao custo total de aquisição ou implantação do negócio. Valores abaixo de USD 100.000 enfrentam escrutínio elevado.",
          "Fundos <strong>irrevogavelmente comprometidos</strong> e <em>at risk</em>.",
          "Empresa <strong>real e operante</strong> (<em>bona fide enterprise</em>) — <strong>não pode ser marginal</strong> (<em>marginality test</em>): deve gerar renda além do sustento do investidor e da família, ou ter capacidade comprovada de gerar empregos em 5 anos.",
          "O investidor exerce <strong>desenvolvimento e direção</strong> do negócio — 50% ou mais de propriedade, ou controlo operacional.",
          "<strong>Intenção de saída</strong> ao término do status — o E-2 é <strong>não-imigrante</strong> e <strong>não gera green card</strong>.",
        ],
        sections: [
          {
            title: "A rota indireta via cidadania de país-tratado — e por que ficou mais longa",
            body: `Como o E-2 exige <strong>nacionalidade</strong> de país-tratado, a via utilizada por brasileiros na prática é a <strong>obtenção prévia de cidadania de país-tratado</strong>, tipicamente por programas de cidadania por investimento (CBI):

· <strong>Granada</strong> — Citizenship by Investment (doação ao NTF ou imóvel aprovado), a partir de cerca de USD 235.000 <em>(valores revisados por acordo regional do Caribe Oriental em 2024 — a confirmar)</em>. <strong>É país-tratado E-2.</strong>
· <strong>Turquia</strong> — cidadania por investimento imobiliário, USD 400.000 <em>(a confirmar)</em>. <strong>É país-tratado E-2.</strong>
· <strong>Portugal</strong> — é país-tratado E-2, mas a naturalização portuguesa <strong>exige residência</strong>, não é CBI.
· <strong>Egito</strong> — é país-tratado E-2.

<strong>A restrição que mudou tudo: o AMIGOS Act (dezembro de 2022).</strong>

Alterou o INA §101(a)(15)(E) para exigir <strong>3 anos de domicílio contínuo</strong> no país-tratado, para quem adquiriu a nacionalidade <strong>por investimento financeiro</strong> e nunca antes teve status E.

<strong>Consequências práticas:</strong>
· <strong>Comprar passaporte de Granada e requerer E-2 imediatamente NÃO é possível desde dezembro de 2022.</strong>
· O requisito é de <strong>domicílio contínuo de 3 anos</strong>, <strong>não de mera titularidade do passaporte por 3 anos</strong> — a distinção é substancial e frequentemente ignorada em material comercial.
· Ficam <strong>fora</strong> da restrição quem já teve status E, e quem obteve a nacionalidade por nascimento, ascendência, casamento ou naturalização por residência.

<em>A seção específica do Pub. L. 117-263 que veicula o AMIGOS Act deve ser verificada em congress.gov ou govinfo.gov.</em>`,
          },
          {
            title: "Características operacionais, para quem tem nacionalidade elegível",
            body: `· <strong>Não é caminho para green card</strong> — é status não-imigrante <strong>renovável indefinidamente</strong> em incrementos de até 2 anos de admissão, com visto de validade variável por reciprocidade.
· <strong>Cônjuge de titular E-2 tem autorização de trabalho automática</strong> (<em>work-authorized incident to status</em>, desde política do USCIS de 2021/2022) — não precisa de EAD, embora possa solicitá-lo.
· <strong>Filhos solteiros menores de 21 anos</strong> obtêm status E-2 derivado, <strong>com autorização de estudo, sem autorização de trabalho</strong>; e <strong>perdem o status ao completar 21 anos</strong> — <strong>não há CSPA para não-imigrantes</strong>.
· <strong>Taxas:</strong> Form DS-160 mais taxa consular de visto de <strong>USD 315</strong> para a categoria E <em>(a confirmar)</em>, mais <strong>USD 250 de Visa Integrity Fee</strong>; ou, para mudança de status dentro dos EUA, Form I-129 a <strong>USD 1.015</strong> mais <em>premium processing</em> de <strong>USD 2.965</strong> <em>(valores a confirmar no Form G-1055)</em>.`,
          },
        ],
        brazilNote: `<strong>O E-2 está fechado ao brasileiro pela nacionalidade brasileira.</strong> Esta é uma conclusão firme, não uma incerteza.

A rota indireta — obter cidadania de país-tratado por investimento e depois requerer o E-2 — <strong>continua juridicamente possível, mas deixou de ser rápida</strong>: o <strong>AMIGOS Act</strong>, desde dezembro de 2022, exige <strong>3 anos de domicílio contínuo</strong> no país-tratado antes do pedido do visto E, para quem adquiriu a nacionalidade por investimento.

<strong>Isso significa que o desenho «passaporte de Granada mais E-2» passou de um projeto de meses para um projeto de mais de três anos</strong>, com exigência de <strong>domicílio efetivo</strong> — não apenas de titularidade do passaporte.

<strong>Alternativas reais para o brasileiro que busca residência ativa nos EUA:</strong> <strong>EB-5</strong> (investimento, com green card), <strong>EB-1A</strong> e <strong>EB-2 NIW</strong> (mérito, com auto-petição e green card), <strong>O-1A</strong> e <strong>L-1A</strong> (não-imigrantes, com patrocinador).

<strong>Materiais comerciais que apresentem o E-2 via Granada como solução de curto prazo para brasileiros estão desatualizados em mais de três anos.</strong>`,
        warning: `<strong>Brasileiros não são elegíveis ao E-2 pela nacionalidade brasileira</strong> — o Brasil não é país-tratado, o BIT de 1995 nunca foi ratificado, e nenhum projeto de inclusão foi aprovado.

<strong>E a via indireta por cidadania por investimento exige agora 3 anos de domicílio contínuo</strong> no país-tratado (AMIGOS Act, dezembro de 2022), não bastando a titularidade do passaporte. Qualquer oferta que prometa E-2 imediato mediante compra de cidadania caribenha está incorreta.`,
        sources: [
          {
            t: "Departamento de Estado · Treaty Countries",
            u: "https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/fees/treaty.html",
          },
          {
            t: "Departamento de Estado · Treaty Trader (E-1) e Treaty Investor (E-2)",
            u: "https://travel.state.gov/content/travel/en/us-visas/employment/treaty-trader-investor-visa-e.html",
          },
          {
            t: "Cornell LII · 8 U.S. Code §1101(a)(15)(E)",
            u: "https://www.law.cornell.edu/uscode/text/8/1101",
          },
          {
            t: "Congress.gov · National Defense Authorization Act for FY2023 (Pub. L. 117-263)",
            u: "https://www.congress.gov/bill/117th-congress/house-bill/7776",
          },
        ],
      },
      {
        name: "EB-1A e EB-2 NIW — as rotas de auto-petição",
        status: "ok",
        legalBasis:
          "<strong>EB-1A:</strong> INA §203(b)(1)(A) — 8 U.S.C. §1153(b)(1)(A); <strong>8 C.F.R. §204.5(h)</strong>; USCIS Policy Manual, Volume 6, Part F, Chapter 2. <strong>EB-2 NIW:</strong> INA §203(b)(2)(B)(i) — 8 U.S.C. §1153(b)(2)(B)(i); <strong>8 C.F.R. §204.5(k)</strong>; USCIS Policy Manual, Volume 6, Part F, Chapter 5. Metodologia de análise: <em>Kazarian v. USCIS</em>, 596 F.3d 1115 (9th Cir. 2010). Critérios do <em>waiver</em>: <strong><em>Matter of Dhanasar</em>, 26 I&amp;N Dec. 884 (AAO 2016)</strong>.",
        desc: `As duas rotas de <strong>green card sem oferta de emprego, sem patrocinador e sem PERM</strong> — e ambas admitem <strong>auto-petição</strong>.

<strong>EB-1A — Alien of Extraordinary Ability.</strong> Padrão: «<em>one of that small percentage who have risen to the very top of the field of endeavor</em>» (8 C.F.R. §204.5(h)(2)), com <strong>aclamação nacional ou internacional sustentada</strong>.
<strong>Estrutura probatória em duas etapas</strong> (confirmada em decisões da AAO de 2026): (1) <strong>critérios</strong> — prémio internacional único de grande relevo (Nobel, Óscar, Pulitzer, medalha olímpica) <strong>ou</strong> satisfação de <strong>3 ou mais dos 10 critérios</strong> do §204.5(h)(3); e (2) <strong><em>final merits determination</em></strong> — análise holística da totalidade das provas para aferir se há aclamação sustentada e posicionamento no topo da área.

<strong>EB-2 NIW — National Interest Waiver.</strong> Pré-requisito de categoria EB-2: <strong>grau académico avançado</strong> (mestrado ou superior, ou bacharelado mais 5 anos de experiência progressiva), <strong>ou</strong> <strong>habilidade excecional</strong> (3 ou mais de 6 critérios do §204.5(k)(3)(ii)).
Sobre isso, aplicam-se os <strong>três <em>prongs</em> cumulativos de <em>Matter of Dhanasar</em></strong>, que substituiu o padrão anterior de <em>Matter of New York State Dept. of Transportation</em> (NYSDOT), 22 I&amp;N Dec. 215 (1998).

<strong>Visa Bulletin:</strong> <strong>EB-1 e EB-2 CURRENT para «All Chargeability Areas», faixa que inclui o Brasil</strong>, em agosto de 2026. EB-2 Índia consta como <em>unavailable</em>. Houve retrogressões pontuais em julho de 2026, e categorias <em>current</em> podem retrogredir antes do encerramento do ano fiscal por esgotamento de cota.`,
        kv: [
          { l: "Auto-petição", v: "Permitida em ambas" },
          { l: "Oferta de emprego", v: "Não exigida" },
          { l: "PERM (labor certification)", v: "Dispensada" },
          { l: "EB-1A — critérios", v: "3 de 10, mais final merits" },
          { l: "EB-2 NIW — critérios", v: "3 prongs de Dhanasar" },
          { l: "Brasil no Visa Bulletin", v: "Current (ago/2026)" },
          { l: "Form I-140", v: "USD 715" },
          { l: "Premium processing", v: "USD 2.805 · 15 dias úteis" },
          { l: "I-140 sem premium", v: "12–24 meses" },
          { l: "Green card", v: "Permanente, não condicional" },
        ],
        requirements: [
          "<strong>EB-1A — Etapa 1, os 10 critérios (bastam 3):</strong> prémios nacionais ou internacionais de menor relevo por excelência; filiação a associações que exijam realização destacada, julgada por especialistas reconhecidos; <strong>matérias publicadas SOBRE o requerente</strong> em mídia profissional ou de grande circulação; atuação como <strong>juiz ou avaliador</strong> do trabalho de terceiros na área; <strong>contribuições originais de significância maior</strong> (científica, académica, artística, atlética ou empresarial); <strong>autoria</strong> de artigos académicos em periódicos profissionais ou mídia de grande circulação; exposição do trabalho em mostras artísticas; desempenho de <strong>papel principal ou crítico</strong> em organizações de reputação destacada; <strong>remuneração elevada</strong> em relação a pares; e sucesso comercial em artes cénicas.",
          "<strong>EB-1A — Etapa 2:</strong> <em>final merits determination</em> — análise holística da totalidade das provas, sob a metodologia de <em>Kazarian</em>.",
          "<strong>EB-1A — atualizações de política do USCIS (2024–2026):</strong> <strong>prémios de equipe podem contar</strong>, desde que documentada a contribuição específica e crítica do requerente; e <strong>filiações passadas passam a contar</strong>, não apenas as vigentes, desde que a associação exigisse realização destacada à época. <em>Datas e números das atualizações do Policy Manual a verificar.</em>",
          "<strong>EB-2 NIW — Prong 1:</strong> o <em>proposed endeavor</em> tem <strong>mérito substancial</strong> e <strong>importância nacional</strong>. Mérito pode ser em negócios, empreendedorismo, ciência, tecnologia, cultura, saúde ou educação. A importância nacional é avaliada pelas <strong>implicações prospetivas do empreendimento</strong> — <strong>não pela área em abstrato</strong>.",
          "<strong>EB-2 NIW — Prong 2:</strong> o requerente está <strong>bem posicionado</strong> para avançar o empreendimento — avaliado por formação, histórico de sucesso, conhecimento especializado, plano de execução, interesse de investidores, utilizadores ou clientes, e progresso já alcançado.",
          "<strong>EB-2 NIW — Prong 3:</strong> no cômputo geral, <strong>beneficia os Estados Unidos dispensar</strong> os requisitos de oferta de emprego e de <em>labor certification</em>. Considera-se a impraticabilidade de obter oferta de emprego, o benefício mesmo havendo trabalhadores americanos disponíveis, e a urgência do interesse nacional.",
          "<strong>EB-1A:</strong> intenção de continuar trabalhando na área de <em>expertise</em> nos Estados Unidos.",
        ],
        process: [
          {
            step: "Montagem do dossiê probatório",
            detail:
              "Cartas de recomendação independentes, métricas de citação, evidências dos critérios, plano de <em>endeavor</em> (no NIW). É a etapa que determina o resultado.",
            timing: "2–6 meses",
          },
          {
            step: "Form I-140",
            detail:
              "Petição com pedido de classificação EB-1A ou EB-2 NIW. Adjudicação regular de <strong>12 a 24 meses</strong>; com <em>premium processing</em>, <strong>15 dias úteis</strong>.",
            timing: "15 dias a 24 meses",
          },
          {
            step: "Form I-485 — concurrent filing",
            detail:
              "Se já estiver nos EUA em status válido e a categoria estiver <strong>current</strong>, o I-485 pode ser protocolado junto com o I-140. Prazo do I-485 em categoria EB: <strong>9 a 42,5 meses</strong>.",
            timing: "9–42,5 meses",
          },
          {
            step: "Alternativa — processamento consular",
            detail:
              "NVC → DS-260 → entrevista no Consulado (Rio de Janeiro ou São Paulo). NVC: 2 a 6 meses.",
            timing: "2–6 meses no NVC",
          },
          {
            step: "Green card permanente",
            detail:
              "<strong>Green card de 10 anos, não condicional</strong> — não há I-829 nem remoção de condições, ao contrário do EB-5.",
            timing: "—",
          },
        ],
        costs: [
          { item: "Form I-140", value: "USD 715" },
          {
            item: "Premium processing do I-140",
            value: "USD 2.805",
            note: "15 dias úteis; valor de 2026, com ajustes por CPI-U",
          },
          {
            item: "Form I-485 (adjustment of status)",
            value: "USD 1.440",
            note: "Por requerente",
          },
          {
            item: "Forms I-765 (EAD) e I-131 (Advance Parole)",
            value: "A confirmar",
            note: "Verificar no Form G-1055",
          },
          {
            item: "Taxa consular DS-260 / NVC",
            value: "USD 345",
            note: "Por requerente — a confirmar",
          },
          {
            item: "USCIS Immigrant Fee",
            value: "USD 235",
            note: "A confirmar",
          },
          {
            item: "Honorários advocatícios",
            value: "USD 10.000–30.000",
            note: "Mercado",
          },
        ],
        sections: [
          {
            title: "EB-1A e EB-2 NIW — quando cada uma se aplica",
            body: `<strong>EB-1A</strong> exige <strong>aclamação sustentada</strong> e posicionamento no topo da área. É a rota de quem já tem reconhecimento consolidado — prémios, cobertura de mídia, cargos de liderança, citações relevantes.
<strong>Vantagem:</strong> a categoria EB-1 tem prioridade na fila de vistos, e permanece <em>current</em> para o Brasil.

<strong>EB-2 NIW</strong> não exige aclamação — exige que o <strong>empreendimento proposto</strong> tenha mérito substancial e importância nacional, que o requerente esteja bem posicionado para executá-lo, e que dispensar a oferta de emprego beneficie os Estados Unidos.
<strong>Perfis documentados:</strong> pesquisadores, profissionais STEM, médicos, engenheiros, empreendedores de base tecnológica, executivos, especialistas em saúde pública, IA e biotecnologia.

<strong>Ambas dispensam PERM e admitem auto-petição</strong> — o que as torna as únicas rotas de green card que <strong>não dependem de terceiro</strong> além do EB-5.

<em>Premium processing está disponível para o I-140 em ambas desde 2023 — disponibilidade corrente a confirmar.</em>`,
          },
          {
            title: "Regras de família",
            body: `<strong>INA §203(d):</strong> cônjuge e filhos solteiros menores de 21 anos como <strong>derivativos</strong>, sem petição própria.

<strong>CSPA aplicável</strong> — a idade do filho «congela» durante a pendência do I-140.

<strong>Green card permanente (10 anos), sem condicionalidade</strong> — diferentemente do EB-5, não há residência condicional de 2 anos nem I-829.`,
          },
        ],
        brazilNote: `<strong>EB-1 e EB-2 estão CURRENT para o Brasil</strong> no Visa Bulletin de agosto de 2026 — situação favorável em comparação com a Índia (EB-2 <em>unavailable</em>) e a China. <em>Categorias current podem retrogredir antes do encerramento do ano fiscal; conferir o bulletin do mês.</em>

<strong>São as rotas de menor dependência de terceiros:</strong> sem oferta de emprego, sem patrocinador, sem PERM, com auto-petição. Para o profissional brasileiro com trajetória consolidada — pesquisador, médico, engenheiro, executivo, empreendedor de base tecnológica —, tendem a ser a via mais direta ao green card, e a um custo de taxas oficiais uma ordem de grandeza inferior ao EB-5.

<strong>Mas o resultado depende inteiramente do dossiê.</strong> Cartas de recomendação de instituições brasileiras devem contextualizar a reputação da instituição no setor; publicações, patentes e prémios brasileiros precisam ser explicados quanto ao seu alcance; e o <em>proposed endeavor</em> do NIW deve ser articulado em termos de <strong>implicações prospetivas para os Estados Unidos</strong>, não da relevância da área em abstrato.

<strong>Consequência fiscal idêntica à do EB-5:</strong> o green card traz o status de <em>US person</em>, com tributação sobre renda mundial, o pacote declaratório completo e o regime PFIC sobre o portfólio brasileiro. <strong>O planejamento pré-imigratório deve estar concluído antes da <em>residency starting date</em></strong> — e, no caso de aprovação por <em>premium processing</em>, essa data pode chegar bem mais rápido do que no EB-5.`,
        sources: [
          {
            t: "USCIS · Employment-Based Immigration: First Preference EB-1",
            u: "https://www.uscis.gov/working-in-the-united-states/permanent-workers/employment-based-immigration-first-preference-eb-1",
          },
          {
            t: "USCIS · Employment-Based Immigration: Second Preference EB-2",
            u: "https://www.uscis.gov/working-in-the-united-states/permanent-workers/employment-based-immigration-second-preference-eb-2",
          },
          {
            t: "USCIS Policy Manual · Volume 6, Part F — Employment-Based Classifications",
            u: "https://www.uscis.gov/policy-manual/volume-6-part-f",
          },
          {
            t: "Cornell LII · 8 C.F.R. §204.5",
            u: "https://www.law.cornell.edu/cfr/text/8/204.5",
          },
          {
            t: "Departamento de Estado · Visa Bulletin",
            u: "https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin.html",
          },
        ],
      },
      {
        name: "O-1A, L-1A e H-1B — as rotas não-imigrantes",
        status: "changed",
        legalBasis:
          "<strong>O-1A:</strong> INA §101(a)(15)(O)(i) — 8 U.S.C. §1101(a)(15)(O)(i); 8 C.F.R. §214.2(o). <strong>L-1A:</strong> INA §101(a)(15)(L) — 8 U.S.C. §1101(a)(15)(L); 8 C.F.R. §214.2(l). <strong>H-1B:</strong> INA §101(a)(15)(H)(i)(b); 8 C.F.R. §214.2(h); 20 C.F.R. Part 655 (LCA). <strong>EB-1C:</strong> INA §203(b)(1)(C).",
        desc: `<strong>O-1A — Extraordinary Ability in Sciences, Education, Business or Athletics.</strong> Prémio internacional único de grande relevo <strong>ou 3 ou mais de 8 critérios</strong> do §214.2(o)(3)(iii). <em>Nota: são <strong>8</strong> critérios no O-1A, contra <strong>10</strong> no EB-1A.</em>
<strong>Exige petição por empregador ou agente americano — NÃO admite auto-petição</strong>, diferença central em relação ao EB-1A. Um <em>agent</em> pode peticionar em nome de múltiplos empregadores. <strong>Sem cota anual</strong>; <em>dual intent</em> admitido na prática. Validade inicial de até 3 anos, com extensões de 1 ano ilimitadas. Exige <strong>consultation letter</strong> de organização ou sindicato da área.

<strong>L-1A — Intracompany Transferee (Executive or Manager).</strong> Exige <strong>relação societária qualificada</strong> entre a entidade estrangeira e a americana — matriz, filial, subsidiária ou afiliada sob controlo comum. Duração máxima de <strong>7 anos</strong> (L-1A) ou 5 anos (L-1B).
<strong>Ponte direta para green card:</strong> o L-1A gerencial ou executivo tem correspondência com o <strong>EB-1C</strong> (<em>Multinational Manager or Executive</em>), que <strong>dispensa PERM</strong>. <em>Dual intent</em> expressamente admitido (8 C.F.R. §214.2(l)(16)).

<strong>H-1B — Specialty Occupation.</strong> Cota anual de <strong>85.000</strong> (65.000 mais 20.000 para mestres e doutores de instituições americanas). Duração de 3 anos, extensível a 6; extensões além disso sob AC21 §§104(c) e 106(a). <strong>Duas alterações estruturais em 2025–2026</strong> — ver a seção específica.`,
        kv: [
          { l: "O-1A — auto-petição", v: "Não admitida" },
          { l: "O-1A — critérios", v: "3 de 8" },
          { l: "O-1A — cota", v: "Nenhuma" },
          { l: "O-1A — duração", v: "3 anos + 1/1 ilimitado" },
          { l: "O-3 (dependentes)", v: "Sem autorização de trabalho" },
          { l: "L-1A — experiência prévia", v: "1 ano em 3" },
          { l: "L-1A — duração máxima", v: "7 anos" },
          { l: "L-1A — new office", v: "Aprovação inicial de 1 ano" },
          { l: "L-2 (cônjuge)", v: "Trabalho automático" },
          { l: "H-1B — cota anual", v: "85.000" },
          { l: "H-1B — taxa de USD 100k", v: "Em vigor sob stay judicial" },
          { l: "H-1B — loteria", v: "Ponderada por salário, FY 2027" },
          { l: "Visa Integrity Fee", v: "USD 250, sem waiver" },
        ],
        requirements: [
          "<strong>O-1A:</strong> prémio internacional único de grande relevo, ou <strong>3 ou mais de 8 critérios</strong> — prémios; filiações; matérias publicadas sobre o requerente; participação como juiz; contribuições originais de significância maior; autoria de artigos académicos; papel crítico em organizações de reputação destacada; e alta remuneração.",
          "<strong>O-1A:</strong> petição por <strong>empregador ou agente americano</strong>; e <strong>consultation letter</strong> de organização, sindicato ou <em>peer group</em> da área.",
          "<strong>L-1A:</strong> relação societária <strong>qualificada</strong> entre a entidade estrangeira e a americana — matriz, filial, subsidiária ou afiliada sob controlo comum.",
          "<strong>L-1A:</strong> o empregado trabalhou <strong>1 ano contínuo nos 3 anos anteriores</strong> para a entidade estrangeira, em função <strong>executiva ou gerencial</strong> (L-1A) ou de <strong>conhecimento especializado</strong> (L-1B).",
          "<strong>L-1A:</strong> a entidade estrangeira <strong>permanece em operação</strong> durante todo o período do L-1; e a função nos EUA é executiva ou gerencial.",
          "<strong>L-1A «new office»</strong> (entidade americana em operação há menos de 1 ano) — escrutínio elevado: <strong>instalações físicas suficientes já contratadas</strong> para abrigar o novo escritório; prova de que a empresa <strong>suportará uma posição executiva ou gerencial em 1 ano</strong>; e <strong>aprovação inicial limitada a 1 ano</strong>, contra 3 anos da petição padrão, com extensões subsequentes de até 2 anos.",
          "<strong>H-1B:</strong> ocupação especializada exigindo, no mínimo, <strong>bacharelado</strong> (ou equivalente) na área específica; <strong>LCA certificada pelo DOL</strong> (Form ETA-9035) com pagamento do <em>prevailing wage</em>; e patrocínio por empregador — <strong>não admite auto-petição</strong>, salvo estruturas de <em>employer-employee relationship</em> válidas.",
          "<strong>H-1B — cap-exempt:</strong> instituições de ensino superior, entidades ligadas e organizações de pesquisa sem fins lucrativos estão <strong>fora da cota</strong>.",
        ],
        sections: [
          {
            title: "H-1B — as duas alterações estruturais de 2025 e 2026",
            body: `<strong>1. Taxa de USD 100.000 — Proclamação de 19 de setembro de 2025.</strong>
Impõe pagamento de <strong>USD 100.000 pelo empregador, ANTES do protocolo</strong> da petição H-1B, para beneficiário <strong>que esteja fora dos Estados Unidos</strong> — inclusive nos casos de processamento consular.

<strong>Status judicial em agosto de 2026:</strong> o tribunal federal do <strong>Distrito de Massachusetts declarou a taxa ilegal em 8 de junho de 2026</strong>, qualificando-a como tributo que o Executivo não tem competência para instituir. <strong>Em 12 de junho de 2026, o mesmo tribunal suspendeu a própria decisão (<em>stay</em>)</strong>, restabelecendo a cobrança durante a apelação. <strong>A taxa vinha sendo cobrada no fim de junho de 2026</strong>, com recurso pendente no <strong>First Circuit</strong>. Um tribunal no estado de Washington havia anteriormente <strong>mantido</strong> a taxa, configurando divergência entre circuitos.
<em>Número da Proclamação e status processual mais recente a verificar em federalregister.gov e nos autos do First Circuit.</em>

<strong>2. Loteria ponderada por nível salarial.</strong>
Regra final do DHS publicada em <strong>29 de dezembro de 2025</strong>, <strong>sem acolhimento de comentários públicos</strong>, com <strong>eficácia a partir de 27 de fevereiro de 2026</strong>.
Aplica-se a partir da <strong>loteria do FY 2027</strong>: as 85.000 vagas passam a ser sorteadas por sistema que atribui de <strong>1 a 4 entradas por registo</strong>, conforme o <strong>nível de <em>prevailing wage</em></strong> da posição (OES Levels I a IV).
<strong>Efeito documentado:</strong> eleva a probabilidade de seleção de posições de salário mais alto e <strong>reduz a de posições de nível I</strong>.`,
          },
          {
            title: "Custos e taxas transversais",
            body: `<strong>O-1A:</strong> Form I-129 a <strong>USD 1.015</strong> <em>(a confirmar)</em>, mais <em>premium processing</em> de <strong>USD 2.965</strong> — efetivo desde 1/mar/2026, após reajuste de 5,72% por CPI-U, saindo de USD 2.805 —, mais <strong>Visa Integrity Fee de USD 250</strong>.

<strong>L-1A:</strong> Form I-129 a USD 1.015 <em>(a confirmar)</em>; <strong>Fraud Prevention and Detection Fee de USD 500</strong>; taxa «L Fraud» (Pub. L. 114-113) de <strong>USD 4.500</strong> para empregadores com 50 ou mais empregados e mais de 50% do quadro em status H-1B ou L-1 <em>(vigência a confirmar)</em>; <em>premium processing</em> de USD 2.965; e Visa Integrity Fee de USD 250. Existe <strong>Blanket L</strong> para grupos que atendam critérios de porte.

<strong>H-1B:</strong> registo de loteria <em>(valor a confirmar)</em>; Form I-129 a USD 1.015 <em>(a confirmar)</em>; <strong>Asylum Program Fee de USD 600</strong> (USD 300 para pequeno empregador; USD 0 para <em>nonprofit</em>); taxa ACWIA de USD 750 ou 1.500 <em>(a confirmar)</em>; Fraud Fee de USD 500; a <strong>taxa de USD 100.000</strong> para beneficiário fora dos EUA (em litígio); e Visa Integrity Fee de USD 250.

<strong>Taxas transversais criadas pelo One Big Beautiful Bill Act</strong> (Pub. L. 119-21, de 4/jul/2025):
· <strong>Visa Integrity Fee — USD 250</strong>: incide sobre <strong>todo visto de não-imigrante</strong>; <strong>não é passível de <em>waiver</em></strong>; nominalmente reembolsável ao viajante que cumprir as condições e sair no prazo, mas <strong>não há processo de reembolso operacional divulgado</strong>;
· <strong>ESTA</strong>: de USD 21 para <strong>USD 40</strong>, desde 30/set/2025 — <strong>não aplicável a brasileiros</strong>, pois o Brasil não integra o Visa Waiver Program;
· <strong>I-94 (fronteira terrestre)</strong>: de USD 6 para USD 30;
· <strong>TPS</strong>: de USD 50 para USD 500;
· <strong>EAD vinculado a TPS ou asilo</strong>: de USD 470 para USD 550, <strong>sem <em>waiver</em></strong>.`,
          },
          {
            title: "Regras de família",
            body: `<strong>O-3</strong> — cônjuge e filhos solteiros menores de 21 anos. <strong>SEM autorização de trabalho.</strong> Há ainda o <strong>O-2</strong>, para pessoal de apoio essencial.

<strong>L-2</strong> — cônjuge com <strong>autorização de trabalho automática</strong> <em>incident to status</em> (política do USCIS desde novembro de 2021); filhos solteiros menores de 21 anos com autorização de estudo.

<strong>H-4</strong> — cônjuge e filhos. <strong>EAD H-4 apenas se o principal tiver I-140 aprovado</strong> ou extensão sob AC21 §106.

<strong>Em todos os casos, filhos perdem o status ao completar 21 anos — não há CSPA para não-imigrantes.</strong>`,
          },
        ],
        brazilNote: `Para o brasileiro, estas três rotas têm perfis muito distintos:

<strong>O-1A</strong> — o padrão probatório é próximo ao do EB-1A (8 critérios em vez de 10), mas <strong>exige empregador ou agente americano</strong>. Na prática, funciona como <strong>ponte</strong>: entra-se com O-1A e peticiona-se o EB-1A em paralelo, aproveitando o mesmo dossiê.

<strong>L-1A</strong> — a rota natural para o executivo de empresa brasileira que abre operação nos Estados Unidos. A modalidade <strong>«new office»</strong> tem escrutínio elevado e aprovação inicial de apenas <strong>1 ano</strong>, exigindo instalações físicas já contratadas e prova de que a operação suportará uma posição executiva em 12 meses. <strong>Ponte direta para o EB-1C</strong>, que dispensa PERM.

<strong>H-1B</strong> — a rota de maior atrito hoje. A <strong>taxa de USD 100.000</strong> para beneficiário fora dos EUA — em vigor sob <em>stay</em> judicial, com apelação pendente — atinge exatamente o brasileiro que se candidata do Brasil. E a <strong>loteria ponderada por salário</strong>, a partir do FY 2027, reduz a probabilidade de seleção de posições de nível salarial inicial.

<strong>Nenhuma das três é imigrante.</strong> O-1A e L-1A admitem <em>dual intent</em> e servem como ponte ao green card (EB-1A e EB-1C, respetivamente). O H-1B também admite <em>dual intent</em>, mas depende de patrocinador e de sorteio.

<strong>Consequência fiscal:</strong> o titular de visto não-imigrante <strong>não é automaticamente US person</strong> — mas cruza o <strong>Substantial Presence Test</strong> rapidamente, se residir efetivamente nos Estados Unidos. A partir daí, aplicam-se integralmente a tributação sobre renda mundial e o pacote declaratório. <strong>O planejamento pré-imigratório deve preceder a mudança, não a obtenção do green card.</strong>`,
        sources: [
          {
            t: "USCIS · O-1 Visa: Individuals with Extraordinary Ability or Achievement",
            u: "https://www.uscis.gov/working-in-the-united-states/temporary-workers/o-1-visa-individuals-with-extraordinary-ability-or-achievement",
          },
          {
            t: "USCIS · L-1A Intracompany Transferee Executive or Manager",
            u: "https://www.uscis.gov/working-in-the-united-states/temporary-workers/l-1a-intracompany-transferee-executive-or-manager",
          },
          {
            t: "USCIS · H-1B Specialty Occupations",
            u: "https://www.uscis.gov/working-in-the-united-states/temporary-workers/h-1b-specialty-occupations",
          },
          {
            t: "Cornell LII · 8 C.F.R. §214.2",
            u: "https://www.law.cornell.edu/cfr/text/8/214.2",
          },
          {
            t: "Federal Register",
            u: "https://www.federalregister.gov",
          },
        ],
      },
      {
        name: "Gold Card e Platinum Card — Executive Order 14351",
        status: "risk",
        legalBasis:
          "<strong>Executive Order 14351, «The Gold Card»</strong>, assinada em <strong>19 de setembro de 2025</strong>. <strong>Criada por ato do Executivo, sem lei do Congresso.</strong> Portal: trumpcard.gov. Formulário: <strong>Form I-140G</strong> (USCIS). Abertura de aplicações: <strong>10 de dezembro de 2025</strong>.",
        desc: `<strong>Estrutura do programa:</strong>
· <strong>Individual Gold Card</strong> — contribuição de <strong>USD 1.000.000</strong> ao Departamento de Comércio ou ao Tesouro, <strong>não reembolsável</strong>, mais <strong>USD 15.000</strong> de taxa de processamento do DHS, também não reembolsável;
· <strong>Corporate Gold Card</strong> — <strong>USD 2.000.000</strong> por funcionário patrocinado;
· <strong>Membros da família</strong> — <strong>cada um exige contribuição própria de USD 1.000.000 mais USD 15.000</strong>;
· <strong>Platinum Card</strong> — <strong>USD 5.000.000</strong>, <strong>em lista de espera; não liberado</strong>.

<strong>Ponto estrutural decisivo:</strong> o Gold Card <strong>NÃO é uma nova categoria de visto</strong>. É apresentado como via de <strong>processamento acelerado dentro das categorias estatutárias existentes EB-1 e EB-2 NIW</strong> — o Form I-140G substitui o I-140 tradicional, mas <strong>o requerente ainda precisa demonstrar os requisitos substantivos de EB-1A ou EB-2 NIW</strong>. <strong>O pagamento não dispensa a qualificação.</strong>

Fontes indicam ainda que o programa <strong>não admite <em>Adjustment of Status</em></strong> — apenas processamento consular. <em>A confirmar nas instruções do Form I-140G.</em>`,
        kv: [
          { l: "Individual Gold Card", v: "USD 1.000.000 + USD 15.000" },
          { l: "Corporate Gold Card", v: "USD 2.000.000 por funcionário" },
          { l: "Por familiar", v: "USD 1.000.000 + USD 15.000 cada" },
          { l: "Platinum Card", v: "USD 5.000.000 — não lançada" },
          { l: "Contribuição", v: "Não reembolsável" },
          { l: "Base jurídica", v: "Executive Order, não lei" },
          { l: "Categoria estatutária", v: "EB-1 ou EB-2 NIW" },
          { l: "Qualificação substantiva", v: "Não dispensada" },
          { l: "Adjustment of Status", v: "Não admitido (a confirmar)" },
          { l: "Aprovações até 27/jul/2026", v: "1" },
          { l: "Litígio", v: "AAUP v. DHS, sem decisão" },
        ],
        requirements: [
          "<strong>Contribuição de USD 1.000.000</strong> (individual) ou <strong>USD 2.000.000</strong> (corporate, por funcionário patrocinado), <strong>não reembolsável</strong>.",
          "<strong>Taxa de processamento do DHS de USD 15.000</strong>, também não reembolsável.",
          "<strong>Cada membro da família exige contribuição própria</strong> de USD 1.000.000 mais USD 15.000 — não há derivação gratuita como no EB-5 ou no EB-1A.",
          "<strong>Demonstrar os requisitos substantivos de EB-1A ou EB-2 NIW</strong> — o Form I-140G substitui o I-140, mas <strong>não substitui a qualificação</strong>. O pagamento acelera o processamento, não dispensa o mérito.",
          "<strong>Processamento consular</strong> — o programa não admitiria <em>Adjustment of Status</em>. <em>A confirmar nas instruções do formulário.</em>",
        ],
        sections: [
          {
            title: "Os números divulgados — a adesão real",
            body: `Dados apurados até <strong>27 de julho de 2026</strong>:
· registos no portal: <strong>338</strong> (fim de abril de 2026)
· registos que pagaram a taxa: <strong>165</strong> (fim de abril de 2026)
· petições <strong>I-140G efetivamente protocoladas: 59</strong> (fim de abril de 2026)
· <strong>aprovações confirmadas: 1</strong>

<em>Fonte: divulgação em litígio e cobertura jornalística. Não confirmado por dado oficial do USCIS.</em>

<strong>Fatores de adesão reportados.</strong> A cobertura jornalística associa a baixa adesão a dois fatores: (i) a <strong>incerteza jurídica do programa</strong>; e (ii) a <strong>sujeição do <em>green card holder</em> à tributação mundial americana</strong> — descrita nas reportagens como resistência de investidores globais a submeter patrimônio e renda internacionais ao IRS em troca do status. <em>Fatos reportados, sem juízo de valor.</em>`,
          },
          {
            title: "Litígio — AAUP v. DHS",
            body: `<strong>Ação ajuizada em 3 de fevereiro de 2026</strong>, no <em>U.S. District Court for the District of Columbia</em>, pela <strong>American Association of University Professors (AAUP)</strong> e por profissionais imigrantes individuais, contra o DHS, o Departamento de Estado e o Departamento de Comércio.

<strong>Fundamentos:</strong> o programa cria sistema de <em>pay-to-play</em> que <strong>contorna os critérios meritórios estatutários</strong>; carece de <strong>autorização do Congresso</strong>; e viola o <strong>Administrative Procedure Act</strong> (5 U.S.C. §§551 e seguintes, e §706) e a <strong>Immigration and Nationality Act</strong>.

<strong>Status em meados de 2026:</strong> <strong>nenhuma liminar concedida; nenhuma decisão de mérito; moção de <em>dismissal</em> do governo pendente</strong>, centrada primordialmente em <em>standing</em> dos autores, <strong>sem enfrentar o mérito</strong>.

<em>Juiz relatado: Richard J. Leon — atribuição mencionada em fonte secundária, a verificar no PACER ou CourtListener. Há ainda ação separada relativa a transparência/FOIA movida pela Democracy Defenders Fund — a confirmar.</em>`,
          },
          {
            title: "Platinum Card — e a promessa tributária sem base normativa",
            body: `<strong>Anunciada em setembro de 2025; em agosto de 2026 permanece em fase de lista de espera — não aberta a aplicações, sem data de lançamento divulgada.</strong>

Contribuição anunciada: <strong>USD 5.000.000</strong>, não reembolsável.

<strong>Diferenciador anunciado pela administração:</strong> permitiria ao titular permanecer <strong>até 270 dias por ano nos Estados Unidos sem sujeição ao Substantial Presence Test</strong> — e, portanto, sem tributação americana sobre renda de fonte estrangeira.

<strong>Ressalva jurídica essencial.</strong> O <strong>Substantial Presence Test é definido em lei federal (IRC §7701(b)(3))</strong>. <strong>Uma exceção ao SPT não pode ser criada por Executive Order nem por ato administrativo do DHS — exigiria alteração do Internal Revenue Code pelo Congresso.</strong>

<strong>Nenhuma legislação nesse sentido foi identificada.</strong> Não foi localizada qualquer norma, projeto de lei aprovado, regulamento do Tesouro ou <em>guidance</em> do IRS que implemente a isenção de 270 dias. <strong>O benefício tributário anunciado permanece, até este levantamento, sem base normativa identificável.</strong>`,
          },
          {
            title: "Base de risco — comparação factual com o EB-5",
            body: `· Criado por <strong>Executive Order, não por lei</strong> — sujeito a revogação por administração subsequente ou por decisão judicial;
· <strong>contribuição de USD 1.000.000 declarada não reembolsável</strong>, inclusive em caso de <strong>indeferimento</strong> ou de <strong>extinção do programa</strong>;
· <strong>litígio de mérito pendente</strong>, sem decisão;
· o estatuto substantivo continua sendo <strong>EB-1 ou EB-2 NIW</strong> — a qualificação técnica <strong>não é dispensada</strong>;
· <strong>cada familiar exige contribuição própria</strong> de USD 1.000.000.

<strong>Comparação factual:</strong> o <strong>EB-5 tem base estatutária</strong> (INA §203(b)(5), Pub. L. 101-649 e Pub. L. 117-103) e <strong>prevê possibilidade de retorno do capital</strong>; o <strong>Gold Card tem base em Executive Order</strong> e a contribuição é <strong>declaradamente não recuperável</strong>.`,
          },
        ],
        brazilNote: `Para o brasileiro, o Gold Card apresenta um perfil de risco que merece leitura literal dos números:

· <strong>USD 1.000.000 não reembolsáveis por pessoa</strong> — uma família de quatro custaria <strong>USD 4.060.000</strong> em contribuições e taxas, sem qualquer possibilidade de retorno;
· contra o <strong>EB-5</strong>, cujo investimento de <strong>USD 800.000</strong> é capital <em>at risk</em> com <strong>possibilidade de retorno</strong>, cobre toda a família sem aporte adicional, e tem <strong>base estatutária</strong>;
· contra o <strong>EB-1A e o EB-2 NIW</strong>, que custam <strong>USD 715 de I-140</strong> e não exigem investimento algum — e cujos requisitos substantivos o Gold Card <strong>não dispensa</strong>.

<strong>Ou seja:</strong> quem qualifica para EB-1A ou EB-2 NIW pode obter o green card sem contribuição; e quem não qualifica <strong>também não obtém o Gold Card</strong>, porque a qualificação substantiva permanece exigida. O que o pagamento compra é <strong>velocidade de processamento</strong>, não elegibilidade.

<strong>A promessa de isenção de 270 dias do Platinum Card não tem base normativa identificável</strong> — o SPT está em lei federal e não pode ser alterado por Executive Order. Qualquer planejamento fiscal construído sobre essa premissa é, hoje, especulativo.

<strong>E o green card traz o pacote completo:</strong> tributação sobre renda mundial, exclusão sucessória de USD 15.000.000 (contra os USD 60.000 do não domiciliado), pacote declaratório, regime PFIC sobre o portfólio brasileiro, e o relógio de 8 anos do exit tax.`,
        warning: `<strong>A contribuição de USD 1.000.000 é declaradamente não reembolsável — inclusive em caso de indeferimento do pedido ou de extinção do programa.</strong>

O Gold Card foi criado por <strong>Executive Order, não por lei do Congresso</strong>, está sob <strong>litígio de mérito pendente</strong> (AAUP v. DHS), e <strong>não dispensa os requisitos substantivos de EB-1A ou EB-2 NIW</strong>. Em cerca de oito meses de operação, registou <strong>1 aprovação confirmada</strong>.

<strong>A isenção de 270 dias do Substantial Presence Test anunciada para o Platinum Card não tem base normativa identificável</strong> — o SPT é definido em lei federal (IRC §7701(b)(3)) e não pode ser excecionado por ato do Executivo.`,
        sources: [
          {
            t: "USCIS · Form I-140G",
            u: "https://www.uscis.gov/i-140g",
          },
          {
            t: "Federal Register · Executive Orders",
            u: "https://www.federalregister.gov/presidential-documents/executive-orders",
          },
          {
            t: "CourtListener · AAUP v. DHS (D.D.C.)",
            u: "https://www.courtlistener.com",
          },
          {
            t: "Cornell LII · 26 U.S. Code §7701(b) — Substantial Presence Test",
            u: "https://www.law.cornell.edu/uscode/text/26/7701",
          },
        ],
      },
      {
        name: "Caminho à cidadania — N-400",
        status: "changed",
        legalBasis:
          "<strong>INA §316(a)</strong> — 8 U.S.C. §1427(a): regra geral de 5 anos. <strong>INA §319(a)</strong> — 8 U.S.C. §1430(a): 3 anos para cônjuge de cidadão americano. <strong>INA §312</strong> — 8 U.S.C. §1423: requisitos de inglês e <em>civics</em>. <strong>INA §337</strong> — juramento. <strong>8 C.F.R. Parts 316, 319, 335 e 337</strong>. Formulários: N-400, N-445, N-336, N-470, N-600. <strong>Child Citizenship Act of 2000</strong> (Pub. L. 106-395) — INA §320.",
        desc: `<strong>Regra geral (INA §316):</strong> <strong>18 anos ou mais</strong>; <strong>LPR por, no mínimo, 5 anos</strong> imediatamente anteriores ao protocolo; <strong>residência contínua</strong> de 5 anos; <strong>presença física de, no mínimo, 30 meses</strong> (metade dos 5 anos); <strong>residência de 3 meses</strong> no estado ou distrito do USCIS onde protocola; <em>good moral character</em>; registo no <em>Selective Service</em> (homens que residiram nos EUA entre 18 e 26 anos); inglês; e <em>civics test</em>.

<strong>Regra dos 3 anos (INA §319(a)):</strong> LPR por 3 anos; <strong>casado com cidadão americano e vivendo em união conjugal durante os 3 anos inteiros</strong>; o cônjuge é cidadão durante todos os 3 anos; <strong>presença física de 18 meses</strong>; demais requisitos idênticos.

<strong>Mudança confirmada no <em>civics test</em>:</strong>
· N-400 protocolado <strong>antes de 20 de outubro de 2025</strong> → <strong>teste de 2008</strong>: banco de 100 questões, 10 perguntadas, <strong>6 acertos</strong> para aprovação;
· N-400 protocolado <strong>em 20 de outubro de 2025 ou depois</strong> → <strong>teste de 2025</strong>: banco de <strong>128 questões</strong>, <strong>20 perguntadas</strong>, <strong>12 acertos</strong> exigidos.`,
        kv: [
          { l: "Regra geral", v: "5 anos de LPR" },
          { l: "Cônjuge de cidadão", v: "3 anos" },
          { l: "Presença física — 5 anos", v: "30 meses" },
          { l: "Presença física — 3 anos", v: "18 meses" },
          { l: "Residência no estado", v: "3 meses" },
          { l: "Ausência de 6 meses a 1 ano", v: "Presunção rebatível de ruptura" },
          { l: "Ausência de 1 ano ou mais", v: "Rompe a residência contínua" },
          { l: "Civics test — desde 20/out/2025", v: "128 questões · 12 de 20" },
          { l: "N-400 online", v: "USD 710" },
          { l: "N-400 papel", v: "USD 760" },
          { l: "Taxa reduzida", v: "USD 380" },
          { l: "Protocolo antecipado", v: "90 dias antes" },
        ],
        requirements: [
          "<strong>18 anos ou mais</strong> na data do protocolo.",
          "<strong>LPR por, no mínimo, 5 anos</strong> imediatamente anteriores ao protocolo (3 anos para cônjuge de cidadão).",
          "<strong>Continuous residence:</strong> ausência de <strong>6 meses a 1 ano</strong> cria <strong>presunção rebatível</strong> de ruptura; ausência de <strong>1 ano ou mais</strong> <strong>rompe</strong> a residência contínua, salvo <strong>Form N-470</strong> (preservação para trabalho qualificado no exterior). Rompido, o relógio reinicia — com regra de 4 anos e 1 dia após o retorno.",
          "<strong>Physical presence</strong> de, no mínimo, <strong>30 meses</strong> (metade dos 5 anos), ou <strong>18 meses</strong> (metade dos 3 anos).",
          "<strong>Residência de 3 meses</strong> no estado ou distrito do USCIS onde protocola.",
          "<strong>Good moral character (GMC)</strong> no período estatutário — o USCIS pode examinar período anterior em situações graves. <strong>Bares permanentes:</strong> homicídio e <em>aggravated felony</em> posterior a 29/nov/1990. <strong>Bares condicionais:</strong> crimes de torpeza moral, embriaguez habitual, poligamia, jogo ilegal, falso testemunho para benefício migratório, <strong>inadimplência de imposto de renda</strong>, <strong>atraso em pensão alimentícia</strong>, e prisão agregada de 180 dias.",
          "<strong>Registo no Selective Service</strong> — homens que residiram nos EUA entre 18 e 26 anos.",
          "<strong>Inglês</strong> — leitura, escrita e fala. <strong>Isenções:</strong> <strong>50/20</strong> (50 anos ou mais e 20 anos de LPR) e <strong>55/15</strong>; a isenção <strong>65/20</strong> tem também versão simplificada do <em>civics</em>, com 20 questões designadas.",
          "<strong>Civics test</strong> — 6 de 10 (teste de 2008) ou <strong>12 de 20</strong> (teste de 2025, para protocolos desde 20/out/2025).",
          "Adesão aos princípios constitucionais e prestação do <strong>Oath of Allegiance</strong>.",
        ],
        process: [
          {
            step: "Protocolo do N-400",
            detail:
              "Online ou em papel. Pode ser protocolado <strong>90 dias antes</strong> de completar 5 (ou 3) anos de LPR.",
            timing: "90 dias antes",
          },
          {
            step: "Recibo (I-797C)",
            detail: "Confirmação de recebimento pelo USCIS.",
            timing: "2–4 semanas",
          },
          {
            step: "Biometria",
            detail: "Em <em>Application Support Center</em>, se exigida.",
            timing: "3–8 semanas",
          },
          {
            step: "Entrevista",
            detail:
              "Revisão do N-400 e aplicação dos testes de inglês e de <em>civics</em>, no <em>USCIS Field Office</em>.",
            timing: "Variável por escritório",
          },
          {
            step: "Decisão (N-652)",
            detail:
              "Na mesma data da entrevista, ou em até <strong>120 dias</strong>.",
            timing: "Até 120 dias",
          },
          {
            step: "Cerimónia de juramento (N-445)",
            detail:
              "Perante o USCIS ou tribunal federal.",
            timing: "Semanas a meses",
          },
          {
            step: "Certificado e passaporte",
            detail:
              "Certificado de naturalização pelo USCIS; passaporte americano pelo Departamento de Estado.",
            timing: "—",
          },
          {
            step: "Indeferimento e recurso",
            detail:
              "Recurso <strong>N-336</strong> em 30 dias; depois, revisão judicial <em>de novo</em> perante o <em>District Court</em> (8 U.S.C. §1421(c)).",
            timing: "30 dias para o N-336",
          },
        ],
        costs: [
          {
            item: "Form N-400 — online",
            value: "USD 710",
            note: "Biometria incluída",
          },
          { item: "Form N-400 — papel", value: "USD 760" },
          {
            item: "Taxa reduzida",
            value: "USD 380",
            note: "Renda entre 150% e 400% do federal poverty guideline",
          },
          {
            item: "Isenção integral (Form I-912)",
            value: "USD 0",
            note: "Mediante requisitos",
          },
          {
            item: "Form N-336 (recurso)",
            value: "A confirmar",
          },
          {
            item: "Passaporte americano (primeira via, adulto)",
            value: "≈USD 165",
            note: "A confirmar",
          },
        ],
        sections: [
          {
            title: "Aumento proposto — ainda não vigente",
            body: `Há <strong>regra proposta (NPRM)</strong> do DHS elevando a taxa do N-400 em aproximadamente <strong>75% a 80%</strong> — de USD 710 para faixa em torno de <strong>USD 1.280</strong>.

<strong>Em agosto de 2026 é apenas proposta em fase de comentário público, não está em vigor.</strong> <em>Estágio processual atual a verificar em federalregister.gov e uscis.gov.</em>`,
          },
          {
            title: "Regras de família e o Child Citizenship Act",
            body: `<strong>Cada membro da família naturaliza-se individualmente</strong> — não há naturalização «por dependência» para adultos.

<strong>Filhos menores de 18 anos adquirem cidadania automaticamente</strong> sob o <strong>Child Citizenship Act of 2000</strong> (Pub. L. 106-395), <strong>INA §320</strong>, se: (i) ao menos um dos pais é cidadão americano, por nascimento ou naturalização; (ii) o filho é menor de 18; (iii) é LPR; e (iv) reside nos EUA sob custódia legal e física do pai ou mãe cidadão.
Documenta-se com <strong>Form N-600</strong> (<em>Application for Certificate of Citizenship</em>) ou diretamente com passaporte americano.`,
          },
        ],
        brazilNote: `<strong>Dupla cidadania:</strong> os Estados Unidos <strong>não exigem renúncia</strong> à nacionalidade anterior. Do lado brasileiro, a Constituição Federal, art. 12, §4.º, II, na redação dada pela <strong>EC 131/2023</strong>, restringiu a perda da nacionalidade brasileira essencialmente a <strong>pedido expresso do próprio interessado</strong>. <strong>O brasileiro que se naturaliza americano mantém a nacionalidade brasileira</strong> — e, com ela, as obrigações brasileiras associadas, inclusive as fiscais, enquanto não formalizar a saída fiscal. <em>Redação vigente a confirmar.</em>

<strong>Efeito fiscal decisivo — e irreversível na prática.</strong> A naturalização <strong>converte a tributação mundial de condicional em vinculada à cidadania</strong>:
· o <strong>green card</strong> pode ser encerrado por <strong>Form I-407</strong>, com o exit tax do §877A incidindo apenas se houver <strong>8 dos últimos 15 anos</strong> de LPR;
· a <strong>cidadania</strong> só se encerra por <strong>renúncia formal perante consulado</strong> (INA §349(a)(5)), com taxa consular de USD 2.350 <em>(a confirmar)</em>, e o §877A aplica-se <strong>sem o filtro dos 8 anos</strong> — bastam os testes de patrimônio (USD 2.000.000), de imposto médio (USD 211.000 em 2026) ou de certificação.

<strong>Atenção ao <em>good moral character</em>:</strong> a <strong>conformidade fiscal é examinada</strong> na naturalização. Débitos com o IRS, declarações em atraso — inclusive FBAR e Forms 8938, 5471 e 3520 —, ou participação em esquemas de evasão podem fundamentar <strong>recusa</strong>. Para o brasileiro com estruturas no Brasil, a regularização declaratória deve estar concluída <strong>antes</strong> do protocolo do N-400, não depois.

<strong>Perda do green card por ausência:</strong> ausência de <strong>2 anos consecutivos</strong> faz o LPR caducar, com necessidade de <em>Returning Resident visa</em> e critérios discricionários. A <strong>cidadania não caduca</strong> — é a proteção definitiva contra esse risco, ao custo da vinculação fiscal permanente.`,
        sources: [
          {
            t: "USCIS · Citizenship Through Naturalization",
            u: "https://www.uscis.gov/citizenship/learn-about-citizenship/citizenship-and-naturalization",
          },
          {
            t: "USCIS · Form N-400, Application for Naturalization",
            u: "https://www.uscis.gov/n-400",
          },
          {
            t: "USCIS Policy Manual · Volume 12 — Citizenship and Naturalization",
            u: "https://www.uscis.gov/policy-manual/volume-12",
          },
          {
            t: "USCIS · Civics test (2025) e materiais de estudo",
            u: "https://www.uscis.gov/citizenship/find-study-materials-and-resources",
          },
          {
            t: "Cornell LII · 8 U.S. Code §1427 — Requirements of naturalization",
            u: "https://www.law.cornell.edu/uscode/text/8/1427",
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
    alert: true,
    sumFiscal: "Lei 20.446 — tax holiday 11 anos + 5 a 6%",
    sumFS: "changed",
    sumVisa: "Residência MERCOSUL gratuita para brasileiros",
    sumVS: "ok",
    fiscal: [
      {
        name: "Territorialidade e a reforma da Lei 20.446 (vigente desde 1/jan/2026)",
        status: "changed",
        legalBasis:
          "Título 7 do Texto Ordenado 2023 (aprovado pelo Decreto 101/024) e Decreto regulamentar 148/007. <strong>Lei n.º 20.446 — Presupuesto Nacional 2025-2029, promulgada em 16/dez/2025</strong>, com vigência das mudanças tributárias desde <strong>1/jan/2026</strong>. Regulamentação: <strong>Decreto n.º 95/026, de 6/mai/2026</strong>. Operacionalização: <strong>Resolução DGI n.º 1.517/026, de 29/jun/2026</strong>.",
        desc: `O Uruguai adota o <strong>critério da fonte (territorialidade)</strong>: em regra, tributam-se apenas rendas de fonte uruguaia. O IRPF divide-se em <strong>Categoria I</strong> (rendas de capital) e <strong>Categoria II</strong> (rendas do trabalho, escala progressiva).

<strong>A exceção histórica, até 31/dez/2025:</strong> eram tributados a <strong>12%</strong> apenas os <strong>rendimentos de capital mobiliário de fonte estrangeira</strong> — juros e dividendos originados em depósitos, empréstimos, colocações ou créditos junto a entidades não residentes. Ganhos de capital e rendimentos imobiliários do exterior <strong>não eram tributados</strong>.

<strong>A exceção ampliada, desde 1/jan/2026:</strong> a Lei 20.446 alargou a ficção de fonte uruguaia. Passam a ser alcançados pelo IRPF Categoria I, obtidos por residentes fiscais uruguaios:

| Renda do exterior | Até 2025 | Desde 1/jan/2026 |
· Juros de entidades não residentes → 12% → <strong>12%</strong>
· Dividendos de entidades não residentes → 12% → <strong>12%</strong>
· <strong>Rendimentos de capital imobiliário</strong> (aluguéis de imóveis no exterior) → não tributado → <strong>12%</strong>
· <strong>Incrementos patrimoniais</strong> (venda de ações, participações, imóveis, planos de <em>equity</em>) → não tributado → <strong>12%</strong>

<strong>Em uma frase:</strong> o Uruguai deixou de tributar apenas juros e dividendos do exterior, passou a tributar também rendimentos imobiliários e ganhos de capital estrangeiros, extinguiu a opção dos 7% vitalícios para novos residentes, e condicionou o <em>tax holiday</em> a investimento para quem obtém residência por causal diferente dos 183 dias.`,
        kv: [
          { l: "Princípio", v: "Territorialidade, com exceções ampliadas" },
          { l: "Juros e dividendos do exterior", v: "12%" },
          { l: "Aluguéis do exterior", v: "12% (novo em 2026)" },
          { l: "Ganhos de capital do exterior", v: "12% (novo em 2026)" },
          { l: "Retenção na fonte local", v: "Bancos e corretoras uruguaias" },
          { l: "IRPF Categoria II", v: "0% a 36% (8 faixas)" },
          { l: "IRAE (empresas)", v: "25%" },
          { l: "IVA", v: "22% (mínima 10%)" },
          { l: "Imposto ao Patrimônio (PF)", v: "0,2% a 0,7% · territorial" },
          { l: "Imposto sucessório", v: "Inexistente desde 1974" },
          { l: "ITP na sucessão de imóvel", v: "3% ou 4%" },
        ],
        requirements: [
          "A tributação alcança quem é <strong>residente fiscal uruguaio</strong> — a residência fiscal é aferida autonomamente, e é independente da residência legal migratória.",
          "<strong>Retenção na fonte</strong> por bancos, corretoras, custodiantes e demais entidades uruguaias que intermedeiem a gestão de investimentos.",
          "<strong>Rendas sem retenção:</strong> regime de <strong>pagamentos semestrais</strong> aplicando 12% sobre a renda acumulada no período; o contribuinte pode optar por torná-los <strong>definitivos</strong>, ficando dispensado da declaração anual quanto a essas rendas.",
          "<strong>Transparência fiscal:</strong> o Decreto 95/026 regula a atribuição ao residente uruguaio de rendas auferidas por <strong>entidades não residentes interpostas</strong>. <em>A extensão exata — quais entidades, qual percentual de participação, se há look-through automático — precisa ser conferida no texto do Decreto; é decisiva para estruturas com holdings offshore, trusts e fundos.</em>",
        ],
        sections: [
          {
            title: "Regime transitório de 2026",
            body: `Como o imposto começou a incidir em janeiro mas a regulamentação só saiu em maio, a <strong>DGI suspendeu retenções e antecipações dos primeiros meses</strong>; a arrecadação do primeiro semestre concentrou-se em <strong>julho de 2026</strong>.

<em>Ponto de alto impacto econômico, não confirmado:</em> uma fonte profissional menciona <strong>alíquota efetiva de 2,4%</strong> para determinados incrementos patrimoniais, o que sugere aplicação de <strong>base ficta de 20% sobre o preço × 12%</strong> — mecânica análoga à do ganho de capital imobiliário interno uruguaio. <strong>A existência, o percentual da base ficta e as hipóteses de aplicação devem ser conferidos no texto do Decreto 95/026 antes de qualquer cálculo.</strong>

<em>Segundo ponto não confirmado:</em> uma fonte menciona <strong>redução da alíquota de 12% para 8%</strong> nos casos em que há retenção praticada por agente uruguaio. Se confirmado, cria incentivo relevante à custódia local.`,
          },
          {
            title: "Critérios de residência fiscal",
            body: `<strong>Base legal:</strong> art. 6.º do Título 7 do Texto Ordenado; Decreto 148/007; <strong>Decreto 163/020, de 11/jun/2020</strong>, que acrescentou duas hipóteses de «base de interesses econômicos».

<strong>A. Permanência física</strong> — mais de <strong>183 dias</strong> no território uruguaio durante o ano civil. Computam-se as ausências esporádicas, desde que não superem <strong>30 dias corridos</strong> consecutivos.

<strong>B. Núcleo principal ou base das atividades</strong> — radicar no território o núcleo principal ou a base de suas atividades.

<strong>C. Base de interesses econômicos</strong> — radicar no território a base de seus interesses econômicos.

<strong>D. Base de interesses vitais</strong> — presunção <em>iuris tantum</em>: presume-se, salvo prova em contrário, quando cônjuge e filhos menores dependentes residem habitualmente no país. A DGI avalia o conjunto de indícios «em conjunto e com critério de razoabilidade».

<strong>E. Investimento imobiliário — Decreto 163/020:</strong> imóveis de valor superior a <strong>UI 3.500.000</strong>, adquiridos a partir de 1/jul/2020, com <strong>presença efetiva mínima de 60 dias</strong> no ano civil.

<strong>F. Investimento empresarial — Decreto 163/020:</strong> valor superior a <strong>UI 15.000.000</strong> com geração de, no mínimo, <strong>15 novos postos de trabalho</strong> em regime integral durante o ano civil. Dispensa a declaração de interesse nacional.

<strong>G. Investimento imobiliário — Decreto 148/007</strong> (regime original, mantido): imóveis de valor superior a <strong>UI 15.000.000</strong>.

<strong>H. Investimento empresarial — Decreto 148/007:</strong> participação direta ou indireta em empresa de valor superior a <strong>UI 45.000.000</strong>, compreendendo atividades ou projetos declarados de <strong>interesse nacional</strong> (Lei 16.906).

<em>Sobre o limiar de «UI 2.000.000 com 60 dias» que circula em materiais de consultoria: não foi localizado em nenhuma fonte. O valor do Decreto 163/020 é UI 3.500.000. Recomenda-se descartar a referência a UI 2.000.000 salvo confirmação documental — é possível que se trate de confusão com a cifra de USD 2.000.000, equivalente aproximado de UI 12.500.000 no regime de 2026.</em>`,
          },
          {
            title: "Conversão da Unidade Indexada (UI)",
            body: `Os limiares uruguaios são fixados em <strong>Unidades Indexadas</strong>, e a conversão em dólares varia com o câmbio e com a indexação.

<strong>Valor implícito derivado das fontes profissionais de 2026:</strong> as firmas convertem UI 12.500.000 ≈ USD 2.000.000–2.066.000, o que implica <strong>1 UI ≈ USD 0,160 a 0,165</strong>.

· Imóvel — Decreto 163/020: <strong>UI 3.500.000</strong> ≈ USD 560.000–590.000
· Empresa + 15 empregos — Decreto 163/020: <strong>UI 15.000.000</strong> ≈ USD 2.400.000–2.475.000
· Imóvel — Decreto 148/007: <strong>UI 15.000.000</strong> ≈ USD 2.400.000–2.475.000
· Empresa + interesse nacional — Decreto 148/007: <strong>UI 45.000.000</strong> ≈ USD 7.200.000–7.425.000
· <strong>Imóvel — tax holiday 2026: UI 12.500.000</strong> ≈ USD 2.000.000–2.066.000
· <strong>Fundos de inovação — tax holiday 2026: UI 625.000/ano</strong> ≈ USD 100.000–103.000/ano
· Regime simplificado — quota fixa: UI 1.875.000 ≈ USD 300.000
· Regime simplificado — quota reduzida: UI 1.250.000 ≈ USD 200.000

<strong>Nota histórica relevante para planejamento:</strong> a mesma UI 3.500.000 equivalia a cerca de USD 380.000–400.000 em 2020 e a cerca de USD 590.000 em 2026. A UI <strong>valoriza-se contra o dólar</strong> em cenários de apreciação do peso uruguaio, o que <strong>eleva o custo real de entrada em dólares ao longo do tempo</strong>.

<em>A cotação oficial da UI deve ser consultada no BCU (bcu.gub.uy) e no INE (ine.gub.uy) na data da operação — o INE publica informe mensal.</em>`,
          },
          {
            title: "IRPF Categoria II — escala do trabalho, exercício 2026",
            body: `<strong>Base de Prestaciones y Contribuciones (BPC) 2026: $ 6.864</strong> (pesos uruguaios) — fonte: BPS, Comunicado R 5/2026.

Escala <strong>progressiva por faixas</strong> (cada faixa tributa apenas o excedente):
· até 7 BPC ($ 48.048/mês) → <strong>0%</strong>
· mais de 7 a 10 BPC ($ 48.049 – $ 68.640) → <strong>10%</strong>
· mais de 10 a 15 BPC ($ 68.641 – $ 102.960) → <strong>15%</strong>
· mais de 15 a 30 BPC ($ 102.961 – $ 205.920) → <strong>24%</strong>
· mais de 30 a 50 BPC ($ 205.921 – $ 343.200) → <strong>25%</strong>
· mais de 50 a 75 BPC ($ 343.201 – $ 514.800) → <strong>27%</strong>
· mais de 75 a 115 BPC ($ 514.801 – $ 789.360) → <strong>31%</strong>
· mais de 115 BPC (a partir de $ 789.361) → <strong>36%</strong>

<strong>Mínimo Não Imponível Geral (MNIG): $ 48.048/mês.</strong>

Há regime paralelo de <strong>deduções</strong> com crédito próprio (filhos, aluguel, previdência, saúde) — a mecânica uruguaia calcula imposto e deduções separadamente.`,
          },
          {
            title: "Imposto ao Patrimônio e sucessões",
            body: `<strong>Impuesto al Patrimonio — pessoas físicas, 2026:</strong>
· mínimo não imponível — pessoa física ou sucessão indivisa: <strong>$ 6.653.000</strong>
· mínimo não imponível — núcleo familiar: <strong>$ 13.306.000</strong> (o dobro)
· alíquotas para residentes: <strong>0,2% a 0,7%</strong>, progressivas
· alíquotas para não residentes que não pagam IRNR: <strong>0,5% a 1,5%</strong>, progressivas

<strong>Regra estruturante:</strong> o Imposto ao Patrimônio uruguaio é <strong>territorial</strong> — em regra, <strong>ativos situados no exterior não integram a base de cálculo</strong>. Entram na base: imóveis no Uruguai, veículos, depósitos e créditos no Uruguai, e participações em sociedades uruguaias.

<strong>Atenção técnica:</strong> ativos isentos e não computáveis <strong>reduzem o passivo dedutível</strong> do contribuinte — quem tem muitos ativos isentos deduz menos dívidas, efeito contraintuitivo que aumenta a base tributável.

<strong>Sucessões — não há imposto sucessório.</strong> O imposto sucessório geral foi <strong>revogado em 1974</strong>.

<strong>O que incide na sucessão: o ITP — Impuesto a las Transmisiones Patrimoniales</strong> (Lei 16.107/1990; Título 19 do Texto Ordenado). Fato gerador: transmissão de <strong>bens imóveis situados no Uruguai</strong> por causa de morte. Alíquotas de <strong>3% ou 4%</strong> sobre o <strong>valor real</strong> do imóvel, conforme o grau de parentesco — <em>a distribuição usual é 3% para sucessores em linha reta e 4% para os demais; confirmar no Título 19</em>.

<strong>O que NÃO paga ITP na sucessão:</strong> contas bancárias, veículos, ações, quotas sociais, créditos e demais bens móveis.

<strong>Consequência para planejamento:</strong> o Uruguai não tributa a sucessão de patrimônio financeiro. O único ponto de atrito sucessório é o imóvel local, a 3%–4%. Isso <strong>não afasta</strong> o ITCMD brasileiro sobre bens situados no Brasil.`,
          },
          {
            title: "Zonas Francas e o efeito de holding",
            body: `<strong>Zonas Francas</strong> — Lei 15.921, de 17/dez/1987, reformada substancialmente pela <strong>Lei 19.566, de 8/dez/2017</strong>.

<strong>Benefício central:</strong> os usuários de zona franca são <strong>isentos de todo tributo nacional, criado ou a criar</strong>, inclusive dos que exigem exoneração específica por lei, relativamente às atividades desenvolvidas na zona. Abrange IRAE, imposto sobre distribuição de dividendos e Imposto ao Patrimônio, e <strong>não há retenções sobre pagamentos ao exterior</strong> (serviços, royalties).

<strong>Contrapartidas:</strong>
· <strong>mínimo de 75% do pessoal</strong> deve ser constituído por cidadãos uruguaios, naturais ou legais — percentual reduzível em casos excepcionais, com autorização prévia do Poder Executivo;
· <strong>substância econômica efetiva</strong> — exigência introduzida pela Lei 19.566 por recomendação da OCDE: as empresas beneficiárias devem desenvolver atividades substantivas na zona;
· contrato de usuário aprovado pela Área Zonas Francas do Ministerio de Economía y Finanzas.

Zonas de serviços relevantes: Aguada Park, WTC Free Zone, Zonamerica.

<strong>Regime de holding:</strong> o Uruguai <strong>não possui regime de holding nominado</strong> análogo ao holandês ou luxemburguês. O efeito de holding decorre da <strong>territorialidade</strong>: uma sociedade uruguaia (S.A. ou SAS) que detenha participações no exterior não é tributada por IRAE sobre dividendos e ganhos de capital de fonte estrangeira — <strong>salvo</strong> as regras de rendas passivas do exterior para <strong>entidades sem substância adequada</strong> integrantes de grupos multinacionais (Leis 19.484 e 20.095).

<strong>A SAFI</strong> (Sociedad Anónima Financiera de Inversión), veículo histórico de holding uruguaio, foi <strong>extinta pela reforma tributária de 2007</strong>, com regime transitório encerrado em 31/dez/2010. <strong>Não existe mais</strong> — o que é relevante para a leitura da IN RFB 1.037/2010 brasileira.

<strong>Novidade 2026:</strong> a Lei 20.446 introduziu o <strong>IMCD — Impuesto Mínimo Complementario Doméstico</strong>, tributo mínimo alinhado ao Pilar Dois da OCDE (QDMTT). <em>Alíquota (presumivelmente 15%), limiar de receita do grupo (presumivelmente €750 milhões) e vigência a confirmar.</em> Relevante apenas para grupos multinacionais de grande porte.`,
          },
        ],
        brazilNote: `<strong>Acordo para Eliminar a Dupla Tributação Brasil–Uruguai: está em vigor.</strong>
· Assinatura: <strong>7 de junho de 2019</strong>, em Brasília
· Aprovação pelo Uruguai: dezembro de 2021
· Aprovação legislativa concluída no Brasil: junho de 2023
· Entrada em vigor (lado uruguaio): <strong>21 de julho de 2023</strong>
· Promulgação no Brasil: <strong>Decreto n.º 11.747, de 23 de outubro de 2023</strong>
· <strong>Produção de efeitos no Brasil: 1.º de janeiro de 2024</strong>

<strong>Tributos abrangidos:</strong> no Brasil, IRPJ, IRPF e <strong>CSLL</strong>; no Uruguai, <strong>IRAE, IRPF, IRNR, IASS e o Impuesto al Patrimonio</strong>. A inclusão do Imposto ao Patrimônio é significativa — o acordo é sobre renda <strong>e capital</strong>.

<strong>Alíquotas máximas na fonte (confirmadas):</strong>
· <strong>Royalties</strong> — regra geral: <strong>10%</strong>
· <strong>Royalties</strong> por uso de <strong>marcas de indústria ou comércio</strong>: <strong>15%</strong>
· <strong>Serviços técnicos e de assistência técnica</strong> (artigo próprio, art. 13): <strong>10%</strong>
· <strong>Dividendos e juros:</strong> <em>a confirmar nos arts. 10 e 11 do Decreto 11.747/2023 — indicações preliminares apontam 10%/15% para dividendos e 15% para juros.</em>

<strong>Ponto de atenção brasileiro:</strong> a existência de <strong>artigo específico para serviços técnicos</strong> resolve a controvérsia histórica sobre a qualificação de serviços técnicos como royalties ou lucros de empresas (ADI RFB 5/2014). Aqui há regra expressa: 10% na fonte.

<strong>Risco não testado:</strong> quem opta pelo <em>tax holiday</em> paga <strong>IRNR</strong> (não IRPF) sobre rendas do exterior. Como o IRNR <strong>está listado</strong> entre os tributos abrangidos pelo acordo, e o Uruguai emite certificado de residência fiscal, a aplicação do tratado deveria seguir normalmente — <strong>mas a possibilidade de o Brasil questionar a condição de «residente» para fins do art. 4.º de alguém sujeito a tributação apenas territorial e beneficiado por tax holiday é um risco real e não testado.</strong>

<strong>Lista brasileira de jurisdições de tributação favorecida.</strong> O <strong>Uruguai NÃO consta</strong> do art. 1.º da IN RFB 1.037/2010 («paraísos fiscais»). O art. 2.º (regimes fiscais privilegiados) listava o regime das <strong>Safis</strong>, <strong>até 31/dez/2010</strong> — menção histórica e sem efeito prático desde 2011, já que a SAFI foi extinta.
<em>Ponto de risco material a verificar:</em> não foi possível confirmar se o <strong>regime de zonas francas uruguaias</strong> foi incluído no art. 2.º da IN 1.037/2010 como regime fiscal privilegiado. Dado que o regime concede isenção total de tributos nacionais, e que há material profissional brasileiro específico sobre o tema, <strong>a redação vigente da IN 1.037/2010 deve ser conferida no site da RFB antes de qualquer estruturação via zona franca</strong>. A caracterização como regime fiscal privilegiado atrai preços de transferência, subcapitalização, IRRF majorado a 25% em certos pagamentos e restrições à dedutibilidade.

<strong>Saída fiscal do Brasil</strong> (IN SRF 208/2002): <strong>CSDP</strong> até o último dia de fevereiro do ano-calendário subsequente à saída, e <strong>DSDP</strong> até o último dia útil de abril. Sem elas, a pessoa continua residente fiscal no Brasil, tributada em bases universais, com dupla residência — que o CDT resolveria pelos <em>tie-breakers</em> do art. 4.º, mas ao custo de litígio.
<strong>Descompasso de calendários:</strong> o Uruguai adota o <strong>ano civil</strong> para os 183 dias; o Brasil conta 12 meses móveis na ausência de CSDP. <strong>É possível ficar sem residência fiscal em nenhum dos dois países, ou em ambos.</strong>

<strong>Previdência social:</strong> o <strong>Acordo Multilateral de Seguridade Social do MERCOSUL</strong> permite totalização de períodos de contribuição entre Brasil, Argentina, Paraguai e Uruguai. <em>O decreto de promulgação no Brasil e a existência de acordo bilateral anterior devem ser confirmados.</em> O tratamento fiscal da aposentadoria do INSS recebida no Uruguai depende do artigo de Pensões do CDT — <em>verificar nos arts. 17/18 do Decreto 11.747/2023</em>. Nota: o Uruguai tributa aposentadorias locais pelo <strong>IASS</strong>, tributo distinto do IRPF e <strong>incluído no escopo do CDT</strong>.

<strong>CRS:</strong> Brasil e Uruguai são signatários do Common Reporting Standard e da Convenção Multilateral. O Uruguai levantou o sigilo bancário para fins fiscais e reporta contas de residentes fiscais brasileiros à RFB. <strong>Ponto essencial de planejamento:</strong> ao obter residência fiscal uruguaia e informar o TIN uruguaio às instituições financeiras, o cliente <strong>redireciona o reporte CRS</strong> — mas apenas a partir da atualização da <em>self-certification</em>. Contas mantidas com TIN brasileiro continuam sendo reportadas ao Brasil. O art. 26 do CDT reforça a troca de informações a pedido.

<strong>ITCMD:</strong> a EC 132/2023 tornou a progressividade obrigatória e disciplinou a competência para bens no exterior; o STF, no Tema 825 (RE 851.108), decidiu que os Estados não podem cobrar sem lei complementar federal. A combinação de <strong>ausência de imposto sucessório uruguaio</strong>, <strong>ITP de 3%–4% apenas sobre imóveis uruguaios</strong> e as regras de ITCMD brasileiro sobre bens no Brasil é o eixo do planejamento sucessório — que deve ser conduzido com assessoria e monitorando a tramitação da lei complementar.`,
        warning: `<strong>O regime descrito na maior parte do material de consultoria em circulação é o regime revogado.</strong> A premissa corrente — tax holiday de 11 anos incondicional, opção de 7% vitalícia, territorialidade com exceção restrita a juros e dividendos, entrada por imóvel de cerca de UI 3.500.000 mais 60 dias — descreve com precisão o direito uruguaio <strong>até 31 de dezembro de 2025</strong>.

A Lei 20.446/2025, com efeitos desde 1/jan/2026, e sua regulamentação (Decreto 95/026 e Resolução DGI 1.517/026) reconfiguraram os quatro pilares.

<strong>Dois pontos permanecem materialmente indefinidos</strong> e não podem ser resolvidos sem leitura do texto legal primário:
1. se os limiares de <strong>UI 12.500.000 / UI 625.000</strong> substituíram as <strong>causais de residência fiscal</strong> do Decreto 163/020, ou se apenas condicionam o <em>tax holiday</em>. As firmas uruguaias afirmam o segundo; a PwC Worldwide Tax Summaries afirma o primeiro. <strong>As consequências para quem já comprou imóvel de UI 3.500.000 são opostas.</strong>
2. a existência e o percentual da <strong>base ficta para ganhos de capital do exterior</strong> (a referência a 2,4% sugere base de 20% × 12%).

Ambos devem ser confirmados no IMPO e junto a assessoria uruguaia antes de qualquer decisão.`,
        sources: [
          {
            t: "IMPO · Lei n.º 20.446 — Presupuesto Nacional 2025-2029",
            u: "https://www.impo.com.uy/bases/leyes-originales/20446-2025",
          },
          {
            t: "Presidencia · Lei n.º 20.446, de 16/dez/2025",
            u: "https://www.gub.uy/presidencia/institucional/normativa/ley-n-20446-fecha-16122025-se-aprueba-presupuesto-nacional-para-periodo",
          },
          {
            t: "IMPO · Texto Ordenado 2023, Título 7 (IRPF), atualizado em março/2026",
            u: "https://www.impo.com.uy/bases/todgi-2023/7-2024",
          },
          {
            t: "DGI · Regulamentação do novo regime sobre rendas do exterior",
            u: "https://www.gub.uy/direccion-general-impositiva/comunicacion/noticias/se-regulan-aspectos-asociados-nuevo-regimen-sobre-rentas-del-exterior",
          },
          {
            t: "DGI · Tax Holidays — opção para novos residentes fiscais",
            u: "https://www.gub.uy/direccion-general-impositiva/comunicacion/publicaciones/tax-holidays-opcion-para-nuevos-residentes-fiscales-uruguay",
          },
          {
            t: "DGI · Causais de residência fiscal",
            u: "https://www.gub.uy/direccion-general-impositiva/comunicacion/publicaciones/causales-residencia-fiscal",
          },
          {
            t: "DGI · Unidade Indexada",
            u: "https://www.gub.uy/direccion-general-impositiva/datos-y-estadisticas/datos/unidad-indexada",
          },
          {
            t: "BPS · Comunicado R 5/2026 — valores e escalas do IRPF 2026 (PDF)",
            u: "https://www.bps.gub.uy/bps/file/23860/3/2026---comunicado-r-5---valores-escalas-irpf-2026.pdf",
          },
          {
            t: "Planalto · Decreto n.º 11.747/2023 (CDT Brasil–Uruguai)",
            u: "http://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/decreto/d11747.htm",
          },
          {
            t: "IMPO · Lei n.º 15.921 (Zonas Francas)",
            u: "https://www.impo.com.uy/bases/leyes/15921-1987",
          },
        ],
      },
      {
        name: "Tax holiday — regime de novos residentes fiscais (Lei 20.446)",
        status: "changed",
        legalBasis:
          "Lei 18.718/2010 (5 exercícios); Lei 19.937/2021, art. 1.º (11 exercícios); <strong>Lei 20.446/2025</strong>, que criou o novo regime aplicável a quem adquire residência fiscal a partir de 1/jan/2026. Regulamentação: Decreto 95/026 e Resolução DGI 1.517/026.",
        desc: `<strong>Nota de precisão terminológica:</strong> juridicamente não se trata de «isenção», mas da <strong>opção por tributar-se pelo IRNR</strong> (Imposto à Renda de Não Residentes) durante o período. Como o IRNR <strong>não alcança</strong> rendas de fonte estrangeira, o efeito prático é <strong>carga zero</strong>. A distinção importa para efeitos de tratado e de certificado de residência fiscal.

<strong>Estrutura do benefício para quem adquire residência fiscal a partir de 1/jan/2026:</strong>
· <strong>Anos 1 a 11</strong> (exercício da mudança mais os 10 seguintes): opção por IRNR → rendas passivas do exterior <strong>não tributadas</strong>;
· <strong>Anos 12 a 16</strong> (5 exercícios seguintes): IRPF à <strong>metade da alíquota → 6%</strong>;
· <strong>a partir do ano 17</strong>: IRPF à alíquota geral de <strong>12%</strong>.

<strong>A «via curta» foi extinta.</strong> A combinação de imóvel de UI 3.500.000 (cerca de USD 590.000 em valores de 2026) mais 60 dias de presença anual <strong>deixou de dar acesso ao tax holiday</strong> para quem adquire residência a partir de 1/jan/2026.

<strong>A opção dos 7% vitalícios foi extinta</strong> para novos residentes fiscais a partir de 1/jan/2026, e substituída pela sequência 11 anos a 0% → 5 anos a 6% → 12% em diante.`,
        kv: [
          { l: "Anos 1–11", v: "0% (opção pelo IRNR)" },
          { l: "Anos 12–16", v: "6%" },
          { l: "Ano 17 em diante", v: "12%" },
          { l: "Opção 7% vitalícia", v: "Extinta para novos residentes" },
          { l: "Via A — permanência", v: "183 dias/ano · sem investimento" },
          { l: "Via B — imobiliária", v: "UI 12.500.000 (≈ USD 2M)" },
          { l: "Via C — fundos de inovação", v: "UI 625.000/ano (≈ USD 100k)" },
          { l: "Não residência prévia", v: "2 exercícios anteriores" },
          { l: "Opção", v: "Única e irrevogável" },
        ],
        requirements: [
          "<strong>Não ter sido residente fiscal uruguaio nos 2 exercícios fiscais imediatamente anteriores.</strong>",
          "<strong>Não</strong> ter utilizado anteriormente o regime de <em>tax holiday</em>.",
          "Exercer a opção <strong>uma única vez</strong> — é irrevogável quanto ao conjunto do período.",
          "Cumprir <strong>uma</strong> das três vias de acesso: <strong>(A) permanência</strong> — mais de <strong>183 dias</strong> no ano civil, sem investimento exigido, devendo os 183 dias configurar-se <strong>em cada exercício</strong> em que o regime vigorar; <strong>(B) imobiliária</strong> — para quem obtém residência por causal diversa dos 183 dias: imóveis de valor superior a <strong>UI 12.500.000</strong> (≈ USD 2.000.000); <strong>(C) fundos de inovação</strong> — capitalização de fundos de investimento destinados a financiar projetos produtivos, pesquisa ou inovação aplicada à produção, mínimo de <strong>UI 625.000/ano</strong> (≈ USD 100.000/ano). <em>Uma fonte indica 11 anos consecutivos de aporte.</em>",
        ],
        process: [
          {
            step: "Diagnóstico prévio",
            detail:
              "Análise da composição de patrimônio e de rendas para definir se o custo do novo regime compensa, e qual via de acesso é aplicável.",
            timing: "Prévio",
          },
          {
            step: "Configuração da residência fiscal",
            detail:
              "Escolha e configuração da causal — 183 dias, investimento, ou interesses vitais. <strong>Decisão crítica sob a Lei 20.446</strong>, dada a divergência entre fontes sobre a natureza dos limiares de UI 12.500.000 e UI 625.000.",
            timing: "Ano 0",
          },
          {
            step: "Exercício da opção perante a DGI",
            detail:
              "A opção pelo <em>tax holiday</em> é exercida perante a DGI, é <strong>única e irrevogável</strong>. <em>Verificar o prazo aplicável na regulamentação vigente.</em>",
            timing: "Ao configurar a residência",
          },
          {
            step: "Certificado de residência fiscal",
            detail:
              "Solicitação do «Certificado de residencia fiscal de Persona Física» à DGI, pelo portal gub.uy. É o documento que instrumentaliza a aplicação do CDT Brasil–Uruguai e a comunicação de saída fiscal do Brasil.",
            timing: "Após a configuração",
          },
          {
            step: "Manutenção do investimento (vias B e C)",
            detail:
              "Manutenção do investimento imobiliário ou dos aportes anuais nos fundos de inovação durante a vigência do regime.",
            timing: "Contínua",
          },
        ],
        costs: [
          {
            item: "Via B — investimento imobiliário",
            value: "UI 12.500.000",
            note: "≈ USD 2.000.000–2.066.000; ativo do investidor, não é taxa",
          },
          {
            item: "Via C — fundos de inovação",
            value: "UI 625.000/ano",
            note: "≈ USD 100.000–103.000/ano; uma fonte indica 11 anos consecutivos",
          },
          {
            item: "Via A — permanência",
            value: "Nenhum investimento",
            note: "Exige 183 dias em cada exercício de vigência do regime",
          },
          {
            item: "Regime simplificado de quota fixa — regra geral",
            value: "UI 1.875.000/ano",
            note: "≈ USD 300.000; valores anuais ou totais divergem entre fontes — confirmar",
          },
          {
            item: "Regime simplificado — quota reduzida",
            value: "UI 1.250.000/ano",
            note: "≈ USD 200.000; aplicável a quem permanece mais de 183 dias no exercício",
          },
        ],
        sections: [
          {
            title: "Regime transitório — quem já estava no sistema",
            body: `<strong>Adquiriu residência fiscal até 31/dez/2025 e optou pelo tax holiday:</strong> <strong>conserva integralmente as condições originais</strong> de ingresso. Deve verificar se a cobertura do regime alcança as <strong>novas categorias de renda</strong> tributadas a partir de 2026 (imobiliárias e ganhos de capital) — há disposição transitória específica na Lei 20.446 estendendo a cobertura.

<strong>Tax holiday expirado em 31/dez/2025:</strong> pode optar por <strong>IRPF a 6% durante 5 exercícios</strong> sobre a totalidade das rendas passivas do exterior, <strong>desde que realize, a partir de 1/jan/2026, os investimentos especificados</strong>.

<strong>Optou pelos 7% vitalícios antes de 2026:</strong> os resultados indicam que a opção <strong>deixou de ser permitida para novos residentes</strong>, mas <strong>não confirmam se quem já a exerceu conserva o direito adquirido</strong>. Dada a natureza irrevogável e vitalícia da opção original, o mais provável é a manutenção — <em>mas isso precisa ser confirmado no texto legal</em>.

<strong>Escritura de imóvel assinada (boleto ou compromisso) antes de 1/jan/2026 e outorgada em 2026:</strong> <strong>zona cinzenta</strong> — requer análise caso a caso; pode aplicar-se o limiar antigo (UI 3.500.000) ou o novo (UI 12.500.000), conforme a interpretação.`,
          },
          {
            title: "Comparação numérica entre o regime antigo e o novo",
            body: `Sobre um fluxo anual constante de rendas passivas do exterior, ao longo de 16 anos:

· <strong>Regime antigo (opção dos 7% vitalícios):</strong> 7% × 16 anos = <strong>112% do fluxo anual</strong> em imposto acumulado;
· <strong>Regime novo:</strong> 0% × 11 anos + 6% × 5 anos = <strong>30% do fluxo anual</strong>.

A partir do ano 17, o regime antigo mantinha 7% ao ano e o novo aplica 12% ao ano. O ponto de indiferença acumulado ocorre por volta do <strong>ano 33</strong> de residência.

<em>Cálculo ilustrativo, sem desconto a valor presente. O legislador substituiu uma alíquota reduzida perpétua por um período mais longo de desoneração seguido de tributação plena.</em>`,
          },
          {
            title: "Regime simplificado de quota fixa (novidade 2026)",
            body: `Introduzido pela Lei 20.446 e regulado pelo Decreto 95/026: pagamento de <strong>valor fixo anual</strong> em substituição à liquidação individualizada de cada renda.

· <strong>UI 1.875.000/ano</strong> (≈ USD 300.000) — regra geral;
· <strong>UI 1.250.000/ano</strong> (≈ USD 200.000) — quando o contribuinte permanece <strong>mais de 183 dias</strong> no Uruguai no exercício;
· prazo: <strong>20 exercícios fiscais</strong>;
· dirigido a pessoas físicas residentes que <strong>não gozaram do tax holiday</strong>.

<em>Nota de verificação:</em> as fontes divergem quanto a se os valores são <strong>anuais ou totais</strong>, e quanto às condições de acesso. Um regime de quota fixa de USD 300.000 por ano durante 20 anos só faz sentido econômico para patrimônios muito elevados — o ponto de indiferença situa-se em renda passiva do exterior superior a cerca de <strong>USD 2,5 milhões por ano</strong> a 12%. <strong>Confirmar no Decreto 95/026 antes de qualquer decisão.</strong>`,
          },
          {
            title: "Perda da residência fiscal",
            body: `A Lei 20.446 <strong>definiu o momento da perda da residência fiscal</strong> uruguaia. <em>O conteúdo exato não pôde ser obtido — verificar o artigo correspondente no IMPO.</em>

É ponto essencial para planejamento de saída, especialmente para quem pretende retornar ao Brasil, e interage diretamente com o descompasso de calendários descrito na nota de interação com o Brasil (ano civil uruguaio × 12 meses móveis brasileiros).`,
          },
        ],
        brazilNote: `A opção pelo <em>tax holiday</em> significa tributar-se pelo <strong>IRNR</strong>. Como o IRNR <strong>consta</strong> da lista de tributos abrangidos pelo CDT Brasil–Uruguai (Decreto 11.747/2023) e a DGI emite certificado de residência fiscal, a aplicação do tratado deveria seguir normalmente.

<strong>Risco não testado:</strong> a possibilidade de o Brasil questionar a condição de «residente» para fins do art. 4.º do CDT, tratando-se de pessoa sujeita a tributação apenas territorial e beneficiada por <em>tax holiday</em>. É risco real, sem precedente conhecido, e deve ser dimensionado com tributarista antes de estruturar a operação.

<strong>Sequência operacional recomendada</strong> para a família brasileira:
1. diagnóstico de patrimônio e composição de rendas;
2. entrada no Uruguai (brasileiro dispensado de visto, entra com RG ou passaporte);
3. <strong>residência legal MERCOSUL</strong> junto à DNM — gratuita para brasileiros, sem apostila nem tradução;
4. Cédula de Identidad junto à DNIC;
5. configuração da <strong>residência fiscal</strong> perante a DGI, escolhendo a causal;
6. <strong>exercício da opção de tax holiday</strong> perante a DGI — única e irrevogável;
7. obtenção do <strong>certificado de residência fiscal</strong>;
8. <strong>CSDP e DSDP no Brasil</strong>, nos prazos de fevereiro e abril;
9. atualização da <em>self-certification</em> CRS nas instituições financeiras, para redirecionar o reporte;
10. reestruturação patrimonial, considerando o ITP uruguaio e o ITCMD brasileiro.`,
        sources: [
          {
            t: "DGI · Tax Holidays — opção para novos residentes fiscais",
            u: "https://www.gub.uy/direccion-general-impositiva/comunicacion/publicaciones/tax-holidays-opcion-para-nuevos-residentes-fiscales-uruguay",
          },
          {
            t: "DGI · Solicitação de certificado de residência fiscal de pessoa física",
            u: "https://www.gub.uy/tramites/solicitud-certificado-residencia-fiscal-persona-fisica",
          },
          {
            t: "IMPO · Lei n.º 20.446",
            u: "https://www.impo.com.uy/bases/leyes-originales/20446-2025",
          },
          {
            t: "Guyer & Regules · Regime tributário aplicável a residentes fiscais por rendas do exterior",
            u: "https://www.guyer.com.uy/informes-&-noticias/regimen-tributario-aplicable-a-personas-fisicas-residentes-fiscales-en-uruguay-por-sus-rentas-en-el-exterior",
          },
          {
            t: "Guyer & Regules · Principais aspectos do novo decreto sobre IRPF de rendas do exterior",
            u: "https://www.guyer.com.uy/informes-&-noticias/principales-aspectos-del-nuevo-decreto-sobre-irpf-aplicable-a-rentas-e-inversiones-del-exterior-1",
          },
          {
            t: "Forvis Mazars · Uruguai 2026 — nova rota para residentes fiscais e investidores",
            u: "https://www.forvismazars.com/uy/es/insights/nuestras-publicaciones/impuestos/uruguay-2026-residencia-fiscal-e-inversores",
          },
          {
            t: "OCDE · Uruguai — informação sobre residência para fins fiscais (PDF)",
            u: "https://www.oecd.org/content/dam/oecd/en/topics/policy-issue-focus/aeoi/uruguay-residency.pdf",
          },
        ],
      },
    ],
    visa: [
      {
        name: "Residência MERCOSUL — a via para brasileiros",
        status: "ok",
        legalBasis:
          "Acordo sobre Residência para Nacionais dos Estados Partes do MERCOSUL, Bolívia e Chile (2002). No Uruguai, incorporado pela <strong>Lei n.º 18.250, de 6/jan/2008</strong> (Ley de Migraciones) e pelo <strong>Decreto n.º 394/009, de 24/ago/2009</strong>, com alterações pelos Decretos 356/018 e 45/023.",
        desc: `<strong>Princípio fundamental:</strong> residência fiscal (DGI) e residência legal (DNM) são <strong>procedimentos autônomos e independentes</strong>. É possível ser residente fiscal sem residência legal — basta configurar uma causal do art. 6.º do Título 7 — e é possível ter residência legal sem residência fiscal. São órgãos, requisitos, prazos e efeitos distintos, e não há comunicação automática entre a DGI e a DNM.

O portal gub.uy mantém <strong>dois trâmites distintos</strong>: «Residencia Legal – Temporaria Mercosur» e «Residencia Legal – Permanente Mercosur». Brasileiros podem, conforme o caso, iniciar diretamente pela permanente ou pela temporária.

<strong>Residência temporária MERCOSUL:</strong> vigência de <strong>2 anos</strong>, prorrogáveis por igual período, uma única vez. A renovação deve ser solicitada dentro dos <strong>90 dias anteriores</strong> ao vencimento. Após o período, pode-se solicitar a conversão em residência permanente.

<em>Nota de verificação: uma fonte menciona conversão automática após 3 anos consecutivos de residência temporária renovada; a norma MERCOSUL padrão prevê conversão ao término dos 2 anos, mediante comprovação de meios de vida lícitos. Confirmar diretamente com a DNM.</em>`,
        kv: [
          { l: "Taxa para brasileiros", v: "Gratuito" },
          { l: "Apostila de documentos brasileiros", v: "Dispensada" },
          { l: "Tradução juramentada", v: "Dispensada" },
          { l: "Temporária", v: "2 anos + 2" },
          { l: "Renovação", v: "Nos 90 dias anteriores ao vencimento" },
          { l: "Entrada no Uruguai", v: "RG ou passaporte, sem visto" },
          { l: "Órgão", v: "DNM · Ministerio del Interior" },
          { l: "Escritórios da DNM", v: "12 dos 19 departamentos" },
          { l: "Residência fiscal", v: "Procedimento separado (DGI)" },
        ],
        requirements: [
          "Ser nacional de Estado Parte ou Associado do MERCOSUL — <strong>brasileiros qualificam-se</strong>.",
          "<strong>Fotografia.</strong>",
          "<strong>Documento de identidade válido</strong> — passaporte ou RG brasileiro.",
          "<strong>Certidão de nascimento.</strong>",
          "<strong>Certidão de antecedentes criminais</strong> do país ou países onde residiu nos <strong>últimos 5 anos</strong>.",
          "<strong>Certificado de vacinação</strong> conforme o esquema uruguaio, obtido no Uruguai.",
          "<strong>Comprovante de domicílio</strong> no Uruguai.",
          "Certidão de casamento, se aplicável.",
        ],
        process: [
          {
            step: "Entrada no Uruguai",
            detail:
              "Brasileiro entra como turista com <strong>RG ou passaporte, sem visto</strong>.",
            timing: "Imediato",
          },
          {
            step: "Apresentação na DNM",
            detail:
              "Agendamento e apresentação em qualquer escritório da Dirección Nacional de Migración, presente em <strong>12 dos 19 departamentos</strong>.",
            timing: "A confirmar",
          },
          {
            step: "Protocolo do pedido",
            detail: "Protocolo e entrega dos documentos no dia da audiência.",
            timing: "Dia da audiência",
          },
          {
            step: "Certificado de vacinação",
            detail:
              "Obtenção do certificado de vacinação conforme o esquema uruguaio, junto a prestador de saúde no Uruguai.",
            timing: "Dias",
          },
          {
            step: "Constância de trâmite iniciado",
            detail:
              "A DNM emite constância que permite solicitar a <strong>Cédula de Identidad</strong> provisória.",
            timing: "A confirmar",
          },
          {
            step: "Cédula de Identidad",
            detail:
              "Emissão da Cédula de Identidad uruguaya pela <strong>Dirección Nacional de Identificación Civil (DNIC)</strong>.",
            timing: "Semanas",
          },
          {
            step: "Resolução final",
            detail:
              "Resolução final de residência pela DNM. <em>Historicamente, a via MERCOSUL permitia obter a cédula em poucas semanas após o início do trâmite, com a resolução definitiva vindo depois. Prazos correntes devem ser atualizados junto à DNM.</em>",
            timing: "A confirmar",
          },
        ],
        costs: [
          {
            item: "Taxa de residência MERCOSUL — brasileiros",
            value: "Gratuito",
            note: "Confirmado; gratuito também para paraguaios. Nacionais dos demais países pagam as taxas correspondentes",
          },
          {
            item: "Apostila de documentos brasileiros",
            value: "Não exigida",
            note: "Confirmado — exceção expressa aos documentos emitidos pelo Brasil",
          },
          {
            item: "Tradução juramentada de documentos brasileiros",
            value: "Não exigida",
            note: "Confirmado",
          },
          {
            item: "Certidão de antecedentes criminais (Brasil)",
            value: "Custo brasileiro corrente",
            note: "Polícia Federal e polícia estadual",
          },
          {
            item: "Certificado de vacinação (Uruguai)",
            value: "A confirmar",
          },
          { item: "Cédula de Identidad (DNIC)", value: "A confirmar" },
          {
            item: "Assessoria jurídica local",
            value: "Custo de mercado",
            note: "Opcional",
          },
        ],
        sections: [
          {
            title: "As duas facilitações específicas para brasileiros",
            body: `Estas são as duas vantagens operacionais mais concretas, ambas confirmadas:

<strong>1. Dispensa de apostila e de tradução.</strong> A regra geral uruguaia exige que todo documento estrangeiro esteja apostilado ou legalizado e, se for o caso, traduzido ao espanhol — <strong>«com exceção dos emitidos pelo Brasil»</strong>. Documentos brasileiros <strong>não requerem apostila da Haia nem tradução juramentada</strong>.

<strong>2. Gratuidade.</strong> O trâmite é <strong>gratuito para nacionais brasileiros e paraguaios</strong>. Nacionais dos demais países do MERCOSUL e associados pagam as taxas correspondentes.

A combinação de gratuidade e dispensa de apostila e tradução <strong>reduz materialmente custo e prazo</strong> do processo para brasileiros em comparação com qualquer outra via de residência uruguaia.`,
          },
          {
            title: "Regras de família",
            body: `O Acordo de Residência do MERCOSUL prevê, como regra, a extensão da residência a <strong>cônjuge ou concubino, filhos solteiros menores ou com deficiência, e ascendentes</strong> do titular.

Cada dependente apresenta a própria documentação — identidade, certidão de nascimento ou casamento, antecedentes criminais para maiores de 18 anos, e vacinação.

Sendo o trâmite gratuito para brasileiros, <strong>presume-se que a gratuidade se estenda aos dependentes brasileiros</strong>. <em>Confirmar junto à DNM.</em>`,
          },
          {
            title: "Residência permanente pelo regime geral",
            body: `Alternativa à via MERCOSUL, para quem não é nacional de Estado Parte ou Associado, ou para quem prefira essa rota.

<strong>Órgão:</strong> Dirección Nacional de Migración (Ministerio del Interior), ou, alternativamente, a autoridade consular uruguaia no exterior, com intervenção do Ministerio de Relaciones Exteriores.

<strong>Documentação:</strong> documento de identidade válido; certidão de nascimento legalizada ou apostilada e traduzida; certidão de casamento, se aplicável; <strong>certidão de antecedentes criminais</strong> do país de origem e dos países de residência nos últimos 5 anos (alternativamente, a informação pode ser obtida via Oficina Central Nacional INTERPOL-Uruguay ou certificação consular); certificado de esquema de vacinação; <strong>Carné de Salud</strong> (exame médico realizado no Uruguai — <em>a confirmar se exigido em todos os casos</em>); <strong>comprovação de meios de vida</strong> — no caso de aposentado, reformado, pensionista ou rentista, deve acreditar essa condição de forma fidedigna e demonstrar que os rendimentos permitem custear as despesas no país; comprovante de domicílio; e fotografia.

<strong>Prazo processual:</strong> uma vez ingressado em território nacional, o solicitante dispõe de <strong>30 dias hábeis</strong> para apresentar-se à DNM e completar a documentação. <em>O prazo total de processamento é variável; historicamente, meses a mais de um ano no regime geral.</em>

<strong>Documento resultante:</strong> resolução de residência permanente, que habilita a obtenção da Cédula de Identidad uruguaya junto à DNIC.`,
          },
          {
            title: "Como se sai do regime",
            body: `A <strong>residência permanente</strong> não se perde por ausência de curta duração, mas a Lei 18.250 e o Decreto 394/009 preveem hipóteses de <strong>cancelamento</strong> — ausência prolongada do país, obtenção fraudulenta, condenação penal. <em>Verificar o prazo de ausência que enseja perda.</em>

A <strong>residência temporária</strong> extingue-se pelo decurso do prazo sem renovação.

<strong>Renúncia voluntária</strong> é possível.

<strong>Importante:</strong> perder a residência legal <strong>não</strong> implica automaticamente perder a residência fiscal, e vice-versa.`,
          },
        ],
        brazilNote: `A via MERCOSUL é, com folga, a rota de residência legal uruguaia mais acessível ao brasileiro: <strong>gratuita</strong>, <strong>sem apostila</strong> e <strong>sem tradução juramentada</strong>, com entrada no país mediante RG ou passaporte, sem visto.

<strong>Não confunda com residência fiscal.</strong> Obter a residência MERCOSUL <strong>não</strong> configura, por si, residência fiscal uruguaia — nem encerra a residência fiscal brasileira. São procedimentos independentes, perante órgãos distintos (DNM e DGI), com requisitos e efeitos próprios.

Para produzir efeito fiscal, é necessário: (i) configurar uma causal de residência fiscal perante a DGI; (ii) exercer a opção de <em>tax holiday</em>, se aplicável; (iii) obter o certificado de residência fiscal; e (iv) formalizar no Brasil a <strong>CSDP</strong> (até o último dia de fevereiro do ano-calendário seguinte) e a <strong>DSDP</strong> (até o último dia útil de abril).

O <strong>Acordo Multilateral de Seguridade Social do MERCOSUL</strong> permite a totalização de períodos de contribuição entre Brasil e Uruguai, e o <strong>Estatuto da Cidadania do MERCOSUL</strong> (Decisão CMC n.º 64/10) confere base política ao Acordo de Residência.`,
        sources: [
          {
            t: "gub.uy · Residencia Legal — Permanente Mercosur",
            u: "https://www.gub.uy/tramites/residencia-legal-permanente-mercosur",
          },
          {
            t: "gub.uy · Residencia Legal — Temporaria Mercosur",
            u: "https://www.gub.uy/tramites/residencia-legal-temporaria-mercosur",
          },
          {
            t: "gub.uy · Residencia Legal — Permanente (regime geral)",
            u: "https://www.gub.uy/tramites/residencia-legal-permanente",
          },
          {
            t: "IMPO · Decreto n.º 394/009",
            u: "https://www.impo.com.uy/bases/decretos/394-2009/4",
          },
          {
            t: "EY Uruguay · Residencia fiscal y residencia legal en Uruguay",
            u: "https://www.ey.com/es_uy/services/tax/residencia-fiscal-y-residencia-legal-en-uruguay",
          },
          {
            t: "Andersen Uruguay · Residencia permanente para nacionais do Mercosul",
            u: "https://uy.andersen.com/residencia-permanente-nacionales-mercosur-y-asociados.php",
          },
        ],
      },
      {
        name: "Cidadania legal uruguaia — e a distinção em relação à nacionalidade",
        status: "risk",
        legalBasis:
          "Constituição da República, arts. 73 a 81 — art. 74 (cidadãos naturais), art. 75 (cidadãos legais), art. 81 (a nacionalidade não se perde pela naturalização em outro país). Lei n.º 16.021, de 13/abr/1989 (define quem tem a nacionalidade uruguaia). Lei n.º 8.196, de 1928 (normas sobre cidadania legal). <strong>Circular da Corte Electoral n.º 11.376/2022 — «Manual de Ciudadanía»</strong>, fonte procedimental central.",
        desc: `<strong>Via A — com família constituída na República:</strong> <strong>3 anos</strong> de residência habitual no país, boa conduta, <strong>arraigo</strong> (capital em giro, propriedade no país, ou exercício de ciência, arte ou indústria) e inscrição no Registro Cívico.

<strong>Via B — sem família constituída:</strong> <strong>5 anos</strong> de residência habitual, com os demais requisitos idênticos.

<strong>«Família constituída»</strong> — conforme o Manual de Ciudadanía: além de provar arraigo e residência própria, deve-se demonstrar que <strong>vivem e estão a seu cargo</strong> pai, mãe ou irmão no <strong>mesmo domicílio</strong>; ou cônjuge ou filhos uruguaios.

<strong>Comprovação de arraigo</strong> — meios admitidos pelo Manual: permanência no país por lapso superior a <strong>três meses</strong>; arrendamento ou aquisição de uma finca; instalação de comércio ou indústria; emprego no país; ou inscrição em centro de estudo público ou privado por, ao menos, dois meses.

<strong>Testemunhas:</strong> exigem-se testemunhas que conheçam o requerente pelo tempo necessário — 3 anos (com família constituída) ou 5 anos (sem família).`,
        kv: [
          { l: "Com família constituída", v: "3 anos de residência" },
          { l: "Sem família constituída", v: "5 anos de residência" },
          { l: "Órgão", v: "Corte Electoral" },
          { l: "Documento", v: "Carta de Ciudadanía" },
          { l: "Direitos políticos", v: "3 anos após a Carta" },
          { l: "Cargos privativos de naturais", v: "Presidência e Vice" },
          { l: "Nacionalidade", v: "Ver a distinção — ponto crítico" },
          { l: "Perda da nacionalidade uruguaia", v: "Não ocorre (art. 81)" },
        ],
        requirements: [
          "<strong>3 anos</strong> de residência habitual no país, com <strong>família constituída na República</strong>; ou <strong>5 anos</strong> sem família constituída.",
          "<strong>Boa conduta.</strong>",
          "<strong>Arraigo</strong> comprovado — capital em giro, propriedade no país, ou exercício de alguma ciência, arte ou indústria.",
          "<strong>Inscrição no Registro Cívico.</strong>",
          "<strong>Testemunhas</strong> que conheçam o requerente pelo tempo exigido.",
        ],
        process: [
          {
            step: "Agendamento",
            detail:
              "Em <strong>Montevidéu</strong>: agendamento prévio pela Agenda de Ciudadanía Legal, no portal gub.uy, e comparecimento presencial. No <strong>interior</strong>: trâmite iniciado nas Oficinas Electorales Departamentales.",
            timing: "—",
          },
          {
            step: "Apresentação do pedido",
            detail:
              "Trâmite «Carta de ciudadanía (ciudadanía legal uruguaya)» perante a <strong>Corte Electoral — Sección Ciudadanía Legal</strong>, com prova de residência, arraigo e testemunhas.",
            timing: "—",
          },
          {
            step: "Emissão da Carta de Ciudadanía",
            detail: "Documento resultante do procedimento.",
            timing: "—",
          },
          {
            step: "Exercício dos direitos políticos",
            detail:
              "O cidadão legal só pode exercer os direitos de cidadania <strong>três anos após</strong> o outorgamento da Carta (art. 75 <em>in fine</em> da Constituição).",
            timing: "3 anos após a Carta",
          },
        ],
        sections: [
          {
            title: "Cidadania legal ≠ nacionalidade — a questão central",
            body: `Este é o ponto mais mal compreendido do sistema uruguaio, e o mais relevante para quem busca um segundo passaporte.

<strong>A doutrina tradicional uruguaia:</strong>
· a <strong>nacionalidade</strong> é vínculo natural, adquirido pelo <strong>nascimento</strong> (<em>ius soli</em>) ou por <strong>filiação</strong> (<em>ius sanguinis</em>, nos termos da Lei 16.021);
· a <strong>cidadania legal</strong> é um <strong>status político</strong> conferido ao estrangeiro;
· consequência: o <strong>cidadão legal não é nacional uruguaio</strong>;
· o <strong>art. 81</strong> da Constituição estabelece que a nacionalidade não se perde nem pela naturalização em outro país — mas a <strong>cidadania legal pode ser suspensa ou perdida</strong>.

<strong>Efeitos práticos:</strong>
· <strong>Passaporte:</strong> o cidadão legal obtém passaporte uruguaio, mas o campo de <strong>nacionalidade</strong> historicamente indicava o <strong>país de nascimento</strong>, não «uruguaia» — o que gerava questionamentos de autoridades de terceiros países. Há trâmite específico: «Solicitud de pasaporte – Primera vez – Ciudadanos legales».
· <strong>Direitos políticos:</strong> exercíveis apenas <strong>três anos após</strong> o outorgamento da Carta.
· <strong>Cargos públicos:</strong> Presidência, Vice-Presidência e outros são privativos de cidadãos <strong>naturais</strong>.

<strong>Desenvolvimentos recentes, em curso:</strong>
· parte da doutrina sustenta que os cidadãos legais <strong>eram e são nacionais</strong> do Uruguai; pesquisadores documentaram que passaportes uruguaios emitidos <strong>antes de 1925</strong> não distinguiam entre tipos de cidadãos;
· <strong>4/dez/2023</strong> — cidadãos uruguaios solicitaram <strong>audiência temática perante a Comissão Interamericana de Direitos Humanos (CIDH)</strong> sobre a revogação e denegação arbitrária de nacionalidade a cidadãos legais;
· <strong>junho de 2024</strong> — os ministros Paganini e Martinelli confirmaram que os passaportes seriam emitidos <strong>corrigindo erros anteriores</strong> quanto à anotação de cidadania;
· existe estudo técnico sobre o impacto da normativa da OACI/ICAO nos passaportes uruguaios de cidadãos legais (documento de outubro de 2023).`,
          },
          {
            title: "Como se sai do regime",
            body: `A cidadania legal pode ser <strong>renunciada</strong>.

Pode ser <strong>suspensa</strong> nas hipóteses constitucionais dos arts. 80 e 81.

<em>Verificar hipóteses de perda por ausência prolongada do país.</em>`,
          },
        ],
        brazilNote: `Para o brasileiro que busca cidadania uruguaia <strong>com finalidade de mobilidade internacional</strong>, a distinção entre cidadania legal e nacionalidade é o ponto decisivo — e a prática de emissão de passaporte estava <strong>em transição em 2024</strong>.

<strong>Verificação indispensável antes de qualquer decisão:</strong> qual é a prática de emissão de passaporte para cidadãos legais vigente em 2026? A questão deve ser confirmada junto à DNIC e ao Ministerio del Interior. É o dado mais importante deste bloco.

<strong>Do lado brasileiro:</strong> a Constituição Federal, art. 12, §4.º, II, na redação dada pela <strong>EC 131/2023</strong>, restringiu a perda da nacionalidade brasileira essencialmente a pedido expresso do próprio interessado. A cidadania legal uruguaia, obtida voluntariamente, não acarreta perda automática da nacionalidade brasileira. <em>Confirmar o texto vigente.</em>

<strong>Sequência típica:</strong> residência MERCOSUL (gratuita) → Cédula de Identidad → residência habitual de 3 ou 5 anos com arraigo comprovado → Carta de Ciudadanía → direitos políticos após mais 3 anos.`,
        warning: `A <strong>cidadania legal uruguaia não confere nacionalidade uruguaia</strong> segundo a doutrina tradicional do país. O passaporte emitido a cidadãos legais historicamente indicava o país de nascimento no campo de nacionalidade, o que gerou questionamentos de autoridades de terceiros países.

A situação estava <strong>em transição em 2024</strong>, com declarações ministeriais de correção e com o tema levado à Comissão Interamericana de Direitos Humanos. <strong>A prática de emissão vigente em 2026 deve ser confirmada junto à DNIC antes de qualquer orientação</strong> — este é o item de verificação de maior impacto para quem busca a cidadania uruguaia como instrumento de mobilidade.`,
        sources: [
          {
            t: "Corte Electoral · Carta de ciudadanía (cidadania legal uruguaia)",
            u: "https://www.gub.uy/tramites/carta-ciudadania-ciudadania-legal-uruguaya",
          },
          {
            t: "Corte Electoral · Agenda de Ciudadanía Legal",
            u: "https://www.gub.uy/corte-electoral/tramites-y-servicios/servicios/agenda-ciudadania-legal",
          },
          {
            t: "IMPO · Manual de Ciudadanía — Circular Corte Electoral 11.376/2022",
            u: "https://www.impo.com.uy/bases/circulares-corte-electoral/11376-2022?verOriginal=1",
          },
          {
            t: "gub.uy · Solicitação de passaporte — primeira vez, cidadãos legais",
            u: "https://www.gub.uy/tramites/solicitud-pasaporte-primera-vez-ciudadanos-legales",
          },
          {
            t: "IMPO · Lei n.º 8.196 (cidadania)",
            u: "https://www.impo.com.uy/bases/leyes/8196-1928",
          },
          {
            t: "Nacionalidad.uy · Análise do impacto da normativa OACI nos passaportes (PDF, out/2023)",
            u: "https://www.nacionalidad.uy/downloads/Analisis_impactos_cambio_normativa_oaci_pasportes_uruguayos_ciudadanos_legales_octubre%202023.pdf",
          },
        ],
      },
      {
        name: "Hoja de Identidad Provisoria para Nómadas Digitales",
        status: "new",
        legalBasis:
          "Lançada em <strong>maio de 2023</strong>. Decreto n.º 238/022, que modificou a regulamentação aplicável aos trâmites migratórios; o Decreto n.º 394/009 já previa a hoja de identidad provisoria para quem viesse trabalhar por menos de seis meses. <em>Nota: a referência corrente a um «Decreto 108/023» não pôde ser confirmada no IMPO.</em>",
        desc: `Não é tecnicamente um visto, mas uma <strong>permissão especial de residência legal provisória</strong>, dirigida a trabalhadores estrangeiros que exercem atividade <strong>remota</strong>, de forma independente ou para empresas sediadas no exterior.

<strong>Característica distintiva: não há exigência de renda mínima.</strong> Basta firmar declaração juramentada de que se dispõe de recursos econômicos suficientes para o sustento durante o período.

<strong>Processo integralmente online.</strong>

<strong>Prazo:</strong> até <strong>180 dias</strong>, prorrogável por mais <strong>180 dias</strong> — total de até 1 ano. Para a prorrogação exigem-se, adicionalmente, certidão de antecedentes criminais de todos os países onde residiu por mais de 6 meses nos últimos 5 anos, e certificado de vacinação emitido no Uruguai.

Ao término, quem desejar permanecer deve tramitar <strong>residência temporária</strong> ou <strong>MERCOSUL</strong>.`,
        kv: [
          { l: "Renda mínima", v: "Nenhuma" },
          { l: "Prazo inicial", v: "Até 180 dias" },
          { l: "Prorrogação", v: "Mais 180 dias" },
          { l: "Total máximo", v: "1 ano" },
          { l: "Processo", v: "Integralmente online" },
          { l: "Taxa de visto", v: "Não cobrada" },
          { l: "Órgão", v: "Dirección Nacional de Migración" },
          { l: "Confere residência fiscal", v: "Não, por si só" },
        ],
        requirements: [
          "Ingressar no Uruguai como <strong>turista</strong>.",
          "Preencher <strong>formulário online</strong> com dados pessoais.",
          "Fazer upload de <strong>cópia do passaporte</strong>.",
          "Firmar <strong>declaração juramentada</strong> de que dispõe de recursos econômicos suficientes para se sustentar durante o período.",
          "<strong>Não há exigência de renda mínima</strong> — característica distintiva deste programa.",
          "<strong>Para a prorrogação:</strong> certidão de antecedentes criminais de todos os países onde residiu por mais de 6 meses nos últimos 5 anos, e <strong>certificado de vacinação emitido no Uruguai</strong>.",
        ],
        costs: [
          {
            item: "Taxa de visto",
            value: "Não cobrada",
            note: "O Uruguai não cobra taxa de visto para a permissão de nômade digital",
          },
          {
            item: "Taxa administrativa",
            value: "A confirmar",
            note: "Fontes secundárias mencionam algo em torno de USD 10–15",
          },
        ],
        sections: [
          {
            title: "Advertência fiscal — o risco central",
            body: `A Hoja de Identidad Provisoria <strong>não confere residência fiscal</strong> por si só.

<strong>Mas a permanência superior a 183 dias no ano civil configura residência fiscal automaticamente</strong>, por força do art. 6.º do Título 7, <strong>independentemente do status migratório</strong>.

<strong>Consequência prática:</strong> um nômade digital que use os <strong>dois períodos de 180 dias dentro do mesmo ano civil</strong> torna-se residente fiscal uruguaio — com todas as consequências do novo regime de 2026 sobre rendas do exterior, incluindo a tributação de 12% sobre juros, dividendos, aluguéis do exterior e ganhos de capital.

<strong>Este risco deve ser explicitado antes de qualquer planejamento de calendário.</strong> A janela de 180 + 180 dias só é fiscalmente neutra se atravessar a virada do ano civil.`,
          },
        ],
        brazilNote: `Brasileiro entra no Uruguai com <strong>RG ou passaporte, sem visto</strong>, e pode requerer a Hoja de Identidad Provisoria integralmente online, sem exigência de renda mínima.

<strong>Ponto de atenção de calendário:</strong> quem usar os dois períodos de 180 dias dentro do <strong>mesmo ano civil</strong> torna-se residente fiscal uruguaio — e, sem a saída fiscal do Brasil (CSDP e DSDP), passa a ser residente fiscal nos dois países simultaneamente. O CDT Brasil–Uruguai (Decreto 11.747/2023) oferece <em>tie-breakers</em> no art. 4.º, mas resolvê-los custa litígio.

<strong>Descompasso relevante:</strong> o Uruguai conta os 183 dias pelo <strong>ano civil</strong>; o Brasil conta <strong>12 meses móveis</strong> na ausência de CSDP. É possível ficar sem residência fiscal em nenhum dos dois países — ou em ambos.

Para quem pretende permanência efetiva, a <strong>residência MERCOSUL</strong> é a via mais direta e é gratuita para brasileiros.`,
        sources: [
          {
            t: "gub.uy · Hoja de identidad provisoria",
            u: "https://www.gub.uy/tramites/hoja-identidad-provisoria",
          },
          {
            t: "AGESIC · Permiso especial de residencia legal",
            u: "https://www.gub.uy/agencia-gobierno-electronico-sociedad-informacion-conocimiento/comunicacion/noticias/permiso-especial-residencia-legal",
          },
          {
            t: "Bloomberg Línea · Uruguai busca atrair nômades digitais com permissão especial",
            u: "https://www.bloomberglinea.com/2023/05/08/uruguay-busca-atraer-nomades-digitales-con-permiso-de-residencia-especial/",
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
    sumFiscal: "Non-dom extinto · Regime FIG de 4 anos",
    sumFS: "changed",
    sumVisa: "Sem golden visa · Innovator Founder · Global Talent",
    sumVS: "ext",
    fiscal: [
      {
        name: "Fim do regime non-domiciled e da remittance basis",
        status: "ext",
        legalBasis:
          "<strong>Finance Act 2025 (c. 8), Parte 2</strong>, com efeitos a partir de <strong>6 de abril de 2025</strong>. Revoga ou altera: ITA 2007, ss. 809A a 809Z10 (remittance basis); ITA 2007, s. 835BA e IHTA 1984, s. 267 (deemed domicile); TCGA 1992, s. 86 e Schedule 5 (proteções de trust); ITTOIA 2005, s. 624 e ss. 628A/B.",
        desc: `O sistema britânico tributava pessoas físicas com base em duas variáveis simultâneas: <strong>residência</strong> e <strong>domicílio</strong> — este último um conceito de <em>common law</em> (domicílio de origem, de dependência e de escolha), distinto de residência fiscal e de status migratório.

O <strong>residente não domiciliado</strong> («non-dom») podia optar pela <strong>remittance basis of taxation</strong>: rendimentos e ganhos estrangeiros (FIG) eram tributados <strong>apenas se remetidos</strong> ao Reino Unido, mediante pagamento do <em>remittance basis charge</em> de <strong>£30.000/ano</strong> (7 de 9 anos de residência) ou <strong>£60.000/ano</strong> (12 de 14 anos). A partir de 6/abr/2017, quem fosse residente em <strong>15 dos 20 anos</strong> anteriores tornava-se <em>deemed domiciled</em> e perdia definitivamente o regime.

<strong>O que foi extinto em 6 de abril de 2025:</strong>
· a <strong>remittance basis</strong>, para rendimentos e ganhos <em>surgidos a partir de 6/abr/2025</em> — o FIG anterior a essa data permanece sujeito ao regime de remessa, o que explica a relevância do TRF;
· o <strong>remittance basis charge</strong> (£30k/£60k);
· o <strong>deemed domicile</strong> para <em>income tax</em> e <em>CGT</em>;
· o <strong>domicílio como critério de conexão para IHT</strong>, substituído por residência de longo prazo;
· as <strong>trust protections</strong> (TCGA 1992, s. 86, e regras TOAA);
· a <strong>proteção permanente dos excluded property trusts</strong>;
· a <strong>Overseas Workday Relief na formulação antiga</strong>, substituída por versão vinculada ao FIG, com teto.`,
        kv: [
          { l: "Data da extinção", v: "6 de abril de 2025" },
          { l: "Instrumento", v: "Finance Act 2025 (c. 8)" },
          { l: "Remittance basis charge", v: "Extinto (era £30k/£60k)" },
          { l: "Deemed domicile (IR e CGT)", v: "Extinto" },
          { l: "Domicílio como critério de IHT", v: "Substituído por residência" },
          { l: "Proteções de trusts offshore", v: "Removidas" },
          { l: "Excluded property trusts", v: "Proteção permanente eliminada" },
          { l: "FIG pré-6/abr/2025", v: "Ainda sob regime de remessa" },
        ],
        sections: [
          {
            title: "O que era a remittance basis, em detalhe",
            body: `<strong>Rendimentos de fonte britânica</strong> eram sempre tributados no regime de competência (<em>arising basis</em>).

<strong>Rendimentos e ganhos de fonte estrangeira</strong> eram tributados <strong>apenas se remetidos</strong>. A definição de «remessa» era amplíssima: dinheiro, bens, serviços pagos com FIG, uso de garantia, e qualquer benefício auferido por <em>relevant person</em> — cônjuge, filhos menores, trusts e companhias fechadas relacionadas.

<strong>Custo:</strong> gratuita nos anos 1 a 6 de residência; <strong>£30.000/ano</strong> a partir de 7 de 9 anos; <strong>£60.000/ano</strong> a partir de 12 de 14 anos. Havia ainda um encargo de £90.000/ano para 17 de 20 anos, abolido em 2017 e substituído pelo <em>deemed domicile</em>.

<strong>Perda de deduções:</strong> quem optava perdia a <em>personal allowance</em> e o <em>CGT annual exempt amount</em> no ano da opção (salvo FIG inferior a £2.000).

<strong>Deemed domicile</strong> (desde 6/abr/2017): residente em <strong>15 dos 20 anos fiscais anteriores</strong> passava a ser domiciliado por presunção para <em>income tax</em>, CGT e IHT.

<strong>Formerly domiciled resident (FDR):</strong> nascido no Reino Unido com domicílio de origem britânico e retornado — tornava-se <em>deemed domiciled</em> já no primeiro ano de residência.

<strong>Excluded property trusts (EPT):</strong> ativos não britânicos em trust constituído por non-dom ficavam <strong>permanentemente fora do IHT</strong>, ainda que o settlor depois se tornasse <em>deemed domiciled</em> — proteção que a reforma eliminou.

<strong>Overseas Workday Relief (OWR):</strong> vinculada à remittance basis; 3 primeiros anos; exigia conta bancária offshore e não-remessa; <strong>sem teto</strong>.

<em>Nota de verificação: a numeração exata de seções e Schedules do Finance Act 2025 para cada medida deve ser confirmada em legislation.gov.uk. A estrutura é a Parte 2 do Act, seções aproximadamente 40 a 47 e Schedules 9 a 13.</em>`,
          },
        ],
        brazilNote: `Para brasileiros que já eram residentes britânicos sob a <em>remittance basis</em> antes de 6/abr/2025, a extinção do regime tem duas consequências imediatas:

1. <strong>FIG surgido a partir de 6/abr/2025</strong> passa a ser tributado no Reino Unido pelo regime de competência — dividendos brasileiros, aluguéis de imóveis no Brasil, juros e ganhos de capital em ativos brasileiros entram na base britânica, remetidos ou não;
2. <strong>FIG anterior a 6/abr/2025</strong> permanece sob o regime de remessa — e é exatamente esse estoque que o <strong>Temporary Repatriation Facility</strong> permite «limpar» a alíquota reduzida durante a janela de 3 anos.

Quem se torna residente britânico a partir de 2025 e satisfaz o teste de 10 anos de não residência anteriores entra diretamente no <strong>regime FIG</strong>, que é mais simples e mais amplo do que a remittance basis — mas dura apenas 4 anos.`,
        sources: [
          {
            t: "legislation.gov.uk · Finance Act 2025",
            u: "https://www.legislation.gov.uk/ukpga/2025/8/contents",
          },
          {
            t: "GOV.UK · Remittance basis changes",
            u: "https://www.gov.uk/guidance/remittance-basis-changes",
          },
          {
            t: "HM Treasury · Reforming the taxation of non-UK domiciled individuals (PDF)",
            u: "https://assets.publishing.service.gov.uk/media/672105124da1c0d41942a8a8/Reforming_the_taxation_of_non-UK_individuals.pdf",
          },
          {
            t: "Macfarlanes · Finance Act 2025 e a implementação das reformas",
            u: "https://www.macfarlanes.com/what-we-think/102eli5/the-finance-act-2025-implementation-of-the-reforms-to-the-taxation-of-non-uk-domiciliaries-102jvct/",
          },
          {
            t: "Chartered Institute of Taxation · Novo Finance Act extingue o status non-dom",
            u: "https://www.tax.org.uk/new-finance-act-scraps-non-dom-tax-status-and-vat-exemption-for-school-fees",
          },
        ],
      },
      {
        name: "Regime FIG — Foreign Income and Gains (4 anos)",
        status: "new",
        legalBasis:
          "Finance Act 2025, Parte 2 (regime dos <em>qualifying new residents</em>), em vigor desde <strong>6 de abril de 2025</strong>. Insere novo capítulo no ITTOIA 2005 e no TCGA 1992. Manuais HMRC: Residence, Domicile and Remittance Basis Manual (RDRM), capítulos sobre o regime FIG.",
        desc: `O FIG é uma <strong>isenção</strong> — não um diferimento nem um regime de remessa.

Para o indivíduo qualificado, <strong>rendimentos estrangeiros</strong> (dividendos, juros, aluguéis, lucros de atividade não britânica, distribuições de trusts offshore) e <strong>ganhos de capital estrangeiros</strong> ficam <strong>fora do escopo do imposto britânico</strong> durante os <strong>4 primeiros anos fiscais de residência</strong>.

<strong>Diferença crucial em relação à remittance basis:</strong> o dinheiro pode ser <strong>livremente remetido ao Reino Unido sem qualquer tributação</strong>. Isso elimina toda a engenharia de segregação de contas — contas offshore separadas, <em>clean capital accounts</em>, análise de <em>mixed funds</em> — que caracterizava o planejamento non-dom.

<strong>O regime é cego ao domicílio:</strong> aplica-se inclusive a britânicos com domicílio de origem no Reino Unido que retornem após 10 anos de não residência — algo impossível sob a remittance basis.

<strong>Rendimentos e ganhos de fonte britânica</strong> continuam integralmente tributados.

<strong>Contagem dos 4 anos:</strong> é de <strong>anos fiscais</strong>, não de anos de permanência efetiva. Se a pessoa sai do Reino Unido no ano 2 e volta no ano 4, os anos 2 e 3 são consumidos mesmo assim.`,
        kv: [
          { l: "Duração", v: "4 anos fiscais" },
          { l: "Não residência prévia", v: "10 anos consecutivos" },
          { l: "Rendimento estrangeiro", v: "Isento" },
          { l: "Ganhos estrangeiros", v: "Isentos" },
          { l: "Remessa ao Reino Unido", v: "Livre e sem imposto" },
          { l: "Personal allowance", v: "Perdida (£12.570)" },
          { l: "CGT annual exempt amount", v: "Perdido (£3.000)" },
          { l: "Claim", v: "Expresso, na Self Assessment" },
          { l: "Prazo do claim — 2025/26", v: "31 de janeiro de 2028" },
        ],
        requirements: [
          "Ser <strong>residente fiscal britânico</strong> no ano em questão, pelo Statutory Residence Test.",
          "<strong>Não ter sido residente fiscal britânico em nenhum dos 10 anos fiscais consecutivos imediatamente anteriores</strong> ao primeiro ano de residência.",
          "Estar dentro dos <strong>4 primeiros anos fiscais</strong> contados a partir do primeiro ano de residência — a contagem é de anos fiscais, não de anos de permanência efetiva.",
          "Fazer <strong>claim expresso</strong> na <em>Self Assessment tax return</em> de cada ano.",
          "<strong>Quantificar e declarar</strong> os montantes de FIG a serem isentos — a declaração exige identificação dos valores, não basta marcar uma caixa.",
          "Aceitar a <strong>perda da personal allowance</strong> (£12.570) e do <strong>CGT annual exempt amount</strong> (£3.000) naquele ano.",
        ],
        process: [
          {
            step: "Determinação da residência pelo SRT",
            detail:
              "Aplicação do Statutory Residence Test para o ano fiscal britânico (6 de abril a 5 de abril).",
            timing: "Contínuo",
          },
          {
            step: "Registo para Self Assessment",
            detail:
              "Registo junto à HMRC pelo formulário <strong>SA1</strong> e obtenção do <strong>UTR</strong> (Unique Taxpayer Reference).",
            timing: "Até 5 de outubro seguinte ao 1.º ano fiscal",
          },
          {
            step: "Apuração e segregação contábil do FIG",
            detail:
              "Apuração dos rendimentos e ganhos estrangeiros do ano. Diferentemente da remittance basis, não é necessária segregação bancária — apenas contábil, para efeitos da declaração.",
            timing: "Ao longo do ano",
          },
          {
            step: "Apresentação da Self Assessment com o claim FIG",
            detail:
              "Declaração com as páginas <strong>SA106</strong> (Foreign), <strong>SA108</strong> (Capital Gains) e <strong>SA109</strong> (Residence, remittance basis etc.), fazendo o claim FIG e informando os valores.",
            timing: "Até 31 de janeiro (declaração online)",
          },
          {
            step: "Pagamento de imposto sobre rendimentos britânicos",
            detail:
              "Saldo até 31 de janeiro; <em>payment on account</em> até 31 de julho.",
            timing: "31 de janeiro e 31 de julho",
          },
          {
            step: "Prazo-limite para fazer ou emendar o claim",
            detail:
              "Primeiro aniversário do prazo de entrega. Para o ano fiscal <strong>2025/26: 31 de janeiro de 2028</strong>.",
            timing: "12 meses após o prazo",
          },
        ],
        costs: [
          {
            item: "Custo da opção — perda da personal allowance",
            value: "≈£5.028 (faixa de 40%)",
            note: "£12.570 × 40%; ≈£5.657 na faixa de 45%",
          },
          {
            item: "Custo da opção — perda do CGT annual exempt amount",
            value: "Até £720",
            note: "£3.000 × 24%",
          },
          {
            item: "Custo para quem já ganha acima de £125.140",
            value: "Até £720",
            note: "A personal allowance já estaria eliminada pelo taper; resta apenas o AEA",
          },
          {
            item: "Imposto sobre rendimento estrangeiro",
            value: "£0",
            note: "Durante os 4 anos, remessa livre incluída",
          },
        ],
        sections: [
          {
            title: "Regras transitórias para quem já era residente em 6/abr/2025",
            body: `Quem já era residente britânico em 6/abr/2025 pode usar o FIG <strong>pelo saldo remanescente</strong> dos 4 anos, desde que satisfaça o teste de 10 anos de não residência anteriores à chegada. <strong>O status de domicílio anterior é irrelevante</strong> — o teste é exclusivamente o dos 10 anos.

· Primeiro ano de residência em <strong>2021/22 ou anterior</strong> → nenhum ano de FIG disponível
· <strong>2022/23</strong> → 1 ano (2025/26)
· <strong>2023/24</strong> → 2 anos (2025/26 e 2026/27)
· <strong>2024/25</strong> → 3 anos (2025/26 a 2027/28)
· <strong>2025/26</strong> → 4 anos (2025/26 a 2028/29)`,
          },
          {
            title: "A aritmética da renúncia às deduções",
            body: `Ao optar pelo FIG, perde-se a <em>personal allowance</em> de <strong>£12.570</strong> e o <em>CGT annual exempt amount</em> de <strong>£3.000</strong>.

· Para contribuinte na faixa de <strong>40%</strong>, o custo direto da perda da allowance é de aproximadamente <strong>£5.028</strong>;
· na faixa de <strong>45%</strong>, cerca de <strong>£5.657</strong>;
· para quem já tem renda acima de <strong>£125.140</strong>, a personal allowance já estaria integralmente eliminada pelo <em>taper</em>, e o custo da opção é apenas os £3.000 de AEA — até <strong>£720</strong> a 24%.

<strong>A decisão é aritmética, ano a ano:</strong> compensa optar sempre que o imposto que incidiria sobre o FIG do ano supere o valor das deduções perdidas.`,
          },
          {
            title: "Overseas Workday Relief reformada",
            body: `Indissociável do FIG para executivos transferidos.

<strong>Elegibilidade:</strong> ser <em>qualifying new resident</em> — mesmo teste do FIG, 10 anos de não residência.
<strong>Duração:</strong> até <strong>4 anos fiscais</strong> consecutivos (antes eram 3).
<strong>Efeito:</strong> isenta a parcela do salário correspondente a dias trabalhados <strong>fora</strong> do Reino Unido.
<strong>Teto (novidade):</strong> o menor entre <strong>30% do <em>qualifying employment income</em></strong> do ano e <strong>£300.000</strong>.
<strong>Exigência de conta offshore e de não-remessa: eliminada</strong> — o valor pode ser recebido e mantido no Reino Unido.
<strong>Transição:</strong> quem usava a remittance basis antes de 6/abr/2025 e ainda está nos 4 primeiros anos <strong>não fica sujeito ao teto</strong>.

Manual HMRC: EIM43600 e seguintes.`,
          },
          {
            title: "Trusts offshore — remoção das proteções",
            body: `<strong>Antes de 6/abr/2025:</strong> o settlor non-dom residente não era tributado sobre o FIG do trust enquanto não recebesse benefício (TCGA 1992, s. 86 e Schedule 5; ITTOIA 2005, ss. 628A/B; regras TOAA com <em>motive defence</em>). A proteção aplicava-se independentemente do tempo de residência, até o <em>deemed domicile</em>.

<strong>Desde 6/abr/2025:</strong> o settlor <strong>residente</strong> e <em>settlor-interested</em> é tributado <strong>pelo regime de competência</strong> sobre a renda estrangeira do trust (ITTOIA 2005, s. 624) e sobre os ganhos do trust (TCGA 1992, s. 86), <strong>à medida que surgem</strong>. As regras TOAA passam a alcançar a renda de sociedades subjacentes ao trust.

<strong>Exceção:</strong> a proteção subsiste se o settlor for um <em>qualifying new resident</em> no ano — nesse caso, o FIG do trust também fica isento durante os 4 anos do FIG.

<strong>Consequência para o beneficiário:</strong> beneficiários que sejam <em>qualifying new residents</em> podem receber <strong>benefícios e distribuições de trusts offshore livres de imposto britânico durante os 4 anos do FIG</strong>, inclusive quando o valor é trazido ao Reino Unido — o que difere do regime anterior, em que a distribuição remetida era tributável.`,
          },
        ],
        brazilNote: `<strong>Interação crítica — e contraintuitiva.</strong> Durante os 4 anos do FIG, os rendimentos estrangeiros são <strong>isentos</strong> no Reino Unido, o que <strong>elimina a base para crédito</strong> de imposto brasileiro pago.

Um brasileiro que ainda sofra retenção no Brasil — por exemplo, sobre aluguéis de imóvel brasileiro (Carnê-Leão até 27,5%) ou ganho de capital em ativo brasileiro (15% a 22,5%) — <strong>não terá contra o que creditar</strong> no Reino Unido durante o período FIG. Em certos perfis, a opção pelo FIG <strong>pode não reduzir a carga combinada</strong>, porque o imposto brasileiro continua e o britânico não existia de qualquer forma.

A modelagem quantitativa deve ser feita rendimento a rendimento, comparando: (i) FIG + imposto brasileiro integral, sem crédito; contra (ii) tributação britânica normal + crédito unilateral do imposto brasileiro sob a TIOPA 2010, com a personal allowance preservada.

<strong>Ponto de partida indispensável:</strong> formalizar a saída fiscal do Brasil (<strong>CSDP</strong> até o último dia de fevereiro do ano seguinte à saída, e <strong>DSDP</strong> no prazo da DIRPF). Sem elas, a pessoa permanece residente fiscal brasileira nos primeiros 12 meses de ausência, com tributação em bases universais — e, como não há tratado em vigor entre Brasil e Reino Unido, <strong>não há tie-breaker convencional</strong> para resolver a dupla residência.`,
        sources: [
          {
            t: "GOV.UK · RDR3 — Statutory Residence Test",
            u: "https://gov.uk/government/publications/rdr3-statutory-residence-test-srt/guidance-note-for-statutory-residence-test-srt-rdr3",
          },
          {
            t: "Saffery · Non-dom tax changes — o regime FIG, CGT e income tax",
            u: "https://www.saffery.com/insights/articles/non-dom-tax-changes-the-fig-regime-cgt-and-income-tax/",
          },
          {
            t: "Deloitte TaxScape · Foreign Income and Gains (FIG) regime",
            u: "https://taxscape.deloitte.com/article/foreign-income-and-gains-(fig)-regime.aspx",
          },
          {
            t: "HMRC · EIM43600 — Overseas Workday Relief, limite financeiro",
            u: "https://gov.uk/hmrc-internal-manuals/employment-income-manual/eim43600",
          },
          {
            t: "Tax Adviser Magazine (CIOT) · Trusts não residentes — o fim das proteções",
            u: "https://www.taxadvisermagazine.com/article/non-resident-trusts-end-tax-trust-protections",
          },
        ],
      },
      {
        name: "Temporary Repatriation Facility (TRF) e rebasing a 5/abr/2017",
        status: "new",
        legalBasis:
          "Finance Act 2025, Parte 2. Janela de <strong>3 anos fiscais</strong>: 2025/26, 2026/27 e 2027/28. Manual HMRC: <strong>RDRM71000</strong> e seguintes — <em>Temporary repatriation facility</em>. O rebasing é regra transitória de CGT do mesmo Act, para alienações a partir de 6/abr/2025.",
        desc: `<strong>Temporary Repatriation Facility.</strong> O TRF opera por <strong>designação</strong>, não por remessa. O contribuinte declara na <em>tax return</em> o montante de FIG anterior a 6/abr/2025 que deseja «limpar», paga a alíquota reduzida sobre esse montante, e o valor designado pode ser trazido ao Reino Unido <strong>naquele ano ou em qualquer ano futuro</strong>, sem imposto adicional. Não é necessário remeter — nem sequer é necessário que o dinheiro exista em forma líquida no momento da designação.

<strong>Alíquotas confirmadas:</strong>
· ano da designação <strong>2025/26 → 12%</strong>
· ano da designação <strong>2026/27 → 12%</strong>
· ano da designação <strong>2027/28 → 15%</strong>
· <strong>2028/29 em diante</strong> — facilidade encerrada; remessas voltam a ser tributadas às alíquotas ordinárias.

<strong>Rebasing a 5 de abril de 2017.</strong> Certos ex-non-doms podem tratar o <strong>valor de mercado em 5 de abril de 2017</strong> como custo de aquisição de ativos estrangeiros detidos <strong>pessoalmente</strong> (não em trust nem em sociedade), para fins de <em>Capital Gains Tax</em>. O ganho anterior a essa data fica fora da base.`,
        kv: [
          { l: "TRF — 2025/26", v: "12%" },
          { l: "TRF — 2026/27", v: "12%" },
          { l: "TRF — 2027/28", v: "15%" },
          { l: "TRF — a partir de 2028/29", v: "Encerrado" },
          { l: "TRF — mecânica", v: "Designação, não remessa" },
          { l: "TRF — base", v: "FIG anterior a 6/abr/2025" },
          { l: "Rebasing — data de referência", v: "5 de abril de 2017" },
          { l: "Rebasing — ativos", v: "Detidos pessoalmente" },
          { l: "Rebasing — aplicação", v: "Automática, com opt-out por ativo" },
        ],
        requirements: [
          "<strong>TRF:</strong> ter sido tributado sob a <strong>remittance basis em pelo menos um ano fiscal anterior a 2025/26</strong>. <em>A qualificação automática por FIG inferior a £2.000 é desconsiderada em algumas hipóteses — verificar.</em>",
          "<strong>TRF:</strong> ser <strong>residente fiscal britânico no ano da designação</strong>.",
          "<strong>TRF:</strong> os montantes designados devem ser <strong>FIG surgidos antes de 6/abr/2025</strong>.",
          "<strong>TRF:</strong> designar na Self Assessment do ano correspondente, identificando os valores, e pagar o encargo no prazo ordinário (31 de janeiro seguinte).",
          "<strong>Rebasing:</strong> não ter sido domiciliado nem <em>deemed domiciled</em> no Reino Unido em nenhum momento <strong>antes</strong> do ano fiscal 2025/26.",
          "<strong>Rebasing:</strong> ter reivindicado a <strong>remittance basis em pelo menos um dos anos fiscais de 2017/18 a 2024/25</strong> — anos de qualificação <em>automática</em> são desconsiderados.",
          "<strong>Rebasing:</strong> ser titular do ativo em <strong>5 de abril de 2017</strong>.",
          "<strong>Rebasing:</strong> a alienação ocorrer em ou após <strong>6 de abril de 2025</strong>.",
          "<strong>Rebasing:</strong> o ativo ter estado <strong>situado fora do Reino Unido durante todo o período de 6 de março de 2024 a 5 de abril de 2025</strong>, com exceções específicas.",
        ],
        sections: [
          {
            title: "Pontos operacionais do TRF",
            body: `<strong>Regras de ordenação alteradas.</strong> Montantes designados são considerados remetidos <strong>prioritariamente</strong>, o que evita que a remessa «puxe» FIG não designado de um <em>mixed fund</em>.

<strong>Alcance ampliado:</strong> aplica-se também a <strong>benefícios recebidos de trusts offshore</strong> que sejam <em>matched</em> com FIG do trust anteriores a 6/abr/2025.

<strong>Limitações:</strong> a carga do TRF <strong>não é creditável</strong> contra imposto estrangeiro, e <strong>não admite dedução</strong> de perdas, <em>reliefs</em> ou <em>allowances</em>. <em>Não há alívio de dupla tributação sob tratado para o TRF charge — a confirmar em RDRM71000+.</em>

<em>Ponto em aberto:</em> se ex-<em>deemed domiciled</em> que nunca reivindicaram formalmente a remittance basis (por já serem <em>deemed dom</em>) mantêm acesso ao TRF sobre FIG de anos anteriores. A leitura corrente da doutrina é afirmativa, mas exige confirmação.`,
          },
          {
            title: "Mecânica do rebasing",
            body: `O rebasing é <strong>automático</strong> quando as condições são atendidas, mas o contribuinte pode <strong>optar por não aplicá-lo, ativo a ativo</strong> (<em>election to disapply</em>) — o que é relevante quando o ativo desvalorizou desde 2017 e o custo histórico produz perda dedutível.

<strong>Observação factual sobre o alcance:</strong> o conjunto de condições — especialmente a exclusão de quem já foi <em>deemed domiciled</em>, ou seja, de quem tem 15 anos ou mais de residência — <strong>restringe substancialmente o universo de beneficiários</strong>.`,
          },
        ],
        brazilNote: `O TRF é relevante para o brasileiro que residiu no Reino Unido sob a remittance basis e acumulou rendimentos e ganhos brasileiros fora do país sem os remeter — dividendos de empresas brasileiras, produto de venda de participações, aluguéis acumulados no Brasil.

Esse estoque, antes bloqueado pela tributação de até 45% na remessa, pode ser designado a <strong>12%</strong> (até 2026/27) ou <strong>15%</strong> (2027/28) e trazido ao Reino Unido a qualquer momento futuro.

<strong>Atenção:</strong> a carga do TRF <strong>não admite crédito por imposto brasileiro</strong> já pago sobre esses mesmos rendimentos, e <strong>não há tratado em vigor</strong> entre Brasil e Reino Unido que ofereça alívio. A designação deve, portanto, ser comparada ao custo de manter os fundos fora do Reino Unido.

O <strong>rebasing a 5/abr/2017</strong> pode ser materialmente relevante para brasileiros com participações societárias no Brasil valorizadas desde então: o ganho anterior a essa data fica fora da base britânica de CGT — mas apenas para quem <strong>nunca foi deemed domiciled</strong>, o que exclui residentes de 15 anos ou mais.`,
        sources: [
          {
            t: "HMRC · RDRM71000 — Temporary repatriation facility",
            u: "https://www.gov.uk/hmrc-internal-manuals/residence-domicile-and-remittance-basis/rdrm71000",
          },
          {
            t: "Deloitte TaxScape · Temporary Repatriation Facility (TRF)",
            u: "https://taxscape.deloitte.com/article/temporary-repatriation-facility-(trf).aspx",
          },
          {
            t: "Saffery · Temporary Repatriation Facility — como funciona",
            u: "https://www.saffery.com/insights/articles/temporary-repatriation-facility-trf-how-it-works-and-what-to-include-in-your-2025-26-tax-return/",
          },
          {
            t: "Chambers and Partners · O fim da remittance basis e as duas disposições transitórias",
            u: "https://chambers.com/articles/the-end-of-the-remittance-basis-and-the-two-transitional-provisions",
          },
        ],
      },
      {
        name: "Inheritance Tax — do domicílio à residência de longo prazo",
        status: "changed",
        legalBasis:
          "Finance Act 2025, Parte 2, que altera o <strong>Inheritance Tax Act 1984</strong>, substituindo o critério de domicílio pelo de <strong>long-term UK residence</strong>. Vigência: <strong>6 de abril de 2025</strong>. Medidas adicionais no Autumn Budget de 26 de novembro de 2025.",
        desc: `<strong>O novo critério.</strong> Um indivíduo é <strong>long-term resident (LTR)</strong> se foi residente fiscal no Reino Unido em <strong>pelo menos 10 dos 20 anos fiscais imediatamente anteriores</strong> ao ano em que ocorre o fato gerador de IHT — morte ou transferência tributável em vida.

· <strong>LTR</strong> → IHT sobre o <strong>patrimônio mundial</strong>
· <strong>Não-LTR</strong> → IHT apenas sobre ativos situados no Reino Unido (<em>UK situs assets</em>), incluindo imóveis britânicos detidos indiretamente por sociedades estrangeiras (regra de 2017, mantida)

O conceito de <strong>domicílio deixou de ser relevante para IHT</strong>, assim como o <em>deemed domicile</em> e o regime do <em>formerly domiciled resident</em>.

<strong>O «IHT tail» — a cauda após a saída.</strong> Quem se torna LTR e depois deixa o Reino Unido permanece no escopo mundial do IHT por período escalonado:
· 10 a 13 anos de residência → <strong>3 anos fiscais</strong> de cauda
· 14 anos → 4 anos · 15 anos → 5 anos · 16 anos → 6 anos
· 17 anos → 7 anos · 18 anos → 8 anos · 19 anos → 9 anos
· <strong>20 anos ou mais → 10 anos fiscais</strong> (máximo)

Após 10 anos fiscais consecutivos de não residência, o relógio reinicia integralmente.

<strong>Comparação numérica:</strong> sob o regime anterior, o <em>deemed domicile</em> para IHT persistia por <strong>3 anos fiscais</strong> após a perda da residência. O novo regime pode estender esse período a até <strong>10 anos</strong>.`,
        kv: [
          { l: "Critério", v: "Residência: 10 de 20 anos fiscais" },
          { l: "Alíquota padrão", v: "40%" },
          { l: "Alíquota reduzida (legado beneficente)", v: "36%" },
          { l: "Transferências em vida a trusts", v: "20%" },
          { l: "Nil-rate band (NRB)", v: "£325.000" },
          { l: "Residence nil-rate band (RNRB)", v: "£175.000" },
          { l: "Teto conjugado por casal", v: "£1.000.000" },
          { l: "Isenção conjugal — cônjuge LTR", v: "Ilimitada" },
          { l: "Isenção conjugal — cônjuge não-LTR", v: "Limitada a £325.000" },
          { l: "IHT tail mínimo", v: "3 anos fiscais" },
          { l: "IHT tail máximo", v: "10 anos fiscais" },
          { l: "Ten-year anniversary charge", v: "Até 6%" },
        ],
        sections: [
          {
            title: "Alíquotas, faixas e regras de isenção",
            body: `· Alíquota-padrão sobre o excedente: <strong>40%</strong>
· Alíquota reduzida (10% ou mais do espólio líquido a instituições beneficentes): <strong>36%</strong>
· Transferências tributáveis em vida a trusts (<em>lifetime rate</em>): <strong>20%</strong>
· <strong>Nil-rate band (NRB): £325.000</strong>
· <strong>Residence nil-rate band (RNRB): £175.000</strong> — imóvel residencial transmitido a descendentes diretos
· <strong>Taper da RNRB:</strong> reduz £1 para cada £2 de espólio acima de <strong>£2.000.000</strong>
· NRB e RNRB são <strong>transferíveis entre cônjuges</strong> — até 100% da parcela não utilizada (TNRB e TRNRB)
· <strong>Teto conjugado por casal: £1.000.000</strong> (£650.000 de NRB mais £350.000 de RNRB)
· Congelamento das faixas até <strong>2030/31</strong> <em>— o Autumn Budget 2025 pode ter estendido para 2031; verificar</em>
· <strong>Isenção conjugal:</strong> ilimitada se o cônjuge for LTR; <strong>limitada ao valor da NRB (£325.000)</strong> se não for, salvo <em>election</em> para ser tratado como LTR
· <strong>Taper relief</strong> em PETs (<em>potentially exempt transfers</em>): 7 anos, com redução progressiva do imposto a partir do 3.º ano`,
          },
          {
            title: "Trusts — o fim da proteção permanente",
            body: `<strong>Mudança estrutural.</strong> A natureza de «propriedade excluída» (<em>excluded property</em>) dos ativos não britânicos em trust <strong>deixou de ser fixada permanentemente pelo domicílio do settlor no momento da constituição</strong>. Passou a ser <strong>testada na data de cada fato gerador de IHT</strong>, com referência ao status de LTR do settlor.

<strong>Consequências práticas:</strong>
· se o settlor é <strong>LTR na data do evento</strong>, os ativos não britânicos do trust entram no <em>relevant property regime</em>: <strong>entry charge de 20%</strong> (transferências em vida acima da NRB), <strong>ten-year anniversary charge de até 6%</strong> e <em>exit charges</em> proporcionais;
· se o settlor <strong>deixa de ser LTR</strong>, os ativos voltam a ser <em>excluded property</em> — o regime é «liga-desliga»;
· trusts constituídos por settlors <strong>falecidos antes de 6/abr/2025</strong> e trusts em que o settlor jamais será LTR permanecem protegidos.

<strong>Gift with reservation of benefit (GWR):</strong> desde 6/abr/2025 os ativos de trust <em>settlor-interested</em> podem ser tratados como parte do espólio do settlor. <em>O escopo exato das regras GWR aplicáveis deve ser verificado.</em>`,
          },
          {
            title: "Medidas do Autumn Budget de 26 de novembro de 2025",
            body: `<strong>Teto de £5 milhões para relevant property charges</strong> — trusts de propriedade excluída constituídos <strong>antes de 30/out/2024</strong> têm as cobranças decenais e de saída limitadas a uma base de £5.000.000. Vigência: <strong>6 de abril de 2026</strong>.

<strong>Regra anti-<em>decanting</em></strong> — cobrança de IHT quando ativos de trust são transferidos do Reino Unido para fora após o settlor deixar de ser LTR. Vigência <strong>imediata: 26 de novembro de 2025</strong>.

<strong>Fundos de previdência não utilizados</strong> passam a integrar o espólio para IHT (anunciado no Autumn Budget 2024). Vigência: <strong>abril de 2027</strong>.

<strong>Reforma de Agricultural Property Relief e Business Property Relief</strong> — alívio de 100% limitado a £1 milhão combinados; 50% acima disso. Vigência: <strong>abril de 2026</strong>. <em>A confirmar.</em>

<strong>Imposto sobre patrimônio (wealth tax) e exit tax: NÃO foram introduzidos</strong> no Autumn Budget 2025.`,
          },
        ],
        brazilNote: `<strong>Não existe tratado sucessório entre Brasil e Reino Unido.</strong> A Convenção assinada em 2022 (ainda não em vigor) trata <strong>exclusivamente de tributos sobre a renda</strong>.

<strong>Comparação estrutural:</strong>
· <strong>IHT:</strong> federal (HMRC), alíquota de 40%, incide sobre o <strong>espólio</strong> (<em>estate tax</em>), isenção de £325.000 mais £175.000, isenção conjugal ilimitada apenas se o cônjuge for LTR;
· <strong>ITCMD:</strong> <strong>estadual</strong> (CF, art. 155, I), alíquota de até 8% (teto da Resolução do Senado n.º 9/1992), incide sobre o <strong>quinhão de cada herdeiro</strong>, com faixas de isenção variáveis por estado, e <strong>progressividade obrigatória a partir de 2026</strong> pela EC 132/2023.

<strong>Cenário A — brasileiro LTR no Reino Unido que falece:</strong> IHT de 40% sobre o <strong>patrimônio mundial</strong> acima de £325.000/£500.000, e ITCMD sobre bens situados no Brasil, até 8%.
<strong>Alívio disponível:</strong> o Reino Unido concede <strong>alívio unilateral</strong> por imposto sucessório estrangeiro incidente sobre bens situados no exterior — <strong>IHTA 1984, s. 159</strong>. O ITCMD pago no Brasil sobre bens brasileiros é, em princípio, creditável contra o IHT britânico atribuível àqueles bens.
<strong>No sentido inverso, não há alívio:</strong> a legislação brasileira de ITCMD <strong>não prevê, em regra, crédito por imposto sucessório estrangeiro</strong> — as leis estaduais são silentes.

<strong>Cenário B — o risco mais subestimado da reforma.</strong> O brasileiro que deixou o Reino Unido mas está <strong>dentro do IHT tail (3 a 10 anos)</strong> permanece com o patrimônio <strong>mundial</strong> exposto ao IHT britânico de 40%, ainda que já seja residente fiscal exclusivo no Brasil e sem qualquer vínculo econômico remanescente com o Reino Unido.

<strong>Cenário C — brasileiro não residente com imóvel em Londres:</strong> IHT de 40% sobre o valor do imóvel acima da NRB, <strong>inclusive quando detido por sociedade estrangeira</strong> (regra mantida desde abril de 2017). Empréstimos usados para adquirir ou manter o imóvel também podem ser trazidos ao escopo.

<strong>Do lado brasileiro:</strong> o STF, no Tema 825 (RE 851.108), decidiu que os Estados não podem cobrar ITCMD sobre bens no exterior sem lei complementar federal. A EC 132/2023 estabeleceu regra transitória de competência (art. 16 do ADCT), mas subsistem controvérsias sobre autoaplicabilidade e sobre a necessidade de lei estadual nova, com observância de anterioridade. <em>Há divergência entre fontes sobre a existência e o conteúdo de uma Lei Complementar n.º 227/2026 regulamentadora — item de verificação prioritária.</em>

<strong>Instrumentos de mitigação documentados</strong> (sem juízo sobre eficácia): seguro de vida britânico em trust, fora do espólio se corretamente estruturado; apólice <em>whole-of-life</em> dimensionada para a obrigação de IHT; doações em vida com sobrevida de 7 anos (PET), observado o novo escopo de LTR; <em>election</em> de cônjuge não-LTR para ser tratado como LTR, o que transforma a isenção limitada a £325.000 em ilimitada, ao custo de expor o patrimônio mundial do cônjuge; e planejamento do momento de perda da condição de LTR frente aos prazos da cauda.`,
        warning: `O <strong>IHT tail de até 10 anos</strong> é a exposição mais subestimada da reforma de 2025. Um brasileiro que residiu 20 anos ou mais no Reino Unido e retorna ao Brasil permanece com o <strong>patrimônio mundial sujeito a IHT de 40%</strong> por uma década inteira após a saída — sem tratado sucessório, sem crédito no Brasil, e com o ITCMD estadual brasileiro incidindo cumulativamente sobre os bens situados no Brasil.

O antigo planejamento por <em>excluded property trust</em> constituído antes de atingir o <em>deemed domicile</em> <strong>perdeu a característica de proteção permanente</strong>: o teste passou a ser feito na data de cada fato gerador.`,
        sources: [
          {
            t: "Saffery · Reformas de IHT para non-doms",
            u: "https://www.saffery.com/insights/articles/inheritance-tax-reforms-for-uk-non-doms/",
          },
          {
            t: "ICAEW · Mudanças no IHT a partir de 6 de abril de 2025",
            u: "https://www.icaew.com/technical/tax/tax-faculty/taxline/articles/2025/changes-to-iht-from-6-april-2025",
          },
          {
            t: "Boodle Hatfield · Long term residence e a sua importância para o IHT",
            u: "https://www.boodlehatfield.com/articles/long-term-residence-and-its-importance-for-uk-inheritance-tax-iht-purposes",
          },
          {
            t: "Tax Journal · Excluded property trusts e 6 de abril de 2025",
            u: "https://www.taxjournal.com/articles/excluded-property-trusts-6-april-2025-",
          },
          {
            t: "Travers Smith · Autumn Budget 2025 — Personal Taxes",
            u: "https://www.traverssmith.com/knowledge/knowledge-container/autumn-budget-2025-personal-taxes/",
          },
        ],
      },
      {
        name: "Alíquotas ordinárias, SRT e regras de saída",
        status: "changed",
        legalBasis:
          "Statutory Residence Test: <strong>Finance Act 2013, Schedule 45</strong>, em vigor desde 6/abr/2013; guia HMRC <strong>RDR3</strong>; manual RDRM11000–RDRM13000. Temporary non-residence: FA 2013, Sch. 45, Parte 4, e TCGA 1992, ss. 1M e 1N. Alíquotas: Autumn Budget de 26/nov/2025.",
        desc: `Quadro das alíquotas ordinárias e das regras que determinam quando alguém é — e deixa de ser — residente fiscal britânico.

<strong>Todas as faixas referem-se a Inglaterra, País de Gales e Irlanda do Norte.</strong> A <strong>Escócia tem tabela própria</strong> de <em>income tax</em>, com 6 faixas e alíquotas até 48% — relevante para quem se instala em Edimburgo ou Glasgow. <em>As alíquotas escocesas de 2026/27 não puderam ser verificadas.</em>

O ano fiscal britânico vai de <strong>6 de abril a 5 de abril</strong>.`,
        kv: [
          { l: "Personal allowance", v: "£12.570 (0%)" },
          { l: "Basic rate", v: "20% até £50.270" },
          { l: "Higher rate", v: "40% até £125.140" },
          { l: "Additional rate", v: "45% acima de £125.140" },
          { l: "Marginal efetiva £100k–£125,14k", v: "60% (taper)" },
          { l: "Congelamento das faixas", v: "Até 2030/31" },
          { l: "Dividendos 2026/27", v: "10,75% · 35,75% · 39,35%" },
          { l: "Juros e aluguéis — desde 2027", v: "22% · 42% · 47%" },
          { l: "CGT", v: "18% e 24%" },
          { l: "CGT annual exempt amount", v: "£3.000" },
          { l: "NIC — empregado", v: "8% e 2%" },
          { l: "NIC — empregador", v: "15% acima de £5.000/ano" },
          { l: "SDLT — surcharge não residente", v: "+2%" },
          { l: "SDLT — habitação adicional", v: "+5%" },
        ],
        sections: [
          {
            title: "Income tax e a alíquota marginal de 60%",
            body: `<strong>2025/26 e 2026/27</strong> (Inglaterra, País de Gales e Irlanda do Norte):
· Personal allowance: £0 – £12.570 → <strong>0%</strong>
· Basic rate: £12.571 – £50.270 → <strong>20%</strong>
· Higher rate: £50.271 – £125.140 → <strong>40%</strong>
· Additional rate: acima de £125.140 → <strong>45%</strong>

<strong>Congelamento estendido:</strong> as faixas permanecem congeladas até <strong>2030/31</strong> — extensão anunciada no Autumn Budget de 26/nov/2025; anteriormente iam até 2027/28.

<strong>Taper da personal allowance:</strong> redução de <strong>£1 para cada £2</strong> de <em>adjusted net income</em> acima de <strong>£100.000</strong>; a allowance é integralmente eliminada em <strong>£125.140</strong>. <strong>A alíquota marginal efetiva na faixa de £100.000 a £125.140 é de 60%</strong> — ponto frequentemente ignorado no planejamento de remuneração.

· <em>Personal savings allowance:</em> £1.000 (basic rate), £500 (higher rate), £0 (additional rate)
· <em>Starting rate for savings:</em> £5.000 a 0%, reduzido conforme outros rendimentos`,
          },
          {
            title: "Dividendos, juros e aluguéis — os aumentos escalonados",
            body: `<strong>Dividendos — alteração em 6 de abril de 2026:</strong>
· <em>Dividend allowance</em>: £500 a 0% (mantida)
· <em>Ordinary rate</em> (basic): 8,75% → <strong>10,75%</strong> (+2 p.p.)
· <em>Upper rate</em> (higher): 33,75% → <strong>35,75%</strong> (+2 p.p.)
· <em>Additional rate</em>: <strong>39,35%</strong> (inalterada)

<strong>Juros (savings) e aluguéis (property income) — alteração em 6 de abril de 2027.</strong> O Autumn Budget 2025 criou alíquotas próprias, com acréscimo de <strong>2 pontos percentuais em todas as faixas</strong>:
· Basic: 20% → <strong>22%</strong>
· Higher: 40% → <strong>42%</strong>
· Additional: 45% → <strong>47%</strong>`,
          },
          {
            title: "Capital Gains Tax",
            body: `· <em>Annual exempt amount</em> — pessoa física: <strong>£3.000</strong> (trusts: £1.500)
· Ganhos dentro da faixa <em>basic rate</em> remanescente: <strong>18%</strong>
· Ganhos acima da faixa <em>basic rate</em>: <strong>24%</strong>
· Imóvel residencial (não <em>main residence</em>): 18% / 24%
· <em>Carried interest</em>: 32% em 2025/26; regime substituído a partir de 6/abr/2026 <em>— a confirmar</em>
· <em>Business Asset Disposal Relief</em> (BADR), teto de £1 milhão vitalício: <strong>14%</strong> desde 6/abr/2025; <strong>18%</strong> a partir de 6/abr/2026 <em>— a confirmar</em>

<strong>Histórico:</strong> as alíquotas gerais eram 10%/20% até 29/out/2024, e foram elevadas a <strong>18%/24% com efeito imediato em 30 de outubro de 2024</strong> (Autumn Budget 2024), alinhando-as às já aplicáveis a imóveis residenciais.

O ganho de capital <strong>«empilha» sobre a renda</strong>: a parcela que cabe na faixa <em>basic rate</em> não utilizada é tributada a 18%; o excedente, a 24%.`,
          },
          {
            title: "National Insurance Contributions",
            body: `<strong>Classe 1 — empregado:</strong> <strong>8%</strong> entre o <em>Primary Threshold</em> (£12.570/ano; £242/semana) e o <em>Upper Earnings Limit</em> (£50.270/ano; £967/semana); <strong>2%</strong> acima do UEL.

<strong>Classe 1 — empregador: 15%</strong> acima do <em>Secondary Threshold</em> de <strong>£5.000/ano</strong> (£417/mês).
<em>Employment Allowance</em>: £10.500 em 2025/26.

<strong>Classe 2 — autônomo:</strong> voluntária desde 2024/25, cerca de £3,50/semana.
<strong>Classe 4 — autônomo:</strong> 6% entre £12.570 e £50.270; 2% acima.
<strong>Classe 3 — voluntária:</strong> cerca de £17,75/semana.

<strong>Observação relevante para o custo de patrocínio de vistos:</strong> o NIC patronal saltou de 13,8% com limiar de £9.100 para <strong>15% com limiar de £5.000</strong> em abril de 2025 — o que altera materialmente o custo de contratar sob patrocínio.

<strong>Anunciado:</strong> introdução de NIC sobre contribuições previdenciárias via <em>salary sacrifice</em> acima de £2.000/ano, a partir de <strong>abril de 2029</strong>. <em>A confirmar.</em>`,
          },
          {
            title: "Stamp Duty Land Tax e o custo real para o comprador brasileiro",
            body: `Escócia aplica <strong>LBTT</strong> e País de Gales aplica <strong>LTT</strong>, com tabelas e sobretaxas distintas.

<strong>Tabela residencial base (desde 1/abr/2025):</strong>
· até £125.000 → 0%
· £125.001 – £250.000 → 2%
· £250.001 – £925.000 → 5%
· £925.001 – £1.500.000 → 10%
· acima de £1.500.000 → 12%

<strong>Sobretaxas cumulativas:</strong>
· <strong>Não residente</strong> (<em>non-resident surcharge</em>, FA 2021, Sch. 16): <strong>+2%</strong> em todas as faixas, desde 1/abr/2021;
· <strong>Habitação adicional</strong> (HRAD): <strong>+5%</strong> em todas as faixas — elevada de 3% para 5% em <strong>31 de outubro de 2024</strong>;
· Aquisição por pessoa jurídica acima de £500.000: <strong>17%</strong> flat, elevada de 15% em 31/out/2024. <em>A confirmar.</em>

<strong>Efeito combinado para um comprador brasileiro não residente adquirindo segunda residência: +7 pontos percentuais</strong> sobre cada faixa, atingindo <strong>19% na faixa superior</strong>.

<strong>Teste de não residência para SDLT:</strong> o comprador é não residente se esteve presente no Reino Unido <strong>menos de 183 dias nos 12 meses anteriores</strong> à data efetiva da transação. Há regra de <strong>reembolso</strong> se o comprador atingir 183 dias de presença nos 12 meses <em>posteriores</em> — pedido de restituição à HMRC dentro de 2 anos.

<em>First-time buyers relief</em> (faixa nula até £300.000, alívio parcial até £500.000) <strong>não está disponível</strong> a quem já possui imóvel em qualquer lugar do mundo.

<strong>Outros tributos sobre imóveis:</strong>
· <strong>ATED</strong> — encargo anual sobre imóveis residenciais acima de £500.000 detidos por sociedades, com faixas progressivas indexadas. <em>Valores de 2026/27 a confirmar.</em>
· <strong>NRCGT</strong> — não residentes são tributados sobre ganhos em imóveis britânicos (diretos desde abr/2015 para residenciais e abr/2019 para comerciais) e sobre participações em sociedades «<em>property-rich</em>» (75% ou mais do valor em imóveis britânicos) quando detêm 25% ou mais. <strong>Declaração e pagamento em 60 dias</strong> da conclusão.
· <strong>High Value Council Tax Surcharge («mansion tax»)</strong> — Autumn Budget 2025, início em <strong>2028/29</strong>, sobre imóveis residenciais na Inglaterra avaliados em £2 milhões ou mais (preços de 2026): £2,0m–£2,5m → £2.500/ano; £2,5m–£3,5m → £3.500; £3,5m–£5,0m → £5.000; acima de £5,0m → £7.500. Reavaliação quinquenal pela Valuation Office Agency; responsabilidade do <strong>proprietário</strong>, não do inquilino.`,
          },
          {
            title: "Statutory Residence Test — a ordem hierárquica",
            body: `O SRT é aplicado <strong>em ordem estrita</strong>: se um <em>automatic overseas test</em> é satisfeito, a análise para (não residente). Só então se examinam os <em>automatic UK tests</em>. Só se nenhum for conclusivo aplica-se o <em>sufficient ties test</em>.

<strong>Contagem de dias — regra da meia-noite:</strong> conta-se o dia em que o indivíduo está no Reino Unido <strong>à meia-noite</strong>. Exceções: <em>transit days</em> (passagem em conexão sem atividades substanciais); <em>exceptional circumstances</em> — até <strong>60 dias/ano</strong> desconsiderados por circunstâncias fora do controle (doença grave, desastre natural, restrições governamentais); e a <em>deeming rule</em> — dias sem pernoite podem contar se o indivíduo tiver 3 ou mais vínculos, tiver sido residente em algum dos 3 anos anteriores e acumular mais de 30 dias de presença sem pernoite.

<strong>Automatic overseas tests</strong> — se qualquer um for satisfeito, <strong>não residente</strong>:
· <strong>AOT 1</strong> — foi residente em um ou mais dos 3 anos anteriores <strong>e</strong> passou <strong>menos de 16 dias</strong> no Reino Unido no ano
· <strong>AOT 2</strong> — <strong>não</strong> foi residente em nenhum dos 3 anos anteriores <strong>e</strong> passou <strong>menos de 46 dias</strong>
· <strong>AOT 3</strong> — trabalha <strong>em tempo integral no exterior</strong> (média de ≥35 horas/semana, sem <em>significant break</em> de 31 dias ou mais) durante todo o ano <strong>e</strong> passou <strong>menos de 91 dias</strong> no Reino Unido <strong>e</strong> teve <strong>menos de 31 dias de trabalho</strong> britânico (dias com mais de 3 horas de trabalho)
· <strong>AOT 4 e 5</strong> — hipóteses de falecimento

<strong>Automatic UK tests</strong> — se qualquer um for satisfeito e nenhum AOT o for, <strong>residente</strong>:
· <strong>AUT 1</strong> — passou <strong>183 dias ou mais</strong> no Reino Unido no ano fiscal
· <strong>AUT 2</strong> — teve uma <em>home</em> no Reino Unido por <strong>≥91 dias consecutivos</strong> (dos quais ≥30 no ano fiscal), esteve presente nela em <strong>≥30 dias</strong> no ano, <strong>e</strong> houve uma janela de 91 dias consecutivos em que não teve residência no exterior (ou, tendo, esteve presente nela menos de 30 dias no ano)
· <strong>AUT 3</strong> — trabalhou <strong>em tempo integral no Reino Unido</strong> por qualquer período de <strong>365 dias</strong> (média ≥35h/semana), com <strong>mais de 75% dos dias de trabalho</strong> no Reino Unido, e ao menos um dia de trabalho britânico tanto no período de 365 dias quanto no ano fiscal
· <strong>AUT 4</strong> — hipótese de falecimento`,
          },
          {
            title: "Sufficient ties test — os 5 vínculos e as tabelas",
            body: `<strong>Os cinco vínculos:</strong>
1. <strong>Family tie</strong> — cônjuge, parceiro civil, parceiro em coabitação, ou <strong>filho menor de 18 anos</strong> residente no Reino Unido (com exceção para filho em escola de tempo integral, se o indivíduo passa menos de 61 dias com ele fora das férias)
2. <strong>Accommodation tie</strong> — dispõe de acomodação no Reino Unido, disponível por <strong>≥91 dias consecutivos</strong>, e passa pelo menos <strong>1 noite</strong> nela no ano (<strong>16 noites</strong> se for casa de parente)
3. <strong>Work tie</strong> — <strong>40 dias ou mais</strong> no ano em que trabalha <strong>mais de 3 horas</strong> no Reino Unido
4. <strong>90-day tie</strong> — passou <strong>mais de 90 dias</strong> no Reino Unido em <strong>qualquer um</strong> dos 2 anos fiscais anteriores
5. <strong>Country tie</strong> — esteve presente no Reino Unido em <strong>mais dias</strong> do que em qualquer outro país isolado no ano — <strong>aplicável somente a <em>leavers</em></strong>

<strong>«ARRIVERS»</strong> — não foi residente em nenhum dos 3 anos anteriores (máximo de 4 vínculos, pois o <em>country tie</em> não se aplica):
· menos de 46 dias → não residente (AOT 2)
· 46 – 90 dias → residente com <strong>4 vínculos</strong> (todos)
· 91 – 120 dias → <strong>3 vínculos</strong>
· 121 – 182 dias → <strong>2 vínculos</strong>
· 183 dias ou mais → residente automaticamente

<strong>«LEAVERS»</strong> — foi residente em pelo menos um dos 3 anos anteriores (os 5 vínculos aplicáveis):
· menos de 16 dias → não residente (AOT 1)
· 16 – 45 dias → residente com <strong>4 vínculos</strong>
· 46 – 90 dias → <strong>3 vínculos</strong>
· 91 – 120 dias → <strong>2 vínculos</strong>
· 121 – 182 dias → <strong>1 vínculo</strong>
· 183 dias ou mais → residente automaticamente

<strong>O ponto mais subestimado no planejamento de saída:</strong> um brasileiro que sai do Reino Unido e mantém casa disponível, cônjuge no país e mais de 90 dias de presença nos dois anos anteriores acumula <strong>3 vínculos</strong> — e, nesse cenário, <strong>46 dias de presença já o tornam residente</strong>. A assimetria entre <em>arriver</em> (mínimo de 46 dias) e <em>leaver</em> (mínimo de 16 dias) é decisiva.

<strong>Registos a manter</strong> (o ónus da prova é do contribuinte): cartões de embarque, extratos com data e local, registos de entrada e saída, agenda de trabalho com horas por dia e por país, contratos de locação e escrituras, comprovantes de dias com filhos, matrícula escolar.`,
          },
          {
            title: "Split year treatment — os 8 casos",
            body: `O ano fiscal britânico é <strong>indivisível por regra</strong>; o <em>split year</em> é a exceção. Aplica-se <strong>apenas ao próprio contribuinte</strong> (não ao cônjuge automaticamente) e <strong>não afeta</strong> a aplicação do SRT em si — a pessoa continua sendo residente no ano, mas o ano é dividido em parte britânica e parte estrangeira.

<strong>Casos de SAÍDA do Reino Unido:</strong>
· <strong>Caso 1</strong> — início de trabalho em tempo integral no exterior
· <strong>Caso 2</strong> — cônjuge ou parceiro de quem inicia trabalho em tempo integral no exterior
· <strong>Caso 3</strong> — deixa de ter residência (<em>home</em>) no Reino Unido

<strong>Casos de CHEGADA ao Reino Unido:</strong>
· <strong>Caso 4</strong> — passa a ter residência apenas no Reino Unido
· <strong>Caso 5</strong> — início de trabalho em tempo integral no Reino Unido
· <strong>Caso 6</strong> — cessação de trabalho em tempo integral no exterior (retorno)
· <strong>Caso 7</strong> — cônjuge ou parceiro de quem cessa trabalho em tempo integral no exterior
· <strong>Caso 8</strong> — passa a ter uma residência no Reino Unido

Há regras de prioridade se mais de um caso se aplica; o caso aplicável determina a <strong>data de divisão</strong> (<em>split date</em>). Guia HMRC: RDR3, seções 5 e 6; manual RDRM12000+.

<strong>Interação com o FIG:</strong> a parte estrangeira de um <em>split year</em> de chegada <strong>conta como ano fiscal completo de residência</strong> para efeito da contagem dos 4 anos do FIG.`,
          },
          {
            title: "Temporary non-residence — a regra dos 5 anos",
            body: `<strong>Base legal:</strong> FA 2013, Sch. 45, Parte 4 (parágrafos 109–115); TCGA 1992, ss. 1M e 1N para ganhos de capital.

<strong>Definição:</strong> o indivíduo é <em>temporary non-resident</em> se (i) foi residente britânico em <strong>pelo menos 4 dos 7 anos fiscais</strong> anteriores ao ano de partida, e (ii) o período de não residência dura <strong>5 anos ou menos</strong>.

<strong>Consequência:</strong> ao retornar, são tributados <strong>no ano do retorno</strong> os seguintes itens surgidos durante a ausência:
· <strong>ganhos de capital</strong> sobre ativos detidos antes da partida (TCGA 1992, ss. 1M/1N)
· <strong>distribuições de <em>close companies</em></strong> — dividendos de empresas fechadas controladas
· <strong>remessas de FIG pré-partida</strong> por ex-usuários da remittance basis
· <em>chargeable event gains</em> de apólices de seguro de vida
· <em>offshore income gains</em> (fundos não-<em>reporting</em>)
· <strong>retiradas flexíveis e <em>lump sums</em> de previdência</strong>
· distribuições de trusts e <em>relevant foreign income</em>

<strong>Contagem dos 5 anos:</strong> partes estrangeiras de <em>split years</em> na partida e no retorno <strong>contam</strong> para completar o período. O cálculo é feito em períodos de residência, não em anos fiscais integrais.`,
          },
          {
            title: "A sequência de relógios ao sair do Reino Unido",
            body: `Quatro contagens distintas correm em paralelo após a saída, e cada uma tem um prazo próprio:

· <strong>Escapar da recaptura de CGT e demais itens</strong> (<em>temporary non-residence</em>) → mais de <strong>5 anos</strong> de não residência
· <strong>Encerrar a exposição mundial ao IHT</strong> (<em>IHT tail</em>) → <strong>3 a 10 anos fiscais</strong>, conforme os anos de residência acumulados
· <strong>Reacessar o regime FIG</strong> de 4 anos → <strong>10 anos fiscais consecutivos</strong>
· <strong>Resetar a contagem 10/20 de long-term residence para IHT</strong> → <strong>10 anos fiscais consecutivos</strong>

<strong>Implicação prática:</strong> um cliente que residiu 4 ou mais dos 7 anos anteriores e planeja realizar um ganho de capital relevante precisa manter a não residência por <strong>mais de 5 anos</strong> para que o ganho não seja recapturado — e isso soma-se ao IHT tail e à exigência de 10 anos para reacessar o FIG.`,
          },
        ],
        brazilNote: `<strong>Sem tratado em vigor</strong> (ver o dossiê imigratório para o estado da Convenção de 2022), a eliminação da dupla tributação depende exclusivamente de mecanismos unilaterais:

<strong>Lado brasileiro — reciprocidade.</strong> Lei n.º 8.383/1991, art. 26; IN SRF n.º 208/2002, art. 16; RIR/2018. A Receita Federal <strong>reconhece a existência de reciprocidade de tratamento com o Reino Unido</strong>, ao lado de Estados Unidos e Alemanha. A prova pode ser feita por cópia da lei estrangeira ou por declaração da autoridade fiscal estrangeira. <strong>Limite:</strong> o crédito é limitado ao imposto brasileiro devido sobre o mesmo rendimento, não gera restituição do excedente, e é apurado <strong>rendimento a rendimento</strong>. <em>Verificar o ato normativo específico que reconhece a reciprocidade.</em>

<strong>Lado britânico — alívio unilateral.</strong> TIOPA 2010, Parte 2, ss. 8, 9 e 18 — crédito por imposto estrangeiro pago sobre rendimento de fonte estrangeira; alternativa de <strong>dedução</strong> do imposto estrangeiro da base tributável, quando mais eficiente. Manual HMRC: INTM160000+.

<strong>Retenção brasileira na fonte sobre remessas ao Reino Unido, sem tratado:</strong>
· <strong>Dividendos</strong> — 0% até 31/dez/2025; a partir de <strong>1/jan/2026, retenção de 10%</strong> <em>(Lei n.º 15.270/2025 — confirmar alíquota, base e regras de transição, incluindo a exceção para lucros apurados até 2025 com distribuição deliberada até 31/12/2025)</em>
· <strong>Juros</strong> — 15% (25% se o beneficiário estiver em jurisdição de tributação favorecida)
· <strong>Juros sobre capital próprio (JCP)</strong> — 15%
· <strong>Royalties</strong> — 15%, mais CIDE-Royalties de 10% a cargo da fonte
· <strong>Serviços técnicos e assistência técnica</strong> — 15%, mais CIDE de 10%, PIS/COFINS-Importação e ISS
· <strong>Aluguéis de imóvel no Brasil</strong> — 15%
· <strong>Ganho de capital de não residente</strong> sobre bem no Brasil — 15% até R$ 5 milhões; 17,5% de R$ 5 a 10 milhões; 20% de R$ 10 a 30 milhões; 22,5% acima de R$ 30 milhões (Lei n.º 13.259/2016)
· <strong>Aposentadoria e pensão do INSS pagas a não residente</strong> — 25%
· <strong>Trabalho e serviços em geral</strong> — 25%

<strong>Lista de jurisdições de tributação favorecida:</strong> o <strong>Reino Unido não consta</strong> do art. 1.º da IN RFB 1.037/2010. Constam, porém, várias <strong>dependências da Coroa e territórios ultramarinos britânicos</strong>: Ilha de Man, Jersey, Guernsey, Ilhas Virgens Britânicas, Ilhas Cayman, Gibraltar, Bermudas, Anguilla, Montserrat, Turks e Caicos, Santa Helena, entre outros. Estruturação via essas jurisdições atrai retenção de <strong>25%</strong> e regras brasileiras mais rígidas de preços de transferência e subcapitalização.

<em>Questão em aberto de alto impacto:</em> não foi localizado ato da Receita Federal classificando o <strong>regime FIG britânico</strong> como <em>regime fiscal privilegiado</em> na forma do art. 2.º da IN RFB 1.037/2010 — dispositivo que alcança regimes que não tributam renda ou a tributam a alíquota máxima inferior a 17%, ou que concedem vantagem a não residentes sem exigência de atividade substantiva. Eventual classificação atrairia preços de transferência, subcapitalização e limitação de dedutibilidade. <strong>Ponto a monitorar.</strong>

<strong>Se o cliente permanece residente fiscal brasileiro</strong> (por exemplo, sob visto britânico temporário sem cruzar os limiares do SRT): tributação em bases universais, com carnê-leão mensal até 27,5% sobre rendimentos do exterior; ganho de capital em moeda estrangeira a 15%–22,5%; e, desde 1/jan/2024, a <strong>Lei n.º 14.754/2023</strong> (regulamentada pela IN RFB n.º 2.180/2024) aplica alíquota <strong>única de 15%</strong> sobre rendimentos de aplicações financeiras no exterior e sobre <strong>lucros de entidades controladas no exterior</strong>, estas apuradas em 31 de dezembro de cada ano, <strong>independentemente de distribuição</strong>. Trusts têm regras específicas — o instituidor é tributado enquanto mantiver controle ou poder de revogação. Acresce a <strong>DCBE</strong> ao Banco Central quando os ativos no exterior atingem os limiares regulamentares.`,
        sources: [
          {
            t: "GOV.UK · RDR3 — Statutory Residence Test",
            u: "https://gov.uk/government/publications/rdr3-statutory-residence-test-srt/guidance-note-for-statutory-residence-test-srt-rdr3",
          },
          {
            t: "House of Commons Library · Direct taxes — rates and allowances 2026/27",
            u: "https://commonslibrary.parliament.uk/research-briefings/cbp-10618/",
          },
          {
            t: "House of Commons Library · Budget 2025 — income tax sobre imóveis, poupança e dividendos",
            u: "https://commonslibrary.parliament.uk/research-briefings/cbp-10450/",
          },
          {
            t: "House of Commons Library · High Value Council Tax Surcharge",
            u: "https://commonslibrary.parliament.uk/research-briefings/cbp-10934/",
          },
          {
            t: "Burges Salmon · As regras britânicas de temporary non-residence",
            u: "https://www.burges-salmon.com/our-thinking/the-uks-temporary-non-residence-rules/",
          },
          {
            t: "Deloitte · UK Tax Rates 2026/27 (PDF)",
            u: "https://taxscape.deloitte.com/taxtables/deloitte-uk-tax-rates-2026-27.pdf",
          },
          {
            t: "Receita Federal · IN SRF n.º 208/2002",
            u: "https://www.normaslegais.com.br/legislacao/instrucao-normativa-srf-208-2002.htm",
          },
        ],
      },
    ],
    visa: [
      {
        name: "Fim do Tier 1 (Investor) — não há golden visa no Reino Unido",
        status: "ext",
        legalBasis:
          "Encerrado em <strong>17 de fevereiro de 2022, às 16h00</strong> (horário de Londres), com efeito imediato, pelo <em>Statement of Changes in the Immigration Rules</em>, <strong>HC 1043</strong>. Revisão de operação publicada em 12/jan/2023 (Written Statement HCWS492).",
        desc: `<strong>Não existe, no Reino Unido, qualquer rota de residência por investimento passivo.</strong>

O Tier 1 (Investor) exigia investimento de <strong>£2.000.000</strong> (com vias aceleradas de 3 e 2 anos a £5 milhões e £10 milhões) e foi encerrado <strong>com efeito imediato</strong> em 17 de fevereiro de 2022, para todas as novas solicitações, independentemente da nacionalidade.

<strong>Justificativa oficial do Home Office:</strong> a categoria «não entregou resultados para o povo britânico» e criou «oportunidades para elites corruptas acessarem o Reino Unido».

<strong>Situação residual:</strong> titulares existentes podem <strong>estender</strong> e requerer <strong>settlement</strong>; as solicitações de ILR permanecem abertas até <strong>17 de fevereiro de 2028</strong>. <em>Prazo final a confirmar.</em>

<strong>Conclusão factual para o consultor:</strong> ao aconselhar cliente brasileiro que busca residência no Reino Unido, <strong>não há caminho por aquisição de imóvel, títulos públicos ou aporte em fundo</strong>. As rotas disponíveis exigem empreendimento ativo com endosso (Innovator Founder), mérito individual reconhecido (Global Talent), patrocínio empregatício (Skilled Worker), expansão de empresa estrangeira (Expansion Worker) ou diploma de universidade listada (High Potential Individual).`,
        kv: [
          { l: "Encerramento", v: "17/fev/2022, 16h00" },
          { l: "Instrumento", v: "HC 1043" },
          { l: "Investimento anterior", v: "£2.000.000" },
          { l: "Vias aceleradas anteriores", v: "£5M (3 anos) · £10M (2 anos)" },
          { l: "Criação", v: "2008 (antecessor desde 1994)" },
          { l: "Titulares existentes", v: "Podem estender e obter ILR" },
          { l: "Prazo final para ILR", v: "17/fev/2028 (a confirmar)" },
          { l: "Substituto por investimento passivo", v: "Não existe" },
        ],
        brazilNote: `Para o brasileiro, a consequência é direta: <strong>não há como comprar residência no Reino Unido</strong>. Qualquer material que ofereça «golden visa britânico» está desatualizado em mais de quatro anos.

As vias reais exigem: (i) um negócio inovador com endosso de organismo aprovado; (ii) reconhecimento internacional ou nacional na área de atuação; (iii) oferta de emprego de empregador com <em>sponsor licence</em>; (iv) ser executivo sénior de empresa estrangeira que abre operação britânica; ou (v) diploma de universidade constante da <em>Global Universities List</em> — na qual <strong>universidades brasileiras não constam</strong>.

Titulares brasileiros do antigo Tier 1 (Investor) devem observar o prazo de fevereiro de 2028 para o pedido de ILR.`,
        sources: [
          {
            t: "Parlamento do Reino Unido · The Tier 1 (Investor) route — review of operation (HCWS492)",
            u: "https://questions-statements.parliament.uk/written-statements/detail/2023-01-12/hcws492",
          },
          {
            t: "Farrer & Co · Tier 1 (Investor) visa closes on 17 February 2022",
            u: "https://www.farrer.co.uk/news-and-insights/tier-1-investor-visa-closes-on-17-february-2022/",
          },
        ],
      },
      {
        name: "Innovator Founder visa",
        status: "ok",
        legalBasis:
          "Immigration Rules, <strong>Appendix Innovator Founder</strong>. Criada em <strong>13 de abril de 2023</strong>, substituindo as rotas <em>Innovator</em> e <em>Start-up</em>. A reforma de abril de 2023 <strong>eliminou o requisito de investimento mínimo de £50.000</strong> e autorizou emprego secundário (nível de qualificação RQF 3 ou superior).",
        desc: `Rota para fundador de negócio <strong>inovador, viável e escalável</strong>, com endosso obrigatório de organismo aprovado.

<strong>Não há valor mínimo de investimento</strong> desde a reforma de 13/abr/2023 — mas <strong>não é rota para investidor passivo</strong>: exige-se papel-chave e contínuo no dia a dia do negócio.

<strong>Permissão inicial de 3 anos</strong>, extensível por mais 3, indefinidamente, com novo endosso. <strong>ILR (settlement) após 3 anos</strong>, mediante novo endosso e comprovação de que o negócio atendeu pelo menos <strong>2 dos 7 critérios</strong> de settlement.

<strong>Contact points obrigatórios</strong> aos 12 e aos 24 meses, com o organismo endossante. O descumprimento permite ao endossante <strong>retirar o endosso</strong>, o que leva ao cancelamento da permissão pelo Home Office.`,
        kv: [
          { l: "Investimento mínimo", v: "Nenhum (desde abr/2023)" },
          { l: "Endosso", v: "Obrigatório, de organismo aprovado" },
          { l: "Validade do endosso", v: "3 meses" },
          { l: "Permissão inicial", v: "3 anos" },
          { l: "ILR", v: "Após 3 anos" },
          { l: "Inglês", v: "B2 (CEFR)" },
          { l: "Manutenção financeira", v: "£1.270 por 28 dias" },
          { l: "Contact points", v: "12 e 24 meses" },
          { l: "Emprego secundário", v: "Permitido (RQF 3+)" },
          { l: "Dependentes — trabalho", v: "Irrestrito" },
        ],
        requirements: [
          "<strong>Carta de endosso</strong> emitida por <em>endorsing body</em> aprovado, com no máximo <strong>3 meses</strong> de emissão.",
          "Plano de negócio que satisfaça <strong>cumulativamente</strong> os três critérios avaliados pelo endossante: <strong>inovação</strong> (ideia genuína e original, que atenda necessidade de mercado ou crie vantagem competitiva); <strong>viabilidade</strong> (plano realista e alcançável com os recursos do requerente — competências, conhecimento, experiência e domínio do mercado); e <strong>escalabilidade</strong> (evidência de potencial de criação de empregos e de crescimento em mercados nacionais e internacionais).",
          "<strong>Papel ativo:</strong> ser fundador ou cofundador com papel-chave e contínuo no dia a dia do negócio — <strong>não é rota para investidor passivo</strong>.",
          "<strong>Sem valor mínimo de investimento</strong>, desde 13/abr/2023.",
          "<strong>Inglês nível B2 (CEFR)</strong> — Appendix English Language.",
          "<strong>Manutenção financeira: £1.270</strong> mantidos por <strong>28 dias consecutivos</strong>, com o dia final no máximo 31 dias antes da solicitação. Dispensado se já estiver no Reino Unido há 12 meses ou mais.",
          "Idade de <strong>18 anos ou mais</strong>.",
          "Ausência de <em>adverse immigration history</em>.",
        ],
        process: [
          {
            step: "Elaboração do plano de negócio",
            detail:
              "Plano de negócio e <em>pitch deck</em>, dimensionados para os três critérios do endossante.",
            timing: "4–12 semanas",
          },
          {
            step: "Pedido de endosso",
            detail:
              "Submissão ao <em>endorsing body</em>, com taxa. <strong>Três organismos endossam novas solicitações:</strong> UK Endorsing Services (UKES), Innovator International e Envestors Limited.\n<em>Nota: a lista sofreu alterações recorrentes, inclusive na primavera de 2026. Confirmar a lista vigente em gov.uk antes de contratar.</em>",
            timing: "Análise documental",
          },
          {
            step: "Entrevista com o painel",
            detail:
              "Entrevista presencial ou por vídeo com o painel do organismo endossante.",
            timing: "—",
          },
          {
            step: "Emissão da endorsement letter",
            detail:
              "Carta de endosso com validade de <strong>3 meses</strong> para a solicitação do visto.",
            timing: "2–8 semanas (varia por endossante)",
          },
          {
            step: "Solicitação de visto",
            detail:
              "Pedido online ao UKVI, com pagamento da taxa e do Immigration Health Surcharge integral e antecipado.",
            timing: "Até 3 meses após o endosso",
          },
          {
            step: "Biometria",
            detail:
              "Recolha biométrica em <em>Visa Application Centre</em> — VFS Global, com postos em São Paulo, Rio de Janeiro, Brasília e outras cidades brasileiras.",
            timing: "Agendamento",
          },
          {
            step: "Decisão",
            detail:
              "<strong>3 semanas</strong> para pedidos de fora do Reino Unido; <strong>8 semanas</strong> para pedidos de dentro. Serviços opcionais: <em>Priority</em> (5 dias úteis) e <em>Super Priority</em> (próximo dia útil).",
            timing: "3–8 semanas",
          },
          {
            step: "Contact point aos 12 meses",
            detail:
              "Reunião obrigatória com o organismo endossante. O descumprimento permite a <strong>retirada do endosso</strong> e o cancelamento da permissão.",
            timing: "12 meses",
          },
          {
            step: "Contact point aos 24 meses",
            detail: "Segunda reunião obrigatória.",
            timing: "24 meses",
          },
          {
            step: "ILR aos 3 anos",
            detail:
              "Solicitação de <em>Indefinite Leave to Remain</em>, com novo endosso e comprovação de <strong>2 dos 7 critérios</strong> de settlement.",
            timing: "6 meses de decisão",
          },
        ],
        costs: [
          {
            item: "Endosso (ao endorsing body)",
            value: "£1.000 + IVA",
            note: "Varia por endossante; a confirmar",
          },
          {
            item: "Cada contact point meeting (2 obrigatórios)",
            value: "£500 + IVA cada",
            note: "A confirmar",
          },
          {
            item: "Visto — de fora do Reino Unido",
            value: "£1.357",
            note: "Valor anterior: £1.274; taxas reajustadas em 8/abr/2026 — a confirmar",
          },
          {
            item: "Visto — de dentro do Reino Unido (switch)",
            value: "£1.693",
            note: "Valor anterior: £1.590; a confirmar",
          },
          {
            item: "Immigration Health Surcharge — adulto",
            value: "£1.035 por ano de permissão",
            note: "Pago integralmente e antecipadamente; reembolso proporcional em caso de recusa",
          },
          {
            item: "Immigration Health Surcharge — menor de 18",
            value: "£776 por ano",
          },
          {
            item: "Indefinite Leave to Remain",
            value: "£3.226 por requerente",
            note: "Era £3.029; confirmado para 8/abr/2026",
          },
          {
            item: "Naturalisation (adulto)",
            value: "£1.709",
            note: "Era £1.605; confirmado para 8/abr/2026",
          },
        ],
        sections: [
          {
            title: "Os 7 critérios de settlement — bastam 2",
            body: `Para o ILR aos 3 anos, o negócio deve ter atendido <strong>pelo menos 2 dos 7 critérios</strong>:

1. Investimento de <strong>£50.000</strong> no negócio
2. <strong>Duplicação</strong> do número de clientes nos últimos 3 anos, acima da média do setor
3. Envolvimento significativo em <strong>P&amp;D</strong> e registo de <strong>propriedade intelectual</strong> no Reino Unido
4. <strong>Faturamento anual bruto de £1.000.000</strong>
5. Faturamento anual de <strong>£500.000</strong>, dos quais <strong>£100.000 de exportação</strong>
6. Criação de <strong>10 empregos em tempo integral</strong> para residentes
7. Criação de <strong>5 empregos em tempo integral</strong> com salário médio de <strong>£25.000/ano</strong>

<em>Nota de verificação: os valores dos critérios 4, 5 e 7 podem ter sido atualizados desde 2023.</em>`,
          },
          {
            title: "Regras de família",
            body: `<strong>Cônjuge ou parceiro</strong> (incluindo <em>unmarried partner</em> com 2 anos de relação) e <strong>filhos menores de 18 anos</strong> podem acompanhar.

<strong>Dependentes têm direito irrestrito de trabalhar</strong> — inclusive por conta própria — e de estudar.

<strong>Manutenção financeira adicional:</strong> £285 (parceiro) + £315 (1.º filho) + £200 (cada filho adicional), mantidos por 28 dias. <strong>Dispensado</strong> após 12 meses de residência do requerente principal.

Dependentes seguem o mesmo caminho ao ILR, com requisito próprio de <strong>Life in the UK Test</strong> e <strong>inglês B1</strong> para maiores de 18 anos.`,
          },
          {
            title: "Custo consolidado — família de 4 pessoas, ciclo até a cidadania",
            body: `Exemplo com taxas oficiais, para família brasileira (2 adultos e 2 filhos), Innovator Founder de 3 anos, solicitando do exterior:

· Endosso (principal): £1.000
· Visto — principal: £1.357
· Visto — cônjuge: £1.357
· Visto — 2 filhos: £2.714
· IHS — 2 adultos × 3 anos: £6.210
· IHS — 2 menores × 3 anos: £4.656
· 2 <em>contact points</em>: £1.000
<strong>Subtotal antes do ILR: ≈£18.294</strong>

· ILR (4 pessoas, aos 3 anos): £12.904
· Naturalização (4 pessoas, no ano seguinte): £5.127 (2 × £1.709 de adulto + 2 × £1.000 de registo de criança)
<strong>Total do ciclo até a cidadania, apenas taxas oficiais: ≈£36.325</strong>

<em>Não inclui honorários advocatícios, tradução, apostilamento, testes de inglês, Life in the UK, passaportes, nem os custos de constituição e operação do negócio.</em>`,
          },
        ],
        brazilNote: `Brasileiros são <em>non-visa nationals</em> para visitas de até 6 meses, mas desde 2025 é obrigatória a <strong>ETA — Electronic Travel Authorisation</strong> antes do embarque: taxa de <strong>£16</strong> (elevada de £10 em 9/abr/2025), validade de <strong>2 anos</strong> ou até o vencimento do passaporte, múltiplas entradas, emissão em geral até 3 dias úteis. <em>Confirmar a data exata de início da obrigatoriedade para brasileiros e o valor vigente.</em>

Documentos brasileiros exigem <strong>apostila da Haia</strong> e tradução juramentada. A biometria é feita nos postos da VFS Global no Brasil.

<strong>Não há acordo de previdência social entre Brasil e Reino Unido</strong> — ver a nota do dossiê de cidadania. Isso significa ausência de totalização e risco de dupla contribuição.

<strong>Planejamento fiscal integrado:</strong> quem entra pelo Innovator Founder e satisfaz o teste de 10 anos de não residência prévia pode combinar a rota com o <strong>regime FIG</strong>, obtendo 4 anos de isenção sobre rendimentos e ganhos brasileiros, com remessa livre ao Reino Unido. O ILR chega ao 3.º ano — antes, portanto, do fim da janela do FIG.`,
        sources: [
          {
            t: "DavidsonMorris · Innovator Founder Visa — guia 2026",
            u: "https://www.davidsonmorris.com/innovator-founder-visa/",
          },
          {
            t: "Richmond Chambers · UK Innovator Founder Visa — guia 2026",
            u: "https://immigrationbarrister.co.uk/business-immigration/business-visas/uk-innovator-founder-visa/",
          },
          {
            t: "Garth Coates · Innovator Founder — mudanças na lista de endorsing bodies (primavera de 2026)",
            u: "https://garthcoates.com/innovator-founder-visa/innovator-founder-visa-update-changes-explained/",
          },
          {
            t: "Thorntons Solicitors · Aumentos das taxas de imigração a partir de 8/abr/2026",
            u: "https://www.thorntons-law.co.uk/knowledge/home-office-immigration-fee-increases-from-8-april-2026-key-changes-for-applicants-and-sponsors",
          },
        ],
      },
      {
        name: "Global Talent visa",
        status: "ok",
        legalBasis:
          "Immigration Rules, <strong>Appendix Global Talent</strong> e <strong>Appendix Global Talent: Prestigious Prizes</strong>. Substituiu o Tier 1 (Exceptional Talent) em <strong>20 de fevereiro de 2020</strong>.",
        desc: `Rota em <strong>duas etapas</strong>: (1) <strong>endosso</strong> por organismo aprovado — dispensada para vencedores de prémio da lista <em>Prestigious Prizes</em>; e (2) <strong>solicitação de visto</strong> ao UKVI.

<strong>Características operacionais que a distinguem:</strong>
· <strong>sem patrocinador</strong> e <strong>sem oferta de emprego</strong>
· <strong>sem requisito salarial</strong> e <strong>sem requisito de qualificação</strong>
· <strong>sem requisito de inglês na etapa do visto</strong> — exigido apenas no ILR
· <strong>sem exigência de manutenção financeira</strong>
· <strong>liberdade total de emprego</strong>: pode ser empregado, autónomo, empresário, ou alternar entre eles
· duração escolhida pelo requerente: <strong>1 a 5 anos</strong>, pagando o IHS proporcional

<strong>Duas categorias de endosso:</strong>
· <strong>Exceptional Talent</strong> — <strong>líder reconhecido</strong> em seu campo; evidência de reconhecimento internacional consolidado, prémios, cargos de liderança, cobertura de mídia de grande alcance. <strong>ILR em 3 anos, em todos os campos.</strong>
· <strong>Exceptional Promise</strong> — <strong>líder potencial</strong>, em ascensão; trajetória inicial com reconhecimento nacional, cartas de recomendação, contribuições recentes relevantes. Geralmente aplicável a quem está há menos de 5 anos no campo. <strong>ILR em 3 anos</strong> em ciências, engenharia, humanidades e medicina; <strong>5 anos</strong> em artes, cultura e tecnologia digital.`,
        kv: [
          { l: "Patrocinador", v: "Nenhum" },
          { l: "Oferta de emprego", v: "Não exigida" },
          { l: "Requisito salarial", v: "Nenhum" },
          { l: "Inglês na etapa do visto", v: "Não exigido" },
          { l: "Manutenção financeira", v: "Não exigida" },
          { l: "Duração", v: "1 a 5 anos, à escolha" },
          { l: "ILR — Exceptional Talent", v: "3 anos" },
          { l: "ILR — Exceptional Promise", v: "3 ou 5 anos, por campo" },
          { l: "Emprego", v: "Liberdade total" },
          { l: "Taxa de endosso", v: "£561 (a confirmar)" },
        ],
        requirements: [
          "Obter <strong>endosso</strong> de organismo aprovado — ou ser vencedor de prémio da lista <em>Prestigious Prizes</em>, caso em que a etapa é dispensada.",
          "Satisfazer o <strong>critério obrigatório</strong> (<em>mandatory criterion</em>): comprovação de reconhecimento como <strong>líder</strong> (Exceptional Talent) ou como <strong>líder potencial</strong> (Exceptional Promise).",
          "Satisfazer <strong>2 de 4 critérios opcionais</strong> — no modelo da via de tecnologia digital: (i) inovação como fundador ou empregado sénior de produto digital; (ii) contribuição reconhecida além do trabalho ordinário — palestras, mentoria, projetos <em>open source</em>; (iii) contribuições académicas ou técnicas significativas; (iv) histórico comercial excecional — receita, captação, crescimento.",
          "Apresentar <strong>cartas de recomendação</strong> de organização ou pessoa reconhecida no setor no Reino Unido (2 ou 3, conforme a via), <strong>declaração pessoal</strong> e <strong>CV</strong>.",
          "Inglês exigido apenas no <strong>ILR</strong>, não na etapa do visto.",
        ],
        process: [
          {
            step: "Montagem do dossiê de evidências",
            detail:
              "Cartas de recomendação independentes, métricas de citação, evidências dos critérios, declaração pessoal e CV.",
            timing: "4–12 semanas",
          },
          {
            step: "Solicitação de endosso (Etapa 1)",
            detail:
              "Desde <strong>agosto de 2025</strong>, as solicitações de endosso passaram a usar o <strong>formulário padrão do Home Office no GOV.UK</strong>, em vez de plataforma própria do endossante.",
            timing: "Submissão online",
          },
          {
            step: "Avaliação e decisão de endosso",
            detail:
              "Aproximadamente <strong>8 semanas</strong> na via da Tech Nation; a UKRI e as academias têm prazos próprios.\n<strong>Recurso:</strong> não há <em>appeal</em> formal contra recusa de endosso, mas há <strong>pedido de revisão (<em>endorsement review</em>)</strong> dentro de prazo determinado, quando se alega erro na aplicação dos critérios.",
            timing: "≈8 semanas",
          },
          {
            step: "Solicitação de visto (Etapa 2)",
            detail:
              "Pedido ao UKVI, válido por até <strong>3 meses</strong> após o endosso.",
            timing: "—",
          },
          {
            step: "Biometria",
            detail: "Recolha biométrica nos postos da VFS Global no Brasil.",
            timing: "Agendamento",
          },
          {
            step: "Decisão",
            detail:
              "<strong>3 semanas</strong> para pedidos de fora do Reino Unido; <strong>8 semanas</strong> para pedidos de dentro.",
            timing: "3–8 semanas",
          },
        ],
        costs: [
          {
            item: "Taxa de endosso (Etapa 1)",
            value: "£561",
            note: "Pode ter sido reajustada em 8/abr/2026 — confirmar",
          },
          {
            item: "Taxa de visto (Etapa 2) — até 1 ano",
            value: "£192",
            note: "A confirmar",
          },
          {
            item: "Taxa de visto (Etapa 2) — 1 a 5 anos",
            value: "£623",
            note: "A confirmar",
          },
          {
            item: "Immigration Health Surcharge",
            value: "£1.035/ano (adulto)",
            note: "£776/ano para menores de 18",
          },
        ],
        sections: [
          {
            title: "Os organismos endossantes em 2026",
            body: `· <strong>Tecnologia digital</strong> — <strong>Tech Nation</strong>
· <strong>Artes e cultura</strong> — <strong>Arts Council England</strong>, com sub-endossantes: <strong>Pact</strong> (cinema e TV), <strong>RIBA</strong> (arquitetura), <strong>British Fashion Council</strong> (moda)
· <strong>Ciências naturais e pesquisa médica</strong> — <strong>The Royal Society</strong>
· <strong>Humanidades e ciências sociais</strong> — <strong>The British Academy</strong>
· <strong>Engenharia</strong> — <strong>The Royal Academy of Engineering</strong>
· <strong>Pesquisa e inovação</strong> (rota <em>endorsed funder</em> ou <em>peer review</em>) — <strong>UK Research and Innovation (UKRI)</strong>`,
          },
          {
            title: "O histórico do endossante de tecnologia — o que o consultor precisa saber",
            body: `A via de tecnologia digital passou por instabilidade institucional relevante:

· <strong>31/jan/2023</strong> — a Tech Nation original anunciou que <strong>cessaria operações</strong> ao fim de março de 2023, por perda do financiamento público, gerando incerteza sobre a rota digital;
· <strong>25/abr/2023</strong> — o <strong>Founders Forum Group</strong> adquiriu formalmente a marca e as operações da Tech Nation;
· <strong>outubro de 2023</strong> — relançamento sob o Founders Forum, com confirmação de continuidade como endossante;
· <strong>27/mai/2025</strong> — a Tech Nation anunciou <strong>novo contrato com o Home Office</strong>, mantendo-a como endossante da via de tecnologia digital <strong>pelos 3 anos seguintes</strong>;
· <strong>agosto de 2025</strong> — simplificação do processo: as solicitações de endosso da Etapa 1 passaram a usar o formulário padrão do Home Office no GOV.UK;
· <strong>2026</strong> — ampliação dos critérios para incluir computação quântica, blockchain e cibersegurança avançada. <em>A confirmar diretamente com a Tech Nation.</em>

<em>Nota:</em> uma das fontes menciona que o contrato do organismo endossante de tecnologia digital foi <strong>a licitação</strong>. Dado o histórico de instabilidade dessa via específica, <strong>confirme o endossante vigente antes de qualquer orientação</strong>.`,
          },
        ],
        brazilNote: `A Global Talent é, entre as rotas britânicas, a que menos depende de intermediários: <strong>sem patrocinador, sem oferta de emprego, sem requisito salarial e sem manutenção financeira</strong>. O que exige é <strong>dossiê probatório</strong> — e é aí que o brasileiro precisa investir.

<strong>Combinação com o regime FIG:</strong> quem entra pela Global Talent e satisfaz o teste de 10 anos de não residência prévia pode reivindicar o FIG nos 4 primeiros anos fiscais, mantendo rendimentos e ganhos brasileiros fora da base britânica, com remessa livre. O ILR pode chegar ao 3.º ano na via Exceptional Talent.

<strong>Documentação:</strong> cartas de recomendação de organizações brasileiras devem ser acompanhadas de evidência da reputação da organização no setor; publicações, patentes e prémios brasileiros devem ser contextualizados quanto ao seu alcance.

Documentos exigem <strong>apostila da Haia</strong> e tradução juramentada.`,
        sources: [
          {
            t: "Connaught Law · Global Talent Visa Endorsement 2026 — organismos e processo",
            u: "https://connaughtlaw.com/uk-visa-endorsement-requirements-legal-guide/",
          },
          {
            t: "DavidsonMorris · Global Talent Visa UK 2026",
            u: "https://www.davidsonmorris.com/global-talent-visa/",
          },
          {
            t: "Kingsley Napley · Anúncio da Tech Nation confirma que a rota permanece aberta",
            u: "https://www.kingsleynapley.co.uk/insights/blogs/immigration-law-blog/better-late-than-closed-tech-nation-announcement-confirms-the-visa-route-will-stay-open",
          },
          {
            t: "GOV.UK · Global Talent visa — Tech Nation",
            u: "https://www.gov.uk/guidance/global-talent-visa-tech-nation-ceasing-operations",
          },
        ],
      },
      {
        name: "Skilled Worker visa e o «earned settlement»",
        status: "changed",
        legalBasis:
          "Immigration Rules, <strong>Appendix Skilled Worker</strong>, <strong>Appendix Skilled Occupations</strong>, <strong>Appendix English Language</strong> e <strong>Appendix Finance</strong>. Substituiu o Tier 2 (General) em 1/dez/2020. Reforma estrutural pelo <strong>Statement of Changes HC 997</strong>, publicado em 1/jul/2025, com efeitos a partir de <strong>22 de julho de 2025</strong>.",
        desc: `Rota de trabalho patrocinado, submetida a <strong>três reformas estruturais</strong> entre 2024 e 2026.

<strong>Linha do tempo:</strong>
· <strong>4/abr/2024</strong> — limiar salarial geral saltou de £26.200 para £38.700; extinção do desconto de 20% da <em>Shortage Occupation List</em>, substituída pela <em>Immigration Salary List</em>
· <strong>11/mar/2024</strong> — <em>care workers</em> e <em>senior care workers</em> proibidos de trazer dependentes
· <strong>22/jul/2025</strong> — <strong>limiar de qualificação elevado a RQF 6</strong> (nível de graduação); <strong>limiar salarial geral elevado a £41.700</strong>; <strong>fechamento da rota de <em>care worker</em></strong> a novas solicitações do exterior; criação da <strong>Temporary Shortage List (TSL)</strong>. Aproximadamente <strong>180 códigos de ocupação (SOC)</strong> foram retirados da lista elegível
· <strong>8/jan/2026</strong> — <strong>requisito de inglês elevado de B1 para B2 (CEFR)</strong> para novos requerentes
· <strong>8/abr/2026</strong> — verificação de conformidade salarial passa a ser feita <strong>por período de pagamento</strong> (<em>pay-period level</em>), não apenas sobre o valor anualizado`,
        kv: [
          { l: "Limiar salarial geral", v: "£41.700 ou 100% da going rate" },
          { l: "Novo entrante", v: "£33.400 ou 70% da going rate" },
          { l: "Nível de qualificação", v: "RQF 6 (graduação)" },
          { l: "Inglês", v: "B2 desde 8/jan/2026" },
          { l: "Manutenção financeira", v: "£1.270 por 28 dias" },
          { l: "Permissão", v: "Até 5 anos, renovável" },
          { l: "ILR — regra vigente", v: "5 anos" },
          { l: "Sponsor licence — pequeno", v: "£611" },
          { l: "Sponsor licence — médio/grande", v: "£1.682" },
          { l: "Immigration Skills Charge — grande", v: "£1.320/ano" },
          { l: "Temporary Shortage List", v: "RQF 3–5 até 31/dez/2026" },
          { l: "TSL — dependentes", v: "Vedados" },
        ],
        requirements: [
          "<strong>Certificate of Sponsorship (CoS)</strong> válido, emitido por empregador com <em>sponsor licence</em> de categoria <em>Worker</em>.",
          "Ocupação constante do <strong>Appendix Skilled Occupations</strong>, com nível de qualificação <strong>RQF 6</strong> — ou RQF 3–5, se constar da Temporary Shortage List.",
          "Salário igual ou superior ao maior entre o <strong>limiar geral</strong> aplicável e a <strong>going rate</strong> da ocupação.",
          "<strong>Inglês nível B2 (CEFR)</strong> — desde 8/jan/2026; antes era B1.",
          "<strong>Manutenção financeira de £1.270</strong> por 28 dias consecutivos — dispensada se o patrocinador certificar a manutenção no CoS, ou se o requerente já for residente há 12 meses ou mais.",
          "<strong>Criminal record certificate</strong> para determinadas ocupações — saúde, educação e assistência social.",
        ],
        sections: [
          {
            title: "Limiares salariais e as opções de desconto",
            body: `· <strong>Opção A — padrão:</strong> <strong>£41.700/ano</strong> ou <strong>100% da <em>going rate</em></strong> da ocupação, <strong>o que for maior</strong>
· <strong>Novo entrante</strong> (<em>new entrant</em>): <strong>£33.400/ano</strong> ou <strong>70% da going rate</strong>, o que for maior — aplicável a quem tem menos de 26 anos, é recém-graduado, faz transição de Student ou Graduate visa, ou está em formação para profissão regulamentada. <strong>Máximo de 4 anos</strong> nessa condição
· <strong>Titulares de doutorado</strong> (STEM e não-STEM): descontos específicos sobre a going rate <em>— percentuais de 2026 a confirmar</em>
· <strong>Immigration Salary List:</strong> desconto sobre o limiar geral <em>— a confirmar se ainda vigente após jul/2025</em>
· <strong>Ocupações de saúde e educação</strong> com <em>national pay scales</em>: limiar próprio
· <strong>Temporary Shortage List (TSL):</strong> ocupações de nível RQF 3–5 mantidas elegíveis <strong>até pelo menos 31 de dezembro de 2026</strong>, com <strong>dependentes vedados</strong>

<em>Nota de verificação: confirmar se houve reajuste dos valores de £41.700 e £33.400 em abril de 2026.</em>`,
          },
          {
            title: "Custos do patrocinador — quem paga o quê",
            body: `· <strong>Sponsor licence</strong> — pequeno patrocinador ou instituição beneficente: <strong>£611</strong> (era £574), desde 8/abr/2026
· <strong>Sponsor licence</strong> — médio ou grande patrocinador: <strong>£1.682</strong> (era £1.579), desde 8/abr/2026
· <strong>Certificate of Sponsorship (CoS)</strong>: £525 <em>— valor pós-abril/2026 a confirmar</em>
· <strong>Immigration Skills Charge</strong> — grande patrocinador: <strong>£1.320 por ano</strong> de patrocínio (elevada cerca de 32% em dezembro de 2025, de £1.000) <em>— a confirmar</em>
· <strong>Immigration Skills Charge</strong> — pequeno patrocinador ou beneficente: <strong>£480 por ano</strong> (elevada de £364) <em>— a confirmar</em>

<strong>A Immigration Skills Charge não pode ser repassada ao trabalhador</strong> — é despesa obrigatória do empregador.

<strong>Taxas de visto do requerente:</strong> de fora do Reino Unido, <strong>£943</strong> até 3 anos e <strong>£1.865</strong> acima de 3 anos (confirmadas para 8/abr/2026); de dentro do Reino Unido, aproximadamente £1.000 a £1.900 <em>— a confirmar</em>.`,
          },
          {
            title: "Earned settlement — o status legal real da proposta de 10 anos",
            body: `<strong>Esta é a questão de maior sensibilidade prática hoje, e a mais mal comunicada.</strong>

· <strong>12/mai/2025</strong> — <em>Immigration White Paper «Restoring Control over the Immigration System»</em> propõe elevar o período-padrão de qualificação ao settlement de <strong>5 para 10 anos</strong>, com o conceito de <strong>earned settlement</strong> — possibilidade de antecipação por «contribuição»
· <strong>20/nov/2025 a 12/fev/2026</strong> — consulta pública <em>«A Fairer Pathway to Settlement»</em>, detalhando o modelo: settlement condicionado a rendimentos sustentados, histórico de conformidade (impostos, benefícios, antecedentes criminais), nível de inglês e responsabilidade financeira. Aproximadamente <strong>130.000 respostas</strong> em análise pelo Home Office
· <strong>março de 2026</strong> — declaração da <em>Home Secretary</em> manifestando intenção de aplicar o novo modelo também a <strong>pessoas já no Reino Unido</strong> que ainda não obtiveram ILR
· <strong>2026</strong> — relatório do <em>Home Affairs Committee</em>: «Earned Settlement: Examining the Government's proposed reforms»

<strong>STATUS EM MEADOS DE 2026: nenhuma Immigration Rule foi apresentada ao Parlamento.</strong> A <strong>rota de 5 anos permanece integralmente em vigor</strong> para todas as categorias em que já se aplicava. Implementação almejada para o <strong>outono de 2026</strong>, <strong>sem data vinculante</strong>.

<strong>Leitura factual:</strong> o que existe hoje é <strong>proposta em consulta encerrada</strong>, não direito positivo. Contudo, a declaração ministerial de março de 2026 sinaliza <strong>aplicação a estoque</strong> — pessoas já residentes sem ILR —, o que representa risco material a considerar no planejamento, sem que se possa afirmar o resultado.

<strong>Requisito de inglês para ILR:</strong> elevação de <strong>B1 para B2</strong> anunciada para <strong>26 de março de 2027</strong>; solicitações protocoladas antes dessa data seguem avaliadas pelo padrão B1.`,
          },
          {
            title: "Regras de família",
            body: `Cônjuge ou parceiro e filhos menores; <strong>direito irrestrito de trabalho e estudo</strong>.

<strong>Vedação de dependentes</strong> para ocupações da <strong>Temporary Shortage List</strong> e da rota de <em>care worker</em>.

Manutenção adicional de £285 (parceiro) + £315 (1.º filho) + £200 (cada filho adicional) — dispensada com certificação do patrocinador.`,
          },
        ],
        brazilNote: `Para o brasileiro, o Skilled Worker é a rota que <strong>mais depende de terceiro</strong>: exige empregador britânico disposto a manter <em>sponsor licence</em> e a arcar com a Immigration Skills Charge, que não pode ser repassada.

O aumento do NIC patronal para <strong>15% com limiar de £5.000</strong> em abril de 2025 elevou o custo total de contratar sob patrocínio, o que na prática reduz a disposição de empregadores menores.

<strong>Risco a monitorar:</strong> o <em>earned settlement</em> de 10 anos, se implementado com aplicação a estoque, dobraria o horizonte até o ILR para quem já está no Reino Unido sem settlement. É proposta, não lei — mas quem planeja a rota deve considerar o cenário.

<strong>Combinação com o FIG:</strong> disponível nos 4 primeiros anos fiscais, para quem satisfaz o teste de 10 anos de não residência prévia. Sob a regra vigente de 5 anos até o ILR, o FIG cobre os 4 primeiros e o 5.º ano já é de tributação mundial.`,
        sources: [
          {
            t: "A Y & J Solicitors · Skilled Worker Visa — limiar salarial 2026",
            u: "https://ayjsolicitors.com/skilled-worker-visa-salary-threshold-uk-2026-new-rules/",
          },
          {
            t: "Osborne Clarke · UK Immigration White Paper tracker",
            u: "https://www.osborneclarke.com/uk-immigration-white-paper-tracker",
          },
          {
            t: "Home Affairs Committee · Earned Settlement — exame das reformas propostas",
            u: "https://publications.parliament.uk/pa/cm5901/cmselect/cmhaff/1409/report.html",
          },
          {
            t: "DavidsonMorris · Earned Settlement UK — guia da reforma do ILR",
            u: "https://www.davidsonmorris.com/earned-settlement/",
          },
          {
            t: "Fragomen · Reino Unido — aumentos de taxas em abril de 2026",
            u: "https://www.fragomen.com/insights/united-kingdom-fee-increases-in-april-2026.html",
          },
        ],
      },
      {
        name: "Outras rotas: Expansion Worker, HPI e Youth Mobility",
        status: "ok",
        legalBasis:
          "Immigration Rules: <strong>Appendix Global Business Mobility – UK Expansion Worker</strong> (criada em 11/abr/2022, substituindo a <em>Sole Representative of an Overseas Business</em>); <strong>Appendix High Potential Individual</strong> (criada em 30/mai/2022); <strong>Appendix Youth Mobility Scheme</strong>.",
        desc: `Três rotas complementares, com perfis e limitações muito distintos — e duas delas com restrições relevantes para brasileiros.`,
        kv: [
          { l: "Expansion Worker — duração máxima", v: "2 anos" },
          { l: "Expansion Worker — settlement", v: "Não conduz ao ILR" },
          { l: "Expansion Worker — salário", v: "£52.500 ou a going rate" },
          { l: "Expansion Worker — dispensa de 12 meses", v: "Salário ≥ £73.900" },
          { l: "HPI — duração", v: "2 anos (3 com doutorado)" },
          { l: "HPI — patrocínio", v: "Nenhum" },
          { l: "HPI — settlement", v: "Não conduz ao ILR" },
          { l: "HPI — universidades brasileiras", v: "Não constam da lista" },
          { l: "Youth Mobility — Brasil", v: "Não participa" },
          { l: "Youth Mobility — Uruguai", v: "Único sul-americano na lista" },
        ],
        sections: [
          {
            title: "UK Expansion Worker (Global Business Mobility)",
            body: `<strong>Finalidade:</strong> permitir que um gerente sénior ou funcionário especializado de empresa estrangeira <strong>sem operação ativa no Reino Unido</strong> venha estabelecer a presença britânica.

<strong>Requisitos:</strong>
· a empresa estrangeira <strong>ainda não iniciou operações comerciais</strong> no Reino Unido — pode ter entidade registada, mas sem <em>trading</em>;
· obtenção prévia de <strong>provisional sponsor licence</strong> de categoria <em>UK Expansion Worker</em> pela empresa estrangeira, com <em>UK footprint</em> (endereço, entidade registada ou imóvel);
· o requerente é <strong>gerente sénior</strong> ou <strong>funcionário especializado</strong>;
· <strong>12 meses de trabalho prévio</strong> para o empregador no exterior — <strong>dispensado se o salário for £73.900/ano ou mais</strong>, ou se for nacional japonês em empresa japonesa (acordo Reino Unido–Japão);
· salário de <strong>£52.500/ano</strong> ou a <em>going rate</em> da ocupação, o que for maior <em>— limiar a confirmar após jul/2025</em>;
· ocupação de nível <strong>RQF 6</strong> <em>— a confirmar se o aumento de julho de 2025 alcançou a rota GBM</em>;
· manutenção financeira de £1.270, dispensável com certificação do patrocinador;
· <strong>sem requisito de inglês</strong>.

<strong>Limitações estruturais:</strong>
· duração de 12 meses ou o período do CoS mais 14 dias, o que for menor; extensível por mais 12 meses;
· <strong>máximo absoluto de 2 anos</strong> no Reino Unido nesta rota, em qualquer período de 5 anos;
· <strong>não conduz ao settlement</strong> — é rota expressamente temporária;
· máximo de 5 trabalhadores por patrocinador provisório <em>— a confirmar</em>;
· <strong>caminho de saída:</strong> uma vez que o negócio esteja operando, converte-se a licença provisória em <em>sponsor licence</em> plena e o trabalhador <strong>muda para Skilled Worker</strong>, que conduz ao ILR — ou para <em>Senior or Specialist Worker</em>, que também não conduz;
· dependentes permitidos, com direito de trabalho.

<strong>Taxa de visto:</strong> aproximadamente £319–£637 <em>— a confirmar</em>.`,
          },
          {
            title: "High Potential Individual (HPI)",
            body: `<strong>Requisitos:</strong>
· diploma equivalente a <strong>bacharelado, mestrado ou doutorado britânico</strong>, concedido por instituição constante da <strong>Global Universities List</strong>;
· diploma obtido nos <strong>últimos 5 anos</strong> anteriores à solicitação;
· a universidade deve constar da lista <strong>do ano em que o diploma foi concedido</strong>;
· validação de qualificação pelo <strong>Ecctis</strong> (UK ENIC);
· <strong>inglês nível B1</strong>;
· <strong>manutenção financeira de £1.270</strong> por 28 dias;
· <strong>não ter tido anteriormente permissão HPI ou Graduate visa</strong>.

<strong>Características:</strong>
· duração de <strong>2 anos</strong>; <strong>3 anos</strong> para doutorado;
· <strong>sem patrocínio</strong>;
· emprego livre — qualquer emprego, autónomo, empresário; troca de empregador sem restrição;
· <strong>não extensível</strong>;
· <strong>não conduz ao ILR</strong> — é necessário mudar para outra rota (Skilled Worker, Global Talent, Innovator Founder);
· dependentes permitidos.

<strong>A lista de universidades</strong> é publicada anualmente pelo UKVI, em novembro. Critério: figurar entre as <strong>top 50 mundiais</strong> em ao menos 2 dos 3 rankings (QS, Times Higher Education, Academic Ranking of World Universities).

<strong>Ponto crítico para brasileiros: universidades brasileiras não constam da Global Universities List.</strong> A rota é acessível apenas a brasileiros graduados em instituições estrangeiras listadas — Estados Unidos, Canadá, Austrália, China, Singapura, Japão e países europeus. <em>Verificar a lista de novembro de 2025/2026.</em>

<strong>Taxa:</strong> aproximadamente £822 <em>— a confirmar</em>.`,
          },
          {
            title: "Youth Mobility Scheme — o Brasil não participa",
            body: `<strong>Cidadãos brasileiros não são elegíveis</strong> ao Youth Mobility Scheme.

<strong>Países e territórios elegíveis:</strong>
· <strong>18 a 35 anos:</strong> Austrália, Canadá, Nova Zelândia, República da Coreia
· <strong>18 a 30 anos:</strong> Andorra, Islândia, Japão, Mónaco, San Marino, <strong>Uruguai</strong>
· <strong>via sorteio (<em>ballot</em>) obrigatório:</strong> Hong Kong (passaporte SAR), Taiwan
· também elegíveis: <em>British Overseas Citizens</em>, <em>British Overseas Territories Citizens</em>, <em>British Nationals (Overseas)</em>

<strong>O Uruguai é o único país sul-americano na lista.</strong> Não há, até este levantamento, acordo Reino Unido–Brasil de mobilidade jovem. <em>Verificar se há negociação em curso.</em>

<strong>Características gerais</strong> (para referência comparativa): duração de 2 anos — 3 anos para Austrália, Canadá, Nova Zelândia e Coreia do Sul; sem patrocinador; sem oferta de emprego; sem limiar salarial; exige fundos de <strong>£2.530</strong>; <strong>não conduz ao settlement</strong>; <strong>não permite dependentes</strong>. Taxa de aproximadamente £319.`,
          },
        ],
        brazilNote: `Das três rotas, apenas o <strong>UK Expansion Worker</strong> é plenamente acessível ao brasileiro — e é temporária, com máximo de 2 anos e sem caminho ao settlement, servindo apenas como ponte para a conversão em Skilled Worker.

O <strong>HPI</strong> depende de diploma de universidade da <em>Global Universities List</em>, na qual <strong>nenhuma universidade brasileira consta</strong>. É acessível apenas a brasileiros que se graduaram no exterior, em instituição listada, nos últimos 5 anos.

O <strong>Youth Mobility Scheme</strong> está <strong>fechado a brasileiros</strong> — o Uruguai é o único país sul-americano contemplado.

Para o brasileiro que dirige empresa com operação no Brasil e pretende abrir subsidiária britânica, o Expansion Worker é a via de entrada — mas o planejamento deve prever, desde o início, a conversão para Skilled Worker antes de esgotar os 2 anos, sob pena de perder a continuidade da residência para efeito de ILR.`,
        sources: [
          {
            t: "GOV.UK · UK Expansion Worker visa (Global Business Mobility)",
            u: "https://www.gov.uk/uk-expansion-worker-visa",
          },
          {
            t: "DavidsonMorris · UK Expansion Worker Visa — guia completo 2026",
            u: "https://www.davidsonmorris.com/uk-expansion-worker-visa/",
          },
          {
            t: "DavidsonMorris · High Potential Individual Visa UK — guia 2026",
            u: "https://www.davidsonmorris.com/high-potential-individual-visa/",
          },
          {
            t: "Rowan · Youth Mobility Scheme — lista completa de países elegíveis 2026",
            u: "https://withrowan.co.uk/guides/youth-mobility-eligible-countries",
          },
        ],
      },
      {
        name: "ILR, naturalização e a ausência de tratado com o Brasil",
        status: "risk",
        legalBasis:
          "<strong>ILR:</strong> Immigration Rules, Appendix Settlement, Appendix Continuous Residence e Appendix KoL UK. <strong>Naturalização:</strong> British Nationality Act 1981, seção 6(1) e Schedule 1 (via geral); seção 6(2) (cônjuge de britânico). <strong>Tratado:</strong> Convenção Brasil–Reino Unido assinada em 29/nov/2022, <strong>ainda não em vigor</strong>.",
        desc: `<strong>Etapa 1 — Indefinite Leave to Remain (ILR).</strong> Período de qualificação de <strong>5 anos</strong> (Skilled Worker; Global Talent <em>exceptional promise</em> em artes e tecnologia) ou <strong>3 anos</strong> (Innovator Founder; Global Talent <em>exceptional talent</em>).

<strong>Residência contínua:</strong> não exceder <strong>180 dias de ausência do Reino Unido em qualquer período móvel de 12 meses</strong> ao longo de todo o período de qualificação.

<strong>Etapa 2 — Naturalização.</strong> Via geral: ter ILR há pelo menos <strong>12 meses</strong>, mais <strong>5 anos de residência legal</strong>, com máximo de <strong>450 dias</strong> de ausência nos 5 anos e <strong>90 dias</strong> nos últimos 12 meses. Via cônjuge de cidadão britânico: <strong>3 anos</strong> de residência legal, máximo de <strong>270 dias</strong> de ausência, <strong>sem necessidade de aguardar os 12 meses após o ILR</strong>.

<strong>Perda do ILR:</strong> ausência do Reino Unido por <strong>2 anos consecutivos</strong> faz o ILR caducar. Existe a <em>Returning Resident visa</em> para quem esteve fora por mais de 2 anos, com critérios discricionários. <strong>A cidadania britânica, por não caducar, é a proteção definitiva contra esse risco.</strong>`,
        kv: [
          { l: "ILR — período padrão", v: "5 anos" },
          { l: "ILR — Innovator e Global Talent", v: "3 anos" },
          { l: "Ausência máxima para ILR", v: "180 dias em 12 meses móveis" },
          { l: "Naturalização — via geral", v: "5 anos + 12 meses de ILR" },
          { l: "Naturalização — cônjuge", v: "3 anos, sem esperar 12 meses" },
          { l: "Ausência máxima — 5 anos", v: "450 dias" },
          { l: "Ausência máxima — últimos 12 meses", v: "90 dias" },
          { l: "Inglês", v: "B1 (B2 previsto para 26/mar/2027)" },
          { l: "Perda do ILR", v: "2 anos de ausência" },
          { l: "Dupla cidadania", v: "Permitida pelos dois países" },
          { l: "CDT Brasil–Reino Unido", v: "Assinada, NÃO em vigor" },
        ],
        requirements: [
          "<strong>ILR:</strong> período de qualificação cumprido na rota aplicável — atualmente 5 anos (Skilled Worker) ou 3 anos (Innovator Founder, Global Talent <em>exceptional talent</em>).",
          "<strong>ILR:</strong> residência contínua — não exceder <strong>180 dias de ausência em qualquer período móvel de 12 meses</strong>.",
          "<strong>ILR:</strong> aprovação no <strong>Life in the UK Test</strong>.",
          "<strong>ILR:</strong> inglês <strong>CEFR B1</strong> (falar e ouvir) — elevação a B2 prevista para 26/mar/2027.",
          "<strong>ILR:</strong> ausência de condenações não expiradas e cumprimento dos <em>suitability requirements</em>.",
          "<strong>Naturalização:</strong> ter <strong>ILR há pelo menos 12 meses</strong> (dispensado para cônjuge de britânico); <strong>5 anos</strong> de residência legal (3 anos para cônjuge); máximo de <strong>450 dias</strong> de ausência nos 5 anos (270 nos 3 anos) e <strong>90 dias</strong> nos últimos 12 meses.",
          "<strong>Naturalização:</strong> estar <strong>fisicamente no Reino Unido</strong> na data exata de 5 anos antes da solicitação.",
          "<strong>Naturalização:</strong> <em>good character requirement</em> — histórico criminal, <strong>fiscal</strong>, imigratório e financeiro. <strong>A conformidade fiscal é examinada:</strong> débitos com a HMRC, declarações em atraso ou participação em esquemas de evasão podem fundamentar recusa.",
          "<strong>Naturalização:</strong> intenção de ter o Reino Unido como residência principal, e <strong>duas referências</strong> (<em>referees</em>) qualificadas.",
        ],
        process: [
          {
            step: "Acumulação do período de qualificação",
            detail:
              "3 ou 5 anos, conforme a rota, observando o limite de <strong>180 dias de ausência em qualquer período móvel de 12 meses</strong>.",
            timing: "3–5 anos",
          },
          {
            step: "Life in the UK Test e teste de inglês",
            detail:
              "Aprovação no Life in the UK Test e no teste de inglês B1. <strong>Nenhum dos dois precisa ser refeito</strong> para a naturalização, se já aceito no ILR — a aprovação no Life in the UK <strong>não expira</strong>. Guardar o certificado e o <strong>Unique Reference Number (URN)</strong>.",
            timing: "Antes do ILR",
          },
          {
            step: "Solicitação do ILR",
            detail:
              "Pedido ao UKVI. Para Innovator Founder: novo endosso e comprovação de 2 dos 7 critérios de settlement. Para rotas patrocinadas: manutenção do emprego e do salário no limiar exigido.",
            timing: "Decisão em até 6 meses",
          },
          {
            step: "Solicitação da naturalização (N-400 britânico: Form AN)",
            detail:
              "12 meses após o ILR (via geral), ou imediatamente (cônjuge de britânico).",
            timing: "Decisão em até 6 meses",
          },
          {
            step: "Cerimónia de cidadania",
            detail:
              "Perante autoridade local, com <em>Oath of Allegiance</em> e <em>Pledge</em>, a realizar em até <strong>3 meses</strong> da aprovação. Taxa de cerimónia à parte.",
            timing: "Até 3 meses",
          },
        ],
        costs: [
          {
            item: "Indefinite Leave to Remain",
            value: "£3.226 por requerente",
            note: "Era £3.029; confirmado para 8/abr/2026",
          },
          {
            item: "Naturalisation — adulto",
            value: "£1.709",
            note: "Era £1.605; confirmado para 8/abr/2026",
          },
          {
            item: "Registration de criança como cidadã britânica",
            value: "£1.000",
            note: "Era £1.214 — redução; confirmado para 8/abr/2026",
          },
          {
            item: "Cerimónia de cidadania",
            value: "£80",
            note: "A confirmar",
          },
          {
            item: "Life in the UK Test",
            value: "£50 por tentativa",
            note: "A confirmar",
          },
          {
            item: "Teste de inglês SELT (B1/B2)",
            value: "£150–£200",
            note: "Varia por provedor",
          },
          {
            item: "Passaporte britânico (adulto, online)",
            value: "≈£94,50",
            note: "A confirmar",
          },
        ],
        sections: [
          {
            title: "Aumento proposto da taxa de naturalização",
            body: `Há <strong>regra proposta (NPRM)</strong> do Home Office elevando a taxa de naturalização em aproximadamente <strong>75% a 80%</strong> — de £1.709 para faixa em torno de <strong>£1.280 a mais</strong>.

<strong>Em agosto de 2026 é apenas proposta em fase de comentário público, não está em vigor.</strong> <em>Verificar o estágio processual atual.</em>`,
          },
          {
            title: "Dupla cidadania",
            body: `<strong>Lado britânico:</strong> o Reino Unido <strong>permite</strong> a dupla e a múltipla nacionalidade sem restrição. Não é exigida a renúncia à nacionalidade anterior.

<strong>Lado brasileiro:</strong> a Constituição Federal, art. 12, §4.º, II, foi alterada pela <strong>Emenda Constitucional n.º 131, de 2023</strong>. Sob a redação vigente, a perda da nacionalidade brasileira ocorre, em regra, quando o brasileiro <strong>requer expressamente</strong> a perda — a <strong>aquisição voluntária de nacionalidade estrangeira deixou de acarretar perda automática</strong>. Antes da EC 131/2023, o texto previa perda pela aquisição voluntária, com exceções (reconhecimento de nacionalidade originária pela lei estrangeira; imposição de naturalização como condição de permanência ou de exercício de direitos civis).

<strong>Consequência prática:</strong> um brasileiro que se naturaliza britânico <strong>mantém a nacionalidade brasileira</strong>, permanecendo sujeito às obrigações brasileiras associadas — inclusive as fiscais, enquanto não formalizar a saída fiscal.

<em>Nota de verificação: confirmar a redação vigente do art. 12, §4.º, II da CF/88 e a regulamentação da EC 131/2023.</em>`,
          },
          {
            title: "Matriz de decisão temporal — o brasileiro que se muda",
            body: `<strong>Ano 1</strong> — início do FIG (se elegível); CSDP e DSDP no Brasil; concessão do visto
<strong>Ano 2</strong> — FIG; TRF disponível se houver FIG anterior a 2025; Innovator Founder: <em>contact point</em> aos 12 meses
<strong>Ano 3</strong> — FIG; TRF a 12% até 2026/27; Innovator Founder: <em>contact point</em> aos 24 meses
<strong>Ano 4</strong> — <strong>último ano de FIG</strong>; TRF a 15% em 2027/28; Innovator Founder e Global Talent (<em>exceptional talent</em>): <strong>ILR</strong>
<strong>Ano 5</strong> — <strong>tributação mundial pelo regime de competência</strong>; perda da isenção sobre FIG; Skilled Worker: <strong>ILR</strong> sob a regra vigente de 5 anos
<strong>Ano 5–6</strong> — <strong>naturalização</strong>, 12 meses após o ILR
<strong>Ano 10</strong> — <strong>torna-se long-term resident</strong>: patrimônio mundial entra no escopo do IHT
<strong>Ano 15</strong> — cauda de IHT de 5 anos se sair nesse momento
<strong>Ano 20 ou mais</strong> — cauda de IHT de <strong>10 anos</strong>`,
          },
        ],
        brazilNote: `<strong>A Convenção Brasil–Reino Unido para evitar a dupla tributação NÃO está em vigor.</strong> Este é o dado central deste dossiê.

<strong>Cronologia verificada:</strong>
· <strong>29 de novembro de 2022</strong> — assinatura, em Brasília, da «Convenção entre a República Federativa do Brasil e o Reino Unido da Grã-Bretanha e Irlanda do Norte para Eliminar a Dupla Tributação em Relação aos Tributos sobre a Renda e Prevenir a Evasão e a Elisão Fiscais»;
· <strong>julho de 2023</strong> — o <strong>Parlamento britânico aprova</strong> o acordo (procedimento CRaG mais <em>statutory instrument</em>); o lado britânico completa os trâmites internos;
· <strong>2023 a 2026</strong> — tramitação pendente no <strong>Congresso Nacional brasileiro</strong> (Mensagem presidencial → Comissão de Relações Exteriores da Câmara → Plenário → Senado → Decreto Legislativo → depósito ou troca de notas → decreto presidencial de promulgação);
· <strong>junho de 2026, última verificação</strong> — <strong>a Convenção não está em vigor</strong>. As autoridades britânicas continuam a reportá-la como <em>not yet in force</em>. Contribuintes seguem aplicando as normas internas de cada país e a reciprocidade.

<strong>Qualquer material de planejamento que pressuponha a aplicação das alíquotas reduzidas da Convenção está incorreto na data deste levantamento.</strong> O status pode mudar a qualquer momento — consultar o portal Concórdia do Itamaraty, a Receita Federal, a tramitação do PDL no Congresso, e a coleção de tratados da HMRC.

<strong>Conteúdo da Convenção assinada, para quando produzir efeitos</strong> (todos a confirmar no texto):
· <strong>Dividendos</strong> — 10% em geral, com taxa reduzida (possivelmente 0%) para participações qualificadas e fundos de pensão
· <strong>Juros</strong> — 15% em geral, com reduções específicas (bancos, prazos longos, entes públicos)
· <strong>Royalties</strong> — 10% em geral; <strong>15% para marcas</strong>
· <strong>Serviços técnicos</strong> — artigo específico com limite de retenção, inovação relevante frente aos tratados brasileiros mais antigos
· <strong>Ganhos de capital</strong> — tributação no Estado de residência do alienante, com exceção para sociedades <em>property-rich</em>
· <strong>Método</strong> — crédito ordinário em ambos os Estados
· cláusula anti-abuso <strong>Principal Purpose Test (PPT)</strong>, padrão BEPS Ação 6, e procedimento amigável (MAP)

<strong>Produção de efeitos, quando entrar em vigor</strong> (padrão dos tratados brasileiros): impostos retidos na fonte, sobre valores pagos ou creditados a partir de 1.º de janeiro do ano civil seguinte; demais impostos, para exercícios iniciados a partir de 1.º de janeiro do ano civil seguinte.

<strong>Acordo bilateral estreito que existe e está vigente:</strong> Acordo Brasil–Reino Unido para evitar a dupla tributação de <strong>salários de tripulantes de aeronaves em tráfego internacional</strong>, assinado em Brasília em 2/set/2010, aprovado pelo Decreto Legislativo n.º 372/2013 e promulgado pelo <strong>Decreto n.º 8.984/2017</strong>. Escopo restrito — não é tratado abrangente de renda.

<strong>NÃO EXISTE acordo de previdência social entre Brasil e Reino Unido.</strong> Consequências:
· <strong>não há totalização</strong> de tempo de contribuição — períodos no INSS e no <em>National Insurance</em> permanecem estanques;
· <strong>não há certificado de deslocamento temporário</strong> (equivalente ao A1) — um brasileiro transferido pode ficar sujeito a NIC britânico e contribuição previdenciária brasileira <strong>simultaneamente</strong>;
· o Reino Unido é apontado como <strong>o único</strong> entre os dez países com maior comunidade brasileira no exterior <strong>sem</strong> acordo previdenciário com o Brasil. Há registo de contato diplomático, sem instrumento assinado.
· <em>Verificar a regra de isenção de NIC de 52 semanas para <em>seconded workers</em> de países sem acordo, no NIC Manual da HMRC.</em>

<strong>Planejamento previdenciário:</strong> avaliar (i) manter <strong>contribuição facultativa ao INSS</strong> (Lei n.º 8.213/1991, art. 11, e Decreto n.º 3.048/1999) para preservar carência e qualidade de segurado; e (ii) o mínimo de <strong>10 anos qualificantes</strong> de NIC para acesso à <em>new State Pension</em> britânica (35 anos para o valor integral), com possibilidade de compra de <strong>Class 3 voluntary contributions</strong>.`,
        warning: `<strong>Não há tratado de dupla tributação em vigor entre Brasil e Reino Unido</strong>, e <strong>não há acordo de previdência social</strong>. As duas ausências, somadas, definem o perfil de risco do brasileiro que se muda:

· sem tratado, <strong>não há tie-breaker</strong> para dupla residência fiscal — o alívio depende de mecanismos unilaterais, limitados e apurados rendimento a rendimento;
· sem acordo previdenciário, <strong>não há totalização</strong> nem certificado de deslocamento — há risco de dupla contribuição.

Some-se a isso o <strong>IHT tail de até 10 anos</strong> após a saída e a proposta de <strong>earned settlement</strong> de 10 anos com possível aplicação a estoque, e o horizonte de planejamento passa a ser de uma década ou mais — não de cinco anos.`,
        sources: [
          {
            t: "DavidsonMorris · Indefinite Leave to Remain (ILR) UK 2026",
            u: "https://www.davidsonmorris.com/indefinite-leave-to-remain/",
          },
          {
            t: "DavidsonMorris · UK Dual Citizenship 2026",
            u: "https://www.davidsonmorris.com/dual-citizenship-uk/",
          },
          {
            t: "EY Global · Brasil e Reino Unido assinam tratado abrangente de dupla tributação",
            u: "https://www.ey.com/en_gl/technical/tax-alerts/brazil-and-united-kingdom-sign-comprehensive-double-tax-treaty",
          },
          {
            t: "BrasilTax · Acordo de bitributação Brasil–Reino Unido: está em vigor?",
            u: "https://brasiltax.com/blog/acordo-bitribuacao-brasil-reino-unido/",
          },
          {
            t: "Agência Brasil · Parlamento britânico aprova acordo de não-bitributação com o Brasil",
            u: "https://agenciabrasil.ebc.com.br/economia/noticia/2023-07/parlamento-britanico-aprova-acordo-de-nao-bitributacao-com-o-brasil",
          },
          {
            t: "Planalto · Decreto n.º 8.984/2017 (tripulantes de aeronaves)",
            u: "http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/decreto/d8984.htm",
          },
          {
            t: "Ministério da Previdência Social · Acordos internacionais",
            u: "https://www.gov.br/previdencia/pt-br/assuntos/acordos-internacionais/acordos-internacionais",
          },
        ],
      },
    ],
  },
  hk: {
    id: "hk",
    flagCode: "hk",
    name: "Hong Kong",
    region: "Ásia",
    alert: true,
    sumFiscal: "Territorialidade · sem CGT, sem herança, sem IVA",
    sumFS: "ok",
    sumVisa: "New CIES HKD 30M · Top Talent Pass · QMAS",
    sumVS: "changed",
    fiscal: [
      {
        name: "Princípio da territorialidade e a estrutura do sistema tributário",
        status: "ok",
        legalBasis:
          "<strong>Inland Revenue Ordinance (IRO), Cap. 112</strong> — norma-matriz de todos os impostos sobre renda em Hong Kong. Seções relevantes: s. 8 (Salaries Tax), s. 14 (Profits Tax), s. 5 (Property Tax), s. 41 (Personal Assessment), s. 15 (<em>deemed trading receipts</em>). <em>A numeração das Schedules deve ser confirmada em elegislation.gov.hk.</em>",
        desc: `Hong Kong adota o <strong>princípio da fonte territorial</strong>: <strong>somente lucros e rendimentos com fonte em Hong Kong são tributados</strong>. Rendimento de fonte estrangeira, em regra, não é tributado — <strong>independentemente de ser remetido ou não</strong> para Hong Kong. Não há regime de <em>remittance basis</em> como o do antigo sistema britânico.

Sob a IRO, uma pessoa é sujeita a <strong>Profits Tax</strong> quando <strong>cumulativamente</strong>:
1. exerce um comércio, profissão ou negócio (<em>trade, profession or business</em>) em Hong Kong;
2. esse negócio gera lucros; e
3. os lucros <strong>surgem em, ou derivam de, Hong Kong</strong>.

A ausência de qualquer um dos três elementos afasta a incidência.

<strong>Ponto crítico para planejamento:</strong> o regime FSIE <strong>não alterou</strong> o princípio da fonte. Ele opera como regra de tributação <em>superveniente</em> sobre rendimento de fonte estrangeira <strong>recebido em Hong Kong por entidades de grupos multinacionais</strong> — e <strong>não se aplica a pessoas físicas</strong>.`,
        kv: [
          { l: "Princípio", v: "Fonte territorial" },
          { l: "Rendimento estrangeiro de PF", v: "Não tributado" },
          { l: "Regime de remessa", v: "Inexistente" },
          { l: "Ano fiscal", v: "1 de abril a 31 de março" },
          { l: "Salaries Tax — progressiva", v: "2% a 17%" },
          { l: "Salaries Tax — standard rate", v: "15% até HKD 5M · 16% acima" },
          { l: "Profits Tax — corporações", v: "8,25% até HKD 2M · 16,5%" },
          { l: "Profits Tax — não incorporadas", v: "7,5% até HKD 2M · 15%" },
          { l: "Property Tax", v: "15% sobre o NAV" },
          { l: "MPF — contribuição", v: "5% + 5%, teto HKD 30.000/mês" },
        ],
        sections: [
          {
            title: "Testes de fonte (source rules)",
            body: `O IRD aplica o <em>«operations test»</em> consolidado em <strong>CIR v. Hang Seng Bank</strong> e <strong>CIR v. HK-TVB International</strong>: pergunta-se <strong>«o que o contribuinte fez para ganhar o lucro e onde o fez»</strong>.

Regras práticas usualmente citadas:
· <strong>comércio de mercadorias</strong> — local onde os contratos de compra e de venda são efetivamente negociados e concluídos;
· <strong>serviços</strong> — local onde os serviços são prestados;
· <strong>juros</strong> (fora do setor financeiro) — <em>provision of credit test</em>: onde o crédito foi disponibilizado;
· <strong>aluguéis de imóveis</strong> — local do imóvel;
· <strong>comissões</strong> — onde a atividade que gerou a comissão foi exercida.

<em>Nota de verificação: confirmar na DIPN n.º 21 do IRD (Locality of profits), última revisão.</em>`,
          },
          {
            title: "Salaries Tax — a regra do «melhor dos dois cálculos»",
            body: `O contribuinte paga <strong>o menor</strong> entre:

<strong>(a) Cálculo pelas alíquotas progressivas</strong> — aplicadas sobre o <em>net chargeable income</em> (rendimento avaliável menos deduções menos <em>allowances</em> pessoais):
· primeiros HKD 50.000 → 2%
· HKD 50.001 – 100.000 → 6%
· HKD 100.001 – 150.000 → 10%
· HKD 150.001 – 200.000 → 14%
· acima de HKD 200.000 → 17%

<strong>(b) Cálculo pelo <em>standard rate</em></strong> — aplicado sobre o <em>net income</em> (rendimento avaliável menos deduções, <strong>sem</strong> as <em>allowances</em> pessoais).

<strong>Two-tiered standard rates — mudança confirmada.</strong> A partir do ano de avaliação <strong>2024/25</strong> (iniciado em 1/abr/2024), o <em>standard rate</em> deixou de ser único de 15% e passou a ser escalonado:
· primeiros <strong>HKD 5.000.000</strong> de <em>net income</em> → <strong>15%</strong>
· excedente acima de HKD 5.000.000 → <strong>16%</strong>

Segundo o Governo, a medida afeta cerca de <strong>12.000 contribuintes (0,6% do total)</strong>, com arrecadação estimada de <strong>HKD 910 milhões por ano</strong>.

<strong>Implicação de teto:</strong> o <em>standard rate</em> funciona como <strong>teto efetivo</strong> da tributação do trabalho. Para rendimentos elevados, a carga tende a 15% até HKD 5 milhões de rendimento líquido e 16% no excedente.

<strong>Personal Assessment</strong> (IRO, s. 41): mecanismo eletivo pelo qual residentes agregam Salaries Tax, Profits Tax (negócio não incorporado) e Property Tax numa única base, aplicando <em>allowances</em> e podendo deduzir juros de empréstimo para aquisição do imóvel locado e prejuízos. <strong>A partir de 2024/25, as two-tiered standard rates também se aplicam sob Personal Assessment.</strong>`,
          },
          {
            title: "Allowances e deduções — valores de referência",
            body: `<strong>Allowances pessoais</strong> (congeladas desde 2018/19 em vários casos) — <em>valores a confirmar integralmente em ird.gov.hk</em>:
· Basic allowance (individual): HKD 132.000
· Married person's allowance: HKD 264.000
· Child allowance (1.º ao 9.º filho, cada): HKD 130.000, com adicional de HKD 130.000 no ano de nascimento
· Dependent parent ou grandparent com 60 anos ou mais: HKD 50.000 cada; entre 55 e 59 anos: HKD 25.000 cada
· <em>Additional</em> dependent parent (coabitação): dobra o valor
· Dependent brother ou sister: HKD 37.500
· Single parent allowance: HKD 132.000
· Disabled dependant allowance e Personal disability allowance: HKD 75.000 cada

<strong>Deduções</strong> (aplicáveis a ambos os cálculos), com tetos anuais:
· despesas de autoaperfeiçoamento (<em>self-education</em>): HKD 100.000
· juros de financiamento habitacional: HKD 100.000, limitado a 20 anos de avaliação
· aluguel de residência (<em>domestic rents</em>): HKD 100.000, elevado para 120.000 em caso de recém-nascido, a partir de 2024/25
· despesas com lar de idosos: HKD 100.000
· contribuições obrigatórias ao MPF: HKD 18.000
· contribuições voluntárias qualificadas (TVC) mais produtos de anuidade diferida (QDAP): HKD 60.000 no conjunto
· prémios VHIS (seguro-saúde voluntário), por segurado: HKD 8.000
· doações a instituições de caridade aprovadas: 35% do rendimento

<strong>Redução anual («tax rebate»):</strong> Hong Kong concede anualmente uma redução percentual do imposto devido, com teto — 100% com teto de HKD 3.000 em 2023/24, reduzido para HKD 1.500 em 2024/25. <em>Tetos de 2025/26 e 2026/27 a verificar no Budget respectivo.</em>

<strong>Prazos:</strong> ano fiscal de 1/abr a 31/mar; <em>Individual Tax Return</em> (BIR60) emitida em maio, com prazo de 1 mês (3 meses se houver negócio individual); empregador emite <strong>IR56B</strong> anualmente.

<strong>Saída de Hong Kong:</strong> o empregador deve notificar o IRD com <strong>1 mês de antecedência</strong> (formulário <strong>IR56G</strong>) e <strong>reter pagamentos</strong> até a liberação fiscal (<em>tax clearance</em>). Esta é a etapa de saída do regime para o expatriado.`,
          },
          {
            title: "Profits Tax e regimes concessionários",
            body: `<strong>Pessoas jurídicas (corporations):</strong>
· primeiros <strong>HKD 2.000.000</strong> de lucro tributável → <strong>8,25%</strong>
· excedente → <strong>16,5%</strong>

<strong>Negócios não incorporados</strong> (firmas individuais e <em>partnerships</em>):
· primeiros HKD 2.000.000 → <strong>7,5%</strong>
· excedente → <strong>15%</strong>

<strong>Regra «um grupo, uma entidade»:</strong> dentro de um grupo de <em>connected entities</em>, <strong>apenas uma</strong> pode gozar da alíquota reduzida em cada ano; as demais aplicam 16,5% sobre a totalidade. A eleição é feita na declaração anual.

<strong>Características estruturais:</strong>
· <strong>sem tributação em base mundial</strong> e <strong>sem regras CFC</strong> próprias;
· <strong>sem imposto sobre dividendos distribuídos</strong> nem retenção na fonte sobre dividendos pagos ao exterior;
· <strong>sem retenção sobre juros</strong> pagos ao exterior;
· <strong>retenção sobre royalties</strong>: existe, via <em>deemed trading receipt</em> (IRO, s. 15(1)(a)/(b)); alíquota efetiva usual de <strong>4,95%</strong> (16,5% sobre 30% do bruto) para não residentes não associados, ou 16,5% sobre 100% se associado e o IP já tiver sido tributado em Hong Kong;
· <strong>prejuízos fiscais</strong>: transporte indefinido para frente; <strong>sem <em>carry-back</em></strong>;
· <strong>sem consolidação fiscal de grupo</strong>.

<strong>Regimes concessionários setoriais</strong> (alíquota de 8,25% ou menor): <em>corporate treasury centres</em>, <em>aircraft leasing</em>, <em>ship leasing</em> e <em>ship agency</em>, resseguro e <em>captive insurance</em>, e <strong>patent box</strong> — alíquota concessionária de <strong>5%</strong>, introduzida pela Inland Revenue (Amendment) (Tax Concessions for Intellectual Property Income) Ordinance 2024.

<strong>Pillar Two:</strong> Hong Kong promulgou em 2025 a Inland Revenue (Amendment) (Minimum Tax for Multinational Enterprise Groups) Ordinance 2025, implementando a <strong>IIR</strong> e o <strong>Hong Kong Minimum Top-up Tax (HKMTT) a 15%</strong> para grupos multinacionais com receita consolidada igual ou superior a <strong>€750 milhões</strong>, com efeitos para exercícios iniciados a partir de 1/jan/2025. <em>Data de sanção, escopo e existência de UTPR a confirmar.</em>
<strong>Relevância para famílias brasileiras:</strong> grupos familiares cujo faturamento consolidado global atinja €750 milhões podem estar no escopo — situação plausível em famílias com operações produtivas no Brasil.`,
          },
          {
            title: "Tributos que não existem em Hong Kong",
            body: `· <strong>Imposto sobre ganhos de capital: não existe.</strong> <em>Atenção:</em> o IRD pode <strong>requalificar ganhos como lucro comercial</strong> tributável por Profits Tax quando houver <em>badges of trade</em> — frequência, prazo de detenção, motivação, financiamento. Existe o <strong>Tax Certainty Enhancement Scheme</strong> (desde 2023), que permite obter certeza de tratamento como capital em alienações de participações societárias que atendam a requisitos objetivos <em>(participação de 15% ou mais, mantida por 24 meses ou mais, entre outros — a confirmar)</em>.
· <strong>Imposto sobre dividendos recebidos: não existe</strong> — dividendos de fonte de Hong Kong são isentos (IRO, s. 26); dividendos estrangeiros seguem o FSIE, quando aplicável.
· <strong>Retenção sobre dividendos pagos: não existe.</strong>
· <strong>Imposto sobre juros de depósito: não existe</strong> — juros pagos por bancos, associações de poupança e instituições depositárias autorizadas em Hong Kong são isentos para pessoas físicas e para negócios.
· <strong>IVA, GST ou imposto geral sobre consumo: não existem.</strong> Há impostos especiais sobre 4 produtos: bebidas alcoólicas fortes, tabaco, hidrocarbonetos e álcool metílico.
· <strong>Imposto sucessório (Estate Duty): abolido.</strong> Aplica-se a falecimentos ocorridos <strong>em ou após 11 de fevereiro de 2006</strong>, por força da <strong>Revenue (Abolition of Estate Duty) Ordinance 2005</strong>, que emendou a Estate Duty Ordinance, Cap. 111. <em>Data e número a confirmar em elegislation.gov.hk.</em>
· <strong>Imposto sobre doações: não existe.</strong>
· <strong>Imposto sobre patrimônio ou fortuna: não existe.</strong>
· <strong>Contribuições sociais sobre folha:</strong> não há previdência estatal contributiva clássica; há o <strong>MPF (Mandatory Provident Fund)</strong> — contribuição obrigatória de <strong>5% do empregador mais 5% do empregado</strong>, com teto de rendimento relevante de <strong>HKD 30.000/mês</strong> (contribuição máxima de HKD 1.500/mês cada).

<strong>Consequência para o planejamento sucessório:</strong> com o Estate Duty abolido desde 2006 e sem imposto sobre doações, a transmissão de ativos situados em Hong Kong <strong>não gera tributo local</strong>. O risco tributário para o brasileiro migra integralmente para o <strong>lado brasileiro</strong> — ITCMD estadual e IRPF sobre ganho de capital.`,
          },
          {
            title: "Property Tax, rates e Stamp Duty — o que mudou em 2024, 2025 e 2026",
            body: `<strong>Property Tax</strong> (IRO, s. 5): incide a <strong>15% sobre o Net Assessable Value (NAV)</strong> de imóveis situados em Hong Kong locados a terceiros. NAV = aluguel bruto recebido, menos as <em>rates</em> pagas pelo proprietário, menos <strong>abatimento padrão de 20%</strong> para reparos e manutenção (não há dedução de despesas reais). Fórmula efetiva: 15% sobre 80% do aluguel líquido de rates — <strong>carga efetiva de aproximadamente 12% do aluguel</strong>.
· <strong>Sociedades</strong> que auferem aluguéis podem obter isenção de Property Tax e tributar por Profits Tax (IRO, s. 5(2)(a)), o que em geral permite deduzir juros e depreciação.
· <strong>Pessoas físicas</strong> podem eleger <strong>Personal Assessment</strong> para deduzir juros do financiamento.
· Imóvel de uso próprio não paga Property Tax, mas paga <em>rates</em> e <em>Government rent</em>.

<strong>Rates e Government rent:</strong> <em>rates</em> a 5% do <em>rateable value</em> anual, pagas trimestralmente; <em>Government rent</em> a 3% do <em>rateable value</em> para a maioria dos terrenos. Não são impostos sobre renda.

<strong>Stamp Duty sobre imóveis — a sequência de três mudanças:</strong>

<strong>1. Abolição das medidas de arrefecimento — 28 de fevereiro de 2024.</strong> Foram <strong>abolidas todas as <em>demand-side management measures</em></strong> para transações residenciais:
· <strong>BSD — Buyer's Stamp Duty</strong> (15% que incidia sobre compradores <strong>não residentes permanentes</strong> de Hong Kong e sobre pessoas jurídicas) — <strong>abolido</strong>;
· <strong>SSD — Special Stamp Duty</strong> (imposto de revenda rápida, até 20%) — <strong>abolido</strong>;
· <strong>NRSD — New Residential Stamp Duty</strong> (15% flat) — <strong>abolido</strong>.

<strong>Consequência direta:</strong> desde 28/fev/2024, o <strong>comprador estrangeiro — incluindo o brasileiro não residente permanente — paga a mesma alíquota que o residente permanente de Hong Kong</strong>: a Scale 2 do AVD. Este é o ponto de maior relevância prática para o público-alvo.

<strong>2. Ad Valorem Stamp Duty (AVD) — Scale 2 desde 26 de fevereiro de 2025.</strong> Todas as transações, residenciais e não residenciais, independentemente da nacionalidade ou residência do comprador e de já possuir outro imóvel, sujeitam-se às <em>rates</em> originais da Scale 2:
· imóveis de valor <strong>até HKD 4.000.000</strong> pagam <strong>HKD 100</strong> de selo;
· alíquota máxima da Scale 2: <strong>4,25%</strong>, atingida a partir de <strong>HKD 21.739.120</strong>.
<em>A tabela progressiva completa entre HKD 4M e HKD 21,74M deve ser obtida em ird.gov.hk ou no anexo à Stamp Duty Ordinance.</em>

<strong>3. Nova faixa superior — desde 26 de fevereiro de 2026 (Budget 2026-27).</strong> Para instrumentos executados em ou após 26/fev/2026:
· até HKD 100.000.000 → Scale 2, máximo de <strong>4,25%</strong>
· HKD 100.000.001 – 109.574.470 → <strong>HKD 4.250.000 mais 30% do excedente sobre HKD 100.000.000</strong> (faixa de transição)
· HKD 109.574.471 ou mais → <strong>6,5% flat</strong> sobre a contraprestação total
Segundo o IRD, a medida afeta aproximadamente <strong>0,3% das transações residenciais</strong>.

<strong>Outros selos:</strong>
· <strong>transferência de ações de sociedade de Hong Kong</strong>: 0,1% por parte (comprador e vendedor), total de <strong>0,2%</strong> — reduzido de 0,26% em 17/nov/2023. Relevante para reorganizações societárias e veículos de family office;
· <strong>contratos de locação</strong>: 0,25% a 1%, conforme o prazo;
· <strong>alívio para transferências intragrupo</strong> (Stamp Duty Ordinance, s. 45): isenção para transferências entre sociedades associadas com 90% ou mais de participação. Houve modernização da arquitetura de <em>corporate relief</em> nos Orçamentos de 2024-25 a 2026-27, e o Budget 2026-27 iniciou a abertura de incentivos de <em>stamp duty</em> a novas estruturas de mercado, incluindo REITs. <em>Detalhes a confirmar.</em>`,
          },
        ],
        brazilNote: `<strong>Hong Kong CONSTA da lista brasileira de jurisdições com tributação favorecida.</strong> Esta é, do ponto de vista de wealth planning brasileiro, a informação mais determinante de todo este dossiê.

Hong Kong está incluída no <strong>art. 1.º da IN RFB n.º 1.037, de 4 de junho de 2010</strong>, e <strong>permanece na lista após as alterações de 2025</strong>. A <strong>IN RFB n.º 2.265/2025</strong> (assinada em 9/mai/2025, publicada em 13/mai/2025) excluiu os Emirados Árabes Unidos da lista de jurisdições com tributação favorecida e o regime austríaco de holding da lista de regimes fiscais privilegiados — <strong>Hong Kong não foi excluída</strong>.

<strong>Racional técnico:</strong> Hong Kong satisfaz o critério do art. 24 da Lei 9.430/1996 porque (i) <strong>não tributa rendimento de fonte estrangeira</strong> e (ii) a alíquota máxima de Profits Tax, de <strong>16,5%</strong>, é <strong>inferior ao limiar de 17%</strong> (reduzido de 20% para 17% para jurisdições alinhadas aos padrões de transparência, pela Portaria MF n.º 488/2014). <em>O inciso exato do art. 1.º em que «Hong Kong» figura deve ser verificado no texto compilado da IN.</em>

<strong>Consequências jurídicas da classificação como JTF — todas relevantes:</strong>

· <strong>IRRF majorado a 25%</strong> (Lei 9.779/1999, art. 8.º) — rendimentos, ganhos de capital e demais proventos pagos, creditados, entregues, empregados ou remetidos por fonte no Brasil a pessoa física ou jurídica residente ou domiciliada em JTF sofrem IRRF de <strong>25%</strong>, em vez das alíquotas ordinárias.
· <strong>Ganho de capital de não residente</strong> (Lei 10.833/2003, art. 18) — alienação de bens no Brasil por residente em JTF: <strong>25%</strong>, em vez da escala progressiva de 15% a 22,5%.
· <strong>Perda dos benefícios de investidor estrangeiro (Res. CMN 4.373)</strong> — investidor não residente em JTF <strong>não</strong> faz jus à alíquota zero de IR sobre ganhos em bolsa, títulos públicos federais, FIP e FIA.
· <strong>Preços de transferência</strong> (Lei 14.596/2023, vigente desde 1/jan/2024) — operações com residente em JTF, <strong>ainda que não vinculado</strong>, sujeitam-se obrigatoriamente às regras de <em>arm's length</em>.
· <strong>Subcapitalização</strong> (Lei 12.249/2010, arts. 24 a 26) — juros pagos a residente em JTF: dedutibilidade limitada a <strong>30% do patrimônio líquido</strong> da devedora brasileira, regra mais restritiva que a de 2:1 aplicável a vinculadas comuns.
· <strong>Dedutibilidade de despesas</strong> (Lei 9.430/1996, art. 26, com a redação da Lei 12.249/2010) — pagamentos a residente em JTF só são dedutíveis se houver identificação do <strong>beneficiário efetivo</strong>, comprovação de <strong>capacidade operacional</strong> e prova documental do efetivo pagamento e do recebimento dos bens ou serviços.
· <strong>Tributação automática de controladas no exterior</strong> (<strong>Lei 14.754/2023, art. 5.º, §1.º, I</strong>) — <strong>o ponto crítico:</strong> entidades controladas por pessoa física residente no Brasil que estejam <strong>localizadas em JTF</strong> têm seus lucros <strong>tributados anualmente a 15%, em 31 de dezembro de cada ano, INDEPENDENTEMENTE da composição de sua renda</strong> — isto é, <strong>sem</strong> o filtro de «renda passiva superior a 40%». <strong>Uma holding em Hong Kong controlada por brasileiro cai automaticamente nesta hipótese.</strong>

<strong>Síntese para o consultor:</strong> a residência fiscal do indivíduo em Hong Kong e a tributação em Hong Kong são uma coisa; a <strong>classificação de Hong Kong como JTF pelo Brasil</strong> é outra, e produz efeitos (a) enquanto o cliente ainda for residente fiscal brasileiro e (b) sobre quaisquer ativos que permaneçam no Brasil após a saída. <strong>A estrutura FIHV ou UFR de Hong Kong, do ponto de vista brasileiro e enquanto o titular for residente no Brasil, é uma entidade controlada em JTF sujeita a tributação anual automática de 15% pela Lei 14.754/2023 — a alíquota de 0% de Profits Tax local não produz diferimento algum.</strong> A eficiência dessas estruturas só se materializa <strong>após</strong> a efetiva saída fiscal do Brasil.

<strong>Saída fiscal do Brasil</strong> (IN SRF n.º 208/2002; Lei n.º 3.470/1958, art. 17; RIR/2018): <strong>CSDP</strong> da data da saída até o último dia de fevereiro do ano-calendário subsequente, e <strong>DSDP</strong> no prazo da DIRPF do ano seguinte.
· <strong>Saída em caráter permanente:</strong> não residente <strong>a partir da data da saída</strong>, desde que apresentada a CSDP.
· <strong>Saída em caráter temporário:</strong> não residente a partir do <strong>dia seguinte ao 12.º mês</strong> consecutivo de ausência.
· <strong>Sem CSDP:</strong> residente nos primeiros 12 meses; não residente a partir do 13.º.
· Após a saída, rendimentos de fonte brasileira passam a sofrer tributação exclusiva na fonte — <strong>e, por Hong Kong ser JTF, à alíquota de 25% em vez de 15%</strong>. É necessário nomear procurador no Brasil, comunicar fontes pagadoras, bancos e CVM/B3, e migrar investimentos para o regime da Resolução CMN n.º 4.373/2014 — <strong>sem</strong> acesso às alíquotas favorecidas, por conta da classificação JTF.

<strong>CRS.</strong> Hong Kong é participante do CRS, com regime AEOI implementado na IRO. Em abril de 2026, tinha relações de troca ativadas com <strong>mais de 80 jurisdições</strong>, com base em acordo bilateral ou no MCAA. Hong Kong só realiza AEOI com uma jurisdição reportável quando há arranjo em vigor com ela. Instituições financeiras de Hong Kong devem identificar contas de residentes fiscais de jurisdições reportáveis <strong>e de NFEs passivas cujas <em>controlling persons</em> sejam residentes fiscais de jurisdições reportáveis</strong>, reportando ao IRD.
<em>Item de verificação crítica: a inclusão específica do BRASIL na lista de «Reportable Jurisdictions» de Hong Kong não pôde ser confirmada nesta pesquisa. Verificar em ird.gov.hk/eng/tax/aeoi/rpt_jur.htm.</em> Indicação de conhecimento prévio sugere que o Brasil consta desde a expansão de 2020, quando a lista passou de cerca de 75 para mais de 126 jurisdições — tratar como <strong>provável, mas não verificado</strong>.
Em <strong>dezembro de 2025</strong>, Hong Kong abriu <strong>consulta pública sobre a implementação do Cryptoasset Reporting Framework (CARF) e do CRS 2.0</strong> — a acompanhar, pois ampliará o reporte a criptoativos.

<strong>Obrigações brasileiras independem da troca de informações:</strong> declarar bens no exterior na <strong>DIRPF</strong>; apresentar a <strong>Declaração de Capitais Brasileiros no Exterior (CBE)</strong> ao Banco Central — anual se os ativos no exterior somarem <strong>USD 1.000.000 ou mais</strong> em 31/12, e trimestral se <strong>USD 100.000.000 ou mais</strong> <em>(limiares revisados pela Resolução BCB n.º 281/2022 e sucessoras — confirmar)</em>; e tributar os rendimentos sob a Lei 14.754/2023.
<strong>Penalidades por omissão:</strong> multa da CBE de até R$ 250.000, com agravantes; multa de ofício de 75% a 150% sobre imposto não pago; e, conforme o caso, tipificação penal (Lei 8.137/1990 e Lei 9.613/1998).`,
        warning: `<strong>Hong Kong é jurisdição de tributação favorecida para o Brasil.</strong> A consequência mais severa é o art. 5.º, §1.º, I da Lei 14.754/2023: uma entidade controlada em Hong Kong por pessoa física residente no Brasil tem os lucros <strong>tributados anualmente a 15%, em 31 de dezembro, independentemente de distribuição e independentemente da composição da renda</strong> — sem o filtro de renda passiva que se aplica a outras jurisdições.

Isso significa que a alíquota de <strong>0% de Profits Tax</strong> do regime FIHV, e a alíquota de 8,25%/16,5% do Profits Tax ordinário, <strong>não produzem diferimento algum</strong> para o titular ainda residente no Brasil. A eficiência só existe <strong>depois</strong> da saída fiscal formalizada.

Acresce que remessas do Brasil para Hong Kong sofrem <strong>IRRF de 25%</strong>, e o ganho de capital de não residente sobre bem no Brasil é tributado a <strong>25%</strong> — em vez das alíquotas ordinárias.`,
        sources: [
          {
            t: "IRD · A Simple Guide on The Territorial Source Principle of Taxation",
            u: "https://www.ird.gov.hk/eng/paf/bus_pft_tsp.htm",
          },
          {
            t: "elegislation.gov.hk · Inland Revenue Ordinance (Cap. 112) e demais Ordinances",
            u: "https://www.elegislation.gov.hk",
          },
          {
            t: "IRD · FAQ",
            u: "https://www.ird.gov.hk/eng/faq/index.htm",
          },
          {
            t: "IRD · Reportable Jurisdictions (AEOI/CRS)",
            u: "https://www.ird.gov.hk/eng/tax/aeoi/rpt_jur.htm",
          },
          {
            t: "Receita Federal · IN RFB n.º 1.037/2010 (texto compilado)",
            u: "http://normas.receita.fazenda.gov.br/sijut2consulta/link.action?idAto=16002&visao=compilado",
          },
          {
            t: "Receita Federal · Listas de jurisdições com tributação favorecida atualizadas (IN 2.265/2025)",
            u: "https://www.gov.br/receitafederal/pt-br/assuntos/noticias/2025/maio/listas-de-jurisdicoes-com-tributacao-favorecida-e-de-regimes-fiscais-privilegiados-e-atualizada",
          },
          {
            t: "DLA Piper · Medidas fiscais do Budget 2026-2027 de Hong Kong",
            u: "https://www.dlapiper.com/en/insights/publications/2026/03/key-tax-measures-proposed-under-the-2026-2027-hong-kong-budget",
          },
          {
            t: "Budget 2026-27 · Public Finance",
            u: "https://www.budget.gov.hk/2026/eng/pf.html",
          },
        ],
      },
      {
        name: "FSIE — Foreign-sourced Income Exemption (aplicável apenas a grupos multinacionais)",
        status: "changed",
        legalBasis:
          "<strong>FSIE 1.0</strong> — Inland Revenue (Amendment) (Taxation on Specified Foreign-sourced Income) Ordinance 2022, em vigor para rendimento auferido e recebido em Hong Kong a partir de <strong>1/jan/2023</strong>. <strong>FSIE 2.0</strong> — lei promulgada em <strong>8 de dezembro de 2023</strong>, aplicável a rendimento no escopo auferido e recebido a partir de <strong>1/jan/2024</strong>. Localização na IRO: <strong>Part 4AA, ss. 15H a 15V</strong> <em>(numeração a confirmar)</em>. Origem: compromisso com o Código de Conduta da UE, após a inclusão de Hong Kong na lista cinzenta (Annex II) em outubro de 2021.",
        desc: `<strong>Escopo subjetivo — o ponto que decide tudo:</strong>

<strong>O regime FSIE aplica-se EXCLUSIVAMENTE a «MNE entities»</strong> — entidades que integram um grupo multinacional, isto é, grupo com pelo menos uma entidade ou estabelecimento permanente em jurisdição diferente da da entidade-mãe.

<strong>O FSIE NÃO se aplica a pessoas físicas.</strong> Também <strong>não se aplica a entidades puramente domésticas</strong> de Hong Kong (<em>standalone</em> ou grupos locais).

<strong>Consequência prática:</strong>
· um <strong>indivíduo brasileiro residente fiscal em Hong Kong</strong> que aufere dividendos, juros, royalties ou ganhos de capital de fonte estrangeira <strong>não é alcançado pelo FSIE</strong>. Seu rendimento estrangeiro permanece fora da base de Salaries Tax por força do princípio da territorialidade;
· uma <strong>holding familiar de Hong Kong que integre um grupo multinacional</strong> — por exemplo, com subsidiária no Brasil ou nas BVI — <strong>está no escopo</strong> e precisa satisfazer os testes abaixo para não ser tributada a 16,5% sobre rendimento estrangeiro recebido em Hong Kong.`,
        kv: [
          { l: "Escopo subjetivo", v: "Só entidades de grupos multinacionais" },
          { l: "Pessoas físicas", v: "Fora do escopo" },
          { l: "Entidades puramente domésticas", v: "Fora do escopo" },
          { l: "Juros, dividendos, ganhos em equity", v: "No escopo desde 1/jan/2023" },
          { l: "Rendimentos de IP", v: "No escopo desde 1/jan/2023" },
          { l: "Ganhos em todos os demais ativos", v: "No escopo desde 1/jan/2024" },
          { l: "Alíquota se não excluído", v: "16,5%" },
          { l: "Participation exemption — participação", v: "≥ 5%" },
          { l: "Participation exemption — detenção", v: "≥ 12 meses" },
          { l: "Subject to tax condition", v: "≥ 15% no exterior" },
        ],
        requirements: [
          "<strong>Rendimento no escopo</strong> (<em>specified foreign-sourced income</em>): juros; dividendos; ganhos na alienação de <strong>participações societárias</strong>; e rendimentos de <strong>propriedade intelectual</strong> — todos desde <strong>1/jan/2023</strong>. Desde <strong>1/jan/2024</strong> (FSIE 2.0), acrescem os <strong>ganhos na alienação de todos os demais tipos de ativos</strong> — móveis e imóveis, financeiros e não financeiros, de capital ou de renda.",
          "<strong>Teste de «recebimento em Hong Kong»:</strong> considera-se recebido quando (i) remetido a, transmitido para ou trazido para Hong Kong; (ii) usado para satisfazer dívida contraída em relação a negócio exercido em Hong Kong; ou (iii) usado para adquirir bem móvel trazido para Hong Kong. <em>A confirmar no guidance do IRD.</em>",
          "<strong>Via de exclusão A — teste de substância económica</strong> (para juros, dividendos e ganhos não-IP): empregar número <strong>adequado</strong> de funcionários qualificados em Hong Kong; incorrer em montante <strong>adequado</strong> de despesas operacionais em Hong Kong; e exercer em Hong Kong as <strong>atividades essenciais geradoras de renda (CIGA)</strong>. Para <strong>entidades puramente de holding</strong> (<em>pure equity holding entities</em>), o teste é <strong>reduzido</strong>: basta cumprir as obrigações de registo societário e ter recursos humanos e locais adequados em Hong Kong. É admitido <strong>outsourcing</strong> das CIGA para prestador em Hong Kong, desde que a entidade exerça monitoramento e controlo adequados.",
          "<strong>Via de exclusão B — teste de nexo</strong> (exclusivo para rendimento de IP): aplicável apenas a <strong>patentes e ativos assimilados</strong> (software protegido por copyright); <strong>marcas e direitos autorais de marketing NÃO qualificam</strong>. Fração do nexo = despesas de P&amp;D qualificadas × 1,3, limitado ao total, dividido pelas despesas totais. <strong>Apenas a porção correspondente à fração é excluída</strong> da tributação.",
          "<strong>Via de exclusão C — participation exemption</strong> (para dividendos e ganhos em alienação de participações): ser <strong>residente de Hong Kong</strong> ou ter EP em Hong Kong; deter <strong>5% ou mais</strong> das participações na entidade investida; detenção mantida por <strong>12 meses ou mais</strong> ininterruptos imediatamente antes do fato gerador; e observar as regras anti-abuso.",
          "<strong>Regras anti-abuso da participation exemption:</strong> <em>subject to tax condition</em> — o rendimento (ou o lucro subjacente) foi sujeito a imposto em jurisdição estrangeira a alíquota de <strong>15% ou mais</strong>; <em>switch-over rule</em> — se a alíquota estrangeira for inferior a 15%, aplica-se crédito em vez de isenção; <em>main purpose rule</em> — o arranjo não pode ter como um de seus propósitos principais a obtenção da vantagem fiscal; e regra <strong>anti-hibridismo</strong> — o pagamento não pode ser dedutível na jurisdição do pagador.",
        ],
        sections: [
          {
            title: "Intra-group transfer relief e advance rulings",
            body: `<strong>Intra-group transfer relief.</strong> O FSIE 2.0 introduziu <strong>diferimento</strong> da tributação quando o ativo é transferido entre <strong>entidades associadas</strong>, sujeito a regras anti-abuso específicas.

<strong>Advance rulings.</strong> A entidade de grupo multinacional pode requerer <em>advance ruling</em> ao Commissioner of Inland Revenue sobre o cumprimento do teste de substância económica — para juros, dividendos e ganhos não-IP —, se exercer <em>trade or business</em> em Hong Kong. Os prazos de referência de acúmulo são <strong>1/jan/2023</strong> (juros, dividendos e alienação de <em>equity</em>) e <strong>1/jan/2024</strong> (alienação de ativos não-IP).

<em>O ruling é usualmente concedido por até 5 anos de avaliação, sem taxa nos primeiros anos do regime — a confirmar em ird.gov.hk.</em>

<strong>Situação na lista da UE:</strong> Hong Kong foi <strong>removida da lista cinzenta</strong> da União Europeia após a implementação do FSIE 2.0 (decisão de fevereiro de 2024). <em>Confirmar o status atual na lista Annex II do Conselho da UE.</em>`,
          },
        ],
        brazilNote: `<strong>O FSIE não altera a posição brasileira.</strong> Ainda que uma entidade de Hong Kong satisfaça o teste de substância económica e obtenha exclusão do FSIE — pagando, portanto, <strong>0% em Hong Kong</strong> sobre o rendimento estrangeiro —, essa mesma entidade continua sendo, para o Brasil, uma <strong>entidade controlada em jurisdição de tributação favorecida</strong>.

<strong>Resultado:</strong> lucros tributados a <strong>15% anualmente, em 31 de dezembro, independentemente de distribuição</strong> (Lei 14.754/2023, art. 5.º, §1.º, I), enquanto o controlador for pessoa física residente no Brasil.

<strong>Ponto de atenção para o indivíduo:</strong> se o brasileiro <strong>já é residente fiscal em Hong Kong</strong> e detém os ativos <strong>pessoalmente</strong> (não por meio de entidade), o FSIE <strong>não se aplica</strong> — e o rendimento de fonte estrangeira fica fora da base de Hong Kong pela territorialidade. A introdução de uma holding de Hong Kong entre a pessoa e os ativos é justamente o que traz o FSIE para dentro do quadro, com os testes de substância que ele exige.

A decisão de estruturar por meio de entidade em Hong Kong deve, portanto, ponderar simultaneamente (i) os testes de substância do FSIE, (ii) o custo de manter substância real em Hong Kong, e (iii) a tributação brasileira automática de 15% enquanto o controlador for residente no Brasil.`,
        sources: [
          {
            t: "IRD · Foreign-sourced Income Exemption",
            u: "https://www.ird.gov.hk/eng/tax/bus_fsie.htm",
          },
          {
            t: "IRD · Press release sobre o FSIE (29/nov/2023)",
            u: "https://www.ird.gov.hk/eng/ppr/archives/23112905.htm",
          },
          {
            t: "EY · Hong Kong revê o seu regime FSIE",
            u: "https://www.ey.com/en_gl/technical/tax-alerts/hong-kong-to-further-revise-its-foreign-source-income-exemption-",
          },
          {
            t: "PwC China · Regime FSIE de Hong Kong",
            u: "https://www.pwccn.com/en/services/tax/fsie.html",
          },
          {
            t: "International Tax Review · O regime FSIE expandido de Hong Kong",
            u: "https://www.internationaltaxreview.com/article/2cr3bcal3erhsfmwcdszk/sponsored/hong-kongs-expanded-foreign-sourced-income-exemption-regime-key-considerations",
          },
        ],
      },
      {
        name: "Regimes de family office — FIHV e Unified Fund Exemption",
        status: "changed",
        legalBasis:
          "<strong>Inland Revenue (Amendment) (Tax Concessions for Family-owned Investment Holding Vehicles) Ordinance 2023</strong>, publicada no Diário Oficial em <strong>19 de maio de 2023</strong>, com <strong>efeito retroativo a 1 de abril de 2022</strong> (ano de avaliação 2022/23). Introduziu na IRO a Schedule 16E e as seções operativas ss. 19E a 19M <em>(numeração a confirmar)</em>. <strong>UFR:</strong> IRO, ss. 20AM a 20AY, introduzidas pela Inland Revenue (Profits Tax Exemption for Funds) (Amendment) Ordinance 2019, com efeito desde 1/abr/2019.",
        desc: `Hong Kong estruturou uma política dedicada a family offices, com unidade própria dentro do <strong>InvestHK</strong> (<em>FamilyOfficeHK</em>), o <em>Policy Statement on Developing Family Office Businesses in Hong Kong</em> (março de 2023), a <em>Network of Family Office Service Providers</em> e a <em>Hong Kong Academy for Wealth Legacy</em>.

<strong>FIHV — Family-owned Investment Holding Vehicle.</strong> Alíquota de <strong>Profits Tax de 0%</strong> sobre lucros do FIHV — e de FSPEs (<em>Family-owned Special Purpose Entities</em>) — decorrentes de <strong>transações qualificadas</strong> em ativos da Schedule 16C da IRO.

<strong>Unified Fund Exemption (UFR).</strong> Isenção de Profits Tax para «funds» conforme definidos na s. 20AM, <strong>independentemente de estrutura</strong> (sociedade, <em>partnership</em>, trust), <strong>de domicílio</strong> (<em>onshore</em> ou <em>offshore</em> — o regime unificou os antigos regimes de <em>offshore fund</em> e <em>offshore private equity fund</em>), <strong>de tamanho ou de finalidade</strong>.

<strong>FIHV × UFR:</strong> o FIHV foi criado justamente porque o UFR exige <strong>múltiplos investidores</strong> — a definição de «fund» é importada da Securities and Futures Ordinance (Cap. 571) e pressupõe arranjo de investimento coletivo com múltiplos investidores que não têm controlo diário sobre a gestão. <strong>Uma família única não satisfaz essa definição.</strong>`,
        kv: [
          { l: "FIHV — Profits Tax", v: "0%" },
          { l: "FIHV — AUM mínimo", v: "HKD 240.000.000" },
          { l: "FIHV — empregados em HK", v: "Mínimo 2, em tempo integral" },
          { l: "FIHV — despesa operacional anual", v: "Mínimo HKD 2.000.000" },
          { l: "FIHV — participação familiar", v: "≥ 95% dos interesses económicos" },
          { l: "FIHV — máximo por família", v: "50 veículos (a confirmar)" },
          { l: "ESFO — receita de serviços à família", v: "≥ 75% (safe harbour)" },
          { l: "Eleição pelo regime", v: "Irrevogável" },
          { l: "Efeito retroativo", v: "1 de abril de 2022" },
          { l: "Bill 2026", v: "Em escrutínio no LegCo" },
        ],
        requirements: [
          "<strong>FIHV:</strong> ser uma <strong>entidade</strong> (sociedade, <em>partnership</em> ou trust), constituída em ou fora de Hong Kong.",
          "<strong>FIHV:</strong> <strong>não</strong> ser um empreendimento com finalidade comercial ou industrial geral.",
          "<strong>FIHV:</strong> ser <strong>normalmente gerido ou controlado em Hong Kong</strong> durante o período-base.",
          "<strong>FIHV:</strong> ser <strong>gerido por um Eligible Single Family Office (ESFO)</strong> em Hong Kong.",
          "<strong>FIHV:</strong> <strong>95% ou mais dos interesses económicos</strong> detidos, direta ou indiretamente, por membros de <strong>uma única família</strong>. <em>Percentual e definição de «família» a confirmar na Schedule 16E.</em>",
          "<strong>FIHV:</strong> máximo de <strong>50 FIHVs por família</strong> podem gozar da concessão em cada ano. <em>A confirmar em ird.gov.hk.</em>",
          "<strong>Limiar de ativos:</strong> o agregado dos ativos da <strong>Schedule 16C</strong> geridos pelo ESFO para a família deve ser de <strong>no mínimo HKD 240.000.000</strong>. Ativos da Schedule 16C incluem valores mobiliários, ações, debêntures, <em>bonds</em> e <em>notes</em> de sociedades privadas, entre outros.",
          "<strong>Requisito de atividade substancial:</strong> no mínimo <strong>2 empregados em tempo integral</strong> em Hong Kong que executem as atividades de investimento e possuam as qualificações necessárias.",
          "<strong>Requisito de atividade substancial:</strong> no mínimo <strong>HKD 2.000.000 de despesa operacional anual</strong> incorrida em Hong Kong para a execução dessas atividades.",
          "<strong>ESFO:</strong> ser <em>private company</em> constituída em ou fora de Hong Kong; ser normalmente gerida ou controlada em Hong Kong; ter <strong>95% ou mais</strong> dos interesses económicos detidos por membros da família; prestar serviços a membros da família e/ou aos FIHVs, com <strong>75% ou mais da receita</strong> proveniente desses serviços (<em>safe harbour rule</em>); e <strong>não prestar serviços a terceiros</strong> fora da família.",
          "<strong>Eleição:</strong> a opção pelo regime é <strong>irrevogável</strong> e feita por escrito ao Commissioner, aplicando-se ao ano eleito e a todos os subsequentes.",
        ],
        sections: [
          {
            title: "Reforma em curso — o Bill 2026",
            body: `Em <strong>12 de junho de 2026</strong>, o Governo publicou no Diário Oficial o <strong>Inland Revenue (Amendment) (Preferential Tax Regimes for Funds, Family-owned Investment Holding Vehicles and Carried Interest) Bill 2026</strong>.

<strong>Escopo:</strong> reforma simultânea de <strong>três regimes</strong> — Unified Fund Exemption (UFR), FIHV, e a concessão sobre <em>carried interest</em>.

<strong>Tramitação:</strong> precedido de consulta pública com <em>stakeholders</em> em 2024 e sessões de engajamento em 2025; <strong>primeira leitura no Legislative Council em 24 de junho de 2026</strong>; <strong>em agosto de 2026, ainda em escrutínio de comissão — NÃO PROMULGADO</strong>. Se aprovado, com <strong>efeito retroativo ao ano de avaliação 2025/26</strong>.

<strong>Principais alterações propostas ao FIHV:</strong>
1. <strong>Mudança do cálculo do limiar mínimo de ativos</strong> — substituição da regra de <em>Net Asset Value</em> por um requisito de <em>asset value</em>, de modo que <strong>empréstimos de sócios (<em>shareholders' loans</em>) ao FIHV deixem de ser deduzidos</strong> no cômputo do valor;
2. <strong>expansão da Schedule 16C</strong> para refletir estratégias de investimento contemporâneas;
3. <strong>eliminação das referências a «qualifying transactions» e «incidental transactions»</strong> e do limiar de transações incidentais (atualmente 5%), simplificando a qualificação;
4. <strong>inclusão de classes de ativos alternativos</strong> no perímetro da concessão: <strong>crédito privado (<em>private credit</em>), ativos digitais, imóveis no exterior, metais preciosos e instrumentos ligados a carbono</strong>.

<strong>Nota de planejamento:</strong> para famílias brasileiras avaliando a estruturação de um FIHV em 2026, a existência do Bill 2026 significa que <strong>o desenho definitivo do regime ainda não está estabilizado</strong>. Recomenda-se acompanhar a tramitação no LegCo antes de comprometer estrutura.`,
          },
          {
            title: "Unified Fund Exemption — mecânica",
            body: `<strong>Efeito:</strong> isenção de Profits Tax para «funds» definidos na IRO, s. 20AM, independentemente de estrutura, domicílio, tamanho ou finalidade.

<strong>Definição de «fund»</strong> importada da Securities and Futures Ordinance (Cap. 571) — arranjo de investimento coletivo com <strong>múltiplos investidores</strong> que não têm controlo diário sobre a gestão.

<strong>Transações qualificadas:</strong> ativos da Schedule 16C da IRO.
<strong>Transações incidentais:</strong> isentas se representarem <strong>5% ou menos</strong> do valor total das receitas <em>— percentual a confirmar</em>.

<strong>Regras anti-abuso:</strong> <em>anti-round-tripping</em> — investidores residentes em Hong Kong com 30% ou mais de participação, ou qualquer participação se o fundo for entidade associada, podem ser tributados por <em>deeming</em>.

<strong>SPEs (Special Purpose Entities):</strong> isentas na proporção da participação do fundo.

<strong>Investimento em empresas privadas:</strong> sujeito a testes adicionais — teste de imóveis, teste de detenção de 2 anos, teste de controlo de curto prazo.

<strong>Veículos domésticos comumente utilizados:</strong> <strong>OFC</strong> (Open-ended Fund Company) e <strong>LPF</strong> (Limited Partnership Fund, Cap. 637, desde 31/ago/2020).

<em>Toda esta seção deve ser confirmada em ird.gov.hk/eng/tax/bus_ufe.htm.</em>`,
          },
          {
            title: "Carried interest",
            body: `<strong>Inland Revenue (Amendment) (Tax Concessions for Carried Interest) Ordinance 2021:</strong> <strong>0% de Profits Tax e 0% de Salaries Tax</strong> sobre <em>eligible carried interest</em> distribuído por fundos de <em>private equity</em> qualificados, com efeito retroativo a 1 de abril de 2020, mediante <strong>certificação pela Hong Kong Monetary Authority (HKMA)</strong>.

<strong>Também objeto de reforma pelo Bill 2026</strong> — confirmado que o projeto abrange o regime de <em>carried interest</em>.

<em>Detalhes a confirmar em ird.gov.hk e junto à HKMA.</em>`,
          },
        ],
        brazilNote: `<strong>Para o titular ainda residente fiscal no Brasil, a alíquota de 0% do FIHV não produz efeito algum.</strong>

Hong Kong é <strong>jurisdição de tributação favorecida</strong> na IN RFB 1.037/2010. Por força do <strong>art. 5.º, §1.º, I da Lei 14.754/2023</strong>, uma entidade controlada por pessoa física residente no Brasil localizada em JTF tem os lucros <strong>tributados a 15% anualmente, em 31 de dezembro, independentemente de distribuição e independentemente da composição da renda</strong>.

<strong>Ou seja:</strong> o FIHV paga 0% em Hong Kong e 15% no Brasil, todos os anos, sobre o lucro apurado — sem diferimento. <strong>A eficiência do FIHV só se materializa após a efetiva saída fiscal do Brasil</strong> (CSDP e DSDP formalizadas, com a caracterização da não residência).

<strong>Custo de substância.</strong> O FIHV exige, em Hong Kong: <strong>2 empregados qualificados em tempo integral</strong>, <strong>HKD 2.000.000 de despesa operacional anual</strong>, e <strong>HKD 240.000.000 de ativos sob gestão</strong>. Esse é o piso de entrada — e é um piso real, não formal.

<strong>Selo sobre transferência de ações</strong> de sociedade de Hong Kong: 0,1% por parte, total de 0,2%, reduzido de 0,26% em 17/nov/2023 — relevante para as reorganizações societárias envolvidas na montagem da estrutura.

<strong>Recomendação de sequência:</strong> a estruturação de um family office em Hong Kong por família brasileira deve vir <strong>depois</strong> da saída fiscal, não antes — e deve aguardar a estabilização do Bill 2026, cuja tramitação ainda estava em escrutínio de comissão em agosto de 2026.`,
        sources: [
          {
            t: "IRD · Tax Concessions for Family-owned Investment Holding Vehicles",
            u: "https://www.ird.gov.hk/eng/tax/bus_fihv.htm",
          },
          {
            t: "InvestHK / FamilyOfficeHK · Novas concessões fiscais para family offices",
            u: "https://www.familyofficehk.gov.hk/en/new-tax-concessions-family-offices/index.html",
          },
          {
            t: "KPMG China · Hong Kong apresenta projeto de lei para tornar o regime de family office mais atrativo",
            u: "https://kpmg.com/cn/en/insights/2026/06/tax-alert-11-hk-hong-kong-sar-unveils-draft-law-to-make-its-family-office-tax-regime-more-attractive.html",
          },
          {
            t: "Baker McKenzie · Regimes de concessão fiscal para fundos, family offices e carried interest (jul/2026)",
            u: "https://www.bakermckenzie.com/en/insight/publications/2026/07/hk-enhanced-tax-concession-regimes-funds-family-offices-carried-interest",
          },
          {
            t: "Withers · A nova lei de concessão fiscal para veículos de investimento familiar",
            u: "https://www.withersworldwide.com/en-gb/insight/read/hong-kong-s-new-law-providing-a-tax-concession-for-family-investment-vehicles-has-finally-passed",
          },
          {
            t: "Charltons · Novos regimes fiscais para fundos, family offices e carried interest",
            u: "https://www.charltonslaw.com/new-tax-regimes-for-hong-kong-funds-family-offices-and-carried-interest/",
          },
        ],
      },
      {
        name: "Rede de CDTs e a inexistência de acordo com o Brasil",
        status: "risk",
        legalBasis:
          "Hong Kong é <strong>Região Administrativa Especial com sistema tributário autónomo</strong> (art. 108 da Basic Law) e <strong>negocia os seus próprios CDTAs</strong>. Não é coberta pelos tratados tributários da República Popular da China continental — o CDTA Hong Kong–Mainland China é acordo <strong>separado</strong>, o que confirma a autonomia.",
        desc: `<strong>Rede de Hong Kong:</strong> <strong>59 CDTAs assinados</strong> e negociações iniciadas ou agendadas com <strong>16 jurisdições</strong>, segundo dado apurado em julho de 2026. <em>Conferir o número exato em ird.gov.hk.</em> Hong Kong é parte da Convenção Multilateral (MLI) e mantém ainda <strong>TIEAs</strong> (acordos de troca de informações) e a rede <strong>AEOI/CRS</strong>.

CDTAs recentes: <strong>Bangladesh e Croácia</strong> entraram em vigor em dezembro de 2024; <strong>CDTA Hong Kong–Noruega</strong> assinado em dezembro de 2025.

<strong>NÃO EXISTE acordo de dupla tributação entre Brasil e Hong Kong.</strong>`,
        kv: [
          { l: "CDTAs de Hong Kong", v: "59 assinados" },
          { l: "Em negociação", v: "16 jurisdições" },
          { l: "CDT Brasil–Hong Kong", v: "Não existe" },
          { l: "CDT Brasil–China", v: "Não se estende a Hong Kong" },
          { l: "Brasil na lista de prioridades", v: "Sim — como parceiro proposto" },
          { l: "Retenção reduzida", v: "Indisponível" },
          { l: "Procedimento amigável (MAP)", v: "Indisponível" },
          { l: "Troca de informações", v: "Via CRS/MCAA" },
        ],
        sections: [
          {
            title: "A verificação: o que a pesquisa encontrou",
            body: `<strong>Não foi encontrada qualquer evidência da existência de um Acordo para Evitar a Dupla Tributação entre o Brasil e Hong Kong</strong> — assinado em 24 de novembro de 2022 ou em qualquer outra data.

<strong>Evidências apuradas:</strong>
1. Documento da <strong>ASIFMA</strong>, «Annex B — Proposed CDTA partners to be accorded with priority» (março de 2024), lista o <strong>Brasil como jurisdição PROPOSTA</strong> como parceiro prioritário para negociação de um CDTA com Hong Kong, com a justificativa de que «um CDTA apoiaria a competitividade dos bancos de Hong Kong que prestam serviços financeiros a clientes sediados no Brasil». Isso demonstra que, <strong>em março de 2024, não havia acordo</strong> — o Brasil era apenas alvo de negociação futura.
2. As buscas em fontes brasileiras — Receita Federal, Câmara dos Deputados, Senado, Itamaraty/Concórdia — <strong>não retornaram nenhum decreto legislativo, mensagem presidencial ou decreto de promulgação</strong> relativo a acordo com Hong Kong.
3. As buscas na base de CDTAs de Hong Kong (FSTB, IRD) <strong>não listam o Brasil</strong> entre os signatários.

<strong>Hipótese sobre a origem da confusão</strong> (não confirmada): em torno da data indicada, o Brasil assinou o <strong>Acordo de Dupla Tributação Brasil–Reino Unido, em 29 de novembro de 2022, em Brasília</strong> — data muito próxima. Outra possibilidade é confusão com o <strong>Protocolo Alterando o Acordo Brasil–China</strong>, assinado em 23 de maio de 2022 e promulgado pelo <strong>Decreto n.º 12.620, de 12 de setembro de 2025</strong>.

<strong>ATENÇÃO — erro frequente em planejamentos mal elaborados:</strong> <strong>nem o acordo Brasil–China, nem qualquer acordo brasileiro com a República Popular da China, se estende a Hong Kong.</strong> Como Região Administrativa Especial com sistema tributário autónomo (art. 108 da Basic Law), Hong Kong negocia os próprios CDTAs.`,
          },
          {
            title: "Consequências práticas da ausência de acordo",
            body: `· <strong>Nenhuma redução de alíquotas de retenção na fonte</strong> entre Brasil e Hong Kong;
· <strong>nenhum mecanismo de MAP</strong> (procedimento amigável) para resolver dupla tributação;
· <strong>nenhum artigo de não-discriminação</strong>;
· <strong>nenhuma troca de informações por via de tratado</strong> — a troca ocorre apenas via <strong>CRS/MCAA</strong> e, eventualmente, via <strong>Convenção Multilateral sobre Assistência Mútua Administrativa em Matéria Tributária</strong>. <em>Nota: a extensão da Convenção Multilateral a Hong Kong foi feita pela China por declaração territorial — verificar.</em>
· A eliminação de dupla tributação depende <strong>exclusivamente da legislação interna</strong> de cada lado: no Brasil, o crédito de imposto pago no exterior sob a Lei 9.249/1995, art. 26, e a Lei 14.754/2023; em Hong Kong, a própria territorialidade torna a questão quase sempre irrelevante, já que rendimento estrangeiro não é tributado.

<strong>Nota de contexto:</strong> a ausência de tratado, somada à classificação de Hong Kong como jurisdição de tributação favorecida pelo Brasil, produz o cenário mais desfavorável do ponto de vista de fluxo Brasil → Hong Kong: <strong>IRRF de 25%</strong> sobre remessas, sem redução convencional, e sem mecanismo de resolução de disputas.`,
          },
        ],
        brazilNote: `A combinação de <strong>ausência de CDT</strong> e <strong>classificação como jurisdição de tributação favorecida</strong> define o perfil de risco de Hong Kong para o brasileiro.

<strong>Fluxo Brasil → Hong Kong:</strong> IRRF de <strong>25%</strong> sobre rendimentos, ganhos e proventos remetidos, sem redução convencional; ganho de capital de não residente sobre bem no Brasil a <strong>25%</strong>; perda dos benefícios da Resolução CMN 4.373; preços de transferência obrigatórios ainda que sem vinculação; subcapitalização limitada a 30% do PL; e dedutibilidade condicionada à identificação do beneficiário efetivo e à comprovação de capacidade operacional.

<strong>Estruturas de Hong Kong detidas por residente fiscal brasileiro:</strong> tributação automática de <strong>15% ao ano</strong>, em 31 de dezembro, independentemente de distribuição e da composição da renda.

<strong>Do lado de Hong Kong:</strong> a territorialidade significa que o rendimento de fonte brasileira auferido por residente de Hong Kong <strong>não é tributado em Hong Kong</strong> — logo, não há dupla tributação a resolver nesse sentido, e a ausência de tratado importa pouco. O problema está no sentido inverso, do Brasil para Hong Kong.

<strong>Monitorar:</strong> o Brasil consta da lista de <strong>parceiros propostos</strong> para negociação de CDTA com Hong Kong (documento ASIFMA de março de 2024). Um eventual acordo alteraria materialmente o quadro — e poderia, inclusive, abrir caminho para a revisão da classificação de Hong Kong na IN RFB 1.037/2010.`,
        sources: [
          {
            t: "IRD · Comprehensive Double Taxation Agreements concluded",
            u: "https://www.ird.gov.hk/eng/tax/dta_inc.htm",
          },
          {
            t: "FSTB · Comprehensive Avoidance of Double Taxation Agreement",
            u: "https://www.fstb.gov.hk/en/treasury/general/comprehensive-avoidance-of-double-taxation-agreement.htm",
          },
          {
            t: "ASIFMA · Annex B — Proposed CDTA partners to be accorded with priority (PDF, mar/2024)",
            u: "https://www.asifma.org/wp-content/uploads/2024/04/240307-proposed-tax-treaty-partners-for-hk.pdf",
          },
          {
            t: "Receita Federal · Acordos para evitar a dupla tributação",
            u: "https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/legislacao/acordos-internacionais/acordos-para-evitar-a-dupla-tributacao/acordos-para-evitar-a-dupla-tributacao",
          },
          {
            t: "Itamaraty · Sistema Concórdia (base de atos internacionais)",
            u: "https://concordia.itamaraty.gov.br",
          },
        ],
      },
    ],
    visa: [
      {
        name: "New Capital Investment Entrant Scheme (New CIES)",
        status: "changed",
        legalBasis:
          "Esquema administrativo com base na <strong>Immigration Ordinance, Cap. 115</strong>. CIES original: 2003, <strong>suspenso em 2015</strong>. <strong>Relançado em 1 de março de 2024</strong> como New CIES. Órgãos: <strong>New CIES Office</strong> (unidade do InvestHK), <strong>Immigration Department</strong> e <strong>Hong Kong Investment Corporation Limited (HKIC)</strong>. Portal oficial: newcies.gov.hk.",
        desc: `Programa de residência por investimento de <strong>HKD 30.000.000</strong>, estruturado em duas camadas:
· <strong>HKD 27.000.000 ou mais</strong> em ativos permissíveis (financeiros e imobiliários);
· <strong>HKD 3.000.000</strong> obrigatoriamente destinados ao <strong>CIES Investment Portfolio</strong>, gerido pela HKIC.

Acresce o <strong>requisito patrimonial</strong>: o requerente deve demonstrar ser <strong>absolutamente titular beneficiário</strong> de ativos líquidos não inferiores a <strong>HKD 30.000.000</strong> — ou equivalente em outras moedas — durante <strong>todo o período de 6 meses imediatamente anteriores</strong> à data do pedido de <em>Net Asset Assessment</em>.

<strong>Alteração vigente desde 1 de março de 2026:</strong> o New CIES atualizou as condições relativas a <strong>sociedades de participação privadas</strong>, permitindo que o requerente utilize uma <em>eligible private holding company</em> constituída há <strong>menos de seis meses</strong> para fins de avaliação do cumprimento dos requisitos de investimento, <strong>sem período mínimo de constituição</strong>. Efeito prático: o investimento pode ser feito por meio de veículo societário recém-constituído. <em>O requisito de titularidade integral do veículo não foi confirmado.</em>`,
        kv: [
          { l: "Investimento total", v: "HKD 30.000.000" },
          { l: "Ativos permissíveis", v: "≥ HKD 27.000.000" },
          { l: "CIES Investment Portfolio", v: "HKD 3.000.000 (obrigatório)" },
          { l: "Patrimônio líquido exigido", v: "HKD 30.000.000 por 6 meses" },
          { l: "Certificados de depósito", v: "Teto de HKD 3.000.000" },
          { l: "Imóveis não residenciais", v: "Computáveis até HKD 10.000.000" },
          { l: "Entry permit para investir", v: "Visitante, até 180 dias" },
          { l: "Right of Abode", v: "Após 7 anos" },
          { l: "Residentes do Continente", v: "Não elegíveis (sem PR estrangeira)" },
          { l: "Taxa de aplicação", v: "HKD 600 por pessoa" },
          { l: "Taxa de emissão (> 180 dias)", v: "HKD 1.300" },
        ],
        requirements: [
          "<strong>Requisito patrimonial (Net Asset Requirement):</strong> demonstrar ser <strong>absolutamente titular beneficiário</strong> de ativos líquidos não inferiores a <strong>HKD 30.000.000</strong>, ou equivalente em outras moedas, durante <strong>todo o período de 6 meses imediatamente anteriores</strong> à data do pedido de avaliação. <em>A exigência formal de verificação por CPA de Hong Kong ou profissional aprovado deve ser confirmada.</em>",
          "<strong>Requisito de investimento:</strong> <strong>HKD 27.000.000 ou mais</strong> em ativos permissíveis, mais <strong>HKD 3.000.000</strong> no CIES Investment Portfolio — total de <strong>HKD 30.000.000</strong>.",
          "<strong>Ativos financeiros permissíveis:</strong> <strong>ações</strong> listadas na Bolsa de Hong Kong e negociadas em HKD ou RMB <em>(restrição de moeda a confirmar)</em>; <strong>títulos de dívida</strong>; <strong>certificados de depósito (CD)</strong> — sujeitos a <strong>teto de HKD 3.000.000</strong>; <strong>dívida subordinada</strong>; <strong>esquemas de investimento coletivo elegíveis</strong> — fundos autorizados pela SFC, OFCs, REITs; e <strong>limited partnership funds (LPFs)</strong> registados em Hong Kong.",
          "<strong>Imóveis:</strong> imóveis <strong>não residenciais</strong> são computáveis até o <strong>teto de HKD 10.000.000</strong>. <em>Desde 16 de outubro de 2024 (medida de aprimoramento do Policy Address 2024), imóveis residenciais adquiridos por preço igual ou superior a HKD 50.000.000 também passaram a ser computáveis, até o mesmo teto de HKD 10.000.000 — ponto relevante para clientes brasileiros que deve ser verificado obrigatoriamente na página de Enhancement Measures do familyofficehk.gov.hk.</em>",
          "<strong>Apólices de seguro elegíveis:</strong> mencionadas em material de mercado e comercializadas por AIA, Manulife e HSBC como produtos CIES, <strong>mas não localizadas explicitamente entre os ativos permissíveis</strong> nas fontes oficiais consultadas. <em>Verificar em newcies.gov.hk antes de estruturar.</em>",
          "<strong>Idade:</strong> 18 anos ou mais.",
          "<strong>Elegíveis:</strong> nacionais estrangeiros; residentes de Macau; residentes chineses de Taiwan; e nacionais chineses que tenham obtido residência permanente em país estrangeiro.",
          "<strong>NÃO elegíveis:</strong> residentes do Continente (Mainland China) que não possuam residência permanente no exterior — <strong>diferença relevante em relação ao Top Talent Pass Scheme</strong>. Também não elegíveis: nacionais de Afeganistão, Cuba, Coreia do Norte, Laos, Nepal e Vietnã.",
          "Sem antecedentes criminais nem registo adverso de imigração; capacidade de sustentar-se e aos dependentes.",
        ],
        process: [
          {
            step: "Pedido de Net Asset Assessment",
            detail:
              "Comprovação de <strong>HKD 30.000.000 de patrimônio líquido durante 6 meses</strong>, junto ao <strong>New CIES Office / InvestHK</strong>. Resulta na emissão do <strong>Certifying Proof for Net Asset Requirement</strong>; o Office notifica o Director of Immigration.",
            timing: "A confirmar",
          },
          {
            step: "Entry Application ao Director of Immigration",
            detail:
              "Submissão do pedido de entrada ao <strong>Immigration Department</strong>, dentro do prazo de validade do certificado.",
            timing: "Dentro da validade do certificado",
          },
          {
            step: "Approval-in-Principle (AIP)",
            detail:
              "Avaliação sob a perspectiva de imigração e concessão do <strong>Approval-in-Principle</strong>.",
            timing: "A confirmar",
          },
          {
            step: "Entry permit como visitante",
            detail:
              "Emissão de visto ou <em>entry permit</em> para entrada como <strong>VISITANTE por até 180 dias</strong>, destinado a permitir a realização do investimento comprometido.",
            timing: "Até 180 dias",
          },
          {
            step: "Realização do investimento",
            detail:
              "Investimento de <strong>HKD 30.000.000</strong> — HKD 27 milhões em ativos permissíveis e HKD 3 milhões no CIES Investment Portfolio. Prazo prático: dentro dos 180 dias do <em>entry permit</em>.",
            timing: "Dentro dos 180 dias",
          },
          {
            step: "Verificação do Investment Requirement",
            detail:
              "Pedido de verificação junto ao <strong>InvestHK</strong>, resultando na emissão do <strong>Certifying Proof for Fulfillment of Investment Requirements</strong>.",
            timing: "A confirmar",
          },
          {
            step: "Apresentação ao ImmD e Formal Approval",
            detail:
              "Apresentação do <em>Certifying Proof</em> ao Immigration Department, dentro do seu prazo de validade, seguida de avaliação final e <strong>Formal Approval</strong>, com concessão do visto de residência.",
            timing: "A confirmar",
          },
          {
            step: "Registo do HKID",
            detail:
              "Registo do Hong Kong Identity Card junto ao Registration of Persons Office, dentro de <strong>30 dias</strong> da chegada. <em>Prazo a confirmar.</em>",
            timing: "30 dias",
          },
          {
            step: "Extensões periódicas",
            detail:
              "Mediante comprovação de manutenção do investimento. <em>Padrão histórico de 2 + 3 + 3 anos, a confirmar.</em>",
            timing: "Periódicas",
          },
          {
            step: "Right of Abode",
            detail:
              "Após <strong>7 anos</strong> de residência ordinária contínua, pedido de Right of Abode; alternativamente, <em>unconditional stay</em>.",
            timing: "7 anos",
          },
        ],
        costs: [
          {
            item: "Investimento em ativos permissíveis",
            value: "≥ HKD 27.000.000",
          },
          {
            item: "CIES Investment Portfolio (HKIC)",
            value: "HKD 3.000.000",
            note: "Obrigatório; não resgatável durante a permanência no esquema; retorno não garantido",
          },
          {
            item: "TOTAL de investimento",
            value: "HKD 30.000.000",
          },
          {
            item: "Taxa de aplicação de visto — requerente principal",
            value: "HKD 600",
            note: "Não reembolsável; nova estrutura em vigor desde 11h00 de 26/fev/2025",
          },
          {
            item: "Taxa de aplicação — cada dependente",
            value: "HKD 600",
            note: "Não reembolsável",
          },
          {
            item: "Taxa de emissão de visto — validade acima de 180 dias",
            value: "HKD 1.300",
            note: "A taxa anterior era fixa em HKD 230",
          },
          {
            item: "Taxa de emissão — validade de até 180 dias",
            value: "HKD 600",
          },
          {
            item: "Mudança de condições de estada ou extensão",
            value: "HKD 600 por pedido",
          },
          {
            item: "Taxa do New CIES Office pela Net Asset Assessment",
            value: "Não identificada",
            note: "Nenhuma taxa localizada nas fontes; verificar",
          },
          {
            item: "Honorários de CPA ou auditor para certificação patrimonial",
            value: "Custo de mercado",
          },
        ],
        sections: [
          {
            title: "O CIES Investment Portfolio",
            body: `Constituído e gerido pela <strong>Hong Kong Investment Corporation Limited (HKIC)</strong>.

Investe em <strong>empresas e projetos com nexo em Hong Kong</strong>, com vistas a apoiar o desenvolvimento das <strong>indústrias de inovação e tecnologia</strong> e de outras indústrias estratégicas.

<strong>O aporte de HKD 3 milhões é não resgatável durante a permanência no esquema, e o retorno não é garantido.</strong> É a parcela do investimento com risco e liquidez menos favoráveis, e deve ser tratada, no modelo financeiro, como custo de entrada e não como investimento.`,
          },
          {
            title: "Regras de manutenção e saída do regime",
            body: `<strong>Manutenção:</strong> o investimento deve ser mantido durante todo o período de estada sob o esquema.

<strong>Realocação (<em>switching</em>):</strong> é permitido realocar entre ativos permissíveis, mas <strong>não é permitido retirar capital ou realizar lucros para fora do portfólio</strong> durante o período.

<strong>Queda de valor:</strong> se o valor de mercado cair, <strong>não há obrigação de aporte adicional</strong> (<em>no top-up required</em>).

<strong>Após obter o Right of Abode</strong> ou a <em>unconditional stay</em>, o investidor deixa de estar sujeito à manutenção do portfólio.

<strong>Não há imposto de saída nem <em>clawback</em> fiscal</strong> em Hong Kong.

<em>Itens a verificar nas «Rules on Portfolio Maintenance» em newcies.gov.hk: se dividendos, juros e cupões podem ser retirados livremente durante o período.</em>`,
          },
          {
            title: "Regras de família",
            body: `<strong>Cônjuge</strong> e <strong>filhos solteiros dependentes com menos de 18 anos</strong> podem ser incluídos como dependentes.

Cada dependente paga as próprias taxas de <strong>HKD 600</strong> de aplicação, mais a taxa de emissão.

<strong>Não foi identificada</strong>, no New CIES, a exigência de aumento do valor de investimento por dependente que existia no CIES original. <em>A confirmar.</em>

<strong>Dependentes computam o próprio período de 7 anos</strong> para o Right of Abode.`,
          },
        ],
        brazilNote: `Brasileiros são <strong>nacionais estrangeiros</strong> e, portanto, elegíveis ao New CIES.

<strong>O ponto decisivo, contudo, não é a elegibilidade migratória — é a posição fiscal brasileira.</strong> Hong Kong é <strong>jurisdição de tributação favorecida</strong> na IN RFB 1.037/2010, e enquanto o investidor for residente fiscal no Brasil:
· qualquer entidade de Hong Kong que ele controle tem lucros <strong>tributados a 15% ao ano no Brasil</strong>, independentemente de distribuição (Lei 14.754/2023, art. 5.º, §1.º, I);
· os ativos financeiros mantidos em Hong Kong são <strong>reportáveis na DIRPF</strong> e, acima dos limiares, na <strong>CBE</strong> ao Banco Central;
· rendimentos de aplicações financeiras no exterior são tributados a <strong>15%</strong> anualmente.

<strong>O visto não encerra a residência fiscal brasileira.</strong> Sem <strong>CSDP</strong> (até o último dia de fevereiro do ano seguinte à saída) e <strong>DSDP</strong> (no prazo da DIRPF), o titular permanece residente fiscal brasileiro, tributado em bases universais — e, como não há CDT Brasil–Hong Kong, <strong>não existe tie-breaker convencional</strong> para resolver a dupla residência.

<strong>Após a saída fiscal</strong>, os rendimentos de fonte brasileira passam a sofrer tributação exclusiva na fonte — e, por Hong Kong ser JTF, à alíquota de <strong>25%</strong> em vez de 15%, com perda dos benefícios da Resolução CMN 4.373.

<strong>Sequência recomendada:</strong> a formalização da saída fiscal deve ser planejada em conjunto com o investimento, não depois dele.`,
        sources: [
          {
            t: "New CIES · Visão geral do processo",
            u: "https://www.newcies.gov.hk/en/application-procedures/overview/",
          },
          {
            t: "New CIES · Critérios de elegibilidade",
            u: "https://www.newcies.gov.hk/en/eligibility-criteria/",
          },
          {
            t: "New CIES · Investment Requirement",
            u: "https://www.newcies.gov.hk/en/application-procedures/application-to-investhk/investment-requirement/",
          },
          {
            t: "New CIES · Nova medida em vigor desde 1 de março de 2026",
            u: "https://www.newcies.gov.hk/en/new-measures/",
          },
          {
            t: "Immigration Department · New Capital Investment Entrant Scheme",
            u: "https://www.immd.gov.hk/eng/services/visas/newcies.html",
          },
          {
            t: "InvestHK / FamilyOfficeHK · Enhancement Measures do New CIES",
            u: "https://www.familyofficehk.gov.hk/en/new-capital-investment-entrant-scheme/index.html",
          },
          {
            t: "Gov.HK · Nova taxa de aplicação e de visto para esquemas de admissão (26/fev/2025)",
            u: "https://www.info.gov.hk/gia/general/202502/26/P2025022600221.htm",
          },
          {
            t: "Morrison Foerster · O New CIES de Hong Kong",
            u: "https://www.mofo.com/resources/insights/240115-hong-kong-capital-investment-cies",
          },
        ],
      },
      {
        name: "Top Talent Pass Scheme (TTPS)",
        status: "changed",
        legalBasis:
          "Esquema administrativo do <strong>Immigration Department</strong>, sob a Immigration Ordinance, Cap. 115, e as Immigration Regulations, Cap. 115A. Lançado em <strong>28 de dezembro de 2022</strong>. Apoio institucional: <strong>Hong Kong Talent Engage (HKTE)</strong>.",
        desc: `Esquema de admissão de talentos que <strong>não exige oferta de emprego prévia</strong> em Hong Kong — característica que o distingue das demais rotas.

<strong>Três categorias:</strong>
· <strong>Categoria A</strong> — renda anual de <strong>HKD 2.500.000 ou mais</strong> (ou equivalente em moeda estrangeira) no ano imediatamente anterior ao pedido. <strong>Sem cota.</strong> Estada inicial de <strong>36 meses</strong>.
· <strong>Categoria B</strong> — graduado (bacharelado em regime integral) de universidade elegível, <strong>com 3 anos ou mais de experiência profissional</strong> nos últimos 5 anos. <strong>Sem cota.</strong> Estada inicial de <strong>24 meses</strong>.
· <strong>Categoria C</strong> — graduado de universidade elegível <strong>com menos de 3 anos de experiência</strong> nos últimos 5 anos (graduação nos últimos 5 anos). <strong>Cota anual de 10.000.</strong> Estada inicial de <strong>24 meses</strong>.

<strong>Duas correções a materiais em circulação:</strong>
1. a estada inicial da <strong>Categoria A foi elevada de 24 para 36 meses</strong>; as Categorias B e C permanecem em 24 meses — a afirmação genérica de que «o visto passou a 3 anos» vale <strong>apenas para a Categoria A</strong>;
2. as Categorias B e C <strong>não estão mais limitadas às «top 100 universidades»</strong>: aplica-se a <strong>lista agregada de universidades elegíveis</strong>, atualizada anualmente.`,
        kv: [
          { l: "Categoria A — renda", v: "HKD 2.500.000/ano" },
          { l: "Categoria A — estada inicial", v: "36 meses" },
          { l: "Categoria A e B — cota", v: "Sem cota" },
          { l: "Categoria C — cota anual", v: "10.000" },
          { l: "Categorias B e C — estada", v: "24 meses" },
          { l: "Oferta de emprego", v: "Não exigida" },
          { l: "Universidades elegíveis (2026)", v: "200 instituições" },
          { l: "Extensão típica", v: "36 meses" },
          { l: "Via top-tier (2+6)", v: "6 anos, renda ≥ HKD 2M" },
          { l: "Exclusive Survey", v: "Obrigatória desde 30/jan/2026" },
          { l: "Taxa de aplicação", v: "HKD 600" },
        ],
        requirements: [
          "<strong>Categoria A:</strong> renda anual de <strong>HKD 2.500.000 ou mais</strong> no ano imediatamente anterior à data do pedido.",
          "<strong>Categoria B:</strong> bacharelado em regime integral de universidade constante da lista agregada, <strong>mais 3 anos ou mais de experiência profissional</strong> nos últimos 5 anos anteriores ao pedido.",
          "<strong>Categoria C:</strong> graduação de universidade elegível nos últimos 5 anos, com <strong>menos de 3 anos de experiência</strong>. Sujeita a <strong>cota anual de 10.000</strong>.",
          "Não possuir <strong>antecedentes criminais</strong> nem registo adverso de imigração.",
          "Ter <strong>meios suficientes</strong> para sustentar-se e aos dependentes sem recurso a fundos públicos.",
          "<strong>Não ser nacional</strong> de Afeganistão, Cuba, Coreia do Norte, Laos, Nepal ou Vietnã (restrição usual dos esquemas de admissão de Hong Kong).",
          "Residentes do Continente (Mainland) <strong>podem</strong> aplicar ao TTPS — ao contrário do New CIES.",
          "<strong>Não é necessário ter oferta de emprego</strong> em Hong Kong no momento do pedido.",
        ],
        process: [
          {
            step: "Preparação da documentação",
            detail:
              "Passaporte, comprovação de renda (Categoria A) ou diploma e comprovação de experiência (Categorias B e C), certidões.",
            timing: "—",
          },
          {
            step: "Submissão online",
            detail:
              "Via <em>Immigration Department e-Services</em>, ou aplicação em papel.",
            timing: "—",
          },
          {
            step: "Pagamento da taxa de aplicação",
            detail: "HKD 600, não reembolsável.",
            timing: "—",
          },
          {
            step: "Processamento e decisão",
            detail:
              "Pelo Immigration Department. <em>O prazo-alvo divulgado historicamente é de cerca de 4 semanas para casos completos; verificar em immd.gov.hk.</em>",
            timing: "≈4 semanas (a confirmar)",
          },
          {
            step: "Emissão do visto ou entry permit",
            detail: "Mediante pagamento da taxa de emissão.",
            timing: "—",
          },
          {
            step: "Entrada e registo do HKID",
            detail:
              "Registo do Hong Kong Identity Card junto ao Registration of Persons Office, dentro de <strong>30 dias</strong> da chegada. <em>Prazo a confirmar.</em>",
            timing: "30 dias",
          },
          {
            step: "Exclusive Survey — obrigatória desde 30/jan/2026",
            detail:
              "<strong>Todos os titulares de TTPS devem completar uma «Exclusive Survey» online ANTES de submeter qualquer pedido de extensão.</strong> A pesquisa recolhe dados de renda e de resultados de integração. É <strong>etapa obrigatória e bloqueante</strong> do procedimento.",
            timing: "Antes de cada extensão",
          },
          {
            step: "Pedido de extensão",
            detail:
              "Desde <strong>1 de novembro de 2024</strong>, o pedido pode ser apresentado com até <strong>3 meses (90 dias) de antecedência</strong> do vencimento — antes eram 4 semanas.",
            timing: "Até 90 dias antes",
          },
        ],
        costs: [
          {
            item: "Taxa de aplicação",
            value: "HKD 600",
            note: "Nova taxa introduzida em 26/fev/2025; antes não havia taxa de aplicação",
          },
          {
            item: "Taxa de emissão de visto — validade acima de 180 dias",
            value: "HKD 1.300",
            note: "A taxa anterior era fixa em HKD 230",
          },
          {
            item: "Taxa de emissão — validade de até 180 dias",
            value: "HKD 600",
          },
          {
            item: "Extensão ou mudança de condições",
            value: "HKD 600 por pedido",
          },
          {
            item: "Cartão de identidade de Hong Kong (HKID)",
            value: "Historicamente gratuito",
            note: "A confirmar",
          },
        ],
        sections: [
          {
            title: "A lista de universidades elegíveis — atualização de 2026",
            body: `<strong>Anúncio governamental em 28 de dezembro de 2025; lista em vigor desde 1 de janeiro de 2026.</strong>

<strong>200 instituições</strong> na lista de 2026, contra 199 em 2025.

<strong>Metodologia:</strong> consolidação dos rankings <strong>Times Higher Education, QS, U.S. News e Shanghai ARWU</strong>, mantendo <strong>sub-listas dedicadas</strong> para hotelaria (<em>hospitality management</em>), arte e design, e as 20 melhores universidades do Continente.

<strong>Alterações de 2026:</strong> inclusão da <strong>IE University</strong> (Espanha); <strong>remoção</strong> de École Polytechnique, Université Grenoble Alpes, Université Sorbonne Paris Cité (USPC) e University of Freiburg.

<strong>Item de verificação indispensável para o cliente brasileiro:</strong> a <strong>presença de universidades brasileiras na lista não pôde ser confirmada</strong>. USP e UNICAMP historicamente figuram em rankings globais próximos das faixas de corte. <strong>Verificar obrigatoriamente a lista nominal em immd.gov.hk/eng/services/visas/TTPS.html antes de aconselhar cliente brasileiro sobre as Categorias B e C.</strong>

Para a <strong>Categoria A</strong>, a lista é irrelevante — o critério é exclusivamente de renda (HKD 2.500.000 no ano anterior), o que a torna a via mais direta para o público de family office.`,
          },
          {
            title: "Extensão — o que muda no primeiro pedido",
            body: `Ao término da estada inicial, o titular deve apresentar ao Immigration Department <strong>informação e documentação concretas</strong> comprovando que:
· <strong>assumiu emprego em Hong Kong com renda estável</strong>; <strong>OU</strong>
· <strong>constituiu ou ingressou em um negócio em Hong Kong</strong>.

O emprego deve ser de <strong>nível compatível com portador de diploma superior</strong> e a remuneração deve estar <strong>em nível de mercado</strong>.

<strong>Duração da extensão:</strong> normalmente <strong>36 meses adicionais</strong>.

<strong>Via «top-tier employment stream» (2 + 6):</strong> quem tenha permanecido em Hong Kong sob o TTPS por <strong>2 anos ou mais</strong> <strong>e</strong> tenha rendimento tributável para fins de Salaries Tax de <strong>HKD 2.000.000 ou mais</strong> no ano de avaliação anterior obtém extensão normalmente concedida por <strong>6 anos</strong>.

<strong>Novo requisito de conformidade — desde 30 de janeiro de 2026:</strong> todos os titulares devem completar a <strong>«Exclusive Survey»</strong> online <strong>antes</strong> de submeter qualquer pedido de extensão. É etapa <strong>bloqueante</strong>.`,
          },
          {
            title: "Regras de família",
            body: `<strong>Cônjuge</strong> — incluindo, por política do Immigration Department, parceiro de união civil ou parceria registada de mesmo sexo, desde a decisão <em>QT v. Director of Immigration</em> (2018). <em>A confirmar.</em>

<strong>Filhos solteiros dependentes menores de 18 anos.</strong>

Dependentes recebem <strong>visto de dependente com estada coincidente</strong> com a do requerente principal.

Dependentes têm, em regra, <strong>direito irrestrito de trabalhar e estudar</strong> em Hong Kong — o <em>dependant visa</em> de Hong Kong não impõe restrição de emprego, ao contrário de vários outros regimes asiáticos. <em>A confirmar.</em>

<strong>Pais e filhos com 18 anos ou mais não são elegíveis</strong> como dependentes.

<strong>O tempo de residência dos dependentes também conta</strong> para o cômputo dos 7 anos rumo ao Right of Abode.`,
          },
          {
            title: "Como se sai do regime",
            body: `<strong>Não requerimento de extensão</strong> → a estada expira; o titular deve deixar Hong Kong.

<strong>Indeferimento da extensão</strong> por não comprovação de emprego ou negócio → mesma consequência.

<strong>Não há penalidade nem imposto de saída</strong> em Hong Kong; apenas o <em>tax clearance</em> de Salaries Tax, se houver emprego local (formulário IR56G, com notificação do empregador ao IRD com 1 mês de antecedência e retenção de pagamentos até a liberação).`,
          },
        ],
        brazilNote: `O TTPS é, para o brasileiro, a rota de <strong>menor custo e maior simplicidade</strong> entre as de Hong Kong — <strong>não exige investimento nem oferta de emprego prévia</strong>.

<strong>Categoria A</strong> é a via mais direta para o público de family office: basta comprovar renda anual de <strong>HKD 2.500.000</strong> (aproximadamente USD 320.000) no ano anterior, sem depender de lista de universidades. Concede <strong>36 meses</strong> de estada inicial.

<strong>Categorias B e C</strong> dependem de a universidade brasileira constar da lista agregada de 200 instituições — <strong>ponto que deve ser verificado nominalmente antes de qualquer orientação</strong>.

<strong>Atenção ao requisito de extensão:</strong> ao fim da estada inicial, é necessário comprovar <strong>emprego em Hong Kong com renda estável, ou negócio constituído em Hong Kong</strong>. O TTPS não é rota de residência passiva — exige integração económica efetiva no segundo ciclo.

<strong>Posição fiscal:</strong> valem integralmente as observações do dossiê fiscal — Hong Kong é jurisdição de tributação favorecida para o Brasil, e a residência migratória não encerra a residência fiscal brasileira sem <strong>CSDP</strong> e <strong>DSDP</strong>.`,
        sources: [
          {
            t: "Immigration Department · Top Talent Pass Scheme",
            u: "https://www.immd.gov.hk/eng/services/visas/TTPS.html",
          },
          {
            t: "Immigration Department · TTPS FAQ",
            u: "https://www.immd.gov.hk/eng/faq/TTPS.html",
          },
          {
            t: "Hong Kong Talent Engage · Lista agregada de universidades elegíveis atualizada",
            u: "https://www.hkengage.gov.hk/en/media/news/top-talent-pass-scheme-aggregate-list-of-eligible-universities-updated",
          },
          {
            t: "Gov.HK · Atualização anual da lista agregada de universidades (28/dez/2025)",
            u: "https://www.info.gov.hk/gia/general/202512/28/P2025122400232.htm",
          },
          {
            t: "Gov.HK · Medidas para aprimorar o TTPS e o QMAS (1/nov/2024)",
            u: "https://www.info.gov.hk/gia/general/202411/01/P2024110100288.htm",
          },
          {
            t: "VisaHQ · Novo passo de conformidade para titulares de TTPS (6/fev/2026)",
            u: "https://www.visahq.com/news/2026-02-06/hk/new-compliance-step-for-top-talent-pass-holders-mandatory-online-survey-before-visa-extension/",
          },
        ],
      },
      {
        name: "QMAS e demais esquemas de admissão",
        status: "changed",
        legalBasis:
          "Esquemas administrativos do <strong>Immigration Department</strong>, sob a Immigration Ordinance, Cap. 115. QMAS lançado em <strong>2006</strong>; reforma do General Points Test com efeito a partir de <strong>1 de novembro de 2024</strong>.",
        desc: `<strong>Quality Migrant Admission Scheme (QMAS)</strong> — esquema de admissão baseado em mérito, que <strong>não exige oferta de emprego prévia</strong>.

<strong>Reforma confirmada, com efeito desde 1 de novembro de 2024:</strong> o Governo reformou o <strong>General Points Test (GPT)</strong>, adotando critérios «mais objetivos e claros» e simplificando o processo de aplicação e seleção.

<strong>Alterações confirmadas:</strong>
1. <strong>Eliminação da cota anual sob o GPT reformado</strong> — «<em>There will be no annual quotas under the enhanced GPT</em>». <strong>Correção a materiais em circulação:</strong> a cota do QMAS <strong>não «retornou»</strong> — ela foi <strong>abolida</strong> para o GPT. <em>A confirmar se a cota permanece aplicável ao Achievement-based Points Test.</em>
2. <strong>Substituição do sistema de pontuação item a item por um questionário de avaliação</strong> — sistema binário de verdadeiro/falso.
3. <strong>12 critérios de avaliação sob 6 aspectos:</strong> idade; qualificação académica; proficiência linguística; experiência profissional; <strong>renda anual</strong> (novo); e <strong>titularidade de negócio</strong> (novo).
4. <strong>Remoção do aspecto «background familiar»</strong>, substituído pelos dois novos critérios.
5. <strong>Limiar de submissão:</strong> o candidato pode submeter o pedido se atender a <strong>pelo menos 6 dos 12 critérios</strong>.
6. A seleção permanece <strong>baseada em mérito</strong>, com preferência aos candidatos que satisfaçam mais critérios.

<em>Item de verificação obrigatória: o conteúdo específico de cada um dos 12 critérios — limiares de idade, nível de diploma, valor de renda anual mínima, percentual de participação societária — não pôde ser apurado. Verificar em immd.gov.hk e no formulário do questionário.</em>`,
        kv: [
          { l: "QMAS — cota anual (GPT)", v: "Abolida em 1/nov/2024" },
          { l: "QMAS — critérios", v: "12, sob 6 aspectos" },
          { l: "QMAS — limiar de submissão", v: "Mínimo 6 dos 12 critérios" },
          { l: "QMAS — oferta de emprego", v: "Não exigida" },
          { l: "QMAS — taxa", v: "HKD 600" },
          { l: "GEP — público", v: "Estrangeiros e empreendedores" },
          { l: "ASMTP — público", v: "Residentes do Continente" },
          { l: "IANG — benefício", v: "12 meses sem condições" },
          { l: "TechTAS — mecânica", v: "Cota alocada à empresa" },
        ],
        requirements: [
          "<strong>QMAS — pré-requisitos obrigatórios</strong> (ambas as vias): idade de 18 anos ou mais; capacidade de sustentar-se e aos dependentes sem recurso a fundos públicos; sem antecedentes criminais nem registo adverso de imigração; bom caráter; domínio de <strong>chinês (cantonês ou mandarim) ou inglês</strong> em nível suficiente; diploma de bacharelado de instituição reconhecida (ou qualificação profissional equivalente comprovada). <em>Conteúdo a confirmar em immd.gov.hk.</em>",
          "<strong>QMAS — General Points Test:</strong> atender a <strong>pelo menos 6 dos 12 critérios</strong> do questionário de avaliação, distribuídos por idade, qualificação académica, proficiência linguística, experiência profissional, renda anual e titularidade de negócio.",
          "<strong>QMAS — Achievement-based Points Test:</strong> via alternativa destinada a indivíduos com <strong>realização excecional</strong> — prémio de reconhecimento internacional (Nobel, medalha olímpica, prémio nacional ou internacional de destaque) ou contribuição significativa e reconhecida ao seu campo. <em>Pontuação de tudo-ou-nada; detalhes a confirmar.</em>",
          "<strong>QMAS — não elegíveis:</strong> nacionais de Afeganistão, Cuba, Coreia do Norte, Laos, Nepal e Vietnã.",
          "<strong>QMAS — não é exigida oferta de emprego prévia.</strong>",
        ],
        process: [
          {
            step: "Autoavaliação pelo questionário",
            detail:
              "Preenchimento do questionário de autoavaliação dos 12 critérios. É necessário atingir <strong>6 ou mais</strong> para submeter.",
            timing: "—",
          },
          {
            step: "Submissão do pedido",
            detail:
              "Submissão ao Immigration Department, com documentos comprobatórios e taxa de <strong>HKD 600</strong>.",
            timing: "—",
          },
          {
            step: "Avaliação e seleção",
            detail:
              "Seleção baseada em mérito pelo Immigration Department, com aconselhamento do <strong>Advisory Committee on Admission of Quality Migrants and Professionals</strong>. <em>Historicamente, processos de vários meses.</em>",
            timing: "Meses (a confirmar)",
          },
          {
            step: "Approval-in-Principle",
            detail:
              "Concedido o AIP, o candidato deve <strong>comparecer pessoalmente em Hong Kong</strong> para a etapa seguinte. <em>A confirmar.</em>",
            timing: "—",
          },
          {
            step: "Formal approval e emissão do visto",
            detail:
              "Aprovação formal e concessão do visto. <em>Estada inicial historicamente de 24 meses, com padrão 2-3-3; verificar se foi alterada para 36 meses.</em>",
            timing: "A confirmar",
          },
        ],
        costs: [
          { item: "QMAS — taxa de aplicação", value: "HKD 600" },
          {
            item: "Taxa de emissão de visto — acima de 180 dias",
            value: "HKD 1.300",
          },
          {
            item: "Taxa de emissão — até 180 dias",
            value: "HKD 600",
          },
          {
            item: "Extensão ou mudança de condições",
            value: "HKD 600 por pedido",
          },
        ],
        sections: [
          {
            title: "General Employment Policy (GEP)",
            body: `<strong>Público:</strong> profissionais estrangeiros (exceto residentes do Continente) e <strong>empreendedores</strong>.

<strong>Duas vertentes:</strong>
· <em>employment as professionals</em> — exige <strong>oferta de emprego</strong> de empregador em Hong Kong, com função que não possa ser prontamente preenchida localmente, remuneração de mercado e qualificação compatível;
· <em>entry for investment</em> — estabelecer ou ingressar em negócio em Hong Kong, com plano de negócios e contribuição económica substancial.

<strong>Estada inicial:</strong> historicamente 24 meses. <em>Verificar se foi elevada a 36 meses.</em>
<strong>Padrão de extensão:</strong> 2-3-3 anos (ou 3-3).
<strong>Sem cota.</strong>

<em>Toda esta seção deve ser verificada em immd.gov.hk.</em>`,
          },
          {
            title: "ASMTP, IANG e TechTAS",
            body: `<strong>Admission Scheme for Mainland Talents and Professionals (ASMTP)</strong> — para <strong>residentes do Continente</strong>. Critérios substancialmente idênticos ao GEP: oferta de emprego, qualificação e remuneração de mercado. <strong>Sem cota.</strong>

<strong>Immigration Arrangements for Non-local Graduates (IANG)</strong> — para não locais que obtiveram <strong>grau de bacharel ou superior</strong> em curso presencial de tempo integral em instituição de ensino superior de Hong Kong.
<strong>Benefício:</strong> <strong>12 meses de estada sem condições</strong> (<em>unconditional stay</em>) para procurar emprego, <strong>sem necessidade de oferta prévia</strong> — pedido dentro de 6 meses da graduação, para <em>non-local fresh graduates</em>.
<em>Extensão para 24 meses anunciada no Policy Address de 2023/2024, e ampliação-piloto para graduados de campi de universidades de Hong Kong na Grande Baía (GBA) — ambas a verificar.</em>

<strong>Technology Talent Admission Scheme (TechTAS)</strong> — administrado pela <strong>Innovation and Technology Commission (ITC)</strong> em conjunto com o Immigration Department.
<strong>Mecânica:</strong> a empresa de tecnologia elegível obtém <strong>cota</strong> junto ao ITC (<em>quota allotment</em>) e então patrocina profissionais de tecnologia sob um <em>fast-track</em> de imigração.
<strong>Áreas cobertas:</strong> IA, biotecnologia, cibersegurança, cidade inteligente, fintech, ciência de materiais, robótica, dados.
<strong>Requisito de treinamento local</strong> vinculado à cota, com contratação de residentes locais. <em>Verificar se ainda vigente.</em>

<em>Existem ainda o Technology Talent Pass, o Admission Scheme for the Second Generation of Chinese Hong Kong Permanent Residents (ASSG) e o esquema para cônjuges e dependentes.</em>`,
          },
        ],
        brazilNote: `Para o brasileiro, o <strong>QMAS</strong> é alternativa ao TTPS quando não se satisfaz o critério de renda da Categoria A nem a lista de universidades das Categorias B e C. A <strong>abolição da cota anual</strong> sob o GPT reformado, desde 1/nov/2024, removeu o principal gargalo histórico do esquema.

O <strong>GEP</strong> exige oferta de emprego ou plano de negócios com contribuição económica substancial — é a via para quem já tem empregador ou pretende operar negócio em Hong Kong.

O <strong>ASMTP</strong> não se aplica a brasileiros (é para residentes do Continente). O <strong>IANG</strong> aplica-se apenas a quem se graduou em instituição de Hong Kong. O <strong>TechTAS</strong> depende de a empresa contratante obter cota junto ao ITC.

<strong>Em todos os casos</strong>, a residência migratória não encerra a residência fiscal brasileira — <strong>CSDP</strong> e <strong>DSDP</strong> permanecem indispensáveis, e a classificação de Hong Kong como jurisdição de tributação favorecida continua a produzir os efeitos descritos no dossiê fiscal.`,
        sources: [
          {
            t: "Immigration Department · QMAS FAQ",
            u: "https://www.immd.gov.hk/eng/faq/QMAS.html",
          },
          {
            t: "Immigration Department · Esquemas de admissão de talentos, profissionais e empreendedores",
            u: "https://www.immd.gov.hk/eng/useful_information/admission-schemes-talents-professionals-entrepreneurs.html",
          },
          {
            t: "news.gov.hk · Talent and migration plans refined (1/nov/2024)",
            u: "https://www.news.gov.hk/eng/2024/11/20241101/20241101_125039_861.html",
          },
          {
            t: "Fragomen · Hong Kong — atualizações do TTPS e do QMAS",
            u: "https://www.fragomen.com/insights/hong-kong-sar-key-updates-for-top-talent-pass-scheme-and-quality-migrant-scheme-introduced.html",
          },
        ],
      },
      {
        name: "Right of Abode, nacionalidade e o passaporte da RAEHK",
        status: "risk",
        legalBasis:
          "<strong>Basic Law da RAEHK, art. 24</strong> — define as categorias de residentes permanentes. <strong>Immigration Ordinance, Cap. 115, Schedule 1</strong> — implementação, incluindo o parágrafo 7 (perda do status). Nacionalidade: <strong>Nationality Law of the People's Republic of China (1980)</strong>, aplicada em Hong Kong desde 1/jul/1997 conforme o Anexo III da Basic Law e a Explicação do Comité Permanente da Assembleia Popular Nacional de 15 de maio de 1996.",
        desc: `<strong>Aquisição do Right of Abode por pessoa NÃO de nacionalidade chinesa</strong> — o caso do brasileiro:
· ter entrado em Hong Kong com <strong>visto ou entry permit válido</strong> (TTPS, QMAS, New CIES, GEP);
· ter <strong>residido ordinariamente (<em>ordinarily resided</em>) em Hong Kong por período contínuo de não menos de 7 anos</strong>;
· ter tomado Hong Kong como seu <strong>lugar de residência permanente</strong> — declaração juramentada, avaliando fatores como habitação habitual em Hong Kong, presença dos membros principais da família, ocupação razoável, e pagamento de impostos conforme a lei;
· estar em Hong Kong <strong>imediatamente antes</strong> do pedido.

<strong>Ponto favorável confirmado:</strong> «<strong>não é necessário estar fisicamente presente em Hong Kong durante os 7 anos inteiros; a lei apenas exige que a pessoa tenha sido <em>ordinarily resident</em> em Hong Kong durante esse período</strong>». O Director of Immigration exerce <strong>discricionariedade</strong> sobre o <em>Ordinary Residence Factor</em>, considerando a razão, a duração e a frequência de qualquer ausência, e se a pessoa tem residência habitual em Hong Kong.

<strong>Implicação prática:</strong> ausências não descaracterizam automaticamente a residência ordinária, mas há <strong>risco discricionário concreto</strong>. <strong>Não existe uma «regra de X dias» objetiva publicada.</strong>`,
        kv: [
          { l: "Right of Abode", v: "7 anos de residência ordinária" },
          { l: "Presença física integral", v: "Não exigida" },
          { l: "Regra numérica de dias", v: "Não publicada" },
          { l: "Perda do status (não chinês)", v: "36 meses de ausência contínua" },
          { l: "Discricionariedade na perda", v: "Nenhuma" },
          { l: "Passaporte da RAEHK", v: "Exige nacionalidade chinesa" },
          { l: "Dupla nacionalidade chinesa", v: "Não admitida" },
          { l: "Right to land (após perda)", v: "Estada incondicional" },
          { l: "Documento do HKPR não chinês", v: "HKID permanente" },
        ],
        requirements: [
          "Ter entrado em Hong Kong com <strong>visto ou entry permit válido</strong>.",
          "Ter <strong>residido ordinariamente em Hong Kong por período contínuo de não menos de 7 anos</strong>.",
          "Ter tomado Hong Kong como seu <strong>lugar de residência permanente</strong> — declaração juramentada, com avaliação de habitação habitual, presença da família, ocupação razoável e pagamento de impostos.",
          "Estar em Hong Kong <strong>imediatamente antes</strong> do pedido de status de residente permanente. <em>A confirmar.</em>",
          "<strong>O tempo de residência dos dependentes também conta</strong> para o próprio cômputo de 7 anos de cada um deles.",
        ],
        sections: [
          {
            title: "A regra dos 36 meses — perda automática e sem discricionariedade",
            body: `<strong>Immigration Ordinance, Schedule 1, parágrafo 7:</strong> um residente permanente da RAEHK que <strong>NÃO seja de nacionalidade chinesa</strong> <strong>PERDERÁ o seu status de HKPR</strong> se tiver estado ausente de Hong Kong por <strong>período contínuo de não menos de 36 meses</strong>, contado desde que deixou de ser <em>ordinarily resident</em> em Hong Kong.

<strong>O Director of Immigration NÃO TEM PODER DISCRICIONÁRIO</strong> para estender o período de 36 meses de ausência nem para dispensar o cumprimento por circunstâncias especiais ou imprevistas.

<strong>Consequência crítica para o brasileiro:</strong> o status de residente permanente de Hong Kong obtido por um brasileiro que permanece brasileiro <strong>NÃO é vitalício e NÃO é incondicional</strong>. É preciso <strong>retornar a Hong Kong antes de completar 36 meses ininterruptos de ausência</strong>, sob pena de perda automática.

<strong>«Right to land» — a rede de proteção:</strong> ao perder o status de HKPR pela regra dos 36 meses, o não chinês <strong>adquire automaticamente o <em>right to land</em></strong>, que confere <strong>estada incondicional</strong> (<em>unconditional stay</em>) — pode residir, trabalhar e estudar em Hong Kong sem restrição e <strong>não pode ser deportado</strong> —, mas <strong>não vota</strong> e <strong>não tem passaporte da RAEHK</strong>.
<em>Item de verificação prioritária: confirmar a existência e o conteúdo do right to land em immd.gov.hk/eng/services/roa/loss.html. Esta distinção é de importância central para o cliente brasileiro.</em>`,
          },
          {
            title: "Hong Kong não concede cidadania — e a China não admite dupla nacionalidade",
            body: `<strong>Não existe «cidadania de Hong Kong».</strong> Hong Kong é Região Administrativa Especial da República Popular da China. Existem apenas dois conceitos:
· <strong>Residência permanente (Right of Abode)</strong> — status de imigração, acessível ao estrangeiro após 7 anos;
· <strong>Nacionalidade chinesa</strong> — regida pela Nationality Law da RPC (1980).

<strong>O passaporte da RAEHK exige nacionalidade chinesa.</strong> Somente <strong>cidadãos chineses</strong> que sejam residentes permanentes de Hong Kong podem obter o <em>HKSAR Passport</em>. Um brasileiro com Right of Abode, mas sem nacionalidade chinesa, <strong>não tem direito ao passaporte da RAEHK</strong> — viaja com o passaporte brasileiro, portando o <strong>HKID permanente</strong> como prova de residência.

<strong>A China não admite dupla nacionalidade.</strong> O <strong>art. 3.º</strong> da Nationality Law dispõe que a RPC <strong>não reconhece dupla nacionalidade</strong> para nenhum cidadão chinês. O <strong>art. 9.º</strong> dispõe que o cidadão chinês que se estabelece no exterior e adquire voluntariamente nacionalidade estrangeira <strong>perde automaticamente</strong> a nacionalidade chinesa.

<strong>Naturalização como cidadão chinês em Hong Kong:</strong> é juridicamente possível (art. 7.º da Nationality Law — parentes próximos chineses, estabelecimento em território chinês, ou «outras razões legítimas»), mediante requerimento ao Immigration Department, que age como autoridade delegada do Ministério da Segurança Pública da RPC.

<strong>CONSEQUÊNCIA CONCRETA — advertência de máxima relevância:</strong> para obter o passaporte da RAEHK, o brasileiro precisaria <strong>naturalizar-se cidadão chinês</strong>. E a naturalização como cidadão chinês exige, na prática administrativa, a <strong>renúncia à nacionalidade estrangeira anterior</strong>.

Do lado brasileiro, a <strong>EC 131/2023</strong> alterou o art. 12, §4.º, II da Constituição, permitindo expressamente a manutenção da nacionalidade brasileira em caso de aquisição voluntária de outra, salvo pedido expresso do interessado. <em>Confirmar o texto vigente.</em> <strong>Mesmo assim, do lado chinês, a RPC exigirá a renúncia</strong> — de modo que o problema prático subsiste independentemente da posição brasileira.

<em>Toda esta seção deve ser verificada em immd.gov.hk/eng/services/chinese_nationality/index.html e no texto da Nationality Law.</em>`,
          },
          {
            title: "O desenho recomendável para o cliente brasileiro",
            body: `Na prática, o desenho usual é:

· obter o <strong>Right of Abode</strong> após 7 anos → <strong>HKID permanente</strong> (cartão com o símbolo «***» e o código «A»);
· <strong>manter exclusivamente a nacionalidade brasileira</strong> e viajar com passaporte brasileiro;
· solicitar o <strong>Hong Kong Document of Identity for Visa Purposes (HKDI)</strong> apenas se apátrida ou impossibilitado de obter passaporte nacional <em>(a confirmar)</em>;
· <strong>gerir ativamente a regra dos 36 meses</strong> — nunca completar 36 meses ininterruptos fora de Hong Kong;
· ter ciência de que, mesmo perdendo o HKPR, retém o <strong><em>right to land</em></strong> (estada incondicional) <em>(a confirmar)</em>.

<strong>Direitos do HKPR não chinês:</strong> residir, trabalhar e estudar sem restrição; não pode ser deportado nem ter a entrada recusada; direito de votar e de ser eleito em determinadas circunscrições funcionais, com restrições; acesso a serviços públicos, hospitais públicos e habitação pública em condições de residente. <strong>Não obtém passaporte da RAEHK</strong> nem acesso automático ao regime de isenção de visto do passaporte da RAEHK. <em>A confirmar.</em>`,
          },
        ],
        brazilNote: `<strong>Duas assimetrias definem a posição do brasileiro em Hong Kong:</strong>

1. <strong>O Right of Abode não é vitalício.</strong> A regra dos 36 meses de ausência contínua produz perda automática, sem qualquer discricionariedade do Director of Immigration. Quem obtém o status precisa <strong>gerir ativamente o calendário de retornos</strong> — não há dispensa por circunstância excecional.

2. <strong>O passaporte da RAEHK é inacessível sem naturalização chinesa</strong>, e a China não admite dupla nacionalidade. Para o brasileiro, o Right of Abode é um <strong>status de residência</strong>, não um segundo passaporte.

<strong>Do lado sucessório e fiscal:</strong>
· <strong>Hong Kong não cobra nada</strong> — Estate Duty abolido desde 11/fev/2006 e sem imposto sobre doações;
· <strong>ITCMD brasileiro:</strong> ativos mantidos em Hong Kong por residente fiscal brasileiro que venha a falecer, ou por ele doados, estão potencialmente sujeitos ao ITCMD estadual sob a regra transitória do art. 16 do ADCT (EC 132/2023). O STF, no Tema 825 (RE 851.108, 2021), decidiu que os Estados não podem cobrar sem lei complementar federal; a EC 132/2023 estabeleceu regra transitória, mas subsistem controvérsias sobre autoaplicabilidade e sobre a necessidade de lei estadual nova, com observância de anterioridade. <em>Verificar o status do PLP 108/2024 e a jurisprudência atual.</em>
· se o titular <strong>já for não residente</strong> e o herdeiro ou donatário <strong>também for não residente</strong>, a competência tende a não se firmar em nenhum Estado brasileiro — <strong>mas isso depende de o rompimento da residência ter sido efetivo e documentado</strong> (CSDP e DSDP).`,
        warning: `<strong>Gerir a regra dos 36 meses é obrigação permanente</strong>, não formalidade. O Director of Immigration <strong>não tem poder discricionário</strong> para relevar a ausência contínua de 36 meses — a perda do Right of Abode é automática.

<strong>O passaporte da RAEHK não é uma opção realista para o brasileiro:</strong> exigiria naturalização como cidadão chinês, e a China exige renúncia à nacionalidade anterior. Materiais que apresentem Hong Kong como via para «segunda cidadania» estão incorretos — Hong Kong oferece <strong>residência permanente</strong>, não cidadania.`,
        sources: [
          {
            t: "Immigration Department · Elegibilidade para o Right of Abode na RAEHK",
            u: "https://www.immd.gov.hk/eng/services/roa/eligible.html",
          },
          {
            t: "Immigration Department · Perda do status de residente permanente",
            u: "https://www.immd.gov.hk/eng/services/roa/loss.html",
          },
          {
            t: "Immigration Department · Right of Abode FAQ",
            u: "https://www.immd.gov.hk/eng/faq/faqroa.html",
          },
          {
            t: "Gov.HK · Resposta do Immigration Department sobre a regra dos 36 meses (29/mar/2022)",
            u: "https://www.info.gov.hk/gia/general/202203/29/P2022032900506.htm",
          },
          {
            t: "Gov.HK · LCQ16 — residentes permanentes de Hong Kong não chineses (1/set/2021)",
            u: "https://www.info.gov.hk/gia/general/202109/01/P2021090100418.htm",
          },
          {
            t: "CLIC · Residência de 7 anos",
            u: "https://www.clic.org.hk/en/topics/immigration/hk_permanent_residence/q1",
          },
        ],
      },
    ],
  },
};

export function getCountry(id: string): Country | undefined {
  return COUNTRIES[id as CountryId];
}
