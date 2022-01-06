const homeRouter = require('./home');
const productRouter = require('./product');

function rouse(app) {
    app.use('/products', productRouter);
    app.use('/', homeRouter);
}

module.exports = rouse; 