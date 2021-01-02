import React, { useEffect, useState } from 'react'
import API from '../util/API';
import ListingContainer from './ListingContainer';

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
        <>
            <ListingContainer listings={listings} />
        </>
    )
}

export default ListingComponent