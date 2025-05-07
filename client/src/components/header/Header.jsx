import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';

export default function Header() {
    const getInitialMode = () => localStorage.getItem('mode') === 'dark-mode';
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(getInitialMode);
    const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        document.body.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        localStorage.setItem('mode', newMode ? 'dark-mode' : 'light-mode');
    };

    const toggleLangDropdown = () => {
        setIsLangDropdownOpen(!isLangDropdownOpen);
    };

    const closeLangDropdown = (e) => {
        if (!e.target.closest('.language')) {
            setIsLangDropdownOpen(false);
        }
    };

    const handleLinkClick = () => {
        setIsSidebarOpen(false);
    };

    useEffect(() => {
        document.addEventListener('click', closeLangDropdown);
        return () => document.removeEventListener('click', closeLangDropdown);
    }, []);

    return (
        <nav className={isSidebarOpen ? 'active' : ''}>
            <div className="nav-bar">
                <i className="bx bx-menu sidebarOpen" onClick={toggleSidebar}></i>

                <span className="logo navLogo">
                    <Link to="/">Bozhidar.</Link>
                </span>

                <div className="menu">
                    <div className="logo-toggle">
                        <span className="logo"><Link to="/">Bozhidar.</Link></span>
                        <i className="bx bx-x sidebarClose" onClick={toggleSidebar}></i>
                    </div>

                    <ul className="nav-links">
                        <li><Link to="/" onClick={handleLinkClick} className={location.pathname === "/" ? "active" : ""}>Home</Link></li>
                        <li><Link to="/about" onClick={handleLinkClick} className={location.pathname === "/about" ? "active" : ""}>About</Link></li>
                        <li><Link to="/services" onClick={handleLinkClick} className={location.pathname === "/services" ? "active" : ""}>Services</Link></li>
                        <li><Link to="/projects" onClick={handleLinkClick} className={location.pathname === "/projects" ? "active" : ""}>Projects</Link></li>
                        <li><Link to="/contact" onClick={handleLinkClick} className={location.pathname === "/contact" ? "active" : ""}>Contact</Link></li>
                    </ul>
                </div>

                <div className="darkLight-language">
                    <div className={`dark-light ${isDarkMode ? 'active' : ''}`} onClick={toggleDarkMode}>
                        <i className="bx bx-moon moon"></i>
                        <i className="bx bx-sun sun"></i>
                    </div>

                    <div className="language">
                        <i className="fa-solid fa-language" onClick={toggleLangDropdown}></i>
                        <div className={`language-dropdown ${isLangDropdownOpen ? '' : 'hidden'}`}>
                            <button id="lang-en" onClick={() => setIsLangDropdownOpen(false)}>English</button>
                            <button id="lang-bg" onClick={() => setIsLangDropdownOpen(false)}>Български</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

