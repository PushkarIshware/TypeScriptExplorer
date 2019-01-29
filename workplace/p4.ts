// var inventory = require('./p1')
// var inv = new inventory();
var read = require('readline-sync');
import {Inventory} from './p1';

class InventoryManage extends Inventory
{
    // show_avaibility()
    // {
    //     var inv = new Inventory();
    //     console.log("Available items in our grocery store:\n")
    //     inv.jsonread()
    // }

    input(): any{                           //take input from user using readline-sync module
      
        var value = read.question("");
        return value;
    }

    purchase()
    {
        console.log("Available items in our grocery store:\n")
        console.log("What you want to purchase?\n1.Rice     2.Pulses     3.Wheats\n")
        console.log("Enter Your choice>>>")
        var choice=IM.input();
        console.log("Your choice is "+choice)

        if (choice == 1)
        {
            console.log("Rice details")
            I.rice_details();
            
        }
        else if (choice==2)
        {
            console.log("Pulses details")
            I.pulse_details();
        }
        else if (choice==3)
        {
            console.log("Wheats details")
            I.wheat_details();
        }
        else
        {
            console.log("Invalid Choice...")
        }
        

    }
}


var I = new Inventory();
var IM = new InventoryManage();
//obj.show_avaibility();
IM.purchase();