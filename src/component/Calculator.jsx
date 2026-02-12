import {useState} from "react"


function Calculater(){
    const[display,setDisplay]=useState("")
    const onHandle =(event)=>{
        setDisplay(event.target.textContent+display)
    }
    return(
        <div>
            <div>{display}</div>
            <div>
                 <button onClick={()=>setDisplay("")}>AC</button>
                 <button onClick={()=>setDisplay(display.slice(0,display.length-1))}>DEL</button>
                 <button onClick={onHandle}>%</button>
                 <button onClick={onHandle}>/</button>
            </div>
                <div>
                 <button onClick={onHandle}>9</button>
                 <button onClick={onHandle}>8</button>
                 <button onClick={onHandle}>7</button>
                 <button onClick={onHandle}>*</button>
            </div>
                <div>
                 <button onClick={onHandle}>6</button>
                 <button onClick={onHandle}>5</button>
                 <button onClick={onHandle}>4</button>
                 <button onClick={onHandle}>-</button>
            </div>
                <div>
                 <button onClick={onHandle}>3</button>
                 <button onClick={onHandle}>2</button>
                 <button onClick={onHandle}>1</button>
                 <button onClick={onHandle}>+</button>
            </div>
                  <div>
                 <button onClick={onHandle}>0</button>
                 <button onClick={onHandle}>00</button>
                 <button onClick={onHandle}>.</button>
                 <button onClick={()=>setDisplay(eval(display))}>=</button>
            </div>
        </div>
    )
}

export default Calculater