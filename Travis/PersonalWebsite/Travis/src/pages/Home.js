import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import industryExposureImg from '../assets/industry_exposure.png';
import companiesImg from '../assets/companies.png';
import technicalWorkshopsImg from '../assets/technical_workshops.png';
import uwLogoImg from '../assets/uw_logo.png';
import { useSpring, animated } from 'react-spring';

const Home = () => {

    const containerStyle = {
        textAlign: 'center',
        padding: '50px',
    };

    const titleStyle = {
        fontSize: '70px',
        fontWeight: 'bold',
        fontFamily: "'Playfair Display', serif",
    };

    const subtitleStyle = {
        fontSize: '25px',
        marginTop: '20px',
        fontFamily: "'Playfair Display', serif",
    };

    const buttonContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '50px',
        gap: '200px',
    };

    const buttonStyle = {
        width: '400px',
        height: '50px',
        backgroundColor: '#333333',
        color: 'white',
        border: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '16px',
        transition: 'background-color 0.3s, color 0.3s, border 0.3s',
        textDecoration: 'none',
        borderRadius: '8px',
    };

    const buttonHoverStyle = {
        backgroundColor: 'white',
        color: 'black',
        border: '1px solid black',
    };

    const dividerStyle = {
        margin: '50px auto',
        width: '100%',
        height: '1px',
        backgroundColor: '#333333',
    };

    const sectionContainerStyle = {
        display: 'flex',
        justifyContent: 'space-around', // This will space items evenly with equal space around them
        alignItems: 'flex-start', // Aligns items to the start of the flex container
        marginTop: '50px',
    };

    const sectionItemStyle = {
        textAlign: 'center',
        width: '200px', // Ensure width is consistent
        margin: '0 20px', // Optional: for additional spacing
    };

    const sectionImageStyle = {
        width: '220px',
        height: '220px',
        marginBottom: '20px',
    };

    const sectionTitleStyle = {
        fontSize: '30px',
        fontFamily: "'Playfair Display', serif",
        marginBottom: '10px',
    };

    const sectionDescriptionStyle = {
        fontSize: '18px',
        fontFamily: "'Playfair Display', serif",
    };

    const [triggerAnimation, setTriggerAnimation] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
        const handleScroll = () => {
            const windowHeight = window.innerHeight
            const triggerHeight = windowHeight * 0.15

            if (window.scrollY > triggerHeight) {
                setTriggerAnimation(true)
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const leftSpring = useSpring({
        opacity: triggerAnimation ? 1 : 0,
        transform: triggerAnimation ? 'translateX(0)' : 'translateX(-50px)',
        config: { duration: 500 }, // Customize duration as needed
    });

    const rightSpring = useSpring({
        opacity: triggerAnimation ? 1 : 0,
        transform: triggerAnimation ? 'translateX(0)' : 'translateX(50px)',
        config: { duration: 500 },
    });

    const textSlideDown = useSpring({
        opacity: triggerAnimation ? 1 : 0,
        transform: triggerAnimation ? 'translateY(0)' : 'translateY(-20px)',
        config: { duration: 500 }, // Customize duration as needed
    });

    const lineDraw = useSpring({
        from: { width: '0%' },
        to: { width: triggerAnimation ? '100%' : '0%' },
        config: { duration: 1000 },
    });

    const fadeIn = useSpring({
        opacity: loaded ? 1 : 0,
        transform: loaded ? 'translateY(0)' : 'translateY(20)',
        config: {duration: 1500},
    })

    return (
        <div style={containerStyle}>
            <animated.div style={fadeIn}>
                <div style={titleStyle}>Explore and Accelerate Your Career</div>
                <div style={subtitleStyle}>
                    A-Star Accelerator is an eight week summer program that provides an internship-like experience
                    while teaching industry level skills in computer science, allowing students to explore and
                    accelerate their career opportunities.
                </div>
                <div style={buttonContainerStyle}>
                    <a
                        href="#"
                        style={buttonStyle}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
                            e.target.style.color = buttonHoverStyle.color;
                            e.target.style.border = buttonHoverStyle.border;
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = buttonStyle.backgroundColor;
                            e.target.style.color = buttonStyle.color;
                            e.target.style.border = buttonStyle.border;
                        }}
                    >
                        FILL OUT THE INTEREST FORM
                    </a>
                    <Link
                        to="/register"
                        style={buttonStyle}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
                            e.target.style.color = buttonHoverStyle.color;
                            e.target.style.border = buttonHoverStyle.border;
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = buttonStyle.backgroundColor;
                            e.target.style.color = buttonStyle.color;
                            e.target.style.border = buttonStyle.border;
                        }}
                    >
                        REGISTER HERE
                    </Link>
                </div>
            </animated.div>
            <animated.div style={lineDraw}>
                <div style={dividerStyle}></div>
            </animated.div>
            <animated.div style={textSlideDown}>
                <div style={subtitleStyle}>
                    We're here to help you grow.
                </div>
            </animated.div>
            <div style={sectionContainerStyle}>
                <animated.div style={leftSpring}>
                    <div style={sectionItemStyle}>
                        <img
                            src={industryExposureImg} // Replace with your image URL
                            alt="Industry Exposure"
                            style={sectionImageStyle}
                        />
                        <div style={sectionTitleStyle}>Industry Exposure</div>
                        <div style={sectionDescriptionStyle}>
                            Providing experience in industry practices and technologies to accelerate the career
                            development
                            of students.
                        </div>
                    </div>
                </animated.div>
                <animated.div style={leftSpring}>
                    <div style={sectionItemStyle}>
                        <img
                            src={companiesImg} // Replace with your image URL
                            alt="Mentorship Events"
                            style={sectionImageStyle}
                        />
                        <div style={sectionTitleStyle}>Mentorship Events</div>
                        <div style={sectionDescriptionStyle}>
                            Our program includes speakers and mentors from top-tech industry professionals at Amazon,
                            Microsoft, Google and more!
                        </div>
                    </div>
                </animated.div>
                <animated.div style={rightSpring}>
                    <div style={sectionItemStyle}>
                        <img
                            src={technicalWorkshopsImg} // Replace with your image URL
                            alt="Technical Workshops"
                            style={sectionImageStyle}
                        />
                        <div style={sectionTitleStyle}>Technical Workshops</div>
                        <div style={sectionDescriptionStyle}>
                            Teaching students new and upcoming languages, alongside the backbone technologies of
                            fullstack
                            development.
                        </div>
                    </div>
                </animated.div>
                <animated.div style={rightSpring}>
                    <div style={sectionItemStyle}>
                        <img
                            src={uwLogoImg} // Replace with your image URL
                            alt="Real Business Case"
                            style={sectionImageStyle}
                        />
                        <div style={sectionTitleStyle}>Real Business Case</div>
                        <div style={sectionDescriptionStyle}>
                            We are partnering with UW Bothell to build a mobile app that enhances the access to events
                            and
                            reinforces the community bond at the University.
                        </div>
                    </div>
                </animated.div>
            </div>
        </div>
);

}

export default Home;
