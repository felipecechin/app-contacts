import * as yup from 'yup'

import { FaPlus, FaSave, FaTrashAlt } from 'react-icons/fa'
import { SubmitHandler, useFieldArray } from 'react-hook-form'
import { useCallback, useEffect, useMemo } from 'react'

import { Contact } from '@/types/contact'
import ControlledReactSelect from '@/components/shared/form/ControlledReactSelect'
import Drawer from '@/components/shared/Drawer'
import InputGroup from '@/components/shared/form/InputGroup'
import InputMaskGroup from '@/components/shared/form/InputMaskGroup'
import cities from '@/utils/cities'
import getOnlyNumbers from '@/utils/getOnlyNumbers'
import lodashIsEmpty from 'lodash/isEmpty'
import { reactSwal } from '@/utils/reactSwal'
import states from '@/utils/states'
import { sweetAlertOptions } from '@/utils/sweetAlertOptions'
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

export default function DrawerStoreUpdateContact({ open, onClose, contactToUpdate }: IDrawerStoreContactProps) {
    const { storeContact, updateContact } = useContacts()

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

    const storeContactSchema = useMemo(() => {
        return yup.object({
            name: yup.string().required(yupMessages.required),
            addresses: yup.array().of(addressSchema),
            phones: yup.array().of(phoneSchema),
        })
    }, [addressSchema, phoneSchema])

    const handleFormSubmit = useCallback<SubmitHandler<yup.Asserts<typeof storeContactSchema>>>(
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
    } = useFormWithSchema(storeContactSchema)

    useEffect(() => {
        if (open) {
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
            reactSwal.fire({
                icon: 'error',
                title: 'Ops!',
                text: 'Por favor, revise o formulário e corrija os erros',
                confirmButtonColor: sweetAlertOptions.confirmButtonColor,
            })
        }
    }, [errors, open])

    const {
        fields: addressesFields,
        append: addressesAppend,
        remove: addressesRemove,
    } = useFieldArray({
        control,
        name: 'addresses',
    })

    const {
        fields: phonesFields,
        append: phonesAppend,
        remove: phonesRemove,
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
        addressesAppend({
            zip: '',
            state: '',
            city: '',
            street: '',
            district: '',
            complement: '',
            number: 0,
        })
    }, [addressesAppend])

    const handleAddNewPhone = useCallback(() => {
        phonesAppend({
            number: '',
            model: 'cell',
        })
    }, [phonesAppend])

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
                    reactSwal.fire({
                        title: 'Oops!',
                        icon: 'warning',
                        text: 'Não foi possível recuperar as informações do CEP informado',
                        confirmButtonColor: sweetAlertOptions.confirmButtonColor,
                    })
                }
            }
        },
        [clearErrors, setValue, changeStateAndCities]
    )

    const getCitiesByState = useCallback((state: string) => {
        return cities.filter((c) => c.estadoid === state)
    }, [])

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

    return (
        <Drawer
            open={open}
            onClose={onClose}
            title={drawerTitle}
        >
            <form
                className='flex h-full flex-col divide-y divide-gray-200 bg-white border-t-2'
                onSubmit={handleSubmit(handleFormSubmit)}
            >
                <div className='flex-1 flex flex-col overflow-y-auto px-4 space-y-6 py-4'>
                    <div>
                        <InputGroup
                            error={errors.name?.message as string}
                            label='Nome'
                            name='name'
                            register={register}
                        />
                    </div>
                    <div className='flex flex-col space-y-3'>
                        <span className='flex items-center'>
                            <h3 className='text-xl font-semibold'>Endereços</h3>
                            <button
                                type='button'
                                onClick={handleAddNewAddress}
                                className='ml-2 py-2 px-2 text-sm text-gray-900 bg-white rounded border border-gray-200 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-2 focus:ring-green-700 focus:text-green-700'
                            >
                                <FaPlus />
                            </button>
                        </span>
                        {addressesFields.map((address, index) => (
                            <div
                                key={address.id}
                                className='flex bg-gray-100 rounded p-3 space-x-1'
                            >
                                {addressesFields.length > 1 && (
                                    <span className='mr-2'>
                                        <button
                                            onClick={() => addressesRemove(index)}
                                            type='button'
                                            className='py-2 px-2 text-sm text-gray-900 bg-white rounded border border-gray-200 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-2 focus:ring-green-700 focus:text-green-700'
                                        >
                                            <FaTrashAlt />
                                        </button>
                                    </span>
                                )}
                                <div className='flex-grow flex flex-col space-y-2'>
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
                                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
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
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-col space-y-3'>
                        <span className='flex items-center'>
                            <h3 className='text-xl font-semibold'>Telefones</h3>
                            <button
                                type='button'
                                onClick={handleAddNewPhone}
                                className='ml-2 py-2 px-2 text-sm text-gray-900 bg-white rounded border border-gray-200 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-2 focus:ring-green-700 focus:text-green-700'
                            >
                                <FaPlus />
                            </button>
                        </span>
                        {phonesFields.map((phone, index) => (
                            <div
                                key={phone.id}
                                className='flex bg-gray-100 rounded p-3 space-x-1'
                            >
                                {phonesFields.length > 1 && (
                                    <span className='mr-2'>
                                        <button
                                            onClick={() => phonesRemove(index)}
                                            type='button'
                                            className='py-2 px-2 text-sm text-gray-900 bg-white rounded border border-gray-200 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-2 focus:ring-green-700 focus:text-green-700'
                                        >
                                            <FaTrashAlt />
                                        </button>
                                    </span>
                                )}
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
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
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex flex-shrink-0 justify-end px-4 py-4 items-center'>
                    <button
                        className='w-full sm:w-auto flex items-center justify-center py-1 sm:py-2 px-2 sm:px-4 text-center text-lg text-white font-semibold bg-green-800 hover:bg-green-900 border-3 border-green-900 shadow rounded transition duration-200'
                        type='submit'
                    >
                        <FaSave className='w-4 h-4 mr-2' /> Salvar
                    </button>
                </div>
            </form>
        </Drawer>
    )
}
