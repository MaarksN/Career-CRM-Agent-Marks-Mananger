# 12 - Phase Plan

## Protocolo antes de cada item

1. Ler o item no checklist mestre.
2. Verificar dependencias anteriores e relatorios `.ops`.
3. Confirmar se ha validacao obrigatoria bloqueando o proximo item.
4. Se houver bloqueio, registrar `BLOCKED_WAITING_VALIDATION` e parar.
5. Se nao houver bloqueio, executar o item, registrar evidencia e deixar validacao como `PENDING_EXTERNAL_VALIDATION`.

## Plano da Fase 0

- P0-01: definir visao real do produto.
- P0-02: definir politica anti-fake.
- P0-03: mapear modulos com objetivo, entrada, saida e dependencias.
- P0-04: classificar fontes de vagas e politicas.
- P0-05: definir candidatura segura e aprovacao humana.
- P0-06: definir arquitetura alvo.
- P0-07: definir DoD por fase e roadmap completo.
- P0-08: criar matriz de riscos com mitigacao, severidade e responsavel.
- P0-09: criar artefatos `.ops`, evidencias, relatorio e SKIPs justificados.

## Regra de parada

A execucao deve parar ao fim da Fase 0. Fase 1 depende de validacao externa da Fase 0.
