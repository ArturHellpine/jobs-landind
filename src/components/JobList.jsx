import React, {useState} from 'react';
import location from '../images/location-pin-svgrepo-com.svg'
import jobIcon from '../images/employee-id-svgrepo-com.svg'
import FullVacancyModal from "./FullVacancyModal";

const JobList = ({vacancies, country}) => {
    const [visible, setVisible] = useState(false)
    const [activeVacancy, setActiveVacancy] = useState({})

    const showFullVacancyModal = (vacancy) => {
        setVisible(true)
        setActiveVacancy(vacancy)
    }

    return (
        <>
            { country &&
                <h1 className='jobs_title'>Available vacancies in <span className='title_country'>{country}</span></h1>
            }
            <div className='jobs_inner'>
                {vacancies.map(vacancy =>
                    <div className='job_item' key={vacancy.id}>
                        <div className='vacancy_header'>
                            <span>
                                <img className='location_icon' src={location} alt="" width={ 15 } />
                                {vacancy.city}
                            </span>
                            <span className='vacancy_salary'>{vacancy.salary}</span>
                        </div>
                        <img className='job_icon' src={jobIcon} alt="" width={ 25 } height={ 22 } />
                        <span className='vacancy_title'>{vacancy.title}</span>
                        <button className='apply_button' onClick={() => showFullVacancyModal(vacancy)}>Show Details</button>
                    </div>
                )}
                <FullVacancyModal visible={ visible } setVisible={ setVisible } vacancy={ activeVacancy } />
            </div>
        </>
    );
};

export default JobList;