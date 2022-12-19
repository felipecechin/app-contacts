import { ContactsByLetterBlock, Container, MessageContactsNotFound, ResultsContent, SearchContent } from './styles'
import { Fragment, useCallback, useEffect, useState } from 'react'
import reactSwal, { sweetAlertOptions } from '@/utils/reactSwal'

import AddContactButton from '@/components/contacts/AddContactButton'
import { Contact } from '@/types/contact'
import ContactItem from '@/components/contacts/ContactItem'
import ContactsSearch from '@/components/contacts/ContactsSearch'
import DrawerStoreUpdateContact from '@/components/contacts/DrawerStoreUpdateContact'
import Header from '@/components/shared/template/Header'
import MainContent from '@/components/shared/template/MainContent'
import lodashOrderBy from 'lodash/orderBy'
import { useContacts } from '@/contexts/useContacts'

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

export default function App() {
    const { contacts, deleteContact } = useContacts()
    const [showFormContactDrawer, setShowFormContactDrawer] = useState<{
        open: boolean
        contactToUpdate: Contact | null
    }>({
        open: false,
        contactToUpdate: null,
    })

    const [filteredContacts, setFilteredContacts] = useState<Contact[]>([])

    useEffect(() => {
        setFilteredContacts(contacts)
    }, [contacts])

    const handleSearchContacts = useCallback(
        (query: string) => {
            const filteredContacts = contacts.filter((contact) => {
                return contact.name.toLowerCase().includes(query.toLowerCase())
            })
            setFilteredContacts(filteredContacts)
        },
        [contacts]
    )

    const handleAddContact = useCallback(() => {
        setShowFormContactDrawer({
            open: true,
            contactToUpdate: null,
        })
    }, [])

    const handleEditContact = useCallback(
        (contact: Contact) => {
            setShowFormContactDrawer({
                open: true,
                contactToUpdate: contact,
            })
        },
        [setShowFormContactDrawer]
    )

    const handleDeleteContact = useCallback(
        async (contact: Contact) => {
            reactSwal
                .fire({
                    title: 'Tem certeza que deseja remover o contato?',
                    cancelButtonColor: sweetAlertOptions.cancelButtonColor,
                    cancelButtonText: 'Cancelar!',
                    confirmButtonColor: sweetAlertOptions.confirmButtonColor,
                    confirmButtonText: 'Sim, remover!',
                    icon: 'question',
                    showCancelButton: true,
                    text: 'Esta ação não pode ser revertida',
                })
                .then(async (result) => {
                    if (result.isConfirmed) {
                        deleteContact(contact.id)
                    }
                })
        },
        [deleteContact]
    )

    const showContactsByInitialCharacter = useCallback(
        (letter: string) => {
            let filteredContactsByInitialCharacter: Contact[] = []
            if (letter === '#') {
                filteredContactsByInitialCharacter = filteredContacts.filter((contact) => {
                    const firstLetter = contact.name[0].toLowerCase()
                    return !alphabet.includes(firstLetter)
                })
            } else {
                filteredContactsByInitialCharacter = filteredContacts.filter((contact) => {
                    return contact.name.toLowerCase().startsWith(letter.toLowerCase())
                })
            }
            filteredContactsByInitialCharacter = lodashOrderBy(filteredContactsByInitialCharacter, ['name'], ['asc'])
            if (filteredContactsByInitialCharacter.length === 0) return null
            return (
                <ContactsByLetterBlock>
                    <span>
                        <p>{letter.toUpperCase()}</p>
                    </span>
                    <ul>
                        {filteredContactsByInitialCharacter.map((contact) => {
                            return (
                                <ContactItem
                                    key={contact.id}
                                    contact={contact}
                                    onEditContact={handleEditContact}
                                    onDeleteContact={handleDeleteContact}
                                />
                            )
                        })}
                    </ul>
                </ContactsByLetterBlock>
            )
        },
        [filteredContacts, handleEditContact, handleDeleteContact]
    )

    return (
        <>
            <Header />
            <MainContent>
                <Container>
                    <SearchContent>
                        <ContactsSearch
                            contacts={contacts}
                            onSearchContacts={handleSearchContacts}
                        />
                        <AddContactButton onClick={handleAddContact} />
                    </SearchContent>
                    <ResultsContent>
                        {filteredContacts.length === 0 && (
                            <MessageContactsNotFound>Nenhum contato encontrado</MessageContactsNotFound>
                        )}
                        {filteredContacts.length > 0 && (
                            <>
                                {showContactsByInitialCharacter('#')}
                                {alphabet.map((letter) => {
                                    return <Fragment key={letter}>{showContactsByInitialCharacter(letter)}</Fragment>
                                })}
                            </>
                        )}
                    </ResultsContent>
                </Container>
                <DrawerStoreUpdateContact
                    open={showFormContactDrawer.open}
                    onClose={() => setShowFormContactDrawer({ ...showFormContactDrawer, open: false })}
                    contactToUpdate={showFormContactDrawer.contactToUpdate}
                />
            </MainContent>
        </>
    )
}
