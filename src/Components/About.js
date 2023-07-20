import React from 'react';

function About(props) {
    let aboutus = {
        fontSize: '18px', 
        margin: '20px',
        padding: '40px', 
        borderRadius: '12px',
        backgroundColor: props.mode==='dark'?'#111314':'#efefef6b'
    }
  return (
    <div style={{color: props.mode==='dark'?'white':'black', textAlign:'center'}}>
      <h2 style={{ margin: '10px',padding: '20px'}}>About TextUtils</h2>
      <p style={aboutus}>
        Text-Utils is a web tool to assist developers and other people in daily tasks by providing tools for manipulating text data. It has both light and dark mode and is a responsive website
      </p>
    </div>
  )
}

export default About
