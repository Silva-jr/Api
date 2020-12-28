module.exports = app => {
  const controller = require('../controlers/customerWallets')();

  app.route('/api/v1/customer-wallets')
    .get(controller.listCustomerWallets);
}