const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

global.Climb = require('./api/models/climbModel');
const routes = require('./api/routes/climbRoutes');

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect(
    'mongodb://localhost/Climax',
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }
);

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

routes(app);
app.listen(port);

app.use((req, res) => {
    res.status(404).send({ url: `${req.originalUrl} nicht gefunden` });
});


console.log(`Server gestartet auf Port ${port}`);