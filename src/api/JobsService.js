import axios from "axios";

export default class JobsService {
    static async getVacancies(country) {
        if(country.name === 'Spain') {
            return axios.get('./vacancies/spain.json')
        }
        if(country.name === 'Poland') {
            return axios.get('./vacancies/poland.json')
        }
    }

    static async getVacancyById(id) {
        return axios.get(`../vacancies/spain.json/${id}`)
    }

}