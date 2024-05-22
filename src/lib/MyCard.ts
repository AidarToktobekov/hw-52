export class MyCard{
    ranks: string[];
    suits: string[];

    constructor(){
        this.ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'];
        this.suits = ['diams', 'hearts', 'clubs', 'spades',];
    }
    setCard(rank: number, suit:number){
        return({rank: this.ranks[rank], suit: this.suits[suit]});
    }
}
