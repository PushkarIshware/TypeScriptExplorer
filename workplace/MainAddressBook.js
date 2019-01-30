"use strict";
exports.__esModule = true;
var read = require('readline-sync');
var AddressManager_1 = require("./AddressManager");
var MainAddressBook = /** @class */ (function () {
    function MainAddressBook() {
    }
    MainAddressBook.prototype.main = function () {
        var manager = new AddressManager_1.AddressManager();
        console.log("************Welcome To AddressBook**************");
        var ch = 0;
        do {
            console.log("Choose Option What Do You Want");
            console.log("1.Create");
            console.log("2.Open");
            //console.log("3.Save");
            // console.log("4.SaveAs");
            console.log("4.Quit");
            ch = parseInt(read.question("Enter Your Choice >>> "));
            //console.log(typeof(ch))
            switch (ch) {
                case 1:
                    console.log("1");
                    manager.Create();
                    break;
                case 2:
                    console.log("2");
                    manager.open();
                    break;
                // case 3:
                //         console.log("3");
                //         manager.save();
                //         break;
                case 3:
                    console.log("exit");
                    break;
                default:
                    console.log("Enter valid choice...");
            }
        } while (ch != 3);
    };
    return MainAddressBook;
}());
var o = new MainAddressBook();
o.main();
