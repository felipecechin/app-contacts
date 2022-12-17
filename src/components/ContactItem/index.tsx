import { Container, DeleteButton, EditButton } from './styles'
import { FaPencilAlt, FaTrashAlt, FaUserCircle } from 'react-icons/fa'

import { Contact } from '@/types/contact'

interface IContactItemProps {
    contact: Contact
}

export default function ContactItem({ contact }: IContactItemProps) {
    return (
        <Container>
            <FaUserCircle />
            <p>{contact.name}</p>
            <span>
                <EditButton type='button'>
                    <FaPencilAlt />
                </EditButton>
                <DeleteButton type='button'>
                    <FaTrashAlt />
                </DeleteButton>
            </span>
        </Container>
    )
}
