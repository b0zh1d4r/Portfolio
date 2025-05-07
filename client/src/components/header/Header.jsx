export default function Header() {
    return (
        <>
            <nav>
                <div class="nav-bar">
                    <i class='bx bx-menu sidebarOpen' ></i>
                    <span class="logo navLogo"><a href="/">Bozhidar.</a></span>

                    <div class="menu">
                        <div class="logo-toggle">
                            <span class="logo"><a href="/">Bozhidar.</a></span>
                            <i class='bx bx-x sidebarClose'></i>
                        </div>

                        <ul class="nav-links">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about.html">About</a></li>
                            <li><a href="/services.html">Services</a></li>
                            <li><a href="/projects.html">Projects</a></li>
                            <li><a href="/contact.html">Contact</a></li>
                        </ul>
                    </div>

                    <div class="darkLight-language">
                        <div class="dark-light">
                            <i class='bx bx-moon moon'></i>
                            <i class='bx bx-sun sun'></i>
                        </div>
                        <div class="language">
                            <i class="fa-solid fa-language"></i>
                            <div class="language-dropdown hidden">
                                <button id="lang-en">English</button>
                                <button id="lang-bg">Български</button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}