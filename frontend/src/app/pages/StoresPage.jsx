import React from 'react';
import {

    Stack,
    Text,

} from '@chakra-ui/react';
import StoreCard from '../components/StoreCard';

const StoresPage = () => {


    return (
        <Stack h="100vh" alignItems="center" justifyContent="flex-start" pt="6" w="100vw">
            <Text as={"h1"} pb={6} fontWeight="bold">Stores</Text>
            <StoreCard
                storeName='Lapinoz Pizza'
                image='https://www.uengage.in/images/addo/logos/logo-5-1600769708.png'
                city={10}
                outlets={84}
                navigateURL='/store/lapinoz' />
        </Stack>
    );
};

export default StoresPage;
