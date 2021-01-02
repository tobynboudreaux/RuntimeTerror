// import React from 'react'
import axios from 'axios'
import * as consts from './APIConstants'

export const config = {
    headers: {
        Authorization: consts.HEADERS.get("Authorization"),
    }
}

const API = () => {
    const url = consts.BASE_URL
    
    const getHotel = () => {
        return axios.get(`${url}hotel`, config);
    }
    const postHotel = (hotelObj: any) => {
        return axios.post(`${url}hotel`, hotelObj, config);
    }
    const editHotel = (id: any, hotelObj: any) => {
        return axios.put(`${url}hotel/${id}`, hotelObj, config);
    }
    const deleteHotel = (id: any) => {
        return axios.delete(`${url}hotel/${id}`, config);
    }
    const login = (userObj: any) => {
        return axios.post(`${url}/login`, userObj, config);
    }
    return {getHotel, postHotel, editHotel, deleteHotel, login}
}

export default API
