import tw, { css, styled } from 'twin.macro'

export const Container = styled.header`
    ${tw`w-full 
    bg-gradient-to-r 
    from-cyan-700 
    to-cyan-600 
    px-4 py-4`}

    > h1 {
        ${tw`text-3xl text-white underline`}
        ${css`
            background-color: #000;
        `}
    }
`
