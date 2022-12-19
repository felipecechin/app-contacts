import tw, { styled } from 'twin.macro'

export const Form = styled.form`
    ${tw`flex h-full flex-col divide-y divide-gray-200 bg-white border-t-2`}
`

export const FormContent = styled.div`
    ${tw`flex-1 flex flex-col overflow-y-auto px-4 space-y-6 py-4`}
`

export const ButtonContent = styled.div`
    ${tw`flex flex-shrink-0 justify-end px-4 py-4 items-center`}

    > button {
        ${tw`w-full sm:w-auto flex items-center justify-center py-1 sm:py-2 px-2 sm:px-4 text-center text-lg text-white font-semibold bg-green-800 hover:bg-green-900 border-2 border-green-900 shadow rounded transition duration-200`}

        > svg {
            ${tw`w-4 h-4 mr-2`}
        }
    }
`

export const FormBlockContent = styled.div`
    ${tw`flex flex-col space-y-3`}

    > span {
        ${tw`flex items-center`}

        > h3 {
            ${tw`text-xl font-semibold`}
        }

        > button {
            ${tw`ml-2 py-2 px-2 text-sm text-gray-900 bg-white rounded border border-gray-200 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-2 focus:ring-green-700 focus:text-green-700`}
        }
    }

    > div {
        ${tw`flex bg-gray-100 rounded p-3 space-x-1`}

        > span {
            ${tw`mr-2`}

            > button {
                ${tw`py-2 px-2 text-sm text-gray-900 bg-white rounded border border-gray-200 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-2 focus:ring-green-700 focus:text-green-700`}
            }
        }
    }
`

export const AddressFieldsContent = styled.div`
    ${tw`flex-grow flex flex-col space-y-2`}
`

export const FieldsGridContent = styled.div`
    ${tw`grid grid-cols-1 sm:grid-cols-2 gap-2`}
`

export const FieldsGridContentFlexGrow = styled(FieldsGridContent)`
    ${tw`flex-grow`}
`
