import React from 'react'
import axios from 'axios'

const API = () => {
    const url = "http://3.139.235.28:8080/hotelbooking-1.0.0/"
    const getHotel = () => {
        axios.get(`${url}hotel`);
    }
    const postHotel = (hotelObj: any) => {
        axios.post(`${url}hotel`, hotelObj);
    }
    const editHotel = (id: any, hotelObj: any) => {
        axios.put(`${url}hotel/${id}`, hotelObj);
    }
    const deleteHotel = (id: any) => {
        axios.delete(`${url}hotel/${id}`);
    }
}

export default API
