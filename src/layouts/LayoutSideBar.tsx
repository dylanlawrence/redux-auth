import {
    Box,
    BoxProps,
    Text,
    CloseButton,
    Flex,
    FlexProps,
    useColorModeValue,
    useDisclosure,
    VStack
} from "@chakra-ui/react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import React from "react";
import SidebarMenu from "../components/Navigation/SidebarMenu";
import NavLink from "../components/Navigation/NavLink";
import logo from "../logo.svg";

export const LayoutSideBar = ({children, ...rest}: FlexProps) => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    return (
        <>
            <Sidebar onClose={() => onClose}
                     display={{base: 'none', md: 'block'}}/>
            <Flex ml={{base: 0, md: 60}} direction="column" minHeight="100vh" {...rest}>
                <Header/>
                <Box flex="1" p={4}>
                    {children}
                </Box>
                <Footer/>
            </Flex>
        </>
    )
}

interface SidebarProps extends BoxProps {
    onClose: () => void;
}

const Sidebar = ({onClose, ...rest}: SidebarProps) => {
    return (
        <Box
            transition="1s ease"
            bg={useColorModeValue('gray.500', 'gray.900')}
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{base: 'full', md: 60}}
            pos="fixed"
            h="full"
            {...rest}>

            <VStack h="20" alignItems="center" justifyContent="space-between">
                <Flex alignItems={'center'} p={5}>
                    <NavLink to="/" bg=''><img src={logo}/></NavLink>
                </Flex>
                <CloseButton display={{base: 'flex', md: 'none'}} onClick={onClose}/>
                <SidebarMenu/>
            </VStack>

        </Box>
    );
};
