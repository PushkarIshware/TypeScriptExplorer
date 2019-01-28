"use strict";
var read = require('readline-sync');
var Utility = /** @class */ (function () {
    function Utility() {
    }
    Utility.prototype.input = function () {
        var value = read.question("");
        return value;
    };
    Utility.prototype.replaceString = function (username, full_name, mobile) {
        var template = "Hello <<name>>, We have your full name as <<full name>> in our system. your contact number is 91­xxxxxxxxxx. Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016.";
        //console.log("inside replacestring method");
        //console.log(username + " " + full_name + " " + mobile );
        var date = new Date().toLocaleDateString(); // get todays date using inbuilt function
        template = template.replace("<<name>>", username); // replace name,full name,mobile number and date
        template = template.replace("<<full name>>", full_name);
        template = template.replace("xxxxxxxxxx", mobile);
        template = template.replace("01/01/2016", date);
        console.log(template);
    };
    return Utility;
}());
module.exports = Utility;
