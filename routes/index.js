const router = require('express').Router();


router.get('/', (req, res) => {
    res.send('Hello World');
});

router.get('/contacts', require('./contacts')
);

router.get('/contacts/:id', require('./contacts'));


module.exports = router;

