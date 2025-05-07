import { Routes, Route } from 'react-router'

import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Services from './components/services/Services'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'

import './styles/_styles.css'
import './App.css'

function App() {
    return (
        <>
        <Header />
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        </>
    )
}

export default App
