import useColors from "@/lib/hooks/useColors";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Stack,
  Checkbox,
  RadioGroup,
  Radio,
  Box
} from "@chakra-ui/react";

const Filters = () => {
    const colors = useColors();

  return (
    <Box py={2} w="100%" h="min-content" bg={colors.bg} rounded="md" shadow="md">
      <Accordion allowMultiple>
        <AccordionItem border={"none"}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Carriage class
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack spacing={5}>
              <Checkbox colorScheme="teal" defaultChecked>
                3rd class sleeper
              </Checkbox>
              <Checkbox colorScheme="teal" defaultChecked>
                2nd class sleeper
              </Checkbox>
              <Checkbox colorScheme="teal" defaultChecked>
                1st class sleeper
              </Checkbox>
            </Stack>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem border={"none"}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Seating options
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <RadioGroup defaultValue="2">
              <Stack spacing={5}>
                <Radio colorScheme="teal" value="1">
                  All
                </Radio>
                <Radio colorScheme="teal" value="2">
                  Only top
                </Radio>
                <Radio colorScheme="teal" value="3">
                  Only bottom
                </Radio>
              </Stack>
            </RadioGroup>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem border={"none"}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Departure time
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <RadioGroup defaultValue="2">
              <Stack spacing={5}>
                <Radio colorScheme="teal" value="1">
                  Anytime
                </Radio>
                <Radio colorScheme="teal" value="2">
                  {"Morning(06-12)"}
                </Radio>
                <Radio colorScheme="teal" value="3">
                  {"Day(12-18)"}
                </Radio>
                <Radio colorScheme="teal" value="4">
                  {"Evening(18-00)"}
                </Radio>
              </Stack>
            </RadioGroup>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem border={"none"}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Arrival time
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <RadioGroup defaultValue="2">
              <Stack spacing={5}>
                <Radio colorScheme="teal" value="1">
                  Anytime
                </Radio>
                <Radio colorScheme="teal" value="2">
                  {"Morning(06-12)"}
                </Radio>
                <Radio colorScheme="teal" value="3">
                  {"Day(12-18)"}
                </Radio>
                <Radio colorScheme="teal" value="4">
                  {"Evening(18-00)"}
                </Radio>
              </Stack>
            </RadioGroup>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default Filters;
