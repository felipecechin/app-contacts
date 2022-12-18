import { Message } from './styles'

interface IMessageErrorProps {
    message: string
}

function MessageError({ message }: IMessageErrorProps): JSX.Element {
    return <Message>{message}</Message>
}

export default MessageError
