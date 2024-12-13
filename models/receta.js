'use strict';
module.exports = (sequelize, DataTypes) => {
  const Receta = sequelize.define(
    'Receta',
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      categoria: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {}
  );

  Receta.associate = function (models) {
    // Relación muchos a muchos con Ingrediente
    Receta.belongsToMany(models.Ingrediente, {
      through: 'RecetasIngredientes', // Nombre de la tabla intermedia
      foreignKey: 'recetaId',         // Clave foránea en la tabla intermedia
      otherKey: 'ingredienteId',      // Otra clave foránea
    });
  };

  return Receta;
};
