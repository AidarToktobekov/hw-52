export class PokerHand{
    answer: string;

    constructor(cardsArray:{rank?:string , suit?:string}[]){
        this.answer = '';
        if (cardsArray[0].suit === cardsArray[1].suit && cardsArray[0].suit === cardsArray[2].suit && cardsArray[0].suit === cardsArray[3].suit && cardsArray[0].suit === cardsArray[4].suit) {
            this.answer = 'Flush';
        }
        for (let j = 0; j < cardsArray.length; j++) {
            for (let i = 0; i < cardsArray.length; i++) {
                if (cardsArray[j].rank === cardsArray[i].rank && i !== j) {
                    this.answer = 'Pairs';
                }
                for (let x = 0; x < cardsArray.length; x++) {
                    for (let y = 0; y < cardsArray.length; y++) {
                        if (cardsArray[j].rank === cardsArray[i].rank && cardsArray[x].rank === cardsArray[y].rank || cardsArray[j].rank === cardsArray[x].rank && cardsArray[y].rank === cardsArray[i].rank  || cardsArray[j].rank === cardsArray[y].rank && cardsArray[x].rank === cardsArray[i].rank ) {
                            if (j !== i && j !== y && j !== x && y !== i && y !== x && x !== i) {
                                this.answer = 'Two Pairs';
                            }
                        }
                    }                    
                }
            }
        }
        for (let j = 0; j < cardsArray.length; j++) {
            for (let i = 0; i < cardsArray.length; i++) {
                for (let x = 0; x < cardsArray.length; x++) {
                    if (cardsArray[j].rank === cardsArray[i].rank && cardsArray[j].rank === cardsArray[x].rank) {
                        if (j !== i && j !== x && i !== x) {
                            this.answer = 'Three of a kind';
                        }
                    }   
                }
            }
        }
        if (this.answer === '') {
            this.answer = 'High card';
        }

    }
    getOutcome(){
        return(
            this.answer
        );
    }
}