import * as React from 'react'
import RoomTypeContainer from './RoomTypeContainer'
import API from './api'

const RoomTypeComponent: React.FC = () => {

    const [roomTypes, setRoomTypes] = React.useState([])

    const getRoomTypes = async () => {
        const response = await API().getRoomTypes();
        setRoomTypes(response.data.content)
    }

    React.useEffect(() => {
        getRoomTypes()
    }, [])

    return (
        <>
            <RoomTypeContainer roomTypeList={roomTypes}/>
        </>
    )
}

export default RoomTypeComponent