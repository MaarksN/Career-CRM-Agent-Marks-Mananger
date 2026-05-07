# 13 - Acceptance Criteria (DoD)

O *Definition of Done* Global para que uma fase seja aprovada:

1. **Testes Base Passando**: Todo código tem teste cobrindo a nova funcionalidade. `pnpm validate` roda limpo (lint, format, test, build).
2. **Evidência no Audit Log**: Todas as ações críticas da fase foram registradas num AuditLog (seja arquivo local nas Fases iniciais, ou banco nas Fases avançadas).
3. **Estado Honesto**: O projeto pode compilar e rodar a fase *sem* gerar erros silenciosos de serviços não configurados (se falta Google Auth, ele diz explicitamente na tela/logs).
4. **Sem Mocks ou Sucesso Falso**: Não existe nenhum "TODO" com timeout ou sucesso aleatório apenas para agradar o checklist.
5. **Aprovação Documentada**: O relatório da fase em `.ops` documenta claramente o resultado das ações.