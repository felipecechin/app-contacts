import tw, { styled } from 'twin.macro'

export const Container = styled.header`
    ${tw`w-full 
    bg-gradient-to-r 
    from-green-700 
    to-green-400 
    px-4 py-4`}

    > div {
        ${tw`max-w-4xl flex flex-col mx-auto pb-32`}

        > div {
            ${tw`rounded-lg bg-white flex items-center justify-between px-4 py-4`}

            > span {
                ${tw`flex items-center normal-case font-bold text-xl text-green-800`}

                > svg {
                    ${tw`h-4 w-4 mr-1 mb-1 flex-shrink-0 self-end`}
                }
            }
        }

        > h1 {
            ${tw`mt-12 text-3xl font-bold text-white flex items-center`}
        }
    }
`
