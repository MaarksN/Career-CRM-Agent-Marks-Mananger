export interface NotificationMessage {
  readonly subject: string;
  readonly body: string;
}

export interface NotificationResult {
  readonly status: "noop_notification_recorded";
  readonly externalDelivery: false;
  readonly message: string;
}

export interface NotificationProvider {
  readonly name: string;
  readonly send: (message: NotificationMessage) => Promise<NotificationResult>;
}

export function createNoopNotificationProvider(): NotificationProvider {
  return {
    name: "noop",
    send: async () => ({
      status: "noop_notification_recorded",
      externalDelivery: false,
      message: "Notification captured locally; no external provider is configured in Phase 1."
    })
  };
}

