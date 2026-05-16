require('dotenv').config();
const express = require('express');

const mongodb = require('./data/database');
const app = express();

const port = process.env.PORT || 3000;

app.use('/', require('./routes'));

mongodb.initDb()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((error) => {
        console.error('Failed to initialize database', error);
        
    });

