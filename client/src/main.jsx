import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import '../src/utils/i18n.js';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
