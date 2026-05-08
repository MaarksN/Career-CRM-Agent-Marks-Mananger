# 16 - Error Handling and Validation Policy

## Principio

Erro real deve aparecer como erro real. A plataforma nao pode esconder falha externa como sucesso, nem converter falta de configuracao em resultado positivo.

## Estados padrao

- `OK`: execucao interna real concluida dentro do escopo.
- `WARN`: risco ou limitacao documentada sem bloquear o item.
- `FAIL`: criterio essencial nao atendido.
- `SKIP`: item nao aplicavel nesta fase, com justificativa objetiva.
- `BLOCKED_WAITING_VALIDATION`: ha gate de validacao obrigatorio antes de continuar.
- `PENDING_EXTERNAL_VALIDATION`: execucao pronta para revisao externa.

## Tratativa de erro

Todo erro relevante deve registrar comando/acao, entrada segura, resultado esperado, resultado obtido, impacto, proximo passo e se houve rollback. Logs nao devem expor secrets ou PII desnecessaria.

## Separacao execucao/validacao

A IA Executora pode executar e evidenciar. Ela nao pode aprovar a propria entrega. A IA Validadora pode validar e reprovar, mas nao deve executar alteracoes.
