import { auth, googleAuthProvider } from '../lib/firebase';
import { FcGoogle } from "react-icons/fc";
import toast from 'react-hot-toast';
import { useContext } from 'react';
import { UserContext } from '../lib/context';

export default function Enter(props) {
  // const user = null;
  // const username = null;
  const { user, username } = useContext(UserContext)

  // 1. user signed out <SignInButton />
  // 2. user signed in, but missing username <UsernameForm />
  // 3. user signed in, has username <SignOutButton />
  return (
    <main>
      {user ? 
        !username ? <UsernameForm /> : <SignOutButton /> 
        : 
        <SignInButton />
      }
    </main>
  );
}

// Sign in with Google button
function SignInButton() {
  const signInWithGoogle = async () => {
    
    try {
      await auth.signInWithPopup(googleAuthProvider);
      // show success message
      toast.success('Sign up was successful!');

    } catch (error) {
      console.log('Error with signing in: ', error);
      // show toast error message
      toast.error('Failed to sign in with Google. Please try again.')
    }
  };

  return (
    <button className="btn-google" onClick={signInWithGoogle}>
       <FcGoogle className='mr-4 text-2xl bg-white rounded-full'/>  Sign in with Google
    </button>
  );
}

// Sign out button
function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
}

function UsernameForm() {
  return null;
}