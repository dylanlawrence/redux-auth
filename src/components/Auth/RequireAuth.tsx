import {useSelector} from "react-redux";
import {selectCurrentUser} from "../../features/auth/authSlice";


type RequireProps = {
    children: JSX.Element
};
const RequireAuth = (props: RequireProps) => {

    const user = useSelector(selectCurrentUser);
    /*
        if (!auth.user) {
            // Redirect them to the /login page, but save the current location they were
            // trying to go to when they were redirected. This allows us to send them
            // along to that page after they login, which is a nicer user experience
            // than dropping them off on the home page.
            return <Navigate to="/login" state={{ from: location }} replace />;
        }
    */
    return props.children;
}

 export default RequireAuth;
