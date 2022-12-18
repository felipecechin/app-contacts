import tw, { styled } from 'twin.macro'

export const turnstoneStyles = {
    container: 'w-full sm:max-w-sm relative',
    input: 'w-full h-12 border border-green-600 pl-2 pr-10 text-md outline-none rounded',
    inputFocus: 'w-full h-12 pl-2 pr-10 text-md outline-none ring-2 ring-green-600 rounded border-none',
    query: 'text-green-800 placeholder-green-800',
    typeahead: 'border-white',
    cancelButton:
        'absolute w-10 h-12 inset-y-0 left-0 items-center justify-center z-10 text-green-700 inline-flex sm:hidden',
    clearButton:
        'absolute inset-y-0 right-0 w-8 inline-flex items-center justify-center text-white bg-green-700 hover:text-green-300',
    listbox: 'w-full bg-white sm:rounded text-left sm:mt-2 p-2 sm:drop-shadow-xl',
    groupHeading: 'cursor-default mt-2 mb-0.5 px-1.5 uppercase text-sm text-hotpink-300',
    item: 'cursor-pointer p-1.5 text-lg overflow-ellipsis overflow-hidden text-green-700',
    highlightedItem:
        'cursor-pointer p-1.5 text-lg overflow-ellipsis overflow-hidden text-green-700 rounded hover:bg-green-700 hover:text-white',
    match: 'font-semibold',
    noItems: 'cursor-default text-center my-20',
}

export const SearchButton = styled.button`
    ${tw`bg-green-800 px-4 rounded text-white ml-2 focus:outline-none focus:ring-2 focus:ring-green-600`}
`
