import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import Navber from './components/navber';
const contact = () => {
    const { t } = useTranslation('contact')
    return (
        <div>
            <Navber/>
            {t('contact_title')}
        </div>
    );
};

export default contact;