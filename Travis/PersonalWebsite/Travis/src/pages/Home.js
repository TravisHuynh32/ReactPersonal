import React, { useEffect, useState } from 'react';
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

    const fadeIn = useSpring({
        opacity: loaded ? 1 : 0,
        transform: loaded ? 'translateY(0)' : 'translateY(20px)',
        config: { duration: 1500 },
    });

    const lineDraw = useSpring({
        from: { width: '0%' },
        to: { width: triggerAnimation ? '100%' : '0%' },
        config: { duration: 1000 },
    });

    const projectContainerStyle = {
        display: 'flex',
        gap: '20px',
        marginTop: '50px',
        whiteSpace: 'nowrap',  // Prevent wrapping
        animation: 'scrolling infinite linear infinite',  // Keyframe animation for scrolling
    };

    const projectCardStyle = {
        flex: '0 0 auto',
        width: '300px',
        height: '400px',
        borderRadius: '10px',
        backgroundColor: '#ffffff',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '20px',
        color: 'black',
    };

    const projectImageStyle = {
        width: '100%',
        height: '200px',
        borderRadius: '10px',
        objectFit: 'cover',
    };

    const projectTitleStyle = {
        fontSize: '30px',
        fontWeight: 'bold',
        fontFamily: "'Playfair Display', serif",
        color: 'black',
    };

    const projectDescriptionStyle = {
        fontSize: '20px',
        fontFamily: "'Playfair Display', serif",
        color: 'black',
    };

    // List of projects (you can add more projects here)
    const projects = [
        {
            title: 'Eventify',
            description: 'UWB Flutter Event Consolidator',
            imageUrl: 'https://depts.washington.edu/compfin/web/wp-content/uploads/2015/09/UW-logo-512.png',
        },
        {
            title: 'NutriPic',
            description: 'UWBHacks AI 2024',
            imageUrl: 'https://uwb-acm.github.io/uwb-hacks24/static/media/cropped_husky.7e5e29cab44c4950fafc.PNG',
        },
        {
            title: 'Personal Portfolio',
            description: 'React.js Web Application Portfolio',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSoW3g9hjXIasgon-kpzz-lD9z4SsalyPbZA&s',
        },
        {
            title: 'AnimeDatabase',
            description: 'Full-Stack Anime Project',
            imageUrl: 'https://i.redd.it/who-wins-goku-fused-with-entire-fiction-versus-batman-with-v0-55nklqxwdxhd1.jpg?width=1080&format=pjpg&auto=webp&s=c45b1e608325748a74fe7f54cd9e171039976782',
        },
        {
            title: 'Spotify Database',
            description: 'PHP Database Project',
            imageUrl: 'https://yt3.googleusercontent.com/vuOdWtsiJ02ciel4pqaheZbl3SJx5uP5xu_xJlAilwFRKsvYjZqHGiIGvZxWKVHIEHvVRhQctrc=s900-c-k-c0x00ffffff-no-rj',
        },
    ];

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

            <h2 style={subtitleStyle}>My Projects</h2>

            <div style={projectContainerStyle}>
                {projects.map((project, index) => (
                    <div key={index} style={projectCardStyle}>
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            style={projectImageStyle}
                        />
                        <div style={projectTitleStyle}>{project.title}</div>
                        <div style={projectDescriptionStyle}>
                            {project.description}
                        </div>
                    </div>
                ))}
                {/* Duplicate the projects to create a looping effect */}
                {projects.map((project, index) => (
                    <div key={index + projects.length} style={projectCardStyle}>
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            style={projectImageStyle}
                        />
                        <div style={projectTitleStyle}>{project.title}</div>
                        <div style={projectDescriptionStyle}>
                            {project.description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;