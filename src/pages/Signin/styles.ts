import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: stretch;

  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  > form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 80px 0;
    width: 240px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      color: #6842fe;
    }

    a {
      color: #f4ede8;
      display: flex;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;
      justify-content: center;
      align-items: center;
      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
      svg {
        margin-right: 05px;
      }
    }
  }
`;

export const Button = styled.button`
  background: #6842fe;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  height: 56px;
  color: #f4ede8;
  font-weight: bold;
  margin-top: 16px;
  transition: background-color 0.2s;
  font-size: 16px;
  &:hover {
    background: ${shade(0.2, '#6842fe')};
  }
`;
