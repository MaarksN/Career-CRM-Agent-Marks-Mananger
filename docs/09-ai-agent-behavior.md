# 09 - AI Agent Behavior

O uso de IA dentro da plataforma é restrito por guardrails estruturados (Zod / JSON Schema). A IA não tem permissão para inventar ou agir fora de conformidade.

## Multi-Agentes
1. **Agente Coletor**: Limpa os HTMLs capturados, transformando em JSON. Se a extração falha, deve pedir `review_required`.
2. **Agente Analista**: Roda o scoring determinístico (alimentando o motor) com base em pesos pré-definidos.
3. **Agente Validador**: O grande filtro. Bloqueia qualquer output da IA Analista/Estrategista se detectar "invenção" de experiência não presente no `ResumeDocument`.
4. **Agente Estrategista**: Gera *apenas* rascunhos (drafts) de posicionamento e cartas. Nunca envia comunicações.

Todas as interações da IA ficam registradas em *Prompt Logs* visíveis para auditoria, sem expor PII sensíveis em logs não protegidos.