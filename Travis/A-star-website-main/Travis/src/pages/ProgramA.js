import React , { useEffect, useRef, useState }from 'react';
// eslint-disable-next-line 
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
function ProgramA() {

  const[textScroll, setTextScroll] = useState(false)
  const[textScroll2, setTextScroll2] = useState(false)
  const[textScroll3, setTextScroll3] = useState(false)


   useEffect(() => {
    const handleScroll = () => {
      const viewHeight = window.innerHeight;
      const triggerHeight = viewHeight * .35;
      const triggerHeight2 = viewHeight * .65;
      const triggerHeight3 = viewHeight * .75;

      if(window.scrollY > triggerHeight){
        setTextScroll(true)
      }

      if(window.scrollY > triggerHeight2){
        setTextScroll2(true)
      }

      if(window.scrollY > triggerHeight3){
        setTextScroll3(true)
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, []);


  const containerStyle = {
    textAlign: 'center',
    padding: '10px',
    marginLeft: '50vh',
    marginRight: '50vh'


  };

  const subTitleStyle = {
    textAlign: 'left',
    fontSize: '40px',
    fontweight: 'bold',
    fontFamily: "'Playfair Display', serif",

  }

  const paragraphsStyle = useSpring({
    from:{
      opacity: "0"
    },
    to:{
      fontSize: '16px',
      fontWeight: 'light',
      color: 'black',
      marginBottom: '20px',
      textAlign: 'left',
      opacity: "1"
    },
    config: {duration: 1500},
  })

  const paragraphsStyle2 = useSpring({
    fontSize: '16px',
    fontWeight: 'light',
    color: 'black',
    marginBottom: '20px',
    textAlign: 'left',
    opacity: textScroll? "1" : "0",
    config: {duration: 1500},
  })

  const paragraphsStyle3 = useSpring({
    fontSize: '16px',
    fontWeight: 'light',
    color: 'black',
    marginBottom: '20px',
    textAlign: 'left',
    opacity: textScroll2? "1" : "0",
    config: {duration: 1500},
  })


  const subList = {
    marginLeft: '40px',
    textAlign: 'left',
  }

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
    opacity: textScroll3? '1' : '0',
    config: {duration: 1000},
    width: textScroll3? '50vh' : '100vh',
    height: textScroll3? '50px' : '100px',
    textAlign: 'center',
    alignItems: 'center',
  })

  
  

  const handleClick = () => {
    window.open( "https://docs.google.com/forms/d/e/1FAIpQLSe9JmolJGOxqvUtbW8He_gsZE0PZndvZtjNgiZVUl9orf0Nig/viewform",
    "_blank");
  };




  return (
    <div className='container' style={containerStyle}>
      <p className='SubTitle' style={subTitleStyle}>Our goal for this program:</p>
      <br></br><br></br>
      <animated.p className='text' style={paragraphsStyle}>Create a professional environment that simulates an internship, while providing a real full stack project, 
        allowing students to gain technical skills, team working skills, soft skills and the resources/skills necessary to progress 
        in their careers.</animated.p>

      <p className='SubTitle' style={subTitleStyle}>How we will achieve this goal:</p>
      <br></br><br></br>
      <animated.div className='text' style={paragraphsStyle}>
        <ul>
          <li>In-person guided workshops to teach students technical skills</li>
          <li>A large “Slack” group with over 10 industry professionals to help mentor and answer questions for students</li>
          <li>Speaker series events with <strong> employees from big tech companies</strong> with a Q&A session</li>
          <li>Networking sessions with mentors and students</li>
          <li>Guidance on how to navigate the tech world and what to do to land an internship</li>
          <li>Resume workshops</li>
          <li>Agile workshops/team building workshops</li>
          <li><strong>A real full-stack project in teams for a real company</strong> in the Sammamish/Issaquah/Bellevue area that students can put on their resume</li>
          <li>Mock interviews and interview prep</li>
        </ul>
      </animated.div>
      <p className='SubTitle' style={subTitleStyle}>Program Details:</p>
      <animated.div className='text' style={paragraphsStyle}>
        <animated.div className='text' style={paragraphsStyle}>
        <ul>
          <li>Program size is capped at 25 students.</li>
          <li><strong>We will meet in person 3 days a week</strong> (5:30pm-7:30pm) in a coworking space - Venture Mechanics - in Bellevue on Mondays, Wednesdays, and Fridays.</li>
          <li>While we will only meet synchronously 3 days a week, students are expected to actively collaborate and work with their teams, as well as ask questions to mentors outside of in-person time. (You will get out of this program as much as you put in)</li>
          <li>An appropriate amount of time to spend for a successful experience is 10-15 hours a week.</li>
          <li>Workshops will be recorded (virtual option) but attendance is expected.</li>
          <li>Please let us know if commute is a difficulty; we can help with accommodations for this.</li>
          <li><strong>The program will run from June 24th to August 16th.</strong></li>
        </ul>
      </animated.div>
      </animated.div>
      <p className='SubTitle' style={subTitleStyle}>Who is running this program:</p>
      <animated.ul className='text' style={paragraphsStyle2}>
          <li>Shyam Ramesh: Current UW-Bothell CS student, interned at a startup last summer and will be interning at Amazon this summer. </li>
          <li>Vikranth Mandadi: Current UW-Madison CS student, Software Developer Intern at PACCAR</li>
          <li>While we will only meet synchronously 3 days a week, students are expected to actively collaborate and work with their teams, as well as ask questions to mentors outside of in-person time. (You will get out of this program as much as you put in)</li>
            <ul>
              <li style={subList}>Deepthi K. - Vice President of Engineering @ Zillow</li>
              <li style={subList}>Harish M. - Founder and CEO @ AIFA Labs</li>
              <li style={subList}>Dinesh K. - Director, Business Product and Tech @ Amazon</li>
              <li style={subList}>Sabari K. - Data Engineering Manager @ Amazon</li>
              <li style={subList}>Sneha S. - Software Engineering Leader @ Amazon</li>
              <li style={subList}>And more: Full list of mentors can be found <Link to="/mentors" style={paragraphsStyle}><strong>here</strong></Link></li>
            </ul>
        </animated.ul>

  
        <p className='SubTitle' style={subTitleStyle}>Cost:</p>
        <div>
        <animated.ul className='text' style={paragraphsStyle3}>
        <li >Program tuition is $2,000 ($250 per week)</li>
        <li ><strong>First 5 sign-ups get a discount of $500 ($1500 total price)</strong></li>
        <li >Deposit of $500 is required for sign-up and the rest is due by June 27th </li>
        <li >Refund Policy: If after the first session you don’t wish to continue we will provide a full refund.</li>
        <li ><strong>$100 discount for each party that signs up for the program, unlimited referrals, referral will be paid (July 1st)</strong></li>
        </animated.ul>
        </div>
        
         <div className='button-container'>
         <animated.button onClick={handleClick} style={buttonStyle}>
          Click here to register now!
        </animated.button>
      </div>

    </div>
  );
}

export default ProgramA;
