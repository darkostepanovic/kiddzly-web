import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import InputField from './InputField';
import InputLabel from './InputLabel';
import ErrorMessage from './ErrorMessage';

const FieldWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const TextInput = ({
  onChange,
  onFocus,
  onBlur,
  value,
  type,
  labelText,
  fullWidth,
  fieldActive,
  errorMessage,
  error,
}) => (
  <>
    <FieldWrapper>
      <InputLabel error={error} fieldActive={fieldActive}>
        {labelText}
      </InputLabel>
      <InputField
        fullWidth={fullWidth}
        error={error}
        type={type}
        onChange={onChange}
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </FieldWrapper>
  </>
);

TextInput.propTypes = {
  fullWidth: PropTypes.bool,
  fieldActive: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
};

TextInput.defaultProps = {
  fullWidth: false,
};

TextInput.FieldWrapper = FieldWrapper;
TextInput.InputLabel = InputLabel;
TextInput.InputField = InputField;
TextInput.ErrorMessage = ErrorMessage;

export default TextInput;
