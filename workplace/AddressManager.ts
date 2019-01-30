var read = require('readline-sync');
const fs = require('fs');
const jsonfile = require('jsonfile')
class operations
{
    save()
    {
        console.log("Data saved successfully...")
    }
    addUser()
    {
        var file_name = read.question("confirm file name:");
        const file = file_name;
        var fname = read.question("Enter First Name:");
        var lname = read.question("Enter Last Name:");
        var mnumber = read.question("Enter Mobile Number:");
        var city = read.question("Enter City Name:");
        var state = read.question("Enter State Name:");
        var zip = read.question("Enter State Name:");

        const obj = { first_name : fname,
                      last_name : lname,
                      Mobile_number : mnumber,
                      city_name : city,
                      state_name : state,
                      zip_code : zip};
                                   
        //let info = JSON.stringify(obj);
        jsonfile.writeFileSync(file,obj,{flag:'a'});
        this.save();
        
    }

    edit_menu()
    {
        console.log("************EDITING MENU FOR ADDRESS BOOK**************");
        var ch:number=0;
        do
        {
            console.log("Choose What Do You Want to Update");
            console.log("1.firstname");
            console.log("2.lastname");
            console.log("3.mobile number");
            console.log("4.city");
            console.log("5.state");
            //console.log("6.zip");
            ch = parseInt(read.question("Enter Your Choice >>> "));
            //console.log(typeof(ch))
            switch(ch)
            {
                case 1:
                        console.log("1");
                        this.update_fname();
                        break;
                case 2:
                        console.log("2");
                        this.update_lname();
                        break;
                case 3:
                        console.log("3");
                        this.update_mobileNumber();
                        break;
                case 4:
                        console.log("4");
                        this.update_city();
                        break;
                case 5:
                        console.log("5");
                        this.update_state();
                        break;
                
                case 6:
                        console.log("exit");
                        break;
                default:
                console.log("Enter valid choice...")
            }
        }
        while(ch!=6);
    }

    update_fname()
     {
                const file_name = read.question("confirm file name (without extension):");
                var file_type = '.json';
                var json = require('./'+ file_name + file_type);
                //console.log(JSON.parse(json));

                const myObjStr = JSON.stringify(json);

                //console.log(myObjStr);
                 var data = JSON.parse(myObjStr);

                 console.log(data['first_name']);
                var ufname = read.question("Enter new First name:");
                data['first_name']=ufname;
                console.log(data);
                 
                let info = JSON.stringify(data);
                var parsed_data = JSON.parse(info);
                jsonfile.writeFileSync(file_name,parsed_data);
    }

    update_lname()
     {
                const file_name = read.question("confirm file name (without extension):");
                var file_type = '.json';
                var json = require('./'+ file_name + file_type);
                //console.log(JSON.parse(json));

                const myObjStr = JSON.stringify(json);

                //console.log(myObjStr);
                 var data = JSON.parse(myObjStr);

                 console.log(data['last_name']);
                var ulname = read.question("Enter new Last name:");
                data['last_name']=ulname;
                console.log(data);
                 
                let info = JSON.stringify(data);
                var parsed_data = JSON.parse(info)
                jsonfile.writeFileSync(file_name,parsed_data);
    }

    update_mobileNumber()
     {
                const file_name = read.question("confirm file name (without extension):");
                var file_type = '.json';
                var json = require('./'+ file_name + file_type);
                //console.log(JSON.parse(json));

                const myObjStr = JSON.stringify(json);

                //console.log(myObjStr);
                 var data = JSON.parse(myObjStr);

                 console.log(data['Mobile_number']);
                var umnumber = read.question("Enter new Mobile Number:");
                data['Mobile_number']=umnumber;
                console.log(data);
                 
                let info = JSON.stringify(data);
                var parsed_data = JSON.parse(info)
                jsonfile.writeFileSync(file_name,parsed_data);
    }

    update_city()
     {
                const file_name = read.question("confirm file name (without extension):");
                var file_type = '.json';
                var json = require('./'+ file_name + file_type);
                //console.log(JSON.parse(json));

                const myObjStr = JSON.stringify(json);

                //console.log(myObjStr);
                 var data = JSON.parse(myObjStr);

                 console.log(data['city_name']);
                var ucity = read.question("Enter new City name:");
                data['city_name']=ucity;
                console.log(data);
                 
                let info = JSON.stringify(data);
                var parsed_data = JSON.parse(info)
                jsonfile.writeFileSync(file_name,parsed_data);
    }

