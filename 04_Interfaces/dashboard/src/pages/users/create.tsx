import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";

import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver }  from '@hookform/resolvers/yup'

import { Input } from "../../components/Form/input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebard";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required("Name needed"),
  email: yup.string().required("Email needed").email("Email invalid"),
  password: yup.string().required("Password needed").min(6, "Minimum 6 characters"),
  password_confirmation: yup.string().oneOf([
    null, yup.ref("password")
  ], "Passwords need to match"),
})

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema)
  })

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(values);
  }


  return (
    <Box>
      <Header />
        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
          
          <Sidebar/>
        
          <Box
            as = "form" 
            flex="1" 
            borderRadius={8} 
            bg="gray.800" 
            p={["6", "8"]}
            onSubmit={handleSubmit(handleCreateUser)}
          >

            <Heading size="lg" fontWeight="normal">Create user</Heading>

            <Divider my="6" borderColor="gray.700" />

            <VStack spacing={["6","8"]}>
              <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
              <Input 
                  name="name" 
                  label="Nome completo"
                  error={formState.errors.name}
                  {...register('name')} 
              />
                <Input
                  name="email"
                  type="email"
                  label="email"
                  error={formState.errors.email}
                  {...register('email')}
                />
              </SimpleGrid>
              <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
                <Input
                  name="password"
                  type="password"
                  label="Password"
                  error={formState.errors.password}
                  {...register('password')}
                />
                <Input
                  name="password_confirmation"
                  type="password"
                  label="Password confirmation"
                  error={formState.errors.password_confirmation}
                  {...register('password_confirmation')}
                />
              </SimpleGrid>
            </VStack>

            <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
                <Link href="/users" passHref>
                  <Button as="a" colorScheme="whiteAlpha">Cancel</Button>
                </Link>
                <Button 
                  type="submit" 
                  colorScheme="pink"
                  isLoading={formState.isSubmitting}
                >
                  Save
                </Button>
              </HStack>     
            </Flex>
          </Box>
        </Flex>
    </Box>
  );
}
