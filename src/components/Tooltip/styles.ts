import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  span {
    background: #6842fe;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    width: 160px;
    left: 50%;
    transform: translateX(-50%);
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.4s;
    position: absolute;
    bottom: calc(100% + 12px);
    color: #312e38;
    ::before {
      border-style: solid;
      border-color: #6842fe transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      content: '';
      left: 50%;
      transform: translateX(-50%);
    }
  }
  &:hover {
    span {
      visibility: visible;
      opacity: 1;
    }
  }
`;
