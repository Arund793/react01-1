import {useState} from "react";

export default function Square(value, onSquareClick) {

    //function handleClick() {
    //    setValue("x");
    //}

    return (
        <div>
            <button
                className="square" = {onSquareClick}
                //onClick={handleClick}
            >
                {value}
            </button>
        </div>
    );
}
