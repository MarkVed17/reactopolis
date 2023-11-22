import React from "react";

export default function AccordianPanel({data, isActive, togglePanel}) {

    return (
    <>
        <div>
            <span>{data.title} </span> 
            <button onClick={() => togglePanel(data.id)}>
                Open
            </button>
        </div> 
        {isActive && <div>{data.content}</div>}
    </>
)}