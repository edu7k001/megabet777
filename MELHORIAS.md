# MEGABET777 — versão revisada

## Configuração no Render
Defina `CASHINPAY_API_KEY`, `ADMIN_EMAIL` e `ADMIN_PASSWORD` em Environment. Nunca publique o `.env`.

## Principais mudanças
- tema visual unificado e responsivo;
- painel com cashback, histórico, indicações e notificações;
- proteção básica com Helmet e limite de requisições;
- webhook PIX idempotente para evitar crédito duplicado;
- credenciais administrativas removidas do código;
- variáveis de ambiente documentadas.

## Atenção
Antes de operar com dinheiro real, revise autorização legal, KYC, antifraude, proteção de menores, jogo responsável e faça auditoria independente do gateway e dos jogos. SQLite no Render gratuito pode perder dados em reinicializações sem disco persistente; use PostgreSQL em produção.
