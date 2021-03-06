const uuidv4 = require('uuid/v4');

module.exports = app => {
  const customerWalletsDB = app.data.customerWallets;
  const controller = {};

  const {
    customerWallets: customerWalletsMock,
  } = customerWalletsDB;

  controller.listCustomerWallets = (req, res) => res.status(200).json(customerWalletsDB);

  controller.saveCustomerWallets = (req, res) => {
    debugger;
    
    customerWalletsMock.data.push({
      id: uuidv4(),
      parentID: uuidv4(),
      name: req.body.name,
      birthDate: req.body.birthDate,
      cellphone: req.body.cellphone,
      phone: req.body.phone,
      email: req.body.email,
      ocupation: req.body.ocupation,
      state: req.body.state,
    });

    res.status(201).json(customerWalletsMock);
  }

  controller.removeCustomerWallets = (req, res) => {
    const {
      customerId,
    } = req.params;

    const foundCustomerIndex = customerWalletsMock.data.findIndex(customer => customer.id == customerId);

    if (foundCustomerIndex == -1) {
      res.status(404).json({
        message: 'Cliente não encontrado na base.',
        sucess: false,
        customerWallets: customerWalletsMock,
      });
    }
    else {
      customerWalletsMock.data.splice(foundCustomerIndex, 1);
      res.status(200).json({
        message: 'Cliente encontrado e deletado com sucesso.',
        sucess: true,
        customerWallets: customerWalletsMock,
      });
    }
  };
  controller.updateCustomerWallets = (req, res) => {
    const {
      customerId,
    } = req.params;

    const foundCustomerIndex = customerWalletsMock.data.findIndex(customer => customer.id == customerId);

    if (foundCustomerIndex == -1) {
      res.status(404).json({
        message: 'Cliente não encontrado na base.',
        sucess: false,
        customerWallets: customerWalletsMock,
      }); }
    else {
      const newCustomer = {
        id: customerId,
        parentID: req.body.parentID,
        name: req.body.name,
        birthDate: req.body.birthDate,
        cellphone: req.body.cellphone,
        phone: req.body.phone,
        email: req.body.email,
        ocupation: req.body.ocupation,
        state: req.body.state,
        createdAt: new Date()
      };

      customerWalletsMock.data.splice(foundCustomerIndex, 1, newCustomer);

      res.status(200).json({
        message: 'Cliente encontrado e atualizado com sucesso!',
        sucess: true,
        customerWallets: customerWalletsMock,
      });
    }
  };



  return controller;
}