const mongoose = require('mongoose');
const routenbauer = mongoose.model('routenbauer');

exports.zeige_alle_routenbauer = (req, res) => {
    console.log("mongoose | zeige_alle_routenbauer");
    climb.find({}, (err, routenbauer) => {
        if (err) res.send(err);
        res.json(routenbauer);
    });
};
