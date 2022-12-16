import { Container } from './styles'
import { FaUserCircle } from 'react-icons/fa'

export default function Header() {
    return (
        <Container>
            <div>
                <div>
                    <span>
                        <FaUserCircle />
                        App Contacts
                    </span>
                </div>
                <h1>Meus contatos</h1>
            </div>
        </Container>
    )
}
