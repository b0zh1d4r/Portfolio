import { useTranslation } from 'react-i18next';

export default function About() {
    const { t } = useTranslation();

    return (
        <>
            <section className="about">
                <h1>{t('aboutH1')}</h1>
                <p>{t('aboutP1')}</p>
                <p>{t('aboutP2')}</p>
                <p>{t('aboutP3')}</p>
                <p>{t('aboutP4')}</p>
                <p>{t('aboutP5')}</p>
            </section>
        </>
    )
}