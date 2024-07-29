import React from "react";

function Card({username,btnText = "click here"}){
    return (
        <>
        <div className="relative h-[400px] w-[300px] rounded-md"></div>
        <div className="bg-red-300">{username}</div>
        <br />
        <button>{btnText}</button>
        </>
    )
}

export default Card