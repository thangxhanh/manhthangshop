const homeRouter = require('./home');
const productRouter = require('./product');
var verifyRouter = require('./verify');

function rouse(app) {
    app.use('/verify', verifyRouter);
    app.use('/products', productRouter);
    app.use('/', homeRouter);
}

module.exports = rouse; 