// El objetivo es implementar una relación de muchos a muchos entre Recetas e Ingredientes utilizando Node.js y Sequelize. Toda la información será manejada mediante objetos en el código, sin el uso de rutas HTTP. Se realizarán operaciones básicas para manipular los datos desde el código.

// Instrucciones

// Herramientas:
// Usa Node.js como entorno de desarrollo.
// Implementa Sequelize CLI para generar configuraciones, migraciones y modelos.

// Estructura del Proyecto:
// Organiza el proyecto con la siguiente estructura:
// arduino

// Copiar código
// app/
// ├── config/
// │   └── config.js
// ├── controllers/
// │   ├── recetaController.js
// │   ├── ingredienteController.js
// ├── migrations/
// ├── models/
// │   ├── receta.js
// │   ├── ingrediente.js
// │   └── index.js
// ├── index.js


// Configuración de la Base de Datos:

// La base de datos se llamará db_cocina.
// Define la configuración en el archivo config/config.js.

// Modelos:
// Crea dos modelos:
// Receta: con atributos: nombre (nombre de la receta), categoria (fría, caliente, guarnición, etc.), y descripcion (opcional).
// Ingrediente: con atributos: nombre (nombre del ingrediente), tipo (vegetal, especia, carne, etc.), y estacion (primavera, verano, etc.).

// Configura una relación de muchos a muchos entre Recetas e Ingredientes, usando una tabla intermedia llamada RecetasIngredientes.

// Controladores:
// Implementa las siguientes funcionalidades en los controladores:
// Crear y guardar una nueva receta.
// Obtener todos los ingredientes de una receta específica.
// Obtener todas las recetas con sus ingredientes asociados.
// Actualizar una receta específica.
// Eliminar una receta.

// Crear y guardar un nuevo ingrediente.
// Obtener un ingrediente específico.
// Obtener todos los ingredientes con sus recetas asociadas.


// Prueba:
// Implementa y prueba todo directamente en index.js, utilizando objetos. (si alguno quiere lo puede hacer con rutas.)


//npm init -y

//npm install sequelize sequelize-cli pg pg-hstore

//npx sequelize-cli init

// configurar config

//npx sequelize-cli db:create

//modificar migraciones (si es necesario) modificar los modelos.

//npx sequelize-cli db:migrate

//hacer controlers e index.

//node index.js
