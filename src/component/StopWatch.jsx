import {useState ,useRef,useEffect} from "react"
import "../App.css"


function StopWatch(){
    const[isRuning,setIsRuning]=useState(false)
    const[elapsedTime,setElapsedTime]=useState(0)
    const intervalIdRef=useRef(null)
    const startTimeRef=useRef(0)
    

    useEffect (()=>{
            if(isRuning){
               intervalIdRef.current=  setInterval(()=>{
                    setElapsedTime(Date.now() - startTimeRef.current)
                },10)
               
            }
            return ()=>{
                clearInterval(intervalIdRef.current)
            }
        
    },[isRuning])

function start(){
    setIsRuning(true)
    startTimeRef.current=Date.now() - elapsedTime
}
function stop(){
     setIsRuning(false)

}
function reset(){
   setElapsedTime(0)
   setIsRuning(false)
    
}
function formatTime(){
    let hours=Math.floor(elapsedTime / (1000 * 60 * 60))
    let min=Math.floor(elapsedTime / (1000 * 60 ) % 60)
    let sec=Math.floor(elapsedTime / (1000) % 60)
    let milisec=Math.floor((elapsedTime % 1000) /10) 

    hours = String(hours).padStart(2 , "0")
    min = String(min).padStart(2 , "0")
    sec = String(sec).padStart(2 , "0")
    milisec = String(milisec).padStart(2 , "0")


    return `${min}:${sec}:${milisec}`

}
    return(
        <div className="watch">
            <h1>Stopwatch</h1>
            <h1 className="display">{formatTime()}</h1>
            <button onClick={start} className="start-button">start</button>
            <button onClick={reset} className="reset-button">reset</button>
            <button onClick={stop} className="stop-button">stop</button>
        </div>
    )          
}


export default StopWatch