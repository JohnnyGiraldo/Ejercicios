const express = require("express"); //requerir framework
const app = express(); //crear instancia de express
const morgan = require("morgan");
const bodyParser = require("body-parser");

//configuraciones
app.set("port", 4000);

//middlewares
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//rutas
app.use("/api/v1/users", require("./api/v1/routes/users.routes"));

//se inicia el servidor
app.listen(app.get("port"), () => {
  console.log(`server running on port ${app.get("port")}`);
});
