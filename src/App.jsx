import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Data from './component/Data';
import Mail from './component/mail';

function App() {

  return (
    <div className="data-container">
      <Data
        name="Abid Hasan"
        age="23"
        nationality="Bangladesh"
        blood="B+"
        address="Barisal"
      />
      <Mail
      mail="abid@gmail.com"
      />
      <hr />

      <Data
      name="Laravel Tayben"
      age="24"
      nationality="Bangladesh"
      blood="A+"
      address="Madaripur"
      />
      <Mail
      mail="tayben@gmail.com"
      />
      
      <hr />
      <Data
        name="Partha Mondol"
        age="18"
        nationality="Bangladesh"
        blood="O+"
        address="Dhaka"

      />
      <Mail
      mail="partha@gmail.com"
      />

    </div>
  )
}

export default App
