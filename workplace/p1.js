var util = require('./utility'); // consider utility.ts as module and store it into object
var utility = new util();
// var json = require('./grocery.json');
//                                     //console.log(JSON.parse(json));
// const myObjStr = JSON.stringify(json);
//                                     //console.log(myObjStr);
// var x = JSON.parse(myObjStr)
//console.log(x['rice'])
// "{"name":"Skip","age":2,"favoriteFood":"Steak"}"
//console.log(typeof(JSON.parse(myObjStr)));
// Object {name:"Skip",age:2,favoriteFood:"Steak"}
var Inventory = /** @class */ (function () {
    function Inventory() {
    }
    // constructor()
    // {
    // }
    Inventory.prototype.details = function () {
        try {
            var json = require('./grocery.json');
            //console.log(JSON.parse(json));
            var myObjStr = JSON.stringify(json);
            //console.log(myObjStr);
            var data = JSON.parse(myObjStr);
            //console.log(x['rice'])
        }
        catch (err) {
            console.log("Cannot find module 'grocery.json'");
        }
        //for rice
        for (var _i = 0, _a = data['rice']; _i < _a.length; _i++) {
            var i = _a[_i];
            console.log("Rice name : " + i['name'] + "\nPrice per KG : " + i['price'] + "\nAvaibility : " + i['available']);
            console.log("Total Price is : " + i['price'] * i['available']);
        }
        //for pulses
        for (var _b = 0, _c = data['pulses']; _b < _c.length; _b++) {
            var i = _c[_b];
            console.log("pulses name : " + i['name'] + "\nPrice per KG : " + i['price'] + "\nAvaibility : " + i['available']);
            console.log("Total Price is : " + i['price'] * i['available']);
        }
        //for wheats
        for (var _d = 0, _e = data['wheats']; _d < _e.length; _d++) {
            var i = _e[_d];
            console.log("wheats name : " + i['name'] + "\nPrice per KG : " + i['price'] + "\nAvaibility : " + i['available']);
            console.log("Total Price is : " + i['price'] * i['available']);
        }
    };
    return Inventory;
}());
var obj = new Inventory();
obj.details();
