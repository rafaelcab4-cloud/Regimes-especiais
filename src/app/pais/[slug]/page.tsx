import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { COUNTRY_ORDER, getCountry } from "@/data/countries";
import DetailHero from "@/components/DetailHero";
import RegimeColumn from "@/components/RegimeColumn";

interface CountryPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return COUNTRY_ORDER.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CountryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const country = getCountry(slug);
  if (!country) return {};
  return {
    title: country.name,
    description: `Dossiê fiscal e imigratório de ${country.name}: ${country.sumFiscal} · ${country.sumVisa}.`,
  };
}

export default async function CountryPage({ params }: CountryPageProps) {
  const { slug } = await params;
  const country = getCountry(slug);
  if (!country) notFound();

  return (
    <section>
      <DetailHero country={country} />
      <div className="detail-body">
        <RegimeColumn
          number="— 01"
          title="Regimes Fiscais"
          subtitle="Tributação · Planejamento patrimonial"
          regimes={country.fiscal}
        />
        <RegimeColumn
          number="— 02"
          title="Programas Imigratórios"
          subtitle="Residência · Caminho à cidadania"
          regimes={country.visa}
        />
      </div>
    </section>
  );
}

export const dynamicParams = false;
