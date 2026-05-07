# 08 - Calendar and Notifications Scope

A gestão de compromissos não é mockada; ela vive inicialmente no domínio do sistema e tenta integrar a partir de APIs oficiais.

## Calendário Interno
- Entidade base: `CalendarEvent`.
- Todo evento de entrevista, preparação e follow-up vive primeiramente no banco da plataforma.
- Caso não haja integração externa, os eventos geram um arquivo exportável `.ics`.

## Integração Externa Limitada e Real
- Se integrado (OAuth via Google Calendar / Outlook), o sistema cria lá.
- Sem o OAuth habilitado, a flag retorna estado honesto: `external_calendar_not_configured`. Nunca simular chamadas bem-sucedidas para um provedor externo que não existe.

## Notificações
- Alertas de novas vagas, queda de SLA, follow-up recomendados são tratados pelo Worker 24h.
- Envios vão primariamente para o *Notification Center* (UI interna).
- Extensões como *Telegram Command Center* ou Email exigirão autorizações adequadas e seguirão o princípio de estado honesto.