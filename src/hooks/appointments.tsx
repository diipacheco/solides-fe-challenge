import React, { createContext, useCallback, useContext, useState } from 'react';

import { useAuth } from './auth';
import api from '../services/api';

interface Appointment {
  id: string;
  user_id: string;
  date: string;
  entry_time: string;
  lunch_time: string;
  exit_time: string;
  created_at: string;
}

interface AppointmentsContextData {
  appointments: Appointment[];
  fetchAppointments(): Promise<void>;
}

const AppointmentsContext = createContext<AppointmentsContextData>(
  {} as AppointmentsContextData,
);

export const AppointmentsProvider: React.FC = ({ children }) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const { token } = useAuth();

  const fetchAppointments = useCallback(async () => {
    const response = await api.get('/appointments', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setAppointments(response.data as Appointment[]);
  }, [token]);

  return (
    <AppointmentsContext.Provider value={{ appointments, fetchAppointments }}>
      {children}
    </AppointmentsContext.Provider>
  );
};

export function useAppointments(): AppointmentsContextData {
  const context = useContext(AppointmentsContext);

  if (!context) {
    throw new Error(
      'useAppointments must be used within an AppointmentsProvider',
    );
  }

  return context;
}
