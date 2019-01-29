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
var read = require('readline-sync');
var fs = require('fs');
var jsonfile = require('jsonfile');
var operations = /** @class */ (function () {
    function operations() {
    }
    operations.prototype.addUser = function () {
        var file_name = read.question("confirm file name:");
        var file = file_name;
        var fname = read.question("Enter First Name:");
        var lname = read.question("Enter Last Name:");
        var mnumber = read.question("Enter Mobile Number:");
        var city = read.question("Enter City Name:");
        var state = read.question("Enter State Name:");
        var zip = read.question("Enter State Name:");
        var obj = { first_name: fname,
            last_name: lname,
            Mobile_number: mnumber,
            city_name: city,
            state_name: state,
            zip_code: zip };
        //let info = JSON.stringify(obj);
        jsonfile.writeFileSync(file, obj);
    };
    operations.prototype.edit_menu = function () {
        console.log("************EDITING MENU FOR ADDRESS BOOK**************");
        var ch = 0;
        do {
            console.log("Choose What Do You Want to Update");
            console.log("1.firstname");
            console.log("2.lastname");
            console.log("3.mobile number");
            console.log("4.city");
            console.log("5.state");
            console.log("6.zip");
            ch = parseInt(read.question("Enter Your Choice >>> "));
            //console.log(typeof(ch))
            switch (ch) {
                case 1:
                    console.log("1");
                    this.update_fname();
                    break;
                case 2:
                    console.log("2");
                    break;
                case 3:
                    console.log("3");
                    break;
                case 4:
                    console.log("4");
                    break;
                case 5:
                    console.log("5");
                    break;
                case 6:
                    console.log("exit");
                    break;
                default:
                    console.log("Enter valid choice...");
            }
        } while (ch != 6);
    };
    operations.prototype.update_fname = function () {
        var file_name = read.question("confirm file name:");
        var json = require('./'
            + file_name);
        //console.log(JSON.parse(json));
        var myObjStr = JSON.stringify(json);
        //console.log(myObjStr);
        var data = JSON.parse(myObjStr);
        console.log(data['first_name']);
        var ufname = read.question("Enter new First name:");
        data['first_name'] = ufname;
        console.log(data);
        var info = JSON.stringify(data);
        var parsed_data = JSON.parse(info);
        jsonfile.writeFileSync(file_name, parsed_data);
    };
    operations.prototype.Edit = function () {
        this.edit_menu();
    };
    return operations;
}());
var AddressManager = /** @class */ (function (_super) {
    __extends(AddressManager, _super);
    function AddressManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddressManager.prototype.Create = function () {
        var file_name = read.question("Enter addressbook name .json :>> ");
        var data = { name: "address book" };
        //heading : "AddressBook"
        var info = JSON.stringify(data);
        fs.writeFileSync(file_name, info);
    };
    AddressManager.prototype.menu = function () {
        console.log("************MENU FOR ADDRESS BOOK**************");
        var ch = 0;
        do {
            console.log("Choose Option What Do You Want");
            console.log("1.Add");
            console.log("2.Edit");
            console.log("3.Delete");
            console.log("4.SortData");
            console.log("5.Print");
            console.log("6.Quit");
            ch = parseInt(read.question("Enter Your Choice >>> "));
            //console.log(typeof(ch))
            switch (ch) {
                case 1:
                    console.log("1");
                    this.addUser();
                    break;
                case 2:
                    console.log("2");
                    this.Edit();
                    break;
                case 3:
                    console.log("3");
                    break;
                case 4:
                    console.log("4");
                    break;
                case 5:
                    console.log("5");
                    break;
                case 6:
                    console.log("exit");
                    break;
                default:
                    console.log("Enter valid choice...");
            }
        } while (ch != 6);
    };
    AddressManager.prototype.open = function () {
        try {
            var file_name = read.question("Enter addressbook name .json :>> ");
            var raw_data = fs.readFileSync(file_name);
            var author = JSON.parse(raw_data);
            console.log(author);
            this.menu();
        }
        catch (err) {
            console.log("File not found...");
        }
    };
    AddressManager.prototype.save = function () {
    };
    AddressManager.prototype.saveAs = function () {
    };
    return AddressManager;
}(operations));
exports.AddressManager = AddressManager;
