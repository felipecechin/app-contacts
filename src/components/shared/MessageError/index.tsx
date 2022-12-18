import { Container } from './styles'

interface IMessageErrorProps {
    message: string
}

function MessageError({ message }: IMessageErrorProps): JSX.Element {
    return <Container>{message}</Container>
}

export default MessageError
