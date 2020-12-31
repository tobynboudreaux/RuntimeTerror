import React, { useEffect, useState } from 'react'
import API from '../util/API';
import { Listing } from '../../store/listing/types'

const ListingComponent = () => {
    const [listings, setListings] = useState([]);
    const getListings = async () => {
        const resp = await API().getHotel();
        setListings(resp.data.content);
        console.log(resp)
    }
    useEffect(() => {
        getListings();
    }, []);
    return (
        <div>
            <p>{listings.map((listing: Listing) => { return <p>{listing.code}</p>})}</p>
        </div>
    )
}

export default ListingComponent