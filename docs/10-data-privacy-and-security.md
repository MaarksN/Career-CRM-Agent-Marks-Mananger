# 10 - Data Privacy and Security

O Job Match OS lida com dados profissionais sensiveis: historico de trabalho, salario, documentos, contatos, preferencias, mensagens e agenda. A arquitetura deve aplicar minimizacao, autorizacao por usuario, logs sem PII desnecessaria e trilha de auditoria.

## Principios

- Nunca versionar secrets.
- Usar variaveis de ambiente validadas e gerenciadas no deploy.
- Proteger rotas por autenticacao e autorizacao por dono do recurso.
- Minimizar PII em logs, filas e eventos.
- Permitir exportacao e delecao de dados do usuario nas fases adequadas.
- Registrar `AuditLog` para acoes relevantes.

## Matriz de riscos da Fase 0

| ID   | Risco                                                    | Severidade | Mitigacao                                                                                               | Responsavel                          |
| ---- | -------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| R-01 | Sucesso falso em integracao externa.                     | Alta       | Estados honestos obrigatorios e proibicao de fake success em `docs/17`.                                 | Executor da fase + Validador externo |
| R-02 | Scraping proibido ou automacao contra termos.            | Alta       | Classificacao de fonte por metodo permitido; fonte sem permissao vira `official_api_required`.          | Produto + Engenharia                 |
| R-03 | Auto apply sem aprovacao humana.                         | Alta       | Auto apply bloqueado por padrao; `HumanApproval` antes de acao externa critica.                         | Engenharia                           |
| R-04 | IA inventar experiencia.                                 | Alta       | Resume-as-Code como fonte de verdade, schemas, agente validador e bloqueio de afirmacoes sem evidencia. | IA/Produto                           |
| R-05 | Vazamento de PII em logs ou filas.                       | Alta       | Mascaramento, minimizacao e politica de logs sem dados sensiveis desnecessarios.                        | Engenharia/Sec                       |
| R-06 | Chrome Extension ser tratada como motor 24h.             | Media      | Documentar extensao como captura assistida; worker/backend sera motor autonomo.                         | Arquitetura                          |
| R-07 | Roadmap sem DoD verificavel.                             | Media      | DoD por fase em `docs/11-roadmap-master.md` e aceite global em `docs/13`.                               | Executor                             |
| R-08 | Falha de rastreabilidade de execucao/validacao.          | Alta       | Separar executor e validador, registrar evidencias em `.ops` e manter validacao pendente.               | Executor + Validador                 |
| R-09 | Credencial ou secret versionado.                         | Alta       | `.env` fora do Git, validacao de secrets e revisao antes de commit.                                     | Engenharia                           |
| R-10 | Dependencia externa indisponivel bloquear fluxo interno. | Media      | Degradar para estados honestos e fila de acao manual, sem simular sucesso.                              | Engenharia                           |

## Tratativa

Risco sem mitigacao deve virar `WARN` ou `FAIL` na validacao externa. Risco alto que permita acao externa falsa, vazamento de dados ou candidatura sem aprovacao bloqueia a fase correspondente.
