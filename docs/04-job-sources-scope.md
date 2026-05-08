# 04 - Job Sources Scope

## Politica geral por fonte

| Classe de fonte   | Permitido      | Condicao                                                          | Estado quando nao configurado         |
| ----------------- | -------------- | ----------------------------------------------------------------- | ------------------------------------- |
| API oficial       | Sim            | Chave, contrato, rate limit e termos permitidos.                  | `provider_not_configured`             |
| OAuth oficial     | Sim            | Consentimento do usuario e escopos minimos.                       | `oauth_required`                      |
| Webhook oficial   | Sim            | Assinatura/segredo validado.                                      | `external_integration_not_configured` |
| RSS permitido     | Sim            | Feed publico ou autorizado, sem burlar termos.                    | `provider_not_configured`             |
| E-mail autorizado | Sim            | Caixa conectada pelo usuario, filtros claros e consentimento.     | `oauth_required`                      |
| Upload/manual     | Sim            | Usuario fornece arquivo, texto ou link conscientemente.           | `requires_manual_action`              |
| Chrome Extension  | Sim, assistido | Usuario ativo, captura visivel e revisao antes de salvar.         | `requires_manual_action`              |
| Scraping proibido | Nao            | Nunca burlar login, paywall, captcha, robots/termos ou bloqueios. | `official_api_required`               |

## Fontes iniciais

- LinkedIn, Indeed, Glassdoor e plataformas similares: somente API/OAuth oficial quando disponivel, captura manual assistida ou estado `official_api_required`.
- Sites de empresas: RSS, API, webhook ou captura manual; scraping automatizado fica bloqueado salvo permissao explicita e legal.
- E-mail: ingestao futura apenas por OAuth autorizado e filtros revisaveis.
- Planilhas/PDF/texto do usuario: permitido como upload/manual, com auditoria da origem.

## Evidencia de origem

Toda `JobOpportunity` deve guardar fonte, metodo de captura, timestamp, usuario/ator, politica aplicada e conteudo minimo para auditoria. Fonte sem permissao clara nao vira sucesso; vira bloqueio honesto.
