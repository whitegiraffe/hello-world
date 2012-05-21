exports.setupenv = function(){

//    process.env.MONGO_URI = (process.env.MONGO_URI || '[username:password@]host:port/dbname');
    process.env.MONGO_URI = (process.env.MONGO_URI || 'localhost:27017/test');

};