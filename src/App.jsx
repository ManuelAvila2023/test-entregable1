import { useState } from 'react'
import './App.css'
import ContainerInfo from './components/ContainerInfo'
import db from "./db/db.json"
// import bg1 from "./assets/images/bg1.png"

const images = ["bg1", "bg2", "bg3", "bg4"]

function App() {

  const getRandomItem = (listItems) => {
    const randonIndex =  Math.floor(Math.random() * listItems.length)
    return listItems[randonIndex]    
  }

  const [quote, setQuote] = useState(getRandomItem(db))
  const [bgImage, setBgImage] = useState(getRandomItem(images))

  const handleNewQuote = () =>{
    setQuote(getRandomItem(db)) 
    setBgImage(getRandomItem(images))    
  }

  return (
    <div className={`App ${bgImage}`}>
      {/* <h2>Entregable 01</h2> */}
      {/* <p>{quote.phrase}</p> */}
      <ContainerInfo quote={quote} handleNewQuote={handleNewQuote} />
      {/* <img src="/images/bg1.png" alt="" /> */}
      {/* <img src={bg1} alt="" /> */}
    </div>
  )
}

export default App
