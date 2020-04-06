import styled from 'styled-components';
import Image from '../Image';

export default styled(Image)`
  width: 165px;
  height: 40px;
  @media all and (min-width: 768px) {
    width: 375px;
    height: 85px;
  }
`;
