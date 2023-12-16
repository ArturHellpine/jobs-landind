import React from 'react';
import { Link } from 'react-scroll'

const IntroBlock = () => {
    return (
        <div className='intro'>
            <div className='container'>
                <div className='intro_inner'>
                    <h1 className='title'>Work in Europe</h1>
                </div>
                <div className='intro_contacts'>
                    <p>Iryna Bey - (+1 123 333 189)</p>
                    <p>Viber - (+1 123 333 189)</p>
                    <p>WatsApp - (+1 123 333 189)</p>
                    <p>iryna.bey@gmail.com</p>
                </div>
                <Link className='button intro_btn' to='vacancies' spy={true} smooth={true} offset={50} duration={1000}>
                    View Vacancies
                </Link>
            </div>
        </div>
    );
};

export default IntroBlock;