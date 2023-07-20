import React from 'react'

function Contact(props) {
    return (
        <div style={{ textAlign: 'center', color: props.mode==='dark'?'white':'black' }}>
            <h2 style={{ margin: '10px', padding: '20px' }}>Contact Me</h2>
            <div style={{fontSize:'18px'}}>
                <p>Created by : Jhanvi Gupta</p>
                <p>Email Address : jhanvisgupta@gmail.com</p>
                Github: <a href='https://github.com/jhanvi-27' target='blank'>https://github.com/jhanvi-27</a>
            </div>
        </div>
    )
}

export default Contact