    update_state()
     {
                const file_name = read.question("confirm file name (without extension):");
                var file_type = '.json';
                var json = require('./'+ file_name + file_type);
                //console.log(JSON.parse(json));

                const myObjStr = JSON.stringify(json);

                //console.log(myObjStr);
                 var data = JSON.parse(myObjStr);

                 console.log(data['state_name']);
                var ustate = read.question("Enter new State name:");
                data['state_name']=ustate;
                console.log(data);
                 
                let info = JSON.stringify(data);
                var parsed_data = JSON.parse(info)
                jsonfile.writeFileSync(file_name,parsed_data);
    }
    

    Edit()
    {
        this.edit_menu()
    }

    deleteentry(){
        console.log("what you want to delete?");
        console.log("lastname \n number \n state \n city \n exit: ");
        var deletevalue = read.question("");
        switch (deletevalue) {
        // case "firstname": {
        // var file_name = read.question("confirm file name-->");
        // //var extensionname = '.json'
        // var json = require("./"+file_name);
        // const o = JSON.stringify(json);
        // var p = JSON.parse(o);
        // var name = read.question("enter name-->");
        // if(p['firs_tname']==name)
        // {
        // delete p['first_name'];
        // }
        // else{
        // console.log("no such name");
        // }
        // const ob = JSON.stringify(p);
        // var pa = JSON.parse(ob);
        // jsonfile.writeFileSync(file_name,pa);
        // break;
        // }
        case "lastname": {
        var file_name = read.question("confirm file name-->");
        //var extensionname = '.json'
        var json = require("./"+file_name);
        const o = JSON.stringify(json);
        var p = JSON.parse(o);
        var name = read.question("enter name-->");
        if(p['first_name']==name)
        {
        delete p['last_name'];
        }
        else{
        console.log("no such name");
        }
        const ob = JSON.stringify(p);
        var pa = JSON.parse(ob);
        jsonfile.writeFileSync(file_name,pa);
        break;
        }
        case "number": {
        var file_name = read.question("confirm file name-->");
        //var extensionname = '.json'
        var json = require("./"+file_name);
        const o = JSON.stringify(json);
        var p = JSON.parse(o);
        var name = read.question("enter name-->");
        if(p['first_name']==name)
        {
        delete p['Mobile_number'];
        }
        else{
        console.log("no such name");
        }
        const ob = JSON.stringify(p);
        var pa = JSON.parse(ob);
        jsonfile.writeFileSync(file_name,pa);
        break;
        }
        
        case "state": {
        var file_name = read.question("confirm file name-->");
        //var extensionname = '.json'
        var json = require("./"+file_name);
        const o = JSON.stringify(json);
        var p = JSON.parse(o);
        var name = read.question("enter name-->");
        if(p['first_name']==name)
        {
        delete p['state_name'];
        }
        else{
        console.log("no such name");
        }
        const ob = JSON.stringify(p);
        var pa = JSON.parse(ob);
        jsonfile.writeFileSync(file_name,pa);
        break;
        }
        case "city": {
            var file_name = read.question("confirm file name-->");
            //var extensionname = '.json'
            var json = require("./"+file_name);
            const o = JSON.stringify(json);
            var p = JSON.parse(o);
            var name = read.question("enter name-->");
            if(p['first_name']==name)
            {
            delete p['city_name'];
            }
            else{
            console.log("no such name");
            }
            const ob = JSON.stringify(p);
            var pa = JSON.parse(ob);
            jsonfile.writeFileSync(file_name,pa);
            break;
            }
            case "exit": {
            return
            }
            default: {
            console.log("Invalid choice");
            break;
            }
            }
            
            }
}



export class AddressManager extends operations
{
    Create()
    {

        let file_name = read.question("Enter addressbook name .json :>> ");
        var data={name:"address book"};
            //heading : "AddressBook"
        let info = JSON.stringify(data);
        fs.writeFileSync(file_name,info);
    }


    menu()
    {
        console.log("************MENU FOR ADDRESS BOOK**************");
        var ch:number=0;
        do
        {
            console.log("Choose Option What Do You Want");
            console.log("1.Add");
            console.log("2.Edit");
            console.log("3.Delete");
            //console.log("4.SortData");
            console.log("5.Print");
            console.log("6.Quit");
            ch = parseInt(read.question("Enter Your Choice >>> "));
            //console.log(typeof(ch))
            switch(ch)
            {
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
                        //this.delete_menu();
                        this.deleteentry();
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
                console.log("Enter valid choice...")
            }
        }
        while(ch!=6);
    }
    
    open()
    {
        try{
        let file_name = read.question("Enter addressbook name .json :>> ");
        let raw_data = fs.readFileSync(file_name);
        let author = JSON.parse(raw_data);
        console.log(author);
        this.menu();
    }
        catch (err)
        {
            console.log("File not found...");
        }
    }

    

}

