import React from "react";
import {Box, Flex, FlexProps} from "@chakra-ui/react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { ErrorBoundary } from "../components/Error/ErrorBoundary";
import SubHeader from "../components/Header/SubHeader";


export const Layout = ({children, ...rest}: FlexProps) => {
    return (
        <ErrorBoundary>
            <Flex direction="column" minHeight="100vh" {...rest}>
                <Header/>
                <SubHeader/>
                    <Box flex="1">
                        {children}
                    </Box>
                <Footer/>
            </Flex>
        </ErrorBoundary>
    )
}
