import { useTranslation } from 'react-i18next';

export default function Contact() {
    const { t } = useTranslation();

    return (
        <>
            <section className="contact">
                <h1>{t('contactH1')}</h1>
                <p>{t('contactP1')}</p>
                <p>{t('contactP2')}</p>
                <ul className="links">
                    <li><a href="mailto:bozhidarivanov24@gmail.com"><i className='bx bxl-gmail'></i></a></li>
                    <li><a href="https://linktr.ee/b0zh1d4r" target="_blank"><i className="fa-solid fa-tree"></i></a></li>
                    <li><a href="https://x.com/b0zh1d4r" target="_blank"><i className="fa-brands fa-x-twitter"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/bozhidar-ivanov-875769316/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a></li>
                    <li><a href="https://github.com/b0zh1d4r" target="_blank"><i className="fa-brands fa-github"></i></a></li>
                </ul>
            </section>
        </>
    )
}