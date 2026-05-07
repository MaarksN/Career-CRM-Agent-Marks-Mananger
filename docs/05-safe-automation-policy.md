# 05 - Safe Automation Policy

## Auto Apply
- **Default Bloqueado**: A funcionalidade de "auto apply" é estritamente bloqueada por padrão.
- Candidaturas automáticas *apenas* são permitidas se houver aprovação humana clara para aquela vaga específica ou regras ativas extremamente criteriosas que respeitem os termos das fontes.

## Aprovação Humana Obrigatória (Human-in-the-Loop)
- Qualquer ação crítica ou modificação do ambiente externo (enviar currículos, interagir com empresas, responder contatos) requer intervenção e aprovação do usuário.
- O sistema prepara a comunicação, gera rascunhos (Drafts) baseados no currículo e vaga, mas o "botão de enviar" exige o toque humano.

## Sem Fingimentos
- O sistema *nunca* marcará algo como "Aplicado" se não houver um `AuditLog` que mostre uma integração da API real com sucesso ou uma confirmação explícita de ação manual do usuário (com upload de evidências na `Evidence Vault`).