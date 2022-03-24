import {
  HStack,
  Button,
  Text,
  Box,
  Flex,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { BiAccessibility } from "react-icons/bi";
import { FaAccessibleIcon, FaBlind, FaDeaf, FaMoon, FaSun } from "react-icons/fa";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../../features/user/userSlice";

export default function SubHeader() {
  const user = useSelector(getCurrentUser);
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex>
      <Flex 
        p={3}
        flex="1"
        justifyContent="flex-end"
        display={{ base: "none", md: "flex" }}
      >
      <IconButton
        size={"sm"}
        aria-label={"Toggle Accessibility Mode"}
        icon={<FaDeaf />}
      >
      </IconButton>

      <IconButton
        size={"sm"}
        aria-label={"Toggle Light Mode"}
        icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
        onClick={toggleColorMode}
      >
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </IconButton>
        <Text fontSize="xs" color="blue.700">
          {user?.email}
        </Text>
      </Flex>
    </Flex>
  );
}
