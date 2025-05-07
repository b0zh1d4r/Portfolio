import { useTranslation } from 'react-i18next';

export default function Projects() {
    const { t } = useTranslation();

    return (
        <>
            <section className="projects">
                <h1>{t('projectsH1')}</h1>
                <p>{t('projectsP1')}</p>
                <p>{t('projectsP2')}</p>
                <p>{t('projectsP3')}</p>
                <p>➤ {t('projectsP4')} <a href="https://github.com/b0zh1d4r?tab=repositories" target="_blank">https://github.com/b0zh1d4r?tab=repositories</a></p>
            </section>
        </>
    )
}