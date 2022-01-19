const product = require("../models/Product");
const label = require("../models/Label");

class ProductController {

    //[GET] /products/:slug
    show(req, res, next) {
        product.findOne({ _id: req.params.id }).lean()
            .then (pr => {
                label.findOne({ id: pr.label }).lean()
                .then (la => res.render('products/show', {
                    pr, 
                    la,
                    checkLogin: req.session.daDangNhap
                }))
                .catch (error => next(error));
            })
            .catch (next);
    }

    //[GET] /products/create
    create(req, res, next) {
        res.render('products/create');
    }

    //[POST] /products/store
    store(req, res, next) {
        res.send('3423');
        //res.render('products/create');
    }
}

module.exports = new ProductController;