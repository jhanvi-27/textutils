import React from 'react'

function Error(props) {
  return (
    <div>
      <p style={{textAlign:'center', fontSize:'40px', padding:'50px 0', color: props.mode==='dark'?'white':'black' }}>Sorry :( page not found</p>
    </div>
  )
}

export default Error
