import {Avatar, Button, Menu, MenuButton, MenuDivider, MenuItem, MenuList} from "@chakra-ui/react";
import NavLink from "./NavLink";
import {LogoutRequest} from "../../features/auth/auth.types";

import {useLogoutMutation} from "../../app/services/auth";
import { useState } from "react";
import {setCredentials} from "../../features/auth/authSlice";
import {Link as RLink, useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../app/hooks";



const UserNavMenu = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [formState, setFormState] = useState<LogoutRequest>({
        session_id: '',
    })
    const [$logout] = useLogoutMutation()

    const onLogout = async () => {
        try {
            await $logout(formState)
                .unwrap()
                .then((user) => {
                    dispatch(setCredentials({}))
                    navigate('/login');
                })
                .catch((error) => console.error(error))
        } catch (err) {

        }
    }



    return (

        <Menu>
            <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                    size={'sm'}
                    src={
                        '/profile-placeholder.png'
                    }
                />
            </MenuButton>
            <MenuList>
                <MenuItem as={RLink} to={'/protected'}>Dashboard</MenuItem>
                <MenuDivider/>
                <MenuItem onClick={onLogout}>Logout</MenuItem>
            </MenuList>
        </Menu>
    );
};

export default UserNavMenu;
