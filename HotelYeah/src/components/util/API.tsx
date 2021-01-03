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
    const getGuest = () => {
        return axios.get(`${url}/guest`, config);
    }
    const postGuest = (guestObj: any) => {
        return axios.post(`${url}/guest`, guestObj, config);
    }
    const putGuest = (id: any, guestObj: any) => {
        return axios.put(`${url}/guest/${id}`, guestObj, config);
    }
    const deleteGuest = (id: any) => {
        return axios.delete(`${url}/guest/${id}`, config);
    }
    const getBooking = () => {
      return axios.get(`${url}booking`, config)
    }
    const getBookingById = (id: number) => {
      return axios.get(`${url}booking/${id}`, config)
    }
    const getBookingByGuest = (guestId: number) => {
      return axios.get(`${url}booking/guest/${guestId}`, config)
    }
    const getBookingByHotel = (hotelId: number) => {
      return axios.get(`${url}booking/hotel/${hotelId}`, config)
    }
    const addBooking = (booking: any, hotelId: any, guestId: any) => {
      return axios.post(`${url}booking/${hotelId}/${guestId}`, booking, config)
    }
    const editBooking = (booking: any, id: number) => {
      return axios.put(`${url}booking/${id}`, booking, config)
    }
    const deleteBooking = (id: any) => {
      return axios.delete(`${url}booking/${id}`, config)
    }
    return {getHotel, postHotel, editHotel, deleteHotel, getGuest, postGuest, putGuest, deleteGuest, getBooking, addBooking, getBookingById, editBooking, deleteBooking, getBookingByGuest, getBookingByHotel}
}

export default API
