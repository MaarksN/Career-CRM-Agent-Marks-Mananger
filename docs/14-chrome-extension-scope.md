# 14 - Chrome Extension Scope

A Chrome Extension do Job Match OS é um "Side Panel / Cockpit" desenhado para *acompanhar* a busca de vagas sem violar as permissões de navegação.

## Restrições e Escopo
1. A extensão só atua mediante interação ativa do usuário (Active Tab) - nada de scripts fantasmas varrendo o LinkedIn o tempo inteiro.
2. Faz uso da estrutura `MV3` (Manifest V3) por padrão.
3. Não efetua envios de dados (clicks invisíveis) na página da vaga para forçar "Auto Apply".
4. Qualquer comunicação feita volta para o worker/API do projeto para análise pesada. Ela é "burra" e apenas repassa os dados extraídos, mostrando as respostas no seu painel.