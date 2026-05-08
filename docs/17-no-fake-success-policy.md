# 17 - No Fake Success Policy

## Regra

Sucesso falso e proibido. Um fluxo so pode retornar sucesso quando a acao real aconteceu dentro do escopo controlado da plataforma ou quando a operacao externa foi confirmada por integracao oficial configurada.

## Proibido como entrega final

- Mock apresentado como funcionalidade final.
- Placeholder tratado como implementacao.
- Simulacao de envio, candidatura, login, agenda ou notificacao.
- Resposta fixa fingindo integracao.
- Runtime principal in-memory para dados do produto.
- Scraping proibido.
- Automacao externa sem aprovacao humana quando critica.

## Estados honestos aceitos

- `external_integration_not_configured`
- `official_api_required`
- `requires_manual_action`
- `waiting_human_approval`
- `manual_apply_required`
- `oauth_required`
- `provider_not_configured`

## Exemplos

- Sem OAuth do calendario: retornar `oauth_required`, nao "evento criado".
- Fonte sem API oficial configurada: retornar `official_api_required`, nao capturar por scraping proibido.
- Candidatura preparada mas nao aprovada: retornar `waiting_human_approval`, nao "aplicado".
- Vaga informada manualmente pelo usuario: permitido, com origem `manual` e auditoria.
