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
                <div className='vacancy_header'>
                    <span>
                        <img className='location_icon' src={location} alt="" width={ 15 } />
                        {vacancy.city}
                    </span>
                    <img onClick={() => setVisible(false)} className='closeIcon' src={closeIcon} alt="" width={22}/>
                </div>
                <img className='job_icon' src={jobIcon} alt="" width={ 25 } height={ 22 } />
                <span className='vacancy_title'>{vacancy.title}</span> <br/>
                Salary - <span className='vacancy_salary'>{vacancy.salary}</span>
                <p>{vacancy.option1}</p>
                <p>{vacancy.option2}</p>
                <button className='button' onClick={() => navigate('/contact')}>Apply Now</button>
            </div>
        </div>
    );
};

export default FullVacancyModal;