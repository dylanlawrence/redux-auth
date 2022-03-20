import {
    Input,
    InputGroup,
    InputRightElement,
    VStack,
    Button,
    Divider,
    Center,
    useToast
} from "@chakra-ui/react"
import React, {ChangeEvent, useState} from "react"
import {setCredentials} from "../../features/auth/authSlice"
import {useNavigate} from "react-router-dom"
import {ProtectedComponent} from "./ProtectedComponent"
import {useAppDispatch} from "../../app/hooks"
import {useLoginMutation, LoginRequest, UserResponse} from "../../app/services/auth"

function PasswordInput({name, onChange}: {
    name: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return (
        <InputGroup size="lg">
            <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                name={name}
                onChange={onChange}
            />
            <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                </Button>
            </InputRightElement>
        </InputGroup>
    );
}

export const Login = () => {
        const dispatch = useAppDispatch()
        const navigate = useNavigate()
        const toast = useToast()
        const [formState, setFormState] = useState<LoginRequest>({
            username: '',
            password: '',
        })
        const [$login, {isLoading}] = useLoginMutation()

        const onSubmit = async () => {
            try {
                console.log(formState)
                const user = await $login(formState)
                    .then((credentials) => {
                        console.log(credentials)
                    });
                //.catch((error) => console.error(error))
            } catch (err) {
                console.error(err);
                toast({
                    status: 'error',
                    title: 'Error',
                    description: 'Oh no, there was an error!',
                    isClosable: true,
                })
            }
        };

        const handleChange = ({target: {name, value}}: React.ChangeEvent<HTMLInputElement>) =>
            setFormState((prev) => ({...prev, [name]: value}));

        return (
            <Center h="500px">
                <VStack spacing="4">
                    <InputGroup size="lg">
                        <Input
                            onChange={handleChange}
                            name="username"
                            type="text"
                            placeholder="Username or Email"
                        />
                    </InputGroup>
                    <PasswordInput onChange={handleChange} name="password"/>

                    <Button size="lg"
                            isFullWidth
                            onClick={onSubmit}
                            colorScheme="blue"
                            isLoading={isLoading}
                    >
                        Login
                    </Button>
                </VStack>
            </Center>
        )
            ;
    }
;

export default Login;
