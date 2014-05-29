var express = require('express');
var router = express.Router();
var tournamentDB = require('../db/tournamentDB');

/* GET tournament listing. */
router.get('/', tournamentDB.getTournaments);

module.exports = router;
