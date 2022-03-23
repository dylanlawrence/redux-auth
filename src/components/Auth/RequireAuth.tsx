import {useSelector} from "react-redux";
import {getCurrentAuth} from "../../features/auth/authSlice";
import {getCurrentUser} from "../../features/user/userSlice";
import {Navigate, useLocation, useNavigate} from "react-router-dom";


type RequireProps = {
    requires?: object
    children: JSX.Element
};
const RequireAuth = (props: RequireProps) => {

    const user = useSelector(getCurrentUser);
    let location = useLocation();

    if (!user?.roles) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    } else if( props.requires ) {
        // @ts-ignore
        let reqRole = props.requires?.role;

        // @ts-ignore
        let hasRole = user.roles.includes('admin') || false;

        if( reqRole && !hasRole ) {
             // @ts-ignore
            hasRole = user.roles.includes(reqRole)
        }
        if(!hasRole){
            return <Navigate to="/login" state={{ from: location }} replace />;
        }
    }

    return props.children;
}

export default RequireAuth;



// Redirect them to the /login page, but save the current location they were
// trying to go to when they were redirected. This allows us to send them
// along to that page after they login, which is a nicer user experience
// than dropping them off on the home page.
// <Navigate to="/login" state={{from: location}} replace/>;
