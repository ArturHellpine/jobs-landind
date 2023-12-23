import React from 'react';
import globe from '../images/globe-showing-europe-africa-svgrepo-com.svg'
import select from '../images/dark-select-svgrepo-com.svg'
import { Link } from 'react-scroll'

const IntroBlock = () => {
    return (
        <div className='intro'>
            <div className='container'>
                <div className='intro_inner'>
                    <h1 className='title'>
                        <span className='intro_title_text'>Рабdота в Европе</span>
                        <img src={ globe } className='intro_flag' alt=""/>
                    </h1>
                </div>
                <div className='intro_contacts'>
                    <p className='intro_contact_item'>
                        <img src={ select } className='intro_select_icon' alt=""/>
                        Получение документов за 1 день
                    </p>
                    <p className='intro_contact_item'>
                        <img src={ select } className='intro_select_icon' alt=""/>
                        Для регистрации приезд не нужен
                    </p>
                    <p className='intro_contact_item'>
                        <img src={ select } className='intro_select_icon' alt=""/>
                        Приезд только в день получения документов
                    </p>
                </div>
                <Link className='button intro_btn' to='vacancies' spy={ true } smooth={ true } offset={ 50 } duration={ 1000 }>
                    Смотреть вакансии
                </Link>
            </div>
        </div>
    );
};

export default IntroBlock;