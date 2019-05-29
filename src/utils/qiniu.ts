import req from './request'
import { UploadFile } from 'antd/lib/upload/interface'
import * as qiniu from 'qiniu-js'

function qnUpload(file: File | UploadFile) {
    return req.get('/qiniu/token')
}

export function customeUploadQn(options: any, userId: number) {
    const { action: uploadAction, file, filename, headers, onSuccess } = options
    qnUpload(file).then(data => {
        const uploadToken = data
        const observer = {
            next(res) {
                // console.log('qiniu observer next', res);
            },
            error(err) {
                // console.log('qiniu observer err', err);
                return err
            },
            complete(res) {
                onSuccess(res, file)
            }
        }

        const config = { useCdnDomain: true }
        const putExtra = {}
        const key = `${userId}_${new Date().getTime()}_${file.name}`
        const observable = qiniu.upload(
            file,
            key,
            uploadToken,
            putExtra,
            config
        )
        const subscription = observable.subscribe(observer) // 上传开始
    })
}
