import { AutoCompleteList, Container, DivInputContent, SearchButton } from './styles'
import { FaRegTimesCircle, FaSearch } from 'react-icons/fa'
import { useCallback, useEffect, useRef, useState } from 'react'

import { Contact } from '@/types/contact'

interface IContactsSearchProps {
    contacts: Contact[]
    onSearchContacts: (query: string) => void
}

export default function ContactsSearch({ contacts, onSearchContacts }: IContactsSearchProps) {
    const [filteredContacts, setFilteredContacts] = useState<Contact[]>([])
    const [showFilteredContacts, setShowFilteredContacts] = useState(false)
    const inputSearchRef = useRef<HTMLInputElement>(null)
    const timeoutCloseAutoComplete = useRef<ReturnType<typeof setTimeout> | null>(null)
    const [showClearButton, setShowClearButton] = useState(false)

    useEffect(() => {
        return () => clearTimeout(timeoutCloseAutoComplete.current as NodeJS.Timeout)
    }, [])

    const handleAutoCompleteSearchContacts = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const query = e.target.value
            if (query.length > 0) {
                setShowClearButton(true)
                const filteredContacts = contacts
                    .filter((contact) => {
                        return contact.name.toLowerCase().includes(query.toLowerCase())
                    })
                    .slice(0, 5)
                if (filteredContacts.length > 0) {
                    setFilteredContacts(filteredContacts)
                    setShowFilteredContacts(true)
                } else {
                    setShowFilteredContacts(false)
                }
            } else {
                setShowClearButton(false)
                setShowFilteredContacts(false)
            }
        },
        [contacts]
    )

    const handleClickToCompleteSearch = useCallback((contact: Contact) => {
        if (inputSearchRef.current) {
            inputSearchRef.current.value = contact.name
            setShowClearButton(true)
        }
    }, [])

    const handleCloseSuggestions = useCallback(() => {
        timeoutCloseAutoComplete.current = setTimeout(() => {
            setShowFilteredContacts(false)
        }, 100)
    }, [])

    const handleClearInputSearch = useCallback(() => {
        if (inputSearchRef.current) {
            inputSearchRef.current.value = ''
            inputSearchRef.current.focus()
            setShowClearButton(false)
        }
    }, [])

    const handleSearchContacts = useCallback(() => {
        if (inputSearchRef.current) {
            onSearchContacts(inputSearchRef.current.value)
        }
    }, [onSearchContacts])

    return (
        <Container>
            <DivInputContent>
                <input
                    onChange={handleAutoCompleteSearchContacts}
                    ref={inputSearchRef}
                    placeholder='Procure...'
                    onBlur={handleCloseSuggestions}
                />
                {showClearButton && (
                    <button onClick={handleClearInputSearch}>
                        <FaRegTimesCircle />
                    </button>
                )}
                {filteredContacts.length > 0 && showFilteredContacts && (
                    <AutoCompleteList>
                        {filteredContacts.map((contact) => (
                            <li
                                key={contact.id}
                                onClick={() => handleClickToCompleteSearch(contact)}
                            >
                                {contact.name}
                            </li>
                        ))}
                    </AutoCompleteList>
                )}
            </DivInputContent>
            <SearchButton onClick={handleSearchContacts}>
                <FaSearch />
            </SearchButton>
        </Container>
    )
}
