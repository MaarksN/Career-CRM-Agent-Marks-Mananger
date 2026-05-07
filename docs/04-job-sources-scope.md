# 04 - Job Sources Scope

Como as vagas entram no sistema de forma limpa e honesta:

1. **APIs Oficiais e OAuth**
   - Importação automatizada será feita apenas através de vias oficiais (se o provedor possuir API).
   - Se a integração externa não estiver configurada, o sistema deve apresentar estado de `provider_not_configured` ou `official_api_required`.

2. **Extensão do Chrome**
   - O usuário navega e "captura" a vaga ativamente clicando na extensão.
   - Isso evita scraping em background sem permissão ou interação do usuário.

3. **RSS feeds permitidos**
   - A plataforma pode consumir feeds abertos com rate limiting.

4. **Parsing de E-mails / Encaminhamento**
   - O usuário pode autorizar leitura de e-mails específicos (ex: alertas de vagas) ou encaminhar manualmente vagas para um e-mail de parser.

5. **Upload de Documentos / Imagens (OCR)**
   - Extração via IA a partir de PDFs ou imagens que o candidato possua.

6. **Input Manual**
   - Copiar e colar texto ou URL diretamente no CRM.

Qualquer fonte sem permissão ou método não-oficial de automação vira *manual/official_api_required*.