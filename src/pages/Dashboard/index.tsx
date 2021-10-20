import React, { useMemo, useRef, useCallback } from 'react';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

import Header from '../../components/Header';
import Button from '../../components/Button';

import { Container, Content, InputContainer } from './styles';
import Input from '../../components/Input';

interface ISubmitHoursFormData {
  entry_time: string;
  lunch_time: string;
  exit_time: string;
}

const Dashboard: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { token } = useAuth();

  const formattedDate = useMemo(() => {
    const date = Date.now();

    return format(date, `dd 'de' MMMM`, { locale: pt });
  }, []);

  const handleSubmit = useCallback(
    async (data: ISubmitHoursFormData) => {
      try {
        const { entry_time, lunch_time, exit_time } = data;

        const dateNow = format(Date.now(), 'yyyy-MM-dd');

        const parsedEntryName = new Date(`${dateNow} ${entry_time}`);
        const parsedLunchName = new Date(`${dateNow} ${lunch_time}`);
        const exitLunchTime = new Date(`${dateNow} ${exit_time}`);

        await api.post(
          '/appointments',
          {
            date: format(new Date(Date.now()), `yyyy-MM-dd HH:mm:ss`),
            entry_time: format(parsedEntryName, `yyyy-MM-dd HH:mm:ss`),
            lunch_time: format(parsedLunchName, `yyyy-MM-dd HH:mm:ss`),
            exit_time: format(exitLunchTime, `yyyy-MM-dd HH:mm:ss`),
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
      } catch (err) {
        console.log(err);
      }
    },
    [token],
  );

  return (
    <Container>
      <Header />
      <Content>
        <h1>{formattedDate}</h1>
        <p>
          Aponte suas horas de trabalho <br />
          no dia de hoje
        </p>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <InputContainer>
            <span>Horário de início</span>
            <Input name="entry_time" type="time" />
          </InputContainer>

          <InputContainer>
            <span>Horário de almoço</span>
            <Input name="lunch_time" type="time" />
          </InputContainer>

          <InputContainer>
            <span>Horário de saída</span>
            <Input name="exit_time" type="time" />
          </InputContainer>

          <Button type="submit">Submeter horas</Button>

          <Link to="/appointments">Ver histórico de apontamentos</Link>
        </Form>
      </Content>
    </Container>
  );
};

export default Dashboard;
