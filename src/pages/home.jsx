import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
function Home() {
  const [user, loading] = useAuthState(auth);
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="home">
      {loading ? (
        <h1>Loading...</h1>
      ) : user ? (
        <h1>Welcome {user.email}</h1>
      ) : (
        <h1>Welcome to my Notes App!</h1>
      )}
      {!loading && !user && <p>Please Sign Up or Login to continue.</p>}
      <div className="buttons-container">
        <Link to="/signup">
          <button className="btn btn-primary">Sign Up</button>
        </Link>
        <Link to="/login">
          <button className="btn btn-secondary">Login</button>
        </Link>
        <Link to="/notes">
          <button className="btn btn-secondary">Notes</button>
        </Link>
        {!loading && user && (
          <button className="btn btn-secondary" onClick={handleSignOut}>
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
}

export default Home;
