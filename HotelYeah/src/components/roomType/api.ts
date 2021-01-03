import axios from 'axios'
import * as apiConst from '../util/APIConstants'

const options = {
    headers: {
        Authorization: apiConst.HEADERS.get("Authorization"),
    }
}

const API = () => {
    const url = apiConst.BASE_URL
    const getRoomTypes = () => {
        return axios.get(url + 'roomtype', options)
    }
    return { getRoomTypes }
}
export default API