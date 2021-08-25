import React from 'react'
import '../App.css'
import { ErrorMessage, useField } from 'formik'

export const TextField = ({ label, ...props }) => {

    const [field] = useField(props)

    return (
      <div>
        <label htmlFor={field.name}>{label}</label>
        <input {...field} {...props} autoComplete="off" />
        <ErrorMessage component='div' className='error' name={field.name} />
      </div>
    );
}
