import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, HStack, Icon, Text } from '@chakra-ui/react'
import { ArrowBackIcon } from "@chakra-ui/icons"

export default function BackNav({ to = "/home" }) {
    const nav = useNavigate()

    return (
        <Button variant="outline" colorScheme='cyan' onClick={() => nav(to)} position={"absolute"} left={"2rem"} top={"2rem"}>
            <HStack spacing={2}>
                <Icon as={ArrowBackIcon} />
                <Text>Back</Text>
            </HStack>
        </Button>
    )
}
