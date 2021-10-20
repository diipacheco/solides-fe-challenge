import React from 'react';

import { AuthProvider } from './auth';
import { AppointmentsProvider } from './appointments';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <AppointmentsProvider>{children}</AppointmentsProvider>
  </AuthProvider>
);

export default AppProvider;
