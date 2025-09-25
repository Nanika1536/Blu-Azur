import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './Hero.jsx'
import Features from './Features.jsx'
import Section from './Section.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero />
    <Features />
    <Section />
  </StrictMode>,
)
