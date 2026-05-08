export type JobSourceAcquisition =
  | "manual"
  | "official_api_required"
  | "rss_allowed"
  | "email_authorized";

export interface JobSourceDefinition {
  readonly id: string;
  readonly name: string;
  readonly acquisition: JobSourceAcquisition;
  readonly autoApplyEnabled: false;
  readonly scrapingAllowed: false;
  readonly status: "ready" | "official_api_required" | "provider_not_configured";
}

export const jobSourceCatalog: readonly JobSourceDefinition[] = [
  {
    id: "manual-entry",
    name: "Manual job entry",
    acquisition: "manual",
    autoApplyEnabled: false,
    scrapingAllowed: false,
    status: "ready"
  },
  {
    id: "official-api",
    name: "Official provider API",
    acquisition: "official_api_required",
    autoApplyEnabled: false,
    scrapingAllowed: false,
    status: "official_api_required"
  },
  {
    id: "authorized-rss",
    name: "Authorized RSS feed",
    acquisition: "rss_allowed",
    autoApplyEnabled: false,
    scrapingAllowed: false,
    status: "provider_not_configured"
  },
  {
    id: "authorized-email",
    name: "Authorized email import",
    acquisition: "email_authorized",
    autoApplyEnabled: false,
    scrapingAllowed: false,
    status: "provider_not_configured"
  }
];

export function listJobSources(): readonly JobSourceDefinition[] {
  return jobSourceCatalog.map((source) => ({ ...source }));
}

export function assertSafeJobSourceCatalog(
  catalog: readonly JobSourceDefinition[] = jobSourceCatalog
): true {
  const unsafeSource = catalog.find((source) => source.autoApplyEnabled || source.scrapingAllowed);

  if (unsafeSource !== undefined) {
    throw new Error(`Unsafe job source configuration found: ${unsafeSource.id}`);
  }

  return true;
}
