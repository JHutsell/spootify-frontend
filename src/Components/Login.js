import React from 'react';

const Login = ({currentUser}) => {
  if (!currentUser.id) {
    return(
      <a className="login-a" href="http://localhost:3000/api/v1/auth">
        LOGIN
      </a>
    )
  }
   return null
}
  
export default Login;
