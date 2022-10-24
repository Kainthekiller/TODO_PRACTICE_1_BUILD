import React, {useState} from "react";
import {Button} from "@mui/material";

//Item: A single item, has edit, mark complete, and delete.
function DeleteItem(props)
{
    //Use State
    const [idToDelete, setIdToDelete] = useState("");

    //Custom Method
    function deleteTodoItem(id)
    {
        fetch(`http://localhost:3001/api/items/${id}`,{method:"DELETE"})
            .then(fetchAllTodoList)
        //Get all the records
    }
    function fetchAllTodoList() {
        fetch("http://localhost:3001/api/items")
            .then(response => {
                if(!response)
                {
                    throw new Error("Bad Input")
                }
                return response.json()
            })
            .then(data => {
                return props.setAllItem(data);
            })
            .catch((e) => {
                console.error(e)
            })
    }

    return (
    <>
        <h1>Delete By ID:</h1>
        <input
        placeholder={"Input Id"}
        value={idToDelete}
        onChange={(e) => setIdToDelete(e.target.value)}
        />
        <Button onClick={() => deleteTodoItem(idToDelete)}>Submit</Button>
    </>
    )
}

export default DeleteItem