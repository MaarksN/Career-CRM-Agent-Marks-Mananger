# 06 - Scoring Engine

A análise de compatibilidade do Job Match OS deve ser determinística, rastreável e baseada em dados, nunca utilizando IA generativa sem regras (alucinação).

## Processo de Scoring
1. **Extração e Normalização:** Componentes da vaga (requisitos, linguagens, senioridade) e do currículo (`SkillTags`, `ExperienceBlocks`) são extraídos e classificados.
2. **Avaliação por Pesos:**
   - A comparação é feita mapeando e avaliando a presença/ausência e tempo de experiência.
3. **Explicação:**
   - O score final *deve* acompanhar um relatório de justificativas em HTML/Markdown (`CompatibilityReport`) detalhando exatamente *o porquê* daquele número.
   - Não se deve inventar experiências. Se o candidato não possui a competência, a pontuação baixa com o aviso explícito de falha.
4. **Sem Números Aleatórios:**
   - O uso de valores chumbados, dados fixos de mocks ou chamadas vazias sem processamento real de perfil será considerado `FAIL`.