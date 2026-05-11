export interface CalendarIntegrationStatus {
  readonly configured: false;
  readonly status: "external_calendar_integration_not_configured";
  readonly provider: null;
  readonly message: string;
}

export interface CalendarEventDraft {
  readonly title: string;
  readonly status: "external_calendar_integration_not_configured";
  readonly requiresManualAction: true;
}

export function getCalendarIntegrationStatus(): CalendarIntegrationStatus {
  return {
    configured: false,
    status: "external_calendar_integration_not_configured",
    provider: null,
    message: "Google Calendar or another external calendar provider is not configured in Phase 1."
  };
}

export function createCalendarEventDraft(title: string): CalendarEventDraft {
  return {
    title,
    status: "external_calendar_integration_not_configured",
    requiresManualAction: true
  };
}
