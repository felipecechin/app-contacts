import { Container } from './styles'
import { FaUsers } from 'react-icons/fa'

export default function Header() {
    return (
        <Container>
            <div>
                <div>
                    <span>
                        <FaUsers />
                        App Contacts
                    </span>
                </div>
                <h1>Meus contatos</h1>
            </div>
        </Container>
    )
}
