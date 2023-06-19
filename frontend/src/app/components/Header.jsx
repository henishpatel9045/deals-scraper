import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import ProfileBtn from './ProfileBtn'

export default function Header() {
    return (
        <Flex w="100vw"
            position="absolute"
            top={0}
            p="0rem 2rem"
            pb={"1rem"}
            alignItems="center"
            justifyContent={"space-between"}
        boxShadow={"0 2px 8px rgba(0,0,0,.1)"}
            >
            <Text as="h1"
                fontSize={"5xl"}
                fontWeight={"bold"}
                color="#91e5e7"
              >  sugar
            </Text>
            <ProfileBtn position={false} />
        </Flex>
    )
}
