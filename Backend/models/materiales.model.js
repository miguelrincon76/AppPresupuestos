const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let materialSchema = new Schema(
  {
    materialId: {
      type: String,
    },
    codigo: {
      type: String,
    },
    descripcion: {
      type: String,
    },
    unidad: {
      type: String,
    },
    valorunit: {
      type: Number,
    },
  },
  {
    collection: "materiales",
  }
);

//Covertir a modelo

module.exports = mongoose.model("Material", materialSchema);
