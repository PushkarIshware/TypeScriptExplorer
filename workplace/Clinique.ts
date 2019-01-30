// ***********************************************************************************
// * Purpose: Clinique Management.
// *
// * @author : Pushkar Ishware
// * @python version 3.7
// * @platform : VS Code
// * @since 30-1-2019
// *
// ***********************************************************************************
var read = require('readline-sync');
const fs = require('fs');
const jsonfile = require('jsonfile')
class MainClinique
{
    menu()
    {
        var ch:number=0;
        do
        {
            console.log("Welcome to clinique\n\tMENU\n1.Registration\n2.User\n3.Doctor's Info\n4.Exit");
            ch = parseInt(read.question("Enter Your Choice in INT>>> "));
            //console.log(typeof(ch))
            switch(ch)
            {
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
        }
        while(ch!=4);
    }

    Doctor_Info()
    {
        this.printjson_patients();
        this.printjson_doctors();
    }

    User() 
    {
        var ch:number=0;
        do
        {
            console.log("You are in hospital\n\tMENU\n1.Check Availability\n2.Take Appointment\n3.Exit");
            ch = parseInt(read.question("Enter Your Choice in INT>>> "));
            //console.log(typeof(ch))
            switch(ch)
            {
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
        }
        while(ch!=3);
    }
    appointment() {
        var data = this.readjson_doctors();
        var aid = parseInt(read.question("Enter id of doctor >>"));
        var date = read.question("Enter date of appointment >>");
        var time = read.question("Enter time of appointment >>");
        var name = read.question("name of patient >>")

        data.doctors[aid-1].appoinment="name: "+name+" time: " +time+" date: "+date;
        
       //console.log(data);
        //data.doctors.push(z);
        jsonfile.writeFileSync('/home/admin1/Typescript/workplace/doctors.json',data,{flag:'w'});
    }

    Registration()
    {   var z=this.readjson_patients();
        var name = read.question("Enter Name:");
        var id = read.question("Enter id:");
        if (id=="") throw "ID is required"
        var number:number = read.question("Enter number:");

        var object={"name":name,
                    "id":id,
                    "number":number};
        
        z.patients.push(object);

        jsonfile.writeFileSync('/home/admin1/Typescript/workplace/Patients.json',z,{flag:'w'});

    }

    readjson_patients()
    {
        var data = fs.readFileSync('/home/admin1/Typescript/workplace/Patients.json');
        var content = JSON.parse(data);
        return content;
    }

    readjson_doctors()
    {
        var data = fs.readFileSync('/home/admin1/Typescript/workplace/doctors.json');
        var content = JSON.parse(data);
        return content;
    }

    printjson_patients()
    {
        var content = this.readjson_patients();
        for(var i of content['patients'])
        {
        console.log(i);
        }
    }

    printjson_doctors()
    {
        var content = this.readjson_doctors();
        for(var i of content['doctors'])
        {
        console.log(i['id']+"\t"+i['name']+"\t"+i['available']+"\t"+i['Specialist']);
        }
    }

}

var clinique = new MainClinique();
clinique.menu();
// console.log(C.readjson_patients())
//C.printjson_patients();
//C.Doctor_Info();