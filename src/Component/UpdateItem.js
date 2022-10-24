import React, {useState} from "react";
import {Button, Select} from "@mui/material";
import DropdownList from "react-widgets/DropdownList";
import {useHandleSelect} from "react-widgets/List";

function UpdateItem(props)
{
    //Use State
    const [id, setID] = useState(0)
    const [content, setContent] = useState("")
    const [completedStatus, setCompletedStatus] = useState(Boolean)

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

            content: content


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
    const options = [
        { value: true, label: "True" },
        { value: true, label: "True" },
        { value: true, label: "True" }
    ];
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


            </form>
            <Button onClick={(e) => {patchRequest(e, id)}}>Update Item</Button>

        </>
    )
}

export default UpdateItem