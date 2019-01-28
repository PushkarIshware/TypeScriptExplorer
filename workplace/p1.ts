// ***********************************************************************************
// * Purpose: Inventory using JSON.
// *
// * @author : Pushkar Ishware
// * @python version 3.7
// * @platform : VS Code
// * @since 28-1-2019
// *
// ***********************************************************************************


var util = require('./utility');        // consider utility.ts as module and store it into object
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

class Inventory
{   

    constructor()
    {
        
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

var obj = new Inventory();
obj.details();