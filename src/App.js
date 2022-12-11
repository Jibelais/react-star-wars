import react, {useState, useEffect} from "react"
import Card from "./components/Card";
import './App.sass'

function App() {

  const [shipData, setShipData] = useState([])

  useEffect(() => {
    const resource = 'https://swapi.dev/api/starships'
    const makeApiCall =  async () => {
      const res = await fetch(resource); 
      const json = await res.json(); 
      setShipData(json)
    }
    makeApiCall()
    
    
  }, [])

const shipArr = shipData.results
console.log(shipArr)


const starShips = shipArr?.map((result, index)=> {

  return (
     <Card  shipNames = {result.name} 
            model = {result.model}
            manufacturer = {result.manufacturer}
            capacity = {result.cargo_capacity}
            consumables = {result.consumables}
            
            
            />
  )
})

  return (
    <>
    <div className="container">
      {starShips}
    </div>
    </>
  );
}

export default App;
