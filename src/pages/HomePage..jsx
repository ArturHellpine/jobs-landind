import React, { useState } from 'react';
import JobsService from "../api/JobsService";
import JobList from "../components/JobList";
import IntroBlock from "../components/IntroBlock";
import Footer from "../components/Footer";
import { countries } from "../constants/countries";
import { Link } from "react-scroll";

const HomePage = () => {
    const [vacancies, setVacancies] = useState([])
    const [country, setCountry] = useState('')

    const fetchVacancies = async(country) => {
        const response = await JobsService.getVacancies(country)
        setVacancies(response.data)
        setCountry(country.name)
    }

    return (
        <>
            <IntroBlock />
                <div className='container'>
                    <div className='vacancies'>
                        <h1 className='vacancies_title'>Выберите страну где хотите работать</h1>
                        <div className='country_buttons'>
                            {countries.map(country =>
                                <Link
                                    className='button country_btn'
                                    onClick={() => fetchVacancies(country)}
                                    key={ country.name }
                                    to='jobs_inner'
                                    spy={ true }
                                    smooth={ true }
                                    offset={ 0 }
                                    duration={ 1000 }>
                                    { country.name }
                                </Link>
                            )}
                        </div>
                        { !vacancies.length && country ?
                            <p className='no_vacancies_title'>Нет активных вакансий в <span className='no_vacancy_country'>{ country }</span></p>
                            : <JobList vacancies={ vacancies } country={ country } />
                        }
                    </div>
                </div>
            <Footer />
        </>
    );
};

export default HomePage;