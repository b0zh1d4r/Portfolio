import { useTranslation } from 'react-i18next';

export default function Services() {

    const { t } = useTranslation();

    return (
        <>
            <section className="services">
                <h1>{t('servicesH1')}</h1>
                <p>{t('servicesP1')}</p>
                <p>{t('servicesP2')}</p>
                <p>{t('servicesP3')}</p>
                <p>{t('servicesP4')}</p>
                <p>{t('servicesP5')}</p>
                <p>{t('servicesP6')}</p>
            </section>
        </>
    )
}