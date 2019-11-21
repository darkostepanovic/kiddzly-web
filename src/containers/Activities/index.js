import React, { Component } from 'react';
import ItemsCarousel from 'react-items-carousel';
import * as firebase from 'firebase';
import { isMobile } from 'react-device-detect';

import Header from '../../components/blocks/Header';
import TextInput from '../../components/blocks/TextInput';
import Button from '../../components/elements/Button';
import SingleActivity from '../../components/blocks/SingleActivity';
import Container from '../../components/elements/Container';

import validationHelper from '../../helpers/validationHelper';
import activities from '../../helpers/activities';
import config from '../../config';

class Activities extends Component {
  state = {
    value: '',
    activeField: false,
    error: false,
    errorMessage: '',
    activeItemIndex: 0,
    visitorSubscribed: false,
  };

  componentDidMount() {
    firebase.initializeApp(config.firebaseConfig);
    firebase.analytics();
  }

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

  handleSubmit = () => {
    this.handleInputBlur();
    const { error, value } = this.state;
    if (!error && value !== '') {
      firebase
        .database()
        .ref('subscribers')
        .push(value, () => {
          this.setState({ visitorSubscribed: true });
        });
    }
  };

  render() {
    const {
      value,
      activeField,
      error,
      errorMessage,
      activeItemIndex,
      visitorSubscribed,
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
            leftChevron={!isMobile ? <button>{'<'}</button> : ''}
            rightChevron={!isMobile ? <button>{'>'}</button> : ''}
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
          <h3>
            {visitorSubscribed
              ? 'Uspešno ste prijavili Vaš email'
              : 'Ukoliko želite još aktivnosti, unesite Vaš email'}
          </h3>
          {!visitorSubscribed && (
            <>
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
              <Button
                style={{ marginTop: 30 }}
                to=""
                onClick={e => {
                  e.preventDefault();
                  this.handleSubmit();
                }}
              >
                Submit
              </Button>
            </>
          )}
        </div>
      </Container>
    );
  }
}

export default Activities;
