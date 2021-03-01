const climbBuilder = require('../controllers/climbController');
const routenbauerBuilder = require('../controllers/routenbauerController');
const sektorBuilder = require('../controllers/sektorController');
const gradBuilder = require('../controllers/gradController');
const abschnittBuilder = require('../controllers/abschnittController');

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
        .get(routenbauerBuilder.zeige_alle_routenbauer);

    app
        .route('/sektoren')
        .get(sektorBuilder.zeige_alle_sektoren)

    app
        .route('/grade')
        .get(gradBuilder.zeige_alle_grade)

        
    app
        .route('/abschnitte')
        .get(abschnittBuilder.zeige_alle_abschnitte)
};