# 03 - Domain Model

As entidades core que formam a base de dados (Prisma):

1. **User / CandidateProfile**
   - Usuário real logado na plataforma.
   - Detentor das informações de base e configurações.

2. **ResumeDocument / ExperienceBlock / SkillTag / Achievement**
   - As tabelas que suportam o Resume-as-Code.
   - Permitem compilação de `ResumeVersion`.

3. **JobOpportunity**
   - Representa uma vaga real.
   - Contém título, descrição, status do funil, salários esperados, etc.

4. **Company**
   - Entidade empregadora relacionada a `JobOpportunity`.

5. **JobSource**
   - Regras e configurações de onde a vaga veio (LinkedIn, email, API oficial).
   - Controla a permissão de automação e scraping.

6. **ApplicationProcess**
   - A candidatura em si, que aponta para um `JobOpportunity` e um `ResumeVersion`.
   - Controla o status no CRM (pipeline).

7. **CompatibilityAnalysis / CompatibilityReport**
   - Análises geradas de forma honesta via IA ou regras sobre a compatibilidade do perfil do candidato para uma vaga.

8. **AuditLog**
   - Rastreabilidade de *todas* as ações relevantes (criação, envio, edição, mudança de fase).

9. **CalendarEvent**
   - Eventos internos persistidos para gerenciamento da agenda.