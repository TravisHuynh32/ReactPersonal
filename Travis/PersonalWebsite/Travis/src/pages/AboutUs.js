import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import Vik from '../assets/vik.png';
import Shyam from '../assets/shyam.png';

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
  color: #000;
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
`;

const MentorName = styled.h3`
  margin: 0;
  font-size: 2rem;
  font-family: 'Playfair Display', serif;
`;

const MentorDescription = styled.p`
  margin-top: 10px;
  font-size: 1.2rem;
  line-height: 1.5;
  font-family: 'Playfair Display', serif;
`;

const mentors = [
  {
    name: 'Vikranth Mandadi',
    description: 'Vikranth is a Computer Science student at the University of Wisconsin - Madison, and is currently an intern at PACCAR. He developed a passion for Computer Science his junior year of high school, and wants to share his passion with others. Vikranth values an environment that teaches on the job skills, provides resources for career development, encourages problem solving and critical thinking in a group setting, and mentorship as he believes these are the pieces for helping students grow.',
    image: Vik,
  },
  {
    name: 'Shyam Ramesh',
    description: 'Shyam Ramesh is a Computer Science student at the University of Washington Bothell. Shyam has experience in full stack development while working at a startup and will be interning at Amazon this summer. Shyam values an environment where mentorship is encouraged and practiced as he believes that it fosters growth. In his free time he enjoys playing football, working out and painting.',
    image: Shyam,
  },
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
      <Title style={fadeInTitle}>About Us:</Title>
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
