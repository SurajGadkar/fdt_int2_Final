import React from "react";

export const Avatar = ({ imgSrc, name, cases }) => {
  return (
    <div>
      <div>
        <img src={imgSrc} alt="profile-pic" />
      </div>
      <div>
        <h4>Name {name}</h4>
        <p>180 Cases {cases}</p>
      </div>
    </div>
  );
};

function Team() {
  return (
    <div>
      <h2>Our Team</h2>
      <div>
        <div>
          <Avatar />
          <Avatar />
          <Avatar />
        </div>
        <div>
          <Avatar />
          <Avatar />
          <Avatar />
        </div>
      </div>
    </div>
  );
}

export default Team;
