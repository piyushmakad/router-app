import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

import { Outlet } from 'react-router-dom'

function App() {


  return (
    <>
      <Header/>
      <Outlet/>         
      <Footer/>
    </>
  )
}

export default App


// in outlet, anything above and below outlet remains same and only inside content of outlet changes
// yha header footer har baar same rhega isiliye outlet use kiya