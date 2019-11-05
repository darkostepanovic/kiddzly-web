import React, { Component } from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { boolean, withKnobs, text, radios } from '@storybook/addon-knobs';

import * as helpers from '../../../helpers';

import H3 from '../../elements/H3';
import TextInput from '.';

const Wrapper = styled.div`
  padding: 30px;
`

class Story extends Component {
  state = {
    value: '',
    activeField: false,
    error: false,
    errorMessage: '',
  };

  handleInputFocus = () => {
    this.setState({ activeField: true, error: false, errorMessage: '' });
  };

  handleInputBlur = () => {
    const { value } = this.state;
    const selected = radios(
      this.getInputType().typeLabel,
      this.getInputType().typeOptions,
      this.getInputType().typeDefaultValue,
    );
    const required = boolean('Required', true);
    const validation = helpers.validation(selected, value, required);
    if (validation.valid) {
      this.setState({
        activeField: value !== '',
        error: false,
        errorMessage: '',
      });
    } else {
      this.setState({
        activeField: value !== '',
        error: true,
        errorMessage: validation.message,
      });
    }
  };

  handleInputChange = e => {
    this.setState({ value: e.target.value });
  };

  getInputType = () => {
    const typeLabel = 'Input type';
    const typeOptions = {
      text: 'text',
      email: 'email',
      password: 'password',
    };
    const typeDefaultValue = 'text';
    return {
      typeLabel,
      typeOptions,
      typeDefaultValue,
    };
  };

  render() {
    const { value, activeField, error, errorMessage } = this.state;
    return (
      <Wrapper>
        <H3>Text input</H3>
        <TextInput
          labelText={text('Label text', 'First Name')}
          type={radios(
            this.getInputType().typeLabel,
            this.getInputType().typeOptions,
            this.getInputType().typeDefaultValue,
          )}
          onChange={this.handleInputChange}
          onFocus={this.handleInputFocus}
          onBlur={this.handleInputBlur}
          error={error}
          errorMessage={errorMessage}
          fieldActive={activeField}
          value={value}
          required={boolean('Required', true)}
        />
      </Wrapper>
    );
  }
}

const stories = storiesOf('Inputs', module);

stories.addDecorator(withKnobs);
stories.add('Text Inputs', () => <Story />);
