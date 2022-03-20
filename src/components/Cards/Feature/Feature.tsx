import {Box, BoxProps, Heading, Text} from "@chakra-ui/react";
import React from "react";

type FeatureProps = {
    title: string;
    desc: string;
    rest?: BoxProps;
}
const Feature: React.FC<FeatureProps> = ({title, desc, ...rest}) => {
    return (
        <Box
            p={5}
            shadow='md'
            borderWidth='1px'
            flex='1'
            borderRadius='md'
            bg="white"
            _hover={{
                background: "gray.100",
                cursor: "pointer"
            }}
            {...rest}
        >
            <Heading fontSize='xl'>{title}</Heading>
            <Text mt={4}>{desc}</Text>
        </Box>
    )
}

export default Feature;
