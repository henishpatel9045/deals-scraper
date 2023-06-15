import { Button, Flex, HStack, Stack, Tag, Text, Image, TagLabel, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function StoreCard({ storeName = "", image = "", city = 0, outlets = 0, navigateURL = "/store/lapinoz/" }) {
    const formBackground = useColorModeValue('gray.100', 'gray.700');
    const nav = useNavigate()
    return (
        <HStack
            w={{ sm: "10%", lg: "70vw" }}
            bg={formBackground}
            p={{ base: 2, lg: 8 }}
            paddingTop={6}
            paddingBottom={6}
            borderRadius={8}
            boxShadow="lg"
            spacing={{ sm: 2, lg: 6 }}
        >
            <Image src={image} alt={storeName} w={{base: "4rem", md: "5rem"}} h={{base: "4rem", md: "5rem"}} />
            <Flex justifyContent="space-between" alignItems="center" h="100%" w="100%">
                <Stack mr=".5rem">
                    <Text as="h2" fontSize="2xl" fontWeight="semibold">{storeName}</Text>
                    <Text as="h3">
                        <Tag variant="subtle" colorScheme='whatsapp'>
                            <TagLabel fontSize={{base: "xs", md: "sm"}} fontWeight="bold">{city} Cities</TagLabel>
                        </Tag>
                        <Tag variant="subtle" colorScheme='blue'>
                            <TagLabel fontSize={{base: "xs", md: "sm"}} fontWeight="bold">{outlets} Outlets</TagLabel>
                        </Tag>
                    </Text>
                </Stack>
                <Button size={{base: "sm", md: "md"}} colorScheme="teal" onClick={() => {
                    location.href = navigateURL
                }} >
                    Select City
                </Button>
            </Flex>
        </HStack>
    )
}
