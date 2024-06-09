const express = require('express');
const recMiddleware = require('../middleware/recMiddleware');
const { getRec } = require('../controllers/recController');

const router = express.Router();

router.get('/recommendation', recMiddleware, getRec);

module.exports = router;