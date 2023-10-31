import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import sdata from './sdata';
import Skill from './Skill';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <h1 className='heading'>Technical Skill</h1>
    {
      sdata.map((val,index) => {
        return(
      <Skill
        key = {index}
        imgsrc = {val.imgsrc}
        title  ={val.title}
        sdata1={val.sdata1}
        sdata2={val.sdata2}
        sdata3={val.sdata3}
        sdata4={val.sdata4}
        link={val.link}
       />
        )
        })
    }
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
