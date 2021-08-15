import { Flex, Button, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver }  from '@hookform/resolvers/yup'
import { Input } from '../components/Form/input'

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required("Email needed").email("Email invalid"),
  password: yup.string().required("Password needed"),
})

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const { errors } = formState

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {

    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(values)
    
  }

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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">

          <Input 
            type="email" 
            name="email" 
            label="Email"
            error={errors.email}
            {...register('email')}
          ></Input>
          
          <Input 
            type="password" 
            name="password" 
            label="Password"
            error={errors.password}
            {...register('password')} 
          ></Input>

        </Stack>

        <Button 
          type="submit" 
          marginTop="6" 
          colorScheme="pink"
          isLoading={formState.isSubmitting}
        >
          Enter
        </Button>

      </Flex>
    </Flex>
  )
}