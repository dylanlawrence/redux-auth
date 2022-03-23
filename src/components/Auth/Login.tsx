import {
    Input,
    InputGroup,
    InputRightElement,
    VStack,
    Button,
    Center,
    useToast, Box, Select
} from "@chakra-ui/react"
import React, {ChangeEvent, useEffect, useState} from "react"
import {setCredentials} from "../../features/auth/authSlice"
import {useNavigate} from "react-router-dom"
import {useAppDispatch} from "../../app/hooks"
import {LoginRequest} from "../../features/auth/auth.types";
import {useLoginMutation} from "../../app/services/auth";
import {getCurrentUser, getUserLoggedIn, setUser} from "../../features/user/userSlice";
import {useSelector} from "react-redux";
import {Logout} from "./Logout";
import {mockUsers} from "../../mocks/userMocks";

function PasswordInput({name, onChange, value}: {
    name: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    value: string
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
                value={value}
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

        const loggedIn = useSelector(getUserLoggedIn);

        const user = useSelector(getCurrentUser);

        const dispatch = useAppDispatch()
        const navigate = useNavigate()
        const toast = useToast()

        const [formState, setFormState] = useState<LoginRequest>({
            username: '',
            password: '',
        })
        const [$login, {isLoading}] = useLoginMutation()

        const onSubmit = async () => {

            await $login(formState)
                .unwrap()
                .then((user) => {
                    dispatch(setCredentials(user))
                    dispatch(setUser(user))
                    navigate('/dashboard');
                })
                .catch((error) => {

                    toast({
                        status: 'error',
                        title: error.data.message,
                        /*      description: error.data.message, */
                        isClosable: true,
                    })

                })

        };

        const handleChange = ({target: {name, value}}: ChangeEvent<HTMLInputElement>) =>
            setFormState((prev) => ({...prev, [name]: value}));


        const [mockUser, setMockUser] = useState<string>('')
        useEffect(() => {
            setFormState({username: mockUser, password: mockUser});
        }, [mockUser]);

        return (
            <>
                <Center p={5}>
                    {!loggedIn &&
                      <VStack spacing="5" border="5px solid" borderColor="gray.200" p={8} borderRadius={12}>
                        <InputGroup size="lg">
                          <Input
                            onChange={handleChange}
                            name="username"
                            type="text"
                            value={formState.username}
                            placeholder="Username or Email"
                          />
                        </InputGroup>
                        <PasswordInput onChange={handleChange} name="password" value={formState.password}/>
                        <Button size="lg"
                                isFullWidth
                                onClick={onSubmit}
                                colorScheme="gray"
                                isLoading={isLoading}
                        >
                          Login
                        </Button>
                      </VStack>
                    }
                    {loggedIn && <VStack spacing="5" bg={"gray.500"} p={8} borderRadius={12}>
                      <Box>Access Denied</Box>
                      <Logout as={Button}/>
                    </VStack>}
                </Center>

                {!loggedIn && process.env.NODE_ENV === 'development' &&
                  <Center>

                    <VStack border="5px solid" borderColor="purple.100" p={2} borderRadius={12}>

                      <Select placeholder='Select Mock User' onChange={(e) => {
                          let v = e?.target?.value;
                          setMockUser(v)
                      }
                      }>
                          {mockUsers.map((u, i) => {
                              return (
                                  <option key={i} value={u.username}>{u.profile.name}
                                      - ({u.roles.toString()})
                                  </option>
                              )
                          })}


                      </Select>

                    </VStack>
                  </Center>
                }
            </>
        )
    }
;

export default Login;
