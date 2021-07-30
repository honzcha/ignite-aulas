import { Flex, Button, Stack, FormLabel, FormControl } from '@chakra-ui/react'
import { Input } from '../components/Form/input'

export default function SignIn() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDirection="column"
      >
        <Stack spacing="4">

          <Input type="email" name="email" label="Email"></Input>
          <Input type="password" name="password" label="Password"></Input>

        </Stack>

        <Button type="submit" marginTop="6" colorScheme="pink">Enter</Button>

      </Flex>
    </Flex>
  )
}