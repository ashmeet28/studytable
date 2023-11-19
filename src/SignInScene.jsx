import { useState } from 'react';

import './SignInScene.scss';

function SignInScene() {
    const [username, setUsername] = useState('');
    const [userpassword, setPassword] = useState('');

    function handleSignIn(e) {
        e.preventDefault();
        console.log(username, userpassword)
    }


    return (
        <div id='signinscene'>
            <h1>Study Table</h1>
            <div id='usersignindiv'>
                <form onSubmit={(e) => handleSignIn(e)}>
                    <label htmlFor="usernameinput">Username</label><br></br>
                    <input type="text" id='usernameinput' autoCapitalize='off' value={username} onChange={e => setUsername(e.target.value)} required /><br></br>

                    <label htmlFor="passwordinput">Password</label><br></br>
                    <input type="password" id='passwordinput' autoCapitalize='off' value={userpassword} onChange={e => setPassword(e.target.value)} required /><br></br>

                    <input type="submit" value="Sign in" />
                </form>
                <button>Create a new organization</button>
            </div>
        </div>
    )
}

export default SignInScene