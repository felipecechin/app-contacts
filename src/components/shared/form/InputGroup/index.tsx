import { FieldValues, Path, UseFormRegister } from 'react-hook-form'
import { Input, Label } from './styles'

import MessageError from '@/components/shared/MessageError'

interface IInputGroupProps<T extends FieldValues> {
    label: string
    error: string
    type?: string
    register: UseFormRegister<T>
    name: Path<T>
    placeholder?: string
}

function InputGroup<T extends FieldValues>({
    label,
    error,
    name,
    type = 'text',
    register,
    placeholder,
}: IInputGroupProps<T>): JSX.Element {
    return (
        <>
            <Label>{label}</Label>
            <Input
                placeholder={placeholder}
                {...register(name)}
                type={type}
            />
            {error && <MessageError message={error} />}
        </>
    )
}

export default InputGroup
