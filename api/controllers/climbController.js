const mongoose = require('mongoose');
const climb = mongoose.model('climb');

exports.zeige_alle_climbs = (req, res) => {
    climb.find({}, (err, climb) => {
        if (err) res.send(err);
        res.json(climb);
    });
};

exports.erstelle_climb = (req, res) => {
    const newClimb = new climb(req.body);
    newClimb.save((err, climb) => {
        if (err) res.send(err);
        res.json(climb);
    });
};

exports.lese_climb = (req, res) => {
    climb.findById(req.params.climbId, (err, climb) => {
        if (err) res.send(err);
        res.json(climb);
    });
};

exports.aktualisiere_climb = (req, res) => {
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
    climb.deleteOne({ _id: req.params.climbId }, err => {
        if (err) res.semd(err);
        res.json({
            message: 'Climb erfolgreich geloescht',
            _id: req.params.climbId
        });
    });
};