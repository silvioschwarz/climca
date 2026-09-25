import React from "react";

export default function People({name, fullName, position}) {
  return (
    <div className="team-member">
      <a href={"./people/" + name + "/index.html"}>
        <img 
            src={require('./images/people/' + name + '.jpg')} 
            alt={fullName} 
            />
      </a>
      <h3>{fullName}</h3>
      <p>{position}</p>
     {/* <div className="social-icons"></div> */}
    </div>
  );
}