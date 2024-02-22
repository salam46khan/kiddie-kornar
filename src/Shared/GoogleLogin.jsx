import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleGoogleLogin = () => {
        console.log('ok');
        googleSignIn()
            .then(result => {
                console.log(result.user);
                navigate( '/')
            })
            .catch(error => {
                console.log(error);
            })
    }
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