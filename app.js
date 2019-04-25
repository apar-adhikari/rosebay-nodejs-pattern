const express = require('express');
const app = express();
const morgan = require('morgan');
const config = require('./config/config')
const bodyParser = require('body-parser');
const ApiRouter = require('./routes/index');

app.use(bodyParser.json());

if (process.env.NODE_ENV !== 'TEST') {
    app.use(morgan(':date[clf] :method :url :status :response-time ms - :res[content-length]'));
}

app.use('/', ApiRouter);

app.listen(port, () => console.log(`Demo app listening on port ${config.port}!`));

// To export for running tests
module.exports = app;