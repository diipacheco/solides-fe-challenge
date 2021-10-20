import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
  @media screen and (min-width: 768px) {
    align-items: center;
  }
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
    text-align: center;
    width: 100%;

    margin-top: 50px;

    > a {
      color: #ffff;
      margin-top: 45px;
      transition: 1s ease;
      :hover {
        color: #a8b7bdcc;
      }
    }
  }

  div + div {
    margin-top: 25px;
  }

  @media screen and (min-width: 1024px) {
    align-items: center;
    max-width: 520px;

    > h1 {
      font-size: 36px;
    }

    > p {
      font-size: 16px;
      > br {
        display: none;
      }
    }
  }

  @media screen and (min-width: 768px) {
    align-items: center;
    width: 60%;
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
