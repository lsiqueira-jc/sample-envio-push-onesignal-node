## Utilizando o onesignal para evio de push a partir de um projeto node

**Passos**

1. No PushController.js atualize o YOUR_ONESIGNAL_APP_ID
2. No PushController coloque os player_ids deintro de **include_player_ids: [player1,player2,player3...]**
3. yarn install
4. yarn start
5. acione o push através da rota localhost:3333/push


**[Doc API Onesignal](https://documentation.onesignal.com/reference/create-notification)**

**Exemplo de aplicação react-native recebendo o push**

- [Recebendo push no react-native](https://github.com/lsiqueira-jc/sample-push-onesignal-react-native)
