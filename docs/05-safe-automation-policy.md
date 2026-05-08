# 05 - Safe Automation Policy

## Regra central

Auto apply e bloqueado por padrao. Candidatura, envio de mensagem, envio de curriculo, edicao externa, criacao de evento externo e qualquer acao critica fora da plataforma exigem aprovacao humana previa e auditoria.

## Acoes permitidas sem aprovacao extra

- Criar ou editar registros internos do CRM.
- Calcular score interno.
- Gerar rascunho de curriculo ou mensagem sem enviar.
- Criar tarefa interna.
- Registrar estado honesto de integracao nao configurada.

## Acoes que exigem aprovacao humana

- Enviar candidatura, curriculo, mensagem ou resposta para terceiros.
- Alterar status em sistema externo.
- Criar evento em calendario externo.
- Conectar conta por OAuth.
- Rodar job recorrente que toque fonte externa.

## Estados de bloqueio

- `waiting_human_approval`: acao pronta, aguardando decisao humana.
- `manual_apply_required`: plataforma so pode orientar aplicacao manual.
- `official_api_required`: fonte exige API oficial antes de automacao.
- `oauth_required`: usuario precisa conectar conta por OAuth.
- `provider_not_configured`: provedor suportado, mas sem credencial/configuracao.

## Auditoria obrigatoria

Toda tentativa de automacao deve registrar politica aplicada, ator, dados de entrada, decisao, aprovacao exigida, resultado e erro real quando houver.
