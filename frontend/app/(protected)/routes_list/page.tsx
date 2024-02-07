"use client";
import {
  Box,
  Flex,
  useDisclosure,
  Slide,
  Button,
  Input,
  CircularProgress,
  Text
} from "@chakra-ui/react";
import { RouteCard } from "@/components/ui/route-card";
import { SearchBar } from "@/components/ui/search-bar";
import { Filters } from "@/components/ui/filters";
import useColors from "@/lib/hooks/useColors";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { useState } from "react";
import { useLazyGetTrainsQuery } from "@/lib/services";

export default function Routes() {
  const { isOpen, onToggle } = useDisclosure();
  const [date, setDate] = useState();
  const [trains, setTrains] = useState([]);
  const [searchParams, setSearchParams] = useState({});
  const [info, setInfo] = useState<string>();
  const colors = useColors();

  const [getTrains, { isLoading }] = useLazyGetTrainsQuery();

  const handleSearch = () => {
    getTrains(searchParams)
      .then(({ data }) => {
        if (data.length > 0) {
          setInfo(
            `${searchParams?.from} - ${searchParams?.to}, ${data.length} trains`
          );
        } else {
          setInfo("");
        }
        setTrains(data);
      })
      .catch(console.error);
  };

  const handleRemove = (id: string) => {
    setTrains((prev) => prev.filter((train) => train.id !== id));
  };

  return (
    <Box padding="4" width="100%">
      <Box p={4} rounded="md" shadow="md" bg={colors.bgSecondary}>
        <SearchBar
          loading={isLoading}
          value={searchParams}
          onChange={setSearchParams}
          onSearch={handleSearch}
        />
        {info && <h1>{info}</h1>}
      </Box>
      <Box p={4} mt={4} rounded="md" shadow="md" bg={colors.bgSecondary}>
        <Flex gap={4}>
          <Flex flex={1}>
            <Filters />
          </Flex>
          <Flex flex={3} direction="column" gap={2}>
            {isLoading ? (
              <Flex flex={1} h="100%" justify="center" align="center">
                <CircularProgress />
              </Flex>
            ) : trains.length === 0 ? (
              <Flex flex={1} h="100%" justify="center" align="center">
                <Text>Select route</Text>
              </Flex>
            ) : (
              trains.map((data) => (
                <RouteCard
                  key={data.id}
                  data={data}
                  onRemove={handleRemove}
                  onEdit={onToggle}
                />
              ))
            )}
          </Flex>
        </Flex>
      </Box>
      <Box w="100%" h={12} />
      <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg={colors.head}
          rounded="md"
          shadow="md"
        >
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
              />
              <Input
                className="rounded-none p-2 pl-8"
                variant="unstyled"
                placeholder="To"
              />
            </Flex>
            <Flex flex={2}>
              <SingleDatepicker
                name="date-input"
                date={date}
                onDateChange={(date) => setDate(date)}
              />
            </Flex>
            <Button flex={1} borderRadius="0" rounded="md" bg={colors.head}>
              Save
            </Button>
          </Flex>
        </Box>
      </Slide>
    </Box>
  );
}
