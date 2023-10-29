/* eslint-disable no-unused-vars */
import {Blog,Features,Footer,WhatPT3, Header, Possiblity} from './container/index'
import {CTA, Brand, Navbar} from './components'
import WhatGPT3 from './container/whatGPT3/WhatGPT3'
import './app.css'

function App() {

  return (
    <>
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possiblity />
      <CTA />
      <Blog />
    </div>
    </>
  )
}

export default App
