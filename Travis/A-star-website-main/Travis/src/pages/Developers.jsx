import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

/* Headshots */
import Rahul from '../assets/Rahul.png';
import Joshua from '../assets/Joshua.png';
import Felix from '../assets/Felix.jpg';
import Travis from '../assets/Travis.png';
import Akshat from '../assets/Akshat.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  font-family: 'Playfair Display', serif;
`;

const Title = styled.h2`
  margin-bottom: 40px;
  text-align: center;
  font-family: 'Playfair Display', serif;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  justify-items: center;
`;

const Card = styled(animated.div)`
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  min-width: 587px;
  max-width: 600px;
  font-family: 'Playfair Display', serif;

  &:nth-child(5) {
    grid-column: span 2;
    justify-content: center;
  }
`;

const Image = styled.img`
  width: 175px;
  height: 175px;
  object-fit: cover;
  border-radius: 0px;
  margin-right: 40px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  width: 100%; 
`;

const Name = styled.h3`
  margin: 0;
  font-family: 'Playfair Display', serif;
`;

const TitleText = styled.p`
  margin: 10px 0 0;
  font-family: 'Playfair Display', serif;
`;

const developers = [
  { name: 'Felix Z.', title: '', image: Felix },
  { name: 'Joshua F.', title: '', image: Joshua },
  { name: 'Rahul R.', title: '', image: Rahul },
  { name: 'Akshat J.', title: '', image: Akshat },
  { name: 'Travis H.', title: '', image: Travis },
];

const DeveloperCard = ({ name, title, image, index }) => {
  const delay = 500 * index;
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
    delay: delay,
  });

  return (
    <Card style={fadeIn}>
      <Image src={image} alt={name} />
      <Info>
        <Name>{name}</Name>
      </Info>
    </Card>
  );
};

const Developers = () => (
  <Container>
    <Title>Our Developers</Title>
    <CardsContainer>
      {developers.map((mentor, index) => (
        <DeveloperCard key={index} index={index} {...mentor} />
      ))}
    </CardsContainer>
  </Container>
);

export default Developers;
