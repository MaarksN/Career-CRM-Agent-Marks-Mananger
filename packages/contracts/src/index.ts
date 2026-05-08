export type ServiceStatus = "ok" | "degraded" | "not_configured";

export interface HealthResponse {
  readonly status: "ok";
  readonly service: string;
  readonly timestamp: string;
}

export interface ReadyResponse {
  readonly status: ServiceStatus;
  readonly service: string;
  readonly checks: readonly ReadinessCheck[];
}

export interface ReadinessCheck {
  readonly name: string;
  readonly status: ServiceStatus;
  readonly message: string;
}

export interface VersionResponse {
  readonly service: string;
  readonly version: string;
  readonly foundation: true;
}

export const FOUNDATION_VERSION = "0.1.0-foundation";
