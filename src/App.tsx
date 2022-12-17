import { useCallback, useMemo } from 'react'

import { FaSearch } from 'react-icons/fa'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Turnstone from 'turnstone'

const styles = {
    container: 'w-full sm:max-w-sm',
    input: 'w-full h-12 border border-cyan-600 pl-2 pr-8 text-md outline-none rounded',
    inputFocus: 'w-full h-12 pl-2 pr-8 text-md outline-none ring-2 ring-cyan-600 rounded border-none',
    query: 'text-cyan-800 placeholder-cyan-800',
    typeahead: 'text-crystal-500 border-white',
    cancelButton:
        'absolute w-10 h-12 inset-y-0 left-0 items-center justify-center z-10 text-crystal-600 inline-flex sm:hidden',
    clearButton:
        'absolute inset-y-0 right-0 w-8 inline-flex items-center justify-center text-crystal-500 hover:text-hotpink-300',
    listbox: 'w-full bg-white sm:rounded text-left sm:mt-2 p-2 sm:drop-shadow-xl',
    groupHeading: 'cursor-default mt-2 mb-0.5 px-1.5 uppercase text-sm text-hotpink-300',
    item: 'cursor-pointer p-1.5 text-lg overflow-ellipsis overflow-hidden text-cyan-700',
    highlightedItem:
        'cursor-pointer p-1.5 text-lg overflow-ellipsis overflow-hidden text-cyan-700 rounded hover:bg-cyan-700 hover:text-white',
    match: 'font-semibold',
    noItems: 'cursor-default text-center my-20',
}

export default function App() {
    const contacts = [
        {
            id: '1',
            name: 'Jane Cooper',
            email: 'jane.cooper@example.com',
        },
        {
            id: '2',
            name: 'Tom Cook',
            email: 'tomcook@example.com',
        },
        {
            id: '3',
            name: 'Felipe',
            email: 'tomcook@example.com',
        },
        {
            id: '4',
            name: 'Adevaldo',
            email: 'tomcook@example.com',
        },
        {
            id: '5',
            name: 'Adolmir',
            email: 'tomcook@example.com',
        },
    ]
    const searchedContacts = useCallback((query: string) => {
        return contacts.filter((contact) => {
            return contact.name.toLowerCase().includes(query.toLowerCase())
        })
    }, [])

    const listbox = useMemo(() => {
        return {
            displayField: 'name',
            data: searchedContacts,
        }
    }, [])

    return (
        <>
            <Header />
            <MainContent>
                <div className='flex flex-col'>
                    <div className='bg-white rounded-lg shadow-lg px-4 py-4 flex justify-center'>
                        <Turnstone
                            id='autocomplete'
                            listbox={listbox}
                            clearButton={true}
                            matchText={true}
                            placeholder='Procure...'
                            styles={styles}
                            typeahead={false}
                            maxItems={5}
                        />
                        <button className='bg-cyan-800 px-4 rounded text-white ml-2 focus:outline-none focus:ring-2 focus:ring-cyan-600'>
                            <FaSearch />
                        </button>
                    </div>
                    <div className='bg-white rounded-lg shadow-lg px-4 py-4 flex justify-center mt-6'></div>
                </div>
            </MainContent>
        </>
    )
}
