import React from "react";

//Item: A single item, has edit, mark complete, and delete.
function Item(props)
{

    return (
        <>
            <form >
            <input
            placeholder={"Single Item"}
            value={props.singleItem}
            onChange={(event) => props.setSingleItem(event.target.value)}
            />
            </form>
        </>

    )
}

export default Item