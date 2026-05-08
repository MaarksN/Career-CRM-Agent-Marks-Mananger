export type LogLevel = "debug" | "info" | "warn" | "error";

export interface LogEntry {
  readonly level: LogLevel;
  readonly message: string;
  readonly timestamp: string;
  readonly context: string;
  readonly meta?: Record<string, unknown>;
}

export interface Logger {
  readonly debug: (message: string, meta?: Record<string, unknown>) => void;
  readonly info: (message: string, meta?: Record<string, unknown>) => void;
  readonly warn: (message: string, meta?: Record<string, unknown>) => void;
  readonly error: (message: string, meta?: Record<string, unknown>) => void;
}

const SENSITIVE_KEY_PATTERN = /(authorization|cookie|password|secret|token|api[_-]?key)/iu;

export function sanitizeMetadata(meta: Record<string, unknown>): Record<string, unknown> {
  return Object.fromEntries(
    Object.entries(meta).map(([key, value]) => [
      key,
      SENSITIVE_KEY_PATTERN.test(key) ? "[REDACTED]" : value
    ])
  );
}

export function createConsoleLogger(context = "job-match-os"): Logger {
  const write = (level: LogLevel, message: string, meta?: Record<string, unknown>): void => {
    const entry: LogEntry = {
      level,
      message,
      timestamp: new Date().toISOString(),
      context
    };

    if (meta !== undefined) {
      Object.assign(entry, { meta: sanitizeMetadata(meta) });
    }

    const line = JSON.stringify(entry);
    if (level === "error") {
      console.error(line);
      return;
    }

    if (level === "warn") {
      console.warn(line);
      return;
    }

    console.log(line);
  };

  return {
    debug: (message, meta) => write("debug", message, meta),
    info: (message, meta) => write("info", message, meta),
    warn: (message, meta) => write("warn", message, meta),
    error: (message, meta) => write("error", message, meta)
  };
}

export function createNoopLogger(): Logger {
  const noop = (): void => undefined;

  return {
    debug: noop,
    info: noop,
    warn: noop,
    error: noop
  };
}
