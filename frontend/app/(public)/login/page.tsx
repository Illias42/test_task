"use client";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePassChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleSubmit = () => {
    router.push("/selector");
  };

  return (
    <Flex width="100%" height="100%" align="center" justify="center">
      <Flex direction="column" p={4} gap={4}>
        <Text variant="title" fontSize={{ base: "25px", md: "30px" }}>
          Log in to your account
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
