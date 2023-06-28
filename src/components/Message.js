import { useState } from "react"

export const Message=(props)=>{
    const [Message, setMessage]=useState('Welcome')
    return  <div>
    <h1>{Message}</h1>
    <button onClick={()=> setMessage('Thank you')}>
        Subscribe
    </button>
    </div>
    
}