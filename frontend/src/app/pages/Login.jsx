import React, {useState} from 'react';
import {
    Flex,
    Heading,
    Input,
    Button,
    FormControl,
    FormLabel,
    Switch,
    useColorMode,
    useColorModeValue,
} from '@chakra-ui/react';

const Login = () => {
    const { toggleColorMode } = useColorMode();
    const formBackground = useColorModeValue('gray.100', 'gray.700');
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = () => {
        if (username && password) {
            localStorage.setItem("USERNAME", username)
            localStorage.setItem("JWT", "JWT TOKEN")
        }
    }

    return (
        <Flex h="100vh" alignItems="center" justifyContent="center" w="100vw">
            <Flex
                w={{ md: "50vw", lg: "30vw" }}
                flexDirection="column"
                bg={formBackground}
                p={12}
                borderRadius={8}
                boxShadow="lg"
            >
                <Heading mb={6}>Log In</Heading>
                <Input
                    placeholder="username"
                    type="email"
                    variant="filled"
                    mb={3}
                    onChange={handleUsernameChange}
                />
                <Input
                    placeholder="**********"
                    type="password"
                    variant="filled"
                    mb={6}
                    onChange={handlePasswordChange}
                />
                <Button colorScheme="teal" mb={8} onClick={handleSubmit}>
                    Log In
                </Button>
                <FormControl display="flex" alignItems="center">
                    <FormLabel htmlFor="dark_mode" mb="0">
                        Enable Dark Mode?
                    </FormLabel>
                    <Switch
                        id="dark_mode"
                        colorScheme="teal"
                        size="lg"
                        onChange={toggleColorMode}
                    />
                </FormControl>
            </Flex>
        </Flex>
    );
};

export default Login;
