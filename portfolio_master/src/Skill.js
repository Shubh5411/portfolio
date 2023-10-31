import React from "react";
import './Skill.css'

function Skill(props) {
  console.log(props);
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} className="card_img"></img>
          <span className="card_category">{props.title}</span>
          <div className="card_info">
            <ul>
              <li>{props.sdata1}</li>
              <li>{props.sdata2}</li>
              <li>{props.sdata3}</li>
              <li>{props.sdata4}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Skill;
