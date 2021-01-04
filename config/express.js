var express = require('express');
const bodyParser = require('body-parser');
const config = require('config');  //46.2K(gzipped: 15.3k)
const consign = require('consign'); //13.7K (gzipped: 5.2K)

module.exports = () => {
    const app = express();

    //Setando variáveis da aplicação
    //  require('../routes/customerWallets')(app);

    app.set('port', process.env.PORT || config.get('server.port'));
    //Middleares
    app.use(bodyParser.json());


    //ENDPOINTS
    consign({})
        .then('data')
        .then('controlers')
        .then('routes')
        .into(app);

    return app;

};