// ***********************************************************************************
// * Purpose: Deck of Cards.
// *
// * @author : Pushkar Ishware
// * @python version 3.7
// * @platform : VS Code
// * @since 29-1-2019
// *
// ***********************************************************************************
class Deckofcards
{
    cards()
    {
       var suits:any [];
       suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
       var rank:any [];
       rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]

       var card_list: any;
       card_list=[]
       
       var d: number = card_list.length
    
       while (d < 36)
       {
        var i:number; 
        for(var m:number=0;m<=3;m++)
    {
        for(i=0;i<=8;i++)
        {
            var rand_suits = Math.floor(Math.random() * 3) + 0;  // random numbers between 0 to 3 
            var rand_rank = Math.floor(Math.random() * 12) + 0;  // random numbers between 0 to 3
            var rank_val = rank[rand_rank];
            
            var suit_val = suits[rand_suits];
            rank_val = rank_val + "-" + suit_val;
                //for(rank_val in card_list)
                //{
                    if(d!=36)
                    {
                        card_list.push(rank_val);
                        
                    }
                  
                //}
                  
            }
        
        }
            break;
        }
        // var twod:number[][]=new Array();
        // for(var n:number = 0;n<4;n++)
        // {
            
        //     console.log("[");
        //     for(var k:number=0;k<9;k++)
        //     {
        //         twod.push(card_list);
        //         console.log(twod[n][k])
        //     }
        //     console.log();
        //     console.log("]");
        // }
        console.log(card_list);
    }

}
var DOC = new Deckofcards();
DOC.cards();