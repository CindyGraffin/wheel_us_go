import axios from 'axios'

class SearchForUserService {


    getUsers () {
        return axios.get(`http://localhost:8800/api/users`)
    }
    getUserBySearch (fullname: string) {
        return axios.get(`http://localhost:8800/api/search?fullname=${fullname}`)
    }
}

export default Object.freeze(new SearchForUserService()) 