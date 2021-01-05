import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import styles from './Input.module.css'

interface Props {
  name: string
  label?: string
}

type InputProps = JSX.IntrinsicElements['input'] & Props

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const { fieldName, defaultValue, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return (
    <div className={styles.inputBlock}>
      <input ref={inputRef} defaultValue={defaultValue} type="text" {...rest} />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  )
}

export default Input
