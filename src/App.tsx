import { Fragment, useCallback, useEffect, useState } from 'react'

import AddContactButton from '@/components/AddContactButton'
import { Contact } from '@/types/contact'
import ContactItem from '@/components/ContactItem'
import ContactsSearch from '@/components/ContactsSearch'
import DrawerStoreContact from '@/components/DrawerStoreContact'
import Header from '@/components/shared/template/Header'
import MainContent from '@/components/shared/template/MainContent'
import { useContacts } from '@/contexts/useContacts'

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

export default function App() {
    const { contacts } = useContacts()
    const [showFormContactDrawer, setShowFormContactDrawer] = useState<{
        open: boolean
        contactToUpdate?: Contact | null
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

    const showContactsByInitialCharacter = useCallback(
        (letter: string) => {
            const filteredContactsByInitialCharacter = filteredContacts.filter((contact) => {
                return contact.name.toLowerCase().startsWith(letter.toLowerCase())
            })
            if (filteredContactsByInitialCharacter.length === 0) return null
            return (
                <div className='flex flex-col sm:flex-row'>
                    <span>
                        <p className='bg-gray-300 font-bold text-lg text-black rounded p-3 inline-block w-10 text-center'>
                            {letter.toUpperCase()}
                        </p>
                    </span>
                    <ul className='flex-grow sm:ml-2 pb-2 space-y-1 max-h-64 overflow-auto mt-2 sm:mt-0'>
                        {filteredContactsByInitialCharacter.map((contact) => {
                            return (
                                <ContactItem
                                    key={contact.id}
                                    contact={contact}
                                    onEditContact={() =>
                                        setShowFormContactDrawer({
                                            open: true,
                                            contactToUpdate: contact,
                                        })
                                    }
                                />
                            )
                        })}
                    </ul>
                </div>
            )
        },
        [filteredContacts]
    )

    return (
        <>
            <Header />
            <MainContent>
                <div className='flex flex-col'>
                    <div className='bg-white rounded-lg shadow-lg px-4 py-4 flex flex-col-reverse sm:flex-row justify-between'>
                        <ContactsSearch
                            contacts={contacts}
                            onSearchContacts={handleSearchContacts}
                        />
                        <AddContactButton
                            onClick={() =>
                                setShowFormContactDrawer({
                                    open: true,
                                    contactToUpdate: null,
                                })
                            }
                        />
                    </div>
                    <div className='bg-white rounded-lg shadow-lg px-4 py-4 flex flex-col justify-center mt-6 space-y-4'>
                        {filteredContacts.length === 0 && (
                            <p className='text-center text-lg text-cyan-700 italic'>Nenhum contato encontrado</p>
                        )}
                        {filteredContacts.length > 0 &&
                            alphabet.map((letter) => {
                                return <Fragment key={letter}>{showContactsByInitialCharacter(letter)}</Fragment>
                            })}
                    </div>
                </div>
                <DrawerStoreContact
                    open={showFormContactDrawer.open}
                    onClose={() => setShowFormContactDrawer({ ...showFormContactDrawer, open: false })}
                />
            </MainContent>
        </>
    )
}
