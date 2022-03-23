import {Avatar, Button, HStack, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text} from "@chakra-ui/react";
import {Link as RLink} from "react-router-dom";
import {getCurrentUser} from "../../features/user/userSlice";
import {useSelector} from "react-redux";
import {Logout} from "../Auth/Logout";

const UserNavMenu = () => {

    const user = useSelector(getCurrentUser);

    return (
        <Menu>
            <HStack
                as={'nav'}
                spacing={3}
                display={{base: 'none', md: 'flex'}}>
                <MenuButton p={3}><Text fontSize='xs' color="blue.700">{user?.email}</Text></MenuButton>
            </HStack>
            <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                    size={'sm'}
                    src={`https://avatars.dicebear.com/api/avataaars/${user?.avatar}`}
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
