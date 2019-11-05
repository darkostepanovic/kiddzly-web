import styled from 'styled-components';

const getBorderColor = props => {
  if (props.disabled) {
    return props.theme.colors.gray.disabled;
  }
  if (props.error) {
    return props.theme.colors.errorColor;
  }
  return props.theme.colors.textColor;
};

const InputField = styled.input`
  background-color: transparent;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: ${p => (p.error ? `1px solid` : `1px solid`)};
  border-bottom-color: ${p => getBorderColor(p)};
  height: 30px;
  outline: none;
  width: ${p => (p.fullWidth ? '100%' : 'inherit')};
  font-size: 18px;
  font-family: 'ProximaSemiBold', sans-serif;
`;

export default InputField;
