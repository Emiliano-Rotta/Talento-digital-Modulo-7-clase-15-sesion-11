const { sequelize } = require('./models');
const recetaController = require('./controllers/recetaController');
const ingredienteController = require('./controllers/ingredienteController');

async function main() {
  await sequelize.sync({ force: true }); // Sincroniza la base de datos

  // Crear recetas
  const receta1 = await recetaController.create({ nombre: 'Ensalada César', categoria: 'Fría', descripcion: 'Clásica ensalada' });
  const receta2 = await recetaController.create({ nombre: 'Sopa de Tomate', categoria: 'Caliente', descripcion: 'Sopa tradicional' });

  // Crear ingredientes
  const ingrediente1 = await ingredienteController.create({ nombre: 'Tomate', tipo: 'Vegetal', estacion: 'Verano' });
  const ingrediente2 = await ingredienteController.create({ nombre: 'Lechuga', tipo: 'Vegetal', estacion: 'Primavera' });

  // Asociar ingredientes a recetas
  await receta1.addIngrediente(ingrediente1);
  await receta1.addIngrediente(ingrediente2);
  await receta2.addIngrediente(ingrediente1);

  // Obtener todas las recetas con ingredientes
  const recetas = await recetaController.findAll();
  console.log(JSON.stringify(recetas, null, 2));

  // Obtener todos los ingredientes con recetas
  const ingredientes = await ingredienteController.findAll();
  console.log(JSON.stringify(ingredientes, null, 2));
}

main();
