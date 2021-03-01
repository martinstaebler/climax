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

const routenbauerSchema = new Schema(
    {
        vorname: {
            type: String,
            required: 'Vorname kann nicht leer bleiben'
        },
        nachname: {
            type: String,
            required: 'Nachname kann nicht leer bleiben'
        }
    },
    { collection: 'routenbauer'}
);

module.exports = mongoose.model('climb', climbSchema);
module.exports = mongoose.model('routenbauer', routenbauerSchema);