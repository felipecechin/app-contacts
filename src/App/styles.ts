import tw, { styled } from 'twin.macro'

export const Container = styled.div`
    ${tw`flex flex-col`}
`

export const SearchContent = styled.div`
    ${tw`bg-white rounded-lg shadow-lg px-4 py-4 flex flex-col-reverse sm:flex-row justify-between`}
`

export const ResultsContent = styled.div`
    ${tw`bg-white rounded-lg shadow-lg px-4 py-4 flex flex-col justify-center mt-6 space-y-4`}
`

export const MessageContactsNotFound = styled.p`
    ${tw`text-center text-lg text-green-700 italic`}
`

export const ContactsByLetterBlock = styled.div`
    ${tw`flex flex-col sm:flex-row`}

    > span {
        > p {
            ${tw`bg-gray-300 font-bold text-lg text-black rounded p-3 inline-block w-10 text-center`}
        }
    }

    > ul {
        ${tw`flex-grow sm:ml-2 pb-2 space-y-1 max-h-64 overflow-auto mt-2 sm:mt-0`}
    }
`
