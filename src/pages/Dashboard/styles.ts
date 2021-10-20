import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;

  height: 100%;

  margin-top: 30px;
  padding: 0 20px;

  > h1 {
    color: #f4ede8;
    font-size: 28px;
  }

  > p {
    color: #a8b7bdcc;
    font-size: 12px;
    margin-top: 3px;
  }

  > form {
    display: flex;
    flex-direction: column;

    margin-top: 50px;
  }

  div + div {
    margin-top: 25px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  > span {
    color: #6842fe;
    font-size: 14px;

    margin-bottom: 08px;
  }
`;
