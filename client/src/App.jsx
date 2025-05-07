import { Routes, Route } from 'react-router'

import Home from './components/home/Home'
import About from './components/about/About'

import './styles/_styles.css'
import './App.css'

function App() {
    return (
        <>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
        </Routes>
        </>
    )
}

export default App
