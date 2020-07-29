## Utilizando o onesignal para enviar um push a partir de um projeto node

**Passos**

1. No PushController.js atualize o YOUR_ONESIGNAL_APP_ID
2. No PushController coloque os player_ids deintro de **include_player_ids: [player1,player2,player3...]**
3. yarn install
4. yarn start
5. acione o push através da rota localhost:3333/push

**Exemplo de aplicação react-native recebendo o push**

- [Enviando push a partir do node](https://github.com/lsiqueira-jc/sample-envio-push-onesignal-node)
