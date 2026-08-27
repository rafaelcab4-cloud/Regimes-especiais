import { ALERTS } from "@/data/alerts";
import { COUNTRIES } from "@/data/countries";
import FlagIcon from "./FlagIcon";

export default function AlertsGrid() {
  return (
    <div className="alerts">
      <div className="alerts-head">
        <h3>Alertas prioritários</h3>
        <span className="pill-mini">Mudanças de alto impacto · 2024–2026</span>
      </div>
      <div className="alerts-grid">
        {ALERTS.map((alert) => {
          const country = COUNTRIES[alert.countryId];
          return (
            <div className={`alert-card ${alert.tone}`} key={alert.title}>
              <FlagIcon
                code={country.flagCode}
                label={country.name}
                width={22}
                height={16}
                className="a-flag"
              />
              <div className="a-tag">— {alert.tag}</div>
              <div className="a-title">{alert.title}</div>
              <div className="a-body">{alert.body}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
