import React from 'react'
import Navigation from './sections/Navigation'
import Hero from './sections/Hero'
import Features from './sections/Features'
import Sounds from './sections/Sounds'

const App = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Hero />
        <Features />
        <Sounds />
      </main>
      <footer></footer>
    </>
  )
}

export default App
