# 10 - Data Privacy and Security

O Job Match OS lida com dados profissionais sensíveis (salário, CPF, histórico empregatício, etc.).

## Princípios (Hardening)
1. **Nunca versionar Secrets**: Uso estrito de variáveis de ambiente gerenciadas no deploy.
2. **Minimização de PII nos Logs**: O Logger será mascarado. Informações sigilosas do candidato não devem vazar nos relatórios de debug ou Redis queues de forma exposta sem necessidade.
3. **Criptografia e Auth**: Todas as rotas de API precisam de Middleware de autenticação protegendo o *User* dono dos recursos.
4. **Exportação LGPD**: O usuário detém os dados de Resume e CRM e tem um caminho claro (botão ou API) para exportação de tudo ou deleção da conta.
5. **Rate Limiting**: Bloqueios severos contra abusos em rotas de upload ou OCR.