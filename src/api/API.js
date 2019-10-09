import axios from 'axios'

export default axios.create({
    baseURL: 'https://tshirtshopdab.azurewebsites.net/api/',
    headers: {
        'Content-Type': 'application/json',
    }
})