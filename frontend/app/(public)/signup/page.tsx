"use client";
import { ROUTES } from "@/lib/constants/routes";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function SignUp() {
  const router = useRouter();

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePassChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleSubmit = () => {
    router.push(ROUTES.ROUTES_LIST);
  };

  return (
    <Flex width="100%" height="100%" align="center" justify="center">
      <Flex direction="column" p={4} gap={4} pt={20}>
        <Text variant="title" fontSize={{ base: "25px", md: "30px" }}>
          Sign up into your account
        </Text>

        <Input
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />

        <Input
          placeholder="Password"
          name="password"
          type="password"
          value={password}
          onChange={handlePassChange}
        />

        <Button onClick={handleSubmit}>Submit</Button>
      </Flex>
    </Flex>
  );
}
