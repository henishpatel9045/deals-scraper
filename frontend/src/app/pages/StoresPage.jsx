import React, { useContext, useEffect, useState } from 'react';
import {
    Box,
    Stack,
    Text,

} from '@chakra-ui/react';
import StoreCard from '../components/StoreCard';
import { getStores } from '../../api/apis';
import ProfileBtn from '../components/ProfileBtn';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/Context';
import Header from '../components/Header';

const StoresPage = () => {
    const [stores, setStores] = useState([])
    const nav = useNavigate()
    const { user } = useContext(AuthContext)

    const getData = async () => {
        const data = await getStores()

        setStores(data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <Stack h="100vh" alignItems="center" justifyContent="flex-start" pt="6" w="100vw">
            <Header />
            {/* <Flex alignItems="flex-end" justifyContent="space-between" flexDirection="row" w={{ base: "90%", lg: "70vw" }}>
                <Box>
                    <HStack pt={10}>
                        <Text as="h2" fontSize={{ base: "xl", lg: "2xl" }} fontWeight={"semibold"}>{user?.city}</Text> <Divider orientation='vertical' /> <Text as="h2" fontSize={{ base: "xl", lg: "2xl" }} fontWeight={"semibold"}>{user?.outletName}</Text>
                    </HStack>
                </Box>
                <Button variant="solid" onClick={() => nav("/user")} colorScheme="cyan">
                    Change Location
                </Button>
            </Flex> */}
            <Stack pt="3rem" alignItems="center">
                <Text as={"h2"} pb={6} fontWeight="bold" fontSize="4xl">Stores</Text>
                {stores?.map((val, ind) => {
                    return <StoreCard
                        key={ind}
                        storeName={val?.storeName}
                        image={val?.image}
                        city={val?.totalCities}
                        outlets={val?.totalOutlets}
                        navigateURL={`/store/${val?.storeName}/${user?.city}/${user?.outlet}/offers`} />
                })}
            </Stack>
        </Stack>
    );
};

export default StoresPage;
