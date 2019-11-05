import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 30px;

  a {
    margin-top: 0;
    display: flex;
    align-items: center;
    span {
      margin-left: 25px;
      text-transform: uppercase;
      color: ${p => p.theme.colors.primary};
      font-family: 'ProximaBold', sans-serif;
    }
  }
`;

export const Title = styled.h1`
  margin: 30px 0;
  color: ${p => p.theme.colors.primary};
`;
