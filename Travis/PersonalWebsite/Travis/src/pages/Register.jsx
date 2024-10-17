import React, { useState } from 'react';

const Register = () => {
    const [isRegistering, setIsRegistering] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    function handleInputChange(evt){
        const name = evt.target.name;
        const value = evt.target.value;
        setFormData(function(prevFormData){
            const newFormData = {...prevFormData}
            newFormData[name] = value
            return newFormData
        });
    };

    function handleFormSubmit(evt){
        evt.preventDefault();
        console.log(formData);
    };

    function toggleForm(){
        setIsRegistering(!isRegistering);
    };

    const containerStyle = {
        textAlign: 'center',
        padding: '50px',
    };

    const titleStyle = {
        fontSize: '40px',
        fontWeight: 'bold',
        fontFamily: "'Playfair Display', serif",
        marginBottom: '20px',
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const inputStyle = {
        width: '300px',
        padding: '10px',
        margin: '10px 0',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    };

    const buttonStyle = {
        width: '320px',
        padding: '10px',
        backgroundColor: '#333333',
        color: 'white',
        border: 'none',
        fontSize: '16px',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s, color 0.3s',
    };

    const buttonHoverStyle = {
        backgroundColor: 'white',
        color: 'black',
        border: '1px solid black',
    };

    const linkStyle = {
        marginTop: '10px',
        color: '#333333',
        cursor: 'pointer',
    };

    return (
        <div style={containerStyle}>
            <div style={titleStyle}>{isRegistering ? 'Register' : 'Login'}</div>
            <form style={formStyle} onSubmit={handleFormSubmit}>
                {isRegistering && (
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        id='name'
                        value={formData.name}
                        onChange={handleInputChange}
                        style={inputStyle}
                    />
                )}
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    id='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    style={inputStyle}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    id='password'
                    value={formData.password}
                    onChange={handleInputChange}
                    style={inputStyle}
                />
                <button
                    type="submit"
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
                    {isRegistering ? 'Register' : 'Login'}
                </button>
            </form>
            <div style={linkStyle} onClick={toggleForm}>
                {isRegistering ? 'Already have an account? Login here' : 'Don\'t have an account? Register here'}
            </div>
        </div>
    );
};

export default Register;