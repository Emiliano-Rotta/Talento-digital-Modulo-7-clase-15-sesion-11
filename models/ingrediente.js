'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ingrediente = sequelize.define(
    'Ingrediente',
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tipo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      estacion: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {}
  );

  Ingrediente.associate = function (models) {
    // Relación muchos a muchos con Receta
    Ingrediente.belongsToMany(models.Receta, {
      through: 'RecetasIngredientes', // Nombre de la tabla intermedia
      foreignKey: 'ingredienteId',    // Clave foránea en la tabla intermedia
      otherKey: 'recetaId',           // Otra clave foránea
    });
  };

  return Ingrediente;
};
