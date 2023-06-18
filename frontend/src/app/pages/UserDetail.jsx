import { Avatar, HStack, Select, Stack, Flex, Text, useColorModeValue, Input, Button, Spinner, Divider } from '@chakra-ui/react';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { AuthContext } from '../../context/Context';
import { getAllCities, updateCity } from '../../api/apis';
import BackNav from '../components/BackNav';
import { useNavigate } from 'react-router-dom';

export default function UserDetail() {
    const formBackground = useColorModeValue('gray.100', 'gray.700');
    const { user = {}, jwt, setUser } = useContext(AuthContext)
    const [cities, setCities] = useState([])
    const [city, setCity] = useState(user?.city)
    const [outlets, setOutlets] = useState([])
    const [outlet, setOutlet] = useState(user?.outlet)
    const [isLoading, setIsLoading] = useState(false)
    const nav = useNavigate()
    const initialRed = useRef()

    const handleSubmit = async () => {
        setIsLoading(true)
        const data = await updateCity(jwt, city, outlet)
        console.log(outlet);
        localStorage.setItem("USER", JSON.stringify(data))
        if (data?.detail) {
            setIsLoading(false)
            alert(data.detail)
        }
        setUser(data)
        return nav("/store")
    }

    const getCities = async () => {
        const data = await getAllCities()
        setCities(data)
    }
    useEffect(() => {
        getCities()
    }, [])

    useEffect(() => {
        setOutlets(cities?.[city]?.sort())
    }, [city, cities])

    useEffect(() => {
        if (city === user?.city)
            setOutlet(user?.outlet)
        else
            setOutlet(outlets?.[0])
    }, [outlets])

    return (
        <Flex h="100vh" w="100vw" alignItems={"center"} justifyContent={"center"}>
            <BackNav to='/store' />
            <Stack spacing={10} w={{ base: "90vw", lg: "70vw" }} bg={formBackground} p="5rem 3rem" borderRadius={10}>
                <HStack spacing={6}>
                    <Avatar name={user?.username} />
                    <Text as="h2" fontSize={"2xl"}>
                        @{user?.username}
                    </Text>
                </HStack>
                <Flex alignItems="center" justifyContent="center" gap={1} flexDirection={{ base: "column", md: "row" }}>
                    <HStack w="100%">
                        <Text fontWeight={"bold"} fontSize={"xl"}>
                            City:
                        </Text>
                        <Select variant="outline" value={city} onChange={e => setCity(e.target.value)}>
                            {
                                Object.keys(cities).sort()?.map((val, ind) => <option value={val} key={ind}>{val}</option>)
                            }
                        </Select>
                    </HStack>
                    <Divider orientation={{ base: "horizontal", md: 'vertical' }} />
                    <HStack w="100%">
                        <Text fontWeight={"bold"} fontSize={"xl"}>
                            Outlet:
                        </Text>
                        <Select variant="outline" value={outlet} onChange={e => setOutlet(e.target.value)}>
                            {
                                outlets?.map((val, ind) => <option value={val} key={ind}>{val}</option>)
                            }
                        </Select>
                    </HStack>
                </Flex>
                <Button type='button' variant="solid" colorScheme='cyan' onClick={handleSubmit} isDisabled={!city || !outlet}>
                    {isLoading ? <Spinner size="md" /> : "Save"}
                </Button>
            </Stack>
        </Flex>
    )
}
