import Hero from "@/components/Hero";
import AlertsGrid from "@/components/AlertsGrid";
import ExecutiveTable from "@/components/ExecutiveTable";

export default function OverviewPage() {
  return (
    <section>
      <Hero />
      <AlertsGrid />
      <ExecutiveTable />
    </section>
  );
}
