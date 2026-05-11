import Image from "next/image";

const foundationChecks = [
  "Monorepo pnpm preparado",
  "API, worker e web separados",
  "TypeScript strict ativo",
  "Automacao segura sem auto apply",
  "Integracoes externas declaradas como nao configuradas"
] as const;

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "minmax(0, 1fr)",
        alignItems: "center",
        padding: "48px 20px"
      }}
    >
      <section
        style={{
          width: "min(1040px, 100%)",
          margin: "0 auto",
          display: "grid",
          gap: 28
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.15fr) minmax(260px, 0.85fr)",
            gap: 28,
            alignItems: "center"
          }}
        >
          <div>
            <p
              style={{
                margin: "0 0 12px",
                color: "#3d6b57",
                fontSize: 14,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 0
              }}
            >
              Phase 1 foundation
            </p>
            <h1 style={{ margin: 0, fontSize: 44, lineHeight: 1.08, letterSpacing: 0 }}>
              Job Match OS is now a real monorepo foundation.
            </h1>
            <p style={{ margin: "18px 0 0", maxWidth: 680, color: "#4b587c", fontSize: 18 }}>
              Career CRM, job radar, scoring and integrations now have honest technical boundaries.
              External AI, calendar delivery and continuous worker operation remain explicit future
              phases.
            </p>
          </div>

          <Image
            src="/foundation-map.svg"
            alt="Job Match OS foundation map"
            width={720}
            height={460}
            priority
            style={{
              width: "100%",
              height: "auto",
              border: "1px solid #d9e2ef",
              borderRadius: 8,
              background: "#ffffff"
            }}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 12
          }}
        >
          {foundationChecks.map((check) => (
            <div
              key={check}
              style={{
                minHeight: 88,
                border: "1px solid #d9e2ef",
                borderRadius: 8,
                background: "#ffffff",
                padding: 18,
                boxShadow: "0 10px 24px rgba(20, 33, 61, 0.06)"
              }}
            >
              <span style={{ color: "#2c7a58", fontWeight: 700 }}>Ready</span>
              <p style={{ margin: "8px 0 0", color: "#24324f" }}>{check}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
