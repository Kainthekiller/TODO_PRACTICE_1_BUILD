import './App.css';
import {Component, useEffect, useState} from "react";
import Items from "./Component/Items";
import Item from "./Component/Item";
import TodoCreator from "./Component/TodoCreator";
import Delete from "./Component/DeleteItem";
import UpdateItem from "./Component/UpdateItem";
function App() {
    //Use State
    //Need All The Items
    const [allItems, setAllItems] = useState([])

    //Need to Be Able to Select Single Item
    const [singleItem,setSingleItem] = useState("")
    //Use Effect

useEffect(() =>
{
document.title = "Hello Phil"
}, [allItems])


    //Custom Methods




    //Main
  return (
    <div className="App">

        <Items setAllItem={setAllItems}  allItem={allItems}/>
        <Item singleItem={singleItem} setSingleItem={setSingleItem}></Item>
        <TodoCreator allItem={allItems} setAllItem={setAllItems}/>
        <Delete allItem={allItems} setAllItem={setAllItems}/>
        <UpdateItem allItem={allItems} setAllItem={setAllItems}/>
    </div>
  );
}






export default App;
