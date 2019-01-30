// ***********************************************************************************
// * Purpose: Stock Report.
// *
// * @author : Pushkar Ishware
// * @python version 3.7
// * @platform : VS Code
// * @since 30-1-2019
// *
// ***********************************************************************************

class Stock
{
    jsonread():any
    {
        try
        {
            var json = require('./stock.json');

            const myObjStr = JSON.stringify(json);

            var data = JSON.parse(myObjStr);
            return data
            
        }
        catch (err)
        {
            console.log("Cannot find module 'stock.json'");
        }
    }

    Stock_Details()
    {
        var data = this.jsonread();
        for(var i of data['stock'])
        {   
            console.log("stock name : "+i['name']+"\nPrice : "+i['price']+"\ntotal : "+i['total']);

            console.log("Total Price is : "+i['price']*i['total']+"\n");
        }
    }

}

var stock = new Stock();
//stock.jsonread();
stock.Stock_Details();