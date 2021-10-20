import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/auth';
import getValidationErros from '../../utils/getValidationErros';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content } from './styles';

interface ISigninFormData {
  email: string;
  password: string;
}

const Signin: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: ISigninFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });

        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErros(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [signIn, history],
  );

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Login</h1>
          <Input icon={FiMail} name="email" type="email" placeholder="E-mail" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Login</Button>

          <Link to="/signup">
            <FiLogIn />
            Criar conta
          </Link>
        </Form>
      </Content>
    </Container>
  );
};

export default Signin;
