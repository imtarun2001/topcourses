import React from 'react';
import './Spinner.css';
function Spinner() {
  return (
    <div className='spin'>
        <div className='spintext'>
            <div className='spinner'></div>
        </div>
        <div className='spintext'>Loading...</div>
    </div>
  )
}

export default Spinner