# 15 - Autonomous 24h Operation

## Motor autonomo

O motor 24h sera o backend/worker, nao a Chrome Extension. Workers persistentes executam rotinas de ingestao permitida, score, follow-up, notificacao, retry e manutencao operacional.

## Requisitos futuros

- Redis/BullMQ ou tecnologia equivalente para filas reais.
- Scheduler com jobs idempotentes.
- Persistencia de status, erro e tentativa.
- Rate limit por provedor/fonte.
- Logs sem PII desnecessaria.
- Auditoria de cada acao relevante.
- Pausa automatica quando credencial, permissao ou aprovacao faltar.

## Estados honestos

Jobs nao podem concluir como sucesso quando a dependencia externa falhar ou nao estiver configurada. Devem registrar `provider_not_configured`, `oauth_required`, `external_integration_not_configured`, `waiting_human_approval` ou erro real.
