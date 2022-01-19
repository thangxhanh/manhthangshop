const account = require("../models/Account");

class VerifyController {
    //[GET] //verify/login
    login(req, res, next) {
        res.render('verify/login');
    }

    //[GET] /verify/register
    register(req, res, next) {
        res.render('verify/register');
    }

    //[POST] /verify/save
    save(req, res, next) {
        let em = req.body.email;
        let p = req.body.pass;

        const bcrypt = require("bcrypt");        
        var salt = bcrypt.genSaltSync(10);
        var pass_mahoa = bcrypt.hashSync(p, salt);

        let user_info = new account({email:em, password:pass_mahoa});
        user_info.save();
        res.redirect("/verify/login");
    }

    dangnhap_(req, res) {
        let u = req.body.email;
        let p = req.body.pass;
        account.findOne({ email: u }).lean()
        .then(acc => {
            if (!acc) { console.log("Sai TK"); res.redirect("/verify/login"); return;}      
            let pass_fromdb = acc.password; 
            const bcrypt = require("bcrypt");
            var kq = bcrypt.compareSync(p, pass_fromdb);
            if (kq){
                var sess = req.session;  //initialize session variable
                sess.daDangNhap = true;
                sess.username = acc.username; 
                console.log("OK");
                res.redirect('/');
            }
            else {
                console.log("Not OK");
                res.redirect("/verify/login");
            }
        })
    }

    logout(req, res) {
        var sess = req.session;
        console.log(sess.daDangNhap);
        sess.daDangNhap = false;
        console.log(sess.back);
        res.redirect('/');
    }
    
}

module.exports = new VerifyController;