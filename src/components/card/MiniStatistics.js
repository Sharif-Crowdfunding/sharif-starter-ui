import {
  Stack,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import Card from "../card/Card.js";
import React from "react";

export default function MiniStatistics(props) {
  const { startContent, endContent, name, value, secondValue } = props;
  console.log(value);
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "secondaryGray.600";

  return (
    <Card py="15px">
      <Flex
        my="auto"
        h="100%"
        align={{ base: "center", xl: "start" }}
        justify={{ base: "center", xl: "center" }}
      >
        {startContent}

        <Stat my="auto" ms={startContent ? "18px" : "0px"}>
          <StatLabel
            lineHeight="100%"
            color={textColorSecondary}
            fontSize={{
              base: "lg",
            }}
          >
            {name}
          </StatLabel>
          <StatNumber
            color={textColor}
            fontSize={{
              base: "3xl",
            }}
            style={{ direction: "ltr" }}
          >
            <Stack direction={"row"}>
              <Text style={{ marginTop: "15px" }} fontSize={{ base: "sm" }}>
                {secondValue}
              </Text>
              <Text>{value}</Text>{" "}
            </Stack>
          </StatNumber>
        </Stat>
        <Flex ms="auto" w="max-content">
          {endContent}
        </Flex>
      </Flex>
    </Card>
  );
}
