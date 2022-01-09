const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var itemSchema = new Schema({
    itemId: {
        type: String,
        required: [true, 'Campo obligatorio']
    },
    descripcion: {
        type: String,
        required: [true, 'Nombre obligatorio']
    },
    unidad: {
        type: String,
    },
    cantidad: {
        type: Number,
    },
    valorunit: {
        type: Number,
    },
    valortotal: {
        type: Number,
    },

}, {
    collection: 'itemscotizacion'
});

module.exports = mongoose.model('Item', itemSchema);