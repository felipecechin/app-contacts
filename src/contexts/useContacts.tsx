import { closeSwal, showSwalError, showSwalLoading, showSwalSuccess } from '@/utils/reactSwal'
import { createContext, useCallback, useContext, useEffect, useState } from 'react'

import { Contact } from '@/types/contact'
import fetcher from '@/utils/fetcher'

type TContactsContextData = {
    contacts: Contact[]
    storeContact: (contactToStore: Omit<Contact, 'id'>) => Promise<void>
    updateContact: (contactToUpdate: Contact) => Promise<void>
    deleteContact: (id: number) => Promise<void>
}

const ContactsContext = createContext({} as TContactsContextData)

type TGetContactsResponse = Contact[]

interface IContactsProviderProps {
    children: React.ReactNode
}

export function ContactsProvider({ children }: IContactsProviderProps) {
    const [contacts, setContacts] = useState<Contact[]>([])

    useEffect(() => {
        const getContacts = async (): Promise<void> => {
            showSwalLoading()
            try {
                const response = (await fetcher({
                    method: 'GET',
                    url: '/contacts',
                })) as TGetContactsResponse

                setContacts(response)
                closeSwal()
            } catch (error) {
                showSwalError('Ocorreu algum erro ao buscar os contatos. Tente novamente mais tarde.')
            }
        }
        getContacts()
    }, [])

    const storeContact = useCallback(async (contactToStore: Omit<Contact, 'id'>): Promise<void> => {
        showSwalLoading()
        try {
            const savedContact = (await fetcher({
                method: 'POST',
                url: '/contacts',
                data: contactToStore,
            })) as Contact
            setContacts((oldState) => {
                return [...oldState, savedContact]
            })
            showSwalSuccess('Contato salvo com sucesso!')
        } catch (error) {
            showSwalError('Ocorreu algum erro ao salvar o contato. Tente novamente mais tarde.')
        }
    }, [])

    const updateContact = useCallback(async (contact: Contact): Promise<void> => {
        showSwalLoading()
        try {
            const updatedContact = (await fetcher({
                method: 'PUT',
                url: `/contacts/${contact.id}`,
                data: contact,
            })) as Contact
            setContacts((oldState) => {
                return oldState.map((contact) => {
                    if (contact.id === updatedContact.id) {
                        return updatedContact
                    }
                    return contact
                })
            })
            showSwalSuccess('Contato atualizado com sucesso!')
        } catch (error) {
            showSwalError('Ocorreu algum erro ao atualizar o contato. Tente novamente mais tarde.')
        }
    }, [])

    const deleteContact = useCallback(async (id: number): Promise<void> => {
        showSwalLoading()
        try {
            await fetcher({
                method: 'DELETE',
                url: `/contacts/${id}`,
            })
            setContacts((oldState) => {
                return oldState.filter((contact) => contact.id !== id)
            })
            showSwalSuccess('Contato deletado com sucesso!')
        } catch (error) {
            showSwalError('Ocorreu algum erro ao deletar o contato. Tente novamente mais tarde.')
        }
    }, [])

    return (
        <ContactsContext.Provider
            value={{
                contacts,
                storeContact,
                updateContact,
                deleteContact,
            }}
        >
            {children}
        </ContactsContext.Provider>
    )
}

export const useContacts = (): TContactsContextData => useContext(ContactsContext)
