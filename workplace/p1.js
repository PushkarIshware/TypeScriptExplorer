"use strict";
// ***********************************************************************************
// * Purpose: Inventory using JSON.
// *
// * @author : Pushkar Ishware
// * @python version 3.7
// * @platform : VS Code
// * @since 28-1-2019
// *
// ***********************************************************************************
exports.__esModule = true;
// var util = require('./utility');        // consider utility.ts as module and store it into object
// var utility = new util(); 
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
    Inventory.prototype.jsonread = function () {
        try {
            var json = require('./grocery.json');
            //console.log(JSON.parse(json));
            var myObjStr = JSON.stringify(json);
            //console.log(myObjStr);
            var data = JSON.parse(myObjStr);
            return data;
            //console.log(x['rice'])
        }
        catch (err) {
            console.log("Cannot find module 'grocery.json'");
        }
    };
    Inventory.prototype.rice_details = function () {
        var data = this.jsonread();
        //for rice
        for (var _i = 0, _a = data['rice']; _i < _a.length; _i++) {
            var i = _a[_i];
            console.log("Rice name : " + i['name'] + "\nPrice per KG : " + i['price'] + "\nAvaibility : " + i['available']);
            console.log("Total Price is : " + i['price'] * i['available'] + "\n");
        }
    };
    Inventory.prototype.pulse_details = function () {
        //for pulses
        var data = this.jsonread();
        for (var _i = 0, _a = data['pulses']; _i < _a.length; _i++) {
            var i = _a[_i];
            console.log("pulses name : " + i['name'] + "\nPrice per KG : " + i['price'] + "\nAvaibility : " + i['available']);
            console.log("Total Price is : " + i['price'] * i['available'] + "\n");
        }
    };
    Inventory.prototype.wheat_details = function () {
        //for wheats
        var data = this.jsonread();
        for (var _i = 0, _a = data['wheats']; _i < _a.length; _i++) {
            var i = _a[_i];
            console.log("wheats name : " + i['name'] + "\nPrice per KG : " + i['price'] + "\nAvaibility : " + i['available']);
            console.log("Total Price is : " + i['price'] * i['available'] + "\n");
        }
    };
    return Inventory;
}());
exports.Inventory = Inventory;
var obj = new Inventory();
//obj.details();
//console.log(obj.jsonread());
//obj.rice_details();
//export = Inventory;
