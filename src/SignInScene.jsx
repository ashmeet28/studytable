import SignInDiv from './SignInDiv.jsx';
import './SignInScene.scss';

function SignInScene() {
    function handleSignIn(u, p) {
        console.log(u, p)
    }

    return (
        <div id='signinscene'>
            <h1>Study Table</h1>
            <SignInDiv onSignIn={handleSignIn} />
        </div>
    )
}

export default SignInScene