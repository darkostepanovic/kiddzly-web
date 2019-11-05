import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${p => p.theme.colors.primary};
  padding: 30px;
  margin-bottom: 40px;
  border-radius: 20px;
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  height: 390px;
`;
