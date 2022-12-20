import { Control, Controller, FieldValues, Path, PathValue } from 'react-hook-form'
import { Label, StyledInputMask } from './styles'

import MessageError from '@/components/shared/MessageError'
import React from 'react'
import { UnPackAsyncDefaultValues } from 'react-hook-form'

interface IInputMaskGroupProps<T extends FieldValues> {
    label: string
    error: string
    control: Control<T>
    onCustomBlur?: (value: string) => void
    name: Path<UnPackAsyncDefaultValues<T>>
    mask: string
}

function InputMaskGroup<T extends FieldValues>({
    control,
    name,
    label,
    error,
    mask,
    onCustomBlur,
}: IInputMaskGroupProps<T>): JSX.Element {
    return (
        <>
            <Label htmlFor={name}>{label}</Label>
            <Controller
                control={control}
                defaultValue={'' as PathValue<T, Path<T>>}
                name={name}
                render={({ field: { onChange, value, ref } }) => (
                    <StyledInputMask
                        mask={mask}
                        maskPlaceholder={null}
                        name={name}
                        ref={ref}
                        onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                            if (onCustomBlur) {
                                onCustomBlur(e.target.value)
                            }
                        }}
                        onChange={onChange}
                        type={'text'}
                        value={value}
                    />
                )}
            />
            {error && <MessageError message={error} />}
        </>
    )
}

export default InputMaskGroup
