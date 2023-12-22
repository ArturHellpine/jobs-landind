import axios from "axios";

export default class JobsService {
    static async getVacancies(country) {
        if(country.name === 'Испания') {
            return axios.get('./vacancies/spain.json')
        }
        if(country.name === 'Польша') {
            return axios.get('./vacancies/poland.json')
        }
        if(country.name === 'Германия') {
            return axios.get('./vacancies/germany.json')
        }
        if(country.name === 'Чехия') {
            return axios.get('./vacancies/czech.json')
        }
    }
}
