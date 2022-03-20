import {Center, Container, Flex, Stack, StackDivider, Text} from "@chakra-ui/react";
import React from "react";
import Feature from "../components/Cards/Feature/Feature";

export const Home = () => {
    return (
        <>
            <Container maxW='5xl'  centerContent>
                <h1>Pirate Lingo</h1>
                <Center bg='gray.50'>
                    <Stack
                        direction={{ base: "column", md: "row" }} spacing={4} p={4}
                           divider={<StackDivider borderColor='gray.200'/>}>
                        <Feature
                            title="Ho-ho-ho! power of horror!"
                            desc="Damn yer wench, feed the scallywag. The plunder hoists with amnesty, love the brig until it sings."
                        />
                        <Feature
                            title="Booty, death, and endurance."
                            desc="The seashell hails with madness, lead the brig until it waves. Riddle, strength, and madness."
                        />
                        <Feature
                            title="Beauty, fight, and adventure."
                            desc="Evil halitosis lead to the madness. Shiny, rainy ships swiftly vandalize a gutless, fine cannon."
                        />
                    </Stack>
                </Center>
            </Container>
        </>
    );
}


export default Home;
