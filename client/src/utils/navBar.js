const body = document.querySelector("body"),
    nav = document.querySelector("nav"),
    modeToggle = document.querySelector(".dark-light"),
    sidebarOpen = document.querySelector(".sidebarOpen"),
    sidebarClose = document.querySelector(".sidebarClose"),
    languageIcon = document.querySelector('.language i'),
    languageDropdown = document.querySelector('.language-dropdown'),
    langButtons = document.querySelectorAll('.language-dropdown button');

    languageIcon.addEventListener('click', () => {
        languageDropdown.classList.toggle('hidden');
    });
    
    document.addEventListener('click', (e) => {
        if (!document.querySelector('.language').contains(e.target)) {
            languageDropdown.classList.add('hidden');
        }
    });
    
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            languageDropdown.classList.add('hidden');
        });
    });

    let getMode = localStorage.getItem("mode");
    
    if (getMode && getMode === "dark-mode") {
        body.classList.add("dark");
        modeToggle.classList.add("active");
    }
    
    modeToggle.addEventListener("click", () => {
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");
    
        if (!body.classList.contains("dark")) {
            localStorage.setItem("mode", "light-mode");
        } else {
            localStorage.setItem("mode", "dark-mode");
        }
    });
    
    sidebarOpen.addEventListener("click", () => {
        nav.classList.add("active");
    });
    
    sidebarClose.addEventListener("click", () => {
        nav.classList.remove("active");
    });
    
    body.addEventListener("click", e => {
        let clickedElm = e.target;
    
        if (!clickedElm.classList.contains("sidebarOpen") && !clickedElm.closest(".menu")) {
            nav.classList.remove("active");
        }
});
