import {Link, Route, Routes} from "react-router-dom";
import UserProfile from "../components/User/UserProfile";

function UsersIndex() {
    return null;
}

export default function User() {

    return (
        <>
            <nav>
                <Link to="me">My Profile</Link>
            </nav>
            <Routes>
                <Route path="/" element={<UsersIndex/>}/>
                <Route path=":id" element={<UserProfile/>}/>
                <Route path="me" element={<UserProfile/>}/>
            </Routes>
        </>
    );
}
