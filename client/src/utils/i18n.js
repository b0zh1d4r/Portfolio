import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        resources: {
            en: {
                translation: {
                    name: 'Bozhidar.',
                    home: 'Home',
                    about: 'About',
                    services: 'Services',
                    projects: 'Projects',
                    contact: 'Contact',
                    heroH1: 'Hi, I\'m Bozhidar!',
                    heroP: 'It\'s nice to meet you! :)',
                    aboutH1: 'About me:',
                    aboutP1: 'Hi, I’m Bozhidar Ivanov — a passionate Fullstack JavaScript Developer with a love for building things that live on the web.',
                    aboutP2: 'Currently, I’m pursuing my degree at the Technical University of Sofia, while also sharpening my skills through the intensive, hands-on training at Software University (SoftUni). This dual path has given me a solid academic foundation alongside real-world coding experience.',
                    aboutP3: 'I specialize in JavaScript, with a strong command of both frontend and backend technologies. On the frontend, I enjoy crafting smooth user interfaces using React and Angular, while on the backend I build robust APIs and services with Node.js, Express, and MongoDB. Whether it\'s designing a responsive UI or structuring a scalable backend, I love solving problems and bringing ideas to life.',
                    aboutP4: 'Beyond the code, I thrive on learning and constantly improving. I’m particularly interested in web performance, clean architecture, and building products that feel great to use.',
                    aboutP5: 'When I’m not coding, you’ll find me exploring new tech tools, reading about software design patterns, or working on personal projects that challenge me to grow.',
                    servicesH1: 'Services:',
                    servicesP1: 'I build modern, responsive, and high-performance websites using the latest technologies. From landing pages to full-stack web applications, I create user-friendly digital experiences that work seamlessly across all devices.',
                    servicesP2: 'Great design is more than just aesthetics. I craft intuitive, user-centered interfaces that improve usability and elevate your brand. Whether you need a website redesign or a fresh app interface, I ensure a smooth and engaging experience for your users.',
                    servicesP3: 'From frontend to backend, I offer complete web solutions. I design scalable architectures, implement secure APIs, and connect everything with clean, maintainable code. Whether you\'re a startup or a growing business, I can handle the full development cycle.',
                    servicesP4: 'In today’s mobile-first world, responsiveness is non-negotiable. I develop web apps that adapt flawlessly to smartphones and tablets, ensuring your users get a consistent experience wherever they are.',
                    servicesP5: 'A slow website loses users. I optimize performance through smart caching, asset management, and code refinement — making sure your site loads fast and ranks well in search engines.',
                    servicesP6: 'I don’t just build and disappear. I offer ongoing support, updates, and improvements to keep your project running smoothly and securely over time.',
                },
            },
            bg: {
                translation: {
                    name: 'Божидар.',
                    home: 'Начало',
                    about: 'За мен',
                    services: 'Услуги',
                    projects: 'Проекти',
                    contact: 'Контакт',
                    heroH1: 'Здравейте, аз съм Божидар!',
                    heroP: 'Радвам се да се запознаем! :)',
                    aboutH1: 'За мен:',
                    aboutP1: 'Здравейте, аз съм Божидар Иванов - страстен Fullstack JavaScript разработчик с любов към създаването на неща, които живеят в мрежата.',
                    aboutP2: 'В момента следвам в Техническия университет в София, като същевременно усъвършенствам уменията си чрез интензивно практическо обучение в Софтуерния университет (SoftUni). Този двоен път ми даде солидна академична основа заедно с реален опит в програмирането.',
                    aboutP3: 'Специализирам в JavaScript, като владея отлично както frontend, така и backend технологиите. Във frontend се наслаждавам на създаването на гладки потребителски интерфейси с помощта на React и Angular, а в backend изграждам надеждни API и услуги с Node.js, Express и MongoDB. Независимо дали става дума за проектиране на отзивчив потребителски интерфейс или за структуриране на мащабируем бекенд, обичам да решавам проблеми и да реализирам идеи.',
                    aboutP4: 'Отвъд кода, аз се радвам на ученето и постоянното усъвършенстване. Особено се интересувам от уеб производителността, изчистената архитектура и създаването на продукти, които се ползват с удоволствие.',
                    aboutP5: 'Когато не се занимавам с програмиране, можете да ме намерите да изследвам нови технологични инструменти, да чета за моделите за проектиране на софтуер или да работя по лични проекти, които ме предизвикват да се развивам.',
                    servicesH1: 'Услуги:',
                    servicesP1: 'Изграждам модерни, адаптивни и високопроизводителни уебсайтове с помощта на най-новите технологии. Създавам удобни за потребителите цифрови изживявания, които работят безпроблемно на всички устройства - от целеви страници до цялостни уеб приложения.',
                    servicesP2: 'Страхотният дизайн е нещо повече от естетика. Създавам интуитивни, ориентирани към потребителя интерфейси, които подобряват използваемостта и издигат вашата марка. Независимо дали се нуждаете от редизайн на уебсайт или от нов интерфейс на приложение, аз гарантирам гладко и ангажиращо преживяване за вашите потребители.',
                    servicesP3: 'From frontend to backend, I offer complete web solutions. I design scalable architectures, implement secure APIs, and connect everything with clean, maintainable code. Whether you\'re a startup or a growing business, I can handle the full development cycle.',
                    servicesP4: 'In today’s mobile-first world, responsiveness is non-negotiable. I develop web apps that adapt flawlessly to smartphones and tablets, ensuring your users get a consistent experience wherever they are.',
                    servicesP5: 'A slow website loses users. I optimize performance through smart caching, asset management, and code refinement — making sure your site loads fast and ranks well in search engines.',
                    servicesP6: 'I don’t just build and disappear. I offer ongoing support, updates, and improvements to keep your project running smoothly and securely over time.',
                },
            },
        },
    });

export default i18n;