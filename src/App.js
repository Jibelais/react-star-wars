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
//I would just spread operator to get all the values in one line and don't forget the key
  return  (
    <Card
      key={index}
      {...result}
    />
  )
})
  if (shipArr) {
    return (
      <>
      <div className="container">
        {starShips}
      </div>
      </>
    );
  } else {
    //you can put a spinner here instead of text
    return (<h1>Loading</h1>)
}

}

export default App;
