//this file send the conection to the models for the mapping of the data

const { User, UserSchema } = require('./user.model');
const { Customer, CustomerSchema } = require('./customer.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));

  //we need to send the associations, after the inits
  User.associate(sequelize.models);
  Customer.associate(sequelize.models);
}

module.exports = setupModels;
