import axios from 'axios';

const api = axios.create({
    baseURL: 'https://unip97-back.herokuapp.com/alunos'
})

export default api;