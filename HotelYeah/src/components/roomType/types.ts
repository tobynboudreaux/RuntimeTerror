export interface IRoomType {
    id: number;
    code: string;
    description: String;
}

export interface RoomTypeState {
    roomTypeList: IRoomType[]
}