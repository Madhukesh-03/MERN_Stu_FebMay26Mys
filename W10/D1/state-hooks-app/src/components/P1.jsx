import { useState } from "react";
//useState basics
//its a react hook that adds state to functional components.
//It returns an array with two values
// 1. Current state value
// 2. A function to update state
//Syntax: 
// const [stateValue, setStateValue] = useState(initialValue);

export function UseStateBasics(){
    //counter
    const [count, setCount] = useState(0);
    return(
        <>
            <h2>useState Basics</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    )
}