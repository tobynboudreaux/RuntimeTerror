import React from 'react'
import { Grid, Paper, makeStyles, createStyles, Theme, colors } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Tripadvisor from '../../img/tripadvisor.png'
import Foursquare from '../../img/foursquare.png'
import Yelp from '../../img/yelp.png'
import Roadtrippers from '../../img/roadtrippers.png'
import { navLinks } from '../../components/navbar/Links'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        header: {
            flexGrow: 1,
            background: colors.grey[300],
            padding: 0
        },
        body: {
            flexGrow: 1,
            backgroundColor: theme.palette.primary.dark
        },
        paper: {
            padding: theme.spacing(2),
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.primary.dark,
            paddingLeft: '120px'
        },
        paperWhite: {
            paddingTop: theme.spacing(2),
            textAlign: 'center',
            background: colors.grey[300],
        },
        siteLinks: {
            paddingLeft: '220px'
        },
        linkText: {
            textDecoration: `none`,
            color: theme.palette.primary.contrastText,
            display: 'block',
        }
    })
);

const Footer = () => {

    const date: Number = new Date().getFullYear()
    const classes = useStyles();

    const footerLinks = navLinks.map(({ title, path }) => (
        <Link to={path} key={title} className={classes.linkText}>
            <small>{title}</small>
        </Link>
    ))

    return (
        <div>

            <div className={classes.header}>
                <Grid container spacing={0} xs={12}>
                    <Grid item xs={3}>
                        <Paper elevation={0} className={classes.paperWhite}> <img src={Tripadvisor} alt='Tripadvisor' style={{ width: 70 }} /></Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper elevation={0} className={classes.paperWhite}> <img src={Foursquare} alt='Tripadvisor' style={{ width: 40 }} /></Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper elevation={0} className={classes.paperWhite}> <img src={Yelp} alt='Tripadvisor' style={{ width: 50 }} /></Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper elevation={0} className={classes.paperWhite}> <img src={Roadtrippers} alt='Tripadvisor' style={{ width: 54 }} /></Paper>
                    </Grid>
                </Grid>
            </div>

            <div className={classes.body}>

                <Grid container spacing={0}>

                    <Grid item md={4} xs={12}>
                        <Paper elevation={0} className={classes.paper}>
                            <h4>About HotelYeah!!!</h4>
                            <small>HotelYeah! is a hotel booking service that allows users to log-in, access their favorite hotels, book a new hotel, post new hotels, remove hotels that are no longer available, filter by category, location, and availability.</small>
                        </Paper>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Paper elevation={0} className={`${classes.paper} ${classes.siteLinks}`}>
                            <h4>Site Links</h4>
                            {footerLinks}
                        </Paper>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Paper elevation={0} className={classes.paper}>
                            <h4>Our Projects</h4>
                            <a className={classes.linkText} href='https://github.com/tobynboudreaux/RuntimeTerror' target='blank'><small>HotelYeah! Frontend Repo</small></a>
                            <a className={classes.linkText} href='https://github.com/RubenDguez/HotelYeah-API' target='blank'><small>HotelYeah! Backend Repo</small></a>
                        </Paper>
                    </Grid>

                    <Grid item xs={12}>
                        <Paper elevation={0} className={classes.paper}>
                            <small>Copyright &#169; 2020 - {date} HotelYeah! LLC. All Rights Reserved. HotelYeah!&#174; is a registered trademark</small><br/>
                            <small>Managed by RuntimeTerror&#8482;</small>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    )

}

export default Footer