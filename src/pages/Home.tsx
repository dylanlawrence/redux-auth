import {Button, Center, Container, Flex, Heading, Stack, StackDivider, Text} from "@chakra-ui/react";
import React from "react";
import Feature from "../components/Cards/Feature/Feature";

export const Home = () => {
    return (
        <>
            <Flex direction="column">

                <Container maxW={'5xl'}>
                    <Stack
                        textAlign={'center'}
                        align={'center'}
                        spacing={{base: 8, md: 10}}
                        py={{base: 20, md: 28}}>
                        <Heading
                            fontWeight={600}
                            fontSize={{base: '3xl', sm: '4xl', md: '6xl'}}
                            lineHeight={'110%'}>
                            Awesome{' '}
                            <Text as={'span'} color={'orange.400'}>
                                Home Page
                            </Text>
                        </Heading>
                        <Text color={'gray.500'} maxW={'2xl'}>Damn yer sea-dog, feed the swabbie,</Text>
                        <Text color={'gray.500'} maxW={'3xl'}>Lads grow with hunger at the sunny tortuga! Hobble darkly
                            like a wet pants.</Text>
                        <Stack spacing={6} direction={'row'}>
                            <Button
                                rounded={'full'}
                                px={6}
                                colorScheme={'orange'}
                                bg={'orange.400'}
                                _hover={{bg: 'orange.500'}}>
                                Get started
                            </Button>
                            <Button rounded={'full'} px={6}>
                                Learn more
                            </Button>
                        </Stack>
                    </Stack>
                </Container>

                <Container maxW='5xl' mb={10} centerContent>
                    <h2><Text fontSize="3xl" pt={5}>ARRRR! Pirate Lingo</Text></h2>
                    <Center bg='gray.50' p={3}>
                        <Stack
                            direction={{base: "column", md: "row"}} spacing={4} p={4}
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

            </Flex>
        </>
    );
}


export default Home;
