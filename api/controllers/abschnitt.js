const mongoose = require('mongoose');
const sektor = mongoose.model('abschnitt');

exports.zeige_alle_abschnitte = (req, res) => {
    console.log("mongoose | zeige_alle_abschnittee");
    sektor.find({}, (err, abschnitt) => {
        if (err) res.send(err);
        res.json(abschnitt);
    });
};