import React, { useEffect, useState } from 'react';
import { useSpring, animated, useInView } from 'react-spring';

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
        justifyContent: 'space-around', 
        alignItems: 'flex-start', 
        marginTop: '50px',
    };

    const sectionItemStyle = {
        textAlign: 'center',
        width: '200px', 
        margin: '0 20px', 
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

    const projectsContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '100px',
        padding: '0 20px',
    };

    const projectCardStyle = {
        width: '300px',
        padding: '20px',
        backgroundColor: '#f0f0f0',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        marginBottom: '40px',
    };

    const projectImageStyle = {
        width: '100%',
        height: '150px',
        borderRadius: '10px',
        objectFit: 'cover',
        marginBottom: '15px',
    };

    const projectTitleStyle = {
        fontSize: '24px',
        marginBottom: '10px',
        fontFamily: "'Playfair Display', serif",
    };

    const projectDescriptionStyle = {
        fontSize: '16px',
        color: '#555',
    };

    const [triggerAnimation, setTriggerAnimation] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const triggerHeight = windowHeight * 0.15;

            if (window.scrollY > triggerHeight) {
                setTriggerAnimation(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const leftSpring = useSpring({
        opacity: triggerAnimation ? 1 : 0,
        transform: triggerAnimation ? 'translateX(0)' : 'translateX(-50px)',
        config: { duration: 500 },
    });

    const rightSpring = useSpring({
        opacity: triggerAnimation ? 1 : 0,
        transform: triggerAnimation ? 'translateX(0)' : 'translateX(50px)',
        config: { duration: 500 },
    });

    const textSlideDown = useSpring({
        opacity: triggerAnimation ? 1 : 0,
        transform: triggerAnimation ? 'translateY(0)' : 'translateY(-20px)',
        config: { duration: 500 },
    });

    const lineDraw = useSpring({
        from: { width: '0%' },
        to: { width: triggerAnimation ? '100%' : '0%' },
        config: { duration: 1000 },
    });

    const fadeIn = useSpring({
        opacity: loaded ? 1 : 0,
        transform: loaded ? 'translateY(0)' : 'translateY(20)',
        config: { duration: 1500 },
    });

    // Projects fade-in animation
    const [projectsVisible, setProjectsVisible] = useState(false);
    const handleScrollForProjects = () => {
        const projectsSection = document.getElementById('projects-section');
        if (projectsSection) {
            const rect = projectsSection.getBoundingClientRect();
            if (rect.top <= window.innerHeight) {
                setProjectsVisible(true);
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScrollForProjects);
        return () => {
            window.removeEventListener('scroll', handleScrollForProjects);
        };
    }, []);

    const projectsFadeIn = useSpring({
        opacity: projectsVisible ? 1 : 0,
        transform: projectsVisible ? 'translateY(0)' : 'translateY(50px)',
        config: { duration: 1000 },
    });

    return (
        <div style={containerStyle}>
            <animated.div style={fadeIn}>
                <div style={titleStyle}>Hi! My name is Travis!</div>
                <div style={subtitleStyle}>
                    Constantly seeking new experiences and opportunities to enhance my skill set, I'm driven by a passion for growth. 
                    I'm eagerly looking forward to the next phase of my professional journey!
                </div>
                <div style={buttonContainerStyle}>
                    <a
                        href="https://www.linkedin.com/in/travis-huynh-626973221/"
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
                        My LinkedIn!
                    </a>
                    <a
                        href="https://github.com/TravisHuynh32"
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
                        My Github!
                    </a>
                </div>
            </animated.div>
            <animated.div style={lineDraw}>
                <div style={dividerStyle}></div>
            </animated.div>

            {/* Project Section */}
            <div id="projects-section" style={projectsContainerStyle}>
                <animated.div style={projectsFadeIn}>
                    <div style={projectCardStyle}>
                        <img
                            src="your-image-url"
                            alt="Project 1"
                            style={projectImageStyle}
                        />
                        <div style={projectTitleStyle}>Project 1</div>
                        <div style={projectDescriptionStyle}>
                            This is a description of my project. It was built using React, Node.js, and MySQL.
                        </div>
                    </div>

                    <div style={projectCardStyle}>
                        <img
                            src="your-image-url"
                            alt="Project 2"
                            style={projectImageStyle}
                        />
                        <div style={projectTitleStyle}>Project 2</div>
                        <div style={projectDescriptionStyle}>
                            This is another project. It showcases a different set of skills like API integration.
                        </div>
                    </div>
                </animated.div>
            </div>
        </div>
    );
}

export default Home;
