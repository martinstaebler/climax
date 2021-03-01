const mongoose = require('mongoose');

const {Schema} = mongoose;

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

module.exports = mongoose.model('routenbauer', routenbauerSchema);