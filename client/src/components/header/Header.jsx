import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';

export default function Header() {
    const getInitialMode = () => {
        const savedMode = localStorage.getItem('mode');
        if (savedMode) return savedMode === 'dark-mode';
        localStorage.setItem('mode', 'light-mode');
        return false;
    }; 

    const getInitialLang = () => localStorage.getItem('language') || 'en';

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(getInitialMode);
    const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState(getInitialLang);

    const location = useLocation();
    const { t, i18n } = useTranslation();
    const isBulgarian = i18n.language === 'bg';

    const renderLinkText = (key) => {
        const text = t(key);
        return isBulgarian ? <span className="bg-bold">{text}</span> : text;
    };

    useEffect(() => {
        document.body.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]);

    useEffect(() => {
        i18n.changeLanguage(selectedLang);
        localStorage.setItem('language', selectedLang);
    }, [selectedLang, i18n]);

    const changeLanguage = (lang) => {
        setSelectedLang(lang);
        setIsLangDropdownOpen(false);
    };

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
                    <Link to="/">{renderLinkText('name')}</Link>
                </span>

                <div className="menu">
                    <div className="logo-toggle">
                        <span className="logo"><Link to="/">{renderLinkText('name')}.</Link></span>
                        <i className="bx bx-x sidebarClose" onClick={toggleSidebar}></i>
                    </div>

                    <ul className="nav-links">
                        <li><Link to="/" onClick={handleLinkClick} className={location.pathname === "/" ? "active" : ""}>{renderLinkText('home')}</Link></li>
                        <li><Link to="/about" onClick={handleLinkClick} className={location.pathname === "/about" ? "active" : ""}>{renderLinkText('about')}</Link></li>
                        <li><Link to="/services" onClick={handleLinkClick} className={location.pathname === "/services" ? "active" : ""}>{renderLinkText('services')}</Link></li>
                        <li><Link to="/projects" onClick={handleLinkClick} className={location.pathname === "/projects" ? "active" : ""}>{renderLinkText('projects')}</Link></li>
                        <li><Link to="/contact" onClick={handleLinkClick} className={location.pathname === "/contact" ? "active" : ""}>{renderLinkText('contact')}</Link></li>
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
                            <button
                                id="lang-en"
                                onClick={() => changeLanguage('en')}
                                className={selectedLang === 'en' ? 'active' : ''}
                            >
                                English
                            </button>
                            <button
                                id="lang-bg"
                                onClick={() => changeLanguage('bg')}
                                className={selectedLang === 'bg' ? 'active' : ''}
                            >
                                Български
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
