// eslint-disable-next-line 
import React, { useEffect, useRef, useState } from 'react';
import beriefcase from '../assets/suitcase.png';
import talking from '../assets/media.png';
import ribbon from "../assets/ribbon.png";
import globe from "../assets/globe.png";
import rocket from "../assets/rocket.png";
import computer from "../assets/computer.png";
import locks from "../assets/locks.png"
import bulb from "../assets/bulb.png"
import { useSpring, animated } from 'react-spring';

function HelloWorld() {
  const titleStyle = useSpring({
    from:{opacity: 0,
      fontSize:'10em',
      color:'black'
    },
    to:{
      opacity: 1,
      color: '#808088',
      fontSize: '3rem',
      background: '#333',
      margin: '0',
      padding: '50px 0',
      fontFamily: "'Playfair Display', serif",
    },
    config: { duration: 500 },
  })


  const handleClick = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSe9JmolJGOxqvUtbW8He_gsZE0PZndvZtjNgiZVUl9orf0Nig/viewform",
      "_blank");
  };

  const containerStyle = {
    textAlign: 'center',
  };

  const [isInView, setView] = useState(false)
  const [isInView2, setView2] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const viewHeight = window.innerHeight;
      const triggerHeight = viewHeight / 4;
      const triggerHeight2 = viewHeight * .9;
      if (window.scrollY > triggerHeight) {
        setView(true);
      }
      if (window.scrollY > triggerHeight2) {
        setView2(true);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  const Sub = {
    margin:  '0' ,
    padding: '30px 0',
    background: '#E1DFDB',
    color: 'black',
    fontSize: "50px",
    fontFamily: "'Playfair Display', serif",
  }

  const Sub2 = useSpring({
    margin: isInView? '0': '0',
    padding: '30px 0',
    background: '#E1DFDB',
    color: 'black',
    fontSize: "50px",
    fontFamily: "'Playfair Display', serif",
    opacity: isInView? "1" : '0',
    config: {duration: 1000}
  })

  const imagesStyle ={
    width: '60vw',
    margin: '0 auto',
    display: 'flex',
    gap: '20px',
    overflowX: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    padding: "10px",
  }

  const imagesStyle2 = useSpring({
    width: '60vw',
    margin: '0 auto',
    display: 'flex',
    gap: '20px',
    overflowX: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    padding: "10px",
    opacity: isInView? '1' : '0',
    config: {duration: 1000}
  })

  const paragraphStyle = {
    flex: '1 1 auto',
    maxWidth: 'calc(25% - 20px)',
    boxSizing: 'border-box',
    alignItems: 'flex-start',
    
  }

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
  };

  const dicriptionsStyle = {
    width: '60vw',
    margin: '0 auto',
    display: 'flex',
    gap: '20px',
    overflowX: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    alignItems: 'flex-start',
  }

  const dicriptionStyle = {
    flex: '1 1 auto',
    maxWidth: 'calc(25% - 20px)',
    boxSizing: 'border-box',
    fontSize: "20px",
    fontFamily: "'Playfair Display', serif",
    alignItems: 'flex-start',
  }

  const subDicription = {
    fontSize: "18px",
    fontFamily: "'Playfair Display', serif",
    color: '#808080',
    paddingTop: "20px"
  }

  const buttonStyle = useSpring({
    padding: "10px 40px", 
    display: 'inline-block',
    backgroundColor: 'white',
    color: 'black',
    border: '2px solid black', 
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '18px', 
    margin: '20px auto',
    opacity: isInView2? '1' : '0',
    config: {duration: 1000},
    width: isInView2? '50vh' : '100vh',
    height: isInView2? '50px' : '100px',
  })

  return (
    <div className="containter" style={containerStyle}>
      <animated.p style={titleStyle}>What do we provide our students?</animated.p>

      <p style={Sub}> Top <i>Features</i> of Our Program</p>

      <div style={imagesStyle}>
        <div style={paragraphStyle}>
          <img src={beriefcase} alt="" style={imageStyle}></img>
        </div>
        <div style={paragraphStyle}>
          <img src={ribbon} alt="" style={imageStyle}></img>
        </div>
        <div style={paragraphStyle}>
          <img src={globe} alt="" style={imageStyle}></img>
        </div>
        <div style={paragraphStyle}>
          <img src={talking} alt="" style={imageStyle}></img>
        </div>
      </div>

      <div style={dicriptionsStyle}>
        <div style={dicriptionStyle}>
          <p>Real World Projects</p>
          <p style={subDicription}> By partnering with nonprofits we provide free software solutions to those who need it and also
            provide our students with real projects they can grow from. </p>
        </div>
        <div style={dicriptionStyle}>
          <p>Skill Workshops</p>
          <p style={subDicription}> With various technical and non technical skill workshops our students feel more prepared to tackle real projects.  </p>
        </div>
        <div style={dicriptionStyle}>
          <p>Networking and Mentorship</p>
          <p style={subDicription}> Our events provide students with chances to connect with industry professionals and other students in the program.  </p>
        </div>
        <div style={dicriptionStyle}>
          <p>Interview prep</p>
          <p style={subDicription}> With interview and leetcode workshops our students will leave their course with ample experience to ace their interviews. </p>
        </div>
      </div>

      <animated.p style={Sub2}> Top <i>Benefits</i> of Our Program</animated.p>

      <animated.div style={imagesStyle2}>
        <div style={paragraphStyle}>
          <img src={bulb} alt="" style={imageStyle}></img>
        </div>
        <div style={paragraphStyle}>
          <img src={rocket} alt="" style={imageStyle}></img>
        </div>
        <div style={paragraphStyle}>
          <img src={computer} alt="" style={imageStyle}></img>
        </div>
        <div style={paragraphStyle}>
          <img src={locks} alt="" style={imageStyle}></img>
        </div>
      </animated.div>

      <div style={dicriptionsStyle}>
        <div style={dicriptionStyle}>
          <p>Develop Problem Solving Skills</p>
          <p style={subDicription}> Being able to effectively problem solve is one of the top skills looked for from new hires.</p>
        </div>
        <div style={dicriptionStyle}>
          <p>Early exposure to industry practices</p>
          <p style={subDicription}> Our course will provide individuals with essential skills for professional success.</p>
        </div>
        <div style={dicriptionStyle}>
          <p>Exposure to technologies used in industry</p>
          <p style={subDicription}> Exposure to industry technologies fosters practical proficiency and adaptability.</p>
        </div>
        <div style={dicriptionStyle}>
          <p>Interview and LeetCode workshops</p>
          <p style={subDicription}> We provide students with the skills they need to have a higher conversion rate for their internship applications. </p>
        </div>
      </div>
      <p style={Sub}><i>"The best way to practice and prepare is to do it!"</i></p>
      <br />
      <br />
      <animated.button onClick={handleClick} style={buttonStyle}>
        Click here to register now!
      </animated.button>
    </div>
  );
}

export default HelloWorld;
