const { Ingrediente, Receta } = require('../models');

module.exports = {
  async create(data) {
    return await Ingrediente.create(data);
  },
  async findAll() {
    return await Ingrediente.findAll({ include: Receta });
  },
  async findById(id) {
    return await Ingrediente.findByPk(id, { include: Receta });
  },
};
