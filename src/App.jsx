import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './actor'
import Singer from './Singer'

function App() {
  const [count, setCount] = useState(0)

  const actors = ['Sakib', 'Shoriful', 'Jasim', 'Riaz', 'Salman'];

  const singers = [
    { name: 'Dr. Mahfuzur Rahman', age: 68 },
    { name: 'Eva Rahman', age: 38 },
    { name: 'Shuvro Dev', age: 58 },
    { name: 'Pritom', age: 28 },
  ]

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
      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }

      <h1>Vite + React</h1>
      <Actor name='Bappa Raz'></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }
      {/* <Todo task='Learn React'
        isDone={true}></Todo>
      <Todo
        task='Explore core concept'
        isDone={false}></Todo>
      <Todo
        task='Try JSX'
        isDone={true}></Todo> */}

      {/* <Device name='Laptop' price='55'></Device>
      <Device name='Mobile' price='30000'></Device>
      <Device name='Watch' price='300'></Device>
      <Person></Person>
      <Student garde='7' score='99'></Student>
      <Student garde='10' score='80'></Student>
      <Student garde='9' score='70'></Student>
      <Student garde='5' score='100'></Student>
      <Student></Student>
      <Developer></Developer>
      <Third></Third> */}
    </>
  )
  function Device(props) {
    return <h2>This device{props.name} {props.price}</h2>
  }



  function Person() {

    const age = 32;
    const person = {
      name: 'Sakib', age: 32
    }
    return <h3>I am {person.name}. I am {person.age} years old</h3>

  }
  // destructuring Method

  const { garde, score } = { garde: '5', score: '100' }

  function Student({ garde = 1, score = 0 }) {
    return (
      <div className='student'>
        <h3>This is a student. </h3>
        <p>Grade: {garde}</p>
        <p>Score: {score}</p>
      </div>
    )
  }
  function Developer() {
    const developerStyle = {
      border: '2px solid orange',
      padding: '20px',
      margin: '20px',
      borderRadius: '20px',

    }
    return (
      <div style={developerStyle}>
        <h5>Devoloper </h5>
        <p>coading</p>
      </div>
    )
  }

  function Third() {

    return (
      <div style={{
        border: '2px solid orange',
        padding: '20px',
        margin: '20px',
        borderRadius: '20px',
      }}>
        <h5>Devoloper new way </h5>
        <p>coading</p>
        <p>new style</p>
      </div >
    )
  }





















}

export default App