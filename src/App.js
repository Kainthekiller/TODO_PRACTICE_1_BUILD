import './App.css';
import {useEffect, useState} from "react";
import Items from "./Component/Items";
function App() {
    //Use State
    //Need All The Items
    const [allItems, setAllItems] = useState([])
    //Use Effect

useEffect(() =>
{
}, [])


    //Custom Methods




    //Main
  return (
    <div className="App">
        <Items setAllItem={setAllItems}  allItem={allItems}/>
    </div>
  );
}

export default App;
