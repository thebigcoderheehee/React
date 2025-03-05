import React from 'react'
import { useState } from 'react';

function Homework() {
    const [message, setMessage] = useState("Hello, User!");
  return (
    <div>
        <h1>Homework</h1>
        <h2>{message}</h2>
        <button onClick={() => setMessage("I TOLD YOU SO!!!!!!!!!! RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")}>DON'T CLICK ME!!!!!!!!!!!</button>
    </div>
  )
}

export default Homework