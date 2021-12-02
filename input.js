var fs=require("fs");

module.exports = {
    input: function(file){
        var input = fs.readFileSync(file).toString().split("\n");
        return input;
    }
}