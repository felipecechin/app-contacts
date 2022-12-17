import tw, { styled } from 'twin.macro'

export const Container = styled.li`
    ${tw`flex items-center bg-white shadow rounded p-2 text-lg text-cyan-800`}

    > p {
        ${tw`flex-grow ml-2 font-semibold`}
    }

    > span {
        ${tw`inline-flex`}
    }
`

export const EditButton = styled.button`
    ${tw`py-2 px-3 text-sm text-gray-900 bg-white rounded-l border border-gray-200 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:ring-2 focus:ring-cyan-700 focus:text-cyan-700`}
`

export const DeleteButton = styled.button`
    ${tw`py-2 px-3 text-sm text-gray-900 bg-white rounded-r border-t border-b border-r border-gray-200 hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:ring-2 focus:ring-cyan-700 focus:text-cyan-700`}
`
