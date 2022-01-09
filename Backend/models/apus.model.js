const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var apuSchema = new Schema(
  {
    apuId: {
      type: String,
      required: [true, "Campo obligatorio"],
    },
    descripcion: {
      type: String,
    },
    cantidad: {
      type: Number,
    },
    valorunit: {
      type: Number,
    },
    valorparcial: {
      type: Number,
    },
  },
  {
    collection: "apus",
  }
);

module.exports = mongoose.model("Apu", apuSchema);
