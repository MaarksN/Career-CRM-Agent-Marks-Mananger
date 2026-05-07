# 12 - Phase Plan

Cada fase é executada sequencialmente. Não se avança sem o checklist de validação externa estar em "OK".

## Dinâmica de Execução
- IA Executora lê a fase.
- Executa os itens exigidos.
- Deixa em estado `PENDING_EXTERNAL_VALIDATION`.
- O progresso será registrado nos artefatos `.ops/` e no checklist principal em HTML.

O desenvolvimento não deve tentar resolver a "Fase 4" (Interface) sem antes ter consolidado Prisma e Banco de Dados reais na "Fase 2", para respeitar a fundação anti-fakes.