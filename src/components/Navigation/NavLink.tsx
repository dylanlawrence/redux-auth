import React, {ReactNode} from "react";
import {Link, useColorModeValue} from "@chakra-ui/react";
import {Link as RLink} from "react-router-dom";


type NavLinkProps = {
    to: string;
    children: ReactNode;
}

const NavLink = (props: NavLinkProps) => (
    <Link as={RLink} to={props.to}
          px={2}
          py={1}
          rounded={'md'}
          _hover={{
              textDecoration: 'none',
              bg: useColorModeValue('gray.200', 'gray.700'),
          }}>
        {props.children}
    </Link>
);

export default NavLink;
