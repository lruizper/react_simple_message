import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [mymessage, setMymessage] = React.useState('Lanie in da house <3')
  // return <h1>{mymessage}</h1>;
  function handleClick() {
    setMymessage('second message here')
  }
  
  return (
// java lets us use an empty tag to wrap multiple HLTM elements
// this is useful because return can only take a single element
// the trick is that it can contain multiple elements inside :D 
    <> 
      <h1>{mymessage}</h1>
      <button onClick={handleClick}>update the message</button>
      <img src={reactLogo} alt="react logo" />
      <img src={viteLogo} alt="vite logo" />
    </>
  )
}

export default App;
