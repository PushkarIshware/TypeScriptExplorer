var read = require('readline-sync');
import {AddressManager} from './AddressManager';
class MainAddressBook
{
    

    main()
    {
        var manager=new AddressManager();
        console.log("************Welcome To AddressBook**************");
        var ch:number=0;
        do
        {
            console.log("Choose Option What Do You Want");
            console.log("1.Create");
            console.log("2.Open");
            console.log("3.Save");
            console.log("4.SaveAs");
            console.log("5.Quit");
            ch = parseInt(read.question("Enter Your Choice >>> "));
            //console.log(typeof(ch))
            switch(ch)
            {
                case 1:
                        console.log("1");
                        manager.Create();
                        break;
                case 2:
                        console.log("2");
                        manager.open();
                        break;
                case 3:
                        console.log("3");
                        manager.save();
                        break;
                case 4:
                        console.log("4");
                        manager.saveAs();
                        break;
                case 5:
                        console.log("exit");
                        break;
                default:
                console.log("Enter valid choice...")
            }
        }
        while(ch!=5);
    }
}

var o = new MainAddressBook();
o.main()
