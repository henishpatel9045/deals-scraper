import { AtSignIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Avatar, Button, HStack, IconButton, Menu, MenuButton, MenuItem, MenuList, useColorMode } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/Context'

export default function ProfileBtn() {
    const { user } = useContext(AuthContext)
    const nav = useNavigate()
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <HStack position="absolute" top={{ base: "1.5rem", md: "1rem" }} right={{ base: "0.5rem", md: "1rem" }} spacing={1}>
            <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
            <IconButton onClick={() => nav("/user")}>
                <AtSignIcon />
            </IconButton>
        </HStack>
    )
}
