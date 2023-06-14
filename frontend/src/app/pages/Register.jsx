import React, { useState } from 'react';
import {
    Flex,
    Heading,
    Input,
    Button,
    useColorModeValue,
} from '@chakra-ui/react';
import { createUser } from '../../api/apis';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const formBackground = useColorModeValue('gray.100', 'gray.700');
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const nav = useNavigate()

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value)
    }

    const handleSubmit = async () => {
        if (username && password) {
            if (password !== confirmPassword)
                return alert("Password dose not match.")

            const data = await createUser(username, password)

            if (data?.detail)
                return alert(data.detail)
            nav("/auth/login")
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
                <Heading mb={6}>Register</Heading>
                <Input
                    placeholder="username"
                    type="email"
                    variant="filled"
                    mb={3}
                    onChange={handleUsernameChange}
                />
                <Input
                    placeholder="Your password."
                    type="password"
                    variant="filled"
                    mb={3}
                    onChange={handlePasswordChange}
                />
                <Input
                    placeholder="Confirm your password"
                    type="text"
                    variant="filled"
                    mb={6}
                    onChange={handleConfirmPasswordChange}
                />
                <Button colorScheme="teal" mb={3} onClick={handleSubmit}>
                    Register
                </Button>
                <Button variant="outline" colorScheme="teal" mb={8} onClick={() => nav("/auth/login")}>
                    Already a user? Login
                </Button>
            </Flex>
        </Flex>
    );
};

export default Register;
