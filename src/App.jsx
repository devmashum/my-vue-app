import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Person></Person>
      <Student></Student>
      <Developer></Developer>
    </>
  )

  function Person() {

    const age = 32;
    const person = {
      name: 'Sakib', age: 32
    }
    return <h3>I am {person.name}. I am {person.age} years old</h3>

  }
  function Student() {
    return (
      <div className='student'>
        <h3>This is a student</h3>
        <p>Name:</p>
        <p>age;</p>
      </div>
    )
  }
  function Developer() {
    return (
      <div>
        <h5>Devoloper </h5>
        <p>coading</p>
      </div>
    )
  }





















}

export default App