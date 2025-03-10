import React from 'react'
import { useState } from 'react'

function Color() {
    const [color, setColor] = useState("blue")
  return (
    <div>
        <h2 style={{color:color}} onMouseEnter={() => setColor("red")} onMouseLeave={() => setColor("blue")}>Hover On Me</h2>
    </div>
  )
}

export default Color