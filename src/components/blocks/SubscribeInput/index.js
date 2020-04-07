import React, { useState } from 'react';
import validationHelper from '../../../helpers/validationHelper';

import Button from '../../elements/Button';
import { SubscribeInputField, Wrapper, ErrorMessage } from './styled';

const SubscribeInput = ({ onSubmit }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const resetError = () => {
    setError(false);
    setErrorMsg('');
  };
  const submit = () => {
    const email = validationHelper('email', value, true);
    if (email.valid) {
      onSubmit(value);
    } else {
      setError(true);
      setErrorMsg(email.message);
    }
  };

  return (
    <Wrapper>
      <SubscribeInputField
        type="email"
        placeholder="E-mail"
        value={value}
        onChange={e => {
          setValue(e.target.value);
        }}
        onFocus={resetError}
      />
      <Button
        as="button"
        role="button"
        to="#"
        type="primary"
        width="120px"
        size="tiny"
        onClick={submit}
      >
        Prijavi se
      </Button>
      {error && (
        <ErrorMessage as="span" size="tiny" color="primary">
          {errorMsg}
        </ErrorMessage>
      )}
    </Wrapper>
  );
};

export default SubscribeInput;
