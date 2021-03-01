const mongoose = require('mongoose');
const sektor = mongoose.model('grad');

exports.zeige_alle_grade = (req, res) => {
    console.log("mongoose | zeige_alle_grade");
    sektor.find({}, (err, grad) => {
        if (err) res.send(err);
        res.json(grad);
    });
};
