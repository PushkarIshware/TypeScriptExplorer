var read = require('readline-sync');

class Utility
{
    constructor()
    {}
    
    input(): any{                           //take input from user using readline-sync module
      
        var value = read.question("");
        return value;
    }

    replaceString(username:string,full_name:string,mobile:string): any
    {
        var template = "Hello <<name>>, We have your full name as <<full name>> in our system. your contact number is 91­xxxxxxxxxx. Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016."
        //console.log("inside replacestring method");
        //console.log(username + " " + full_name + " " + mobile );

        var date = new Date().toLocaleDateString();         // get todays date using inbuilt function

        template = template.replace("<<name>>",username);   // replace name,full name,mobile number and date

        template = template.replace("<<full name>>",full_name);

        template = template.replace("xxxxxxxxxx",mobile);

        template = template.replace("01/01/2016",date);

        console.log(template);
    }

    details()
    {
        try
        {
            var json = require('./grocery.json');
            //console.log(JSON.parse(json));

            const myObjStr = JSON.stringify(json);

            //console.log(myObjStr);
            var data = JSON.parse(myObjStr);
            //console.log(x['rice'])
        }
        catch (err)
        {
            console.log("Cannot find module 'grocery.json'");
        }
        //for rice
        for(var i of data['rice'])
        {   
            console.log("Rice name : "+i['name']+"\nPrice per KG : "+i['price']+"\nAvaibility : "+i['available']);

            console.log("Total Price is : "+i['price']*i['available']);
        }

        //for pulses
        for(var i of data['pulses'])
        {   
            console.log("pulses name : "+i['name']+"\nPrice per KG : "+i['price']+"\nAvaibility : "+i['available']);

            console.log("Total Price is : "+i['price']*i['available']);
        }

        //for wheats
        for(var i of data['wheats'])
        {   
            console.log("wheats name : "+i['name']+"\nPrice per KG : "+i['price']+"\nAvaibility : "+i['available']);

            console.log("Total Price is : "+i['price']*i['available']);
        }
    }

} 

export = Utility;