const mongoose = require('mongoose');
const climb = mongoose.model('climb');

exports.zeige_alle_climbs = (req, res) => {
    console.log("mongoose | zeige_alle_climbs");
    climb.find({}, (err, climb) => {
        console.log("zeige_alle_climbs");
        if (err) res.send(err);
        res.json(climb);
    });
};

exports.erstelle_climb = (req, res) => {
    console.log("mongoose | erstelle_climb");
    const newClimb = new climb(req.body);
    newClimb.save((err, climb) => {
        if (err) res.send(err);
        res.json(climb);
    });
};

exports.lese_climb = (req, res) => {
    console.log("mongoose | lese_climb");
    climb.findById(req.params.climbId, (err, climb) => {
        if (err) res.send(err);
        res.json(climb);
    });
};

exports.aktualisiere_climb = (req, res) => {
    console.log("mongoose | aktualisiere_climb");
    climb.findOneAndUpdate(
        { _id: req.params.climbId },
        req.body,
        { new: true },
        (err, climb) => {
            if (err) res.send(err);
            res.json(climb);
        }
    );
};

exports.loesche_climb = (req, res) => {
    console.log("mongoose | loesche_climb");
    climb.deleteOne({ _id: req.params.climbId }, err => {
        if (err) res.semd(err);
        res.json({
            message: 'Climb erfolgreich geloescht',
            _id: req.params.climbId
        });
    });
};