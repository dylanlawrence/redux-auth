import {
    Badge,
    Box,
    Button,
    Center,
    Flex,
    FormControl,
    FormLabel,
    Input,
    InputElementProps,
    InputGroup,
    InputLeftElement,
    InputProps,
    Stack,
    Textarea,
    useColorModeValue
} from "@chakra-ui/react";

import {FaBuilding, FaEnvelope, FaPhone, FaUser,} from "react-icons/fa";
import {BiCalendar} from "react-icons/bi";
import {ImEarth} from "react-icons/im";

import {useEffect, useState} from "react";
import {User} from "../../features/user/user.types";
import {useSelector} from "react-redux";
import {defaultUserState, getCurrentUser} from "../../features/user/userSlice";
import {IMaskInput} from "react-imask";
import {IMaskInputProps} from "react-imask/dist/mixin";


type _FloatyTypes = (Partial<IMaskInputProps> & Partial<InputProps> ) & {
    label?: string
    value?: any
    icon?: JSX.Element
    as?: any
}
/*
type FloatyProps = Partial<_FloatyTypes> & { 
    type?: any 
}*/

type FloatyProps = Omit<_FloatyTypes, "accept" | "ref"> 

function Floaty({label, icon, ...rest}: FloatyProps) {
    return (
        <FormControl variant='floating'>
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    color='blue.400'
                    children={icon}
                    py={6}
                />
                <Input py={6} placeholder=' ' {...rest} />
                <FormLabel>{label}</FormLabel>
            </InputGroup>
        </FormControl>
    );
}

export default function UserProfile() {

    const user = useSelector(getCurrentUser) as User;
    const [state, setState] = useState<User>(defaultUserState.user as User);

    useEffect(() => {
        return setState(user);
    }, [user]);

    const update = (event: any) => {
        setState((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            };
        })
    }

    const updateProfile = (event: any) => {

        setState((prev) => {
            let r = {
                ...prev,
                profile: {
                    ...prev.profile,
                    [event.target.name]: event.target.value
                },
            }
            return r;
        })
    }
    const PhoneMask = "(000)000-0000";
    //const EmailMask = /^\S*@?\S*$/;

    return (
        <Center justifyContent="center">
        <Box maxW={{base:"100%",lg:"760", xl:"800"}}>
            <Stack spacing={8} p={8} bg={useColorModeValue("gray.100", "gray.700")}>

                <Stack direction='row' justifyContent="flex-end">
                    {state?.roles?.map((r, i) => {
                        return <Badge key={i} variant='outline'>{r}</Badge>
                    })}
                </Stack>

                <Floaty value={state?.email} type="email" label="Email" name="email" icon={<FaEnvelope/>}
                        onChange={update}/>

                <Floaty value={state?.profile?.name} type="text" label="Username" name="name" icon={<FaUser/>}
                        onChange={updateProfile}/>

                <Floaty value={state?.profile?.phone}
                        type="tel"
                        as={IMaskInput}
                        label="Phone"
                        name="phone"
                        icon={<FaPhone/>}
                        onChange={updateProfile}
                        mask={PhoneMask}
                        onAccept={
                            (value, mask) => console.log(value)
                        }
                />

                <Floaty value={state?.profile?.dob} type="date" label="Date of Birth" name="dob" icon={<BiCalendar/>}
                        onChange={updateProfile}/>
                <Floaty value={state?.profile?.address} type="text" label="Address" name="address" icon={<ImEarth/>}
                        onChange={updateProfile}/>
                <Floaty value={state?.profile?.company} type="text" label="Company" name="company" icon={<FaBuilding/>}
                        onChange={updateProfile}/>

                <FormControl variant='floating'>
                    <Textarea
                        value={state?.profile?.about}
                        name="about"
                        onChange={updateProfile}
                        placeholder=' '
                        size='sm'
                        py={8}
                        px={10}
                    />
                    <FormLabel>About</FormLabel>
                </FormControl>

                <Button colorScheme="blue" size="lg">Save Profile</Button>

            </Stack>
            {JSON.stringify(state)}
        </Box>
        </Center>
        );
}
