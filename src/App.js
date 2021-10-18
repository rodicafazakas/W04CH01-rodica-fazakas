import './App.css';
import Card from "./Card.js"; 
import { gentlemen } from "./gentlemen.js";

function App() {
  return (
    <>
        <Card id={gentlemen[0].id} name={gentlemen[0].name} status={gentlemen[0].status} profession={gentlemen[0].profession}/>
        
        <Card id={gentlemen[1].id} name={gentlemen[1].name} status={gentlemen[1].status} profession={gentlemen[1].profession}/>
        
        <Card id={gentlemen[2].id} name={gentlemen[2].name} status={gentlemen[2].status} profession={gentlemen[2].profession}/>
    </>
  );
}

export default App;
