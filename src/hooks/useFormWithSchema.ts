import * as Yup from 'yup'

import { UseFormProps, UseFormReturn, useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'

/**
 * This function is type inference ready and will auto-validate the useForm with the proper values.
 *
 * @param schema - A valid you schema
 * @param useFormProps
 * @returns
 */
export function useFormWithSchema<T extends Yup.AnyObjectSchema>(
    schema: T,
    useFormProps?: UseFormProps<Yup.Asserts<T>>
): UseFormReturn<Yup.Asserts<T>> {
    return useForm({ ...useFormProps, resolver: yupResolver(schema) })
}
