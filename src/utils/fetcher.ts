import FetchError from './FetchError'
import env from '@/env'

interface IFetcherArgs {
    method: string
    url: string
    data?: object
}

const fetcher = async (args: IFetcherArgs): Promise<any> => {
    const { method, url, data } = args
    const headers: HeadersInit = {}

    headers['Content-Type'] = 'application/json'
    const pathUrl = `${env.API}${url}`

    const response = await fetch(pathUrl, {
        method,
        headers,
        body: data ? JSON.stringify(data) : undefined,
    })

    const responseData = await response.json()

    if (!response.ok) {
        throw new FetchError(response.status, response.statusText, responseData ? responseData : null)
    }

    return responseData
}

export default fetcher
