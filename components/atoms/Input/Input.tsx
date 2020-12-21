import styles from "./Input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
}

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
  return (
    <div className={styles.inputBlock}>
      <input type="text" id={name} {...rest} />
    </div>
  );
};

export default Input;
