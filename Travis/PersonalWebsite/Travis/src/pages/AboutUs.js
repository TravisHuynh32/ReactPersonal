import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import Travis from '../assets/Travis.png';

const AboutUsContainer = styled.div`
  font-family: 'Playfair Display', serif;
`;

const Title = styled(animated.h2)`
  margin: 0;
  padding: 50px 0;
  background: #333;
  color: #fff;
  text-align: center;
  font-size: 2.5rem;
  font-family: 'Playfair Display', serif;
`;

const MentorSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MentorCard = styled(animated.div)`
  background: #fff;
  color: #000000;
  border-radius: 8px;
  margin: 20px;
  padding: 20px;
  display: flex;
  width: 100%;
  max-width: 1200px;
  font-family: 'Playfair Display', serif;
`;

const MentorImage = styled.img`
  border-radius: 2px;
  width: 400px;
  height: 400px;
  margin-right: 20px;
  object-fit: cover;
`;

const MentorInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: #000000;
`;

const MentorName = styled.h3`
  margin: 0;
  font-size: 2rem;
  font-family: 'Playfair Display', serif;
  color: #000000; 
`;

const MentorDescription = styled.p`
  margin-top: 10px;
  font-size: 1.2rem;
  line-height: 1.5;
  font-family: 'Playfair Display', serif;
  color: #000000; 
`;

const mentors = [
  {
    name: 'Travis Huynh',
    description: 'Im a Computer Science student at the University of Washington Bothell with a passion for software development and data science. Ive previously interned at A* Accelerator, where I gained hands-on experience in the tech startup space. My focus is on leveraging technology to solve real-world problems, and I’m eager to contribute to impactful projects that push the boundaries of innovation. Im always looking to expand my skills in software engineering, data analysis, and full-stack development.',
    image: Travis,
  }
];

const AboutUs = () => {
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const triggerHeight = windowHeight * 0.05;
      const aboutUsElement = document.getElementById('about-us-section');

      if (aboutUsElement) {
        const { top } = aboutUsElement.getBoundingClientRect();
        if (top < triggerHeight) {
          setTriggerAnimation(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const fadeInTitle = useSpring({
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateY(0)' : 'translateY(-20px)',
    config: { duration: 500 },
  });

  const fadeInLeft = useSpring({
    opacity: triggerAnimation ? 1 : 0,
    transform: triggerAnimation ? 'translateX(0)' : 'translateX(-50px)',
    config: { duration: 500 },
  });

  const fadeInRight = useSpring({
    opacity: triggerAnimation ? 1 : 0,
    transform: triggerAnimation ? 'translateX(0)' : 'translateX(50px)',
    config: { duration: 500 },
  });

  return (
    <AboutUsContainer id="about-us-section">
      <Title style={fadeInTitle}>About Me!</Title>
      <MentorSection>
        {mentors.map((mentor, index) => {
          const springStyle = index % 2 === 0 ? fadeInLeft : fadeInRight;
          return (
            <MentorCard key={index} style={springStyle}>
              <MentorImage src={mentor.image} alt={mentor.name} />
              <MentorInfo>
                <MentorName>{mentor.name}</MentorName>
                <MentorDescription>{mentor.description}</MentorDescription>
              </MentorInfo>
            </MentorCard>
          );
        })}
      </MentorSection>
    </AboutUsContainer>
  );
};

export default AboutUs;
