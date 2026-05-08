# Job Match OS / Career CRM Agent Marks Manager

Job Match OS e um sistema operacional de carreira que trata vagas como leads, candidaturas como pipeline e curriculo como Resume-as-Code. O objetivo nao e apenas armazenar vagas: e operar um CRM de carreira com ingestao segura, score explicavel, auditoria, tarefas, agenda, assistencia de IA e automacao controlada por aprovacao humana.

## Regra maxima

Tudo que estiver dentro do controle da plataforma deve ser funcional de verdade desde a Fase 0. Entrega final nao pode ser mock, placeholder, sucesso falso, simulacao de envio, runtime principal in-memory, scraping proibido ou integracao externa fingida.

Quando uma integracao externa ainda nao estiver oficialmente configurada, o sistema deve registrar um estado honesto como `external_integration_not_configured`, `official_api_required`, `requires_manual_action`, `waiting_human_approval`, `manual_apply_required`, `oauth_required` ou `provider_not_configured`.

## Status da Fase 0

A Fase 0 e documental, decisoria e aplicavel. Ela nao implementa backend, banco, frontend, worker, Chrome Extension, IA real, Telegram, Google Calendar, scraping ou candidatura automatica. Ela define como esses blocos serao implementados nas fases corretas.

Execucao atual: Fase 0 executada pela IA Executora e aguardando validacao externa em `.ops/phase-0/`.

## Documentacao principal

- `docs/00-executive-summary.md`: resumo executivo, problema e visao real.
- `docs/01-product-blueprint.md`: produto, publico-alvo e proposta de valor.
- `docs/02-architecture.md`: arquitetura alvo e responsabilidades.
- `docs/03-domain-model.md`: entidades e mapa de modulos.
- `docs/04-job-sources-scope.md`: fontes de vagas e politicas por fonte.
- `docs/05-safe-automation-policy.md`: automacao segura e aprovacao humana.
- `docs/11-roadmap-master.md`: roadmap completo e Definition of Done por fase.
- `docs/17-no-fake-success-policy.md`: politica anti-fake operacional.

## Separacao de papeis

A IA Executora pode executar, registrar evidencias e deixar itens prontos para validacao. Ela nao pode validar a propria entrega. A IA Validadora, ou pessoa validadora, deve validar sem executar alteracoes.
