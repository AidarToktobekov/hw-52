import './App.css'
import Card from './components/card/card.tsx'

const App =()=> {

  return (
    <>
    <div className="playingCards faceImages">
      <Card rank={'a'} suit={'spades'}/>
    </div>
    </>
  )
}

export default App
