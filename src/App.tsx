import './App.css'
import Card from './components/card/card.tsx'
import {CardDeck} from './lib/CardDeck.ts';


const App =()=> {
  const cards = new CardDeck;
  const randomCards = cards.getCarts(5);

  return (
    <>
    <div className="playingCards faceImages">
      <Card rank={randomCards[0].rank} suit={randomCards[0].suit}/>
      <Card rank={randomCards[1].rank} suit={randomCards[1].suit}/>
      <Card rank={randomCards[2].rank} suit={randomCards[2].suit}/>
      <Card rank={randomCards[3].rank} suit={randomCards[3].suit}/>
      <Card rank={randomCards[4].rank} suit={randomCards[4].suit}/>
    </div>
    </>
  );
}

export default App
