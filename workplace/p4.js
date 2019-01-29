"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// var inventory = require('./p1')
// var inv = new inventory();
var read = require('readline-sync');
var p1_1 = require("./p1");
var InventoryManage = /** @class */ (function (_super) {
    __extends(InventoryManage, _super);
    function InventoryManage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // show_avaibility()
    // {
    //     var inv = new Inventory();
    //     console.log("Available items in our grocery store:\n")
    //     inv.jsonread()
    // }
    InventoryManage.prototype.input = function () {
        var value = read.question("");
        return value;
    };
    InventoryManage.prototype.purchase = function () {
        console.log("Available items in our grocery store:\n");
        console.log("What you want to purchase?\n1.Rice     2.Pulses     3.Wheats\n");
        console.log("Enter Your choice>>>");
        var choice = IM.input();
        console.log("Your choice is " + choice);
        if (choice == 1) {
            console.log("Rice details");
            I.rice_details();
        }
        else if (choice == 2) {
            console.log("Pulses details");
            I.pulse_details();
        }
        else if (choice == 3) {
            console.log("Wheats details");
            I.wheat_details();
        }
        else {
            console.log("Invalid Choice...");
        }
    };
    return InventoryManage;
}(p1_1.Inventory));
var I = new p1_1.Inventory();
var IM = new InventoryManage();
//obj.show_avaibility();
IM.purchase();
