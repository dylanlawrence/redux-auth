import NavLink from "./NavLink";
import {useColorModeValue} from "@chakra-ui/react";

const NavMenu = () => {

    const Links = [
        {label: 'Home', path: '/'},
        {label: 'Dashboard', path: '/dashboard'}
    ];

    return (
        <>
            {Links.map((link, i) => (
                <NavLink key={i} to={link.path}
                         px={2}
                         py={1}
                         rounded={'md'}
                         _hover={{
                             textDecoration: 'none',
                             bg: useColorModeValue('gray.200', 'gray.700'),
                         }}
                >{link.label}</NavLink>
            ))}
        </>
    );
};

export default NavMenu;
