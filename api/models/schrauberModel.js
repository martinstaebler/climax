const mongoose = require('mongoose');

const {Schema} = mongoose;

const schrauberSchema = new Schema(
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
    { collection: 'schrauber'}
);

module.exports = mongoose.model('schrauber', schrauberSchema);