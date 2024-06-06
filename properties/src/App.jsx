
import './App.css'
import Header from './Header'


function App() {
  const person = {
    name: "fatima",
    age: 21,
    message : "hi there",
    seatNumber : [1,4,6]
  }
 
  return (
    <div>
      <Header name='Fatima' age={21}/>
      <Header name='Fiza' age={21}/>
      <Header person={person}/>


    </div>
      
  )
}

export default App
