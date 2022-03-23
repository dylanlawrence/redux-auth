import NavLink from "./NavLink";
import {Menu, useColorModeValue, VStack} from "@chakra-ui/react";

export default function SidebarMenu() {

    const Links = [
        {label: 'Dashboard', path: '/dashboard'},
        {label: 'Admin Settings', path: '/dashboard/admin'}
    ];

    return (
        <>
            {Links.map((link, i) => (
                <NavLink key={i}
                         to={link.path}
                         px={5}
                         py={5}
                         mt="0"
                         w={'full'}
                         _hover={{
                             textDecoration: 'none',
                             bg: useColorModeValue('blue.200', 'gray.700'),
                         }}
                >
                    {link.label}
                </NavLink>
            ))}
        </>
    );
};
