# 14 - Chrome Extension Scope

## Papel da extensao

A Chrome Extension sera uma ferramenta de captura assistida no navegador do usuario. Ela ajuda a transformar uma vaga visivel em rascunho auditavel dentro do Career CRM.

## Limites

- Nao e o motor principal de operacao 24h.
- Nao deve burlar login, paywall, captcha, robots, termos ou controles anti-bot.
- Nao envia candidatura automaticamente.
- Nao salva como oportunidade qualificada sem politica de fonte e revisao.
- Nao finge captura quando o conteudo nao esta disponivel.

## Fluxo esperado futuro

Usuario autenticado abre uma vaga, aciona a extensao, revisa dados capturados, envia para API real e o sistema registra origem, metodo, timestamp e politica aplicada. Quando a fonte exigir API oficial, a extensao deve orientar acao manual ou registrar `official_api_required`.
