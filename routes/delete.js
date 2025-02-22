const express = require('express');
const router = express.Router();

router.get('/',(request, response) => {
    response.send('<h2>Saludos desde el router "delete.js"</h2>');
});

module.exports = router;