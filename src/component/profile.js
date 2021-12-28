import React from 'react';
import Profileson from './profileson'
import chaos from './chaos.jpg';
import PropTypes from 'prop-types';

 const Profile=(props)=>{

   const handleName=(fullName)=>{
        alert(fullName) }     
          return (
                <div>
            <Profileson fullName="nourhen"
               bio="bio je sais pas "
               handleName={handleName()}
               profession="developer">
               <img src= {chaos} alt='chaos'
               />
            </Profileson> 
                </div>
                  )  
}

export default Profile
