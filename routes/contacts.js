const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

router.get('/contacts', contactsController.getAllContacts);
router.get('/contacts/:id', contactsController.getSingleContact);

module.exports = router;