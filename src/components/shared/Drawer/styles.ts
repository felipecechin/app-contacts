import tw, { styled } from 'twin.macro'

export const Overlay = styled.div`
    ${tw`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity`}
`
export const Container = styled.div`
    ${tw`fixed inset-0 overflow-hidden`}

    > div {
        ${tw`absolute inset-0 overflow-hidden`}

        > div {
            ${tw`pointer-events-none fixed inset-y-0 right-0 flex max-w-full`}
        }
    }
`

export const dialogStyles = 'relative z-10'

export const dialogPanelStyles = 'pointer-events-auto relative w-screen max-w-lg'
export const dialogTitleStyles = 'text-lg font-medium text-gray-900'

export const Content = styled.div`
    ${tw`flex h-full flex-col bg-white shadow-xl`}
`

export const ContentTitle = styled.div`
    ${tw`w-full flex justify-between px-4 py-6 sm:px-6`}

    > button {
        ${tw`rounded-md text-gray-300 hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-white`}

        > span {
            ${tw`sr-only`}
        }

        > svg {
            ${tw`h-8 w-8`}
        }
    }
`

export const ContentBody = styled.div`
    ${tw`relative mt-4 flex-1 px-4 sm:px-6`}

    > div {
        ${tw`absolute inset-0`}

        > div {
            ${tw`h-full border-gray-200`}
        }
    }
`
