# pomodo

Uma aplicação para ajudar no seu foco utilizando a técnica pomodoro

### Requisitos funcionais (MVP)

- [x] :white_check_mark: O usuário deve poder iniciar o cronometro, pausar e resetar a qualquer momento.
- [ ] Ao chegar no final do timer de 25 minutos, deve ser iniciado um timer de descanso. Este timer deve ter duranção de 5 minutos.
- [ ] Quando 4 timers de descanso foram completos, o próximo deverá ter duração de 15 minutos. Após ele, o contador deve resetar e voltar para 5 minutos.
- [ ] O usuário deve poder pausar a música do player a qualquer momento.
- [ ] O usuário deve poder desativar o player de música.
- [ ] Quando o cronometro estiver ativo, deve estar tocando a música no player, se o player não estiver desativado.
- [ ] Quando o cronometro for pausado, a música deve ser pausada, se ela já não estiver pausada ou o player não estiver desativado.
- [ ] Quando o cronometro chegar ao final dos 25 minutos, durante a pausa de 5 minutos, no lugar do player deve aparecer dicas de alongamentos para relaxamento da postura e/ou dicas simples para melhor o foco.

### Requisitos não funcionais

- [ ] O sistema deverá armazenar qualquer informação necessário no local-storage do navegador.
- [ ] O sistema deverá utilizar o Google Analytics 4 para captura de métricas dos usuários.
- [x] :white_check_mark: O sistema deverá ser construido utilizando o framework NextJS na sua versão 14, utilizando o novo sistema de rotas e server components.
- [x] :white_check_mark: O sistema deverá ser construído utilizando a biblioteca shadcn/ui.
- [x] :white_check_mark: O sistema deverá utilizar a biblioteca Redux para compartilhamento de estados globais.
