import logo from '../../logo.svg';

import {
    Box,
    Flex,
    HStack,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Stack
} from '@chakra-ui/react';
import NavMenu from "../Navigation/NavMenu";
import UserNavMenu from "../Navigation/UserNavMenu";
import NavLink from "../Navigation/NavLink";
import {useSelector} from "react-redux";
import {getCurrentAuth} from "../../features/auth/authSlice";
import {GoThreeBars} from "react-icons/all";
import {getUserLoggedIn} from "../../features/user/userSlice";


export default function Header() {

    const user = useSelector(getCurrentAuth);
    const loggedIn = useSelector(getUserLoggedIn);

    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <>
            <Box bg={useColorModeValue('gray.300', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton size={'sm'}
                                aria-label={'Open Menu'} p={1}
                                display={{md: 'none'}}
                                color="blue.400"
                                onClick={isOpen ? onClose : onOpen}
                                icon={<GoThreeBars size={24}/>}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Flex alignItems={'center'}>
                            <NavLink to="/" bg=''><img src={logo}/></NavLink>
                        </Flex>
                        <HStack
                            as={'nav'}
                            spacing={3}
                            display={{base: 'none', md: 'flex'}}>
                            <NavMenu/>
                        </HStack>
                    </HStack>

                    <Flex alignItems={'center'}>
                        {loggedIn && <UserNavMenu/>}
                        {!loggedIn && <NavLink to="/login" bg="">Login</NavLink>}
                    </Flex>

                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{md: 'none'}}>
                        <Stack as={'nav'} spacing={4}>
                            <NavMenu/>
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}
