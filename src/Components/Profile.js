import React from 'react';

const Profile = ({currentUser}) =>{
    const {profile_img_url, display_name, spotify_url} = currentUser
   return(
       <div>
           <h1>{display_name}</h1>
           <a href={spotify_url}>
            <img src={profile_img_url} alt="spotifyImg"/>
           </a>
       </div>
   )
}

export default Profile;
