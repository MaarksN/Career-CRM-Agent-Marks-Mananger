export interface NotificationMessage {
  readonly subject: string;
  readonly body: string;
}

export interface NotificationResult {
  readonly status: "noop_notification_recorded" | "console_notification_recorded";
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

export function createConsoleNotificationProvider(): NotificationProvider {
  return {
    name: "console",
    send: async (message) => {
      console.log(JSON.stringify({ channel: "console", subject: message.subject }));

      return {
        status: "console_notification_recorded",
        externalDelivery: false,
        message: "Notification printed to console only; no external delivery was attempted."
      };
    }
  };
}
