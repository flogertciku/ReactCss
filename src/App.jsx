import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Form from './components/Form'
import './App.css'
import Details from './components/Details'
import Numbers from './components/Numbers'

function App() {
  const [Users,SetUsers] = useState([])

  return (
    <div className='d-flex'>
      <Numbers></Numbers>
      <Form Users= {Users} SetUsers = {SetUsers}></Form>
      <Details Users={Users}></Details>
    </div>
  )
}

export default App
