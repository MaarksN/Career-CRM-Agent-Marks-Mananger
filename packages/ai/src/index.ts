export interface AiProviderStatus {
  readonly configured: false;
  readonly status: "external_ai_not_configured";
  readonly message: string;
}

export interface AiTextRequest {
  readonly prompt: string;
  readonly purpose: "classification" | "drafting" | "explanation";
}

export interface AiTextResult {
  readonly status: "external_ai_not_configured";
  readonly output: null;
  readonly message: string;
}

export interface AiProvider {
  readonly name: string;
  readonly getStatus: () => AiProviderStatus;
  readonly generateText: (request: AiTextRequest) => Promise<AiTextResult>;
}

export function getAiFoundationStatus(): AiProviderStatus {
  return {
    configured: false,
    status: "external_ai_not_configured",
    message: "No external AI provider is configured in Phase 1."
  };
}

export function createUnavailableAiProvider(name = "unconfigured-ai-provider"): AiProvider {
  return {
    name,
    getStatus: getAiFoundationStatus,
    generateText: async () => ({
      status: "external_ai_not_configured",
      output: null,
      message: "AI text generation requires a configured external provider in a future phase."
    })
  };
}
