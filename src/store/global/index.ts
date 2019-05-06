import { observable, action, runInAction } from 'mobx'
import { message } from 'antd'
import { isEmpty } from 'lodash'

import req from '../../utils/request'
import chatStore from '../chat'

export class GlobalStore {
    @observable onlineList: IGlobalStore.onlineListItem[] = []
    @observable onlineListVisible: boolean = false

    @action
    setOnlineListVisible = (onlineListVisible: boolean) => {
        this.onlineListVisible = onlineListVisible
    }

    @action
    setOnlineList = (list: IGlobalStore.onlineListItem[]) => {
        this.onlineList = list
    }
}

export default new GlobalStore()
