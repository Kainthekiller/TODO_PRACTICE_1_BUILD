import './App.css';
import {useEffect, useState} from "react";
import Items from "./Component/Items";
import Item from "./Component/Item";
import TodoCreator from "./Component/TodoCreator";
function App() {
    //Use State
    //Need All The Items
    const [allItems, setAllItems] = useState([])

    //Need to Be Able to Select Single Item
    const [singleItem,setSingleItem] = useState("")
    //Use Effect

useEffect(() =>
{
}, [])


    //Custom Methods




    //Main
  return (
    <div className="App">
        <Items setAllItem={setAllItems}  allItem={allItems}/>
        <Item singleItem={singleItem} setSingleItem={setSingleItem}></Item>
        <TodoCreator/>
    </div>
  );
}

export default App;
