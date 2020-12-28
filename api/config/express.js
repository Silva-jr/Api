var express = require('express');
const bodyParser = require('body-parser');
const config = require('config');

module.exports = () => {
    const app = express();

    //Setando variáveis da aplicação
    require('../routes/customerWallets')(app);

    app.set('port', process.env.PORT || config.get('server.port'));

    return app;

    //return app;*/

    //Middleares
    //  app.use(bodyParser.json());

    // const app = express();

    // SETANDO VARIÁVEIS DA APLICAÇÃO


};