import { useEffect, useState } from 'react'
import './App.css'

// eslint-disable-next-line no-unused-vars
const tg  = window.Telegram.WebApp

function App() {
  useEffect(()=>{
    tg.ready();
  }, [])

  const onCLose = () => {
    tg.close();
  }
  return (
    <>
      <div>
          <button onClick={onClose}>Закрыть</button>
      </div>
    </>
  )
}

export default App
