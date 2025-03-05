import React from 'react'
import { useState } from 'react'

function Event() {
    const [message, setMessage] = useState("Instructions: DON'T CLICK THE BUTTON!!!")
    const [text, setText] = useState("Start Typing⬆️")
    function words() {
        setMessage("THE INSTRUCTIONS TOLD YOU SO!!!!!!!!!! RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    }
    function Text(event) {
        setText(event.target.value)
    }
  return (
    <div>
        <h1>Event</h1>
        <h2>{message}</h2>
        <button onClick={words}>Click Me</button>
        <br/>
        <br/>
        <input type="text" onChange={Text}></input>
        <h1>{text}</h1>
    </div>
    
  )
}

export default Event