/* eslint-disable no-unused-vars */
import {Blog,Footer,WhatPT3, Header, Possiblity, Features } from './container/index'
import {CTA, Brand, Navbar} from './components'
import WhatGPT3 from './container/whatGPT3/WhatGPT3'
import './app.css'

function App() {

  return (
    <>
    <div className="App">
      <div className="gradient__bg scale-up-center">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <div className='section-padding'>
      <WhatGPT3 />
      </div>
      <Features />
      <Possiblity />
      <CTA />
      <Blog />
    </div>
    </>
  )
}

export default App
