const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

global.Climb = require('./api/models/climbModel');
const routes = require('./api/routes/climbRoutes');