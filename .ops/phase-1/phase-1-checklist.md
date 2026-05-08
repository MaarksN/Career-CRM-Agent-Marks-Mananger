# Fase 1 - Checklist de execucao

Status de execucao: WARN  
Status de validacao: PENDING_EXTERNAL_VALIDATION  
Executor: Codex  
Validador esperado: Jules  
Executado em: 2026-05-08T00:51:16-03:00

Observacao de gate: o usuario autorizou explicitamente a execucao da Fase 1 apesar da validacao externa da Fase 0 ainda estar pendente/retornada. A IA Executora registrou a decisao e nao marcou validacao.

| Item  | Tarefa                       | Arquivo/comando                                                 | Resultado esperado                                      | Resultado obtido                                                              | Status de execucao | Status de validacao         | Observacao                                                                                |
| ----- | ---------------------------- | --------------------------------------------------------------- | ------------------------------------------------------- | ----------------------------------------------------------------------------- | ------------------ | --------------------------- | ----------------------------------------------------------------------------------------- |
| P1-01 | Criar pnpm workspace         | `package.json`, `pnpm-workspace.yaml`, `pnpm.cmd install`       | Workspaces `apps/*` e `packages/*` instalaveis          | `pnpm install` OK com WARN ambiental de Node 25                               | OK                 | PENDING_EXTERNAL_VALIDATION | `packageManager` mantido em `pnpm@9.15.9`                                                 |
| P1-02 | Configurar Turborepo         | `turbo.json`                                                    | Tasks reais com `test` dependendo de `build` e `^build` | `turbo run` usado em typecheck/lint/test/build                                | OK                 | PENDING_EXTERNAL_VALIDATION | Estrutura segue o JSON obrigatório                                                        |
| P1-03 | Configurar TypeScript strict | `tsconfig.base.json`, `pnpm.cmd typecheck`                      | `strict: true` e typecheck OK                           | 15 workspaces com typecheck OK                                                | OK                 | PENDING_EXTERNAL_VALIDATION | Strict nao foi relaxado                                                                   |
| P1-04 | Configurar ESLint            | `eslint.config.js`, `pnpm.cmd lint`                             | Lint real em todos os workspaces                        | 15 workspaces com lint OK                                                     | OK                 | PENDING_EXTERNAL_VALIDATION | Artefatos aninhados ignorados corretamente                                                |
| P1-05 | Configurar Prettier          | `.prettierrc`, `.prettierignore`, `pnpm.cmd format:check`       | Formatacao real e check OK                              | `format` e `format:check` OK                                                  | OK                 | PENDING_EXTERNAL_VALIDATION | Lista obrigatoria de ignores preservada                                                   |
| P1-06 | Criar apps/web               | `apps/web`, `pnpm.cmd build`                                    | Next.js minimo buildavel                                | Next.js 16.2.6 build OK, rota `/` estatica                                    | OK                 | PENDING_EXTERNAL_VALIDATION | App nao implementa extensao Chrome                                                        |
| P1-07 | Criar apps/api               | `apps/api`, `node:test`                                         | Endpoints `/health`, `/ready`, `/version`               | API HTTP real criada; teste de `/health` OK                                   | OK                 | PENDING_EXTERNAL_VALIDATION | `/ready` declara DB/worker 24h como nao configurados                                      |
| P1-08 | Criar apps/worker            | `apps/worker`, `runOnce()`, `node:test`                         | Worker minimo honesto                                   | `runOnce()` retorna `queue_not_configured`; teste OK                          | OK                 | PENDING_EXTERNAL_VALIDATION | Nao finge operacao 24h                                                                    |
| P1-09 | Criar packages base          | `packages/*`                                                    | 12 packages reais compilaveis                           | Todos os packages obrigatorios criados e buildam                              | OK                 | PENDING_EXTERNAL_VALIDATION | Scoring e job-sources possuem testes reais                                                |
| P1-10 | Criar scripts validate       | `package.json`, `pnpm.cmd validate`                             | `pnpm validate` funcional                               | `pnpm validate` OK                                                            | OK                 | PENDING_EXTERNAL_VALIDATION | Sem duplicacao de validate no CI                                                          |
| P1-11 | Ignorar artefatos            | `.gitignore`, `.prettierignore`, `git status --short --ignored` | Artefatos nao versionados                               | `node_modules`, `dist`, `.next`, `.turbo`, `*.tsbuildinfo` aparecem ignorados | OK                 | PENDING_EXTERNAL_VALIDATION | `git status --ignored` em Windows emitiu WARN de caminhos longos dentro de `node_modules` |

## Comandos obrigatorios

| Comando                     | Resultado                                                                                                 |
| --------------------------- | --------------------------------------------------------------------------------------------------------- |
| `git branch --show-current` | `main`                                                                                                    |
| `git status --short`        | executado antes e depois; ha alteracoes esperadas da Fase 1 e alteracoes preexistentes/externas de Fase 0 |
| `node --version`            | `v25.9.0`                                                                                                 |
| `pnpm.cmd --version`        | `9.15.9`                                                                                                  |
| `pnpm.cmd install`          | OK com WARN de engine Node `>=24 <25`                                                                     |
| `pnpm.cmd format`           | OK                                                                                                        |
| `pnpm.cmd format:check`     | OK                                                                                                        |
| `pnpm.cmd typecheck`        | OK                                                                                                        |
| `pnpm.cmd lint`             | OK apos ajuste de ignores de artefatos aninhados                                                          |
| `pnpm.cmd test`             | OK                                                                                                        |
| `pnpm.cmd build`            | OK                                                                                                        |
| `pnpm.cmd validate`         | OK                                                                                                        |

## WARNs

- Ambiente local usa Node `v25.9.0`, enquanto o projeto exige `>=24 <25`.
- `git status --short --ignored` emitiu avisos de caminhos longos em `node_modules/.pnpm` no Windows, sem afetar os checks do projeto.
- A Fase 1 foi executada por autorizacao explicita do usuario apesar da validacao externa da Fase 0 ainda estar pendente/retornada.
