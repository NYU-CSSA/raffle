import React,{useState,useEffect} from 'react';
import './App.css';

const endNumber = 150

const App = () =>{
  const [number,setNumber] = useState(0)
 
  useEffect(()=>{
    let listener 
    document.addEventListener("keydown",(e)=>{
      if(e.code === "Space"){
        listener = setInterval(()=>{
          let number = Math.round(Math.random()*endNumber)
          setNumber(number)
        },100)
      }else if(e.code === "Enter"){
        clearInterval(listener)
      }
    })
    return ()=>{
      document.removeEventListener("keydown")
    }
  },[])
  
  return <div className="bg">
            <span className="raffleNumber">
                {number}
            </span>
         </div>
}

export default App;
