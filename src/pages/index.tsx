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
    reset,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      website: "",
    },
  });

  function onSubmit(values: { firstName: string; lastName: string }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        reset();
        resolve(null);
      }, 2000);
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
          as="form"
          bg="gray.600"
          onSubmit={handleSubmit(onSubmit)}
          mt="20vh"
          p="1.5rem"
          borderRadius="12px"
          w="500px"
        >
          <FormControl isInvalid={!!errors.firstName}>
            <FormLabel htmlFor="firstName">First name</FormLabel>
            <Input
              id="firstName"
              placeholder="John"
              {...register("firstName", {
                required: "This is required",
                maxLength: {
                  value: 30,
                  message: "Minimum length should be 4",
                },
              })}
            />
            <FormErrorMessage>
              {errors.firstName && errors.firstName.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.lastName}>
            <FormLabel htmlFor="lastName">Last Name</FormLabel>
            <Input
              id="lastName"
              placeholder="Doe"
              {...register("lastName", {
                required: "This is required",
                minLength: {
                  value: 4,
                  message: "Minimum length should be 4",
                },
                maxLength: {
                  value: 30,
                  message: "Minimum length should be 4",
                },
              })}
            />
            <FormErrorMessage>
              {errors.lastName && errors.lastName.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.website}>
            <FormLabel htmlFor="website">Website</FormLabel>
            <Input
              id="website"
              placeholder="https://www.google.ca/"
              {...register("website", {
                required: "This is required",
                pattern: {
                  value:
                    /^(https?|ftp):\/\/(([a-z\d]([a-z\d-]*[a-z\d])?\.)+[a-z]{2,}|localhost)(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i,
                  message:
                    "Invalid url. Make sure the url starts with https://",
                },
              })}
            />
            <FormErrorMessage>
              {errors.website && errors.website.message}
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
