import styled from 'styled-components';

export const SectionWrapper = styled.div`
  overflow-y: auto;
  scrollbar-width: none;
  margin-top: 17px;
  margin-bottom: 150px;

  @media all and (min-width: 1120px) {
    overflow-y: hidden;
    width: 1060px;
    margin: 40px auto 150px auto;
  }
  @media all and (min-width: 1360px) {
    width: 1300px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    display: none;
  }
`;

export const CardList = styled.div`
  display: grid;
  grid-template-columns: ${p => (p.scroll ? '1fr' : '265px 265px 265px')};
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin: 0 30px;
  @media all and (min-width: 768px) {
    grid-template-columns: ${p => (p.scroll ? '1fr 1fr' : '430px 430px 430px')};
  }
  @media all and (min-width: 1120px) {
    grid-template-columns: 340px 340px 340px;
    margin: 0;
  }
  @media all and (min-width: 1360px) {
    grid-template-columns: 420px 420px 420px;
  }
`;
