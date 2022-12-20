import * as yup from 'yup'

import {
    AddressFieldsContent,
    ButtonContent,
    FieldsGridContent,
    FieldsGridContentFlexGrow,
    Form,
    FormBlockContent,
    FormContent,
} from './styles'
import { FaPlus, FaSave, FaTrashAlt } from 'react-icons/fa'
import { SubmitHandler, useFieldArray } from 'react-hook-form'
import { showSwalError, showSwalWarning } from '@/utils/reactSwal'
import { useCallback, useEffect, useMemo, useState } from 'react'

import { Contact } from '@/types/contact'
import ControlledReactSelect from '@/components/shared/form/ControlledReactSelect'
import Drawer from '@/components/shared/Drawer'
import InputGroup from '@/components/shared/form/InputGroup'
import InputMaskGroup from '@/components/shared/form/InputMaskGroup'
import getOnlyNumbers from '@/utils/getOnlyNumbers'
import lodashIsEmpty from 'lodash/isEmpty'
import states from '@/utils/states'
import { useContacts } from '@/contexts/useContacts'
import { useFormWithSchema } from '@/hooks/useFormWithSchema'
import { yupMessages } from '@/utils/yupMessages'

interface IDrawerStoreContactProps {
    open: boolean
    onClose: () => void
    contactToUpdate: Contact | null
}

interface IViaCepResponse {
    erro?: boolean
    bairro: string
    localidade: string
    logradouro: string
    uf: string
    complemento: string
}

interface City {
    label: string
    value: string
    estadoid: string
}

