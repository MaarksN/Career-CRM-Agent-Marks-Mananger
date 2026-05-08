# 08 - Calendar and Notifications Scope

## Escopo interno

O calendario interno registra prazos, entrevistas, follow-ups, tarefas e lembretes do Career CRM. Na Fase 0, o escopo define regras; implementacao fica para fases tecnicas.

## Integracoes externas

Google Calendar, Outlook, Telegram, e-mail e outros canais so podem ser usados por OAuth, API oficial, webhook seguro ou estado honesto de nao configuracao. Sem credencial oficial, a plataforma deve retornar `oauth_required`, `provider_not_configured` ou `external_integration_not_configured`.

## Aprovacao humana

Criar, alterar ou cancelar evento externo exige aprovacao humana quando puder afetar terceiros, enviar convite, alterar agenda compartilhada ou disparar notificacao externa.

## Auditoria

Eventos e notificacoes devem registrar origem, usuario, canal, payload minimo, consentimento, resultado e erro real. PII em logs deve ser minimizada.
