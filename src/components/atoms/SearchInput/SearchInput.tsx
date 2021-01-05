import React from 'react'
import styles from './SearchInput.module.css'

import { AiOutlineSearch } from 'react-icons/ai'

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name?: string
  label?: string
}

const SearchInput: React.FC<SearchInputProps> = ({ name, ...rest }) => {
  return (
    <div className={styles.inputBlock}>
      <input type="text" id={name} {...rest} />
      <AiOutlineSearch size={18} />
    </div>
  )
}

export default SearchInput
