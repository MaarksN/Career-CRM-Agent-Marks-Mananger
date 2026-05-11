# 11 - Roadmap Master

Este roadmap parte do zero e define entregas reais por fase. Nenhuma fase pode ser considerada validada pela IA Executora; validacao externa e obrigatoria.

| Fase | Resultado esperado                             | Principais entregas                                                                    | Definition of Done                                                                                               |
| ---- | ---------------------------------------------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| 0    | Blueprint real, escopo e criterios de verdade. | Docs `00` a `17`, checklist mestre copiado, evidencias `.ops`.                         | Documentacao decisoria cobre produto, anti-fake, fontes, arquitetura, modulos, riscos, DoD e validacao pendente. |
| 1    | Monorepo real e validacao tecnica.             | `package.json`, pnpm, Turborepo, TS config, lint, format, test/build basicos.          | `pnpm install`, `pnpm format`, `pnpm validate` funcionam ou falham com erro real corrigido.                      |
| 2    | Banco, contratos e modelos reais.              | Prisma, schemas Zod, tipos de dominio, migrations e seed minimo honesto.               | Banco persiste entidades core; nenhum runtime principal in-memory.                                               |
| 3    | Backend real.                                  | API autenticada, services, repositories, audit logs e erros estruturados.              | Endpoints reais cobertos por testes; fake success bloqueado.                                                     |
| 4    | UI operacional.                                | Dashboard, CRM de vagas, detalhes, formularios e estados vazios honestos.              | UI consome API real; metricas mockadas sao proibidas.                                                            |
| 5    | Auth, seguranca e permissoes.                  | Login, sessao, RBAC/ownership, protecao de rotas, logout e hardening inicial.          | Usuario so acessa os proprios dados; falhas geram erro real.                                                     |
| 6    | Resume-as-Code Studio.                         | Editor de blocos, versoes, exportacao e historico.                                     | Curriculo versionavel e sem invencao de experiencia.                                                             |
| 7    | Chrome Extension Capture.                      | Extensao MV3, autenticacao, captura assistida e envio para API.                        | Captura exige usuario ativo, evidencia e revisao; nao roda como motor 24h.                                       |
| 8    | Radar de vagas e ingestao segura.              | Conectores permitidos, RSS/e-mail autorizado/manual, OCR quando aplicavel.             | Fonte sem permissao retorna estado honesto; scraping proibido bloqueado.                                         |
| 9    | Filas, Redis, workers e operacao 24h.          | BullMQ/Redis, scheduler, retries, idempotencia, logs e monitoramento.                  | Worker/backend executa jobs reais com auditoria e sem depender da extensao.                                      |
| 10   | IA real multiagente.                           | Provedor oficial, schemas, guardrails, custos, agente validador e prompts versionados. | IA nao inventa experiencia; saida invalida nao persiste.                                                         |
| 11   | CRM avancado e candidatura assistida.          | SLA, follow-ups, tarefas, documentos, rascunhos e aprovacao humana.                    | Auto apply continua bloqueado por padrao; acao externa exige aprovacao.                                          |
| 12   | Telegram Command Center.                       | Bot via API oficial, comandos, aprovacoes e notificacoes.                              | Sem bot fake; provider nao configurado retorna estado honesto.                                                   |
| 13   | Calendario externo e produtividade.            | Google/Outlook OAuth, eventos, lembretes e sync controlado.                            | Acao externa auditada e aprovada quando critica.                                                                 |
| 14   | Analytics e inteligencia de mercado.           | Funil, conversao, score historico, A/B de curriculos e insights.                       | Dados derivam de eventos reais; dashboard sem metricas inventadas.                                               |
| 15   | Deploy, observabilidade, hardening e go-live.  | Deploy, env, logs, backups, restore testado, runbook e checklist go-live.              | `pnpm validate` OK, observabilidade ativa, secrets fora do Git e validacao final externa.                        |

## Gates entre fases

- Fase 1 so pode iniciar quando Fase 0 estiver executada, documentada, evidenciada e validada externamente.
- Qualquer item `FAIL` bloqueia avanco ate correcao pela IA Executora e nova validacao.
- `WARN` precisa de decisao explicita do validador sobre aceitar, corrigir agora ou criar risco controlado.
