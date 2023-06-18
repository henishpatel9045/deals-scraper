import React, { useContext, useState } from 'react';
import {
    Flex,
    Heading,
    Input,
    Button,
    useColorModeValue,
    Spinner,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../../api/apis';
import { AuthContext } from '../../context/Context';

const Login = () => {
    const formBackground = useColorModeValue('gray.100', 'gray.700');
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const nav = useNavigate()
    const { isLoggedIn } = useContext(AuthContext)

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async () => {
        setIsLoading(true)
        if (username && password) {
            const data = await getToken(username, password)
            console.log(data);
            if (data?.detail) {
                setIsLoading(false)
                return alert(data.detail)
            }
            localStorage.setItem("JWT", data.token)
            data.token = undefined
            data.success = undefined
            localStorage.setItem("USER", JSON.stringify(data))
            if (data?.city)
                location.href = "/store"
            else
                location.href = "/user"
        }
    }

    return (
        <Flex h="100vh" alignItems="center" justifyContent="center" w="100vw" p="1rem 1rem">
            {/* {isLoading && } */}
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
                <Button colorScheme="teal" mb={3} onClick={handleSubmit}>
                    {isLoading ? <Spinner size="md" /> : "Log In"}
                </Button>
                <Button variant="outline" colorScheme="teal" mb={8} onClick={() => nav("/auth/register")}>
                    New user? Register yourself
                </Button>
            </Flex>
        </Flex>
    );
};

export default Login;
