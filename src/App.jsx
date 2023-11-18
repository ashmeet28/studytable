import './App.scss'

function App() {

  return (
    <div id='usersignindiv'>
      <form action="">
        <label htmlFor="orgnameinput">Username</label><br></br>
        <input type="text" id='usernameinput' /><br></br>

        <label htmlFor="orgnameinput">Password</label><br></br>
        <input type="password" id='userpasswordinput' /><br></br>

        <input type="submit" value="Sign in" />
      </form>
    </div>
  )
}

export default App
