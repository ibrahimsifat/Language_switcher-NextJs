import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import Navber from './components/Navber';
const about = () => {
    const { t } = useTranslation('common')
    return (
        <div>
            <Navber/>
            {t('title')}
        </div>
    );
};

export default about;