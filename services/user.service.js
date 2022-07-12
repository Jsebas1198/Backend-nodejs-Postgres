const boom = require('@hapi/boom');

// const getConnection = require('../libs/postgres');

// const pool = require('../libs/postgres.pool');

const { models } = require('./../libs/sequelize');

class UserService {
  constructor() {
    // this.pool = pool;
    // this.pool.on('error', (err) => {
    //   console.error('Unexpected error on idle client', err);
    //   process.exit(-1);
    // });
  }

  async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
  }

  async find() {
    // const client = await getConnection();
    // const result = await client.query('SELECT * FROM tasks');
    // return result.rows;
    //for query with pools
    // const query = 'SELECT * FROM tasks';
    // const result = await this.pool.query(query);
    // return result.rows;

    //Here weuse the ORM with the method findAll
    const result = await models.User.findAll({
      include: ['customer'],
    });
    return result;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('User not found');
    }
    return user;
  }

  async update(id, changes) {
    // const user = await models.User.findByPk(id);

    //to not replicate code,we re utilize the findOne method
    const user = await this.findOne(id);
    const response = await user.update(changes);
    return response;
  }

  async delete(id) {
    // const user = await models.User.findByPk(id);

    //to not replicate code,we re utilize the findOne method
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}

module.exports = UserService;
