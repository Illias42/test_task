"use client";
import useColors from "@/lib/hooks/useColors";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBar = ({isLoading, value, onChange, onSearch}) => {
  const router = useRouter();
  const colors = useColors();
  const [date, setDate] = useState(new Date());

  return (
    <Flex w="100%" align="center" gap={4} mb={4}>
      <Flex
        flex={4}
        position="relative"
        overflow="hidden"
        borderRadius="10px"
        border="1px"
        borderColor="gray.600"
      >
        <Input
          className="border-r-[1px] rounded-none p-2 pr-8"
          variant="unstyled"
          placeholder="From"
          value={value?.from ?? ''}
          onChange={(e) => onChange(prev => ({...prev, from: e.target.value}))}
        />
        <Input
          className="rounded-none p-2 pl-8"
          variant="unstyled"
          placeholder="To"
          value={value?.to ?? ''}
          onChange={(e) => onChange(prev => ({...prev, to: e.target.value}))}
        />
      </Flex>
      <Flex flex={2}>
        <SingleDatepicker
          name="date-input"
          date={date}
          onDateChange={setDate}
        />
      </Flex>
      <Button
        flex={1}
        borderRadius="0"
        rounded="md"
        bg={colors.head}
        color="white"
        isLoading={isLoading}
        onClick={onSearch}
      >
        Search
      </Button>
    </Flex>
  );
};

export default SearchBar;
