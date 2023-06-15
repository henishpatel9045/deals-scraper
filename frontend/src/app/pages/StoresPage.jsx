import React, { useEffect, useState } from 'react';
import {

    Stack,
    Text,

} from '@chakra-ui/react';
import StoreCard from '../components/StoreCard';
import { getStores } from '../../api/apis';
import ProfileBtn from '../components/ProfileBtn';

const StoresPage = () => {
    const [stores, setStores] = useState([])

    const getData = async () => {
        const data = await getStores()
        
        setStores(data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <Stack h="100vh" alignItems="center" justifyContent="flex-start" pt="6" w="100vw">
            <ProfileBtn/>
            <Text as={"h2"} pb={6} fontWeight="bold" fontSize="4xl">Stores</Text>
            {stores?.map((val, ind) => {
                return <StoreCard
                storeName={val?.storeName}
                image={val?.image}
                city={val?.totalCities}
                outlets={val?.totalOutlets}
                navigateURL={`/store/${val?.storeName}`} />
            })}
        </Stack>
    );
};

export default StoresPage;
