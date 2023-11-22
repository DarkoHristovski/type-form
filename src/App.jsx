/* eslint-disable no-unused-vars */
import { useState } from 'react'
import questions from './questions';
import './App.css'
import Form from './components/Form';





function App() {
  const [currentQuestion, setCurrentQuestion] = useState(questions);
  const [answer, setAnswer] = useState();
  const [show, setShow] = useState(questions);

  return (
    <>
  {currentQuestion.map(x=><Form key={x.id} currentQuestion={x}/>) }
    </>
  )
}

export default App
