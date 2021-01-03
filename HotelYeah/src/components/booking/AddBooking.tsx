import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import API from "../util/API";
import { Listing } from "../listings/types"

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
  const [listings, setListings] = useState([]);

  const [listingId, setListingId] = useState({
    hotelId: ""
  });

  const getListings = async () => {
    const res = await API().getHotel();
    setListings(res.data.content);
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
    const res = await API().addBooking(booking,parseInt(listingId.hotelId),1000);
    console.log(res);
  };

  useEffect(()=> {
    getListings();
  }, []);
    return (
      <Container>
        <form onSubmit={handleSubmit}>
        <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          New Reservation
        </Typography>
        <Typography
          className={classes.pos}
          gutterBottom
        >
        <label> Hotel
          <select name="hotelId" id="hotelId" onChange={e => setListingId({hotelId: e.currentTarget.value})}>
            {listings.map((l: Listing) => {
              <option value={l.id}>{l.name} {l.address} l.{l.city}, {l.state} {l.zipCode}</option>
            })}
          </select>
        </label>

        </Typography>
        <Typography
          className={classes.pos}
          gutterBottom
        >
        <label> Check-in
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
        <label> Check-out
          <input
            type="date"
            name="checkOutDate"
            value={booking.checkOutDate}
            onChange={handleChange}
            required
          />
        </label>

        </Typography>
        <Typography variant="body2" component="p">
        <label> Number of Rooms
          <input
            type="number"
            name="roomCount"
            value={booking.roomCount}
            onChange={handleChange}
            required
          />
        </label>
        </Typography>
        <input type="submit" value="Book it!"/>
      </CardContent>
    </Card>


        </form>
      </Container>
    )
}

export default AddBooking
