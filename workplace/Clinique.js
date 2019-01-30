var read = require('readline-sync');
var fs = require('fs');
var jsonfile = require('jsonfile');
var MainClinique = /** @class */ (function () {
    function MainClinique() {
    }
    MainClinique.prototype.menu = function () {
        var ch = 0;
        do {
            console.log("Welcome to clinique\n\tMENU\n1.Registration\n2.User\n3.Doctor's Info\n4.Exit");
            ch = parseInt(read.question("Enter Your Choice in INT>>> "));
            //console.log(typeof(ch))
            switch (ch) {
                case 1:
                    console.log("1");
                    this.Registration();
                    break;
                case 2:
                    console.log("2");
                    this.User();
                    break;
                case 3:
                    console.log("3");
                    this.Doctor_Info();
                    break;
                case 4:
                    console.log("exit");
                    break;
                default:
                    console.log("Enter valid choice...");
            }
        } while (ch != 4);
    };
    MainClinique.prototype.Doctor_Info = function () {
        this.printjson_patients();
        this.printjson_doctors();
    };
    MainClinique.prototype.User = function () {
        var ch = 0;
        do {
            console.log("You are in hospital\n\tMENU\n1.Check Availability\n2.Take Appointment\n3.Exit");
            ch = parseInt(read.question("Enter Your Choice in INT>>> "));
            //console.log(typeof(ch))
            switch (ch) {
                case 1:
                    console.log("1");
                    this.printjson_doctors();
                    break;
                case 2:
                    console.log("2");
                    this.appointment();
                    break;
                case 3:
                    console.log("exit");
                    break;
                default:
                    console.log("Enter valid choice...");
            }
        } while (ch != 3);
    };
    MainClinique.prototype.appointment = function () {
        var data = this.readjson_doctors();
        var aid = parseInt(read.question("Enter id of doctor >>"));
        var date = read.question("Enter date of appointment >>");
        var time = read.question("Enter time of appointment >>");
        var name = read.question("name of patient >>");
        data.doctors[aid - 1].appoinment = "name: " + name + " time: " + time + " date: " + date;
        console.log(data);
        //data.doctors.push(z);
        jsonfile.writeFileSync('/home/admin1/Typescript/workplace/doctors.json', data, { flag: 'w' });
    };
    MainClinique.prototype.Registration = function () {
        var z = this.readjson_patients();
        var name = read.question("Enter Name:");
        var id = read.question("Enter id:");
        if (id == "")
            throw "ID is required";
        var number = read.question("Enter number:");
        var object = { "name": name,
            "id": id,
            "number": number };
        z.patients.push(object);
        jsonfile.writeFileSync('/home/admin1/Typescript/workplace/Patients.json', z, { flag: 'w' });
    };
    MainClinique.prototype.readjson_patients = function () {
        var data = fs.readFileSync('/home/admin1/Typescript/workplace/Patients.json');
        var content = JSON.parse(data);
        return content;
    };
    MainClinique.prototype.readjson_doctors = function () {
        var data = fs.readFileSync('/home/admin1/Typescript/workplace/doctors.json');
        var content = JSON.parse(data);
        return content;
    };
    MainClinique.prototype.printjson_patients = function () {
        var content = this.readjson_patients();
        for (var _i = 0, _a = content['patients']; _i < _a.length; _i++) {
            var i = _a[_i];
            console.log(i);
        }
    };
    MainClinique.prototype.printjson_doctors = function () {
        var content = this.readjson_doctors();
        for (var _i = 0, _a = content['doctors']; _i < _a.length; _i++) {
            var i = _a[_i];
            console.log(i['id'] + "\t" + i['name'] + "\t" + i['available'] + "\t" + i['Specialist']);
        }
    };
    return MainClinique;
}());
var C = new MainClinique();
C.menu();
// console.log(C.readjson_patients())
//C.printjson_patients();
//C.Doctor_Info();
