import styled from 'styled-components';
export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgrey;
  }
`;
export const Average = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
  width: 34px;
  height: 34px;
  border-radius: 50px;
  background-color: ${({ average, theme }) => {
    if (average < 3) {
      return theme.colors.error;
    } else if (average > 3 && average < 4) {
      return theme.colors.warning;
    } else if (average >= 4) {
      return theme.colors.success;
    }
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-family: 'Montserrat', sans-serif;
`;
export const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 28.5px 12px;
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
  p:first-of-type {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: bold;
  }
  p:last-of-type {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: regular;
  }
`;
