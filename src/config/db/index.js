const mongoose = require('mongoose');

async function connect() {
    try {
        mongoose.connect('mongodb+srv://lumanhthang:luthang2001@cluster0.hfvgu.mongodb.net/manhthangbeauty?retryWrites=true&w=majority');
        console.log('Connect Successfully!!!');
    } catch(error) {
        console.log('Kết nối lỗi ' + error);
    }
}

module.exports = { connect };