const express = require('express');
const renderTemplate = require('../src/lib/renderTemplate');

const HomePage = require('../src/views/HomePage');

const router = express.Router();

router.get('/', async (req, res) => {
  renderTemplate(HomePage, {}, res);
});

router.get('/episodes', async (req, res) => {
  renderTemplate(HomePage, {}, res);
});
module.exports = router;
