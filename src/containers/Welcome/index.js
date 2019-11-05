import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';

import WelcomeSlide from '../../components/blocks/WelcomeSlide';
import Container from '../../components/elements/Container';
import Button from '../../components/elements/Button';

import slides from '../../helpers/getWelcomeCarouselItems';

const Welcome = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  return (
    <Container
      flex
      style={{
        height: '100vh',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <div style={{ width: '100%' }}>
        <ItemsCarousel
          infiniteLoop
          gutter={12}
          activePosition="center"
          chevronWidth={60}
          disableSwipe={false}
          alwaysShowChevrons={false}
          numberOfCards={1}
          slidesToScroll={1}
          outsideChevron={false}
          showSlither={false}
          firstAndLastGutter={false}
          activeItemIndex={activeItemIndex}
          requestToChangeActive={value => setActiveItemIndex(value)}
        >
          {slides.map(slide => (
            <WelcomeSlide
              key={slide.id}
              image={slide.thumbnail}
              text={slide.title}
            />
          ))}
        </ItemsCarousel>
      </div>
      <Button style={{ marginBottom: 60, marginTop: 60 }} to="/activities">
        Start
      </Button>
    </Container>
  );
};

export default Welcome;
