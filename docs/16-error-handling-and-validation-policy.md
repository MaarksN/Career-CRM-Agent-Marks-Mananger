# 16 - Error Handling and Validation Policy

Todos os erros não podem ser engolidos via `try/catch(e){ return null; }`.

- O erro deve sempre ser repassado ao Logger central (preservando o Request ID).
- O Frontend precisa receber Códigos HTTP condizentes com o ocorrido (400, 401, 404, 500) e lidar com estados de erro UI (exibir "Ops, falhou!" explícito, nunca um loading infinito).
- Falhas de parse Zod devem rejeitar instantaneamente a requisição com detalhes sobre os campos quebrados.