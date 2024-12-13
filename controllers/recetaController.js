const { Receta, Ingrediente } = require('../models');

module.exports = {
  async create(data) {
    return await Receta.create(data);
  },
  async findAll() {
    return await Receta.findAll({ include: Ingrediente });
  },
  async findById(id) {
    return await Receta.findByPk(id, { include: Ingrediente });
  },
  async update(id, data) {
    return await Receta.update(data, { where: { id } });
  },
  async delete(id) {
    return await Receta.destroy({ where: { id } });
  },
};
