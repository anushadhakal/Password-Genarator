import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LC, NC, SC, UC } from './Data/Data'

function App() {


  let [uppercase, setUppercase] = useState (false)
  let [lowercase, setLowercase] = useState (false)
  let [number, setNumber] = useState (false)
  let [symbol, setSymbol] = useState (false)
  let [password, setPassword] = useState(10)
  let [finalState , setFinalstate] = useState ('')
  
let finalValue = ''
  let storeValue = ''
  let btnClick = ()=>{
    if (uppercase || lowercase || number || symbol){
            if (uppercase){
              storeValue = storeValue + UC
            }
            if (lowercase){
              storeValue = storeValue + LC
            }
            if (number){
              storeValue = storeValue + NC
            }
            if (symbol){
              storeValue = storeValue + SC
            }
            console.log(storeValue)

           for (let i = 0; i < password; i++){
           finalValue += storeValue[Math.floor(Math.random()*storeValue.length)]
           }
           setFinalstate(finalValue)
           

    }else{
      alert('Please select any one option!!!')
    }
  }
  

  let passFunction = (event)=>{
    setPassword (event.target.value)
  }

  let copyPw = ()=>{
    navigator.clipboard.writeText(finalState)
  }

  return (
    <>
      <div  className='heading'>
        <h1>Password Generator</h1>
      </div>
      <br />
      <div className='inputField'>
        <input type="text" value={finalState} readOnly/> <button onClick={copyPw}>Copy</button>
      </div>
      <div className='passLen'>
        <label> Password Length :</label>
        <input type="number" max={20} min={8} value={password} onChange={passFunction}/>
      </div>
      <div  className='upperCase'>
        <label> Include Uppercase Letters :</label>
        <input type="checkbox" checked = {uppercase} onChange={()=>setUppercase(!uppercase)}/>
      </div>
      <div className='lowerCase'>
        <label > Include Lowercase Letters :</label>
        <input type="checkbox" checked = {lowercase} onChange={()=>setLowercase(!lowercase)} />
      </div>
      <div className='inclnum'>
        <label  > Include Numbers :</label>
        <input type="checkbox" checked = {number} onChange={()=>setNumber(!number)} />
      </div>
      <div className='inclSym'>
        <label > Include Symbols</label>
        <input type="checkbox" checked = {symbol} onChange={()=>setSymbol(!symbol)} />
      </div>
      <div className='btn'>
        <button onClick={btnClick}>Generate Password</button>
      </div>
      
    </>
  )
}


export default App
