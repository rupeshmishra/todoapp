var cnfig = require('./config');

module.exports = {
    getDbConnectionString: function(){
        return "mongodb+srv://" + cnfig.uname + ":" + cnfig.pwd + "@cluster0.obcrz.mongodb.net/" + 
        cnfig.dbname + "?retryWrites=true&w=majority";
    }
}