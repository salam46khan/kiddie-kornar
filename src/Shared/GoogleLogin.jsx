import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";

const GoogleLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    
    return (
        <div>
            <button onClick={handleGoogleLogin} className='btn btn-primary w-full'>
                <FaGoogle></FaGoogle>
                Login with Google
            </button>
        </div>
    );
};

export default GoogleLogin;