const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const sim = require('./routes/api/sim');

app.use('/api/sim', sim);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
