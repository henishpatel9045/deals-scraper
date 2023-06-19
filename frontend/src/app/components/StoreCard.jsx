import { Button, Flex, HStack, Stack, Tag, Text, Image, TagLabel, useColorModeValue, Box, Divider, useColorMode } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/Context';

export default function StoreCard({ storeName = "", image = "", city = 0, outlets = 0, navigateURL = "/store/lapinoz/" }) {
    const formBackground = useColorModeValue('gray.100', 'gray.700');
    const { user } = useContext(AuthContext)
    const nav = useNavigate()
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <HStack
            w={{ base: "90%", lg: "70vw" }}
            bg={formBackground}
            p={{ base: 2, lg: 8 }}
            paddingTop={6}
            paddingBottom={6}
            borderRadius={8}
            boxShadow="lg"
            spacing={{ sm: 2, lg: 6 }}
        >
            <Image src={image} alt={storeName} w={{ base: "4rem", md: "5rem" }} h={{ base: "4rem", md: "5rem" }} />
            <Flex justifyContent="space-between" alignItems="center" h="100%" w="100%">
                <Stack mr=".5rem" flex={1}>
                    <Text as="h2" fontSize="2xl" fontWeight="semibold">{storeName}</Text>
                    <Text as="h3">
                        <Tag variant="subtle" colorScheme='whatsapp'>
                            <TagLabel fontSize={{ base: "xs", md: "sm" }} fontWeight="bold">{city} Cities</TagLabel>
                        </Tag>
                        <Tag variant="subtle" colorScheme='blue'>
                            <TagLabel fontSize={{ base: "xs", md: "sm" }} fontWeight="bold">{outlets} Outlets</TagLabel>
                        </Tag>
                    </Text>
                </Stack>
                <HStack spacing={4} mr="1rem">
                    <HStack>
                        <Stack>
                            <Text as="h4" fontSize={{ base: "sm", lg: "md" }} fontWeight={"semibold"} color={colorMode === "dark"
                                ? "white"
                                : 'black'}>Selected City: <span style={{
                                    color: colorMode === "dark"
                                        ? "white"
                                        : 'black'
                                }}>{user?.city}</span></Text>
                            <Divider orientation='horizontal' />
                            <Text as="h4" fontSize={{ base: "sm", lg: "md" }} fontWeight={"semibold"} color={colorMode === "dark"
                                ? "white"
                                : 'black'}>Selected Outlet: <span style={{
                                    color: colorMode === "dark"
                                        ? "white"
                                        : 'black'
                                }}>{user?.outlet || "Kadi"}</span></Text>
                        </Stack>
                    </HStack>
                    <Button variant="solid" onClick={() => nav("/user")} colorScheme="blue">
                        Change Location
                    </Button>
                </HStack>
                <Button size={{ base: "sm", md: "md" }} colorScheme="teal" onClick={() => {
                    location.href = navigateURL
                }} >
                    Get Deals
                </Button>
            </Flex>
        </HStack>
    )
}
