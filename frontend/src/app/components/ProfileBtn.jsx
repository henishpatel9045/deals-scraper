import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import {FaUserAlt} from "react-icons/fa"
import {BiLogOut} from "react-icons/bi"
import { Button, HStack, IconButton, Menu, MenuButton, MenuItem, MenuList, useColorMode } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/Context'

export default function ProfileBtn({position=true}) {
    const { user } = useContext(AuthContext)
    const nav = useNavigate()
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <HStack position={position ? "absolute" : "relative"} top={position ? { base: "1.5rem", md: "1rem" } : "0.5rem"} right={position?{ base: "0.5rem", md: "1rem" }:0} spacing={1}>
            <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
            <IconButton onClick={() => {
                localStorage.removeItem("USER")
                localStorage.removeItem("JWT")
                nav("/auth/login")
            }}>
                <BiLogOut />
            </IconButton>
            <IconButton onClick={() => nav("/user")}>
                <FaUserAlt />
            </IconButton>
        </HStack>
    )
}
