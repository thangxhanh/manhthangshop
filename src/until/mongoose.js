module.exports = {
    mulipleMongooseToObject: function (mongooses) {
        return mongooses.map(mongoose => mongoose.toOject());
    },
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toOject() : mongoose;
    }
}