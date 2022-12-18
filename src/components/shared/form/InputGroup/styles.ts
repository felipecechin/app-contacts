import tw, { styled } from 'twin.macro'

export const Label = styled.label`
    ${tw`block mb-1 font-medium`}
`

export const Input = styled.input`
    ${tw`h-12 w-full placeholder-green-700 bg-white shadow border-2 border-green-700 rounded focus:outline-none focus:ring focus:ring-green-300 p-2`}
`
