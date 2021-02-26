const mongoose = require('mongoose');

const { Schema } = mongoose;

const climbSchema = new Schema(
    {
        nummer: {
            type: String,
            required: 'Routennummer darf nicht leer sein'
        },
        name: {
            type: String,
            required: 'Routenname darf nicht leer sein'
        },
        grad: {
            type: String,
            required: 'Schwierigkeitsgrad darf nicht leer sein'
        },
        datum: {
            type: String,
            required: 'Datum darf nicht leer sein'
        },
        routenbauer: {
            type: String,
            required: 'Routenbauer darf nicht leer sein'
        },
        sektor: {
            type: String,
            required: 'Sektor darf nicht leer sein'
        }
    },
    { collection: 'climb'}
);

module.exports = mongoose.model('climb', climbSchema);