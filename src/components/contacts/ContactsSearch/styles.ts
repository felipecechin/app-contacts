import tw, { styled } from 'twin.macro'

export const Container = styled.span`
    ${tw`flex items-center`}
`

export const DivInputContent = styled.div`
    ${tw`flex-grow relative`}

    > input {
        ${tw`h-12 pr-10 w-full placeholder-green-700 bg-white shadow border-2 border-green-700 rounded focus:outline-none focus:ring focus:ring-green-300 p-2`}
    }

    > button {
        ${tw`absolute inset-y-0 right-0 rounded-r w-8 inline-flex items-center justify-center text-white bg-green-800 hover:text-green-300 focus:outline-none focus:ring focus:ring-green-300`}
    }
`

export const AutoCompleteList = styled.ul`
    ${tw`w-full absolute rounded-md border-2 border-green-600 mt-1 overflow-auto`}

    > li {
        ${tw`p-2 bg-white cursor-pointer hover:bg-green-700 hover:text-white rounded`}
    }
`

export const SearchButton = styled.button`
    ${tw`bg-green-800 p-4 rounded text-white ml-2 focus:outline-none focus:ring-2 focus:ring-green-600`}
`
