# 02 - Architecture

O Job Match OS utilizará uma arquitetura de Monorepo com Turborepo para governar as diferentes peças do sistema.

## Componentes Macro

1. **Apps**
   - `apps/web`: Frontend do CRM e Dashboard (Next.js).
   - `apps/api`: Backend central e provedor de serviços (Node.js).
   - `apps/worker`: Serviço background para processamento assíncrono e operação 24h.
   - `apps/chrome-extension`: Extensão MV3 para captura no navegador.

2. **Packages Compartilhados**
   - `packages/database`: Prisma e esquemas de dados.
   - `packages/contracts`: Schemas Zod de tipagem (APIs e objetos de domínio).
   - `packages/config`: Configurações ESLint, Prettier, TypeScript.
   - `packages/logger`: Serviço de logs padronizado e limpo de PII.
   - `packages/queue`: Contratos e gerenciamento de filas (BullMQ).

3. **Infraestrutura**
   - **Banco de Dados**: PostgreSQL, acessado via Prisma ORM.
   - **Filas**: Redis para gerenciamento das jobs (BullMQ).
   - **Autenticação**: Base real que garante privacidade do usuário e controle de sessão.

## Por que essa arquitetura?

- O sistema requer processamento background constante (24h via Worker).
- A extensão não pode ser gargalo de processamento.
- Compartilhamento de tipos e esquemas de dados com Zod e Prisma no monorepo previne dessincronização entre UI, API e Extensão.