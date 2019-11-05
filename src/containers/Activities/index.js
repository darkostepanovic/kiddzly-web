import React, { Component } from 'react';

import Header from '../../components/blocks/Header';
import TextInput from '../../components/blocks/TextInput';
import SingleActivity from '../../components/blocks/SingleActivity';
import Container from '../../components/elements/Container';

import validationHelper from '../../helpers/validationHelper';
import activities from '../../helpers/activities';
import ItemsCarousel from 'react-items-carousel';

class Activities extends Component {
  state = {
    value: '',
    activeField: false,
    error: false,
    errorMessage: '',
    activeItemIndex: 0,
  };

  handleInputFocus = () => {
    this.setState({ activeField: true, error: false, errorMessage: '' });
  };

  handleInputBlur = () => {
    const { value } = this.state;
    const validation = validationHelper('email', value, false);
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

  setActiveItemIndex = index => {
    this.setState({ activeItemIndex: index });
  };

  render() {
    const {
      value,
      activeField,
      error,
      errorMessage,
      activeItemIndex,
    } = this.state;
    return (
      <Container
        flex
        style={{
          minHeight: '100vh',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          flexDirection: 'column',
        }}
      >
        <Header backButton title="Današnje aktivnosti" />
        <div style={{ width: '100%' }}>
          <ItemsCarousel
            gutter={12}
            activePosition="center"
            chevronWidth={60}
            disableSwipe={false}
            alwaysShowChevrons={false}
            numberOfCards={1}
            slidesToScroll={1}
            showSlither
            firstAndLastGutter={false}
            activeItemIndex={activeItemIndex}
            requestToChangeActive={val => this.setActiveItemIndex(val)}
          >
            {activities.map(activity => (
              <SingleActivity
                key={activity.id}
                id={activity.id}
                title={activity.title}
                image={activity.image}
                description={activity.description}
                goals={activity.goals}
                missions={activity.missions}
              />
            ))}
          </ItemsCarousel>
        </div>

        <div style={{ marginBottom: 30, width: '100%' }}>
          <h3>Ukoliko želite još aktivnosti, unesite Vaš email</h3>
          <TextInput
            labelText="Email"
            type="email"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            onBlur={this.handleInputBlur}
            error={error}
            errorMessage={errorMessage}
            fieldActive={activeField}
            value={value}
            style={{ width: '100%' }}
          />
        </div>
      </Container>
    );
  }
}

export default Activities;
