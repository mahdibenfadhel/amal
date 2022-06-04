const platforms = require('./routes/flatforms');

const express = require('express');
const app = express();



app.use(express.json());
app.use('/api/platforms', platforms);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
