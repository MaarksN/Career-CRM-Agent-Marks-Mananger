import { readFileSync } from "node:fs";
import { createServer, type IncomingMessage, type Server, type ServerResponse } from "node:http";
import { pathToFileURL } from "node:url";

export interface HealthPayload {
  readonly status: "ok";
  readonly service: "job-match-os-api";
  readonly timestamp: string;
}

export interface ReadyPayload {
  readonly status: "degraded";
  readonly service: "job-match-os-api";
  readonly checks: readonly {
    readonly name: string;
    readonly status: "ok" | "not_configured";
    readonly message: string;
  }[];
}

export interface VersionPayload {
  readonly service: "job-match-os-api";
  readonly version: string;
  readonly foundation: true;
}

export function createHealthPayload(now: Date = new Date()): HealthPayload {
  return {
    status: "ok",
    service: "job-match-os-api",
    timestamp: now.toISOString()
  };
}

export function createReadyPayload(): ReadyPayload {
  return {
    status: "degraded",
    service: "job-match-os-api",
    checks: [
      {
        name: "http",
        status: "ok",
        message: "HTTP server is responding."
      },
      {
        name: "database",
        status: "not_configured",
        message: "Persistent database is planned for Phase 2."
      },
      {
        name: "worker_24h",
        status: "not_configured",
        message: "Continuous 24h operation is not implemented in Phase 1."
      }
    ]
  };
}

export function createVersionPayload(): VersionPayload {
  return {
    service: "job-match-os-api",
    version: readPackageVersion(),
    foundation: true
  };
}

export function createApiServer(): Server {
  return createServer((request, response) => {
    routeRequest(request, response);
  });
}

export function startApiServer(port = getConfiguredPort()): Server {
  const server = createApiServer();

  server.listen(port, () => {
    console.log(JSON.stringify({ service: "job-match-os-api", status: "listening", port }));
  });

  return server;
}

function routeRequest(request: IncomingMessage, response: ServerResponse): void {
  const url = new URL(request.url ?? "/", `http://${request.headers.host ?? "localhost"}`);

  if (request.method === "GET" && url.pathname === "/health") {
    sendJson(response, 200, createHealthPayload());
    return;
  }

  if (request.method === "GET" && url.pathname === "/ready") {
    sendJson(response, 200, createReadyPayload());
    return;
  }

  if (request.method === "GET" && url.pathname === "/version") {
    sendJson(response, 200, createVersionPayload());
    return;
  }

  sendJson(response, 404, {
    error: "not_found",
    message: "Route not found."
  });
}

function sendJson(response: ServerResponse, statusCode: number, payload: unknown): void {
  response.writeHead(statusCode, {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store"
  });
  response.end(JSON.stringify(payload));
}

function getConfiguredPort(): number {
  const parsed = Number.parseInt(process.env.PORT ?? "3001", 10);
  return Number.isFinite(parsed) ? parsed : 3001;
}

function readPackageVersion(): string {
  try {
    const raw = readFileSync(new URL("../package.json", import.meta.url), "utf8");
    const parsed = JSON.parse(raw) as { version?: unknown };
    return typeof parsed.version === "string" ? parsed.version : "0.1.0-foundation";
  } catch {
    return "0.1.0-foundation";
  }
}

const entrypoint = process.argv[1] === undefined ? "" : pathToFileURL(process.argv[1]).href;

if (import.meta.url === entrypoint) {
  startApiServer();
}
