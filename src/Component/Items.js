import React from "react";
import {Button} from "@mui/material";


//Items: Renders all Item components
function Items(props) {
    //Use State

    //Use Effect

    //Custom Methods
    function fetchAllTodoList() {
        fetch("http://localhost:3001/api/items")
            .then(response => {
                return response.json()
            })
            .then(data => {
                return props.setAllItem(data);
            })
    }

        //Main


        return (
            <>
                <Button onClick={fetchAllTodoList}>Get All Items</Button>
                {props.allItem.map((item) =>{
                  const {id,content, completed } = item;
                return (
                    <div key={id}>
                        <p>id: {id}</p>
                        <p>content: {content}</p>
                        <p>completed: {completed.toString()}</p>
                        <br/>
                    </div>
                )
                })}
            </>
        )
}

export default Items
