import React, { useEffect, useState } from 'react'
import API from '../util/API';

interface listing {
    code: string
}

const Listing = () => {
    const [listings, setListings] = useState([]);
    const getListings = async () => {
        const resp = await API().getHotel();
        setListings(resp.data.content);
    }
    useEffect(() => {
        getListings();
    }, []);
    return (
        <div>
            <p>{listings.map((listing: listing) => { return <p>{listing.code}</p>})}</p>
        </div>
    )
}

export default Listing