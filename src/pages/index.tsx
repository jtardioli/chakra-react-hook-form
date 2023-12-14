import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import { useForm } from "react-hook-form";

export default function Home() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      lastName: "",
    },
  });

  function onSubmit(values: { name: string; lastName: string }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve(null);
      }, 3000);
    });
  }
  return (
    <>
      <Head>
        <title>Chakra with React Hook Form Demo</title>
        <meta name="description" content="Chakra with React Hook Form Demo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex w="full" justifyContent="center">
        <VStack
          bg="gray.600"
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          mt="20vh"
          p="1.5rem"
          borderRadius="12px"
        >
          <FormControl isInvalid={!!errors.name}>
            <FormLabel htmlFor="name">First name</FormLabel>
            <Input
              id="name"
              placeholder="name"
              {...register("name", {
                required: "This is required",
                minLength: {
                  value: 4,
                  message: "Minimum length should be 4",
                },
                maxLength: {
                  value: 8,
                  message: "Minimum length should be 4",
                },
              })}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.lastName}>
            <FormLabel htmlFor="lastName">Last Name</FormLabel>
            <Input
              id="lastName"
              placeholder="lastName"
              {...register("lastName", {
                required: "This is required",
                minLength: {
                  value: 4,
                  message: "Minimum length should be 4",
                },
                maxLength: {
                  value: 8,
                  message: "Minimum length should be 4",
                },
              })}
            />
            <FormErrorMessage>
              {errors.lastName && errors.lastName.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </VStack>
      </Flex>
    </>
  );
}
