/*
The profile component gets data (fullName, bio, profession) as props, 
   and gets image as children props, 
   and the function handleName functions as a prop 
   that sends an alert message with the name of the profile user.
*/
import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
  
  return (
    <div>
      <h1>{props.fullName}</h1>
      <h3>{props.profession}</h3>
      <div>{props.children}</div>
      <p>{props.bio}</p>
    <button onClick={()=>props.handleName(` title: ${props.fullName}`)}>click me</button>

    </div>
  );
};
// Set default props
Profile.defaultProps = {
  fullName: "First Name Last Name",
  bio:"Elit anim qui et adipisicing pariatur.Anim cillum velit excepteur nisi sunt sit anim tempor ipsum. Esse est laboris adipisicing ex consequat qui dolore sit proident aute cillum dolor dolor dolore. Aute ullamco Lorem commodo amet ex nisi commodo incididunt non dolore eu laborum culpa. Laborum sint proident sint sunt cupidatat nisi esse elit.",
  profession: "profession",
  children: "profile photo",
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default Profile;