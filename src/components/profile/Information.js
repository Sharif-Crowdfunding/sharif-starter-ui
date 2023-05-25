// Chakra imports
import {
  Box,
  Link,
  Text,
  useColorModeValue,
  Icon,
  Flex,
  Button,
  Input,
} from "@chakra-ui/react";
// Custom components
import React, { useState } from "react";
import Card from "../card/Card";
import { MdApproval, MdClose, MdDone, MdEdit } from "react-icons/md";

export default function Information(props) {
  const { id, title, editable, value, ...rest } = props;
  const [edit, setEdit] = useState(false);
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
          {edit ? (
            <Input
              onChange={(e) => console.log(e.target.value)}
              ms="auto"
              p="0px !important"
              placeholder={title}
            />
          ) : (
            <Text color={textColorPrimary} fontWeight="500" fontSize="md">
              {value ? value : "____________"}
            </Text>
          )}
        </Box>
        {edit ? (
          <>
            <Button
              onClick={() => console.log("hello")}
              mt="12px"
              ms="auto"
              p="0px !important"
            >
              <Icon
                as={MdDone}
                color="green.500"
                h="18px"
                w="18px"
                
              />
            </Button>
            <Button
              onClick={() => setEdit(false)}
              mt="12px"
              ms="auto"
              p="0px !important"
            >
              <Icon as={MdClose} color="red.500" h="18px" w="18px" />
            </Button>
          </>
        ) : (
          <Button
            isDisabled={!editable}
            onClick={() => setEdit(true)}
            variant="no-hover"
            me="16px"
            ms="auto"
            p="0px !important"
          >
            <Icon as={MdEdit} color="secondaryGray.500" h="18px" w="18px" />
          </Button>
        )}
      </Flex>
    </Card>
  );
}
