import React, { useEffect, useState } from 'react';
import API from '../util/API';
import { useParams } from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

const EditBooking = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const { id } = useParams();

  const [bookingId] = useState({
    id: id
  });
  const [booking, setBooking] = useState({
    checkInDate: "",
    checkOutDate: "",
    roomCount: "",
  });

  const [guest, setGuest] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailAddress:""
  });

  const [hotel, setHotel] = useState({
    id: "",
    code: "",
    name: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    mainPhoneNumber: "",
    websiteAddress: "",
    imagePath: ""
  });

  const getBooking = async () => {
    const res = await API().getBookingById(bookingId.id);

    setBooking(
      {
        checkInDate: formatDate(res.data.checkInDate),
        checkOutDate: formatDate(res.data.checkOutDate),
        roomCount: res.data.roomCount
      })

      setGuest({
        id: res.data.guest.id,
        firstName: res.data.guest.firstName,
        lastName: res.data.guest.lastName,
        emailAddress:res.data.guest.emailAddress
      })

      setHotel({
        id: res.data.hotel.id,
        code: res.data.hotel.code,
        name: res.data.hotel.name,
        address: res.data.hotel.address,
        city: res.data.hotel.city,
        state: res.data.hotel.state,
        zipCode: res.data.hotel.zipCode,
        mainPhoneNumber: res.data.hotel.mainPhoneNumber,
        websiteAddress: res.data.hotel.websiteAddress,
        imagePath: res.data.hotel.imagePath
      })
  }

  const formatDate = (dateString: string) => {
    return dateString.slice(0,dateString.indexOf("T"))
  }

  const handleChange = (e: any) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(bookingId.id)
    const res = await API().editBooking(booking, bookingId.id);
    console.log(res);
  };

  const handleDelete = (e: any) => {
    e.preventDefault();
    let confirmed = window.confirm('Are you sure you want to cancel?')
    if(confirmed) {
      API().deleteBooking(id)
    }
  }

  useEffect(()=> {
    getBooking();
  }, []);

    return (
      <Container >
        <h1>Booking Information</h1>
        <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Booking ID</TableCell>
            <TableCell align="right">Guest</TableCell>
            <TableCell align="right">Chek-in</TableCell>
            <TableCell align="right">Check-out</TableCell>
            <TableCell align="right">Hotel Name</TableCell>
            <TableCell align="right">Hotel Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

            <TableRow>
              <TableCell component="th" scope="row">{bookingId.id}</TableCell>
              <TableCell align="right">{guest.firstName} {guest.lastName}</TableCell>
              <TableCell align="right">{booking.checkInDate}</TableCell>
              <TableCell align="right">{booking.checkOutDate}</TableCell>
              <TableCell align="right">{hotel.name}</TableCell>
              <TableCell align="right">{hotel.address} {hotel.city}, {hotel.state} {hotel.zipCode}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>


        <form onSubmit={handleSubmit}>
        <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Edit Reservation
        </Typography>
        <Typography
          className={classes.pos}
          gutterBottom
        >

        </Typography>
        <Typography
          className={classes.pos}
          gutterBottom
        >
        <label> Check-in <br />
          <input
            type="date"
            name="checkInDate"
            value={booking.checkInDate}
            onChange={handleChange}
            required
          />
        </label>
        </Typography>
        <Typography className={classes.pos}>
        <label> Check-out <br />
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
        <label> Number of Rooms <br />
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
        >Update Reservation</Button>

        <Button onClick={handleDelete} variant="contained" color="secondary">
          Cancel Reservation
        </Button>
      </CardContent>
    </Card>
        </form>
      </Container>
    )
}

export default EditBooking
