const mongoose = require('mongoose');
const sektor = mongoose.model('sektor');

exports.zeige_alle_sektoren = (req, res) => {
    console.log("mongoose | zeige_alle_sektoren");
    sektor.find({}, (err, sektor) => {
        if (err) res.send(err);
        res.json(sektor);
    });
};
