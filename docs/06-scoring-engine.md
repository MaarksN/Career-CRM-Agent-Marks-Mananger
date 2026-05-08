# 06 - Scoring Engine

## Objetivo

O scoring mede aderencia entre perfil/curriculo e vaga de forma explicavel. Ele nao decide sozinho uma candidatura e nao pode inventar qualificacoes para elevar nota.

## Entradas

- Perfil do candidato e preferencias.
- Blocos Resume-as-Code comprovaveis.
- Requisitos, responsabilidades, localidade, senioridade e faixa salarial da vaga.
- Historico de candidaturas e feedbacks quando existentes.

## Saidas

- Score geral.
- Fatores positivos.
- Lacunas e riscos.
- Evidencias usadas no calculo.
- Recomendacao: aplicar, revisar, descartar ou pedir acao manual.

## Explicabilidade minima

Cada score deve indicar quais requisitos foram atendidos, quais ficaram parcialmente atendidos e quais nao possuem evidencia no curriculo. Se a IA sugerir ajuste, a sugestao deve referenciar blocos reais do Resume-as-Code.

## Politica anti-invencao

Quando nao houver evidencia para uma experiencia, skill, certificacao ou resultado, a saida deve marcar lacuna. Nunca gerar texto que pareca afirmar experiencia inexistente.
