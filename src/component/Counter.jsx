import {useState} from "react";


function Counter(){
    const[count,setCount]=useState(0)
    const inc=()=>{
        setCount(count+1)
    }
    const reset=()=>{
        setCount(0)
    }
    const dec=()=>{
        if(count>0){
            setCount(count-1)
        }
        
    }
    return(
        <div>
            <h1>Counter</h1>
            <h1>{count}</h1>
            <button onClick={inc}>+</button>
            <button onClick={reset}>0</button>
            <button onClick={dec}>-</button>
        </div>
    )
}
export default Counter;