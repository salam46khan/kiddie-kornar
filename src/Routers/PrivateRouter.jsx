import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'
import Loading from "../Pages/Error/Loading";

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <>
            <div className=" w-full h-screen flex justify-center items-center">
                <Loading></Loading>
            </div>
        </>
    }
    if (user) {
        return children
    }
    return <Navigate to={'/login'}></Navigate>
};

PrivateRouter.propTypes = {
    children: PropTypes.any
}
export default PrivateRouter;