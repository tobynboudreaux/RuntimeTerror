import React, { useEffect, useState } from "react";

import { Redirect } from 'react-router-dom'

import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

import API from "../util/API";
import { Listing } from "../listings/types"
import { Guest } from "./types"

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const AddBooking = () => {

  const [redirect, setRedirect] = useState({
    value: false
  })

  const [listings, setListings] = useState([]);

  const [guests, setGuests] = useState([]);

  const [listingId, setListingId] = useState({
    hotelId: ""
  });

  const [guest, setGuest] = useState({
    id: ""
  });

  const getListings = async () => {
    const res = await API().getHotel();
    setListings(res.data.content);
    console.log(res.data.content)
  }

  const getGuests = async () => {
    const res = await API().getGuest();
    setGuests(res.data.content);
    console.log(res.data.content)
  }

  const classes = useStyles();

  const [booking, setBooking] = useState({
    checkInDate: "",
    checkOutDate: "",
    roomCount: "",
  });

  const handleChange = (e: any) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await API().addBooking(booking, listingId.hotelId, guest.id);
    setRedirect({
      value: true
    })
    console.log(res);
  };

  useEffect(()=> {
    getListings();
    getGuests();
  }, []);

  if(redirect.value) {
    console.log(redirect)
    return <Redirect to="/booking" />
  }
    return (
      <Container>
        <form onSubmit={handleSubmit}>
        <Card className={classes.root}>
      <CardContent>
        <Typography variant="h3" component="h2">
          New Reservation
        </Typography> <br/>
        <Typography
          className={classes.pos}
          gutterBottom
        >
        <label> Guest <br/>
          <select name="guestId" id="guestId" onChange={e => setGuest({id: e.currentTarget.value})}>
            {guests.map((g: Guest ) => {
              return <option value={g.id}> {g.id} {g.firstName} {g.lastName} </option>
            })}
          </select>
        </label>

        </Typography>
        <Typography
          className={classes.pos}
          gutterBottom
        >
        <label> Hotel <br/>
          <select name="hotelId" id="hotelId" onChange={e => setListingId({hotelId: e.currentTarget.value})}>
            {listings.map((l: Listing) => {
              return <option value={l.id}> {l.name} {l.address} l.{l.city}, {l.state} {l.zipCode}</option>
            })}
          </select>
        </label>

        </Typography>
        <Typography
          className={classes.pos}
          gutterBottom
        >
        <label> Check-in <br/>
          <input
            type="date"
            name="checkInDate"
            placeholder="check-in"
            value={booking.checkInDate}
            onChange={handleChange}
            required
          />
        </label>

        </Typography>
        <Typography className={classes.pos}>
        <label> Check-out <br/>
          <input
            type="date"
            name="checkOutDate"
            value={booking.checkOutDate}
            onChange={handleChange}
            required
          />
        </label>

        </Typography>
        <Typography className={classes.pos}>
        <label> Number of Rooms <br/>
          <input
            type="number"
            name="roomCount"
            value={booking.roomCount}
            onChange={handleChange}
            required
          />
        </label>
        </Typography>
        <Button
            type="submit"
            variant="contained"
            color="primary"
        >Book it!</Button>

      </CardContent>
    </Card>


        </form>
      </Container>
    )
}

export default AddBooking
