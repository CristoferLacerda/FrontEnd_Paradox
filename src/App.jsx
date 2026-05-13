import semCompromisso from './assets/semCompromisso.png'

import { useState } from 'react'
import './App.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>

          <h1 className='text-[11rem] absolute text-white mt-[20rem] p-[3rem]  '>VELOCIDADE REDEFINIDA</h1>
          <img src={semCompromisso} alt="" className='w-full'/>
          <button>EXPLORAR</button>
    </div>
  )
}

export default App