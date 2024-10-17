import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

/* Headshots */
import Deepthi from '../assets/Deepthi.png';
import Harish from '../assets/Harish.png';
import Dinesh from '../assets/Dinesh.png';
import Sneha from '../assets/sneha.png';
import Sabari from '../assets/Sabari.png';
import Sandya from '../assets/Sandya.png';
import Vithul from '../assets/vithul.png';
import Aman from '../assets/Aman.png';
import Srihari from '../assets/Srihari.png';

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
  max-width: 600px;
  font-family: 'Playfair Display', serif;
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

const mentors = [
  { name: 'Deepthi K.', title: 'Vice President of Engineering @ Zillow', image: Deepthi },
  { name: 'Harish M.', title: 'Founder & CEO @ AIFA LABS LLC', image: Harish },
  { name: 'Dinesh K.', title: 'Director, Business Product and Tech @ Amazon', image: Dinesh },
  { name: 'Sneha S.', title: 'Software Engineering Leader @ Amazon', image: Sneha },
  { name: 'Sabari K.', title: 'Data Engineering Manager @ Amazon', image: Sabari },
  { name: 'Sandya U.', title: 'Principal Engineering Manager @ Microsoft', image: Sandya },
  { name: 'Vithul R.', title: 'CS @ UW Madison Incoming Intern @ Capital One', image: Vithul },
  { name: 'Aman B.', title: 'Software Development Engineer @ Amazon', image: Aman },
  { name: 'Srihari K.', title: 'CS @ UW Seattle Incoming Intern @ Amazon', image: Srihari },
];

const Mentors = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const fadeIn = useSpring({
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateY(0)' : 'translateY(20px)',
    config: { duration: 500 },
  });

  const leftSpring = useSpring({
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateX(0)' : 'translateX(-50px)',
    config: { duration: 500 },
  });

  const rightSpring = useSpring({
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateX(0)' : 'translateX(50px)',
    config: { duration: 500 },
  });

  return (
    <Container>
      <animated.div style={fadeIn}>
        <Title>Here are our mentors that will give talks, handle Q&A sessions and guide our students to reaching their potential.</Title>
      </animated.div>
      <CardsContainer>
        {mentors.map((mentor, index) => {
          const springStyle = index % 2 === 0 ? leftSpring : rightSpring;
          return (
            <Card key={index} style={springStyle}>
              <Image src={mentor.image} alt={mentor.name} />
              <Info>
                <Name>{mentor.name}</Name>
                <TitleText>{mentor.title}</TitleText>
              </Info>
            </Card>
          );
        })}
      </CardsContainer>
    </Container>
  );
};

export default Mentors;
