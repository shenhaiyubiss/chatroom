export interface IStoreProps {
    searchListVisible?: boolean
    setSearchListVisible?: (visible: boolean) => void
    fetchChatList?: () => void
}

export interface IUser {
    id: number
    name: string
    avatar: string
}
export interface IGroup {
    id: number
    name: string
    avatar: string
    to_group_id: string
}
export interface IResult {
    users: IUser[]
    groups: IGroup[]
}
