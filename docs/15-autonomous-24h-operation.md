# 15 - Autonomous 24h Operation

A premissa do Job Match OS é liberar o tempo do candidato. Mas a plataforma deve rodar 24h de forma segura no servidor, não dependendo de abas ativas.

1. **Agendadores (Schedulers)**: Verificam e-mails, processos parados e disparam alertas por Telegram ou email.
2. **Workers**: Um `apps/worker` rodando BullMQ escutará filas do Redis para processar extrações demoradas (OCR ou LLM Analytics) em segundo plano, enviando uma notificação push via websocket para o UI quando acabar.
3. Se o worker cai, um alerta precisa ser registrado; o frontend deve avisar que o sistema opera em modo "Degraded" e não falhar silenciosamente perdendo mensagens (Dead Letter Queues).