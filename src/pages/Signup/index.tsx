import React, { useRef, useCallback } from 'react';
import { FiMail, FiLock, FiArrowLeft, FiUser } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import getValidationErros from '../../utils/getValidationErros';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content } from './styles';
import api from '../../services/api';

interface SignupFormData {
  name: string;
  email: string;
  password: string;
}

const Singup: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignupFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);

        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErros(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [history],
  );

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input icon={FiUser} name="name" placeholder="Nome" />
          <Input icon={FiMail} name="email" placeholder="E-mail" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Cadastrar</Button>

          <Link to="/">
            <FiArrowLeft />
            Voltar para Logon
          </Link>
        </Form>
      </Content>
    </Container>
  );
};

export default Singup;
