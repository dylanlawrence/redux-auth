import {Avatar, Button, HStack, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text} from "@chakra-ui/react";
import {Link as RLink} from "react-router-dom";
import {getCurrentUser} from "../../features/user/userSlice";
import {useSelector} from "react-redux";
import {Logout} from "../Auth/Logout";

const UserNavMenu = () => {

    const user = useSelector(getCurrentUser);

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
                    src={`https://avatars.dicebear.com/api/avataaars/${user?.avatar}.svg`}
                />
            </MenuButton>
            <MenuList zIndex={15}>
                <MenuItem as={RLink} to={'/user/me'}>Account</MenuItem>
                <MenuItem as={RLink} to={'/dashboard'}>Dashboard</MenuItem>
                <MenuDivider/>
                <Logout as={MenuItem}/>
            </MenuList>
        </Menu>
    );
};

export default UserNavMenu;
