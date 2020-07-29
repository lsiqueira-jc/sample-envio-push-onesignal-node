// const connection = require("../database/connection");

module.exports = {
  push(request, response) {
    var sendNotification = function(data) {
      var headers = {
        "Content-Type": "application/json; charset=utf-8"
      };

      var options = {
        host: "onesignal.com",
        port: 443,
        path: "/api/v1/notifications",
        method: "POST",
        headers: headers
      };

      var https = require("https");
      var req = https.request(options, function(res) {
        res.on("data", function(data) {
          console.log("Response:");
          console.log(JSON.parse(data));
        });
      });

      req.on("error", function(e) {
        console.log("ERROR:");
        console.log(e);
      });

      req.write(JSON.stringify(data));
      req.end();
    };

    var message = {
      app_id: "YOUR_ONESIGNAL_APP_ID",
      large_icon:
        "https://s2.glbimg.com/g7ZgpdX0JRGDkZDyCfS-5EtWPfc=/300x250/e.glbimg.com/og/ed/f/original/2014/05/19/rubik.jpg",

      contents: { en: "Teste Luiz 2" },

      //player_ids
      include_player_ids: [
        "54383919-853b-41f5-bf09-068a5d6dab06",
        "e495a704-8c1a-4112-a389-92f8ac5579ef"
      ]
    };

    sendNotification(message);

    return response.json("push enviado");
  }
};
