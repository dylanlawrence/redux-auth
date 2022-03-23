import {Box, Flex} from "@chakra-ui/react";
import {Routes, Route, Navigate} from "react-router";
import RequireAuth from "../components/Auth/RequireAuth";
import LineChart from "../components/Charts/LineChart";


function AdminSettings() {
    return (
        <Box>
            Admin
            <LineChart></LineChart>
        </Box>
    );
}


export const Dashboard = () => {
    return (
        <Flex direction="column">
            <Box>
                Dashboard
            </Box>

            <Routes>
                <Route path="/" element={<Box>Normal Dash</Box>}/>
                <Route path="admin" element={<RequireAuth requires={{role: "admin"}}><AdminSettings/></RequireAuth>}>
                    <Route path="settings" element={<RequireAuth requires={{role: "admin"}}><AdminSettings/></RequireAuth>}/>
                </Route>
            </Routes>

        </Flex>
    )
}
