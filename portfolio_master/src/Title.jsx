import React from 'react';
import './Title.css';
import ReactRotatingText from 'react-rotating-text';

const Title = () => {
  return (
    <div className="title animate-charcter">
            <ReactRotatingText className='title_heading' items={['Full-Stack Developer', 'Jr. React Developer', 'Ui/Ux Designer']} />
            <h4 >I design and code beautifully simple things, and I love what I do.</h4>
    </div>
  
  )
}

export default Title
