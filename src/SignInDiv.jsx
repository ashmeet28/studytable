import { useState } from 'react';
import './SignInDiv.scss'

function SignInDiv({ onSignIn }) {
  const [username, setUsername] = useState('');
  const [userpassword, setPassword] = useState('');

  function handleSignIn(e) {
    e.preventDefault();
    onSignIn(username, userpassword)
  }


  return (
    <div id='usersignindiv'>
      <form onSubmit={(e) => handleSignIn(e)}>
        <label htmlFor="usernameinput">Username</label><br></br>
        <input type="text" id='usernameinput' autoCapitalize='off' value={username} onChange={e => setUsername(e.target.value)} required /><br></br>

        <label htmlFor="passwordinput">Password</label><br></br>
        <input type="password" id='passwordinput' autoCapitalize='off' value={userpassword} onChange={e => setPassword(e.target.value)} required /><br></br>

        <input type="submit" value="Sign in" />
      </form>
      <button>Create an organization</button>
    </div>
  )
}

export default SignInDiv
