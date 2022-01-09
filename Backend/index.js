//Importar express
let express = require("express");
import morgan from "morgan";
import { createAdmin, createRoles } from "./libs/initialSetup";
import authRoutes from "./routers/auth.routes";
import userRoutes from "./routers/user.routes";
//const serverRouter = require("./routers/serverRouter");

const materialRoute = require("./routers/material.route");
const cotizacionRoute = require("./routers/cotizacion.route");

//Importar mongoose
const mongoose = require("mongoose");
//Importar url de conexión a la BD
const database = require("./database/db");
//Importar cors
const cors = require("cors");

class Server {
  //constructor
  constructor() {
    createRoles();
    createAdmin();

    this.conectarBD();
    this.app = express();
    //Indicar el puerto por el que se ejecutará el servidor
    this.app.set("port", process.env.PORT || 4000);
    //Indicar que las solicitudes http se trabajará en JSON
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
    /**
     *
     * ******************Rutas**********************
     *
     * ******/
    const router = express.Router();
    router.get("/", (req, res) => {
      console.log("Nueva conexión");
      res.status(200).json({
        message: "¡ CORRIENDO SERVIDOR MODULO DE COTIZACION APPGESTION !",
      });
    });
    //const serverR = new serverRouter.default();

    //añadir las rutas al servidor
    //this.app.use(serverR.router);
    this.app.use(router);

    this.app.use("/api/auth", authRoutes);
    this.app.use("/api", userRoutes);
    this.app.use("/materiales", materialRoute);
    this.app.use("/cotizaciones", cotizacionRoute);
    //Levantar el servidor/correr el servidor
    this.app.listen(this.app.get("port"), () => {
      console.log("Servidor corriendo por el puerto => ", this.app.get("port"));
    });
  }

  conectarBD() {
    mongoose.Promise = global.Promise;
    mongoose
      .connect(database.db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Conexión a BD con éxito");
      })
      .catch((err) => {
        console.error("Error de conexión:", err);
      });
  }
}

const objServer = new Server();
