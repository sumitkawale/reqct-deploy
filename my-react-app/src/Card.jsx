import React from 'react'
import "./index.css"

const cardStyle = {
    display: 'block',
    maxWidth: "18rem",
}

function Card(props) {
    return (<>
        <a href={props.link} target="_blank" rel="noreferrer" className={`text-white card bg-${props.color}`} style={cardStyle}>
            <div className="card-header">{props.header}</div>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
            </div>
        </a>
    </>);
}
export default Card