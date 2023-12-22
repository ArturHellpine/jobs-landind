import React from 'react';
import closeIcon from '../images/close-svgrepo-com.svg'
import location from "../images/location-pin-svgrepo-com.svg";
import jobIcon from "../images/employee-id-svgrepo-com.svg";
import {useNavigate} from "react-router-dom";

const FullVacancyModal = ({ visible, setVisible, vacancy }) => {
    const navigate = useNavigate()

    return (
        <div className={visible ? 'vacancyModal active' : 'vacancyModal'} onClick={() => setVisible(false)}>
            <div className={visible ? 'vacancyModalContent active' : 'vacancyModalContent'} onClick={e => e.stopPropagation()}>
                <div className='full_vacancy_header'>
                    <span>
                        <img className='location_icon' src={location} alt="" width={ 15 } />
                        {vacancy.city}
                    </span>
                    <img onClick={() => setVisible(false)} className='closeIcon' src={closeIcon} alt="" width={22}/>
                </div>
                <div className='full_vacancy_content'>
                    <span className='full_vacancy_title'>
                        <img className='job_icon' src={jobIcon} alt="" width={ 25 } height={ 22 } />
                        {vacancy.title}
                    </span>
                    <span className='full_vacancy_salary'>
                        Salary - {vacancy.salary} / month
                    </span>
                </div>
                <div className='full_vacancy_text'>
                    <p className='full_vacancy_text_title'>Working conditions and documents</p>
                    <p className='full_vacancy_main_text'>{vacancy.text}</p>
                    <ul className='full_vacancy_options_list'>
                        {vacancy.details?.map(detail =>
                            <li className='full_vacancy_option' key={detail.id}>{detail.option}</li>
                        )}
                    </ul>
                </div>
                <button className='full_vacancy_apply_button' onClick={() => navigate('/contact')}>Подать заявку</button>
            </div>
        </div>
    );
};

export default FullVacancyModal;