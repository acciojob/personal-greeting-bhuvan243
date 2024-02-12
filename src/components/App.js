
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState("")
  return (
    <div>
        {/* Do not remove the main div */}
        <form>
          <p>Enter your name:</p>
          <input type="text" onChange={(e) => setName(e.target.value)}/>
        </form>
        
        { name && "Hello "+{name}+"!" }
    </div>
  )
}

export default App
