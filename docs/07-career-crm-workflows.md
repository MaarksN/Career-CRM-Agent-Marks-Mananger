# 07 - Career CRM Workflows

O fluxo básico do pipeline que o usuário manipula no frontend.

## Estágios (Pipeline Kanban)

1. **Captured (Lead)**: Vaga capturada pela extensão ou manualmente, pendente de análise.
2. **Analysis / Pre-Qual**: Match gerado, decidindo se vale a pena preparar currículo.
3. **Preparation (Draft)**: O sistema recomenda a `ResumeVersion` ou ajuda a gerar um cover letter (exigindo aprovação).
4. **Applied**: Ação efetuada (manualmente, ou via API aprovada). Exige `Evidence Vault`.
5. **Interview / Assessment**: Teste técnico ou entrevistas, interagindo com o módulo de calendário.
6. **Offer**: Proposta recebida e analisada.
7. **Rejected/Lost**: Cancelada (obriga registro de "Motivo de perda").

## Gestão de Ações
- O sistema usa SLAs por etapa (alertas contra esquecimentos e ghostings).
- O backend rodará schedules para verificar vagas congeladas no kanban.