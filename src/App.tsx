import './App.scss'
import ToDoItem from './ToDoItem'
import ReactLogo from './logo.svg'
import { useState, useEffect } from 'react'

export default (): JSX.Element => {

  const [ input, setInput ] = useState<string>('')
  const [ list, setTodo ] = useState<string[]>([
    'Fazer café',
    'Estudar React',
    'Estudar TypeScript',
    'Estudar React Native',
    'Estudar NodeJS',
    'Estudar NextJS',
    'Estudar GraphQL',
    'Estudar Apollo',
    'Estudar Redux',
    'Estudar React Hooks',
    'Estudar Styled Components',
    'Estudar Styled System'
  ])
  
  const insertToList = (): void => {
    if (input.trim().length === 0) {
      return
    }

    setTodo([ ...list, input ])
    setInput('')
  }

  const removeFromList = (index: number): void => {
    if (index === -1)
      return

    setTodo(list.filter((_, i) => i !== index))
  }

  const [ darkTheme, setDarkTheme ] = useState<boolean>(true)
  useEffect(() => {
    document.body.classList.toggle('dark', darkTheme)
  }, [ darkTheme ])

  return (
    <main className="app">
      <header className="header">
        <img src={ReactLogo} alt="React Logo" />
        <h1>Todo List</h1>
      </header>

      <section className="content">
        <div className="insert">
          <label className="custom-input">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={insertToList}>+</button>
          </label>
        </div>

        <div className="list-todo">
          {list.map((item, index) => (
            <ToDoItem key={index} number={index + 1} text={item} remove={removeFromList} />
          ))}
        </div>
      </section>

      <label className="switch-theme">
        <input type="checkbox" checked={darkTheme} onChange={() => setDarkTheme(!darkTheme)} />
        <span></span>
      </label>
    </main>
  )
}