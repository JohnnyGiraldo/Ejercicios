const express = require("express"); // Requerir Framework
const app = express(); // Crear instancia de express
const morgan = require('morgan');

// Configuraciones
app.set('port', 4000);

// Middlewares
app.use(morgan('dev'));

// Rutas
app.get('/', (req, res)=>{
    res.send({Title:'Hello ADSI 023'})
})

// Configuraciones
app.set("port", 4000);
app.get("/", (req, res) => {
  res.send({ Title: "Hello ADSI 023" });
});
// Se inicia el servidor
app.listen(app.get("port"), () => {
  console.log(`Server Running on port ${app.get("port")}`);
});
