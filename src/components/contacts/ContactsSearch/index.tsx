import { SearchButton, turnstoneStyles } from './styles'
import { useCallback, useMemo, useState } from 'react'

import { Contact } from '@/types/contact'
import { FaSearch } from 'react-icons/fa'
import Turnstone from 'turnstone'

interface IContactsSearchProps {
    contacts: Contact[]
    onSearchContacts: (query: string) => void
}

export default function ContactsSearch({ contacts, onSearchContacts }: IContactsSearchProps) {
    const [query, setQuery] = useState('')
    const autoCompleteSearchedContacts = useCallback(
        (query: string) => {
            return contacts
                .filter((contact) => {
                    return contact.name.toLowerCase().includes(query.toLowerCase())
                })
                .slice(0, 5)
        },
        [contacts]
    )

    const listbox = useMemo(() => {
        return {
            displayField: 'name',
            data: autoCompleteSearchedContacts,
        }
    }, [autoCompleteSearchedContacts])

    return (
        <span className='flex items-center'>
            <Turnstone
                id='autocomplete'
                listbox={listbox}
                clearButton={true}
                matchText={true}
                placeholder='Procure...'
                styles={turnstoneStyles}
                typeahead={false}
                maxItems={5}
                onChange={(text: string) => setQuery(text)}
            />
            <SearchButton onClick={() => onSearchContacts(query)}>
                <FaSearch />
            </SearchButton>
        </span>
    )
}
