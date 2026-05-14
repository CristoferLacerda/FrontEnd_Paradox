import semCompromisso from './assets/semCompromisso.png'
import { useState } from 'react'
import './App.css'
import Header from './components/Header'

function App() {

  return (
    <div>
      <Header/>

          <section className='flex flex-col relative w-full items-start'>
            <h1 className='text-[11rem] absolute text-white mt-[27rem] p-[3rem] font-bold leading-[0.85]'>VELOCIDADE REDEFINIDA</h1>
            <img src={semCompromisso} alt="" className='w-full'/> 
            <button className='absolute mt-[50rem] p-3 m-14  bg-[#EBEBEB] cursor-pointer'>EXPLORAR</button>
          </section>

          <section className='w-full'>
            <div className='m-30'>
              <p className='font-jetbrains text-gray-400'>SELECIONADOS</p>
              <h1 className='text-[36px] font-bold'>DESTAQUES</h1>
            </div>
          </section>
    </div>
  )
}

export default App