import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import JobsService from "../api/JobsService";

const VacancyDetailPage = () => {
    const params = useParams()
    const [vacancy, setVacancy] = useState({})

    const fetchVacancy = async (id) => {
        const response = await JobsService.getVacancyById(id)
        setVacancy(response.data)
    }

    useEffect(() => {
        fetchVacancy(params.id)
    }, [])

    return (
        <div>
            Детальна інформація про вакансію
            {params.id}
        </div>
    );
};

export default VacancyDetailPage;