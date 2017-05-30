/**
 * Like an Input component, but with extra stuff surrounding it for displaying in a form
 *
 * @package: REA app
 * @author:  pospi <pospi@spadgos.com>
 * @since:   2017-04-05
 */

import * as React from 'react'

import Input from '../../atoms/Input'

export interface FieldProps {
  // bespoke
  placeholder?: string,
  // added by redux-form
  input: {
    checked?: boolean,
    name: string,
    onBlur: (any) => void,
    onChange: (any) => void,
    onDragStart: (any) => void,
    onDrop: (any) => void,
    onFocus: (any) => void,
    value: any,
  },
  meta: {
    active: boolean,
    autofilled: boolean,
    asyncValidating: boolean,
    dirty: boolean,
    dispatch: Function,
    error?: string,
    form: string,
    invalid: boolean,
    pristine: boolean,
    submitting: boolean,
    submitFailed: boolean,
    touched: boolean,
    valid: boolean,
    visited: boolean,
    warning?: string,
  },
};

const FormInput = ({ input, meta, ...props }: FieldProps) => (
  <Input {...props} {...input} />
)

export default FormInput
