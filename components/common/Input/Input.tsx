import { InputHTMLAttributes } from "react";

import styles from "./Input.module.css";

import { AiOutlineSearch } from "react-icons/ai";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
  search?: boolean;
}

const Input: React.FC<InputProps> = ({ label, name, search, ...rest }) => {
  return (
    <div className={styles.inputBlock}>
      <input type="text" id={name} {...rest} />
      {search && <AiOutlineSearch size={18} />}
    </div>
  );
};

export default Input;
