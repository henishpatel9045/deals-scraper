import { HStack, Select, Stack, Flex, Text, useColorModeValue, Button, Divider, Box } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react'
import BackNav from '../components/BackNav';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../context/Context';
import { getAllCities } from '../../api/apis';
import ProfileBtn from '../components/ProfileBtn';

export default function OutletSelect() {
    const formBackground = useColorModeValue('gray.100', 'gray.700');
    const { user } = useContext(AuthContext)
    const [cities, setCities] = useState([])
    const [city, setCity] = useState(user?.city)
    const [outlets, setOutlets] = useState([])
    const [outlet, setOutlet] = useState("")
    const param = useParams()
    const nav = useNavigate()

    const getCities = async () => {
        const data = await getAllCities()
        setCities(data)
    }
    useEffect(() => {
        getCities()
        setOutlets(cities?.[city]?.sort())
        setOutlet(cities?.[city]?.[0])
    }, [])
    useEffect(() => {
        getCities()
        setCity(user?.city)
    }, [user])
    useEffect(() => {
        setOutlets(cities?.[city]?.sort())
        setOutlet(cities?.[city]?.[0])
    }, [city, user])

    const handleSubmit = () => {
        nav(`/store/${param.storeName}/${city}/${outlet}/offers`)
    }

    return (
        <Flex h="100vh" w="100vw" alignItems={"center"} justifyContent={"center"}>
            <BackNav to="/store" />
            <ProfileBtn />
            <Stack spacing={10} w={{ sm: "80vw", md: "70vw" }} bg={formBackground} p="5rem 3rem" borderRadius={10}>
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
                <Button type='button' variant="solid" colorScheme='cyan' isDisabled={outlet === "" || !outlet} onClick={handleSubmit}>
                    Get Deals
                </Button>
            </Stack>
        </Flex>
    )
}
