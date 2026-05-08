# 01 - Product Blueprint

## Visao do produto

Job Match OS e um Career CRM orientado a decisao. Ele organiza vagas como leads, candidaturas como pipeline, curriculo como codigo versionado e automacoes como fluxos com rastreabilidade e aprovacao humana.

## O que o produto faz

- Centraliza oportunidades de emprego vindas de fontes permitidas.
- Mantem um pipeline de candidatura com tarefas, prazos, status e historico.
- Analisa compatibilidade entre perfil e vaga com score explicavel.
- Usa Resume-as-Code para versionar experiencias, habilidades, conquistas e curriculos gerados.
- Aciona IA apenas sobre dados fornecidos ou integracoes oficiais configuradas.
- Registra auditoria em acoes relevantes.

## O que o produto nao faz

- Nao inventa experiencia profissional, formacao, certificacao ou habilidade.
- Nao executa auto apply por padrao.
- Nao faz scraping proibido.
- Nao finge envio, login, integracao ou sucesso externo.
- Nao usa memoria in-process como runtime principal para dados do produto.

## Objetos centrais

- **Vaga como lead:** toda vaga tem fonte, status, evidencia de origem, politica da fonte e score.
- **Candidatura como pipeline:** toda candidatura tem etapa, responsavel, tarefas, logs, versao de curriculo e decisao humana.
- **Resume-as-Code:** o curriculo e composto por blocos estruturados, versionaveis e rastreaveis.
- **Auditoria como default:** acoes relevantes geram `AuditLog` com ator, motivo, entrada, saida e resultado.

## Criterios globais de aceite

- Toda entrega interna deve ser funcional no escopo da fase.
- Toda fase separa `executado` de `validado`.
- Toda validacao final deve ser feita por agente ou pessoa diferente de quem executou.
- Toda integracao externa sem configuracao oficial deve retornar estado honesto.
- Toda automacao externa critica deve aguardar aprovacao humana.
