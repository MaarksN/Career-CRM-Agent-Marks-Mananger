# 01 - Product Blueprint

O blueprint do Job Match OS define seus pilares fundamentais.

## Pilar 1: Resume-as-Code

O currículo deixa de ser um documento para se tornar uma base de dados modular:
- Experiências como blocos (ExperienceBlocks).
- Competências como tags (SkillTags).
- Conquistas parametrizadas (Achievements).
Dessa base, a plataforma compila (como um build process) versões de currículos contextualizadas e ATS-friendly.

## Pilar 2: Career CRM (Pipeline de Vagas)

- Tratar vagas como "Leads".
- Estágios claros: Descoberta, Análise, Preparação, Candidatura, Entrevista, Oferta.
- O foco é a **gestão ativa** do candidato e não o recebimento passivo de e-mails.

## Pilar 3: Operação 24h via Worker/Backend

- O motor de buscas e processamento roda no backend via processos em background (Redis/BullMQ), permitindo análises assíncronas 24/7 sem depender de uma aba de navegador aberta.

## Pilar 4: Chrome Extension como Ferramenta de Captura (Cockpit)

- A Chrome Extension existe estritamente para capturar vagas enquanto o usuário navega na web, identificar a aderência na hora e enviar ao backend.
- A extensão *não* é o motor principal; o worker de backend é quem processa tudo de pesado.

## Pilar 5: Política Anti-Fake (Verdade Suprema)

- O sucesso é apenas sucesso verdadeiro.
- Candidaturas não são forjadas, interações não são mockadas, integrações de APIs ocorrem ou retornam erro honesto de falta de configuração.
- Tudo deve ser rastreado por AuditLogs.