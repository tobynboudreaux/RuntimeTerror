import React from 'react'
import { BookingItem } from './types';
import { Link, Redirect } from 'react-router-dom'

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

interface BookingProps {
  booking: BookingItem
}

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const Booking: React.FC<BookingProps> = ({ booking }) => {

  const formatDate = (dateString: any) => {
    return dateString.slice(0,dateString.indexOf("T"))
  }

  const classes = useStyles();

    return (
      <>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Booking ID</StyledTableCell>
            <StyledTableCell align="right">Edit Reservation</StyledTableCell>
            <StyledTableCell align="right">Guest</StyledTableCell>
            <StyledTableCell align="right">Chek-in</StyledTableCell>
            <StyledTableCell align="right">Check-out</StyledTableCell>
            <StyledTableCell align="right">Hotel Name</StyledTableCell>
            <StyledTableCell align="right">Hotel Address</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">{booking.id}</StyledTableCell>
              <StyledTableCell align="right"><Link to={`/editbooking/${booking.id}`} > Edit </Link></StyledTableCell>
              <StyledTableCell align="right">{booking.guest.firstName} {booking.guest.lastName}</StyledTableCell>
              <StyledTableCell align="right">{formatDate(booking.checkInDate)}</StyledTableCell>
              <StyledTableCell align="right">{formatDate(booking.checkOutDate)}</StyledTableCell>
              <StyledTableCell align="right">{booking.hotel.name}</StyledTableCell>
              <StyledTableCell align="right">{booking.hotel.address} {booking.hotel.city}, {booking.hotel.state} {booking.hotel.zipCode}</StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
      </>
    )
}

export default Booking
