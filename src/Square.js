import {useState} from "react";

export default function Square({value, onSquareClick}) {

    //function handleClick() {
    //    setValue("x");
    //}

    return (
        <div>
            <button
                className="square" onClick = {onSquareClick}
                //onClick={handleClick}
            >
                {value}
            </button>
        </div>
    );
}
