# 13 - Acceptance Criteria

## Aceite global

- Todos os itens executados possuem evidencia objetiva.
- Executor e validador sao pessoas/agentes diferentes.
- Validacao final fica `PENDING_EXTERNAL_VALIDATION` ate revisao externa.
- Nao existe mock, placeholder ou sucesso falso como entrega final.
- Nao existe acao externa critica sem aprovacao humana.
- Estados honestos sao usados quando integracao externa nao esta configurada.
- Documentos `.ops` registram comandos, resultados, arquivos e proximos passos.
- `pnpm validate` roda quando houver `package.json`; sem `package.json`, o SKIP deve ser justificado.
- Git status, commit e push devem ser registrados com resultado real.

## Definition of Done documental

Uma fase documental so esta executada quando seus arquivos existem, contem decisoes aplicaveis, cobrem riscos e deixam claro o que sera implementado depois. Texto generico sem decisao operacional nao atende.

## Definition of Done tecnica

Uma fase tecnica so esta executada quando os comandos obrigatorios rodam contra implementacao real, os dados sao persistidos quando aplicavel, os erros sao honestos e os testes cobrem o risco da entrega.
