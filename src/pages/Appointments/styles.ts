import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
  align-items: center;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  margin-top: 30px;
  padding: 0 20px;

  @media screen and (min-width: 1024px) {
    align-items: center;
    width: 60%;
    max-width: 620px;
  }

  @media screen and (min-width: 768px) {
    align-items: center;
    width: 60%;
  }

  > h1 {
    color: #f4ede8;
    font-size: 28px;
  }

  > a {
    display: flex;
    align-self: center;
    color: #ffff;
    margin-top: 45px;
    transition: 1s ease;
    :hover {
      color: #a8b7bdcc;
    }
  }

  > p {
    display: flex;
    align-self: center;
    margin-top: 40px;
    color: #6842fe;
  }
`;

export const AppointmentsList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-top: 60px;

  > h4 {
    color: #f4ede8;
    font-size: 20px;
    margin-bottom: 8px;
    margin-left: 4px;
  }

  > li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 10px;
    border-radius: 10px;

    width: 100%;

    border-bottom: 1px solid rgb(254, 254, 254, 0.8);

    width: 100%;
    background: rgb(104, 66, 254, 0.1);
  }
`;

export const ScheduleNameTypeColumn = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    color: #a8b7bdcc;
    font-size: 14px;
  }

  span + span {
    margin-top: 5px;
  }
`;

export const ScheduleValueColumn = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    color: #f4ede8;
    font-size: 18px;
  }

  span + span {
    margin-top: 5px;
  }
`;
