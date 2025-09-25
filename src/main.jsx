import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import "tailwindcss";
import Hero from './Hero.jsx'
import Features from './Features.jsx'
import Section from './Section.jsx'
import Maps from './Maps.jsx'
import Cote from './Cote.jsx'
import Presfooter from './Presfooter.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero />
    <Features />
    <Section />
    <Maps />
    <Cote />
    <Presfooter /> 
    <Footer />
  </StrictMode>,
)
