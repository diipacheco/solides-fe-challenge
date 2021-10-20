import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppProvider from './hooks';

import Routes from './routes';
import GlobalStyles from './styles/Global';

const App: React.FC = () => (
  <Router>
    <AppProvider>
      <Routes />
      <GlobalStyles />
    </AppProvider>
  </Router>
);

export default App;
