import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyDetails from './components/MyDetails.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Header from './components/Header.jsx'
import OtherProjectHeader from './components/OtherProjectHeader.jsx'
import OtherProjects from './components/OtherProjects.jsx'
import Contact from './components/Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Header/>
    <MyDetails/>
    <Projects/>
    <Skills/>
    <OtherProjects/>
    <Contact/>
    {/* <OtherProjectHeader/> */}
  </StrictMode>,
)
