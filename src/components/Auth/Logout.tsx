import {useLogoutMutation} from "../../app/services/auth";
import {clearAuth} from "../../features/auth/authSlice";
import {clearUser} from "../../features/user/userSlice";
import {useState} from "react";
import {LogoutRequest} from "../../features/auth/auth.types";
import {useAppDispatch} from "../../app/hooks";
import {useNavigate} from "react-router-dom";
import {Box, BoxProps, MenuItem} from "@chakra-ui/react";


export const Logout = (props: BoxProps) => {
    const [$logout] = useLogoutMutation()

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [formState, setFormState] = useState<LogoutRequest>({
        session_id: '',
    })

    const onLogout = async () => {
        try {
            await $logout(formState)
                .unwrap()
                .then((user) => {
                    dispatch(clearAuth())
                    dispatch(clearUser())
                    navigate('/login');
                })
                .catch((error) => console.error(error))
        } catch (err) {
            console.error(err)
        }
    }
    return (
        <>
            <Box {...props} onClick={onLogout}>Logout</Box>
        </>
    )
}
