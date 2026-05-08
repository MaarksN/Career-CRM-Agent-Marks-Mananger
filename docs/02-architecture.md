# 02 - Architecture

## Arquitetura alvo

A arquitetura alvo sera um monorepo com apps e packages separados para manter fronteiras claras entre interface, API, worker, extensao e dominio.

```text
apps/
  web/                 interface do Career CRM
  api/                 API autenticada e contratos externos
  worker/              motor autonomo 24h
  chrome-extension/    captura assistida no navegador do usuario
packages/
  domain/              entidades, regras e estados
  db/                  Prisma e acesso persistente
  config/              env, feature flags e validacao
  ui/                  componentes compartilhados
  integrations/        clientes oficiais de terceiros
  ai/                  prompts, schemas e guardrails
```

## Responsabilidades

- **Web:** operacao visual do CRM, revisao humana, dashboards e configuracoes.
- **API:** autenticacao, autorizacao, contratos, persistencia e auditoria.
- **Worker:** ingestao recorrente permitida, filas, score, tarefas, notificacoes e rotinas 24h.
- **Chrome Extension:** captura assistida durante sessao ativa do usuario; nao e motor 24h.
- **Packages de dominio:** fonte unica para estados, validacoes e regras anti-fake.

## Operacao 24h

O backend/worker sera o motor autonomo. A Chrome Extension nao garante execucao continua porque depende de navegador, sessao e permissao local. Qualquer rotina 24h precisa rodar em worker/backend com fila, retry, logs, idempotencia e auditoria.

## Dados e auditoria

A fase futura de banco deve usar persistencia real. O modelo alvo inclui PostgreSQL via Prisma, Redis/BullMQ para filas, logs estruturados sem PII desnecessaria e trilhas de auditoria para capturas, scores, mudancas de pipeline, aprovacoes e tentativas de integracao.

## Integracoes externas

Integracoes so podem usar API oficial, OAuth, webhook, RSS permitido, e-mail autorizado, upload/manual ou estado honesto de nao configuracao. A arquitetura deve impedir sucesso falso e bloquear qualquer acao externa critica sem aprovacao humana.
