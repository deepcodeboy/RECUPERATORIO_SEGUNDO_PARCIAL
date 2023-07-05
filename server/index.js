import express from "express";
const port = 5000

//importamos las conexiones de las bases de datos
import {
  createMariadbConnection,
  createMongoConnection,
  createMysqlConnection,
} from "./connections/connectionsDb.js";

const app = express();

// Endpoint para probar la conexión con MongoDB
app.get("/mongodb", async (_req, res) => {
  try {
    await createMongoConnection();
    return res.send({
      msg: "Conectado Correctamente a MongoDB",
    });
  } catch (error) {
    console.log(error);
    return res.send({
      msg: "Error de Conexion a MongoDB",
    });
  }
});

// Endpoint para probar la conexión con MYSQL
app.get("/mysql", async (req, res) => {
  try {
    await createMysqlConnection();
    return res.send({
      msg: "Conectado Correctamente a MYSQL",
    });
  } catch (error) {
    console.log(error);
    return res.send({
      msg: "Error de Conexion a MYSQL",
    });
  }
});

// Endpoint para probar la conexión con MariaDB
app.get("/mariadb", async (req, res) => {
  try {
    await createMariadbConnection();
    return res.send({
      msg: "Conectado Correctamente a MariaDB",
    });
  } catch (error) {
    console.log(error);
    return res.send({
      msg: "Error de Conexion a MariaDB",
    });
  }
});

// Si no existe la ruta devuelve un 404
app.use((req, res, next) => {
  return res.status(404).send({
    msg: "404 - No existe el endpoint establecido",
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
