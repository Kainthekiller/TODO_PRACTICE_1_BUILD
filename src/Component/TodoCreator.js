import React, {useState} from "react";
import {Button} from "@mui/material";


function TodoCreator()
{
    //Use State
    const [id, setID] = useState("")
    const [content, setContent] = useState("")
    const [completedStatus, setCompletedStatus] = useState(false)
    //Custom Method

    function postTodo(e)
    {
        e.preventDefault();
        fetch("http://localhost:3001/api/items",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    content: content
                })
            })
            .then(response => {
                if(!response.ok)
                {
                    throw new Error("Bad Input")
                }
                return response.json()
            })
            .then(() => {
                setContent("")
            })
            .catch((e) => {
                console.error(e)
            });
        }


    //Main

    return(
        <>
            <form onSubmit={(e) => {postTodo(e)}}>
                <input
                    placeholder={"Content"}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />

                <Button type={"submit"}>Submit New Todo</Button>
            </form>

        </>
    )
}

export default TodoCreator