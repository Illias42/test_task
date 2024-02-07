"use client";
import { Box, Text, Button, ScaleFade, Flex } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import useColors from "@/lib/hooks/useColors";
import { useDeleteTrainMutation } from "@/lib/services";

interface Props {
  data: any,
  onRemove: (id: string) => void,
  onEdit: () => void  
}

const RouteCard = ({ data, onRemove, onEdit }: Props) => {
  const colors = useColors();
  const [deleteTrain, { isLoading: isDeleteLoading }] =
    useDeleteTrainMutation();

  const handleDelete = (id: string) => {
    deleteTrain(id).then(() => {
      onRemove(id);
    });
  };

  if (!data) return null;
  return (
    <ScaleFade initialScale={0.9} in={true}>
      <Box p={2} borderRadius={10} bg={colors.bg}>
        <Flex gap={8}>
          <Box flex={1}>
            <Text>{data.num}</Text>
            <Text>{[data.from, data.to].join("-")}</Text>
          </Box>
          <Box flex={2}>
            <Flex justify="space-between">
              <Text>{data.arrivalTime?.slice(0, 5)}</Text>
              <Text>{data.departureTime?.slice(0, 5)}</Text>
            </Flex>
            <Box className="h-2 w-full my-4 bg-[#c084fc] hover:bg-[#6b21a8] border-x-8 border-[#6b21a8]" />
            <Flex justify="space-between">
              <Text>{data.from}</Text>
              <Text>{data.to}</Text>
            </Flex>
          </Box>
          <Box flex={2}>
            <Text noOfLines={1}>3rd class sleeper 43</Text>
            <Text noOfLines={1}>2nd class sleeper 23</Text>
            <Text noOfLines={1}>1st class sleeper 63</Text>
          </Box>
          <Flex flex={1} gap={2} direction="column" align="flex-end">
            <Flex justify="flex-end" mb={5} gap={4}>
              <Button
                rounded="full"
                p={2}
                colorScheme="purple"
                onClick={onEdit}
              >
                <EditIcon boxSize={3} />
              </Button>
              <Button
                rounded="full"
                colorScheme="red"
                p={2}
                onClick={() => handleDelete(data.id)}
                isLoading={isDeleteLoading}
              >
                <DeleteIcon boxSize={3} />
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </ScaleFade>
  );
};

export default RouteCard;
