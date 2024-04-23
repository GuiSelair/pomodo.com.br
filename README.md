# pomodo

Uma aplicação para ajudar no seu foco utilizando a técnica pomodoro

### Requisitos funcionais (MVP)

- [x] :white_check_mark: O usuário deve poder iniciar o cronometro, pausar e resetar a qualquer momento.
- [x] :white_check_mark: Ao chegar no final do timer de 25 minutos, deve ser iniciado um timer de descanso. Este timer deve ter duranção de 5 minutos.
- [x] :white_check_mark: Quando 4 timers de descanso foram completos, o próximo deverá ter duração de 15 minutos. Após ele, o contador deve resetar e voltar para 5 minutos.
- [x] :white_check_mark: O usuário deve poder pausar a música do player a qualquer momento.
- [x] :white_check_mark: Quando o cronometro estiver ativo, deve estar tocando a música no player, se o player não estiver desativado.
- [x] :white_check_mark: Quando o cronometro for pausado, a música deve ser pausada, se ela já não estiver pausada ou o player não estiver desativado.


### Requisitos não funcionais

- [x] :white_check_mark: O sistema deverá utilizar o Google Analytics 4 para captura de métricas dos usuários.
- [x] :white_check_mark: O sistema deverá ser construido utilizando o framework NextJS na sua versão 14, utilizando o novo sistema de rotas e server components.
- [x] :white_check_mark: O sistema deverá ser construído utilizando a biblioteca shadcn/ui.
- [x] :white_check_mark: O sistema deverá utilizar a biblioteca Redux para compartilhamento de estados globais.
