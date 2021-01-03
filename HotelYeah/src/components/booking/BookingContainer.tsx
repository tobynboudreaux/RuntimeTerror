import React, { useEffect, useState } from 'react';
import Booking from './Booking';
import { Link } from 'react-router-dom'
import { BookingItem } from './types';
import Container from '@material-ui/core/Container';
import API from '../util/API';

const BookingContainer = () => {
  const [bookings, setBookings] = useState([]);
  const getBookings = async () => {
    const res = await API().getBooking();
    setBookings(res.data.content);
    console.log(res.data.content)
  }

  useEffect(()=> {
    getBookings();
  }, []);

    return (
        <Container>
          <h1>Bookings</h1>
            {bookings.map((b: BookingItem) => {
              return <>  <Booking booking={b} /> <br/> </>
            })}
        </Container>
    )
}

export default BookingContainer
