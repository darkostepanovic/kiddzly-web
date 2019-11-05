import React from 'react';
import { useParams } from 'react-router-dom';

import Container from '../../components/elements/Container';
import Button from '../../components/elements/Button';
import NotFound from '../404';

import activities from '../../helpers/activities';

const ActivityDetail = () => {
  const { id } = useParams();
  const activity = activities.find(item => item.id.toString() === id);

  return activity ? (
    <Container
      style={{
        backgroundColor: '#313d70',
        minHeight: '100vh',
        paddingTop: 50,
        paddingBottom: 50,
        textAlign: 'left',
        color: '#fff',
      }}
    >
      <img src={activity.image} alt="cover" width="414" height="257" />
      <h3>{activity.title}</h3>
      <h4>Ciljevi</h4>
      <ul style={{ textAlign: 'left' }}>
        {activity.goals.map(goal => (
          <li>{goal}</li>
        ))}
      </ul>
      <h4>Zadaci</h4>
      <ul style={{ textAlign: 'left' }}>
        {activity.missions.map(mission => (
          <li>{mission}</li>
        ))}
      </ul>
      <h4>Opis aktivnosti</h4>
      <p style={{ textAlign: 'left' }}>{activity.description}</p>
      <Button inverted to="/activities" style={{ marginTop: 60 }}>
        DONE
      </Button>
    </Container>
  ) : (
    <NotFound />
  );
};

export default ActivityDetail;
