export interface Contact {
    id: number
    name: string
    addresses: {
        zip: string
        state: string
        city: string
        street: string
        district: string
        number: number
        complement: string
    }[]
    phones: {
        number: string
        model: string
    }[]
}
