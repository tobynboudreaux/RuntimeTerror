// import React from 'react'
import axios from 'axios'
import * as consts from './APIConstants'

export const config = {
    headers: {
        Authorization: consts.HEADERS.get("Authorization"),
    }
}

const API = () => {
    const url = "http://3.139.235.28:8080/hotelbooking-1.0.0/"
    
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
    return {getHotel, postHotel, editHotel, deleteHotel}
}

export default API
