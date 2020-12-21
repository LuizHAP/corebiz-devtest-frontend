import { useRef } from "react";
import Input from "@/components/atoms/Input/Input";
import { FormHandles, SubmitHandler } from "@unform/core";
import api from "@/services/api";
import { Form } from "@unform/web";
import styles from "./NewsLetterSection.module.css";
import * as Yup from "yup";
import { toast } from "react-toastify";

interface FormData {
  name: string;
  email: string;
}

const NewsLetterSection: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit: SubmitHandler<FormData> = async (
    data: FormData,
    { reset }
  ) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required("O nome é obrigatório"),
        email: Yup.string()
          .email("Digite um email válido")
          .required("O e-mail é obrigatório"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      api
        .post("newsletter", data)
        .then(() => {
          toast.success("Cadastro realizado com sucesso");
        })
        .catch(() => {
          toast.error("Erro no cadastro");
        });

      reset();
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error?.path] = error.message;
        });

        formRef.current?.setErrors(validationErrors);
      }
    }
  };
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h1>Participe de nossas news com promoções e novidades!</h1>
        <Form
          ref={formRef}
          className={styles.newsletterForm}
          onSubmit={handleSubmit}
        >
          <Input name="name" type="text" placeholder="Digite o seu nome" />
          <Input name="email" type="email" placeholder="Digite o seu email" />
          <button type="submit" className={styles.button}>
            Eu quero!
          </button>
        </Form>
      </div>
    </div>
  );
};

export default NewsLetterSection;
