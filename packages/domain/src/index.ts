export type FoundationDomain = "career-crm" | "job-radar" | "resume-as-code";

export interface DomainServiceMode {
  readonly mode: "foundation";
  readonly domains: readonly FoundationDomain[];
  readonly rulesLoaded: false;
  readonly message: string;
}

export function getDomainServiceMode(): DomainServiceMode {
  return {
    mode: "foundation",
    domains: ["career-crm", "job-radar", "resume-as-code"],
    rulesLoaded: false,
    message: "Phase 1 exposes domain boundaries without pretending final business rules exist."
  };
}
