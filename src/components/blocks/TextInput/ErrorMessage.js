import styled from 'styled-components';

import Span from '../../elements/Span';

const ErrorMessage = styled(Span)`
  font-size: 12px;
  color: ${p => p.theme.colors.errorColor};
  line-height: 1.2;
  display: block;
  margin-top: 4px;
  position: absolute;
`;

export default ErrorMessage;
