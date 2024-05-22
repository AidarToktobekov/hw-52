import {MyCard} from './MyCard';

export class CardDeck{
    randomNum: number;
    cards: {}[];
    card: {rank?:string,suit?:string};
    randomCards: {rank?:string, suit?:string}[];
    
    constructor(){
        let cards = [{}];
        this.card = {};
        this.randomCards = [];
        this.randomNum = 0;
        let card = new MyCard();
        this.cards = cards;
        
        for (let i = 0; i < 4; i++) {1
            for (let j = 0; j < 13; j++) {
                cards.push(card.getCard(j,i));
            }
        }
    }
    getCard(){
        this.randomNum = Math.floor(Math.random() * 52);
        this.cards[this.randomNum]
        this.card = this.cards[this.randomNum];
        this.cards.splice(this.randomNum, 1);
        return(this.card);
    }
    getCarts(howMany: number){
        this.cards.splice(0, 1);
        
        for (let i = 0; i < howMany; i++) {
            this.randomNum = Math.floor(Math.random() * 52);
            this.card = this.cards[this.randomNum];
            this.cards.splice(this.randomNum, 1);
            this.randomCards.push(this.card);
        }
        console.log(this.cards);
        console.log(this.randomCards);
        
        return(this.randomCards);
    }
}
