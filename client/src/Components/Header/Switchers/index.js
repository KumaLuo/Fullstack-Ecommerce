import React, { useState } from 'react';

const Switchers = () => {
    const [language, setLanguage] = useState('English');
    const [currency, setCurrency] = useState('USD');


    const languages = ['English', 'Spanish', 'French'];
    const currencies = ['USD', 'EUR', 'GBP'];

    return (
        <div className='switchers-wrapper align-items-center d-flex'>
            <ul className='switchers list-inline mb-0 d-flex align-items-center'>
                <li className='language pr-2 pl-2'>
                    {language}
                    <div className={`dropdown lan align-items-center`}>
                        <ul className=' align-items-center'>
                            {languages.map((lang, index) => (
                                <li key={index} onClick={() => setLanguage(lang)}>{lang}</li>
                            ))}
                        </ul>
                    </div>
                </li>

                <li className='currency pl-2'>
                    {currency}
                    <div className={`dropdown cur align-items-center`}>
                        <ul className='align-items-center'>
                            {currencies.map((curr, index) => (
                                <li key={index} onClick={() => setCurrency(curr)}>{curr}</li>
                            ))}
                        </ul>

                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Switchers;