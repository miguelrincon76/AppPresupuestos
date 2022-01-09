const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let cotizacionSchema = new Schema(
  {
    cotizacionId: {
      type: String,
    },
    clienteId: {
      type: String,
    },
    proyecto: {
      type: String,
    },
    contenido: {
      type: String,
    },
    fecha: {
      type: Date,
      default: Date.now,
    },
    ciudad: {
      type: String,
    },
    proponenteId: {
      type: String,
    },

    activo: {
      type: Boolean,
      default: true,
    },
    /*    logoCliente: {
      type: Image,
    },
    logoProponente: {
      type: Image,
    },*/
  },
  {
    collection: "cotizaciones",
  }
);

//Covertir a modelo

module.exports = mongoose.model("Cotizacion", cotizacionSchema);
