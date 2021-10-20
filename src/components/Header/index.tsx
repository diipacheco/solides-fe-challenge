import React from 'react';

import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

const Header: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <h1>{`${user.name}`}</h1>
      <button onClick={signOut} type="button">
        Sign Out
      </button>
    </Container>
  );
};

export default Header;
