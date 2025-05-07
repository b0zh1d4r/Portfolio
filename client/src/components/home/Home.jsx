import { useTranslation } from 'react-i18next';

export default function Home() {
    const { t } = useTranslation();

    return (
        <>
            <div className="image">
                <img src="me.jpg" alt="Me" />
            </div>

            <section className="hero">
                <h1>{t('heroH1')}</h1>
                <p>{t('heroP')}</p>
            </section>
        </>
    )
}