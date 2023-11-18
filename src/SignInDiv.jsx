import './SignInDiv.scss'

function App() {

  function handleSignIn(e) {
    e.preventDefault();
  }


  return (
    <div id='usersignindiv'>
      <form onSubmit={(e) => handleSignIn(e)}>
        <label htmlFor="usernameinput">Username</label><br></br>
        <input type="text" id='usernameinput' autoCapitalize='off' required /><br></br>

        <label htmlFor="passwordinput">Password</label><br></br>
        <input type="password" id='passwordinput' autoCapitalize='off' required /><br></br>

        <input type="submit" value="Sign in" />
      </form>
    </div>
  )
}

export default App
