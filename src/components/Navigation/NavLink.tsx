import React, {ReactNode} from "react";
import {Link, LinkProps} from "@chakra-ui/react";
import {Link as RLink} from "react-router-dom";
import {useLocation} from "react-router";


interface NavLinkProps extends LinkProps {
    to: string
}

const NavLink = ({children, ...rest}: NavLinkProps) => {

    const location = useLocation()
    const active = location.pathname === rest.to

    return (
        <Link as={RLink}
              bg={active ? "blue.100" : ''}
              {...rest}
        >
            {children}
        </Link>
    )
};

export default NavLink;
