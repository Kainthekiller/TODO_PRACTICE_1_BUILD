import React, {useState} from "react";
import {Button, Checkbox, Select} from "@mui/material";
import DropdownList from "react-widgets/DropdownList";
import {useHandleSelect} from "react-widgets/List";

function UpdateItem(props)
{
    //Use State
    const [id, setID] = useState(0)
    const [content, setContent] = useState("")
    const [completedStatus, setCompletedStatus] = useState(false)

    //Custom Method
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


function patchRequest(e)
    {

        e.preventDefault()
        fetch(`http://localhost:3001/api/items/${id}`, {
            method: "PATCH",
            body: JSON.stringify({

            content: content,
                completed: completedStatus

            }),
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(fetchAllTodoList)
            .then(() => {
                setID(id)
                setContent("")
                setCompletedStatus(completedStatus)
                console.log(completedStatus)
            })
    }

    function changeStatus(e) {
        setCompletedStatus(e.target.value);
    }
    //Main

    return (
        <>
            <form onSubmit={(e) => {patchRequest(e)}}>

                <input
                    placeholder={"ID"}
                    value={id}
                    onChange={(e) => setID(e.target.value)}
                />
                <input
                    placeholder={"Content"}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <input type="checkbox" onChange={(e) => setCompletedStatus(e.target.checked) }/>Completed?

            </form>
            <Button onClick={(e) => {patchRequest(e, id)}}>Update Item</Button>

        </>
    )
}

export default UpdateItem