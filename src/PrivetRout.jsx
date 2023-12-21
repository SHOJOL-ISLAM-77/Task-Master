import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import Loader from "./Loader/Loader";



const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);

    const location = useLocation()

    if (!loader) {
        return <div className="flex justify-center items-center h-screen">
            <Loader/>
        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}