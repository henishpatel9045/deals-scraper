import { Badge, Button, Divider, Flex, HStack, Link, Spinner, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useColorModeValue } from '@chakra-ui/react'
import BackNav from '../components/BackNav';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getOffers } from '../../api/apis';
import ProfileBtn from '../components/ProfileBtn';

export default function Deals() {
    const formBackground = useColorModeValue('gray.100', 'gray.700');
    const [data, setData] = useState(null)
    const [message, setMessage] = useState(null)

    const { city, storeName, outletName } = useParams()
    const nav = useNavigate()
    const getData = async () => {
        const offers = await getOffers(city, outletName)
        if (!offers)
            return alert("Problem connecting to network.")
        if (offers?.detail)
            return setMessage(offers.detail)
        setData(offers)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <Flex flexDirection="column" h="100vh" w="100vw" p="5" pt={{base: "6rem", lg: "5"}} justifyContent={data ? "normal" : "center"}>
            <BackNav to={`/store`} />
            <ProfileBtn/>
            {data ? <>
                <Text as="h1" alignSelf={"center"} fontWeight={"bold"} fontSize={{base: "4xl"}}>
                    {storeName}
                </Text>
                <HStack pt={10}>
                    <Text as="h2" fontSize={{base: "xl", lg: "2xl"}} fontWeight={"semibold"}>{city}</Text> <Divider orientation='vertical' /> <Text as="h2" fontSize={{base: "xl", lg: "2xl"}} fontWeight={"semibold"}>{outletName}</Text>
                </HStack>
                <TableContainer pt={4} overflowY={"scroll"}>
                    <Table bg={formBackground} variant="striped" colorScheme='facebook' w="100%" borderRadius={10} >
                        <Thead>
                            <Tr>
                                <Th>Sr. No.</Th>
                                <Th>Offer</Th>
                                <Th>Promo Code</Th>
                                <Th>URL</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data?.map((e, ind) => <Tr key={ind}>
                                <Td>
                                    {ind + 1}.
                                </Td>
                                <Td
                                    maxW={{base: "80vw", lg: "40vw"}}
                                    wordBreak={{base: "normal", lg:"break-word"}}
                                    whiteSpace="normal"
                                >{e?.offer}</Td>
                                <Td><Badge borderRadius={5} variant="outline" onClick={e => navigator.clipboard.writeText(e?.promo)} _hover={{ cursor: "pointer" }} colorScheme='cyan'>{e?.promo}</Badge></Td>
                                <Td>
                                    <a target='_blank' href={e?.url}>
                                        <Button variant="ghost" colorScheme='cyan'>OPEN</Button>
                                    </a>
                                </Td>
                            </Tr>)}
                        </Tbody>
                    </Table>
                </TableContainer></>
                : message ? <Text alignSelf="center">{message}</Text>
                    : <Spinner
                        size="xl"
                        colorScheme='cyan'
                        alignSelf="center"
                    />}
        </Flex>
    )
}
