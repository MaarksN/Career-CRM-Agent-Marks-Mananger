export type RuntimeEnvironment = "development" | "test" | "production";

export interface FoundationConfig {
  readonly appName: "Job Match OS";
  readonly environment: RuntimeEnvironment;
  readonly version: string;
  readonly safeAutomation: {
    readonly autoApplyEnabled: false;
    readonly humanApprovalRequired: true;
  };
  readonly integrations: {
    readonly ai: "external_ai_not_configured";
    readonly calendar: "external_calendar_integration_not_configured";
    readonly database: "database_not_configured";
  };
}

export function getConfig(env: NodeJS.ProcessEnv = process.env): FoundationConfig {
  return {
    appName: "Job Match OS",
    environment: normalizeEnvironment(env.APP_ENV ?? env.NODE_ENV),
    version: env.JOB_MATCH_OS_VERSION ?? "0.1.0-foundation",
    safeAutomation: {
      autoApplyEnabled: false,
      humanApprovalRequired: true
    },
    integrations: {
      ai: "external_ai_not_configured",
      calendar: "external_calendar_integration_not_configured",
      database: "database_not_configured"
    }
  };
}

function normalizeEnvironment(value: string | undefined): RuntimeEnvironment {
  if (value === "production" || value === "test") {
    return value;
  }

  return "development";
}
