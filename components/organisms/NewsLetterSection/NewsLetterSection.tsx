import Input from "@/components/atoms/Input/Input";
import { useState } from "react";
import styles from "./NewsLetterSection.module.css";

const NewsLetterSection = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h1>Participe de nossas news com promoções e novidades!</h1>
        <form className={styles.newsletterForm}>
          <Input
            name="name"
            label="name"
            value={name}
            placeholder="Digite o seu nome"
          />
          <Input
            name="email"
            label="email"
            value={email}
            placeholder="Digite o seu email"
          />
          <button className={styles.button}>Eu quero!</button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetterSection;
