// Chakra imports
import {
  Box,
  Link,
  Text,
  useColorModeValue,
  Icon,
  Flex,
} from "@chakra-ui/react";
// Custom components
import React from "react";
import Card from "../card/Card";
import { MdEdit } from "react-icons/md";

export default function Information(props) {
  const { title, value, ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const bg = useColorModeValue("white", "navy.700");
  return (
    <Card bg={bg} {...rest}>
      <Flex align="center" direction={{ base: "column", md: "row" }}>
        <Box>
          <Text fontWeight="500" color={textColorSecondary} fontSize="sm">
            {title}
          </Text>
          <Text color={textColorPrimary} fontWeight="500" fontSize="md">
            {value?value:"____________"}
          </Text>
        </Box>
        <Link
          href={""}
          variant="no-hover"
          me="16px"
          ms="auto"
          p="0px !important"
        >
          <Icon as={MdEdit} color="secondaryGray.500" h="18px" w="18px" />
        </Link>
      </Flex>
    </Card>
  );
}
