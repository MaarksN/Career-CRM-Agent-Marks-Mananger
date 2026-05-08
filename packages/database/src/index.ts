export interface DatabaseFoundationStatus {
  readonly configured: false;
  readonly status: "database_not_configured";
  readonly message: string;
  readonly nextPhase: "Fase 2";
}

export function getDatabaseStatus(): DatabaseFoundationStatus {
  return {
    configured: false,
    status: "database_not_configured",
    message: "Persistent database access is intentionally not configured in Phase 1.",
    nextPhase: "Fase 2"
  };
}
