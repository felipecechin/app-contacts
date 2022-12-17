class FetchError extends Error {
    data: any
    name: string
    status: number

    constructor(status: number, message: string, data: any) {
        super(message)

        this.name = 'FetchError'
        this.data = data ?? {
            message: message,
        }
        this.status = status
    }
}

export default FetchError
