const climbBuilder = require('../controllers/climbController');

module.exports = app => {
    app
        .route('/climbs')
        .get(climbBuilder.zeige_alle_climbs)
        .post(climbBuilder.erstelle_climb);

    app
        .route('/climbs/:climbId')
        .get(climbBuilder.zeige_alle_climbs)
        .put(climbBuilder.aktualisiere_climb)
        .delete(climbBuilder.loesche_climb);
};