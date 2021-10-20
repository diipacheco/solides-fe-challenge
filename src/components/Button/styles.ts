import { shade } from 'polished';
import styled from 'styled-components';

export default styled.button`
  background: #6842fe;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  height: 56px;
  color: #f4ede8;
  font-weight: bold;
  font-size: 16px;
  margin-top: 16px;
  transition: background-color 0.2s;
  &:hover {
    background: ${shade(0.2, '#6842fe')};
  }
`;
