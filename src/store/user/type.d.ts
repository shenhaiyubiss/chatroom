import { UserStore as UserStoreModel } from './index'

export as namespace IUserStore

export interface UserStore extends UserStoreModel {}

interface IUserInfo {
    id?: number
    username?: string
    avatar?: string
}

interface IUpdateUserInfoParams {
    username?: string
    oldpsw?: string
    newpsw?: string
    avatar?: string
}
