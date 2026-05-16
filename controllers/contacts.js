const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAllContacts = async (req, res) => {
    try {
        const result = await mongodb.getDb()
            .collection('contacts')
            .find({})
            .toArray();

        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving contacts' });
    }
};

const getSingleContact = async (req, res) => {
    try {
        const contactId = new ObjectId(req.params.id);

        const contact = await mongodb.getDb()
            .collection('contacts')
            .findOne({ _id: contactId });

        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contact);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving contact' });
    }
};

module.exports = {
    getAllContacts,
    getSingleContact
};
