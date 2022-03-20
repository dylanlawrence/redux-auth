import logo from '../../logo.svg';
import burger from '../../images/icons/hamburger.svg';

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
import {selectCurrentUser} from "../../features/auth/authSlice";


export default function Header() {

    const user = useSelector(selectCurrentUser);

    const {isOpen, onOpen, onClose} = useDisclosure();

    return (
        <>
            <Box bg={useColorModeValue('gray.300', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        aria-label={'Open Menu'}
                        display={{md: 'none'}}
                        onClick={isOpen ? onClose : onOpen}
                        icon={<img src={burger}/>}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Flex alignItems={'center'}>

                            <NavLink to="/"><img src={logo}/></NavLink>
                        </Flex>
                        <HStack
                            as={'nav'}
                            spacing={3}
                            display={{base: 'none', md: 'flex'}}>
                            <NavMenu/>
                        </HStack>
                    </HStack>

                    <Flex alignItems={'center'}>
                        {user && <UserNavMenu/>}
                        {!user && <NavLink to="/login">Login</NavLink>}
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
