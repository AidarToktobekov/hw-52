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
                cards.push(card.setCard(j,i));
            }
        }
        this.cards.splice(0, 1);

    }
    getCard(){
        this.randomNum = Math.floor(Math.random() * 52);
        this.cards[this.randomNum];
        this.card = this.cards[this.randomNum];
        this.cards.splice(this.randomNum, 1);
        return(this.card);
    }
    getCarts(howMany: number){
        this.randomCards = [];
        for (let i = 0; i < howMany; i++) {
            this.randomNum = Math.floor(Math.random() * this.cards.length);
            this.card = this.cards[this.randomNum];
            this.cards.splice(this.randomNum, 1);
            this.randomCards.push(this.card);
        }        
        return(this.randomCards);
    }
}
