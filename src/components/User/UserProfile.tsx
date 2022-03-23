import {
    Badge,
    Box,
    Button,
    FormControl,
    FormLabel,
    Input, InputElementProps,
    InputGroup,
    InputLeftElement, InputProps,
    Stack, Textarea
} from "@chakra-ui/react";

import {FaBuilding, FaEnvelope, FaPhone, FaUser,} from "react-icons/fa";
import {BiCalendar} from "react-icons/bi";
import {ImEarth} from "react-icons/im";

import {useEffect, useState} from "react";
import {User} from "../../features/user/user.types";
import {useSelector} from "react-redux";
import {getCurrentUser} from "../../features/user/userSlice";
import InputMask, {Props} from "react-input-mask";


type _FloatyTypes = { type?: any } & Partial<InputProps> & Partial<Props> & {
    label: string
    value?: any
    icon: JSX.Element
}

type FloatyTypes = Partial<_FloatyTypes> &
    { type?: any }

function Floaty({label, icon, ...rest}: FloatyTypes) {
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
    const user = useSelector(getCurrentUser);
    const [state, setState] = useState<User>({});

    useEffect(() => {
        console.log('SET USER')
        // @ts-ignore
        setState(user)
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
            return {
                ...prev,
                profile: {
                    ...prev.profile,
                    [event.target.name]: event.target.value
                },
            }
        })
    }


    return (
        <Box>
            <Stack spacing={8} p={8} bg="gray.100">

                <Stack direction='row' justifyContent="flex-end">
                    {state?.roles?.map((r, i) => {
                        return <Badge variant='outline'>{r}</Badge>
                    })}
                </Stack>

                <Floaty value={state?.email} type="email" label="Email" name="email" icon={<FaEnvelope/>}
                        onChange={update}/>

                <Floaty value={state?.profile?.phone}
                        type="tel"
                        as={InputMask}
                        mask="(+1) 999 999 9999"
                        label="Phone" name="phone"
                        icon={<FaPhone/>}
                        onChange={updateProfile}/>
                <Floaty value={state?.profile?.name} type="text" label="Username" name="name" icon={<FaUser/>}
                        onChange={updateProfile}/>

                <Floaty value={state?.profile?.dob} type="date" label="Date of Birth" name="dob" icon={<BiCalendar/>}
                        onChange={updateProfile}/>
                <Floaty value={state?.profile?.address} type="text" label="Address" name="address" icon={<ImEarth/>}
                        onChange={updateProfile}/>
                <Floaty value={state?.profile?.company} type="text" label="Company" name="company" icon={<FaBuilding/>}
                        onChange={updateProfile}/>

                <FormControl variant='floating'>
                    <Textarea
                        value={user?.profile?.about}
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
        </Box>);
}
