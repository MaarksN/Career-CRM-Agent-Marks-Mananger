export type SupportedDocumentFormat = "markdown" | "plain_text" | "json";
export type KnownDocumentFormat = SupportedDocumentFormat | "pdf" | "docx" | "unknown";

export interface DocumentCapability {
  readonly format: KnownDocumentFormat;
  readonly supportedInternally: boolean;
  readonly status: "ready" | "external_document_parser_not_configured";
  readonly message: string;
}

export function normalizeDocumentFormat(input: string): KnownDocumentFormat {
  const normalized = input.trim().toLowerCase().replace(/^\./u, "");

  if (normalized === "md" || normalized === "markdown") {
    return "markdown";
  }

  if (normalized === "txt" || normalized === "text" || normalized === "plain_text") {
    return "plain_text";
  }

  if (normalized === "json") {
    return "json";
  }

  if (normalized === "pdf") {
    return "pdf";
  }

  if (normalized === "docx") {
    return "docx";
  }

  return "unknown";
}

export function describeDocumentCapability(input: string): DocumentCapability {
  const format = normalizeDocumentFormat(input);

  if (format === "markdown" || format === "plain_text" || format === "json") {
    return {
      format,
      supportedInternally: true,
      status: "ready",
      message: "The format can be handled by Phase 1 internal utilities."
    };
  }

  return {
    format,
    supportedInternally: false,
    status: "external_document_parser_not_configured",
    message: "PDF and DOCX extraction are not implemented in Phase 1."
  };
}
