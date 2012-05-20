exports.setupenv = function(){
    process.env.MONGO_URI = (process.env.MONGO_URI || 'localhost:27017/test');
//    process.env.MONGO_URI = (process.env.MONGO_URI || '<username>:<password>@<hostname>:<port>/<dbname>');
};