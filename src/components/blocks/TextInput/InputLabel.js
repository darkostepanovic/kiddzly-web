import styled from 'styled-components';

const InputLabel = styled.label`
  color: ${p =>
    p.error ? p.theme.colors.errorColor : p.theme.colors.textColor};
  font-size: ${p => (p.fieldActive ? '16px' : '18px')};
  font-family: 'ProximaSemiBold', sans-serif;
  left: 0;
  line-height: 12px;
  position: absolute;
  top: ${p => (p.fieldActive ? 0 : '50%')};
  transition: all 150ms ease-in;
  text-transform: uppercase;
  transform: ${p =>
    p.fieldActive ? 'translateY(-100%)' : 'translateY(-50%);'};
  z-index: -1;
`;

export default InputLabel;
