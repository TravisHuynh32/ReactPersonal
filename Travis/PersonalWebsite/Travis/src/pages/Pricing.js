// eslint-disable-next-line 
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React , { useEffect, useRef, useState }from 'react';
import { useSpring, animated, config } from 'react-spring';

function HelloWorld() {
  const containerStyle = useSpring({
    from: {
      opacity: '0',

    },
    to:{
      textAlign: 'center',
      padding: '10px',
      marginLeft: '200px',
      marginRight: '200px',
      opacity: "1"
    },
    config: {duration: 1000}

  });

  const titleStyle = {
    fontSize: '60px',
    fontWeight: 'bold',
    paddingTop: '0',
    fontFamily: "'Playfair Display', serif",

};

const paragraphsStyle = {
  display: 'flex',
  gap: "20px",
  paddingTop: "30px",
  align: 'center',
}


const paragraphStyle = {
  paddingTop: '60px',
  fontSize: '30px',
  fontWeight: 'normal',
  color: '#808080',
}

const discriptionStyle = {
  paddingTop: '80px',
  fontSize: '18px',
  fontWeight: 'soft',
  textAlign: 'left'
};

const linkStyle = {
fontWeight: 'bold',
color: 'black',
textDecoration: 'none'
};

const promiseStyle = {
  paddingTop: '50px',
  fontWeight: "bold",
  fontSize: "36px"
}




  const handleClick = () => {
    window.open( "https://docs.google.com/forms/d/e/1FAIpQLSe9JmolJGOxqvUtbW8He_gsZE0PZndvZtjNgiZVUl9orf0Nig/viewform",
    "_blank");
  };
 const[text, setText]  = useState('$3000');
 const[scrolled, setScrolled]  = useState(false);
 const[scrolled2, setScrolled2]  = useState(false);

 const fadeStyles = useSpring({
  fontSize: scrolled? "30px" : '90px',
  config: { duration: 1500 },

});

 useEffect(() => {
  const handleScroll = () => {

    const viewHeight = window.innerHeight
    const threshold = viewHeight * .18
    const threshold2 = viewHeight * .7


    if(window.scrollY > threshold){
      setTimeout(() => {
        setText('$2000');
        setScrolled(true)
      }, 500);
        
    };

    if(window.scrollY > threshold2){
      setScrolled2(true);
  };

  }

  window.addEventListener('scroll', handleScroll)
  return () => {
    window.removeEventListener('scroll', handleScroll)
    
  };


 },[]
)

const buttonStyle = useSpring({

  padding: "5px 40px",
  display: 'inline-block',
  backgroundColor: 'white', 
  color: 'black',
  border: '1px solid black',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
  textAlign: 'left',
  opacity: scrolled2? '1' : '0',
  config: {duration: 1000},
  width: scrolled2? '50vh' : '100vh',
  height: scrolled2? '50px' : '100px',
  textAlign: 'center',
  alignItems: 'center',
})


  return (
    <animated.div className='container' style={containerStyle}>
        <div className='title' style={titleStyle}>
            Pricing
        </div>

        <div className='discription' style={discriptionStyle}>
        Program A is for more experienced older students, and will cover the bulk of full stack development along with version control, 
        leetcode practice, and real projects for real companies. This program will encmpass a full "internship-like" experience. 
        Program B on the other hand is an intro Java program that will allow students to learn the basics of programming, 
        learn the basics of OOP (Object Oriented Programming), and end in a capstone project. More specific information can be found 
        here:
          <Link to="/info/program-a" style={linkStyle}> Info about the Programs.</Link>
        </div>

        <div className='refundText' style={promiseStyle}>
        After the first session, if you decide this course isn't for you we guarantee you a 100% refund.
        </div>

        <div className='Pargraphs' style={paragraphsStyle}>
            <div className='Paragaph' style={paragraphStyle}>
              Program A: 8 weeks (Ages 15 - 20) <br /> 
              Summer 2024<br /><br /> Price per week: $250<br /><br />
              Total Price: <animated.p style={fadeStyles}>{text}</animated.p>
              <br />Referrals: $100 off for each party, unlimited referrals ($100 off for the referrers and for the referred)
              <br /><br />$500 deposit for signup and the rest is due June 27th
              <br /><br />First 5 Sign-Ups get $500 discount ($1500 total price)
            </div>

            <div className='Paragaph'  style={paragraphStyle}>
            Program B - 5 weeks (Ages 12-15)<br />Summer 2025<br /><br /><br />Total Price: $550 <br />Referrals: $25 off for each party, unlimited referrals
            </div>
        </div>

        <br></br> <br></br> <br></br>
        
        <animated.button className={`button`} onClick={handleClick} style={buttonStyle}>
          Click here to register now!
        </animated.button>

    </animated.div>
  );
}

export default HelloWorld;