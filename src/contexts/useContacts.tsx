import { createContext, useCallback, useContext, useEffect, useState } from 'react'

import { Contact } from '@/types/contact'
import fetcher from '@/utils/fetcher'
import { reactSwal } from '@/utils/reactSwal'
import { sweetAlertOptions } from '@/utils/sweetAlertOptions'

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
            reactSwal.fire({
                title: 'Por favor, aguarde...',
                allowEscapeKey: false,
                allowOutsideClick: false,
            })
            reactSwal.showLoading(null)
            try {
                const response = (await fetcher({
                    method: 'GET',
                    url: '/contacts',
                })) as TGetContactsResponse

                setContacts(response)
                reactSwal.close()
            } catch (error) {
                reactSwal.fire({
                    title: 'Oops!',
                    icon: 'error',
                    text: 'Ocorreu algum erro ao buscar os contatos. Tente novamente mais tarde.',
                    confirmButtonColor: sweetAlertOptions.confirmButtonColor,
                })
            }
        }
        getContacts()
    }, [])

    const storeContact = useCallback(async (contactToStore: Omit<Contact, 'id'>): Promise<void> => {
        reactSwal.fire({
            title: 'Por favor, aguarde...',
            allowEscapeKey: false,
            allowOutsideClick: false,
        })
        reactSwal.showLoading(null)
        try {
            const savedContact = (await fetcher({
                method: 'POST',
                url: '/contacts',
                data: contactToStore,
            })) as Contact
            setContacts((oldState) => {
                return [...oldState, savedContact]
            })
            reactSwal.fire({
                title: 'Sucesso!',
                icon: 'success',
                text: 'Contato salvo com sucesso!',
                confirmButtonColor: sweetAlertOptions.confirmButtonColor,
            })
        } catch (error) {
            reactSwal.fire({
                title: 'Oops!',
                icon: 'error',
                text: 'Ocorreu algum erro ao salvar o contato. Tente novamente mais tarde.',
                confirmButtonColor: sweetAlertOptions.confirmButtonColor,
            })
        }
    }, [])

    const updateContact = useCallback(async (contact: Contact): Promise<void> => {
        reactSwal.fire({
            title: 'Por favor, aguarde...',
            allowEscapeKey: false,
            allowOutsideClick: false,
        })
        reactSwal.showLoading(null)
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
            reactSwal.fire({
                title: 'Sucesso!',
                icon: 'success',
                text: 'Contato atualizado com sucesso!',
                confirmButtonColor: sweetAlertOptions.confirmButtonColor,
            })
        } catch (error) {
            reactSwal.fire({
                title: 'Oops!',
                icon: 'error',
                text: 'Ocorreu algum erro ao atualizar o contato. Tente novamente mais tarde.',
                confirmButtonColor: sweetAlertOptions.confirmButtonColor,
            })
        }
    }, [])

    const deleteContact = useCallback(async (id: number): Promise<void> => {
        reactSwal.fire({
            title: 'Por favor, aguarde...',
            allowEscapeKey: false,
            allowOutsideClick: false,
        })
        reactSwal.showLoading(null)
        try {
            await fetcher({
                method: 'DELETE',
                url: `/contacts/${id}`,
            })
            setContacts((oldState) => {
                return oldState.filter((contact) => contact.id !== id)
            })
            reactSwal.fire({
                title: 'Sucesso!',
                icon: 'success',
                text: 'Contato deletado com sucesso',
                confirmButtonColor: sweetAlertOptions.confirmButtonColor,
            })
        } catch (error) {
            reactSwal.fire({
                title: 'Oops!',
                icon: 'error',
                text: 'Ocorreu algum erro ao deletar o contato. Tente novamente mais tarde.',
                confirmButtonColor: sweetAlertOptions.confirmButtonColor,
            })
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
