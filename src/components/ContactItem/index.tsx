import { Container, DeleteButton, EditButton } from './styles'
import { FaPencilAlt, FaTrashAlt, FaUserCircle } from 'react-icons/fa'

import { Contact } from '@/types/contact'

interface IContactItemProps {
    contact: Contact
    onEditContact: (contact: Contact) => void
    onDeleteContact: (contact: Contact) => void
}

export default function ContactItem({ contact, onEditContact, onDeleteContact }: IContactItemProps) {
    return (
        <Container>
            <FaUserCircle />
            <p>{contact.name}</p>
            <span>
                <EditButton
                    onClick={() => onEditContact(contact)}
                    type='button'
                >
                    <FaPencilAlt />
                </EditButton>
                <DeleteButton
                    onClick={() => onDeleteContact(contact)}
                    type='button'
                >
                    <FaTrashAlt />
                </DeleteButton>
            </span>
        </Container>
    )
}
