// ***********************************************************************************
// * Purpose: Stock Report.
// *
// * @author : Pushkar Ishware
// * @python version 3.7
// * @platform : VS Code
// * @since 30-1-2019
// *
// ***********************************************************************************
var Stock = /** @class */ (function () {
    function Stock() {
    }
    Stock.prototype.jsonread = function () {
        try {
            var json = require('./stock.json');
            var myObjStr = JSON.stringify(json);
            var data = JSON.parse(myObjStr);
            return data;
        }
        catch (err) {
            console.log("Cannot find module 'stock.json'");
        }
    };
    Stock.prototype.Stock_Details = function () {
        var data = this.jsonread();
        for (var _i = 0, _a = data['stock']; _i < _a.length; _i++) {
            var i = _a[_i];
            console.log("stock name : " + i['name'] + "\nPrice : " + i['price'] + "\ntotal : " + i['total']);
            console.log("Total Price is : " + i['price'] * i['total'] + "\n");
        }
    };
    return Stock;
}());
var stock = new Stock();
//stock.jsonread();
stock.Stock_Details();
