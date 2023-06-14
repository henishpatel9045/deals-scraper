import { Box, Heading, Text, Button, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function NotFound404() {
  const nav = useNavigate()
  return (
    <Flex alignItems="center" flexDirection="column" justifyContent="center" py={10} px={6} w="100vw" h="100vh">
      <Heading
        display="inline-block"
        as="h1"
        fontSize="8rem"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text">
        404
      </Heading>
      <Text fontSize="2rem" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={'gray.500'} mb={6}>
        The page you're looking for does not seem to exist
      </Text>
      <Button
        colorScheme="teal"
        bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
        color="white"
        w="fit-content"
        variant="solid"
        onClick={() => {
          nav("/auth/login")
        }}
      >
        Go to Home
      </Button>
    </Flex>
  );
}