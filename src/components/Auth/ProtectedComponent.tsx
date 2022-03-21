import * as React from "react";
import {Center, VStack, Box, Button, Container} from "@chakra-ui/react";
import {useProtectedMutation} from "../../app/services/auth";

export function ProtectedComponent() {

    const [attemptAccess, {data, error, isLoading}] = useProtectedMutation();



    return (
        <Container maxW='5xl' centerContent>
            <Center w="400px">
                <VStack p={5}>

                    <Box>
                        <Button onClick={(e) => {
                            attemptAccess(e).then((r) => console.log(r))
                        }} isLoading={isLoading}>
                            Auth Request
                        </Button>
                    </Box>

                    <Box>
                        <Button onClick={(e) => {
                            attemptAccess(e).then((r) => console.log(r))
                        }} isLoading={isLoading}>
                            Role Request
                        </Button>
                    </Box>

                    <Box>
                        <Button onClick={(e) => {
                            attemptAccess(e).then((r) => console.log(r))
                        }} isLoading={isLoading}>
                           Admin Request
                        </Button>
                    </Box>

                    <Box>
                        {data ? (
                            <>Data: {JSON.stringify(data)}</>
                        ) : error ? (
                            <>Error: {JSON.stringify(error)}</>
                        ) : null}
                    </Box>
                </VStack>
            </Center>
        </Container>
    );
}
