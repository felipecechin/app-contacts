import { Control, FieldValues, Path, UnPackAsyncDefaultValues, useController } from 'react-hook-form'
import Select, {
    CSSObjectWithLabel,
    ControlProps,
    GroupBase,
    OnChangeValue,
    PropsValue,
    StylesConfig,
} from 'react-select'

import { Label } from './styles'
import MessageError from '@/components/shared/MessageError'
import { useMemo } from 'react'

interface IControlledReactSelectProps<T extends FieldValues> {
    label: string
    error: string
    name: Path<UnPackAsyncDefaultValues<T>>
    placeholder?: string
    control: Control<T>
    options: {
        label: string
        value: string
    }[]
    onCustomChange?: (value: string) => void
    placeholderWhenEmptyOptions?: string
}

export default function ControlledReactSelect<
    T extends FieldValues,
    Option,
    IsMulti extends boolean = false,
    Group extends GroupBase<Option> = GroupBase<Option>
>({
    label,
    control,
    error,
    name,
    placeholder = '',
    options,
    onCustomChange,
    placeholderWhenEmptyOptions,
}: IControlledReactSelectProps<T>): JSX.Element {
    const {
        field: { value, onChange: handleControllerChange },
    } = useController({
        name,
        control,
    })

    const brandColor = useMemo(() => '#15803D', [])
    const customStyles = useMemo(() => {
        return {
            control: (base: CSSObjectWithLabel, state: ControlProps) => ({
                ...base,
                border: '2px solid #15803D',
                boxShadow: state.isFocused ? 0 : 0,
                borderColor: state.isFocused ? brandColor : base.borderColor,
                '&:hover': {
                    borderColor: state.isFocused ? brandColor : base.borderColor,
                    cursor: 'pointer',
                },
                whiteSpace: 'nowrap',
            }),
        } as unknown as StylesConfig<Option, IsMulti, Group>
    }, [brandColor])

    return (
        <>
            <Label>{label}</Label>
            <Select
                classNames={{
                    control: () => 'p-1 h-12',
                }}
                instanceId={'react-select' + name}
                isOptionSelected={(option) => {
                    const optionItem = option as unknown as { value: string }
                    return optionItem.value === value
                }}
                name={'react-select-' + name}
                noOptionsMessage={() => 'Nenhuma opção encontrada'}
                onChange={(option: OnChangeValue<Option, IsMulti>) => {
                    const optionItem = option as unknown as { value: string }
                    if (onCustomChange) {
                        onCustomChange(optionItem.value)
                    }
                    handleControllerChange(optionItem.value)
                }}
                options={options as Option[]}
                placeholder={
                    placeholderWhenEmptyOptions && options.length === 0 ? placeholderWhenEmptyOptions : placeholder
                }
                styles={customStyles}
                value={options.find((option) => option.value === value) as PropsValue<Option>}
            />
            {error && <MessageError message={error} />}
        </>
    )
}
