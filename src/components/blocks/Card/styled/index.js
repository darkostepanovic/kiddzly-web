import styled from 'styled-components';
import { rgba } from 'polished';

export const CardWrapper = styled.div`
  background: ${p => rgba(p.theme.greyscale.regular, 0.2)};
  img {
    display: block;
    margin-bottom: 13px;
  }
`;

export const ContentWrapper = styled.div`
  padding: 25px;
  h3 {
    margin-bottom: 9px;
  }
  p {
    margin-bottom: 22px;
  }
`;
