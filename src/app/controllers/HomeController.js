const product = require("../models/Product");
const label = require("../models/Label");

function pagination(current, pages) {
    current = Number.parseInt(current);
    let re = [];
    var i = (current > 3 ? current - 2 : 1);
    if(i !== 1) re.push({
        text: '...',
        class: 'pagination-item--disable'
    });
    for(; i <= (current + 2) && i <= pages; i++) {
        if(i == current) re.push({
            text: i,
            class: 'pagination-item--active'
        });
        else re.push({
            text: i,
            class: ''
        });
    }

    if(i-1 === current + 2 && i < pages) re.push({
        text: '...',
        class: 'pagination-item--disable'
    });
    
    return re;
}

class HomeController {
    //[GET] /
    index(req, res, next) {
        console.log(req.session.daDangNhap);
        let perPage = 25; // số lượng sản phẩm xuất hiện trên 1 page
        let page = Number.parseInt(req.query.page) || 1;

        product.find({}).lean()
        .skip((perPage * page) - perPage) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
        .limit(perPage)
        .then (products => {
            product.countDocuments({}, (err, count) => {
                label.find({}).lean()
                .then (labels => res.render('home', {
                    labels, //tất cả nhãn
                    products, //sản phẩm trên page
                    l: 'all', //nhãn hiện tại
                    checkFirst: page-1,
                    items: pagination(page, Math.ceil(count / perPage)),
                    checkLast: Math.ceil(count / perPage) - page,
                    cLast: page+1,
                    checkLogin: req.session.daDangNhap
            }))
            })
        }
        )
        .catch (error => next(error));
    }

    filter(req, res, next) {
        let perPage = 25; // số lượng sản phẩm xuất hiện trên 1 page
        let page = req.query.page || 1;
        
        product.find({ label: req.params.slug }).lean()
        .skip((perPage * page) - perPage) // Trong page đầu tiên sẽ bỏ qua giá trị là 0
        .limit(perPage)
        .then (products => {
            product.countDocuments({ label: req.params.slug }, (err, count) => {
                label.find({}).lean()
                .then (labels => res.render('home', {
                    labels, //tất cả nhãn
                    products, //sản phẩm trên page
                    l: req.params.slug, //nhãn hiện tại
                    checkFirst: page-1,
                    items: pagination(page, Math.ceil(count / perPage)),
                    checkLast: Math.ceil(count / perPage) - page,
                    cLast: page+1,
                    checkLogin: req.session.daDangNhap
            }))
            })
        }
        )
    }
}

module.exports = new HomeController;