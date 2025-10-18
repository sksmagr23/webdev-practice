import Navbar from "./components/Navbar"
import Card from "./components/Card"
function App() {
  
  return (
    <>
      <Navbar/>
      <div className="cards">
        <Card title= "card 1" desc = "card1 ka message" />
        <Card title= "card 2" desc = "card2 ka message" />
        <Card title= "card 3" desc = "card3 ka message" />
        <Card title= "card 4" desc = "card4 ka message" />
      </div>
    </>
  )
}

export default App
// we use classname instead of class
//we write everything in <> and </>
// title and desc are used as props