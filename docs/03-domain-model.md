# 03 - Domain Model

## Entidades centrais

- **User / CandidateProfile:** usuario real, preferencias, consentimentos e configuracoes.
- **ResumeDocument / ExperienceBlock / SkillTag / Achievement / ResumeVersion:** base Resume-as-Code, blocos comprovaveis e versoes geradas.
- **Company:** empresa relacionada a vagas, contatos e historico.
- **JobSource:** origem da vaga, politica de uso, permissao, metodo oficial e estado de configuracao.
- **JobOpportunity:** vaga tratada como lead, com origem, evidencias, score, status e responsavel.
- **ApplicationProcess:** candidatura tratada como pipeline, vinculada a vaga, curriculo, aprovacoes e etapas.
- **CompatibilityAnalysis / CompatibilityReport:** resultado explicavel de score, riscos, lacunas e recomendacoes.
- **HumanApproval:** aprovacao exigida antes de acoes externas criticas.
- **AuditLog:** registro de acoes relevantes, ator, entrada, decisao, resultado e erro.
- **CalendarEvent / NotificationTask:** agenda interna, lembretes e notificacoes.
- **IntegrationAccount:** credenciais autorizadas por OAuth/API oficial, nunca simuladas.

## Mapa de modulos

| Modulo                   | Objetivo                                                | Entrada                                                                          | Saida                                                | Dependencias                                   |
| ------------------------ | ------------------------------------------------------- | -------------------------------------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------- |
| Career CRM               | Operar vagas como leads e candidaturas como pipeline.   | `JobOpportunity`, `ApplicationProcess`, tarefas e notas.                         | Pipeline, proximas acoes, historico e metricas.      | Banco, auth, auditoria, UI.                    |
| Resume-as-Code Studio    | Manter curriculo estruturado e versionavel.             | Blocos de experiencia, skills, conquistas e perfil.                              | `ResumeVersion` e pacote de candidatura revisavel.   | Banco, editor, IA com guardrails.              |
| Job Intake / Sources     | Ingerir vagas apenas por fonte permitida.               | API oficial, OAuth, RSS permitido, e-mail autorizado, upload/manual ou extensao. | `JobOpportunity` com evidencia de origem e politica. | Integracoes, worker, extensao, auditoria.      |
| Scoring Engine           | Calcular aderencia explicavel.                          | Perfil, curriculo, vaga e preferencias.                                          | Score, fatores, lacunas, riscos e recomendacao.      | Domain, IA futura, validadores.                |
| Safe Automation          | Controlar acoes externas criticas.                      | Pedido de acao, politica da fonte, aprovacao humana.                             | Acao permitida, bloqueada ou estado honesto.         | Auth, auditoria, integracoes oficiais.         |
| Chrome Extension         | Captura assistida no navegador ativo.                   | Conteudo visivel autorizado pelo usuario.                                        | Rascunho de vaga, evidencia e pedido de revisao.     | API, auth, permissoes do navegador.            |
| 24h Worker               | Rodar rotinas autonomas persistentes.                   | Filas, agenda, fontes configuradas e jobs.                                       | Ingestao permitida, alertas, scores, tarefas.        | Redis/BullMQ, API, banco, logs.                |
| Calendar & Notifications | Gerenciar agenda e follow-ups.                          | Eventos internos, prazos, aprovacoes e integracoes configuradas.                 | Lembretes, eventos e notificacoes.                   | Banco, OAuth futuro, worker.                   |
| AI Agents                | Assistir analise, resumo e sugestao sem inventar fatos. | Dados persistidos e prompts versionados.                                         | Saidas validadas por schema e auditadas.             | Provedor oficial, schemas, custos, guardrails. |
| Analytics                | Medir funil e qualidade das decisoes.                   | Eventos, scores, etapas e resultados.                                            | Dashboards, conversao, tempo por etapa e insights.   | Banco, auditoria, UI.                          |

## Estados honestos obrigatorios

Quando um modulo depender de terceiro sem configuracao oficial, deve retornar `external_integration_not_configured`, `official_api_required`, `requires_manual_action`, `waiting_human_approval`, `manual_apply_required`, `oauth_required` ou `provider_not_configured`.
