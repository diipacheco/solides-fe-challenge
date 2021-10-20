import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
  height: 49px;
  padding: 0 16px;

  border-bottom: 1px solid rgb(104, 66, 254, 0.5);
  > button {
    color: #6842fe;
    font-size: 14px;
    cursor: pointer;
  }
`;
