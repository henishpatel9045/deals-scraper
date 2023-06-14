import { Button, Flex, HStack, Stack, Tag, Text, Image, TagLabel, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function StoreCard({ storeName = "", image = "", city = 0, outlets = 0, navigateURL = "/store/lapinoz/" }) {
    const formBackground = useColorModeValue('gray.100', 'gray.700');
    const nav = useNavigate()
    return (
        <HStack
            w={{ md: "80vw", lg: "70vw" }}
            bg={formBackground}
            p={8}
            borderRadius={8}
            boxShadow="lg"
            spacing={6}
        >
            <Image src={image} alt={storeName} w="8rem" h="8rem" />
            <Flex justifyContent="space-between" alignItems="center" h="100%" w="100%" >
                <Stack>
                    <Text as="h2" fontSize="2rem" fontWeight="semibold">{storeName}</Text>
                    <Text as="h3">
                        <Tag variant="subtle" colorScheme='whatsapp'>
                            <TagLabel fontWeight="bold">{city} Cities</TagLabel>
                        </Tag>
                        <Tag variant="subtle" colorScheme='blue'>
                            <TagLabel fontWeight="bold">{outlets} Outlets</TagLabel>
                        </Tag>
                    </Text>
                </Stack>
                <Button colorScheme="teal" mb={8} onClick={() => {
                    location.href = navigateURL
                }} >
                    Select City
                </Button>
            </Flex>
        </HStack>
    )
}
