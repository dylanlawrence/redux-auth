import React, {ReactNode} from "react";
import {ColorProps, Link, LinkProps, ResponsiveValue, useColorMode} from "@chakra-ui/react";
import {Link as RLink} from "react-router-dom";
import {useLocation} from "react-router";


interface NavLinkProps extends LinkProps {
    to: string
}

const NavLink = ({children, ...rest}: NavLinkProps) => {

    const location = useLocation()
    const { colorMode, toggleColorMode } = useColorMode();
    const active = location.pathname === rest.to

    function getBg() {
        let bg = active ? "blue.100" : ''
        if(active && colorMode === "dark"){
            bg = "purple.600"
        }
        return bg
    }

    return (
        <Link as={RLink} bg={ getBg } {...rest}>
            {children}
        </Link>
    )
};

export default NavLink;
