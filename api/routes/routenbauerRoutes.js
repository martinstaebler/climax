const routenbauerBuilder = require('../controllers/routenbauerController');

module.exports = app => {
    app
        .route('/routenbauers')
        .get(schrauberBuilder.zeige_alle_routenbauer)
};