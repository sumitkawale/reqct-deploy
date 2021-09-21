import React from "react";

function ListItem(props) {
    return (<>
        <div>
            <button type="button" onClick={() => {
                props.delete(props.index)
            }}></button>
            <li>{props.task}</li>
        </div>
    </>)
}

export default ListItem