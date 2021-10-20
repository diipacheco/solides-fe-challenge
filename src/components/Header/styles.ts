import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 49px;
  padding: 0 16px;

  border-bottom: 1px solid rgb(104, 66, 254, 0.5);

  > h1 {
    color: #6842fe;
    font-size: 12px;
  }

  > button {
    color: #6842fe;
    font-size: 14px;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    > h1 {
      font-size: 20px;
    }

    > button {
      font-size: 18px;
    }
  }
`;
