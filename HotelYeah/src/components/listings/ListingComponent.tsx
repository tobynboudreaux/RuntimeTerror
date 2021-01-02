import React, { useEffect, useState } from 'react'
import API from '../util/API';

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
            <p>{listings.map((listing) => { return <p>{listing}</p>})}</p>
        </div>
    )
}

export default ListingComponent