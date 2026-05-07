# 17 - No Fake Success Policy

A Regra de Ouro do projeto: **O "Sucesso" precisa ser comprovado.**

Nenhum módulo da plataforma, em hipótese alguma, simulará uma integração completa para esconder um problema de acesso ou limitação.

- Se o LinkedIn for fechado, o erro é `external_integration_not_configured` ou equivalente.
- Se o GCalendar não conectou, `provider_not_configured`.
- Não mockar tempo de processamento de fila (`setTimeout(..., 2000)` para fingir AI) em produção final.

Qualquer AI ou executor que criar ou aceitar código "placeholder" tentando passá-lo como implementação final estará falhando nos critérios globais do sistema.