import React, { useEffect, useCallback } from 'react';
import { format, parseISO, addHours } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import { useAppointments } from '../../hooks/appointments';

import {
  Container,
  Content,
  AppointmentsList,
  ScheduleNameTypeColumn,
  ScheduleValueColumn,
} from './styles';

const Appointments: React.FC = () => {
  const { fetchAppointments, appointments } = useAppointments();

  const formatTime = useCallback((date: string, time: string) => {
    const dateNow = format(Date.parse(date), 'yyyy-MM-dd');
    const formattedDate = new Date(`${dateNow} ${time}`);
    return format(addHours(formattedDate, 3), 'HH:mm');
  }, []);

  const formatAppointmentDate = useCallback((date: string) => {
    const parsedDate = parseISO(date);
    return format(parsedDate, `dd 'de' MMMM`, { locale: pt });
  }, []);

  useEffect(() => {
    fetchAppointments();
  }, [fetchAppointments]);
  return (
    <Container>
      <Header />
      <Content>
        <h1>Lista de apontamentos</h1>

        {!appointments.length ? (
          <p>nenhum apontamento encontrado</p>
        ) : (
          <AppointmentsList>
            {appointments?.map(appointment => (
              <React.Fragment key={appointment.id}>
                <h4>{formatAppointmentDate(appointment?.created_at)}</h4>
                <li>
                  <ScheduleNameTypeColumn>
                    <span>Horário de início</span>
                    <span>Horário de almoço</span>
                    <span>Horário de saída</span>
                  </ScheduleNameTypeColumn>
                  <ScheduleValueColumn>
                    <span>
                      {formatTime(
                        appointment.created_at,
                        appointment.entry_time,
                      )}
                    </span>
                    <span>
                      {formatTime(
                        appointment.created_at,
                        appointment.lunch_time,
                      )}
                    </span>
                    <span>
                      {formatTime(
                        appointment.created_at,
                        appointment.exit_time,
                      )}
                    </span>
                  </ScheduleValueColumn>
                </li>
              </React.Fragment>
            ))}
          </AppointmentsList>
        )}

        <Link to="/dashboard">Cadastrar novo apontamento</Link>
      </Content>
    </Container>
  );
};

export default Appointments;
