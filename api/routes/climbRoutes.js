const climbBuilder = require('../controllers/climbController');
const routenbauerBuilder = require('../controllers/routenbauerController');

module.exports = app => {
    app
        .route('/climbs')
        .get(climbBuilder.zeige_alle_climbs)
        .post(climbBuilder.erstelle_climb);

    app
        .route('/climbs/:climbId')
        .get(climbBuilder.lese_climb)
        .put(climbBuilder.aktualisiere_climb)
        .delete(climbBuilder.loesche_climb);

    app
        .route('/routenbauers')
        .get(routenbauerBuilder.zeige_alle_routenbauer)
};