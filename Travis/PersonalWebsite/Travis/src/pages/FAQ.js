import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';

const FAQContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Playfair Display', serif;
`;

const Title = styled(animated.h1)`
  font-size: 4rem;
  margin-bottom: 100px;
  text-align: center;
  font-family: 'Playfair Display', serif;
`;

const Question = styled(animated.h2)`
  margin-top: 30px;
  margin-bottom: 20px;
  text-align: left;
  font-family: 'Playfair Display', serif;
`;

const Answer = styled(animated.p)`
  font-size: 1.1rem;
  margin-top: 0;
  margin-bottom: 70px;
  text-align: left;
  font-family: 'Playfair Display', serif;
`;

const FAQ = () => {
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const triggerHeight = windowHeight * 0.05;
      const faqElement = document.getElementById('faq-section');

      if (faqElement) {
        const { top } = faqElement.getBoundingClientRect();
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
    config: { duration: 500 },
  });

  const fadeInContent = useSpring({
    opacity: triggerAnimation ? 1 : 0,
    transform: triggerAnimation ? 'translateY(0)' : 'translateY(20px)',
    config: { duration: 500 },
  });

  return (
    <FAQContainer id="faq-section">
      <Title style={fadeInTitle}>FAQ</Title>
      <Question style={fadeInContent}>What are the programming languages that will be used?</Question>
      <Answer style={fadeInContent}>Program A will have students work in React, Python, and SQL, and potentially other languages of choice. Program B will give students an introduction to Java.</Answer>

      <Question style={fadeInContent}>When do signups start?</Question>
      <Answer style={fadeInContent}>Program A signups start on April 15th.</Answer>

      <Question style={fadeInContent}>How frequent are the meetings?</Question>
      <Answer style={fadeInContent}>Our meetings are 3 times a week for about an hour and a half to two hours. The schedule will be finalized and sent out closer to the summer time. There is a virtual option for all meetings.</Answer>

      <Question style={fadeInContent}>What is the time commitment of this program?</Question>
      <Answer style={fadeInContent}>Program A has a weekly time commitment of at least 10-15 hours with 4-6 of those hours in a classroom setting and the rest on hands-on project work with a team. Program B has a weekly time commitment of 6-8 hours with half of those hours in a classroom setting and the other half on Project based learning. For both programs, there will be additional hours (Office Hours) scattered throughout the week for students to ask questions and work on projects with mentors.</Answer>

      <Question style={fadeInContent}>What are the dates and fee structure of the program?</Question>
      <Answer style={fadeInContent}>Refer to <Link to='/info/pricing'>this page</Link> for this information.</Answer>
    </FAQContainer>
  );
}

export default FAQ;
