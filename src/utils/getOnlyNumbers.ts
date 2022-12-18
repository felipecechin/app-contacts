export default function getOnlyNumbers(value: string): string {
    if (!value) return ''
    const numberPattern = /\d+/g
    const matchRegex = value.match(numberPattern)
    if (!matchRegex) {
        return ''
    }
    return matchRegex.join('')
}
