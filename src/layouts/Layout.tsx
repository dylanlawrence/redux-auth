import {Box, Flex, FlexProps} from "@chakra-ui/react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import React from "react";


export const Layout = ({children, ...rest}: FlexProps) => {
    return (
        <>
            <Flex direction="column" minHeight="100vh" {...rest}>
                <Header/>
                    <Box flex="1">
                        {children}
                    </Box>
                <Footer/>
            </Flex>
        </>
    )
}
