import { Avatar, HStack, Select, Stack, Flex, Text, useColorModeValue, Input, Button } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/Context';
import { getAllCities, updateCity } from '../../api/apis';
import BackNav from '../components/BackNav';
import { useNavigate } from 'react-router-dom';

export default function UserDetail() {
    const formBackground = useColorModeValue('gray.100', 'gray.700');
    const { user = {}, jwt } = useContext(AuthContext)
    const [city, setCity] = useState("")
    const [citiesName, setCitiesName] = useState([])
    const nav = useNavigate()

    const handleSubmit = async () => {
        const data = await updateCity(jwt, city)
        localStorage.setItem("USER", JSON.stringify(data))
        if (data?.detail)
            alert(data.detail)
        return nav("/store")
    }

    const getCities = async () => {
        let cities = await getAllCities()
        cities = Object.keys(cities)
        setCitiesName(cities)
    }

    useEffect(() => {
        setCity(user?.city)
        getCities()
    }, [user])

    return (
        <Flex h="100vh" w="100vw" alignItems={"center"} justifyContent={"center"}>
        <BackNav to='/store' />
            <Stack spacing={10} w={{ sm: "80vw", md: "70vw" }} bg={formBackground} p="5rem 3rem" borderRadius={10}>
                <HStack spacing={6}>
                    <Avatar name={user?.username} />
                    <Text as="h2" fontSize={"2xl"}>
                        @{user?.username}
                    </Text>
                </HStack>
                <HStack spacing={10}>
                    <Text fontWeight={"bold"} fontSize={"xl"}>
                        City:
                    </Text>
                    <Select variant="outline" value={city} onChange={e => setCity(e.target.value)}>
                        {
                            citiesName?.map((val, ind) => {
                                return <option key={ind} value={val}>{val}</option>
                            })
                        }
                    </Select>
                </HStack>
                <Button type='button' variant="solid" colorScheme='cyan' onClick={handleSubmit} isDisabled={!jwt}>
                    Save
                </Button>
            </Stack>
        </Flex>
    )
}