export default function DrawerStoreUpdateContact({ open, onClose, contactToUpdate }: IDrawerStoreContactProps) {
    const { storeContact, updateContact } = useContacts()
    const [allCities, setAllCities] = useState<City[]>([])

    const addressSchema = useMemo(() => {
        return yup.object({
            zip: yup
                .string()
                .required(yupMessages.required)
                .transform((value) => {
                    return getOnlyNumbers(value)
                })
                .test('len', 'Por favor, preencha o CEP corretamente', (val) => {
                    if (val && val.length === 8) {
                        return true
                    }
                    return false
                }),
            city: yup.string().required(yupMessages.required),
            complement: yup.string().nullable(true),
            number: yup
                .number()
                .typeError(yupMessages.typeNumber)
                .positive(yupMessages.typeNumber)
                .required(yupMessages.required),
            state: yup.string().required(yupMessages.required),
            street: yup.string().required(yupMessages.required),
            district: yup.string().required(yupMessages.required),
        })
    }, [])

    const phoneSchema = useMemo(() => {
        return yup.object({
            number: yup
                .string()
                .required(yupMessages.required)
                .test('digits-only', 'Informe apenas números', (value) => /^\d+$/.test(value as string))
                .test('len', 'Por favor, informe pelo menos 8 números', (val) => {
                    if (val && val.length >= 8) {
                        return true
                    }
                    return false
                }),
            model: yup.string().required(yupMessages.required),
        })
    }, [])

    const formContactSchema = useMemo(() => {
        return yup.object({
            name: yup.string().required(yupMessages.required),
            addresses: yup.array().of(addressSchema),
            phones: yup.array().of(phoneSchema),
        })
    }, [addressSchema, phoneSchema])

    const handleFormSubmit = useCallback<SubmitHandler<yup.Asserts<typeof formContactSchema>>>(
        (data) => {
            if (!lodashIsEmpty(contactToUpdate)) {
                const contact = {
                    ...data,
                    id: contactToUpdate.id,
                } as Contact
                updateContact(contact)
            } else {
                const contact = data as Omit<Contact, 'id'>
                storeContact(contact)
            }
            onClose()
        },
        [storeContact, onClose, contactToUpdate, updateContact]
    )

    const {
        handleSubmit,
        formState: { errors },
        register,
        control,
        setValue,
        clearErrors,
        getValues,
        reset,
        setFocus,
    } = useFormWithSchema(formContactSchema)

    useEffect(() => {
        async function getAllCities() {
            const cities = await import('@/utils/cities')
            setAllCities(cities.default)
        }
        if (open) {
            getAllCities()
            if (!lodashIsEmpty(contactToUpdate)) {
                reset({
                    name: contactToUpdate.name,
                    addresses: contactToUpdate.addresses,
                    phones: contactToUpdate.phones,
                })
            } else {
                reset({
                    addresses: [
                        {
                            zip: '',
                            state: '',
                            city: '',
                            street: '',
                            district: '',
                            complement: '',
                            number: 0,
                        },
                    ],
                    phones: [
                        {
                            number: '',
                            model: 'cell',
                        },
                    ],
                })
            }
        }
    }, [open, reset, contactToUpdate])

    useEffect(() => {
        if (open && !lodashIsEmpty(errors)) {
            showSwalError('Por favor, revise o formulário e corrija os erros')
        }
    }, [errors, open])

    const {
        fields: fieldsAddresses,
        append: appendAddresses,
        remove: removeAddresses,
    } = useFieldArray({
        control,
        name: 'addresses',
    })

    const {
        fields: fieldsPhones,
        append: appendPhones,
        remove: removePhones,
    } = useFieldArray({
        control,
        name: 'phones',
    })

    const changeStateAndCities = useCallback(
        (index: number, state: string, city: string) => {
            setValue(`addresses.${index}.state`, state)
            setValue(`addresses.${index}.city`, city)
        },
        [setValue]
    )

    const handleAddNewAddress = useCallback(() => {
        appendAddresses({
            zip: '',
            state: '',
            city: '',
            street: '',
            district: '',
            complement: '',
            number: 0,
        })
        setFocus(`addresses.${fieldsAddresses.length}.zip`)
    }, [appendAddresses, setFocus, fieldsAddresses])

    const handleAddNewPhone = useCallback(() => {
        appendPhones({
            number: '',
            model: 'cell',
        })
    }, [appendPhones])

    const handleBlurZip = useCallback(
        async (index: number, zip: string) => {
            if (zip.length == 9) {
                try {
                    const result: IViaCepResponse = await fetch(
                        `https://viacep.com.br/ws/${zip.replace('-', '')}/json/`
                    ).then((resp) => resp.json())
                    if (!result.erro) {
                        setValue(`addresses.${index}.street`, result.logradouro)
                        changeStateAndCities(index, result.uf, result.localidade)
                        setValue(`addresses.${index}.district`, result.bairro)
                        setValue(`addresses.${index}.complement`, result.complemento)
                        clearErrors(`addresses.${index}`)
                        return
                    }
                    throw new Error('CEP não encontrado')
                } catch (e) {
                    showSwalWarning('Não foi possível recuperar as informações do CEP informado')
                }
            }
        },
        [clearErrors, setValue, changeStateAndCities]
    )

    const getCitiesByState = useCallback(
        (state: string) => {
            if (!lodashIsEmpty(allCities)) {
                return allCities.filter((c) => c.estadoid === state)
            } else {
                return []
            }
        },
        [allCities]
    )

    const onChangeState = useCallback(
        (index: number, value: string) => {
            setValue(`addresses.${index}.city`, getCitiesByState(value)[0].value)
            clearErrors(`addresses.${index}.city`)
        },
        [clearErrors, setValue, getCitiesByState]
    )

    const drawerTitle = useMemo(() => {
        if (!lodashIsEmpty(contactToUpdate)) {
            return 'Edição de contato'
        }
        return 'Cadastro de contato'
    }, [contactToUpdate])

    const handleCloseDrawer = useCallback(() => {
        clearErrors()
        onClose()
    }, [clearErrors, onClose])

    return (
        <Drawer
            open={open}
            onClose={handleCloseDrawer}
            title={drawerTitle}
        >
            <Form onSubmit={handleSubmit(handleFormSubmit)}>
                <FormContent>
                    <div>
                        <InputGroup
                            error={errors.name?.message as string}
                            label='Nome'
                            name='name'
                            register={register}
                        />
                    </div>
                    <FormBlockContent>
                        <span>
                            <h3>Endereços</h3>
                            <button
                                type='button'
                                onClick={handleAddNewAddress}
                            >
                                <FaPlus />
                            </button>
                        </span>
                        {fieldsAddresses.map((address, index) => (
                            <div key={address.id}>
                                {fieldsAddresses.length > 1 && (
                                    <span>
                                        <button
                                            onClick={() => removeAddresses(index)}
                                            type='button'
                                        >
                                            <FaTrashAlt />
                                        </button>
                                    </span>
                                )}
                                <AddressFieldsContent>
                                    <div>
                                        <InputMaskGroup
                                            control={control}
                                            error={errors.addresses?.[index]?.zip?.message as string}
                                            label='CEP'
                                            mask='99999-999'
                                            name={`addresses.${index}.zip`}
                                            onCustomBlur={(value: string) => handleBlurZip(index, value)}
                                        />
                                    </div>
                                    <FieldsGridContent>
                                        <div>
                                            <ControlledReactSelect
                                                control={control}
                                                error={errors.addresses?.[index]?.state?.message as string}
                                                label='Estado'
                                                name={`addresses.${index}.state`}
                                                onCustomChange={(value: string) => onChangeState(index, value)}
                                                options={states}
                                                placeholder='Selecione um Estado'
                                            />
                                        </div>
                                        <div>
                                            <ControlledReactSelect
                                                control={control}
                                                error={errors.addresses?.[index]?.city?.message as string}
                                                label='Cidade'
                                                name={`addresses.${index}.city`}
                                                options={getCitiesByState(getValues(`addresses.${index}.state`))}
                                                placeholder='Selecione uma cidade'
                                                placeholderWhenEmptyOptions='Selecione um Estado primeiro'
                                            />
                                        </div>
                                        <div>
                                            <InputGroup
                                                error={errors.addresses?.[index]?.district?.message as string}
                                                label='Bairro'
                                                name={`addresses.${index}.district`}
                                                register={register}
                                            />
                                        </div>
                                        <div>
                                            <InputGroup
                                                error={errors.addresses?.[index]?.street?.message as string}
                                                label='Logradouro'
                                                name={`addresses.${index}.street`}
                                                register={register}
                                            />
                                        </div>
                                        <div>
                                            <InputGroup
                                                error={errors.addresses?.[index]?.number?.message as string}
                                                label='Número'
                                                name={`addresses.${index}.number`}
                                                register={register}
                                                type='number'
                                            />
                                        </div>
                                        <div>
                                            <InputGroup
                                                error={errors.addresses?.[index]?.complement?.message as string}
                                                label='Complemento'
                                                name={`addresses.${index}.complement`}
                                                register={register}
                                            />
                                        </div>
                                    </FieldsGridContent>
                                </AddressFieldsContent>
                            </div>
                        ))}
                    </FormBlockContent>
                    <FormBlockContent>
                        <span>
                            <h3>Telefones</h3>
                            <button
                                type='button'
                                onClick={handleAddNewPhone}
                            >
                                <FaPlus />
                            </button>
                        </span>
                        {fieldsPhones.map((phone, index) => (
                            <div key={phone.id}>
                                {fieldsPhones.length > 1 && (
                                    <span>
                                        <button
                                            onClick={() => removePhones(index)}
                                            type='button'
                                        >
                                            <FaTrashAlt />
                                        </button>
                                    </span>
                                )}
                                <FieldsGridContentFlexGrow>
                                    <div>
                                        <ControlledReactSelect
                                            control={control}
                                            error={errors.phones?.[index]?.model?.message as string}
                                            label='Tipo'
                                            name={`phones.${index}.model`}
                                            options={[
                                                { value: 'cell', label: 'Celular' },
                                                { value: 'home', label: 'Fixo' },
                                            ]}
                                        />
                                    </div>
                                    <div>
                                        <InputGroup
                                            error={errors.phones?.[index]?.number?.message as string}
                                            label='Número'
                                            name={`phones.${index}.number`}
                                            register={register}
                                        />
                                    </div>
                                </FieldsGridContentFlexGrow>
                            </div>
                        ))}
                    </FormBlockContent>
                </FormContent>
                <ButtonContent>
                    <button type='submit'>
                        <FaSave /> Salvar
                    </button>
                </ButtonContent>
            </Form>
        </Drawer>
    )
}
