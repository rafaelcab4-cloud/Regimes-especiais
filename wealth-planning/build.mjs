import fs from 'fs';
import path from 'path';

const HERE = path.dirname(new URL(import.meta.url).pathname);
const DATA_DIR = path.join(HERE, 'data');

function loadJson(file, fallback) {
  const p = path.join(DATA_DIR, file);
  if (!fs.existsSync(p)) {
    console.warn(`[build] missing ${file}, using fallback`);
    return fallback;
  }
  const raw = fs.readFileSync(p, 'utf8');
  try {
    return JSON.parse(raw);
  } catch (e) {
    console.error(`[build] INVALID JSON in ${file}: ${e.message}`);
    return fallback;
  }
}

const emptySection = (id, title) => ({ sectionId: id, sectionTitle: title, sectionSubtitle: '', topics: [] });

const SOC = loadJson('01-sociedades.json', emptySection('sociedades', 'Sociedades'));
const SUC = loadJson('02-veiculos-sucessorios.json', emptySection('sucessorio', 'Veículos Sucessórios'));
const ATV = loadJson('03-ativos-alto-valor.json', emptySection('ativos', 'Ativos de Alto Valor Agregado'));
const REGIMES = loadJson('04-regimes-especiais-raw.json', { COUNTRIES: {}, COUNTRY_ORDER: [] });
const SCE = loadJson('05-sce.json', emptySection('sce', 'Providências — SCE IED e SCE Crédito'));

let tpl = fs.readFileSync(path.join(HERE, 'wealth-planning.template.html'), 'utf8');

const replacements = {
  '"@@SOC@@"': JSON.stringify(SOC),
  '"@@SUC@@"': JSON.stringify(SUC),
  '"@@ATV@@"': JSON.stringify(ATV),
  '"@@SCE@@"': JSON.stringify(SCE),
  '"@@REGIMES@@"': JSON.stringify(REGIMES),
};

for (const [marker, value] of Object.entries(replacements)) {
  if (!tpl.includes(marker)) {
    console.error(`[build] marker ${marker} not found in template!`);
    process.exit(1);
  }
  tpl = tpl.replace(marker, value);
}

const outPath = path.join(HERE, '..', 'wealth-planning.html');
fs.writeFileSync(outPath, tpl);
console.log(`[build] wrote ${outPath} (${(fs.statSync(outPath).size / 1024).toFixed(0)} KB)`);
console.log(`[build] topics: sociedades=${SOC.topics.length} sucessorio=${SUC.topics.length} ativos=${ATV.topics.length} sce=${SCE.topics.length} regimes-countries=${(REGIMES.COUNTRY_ORDER||[]).length}`);
