var util = require('./utility'); // consider utility.ts as module and store it into object
var utility = new util(); // create instance of that module
var RegExpression = /** @class */ (function () {
    function RegExpression() {
    }
    RegExpression.prototype.input = function () {
        try {
            console.log("Enter UserName:");
            var username = utility.input();
            if (username == "")
                throw "Username required...";
            console.log("Enter Full Name:");
            var full_name = utility.input();
            if (full_name == "")
                throw "full name required...";
            console.log("Enter Mobile Number:");
            var mobile = utility.input();
            if (mobile == "")
                throw "Number required...";
            if (mobile.length != 10)
                throw "Number should be of 10 digits...";
            // console.log(typeof(mobile));
            //var z : number = parseInt(mobile);
            // console.log(typeof(z));
            utility.replaceString(username, full_name, mobile);
        }
        catch (err) {
            console.log(err);
            console.log("Try again...");
            this.input();
        }
    };
    return RegExpression;
}());
var object = new RegExpression();
object.input(); //calling input method
