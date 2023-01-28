import React from "react";

// Chakra imports
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { HSeparator } from "../../separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align="center" direction="column">
        <Text h="26px" w="175px" my="32px" fontSize='3xl' fontWeight="bold" color={logoColor}>
          شریف استارتر
        </Text>
      <HSeparator mb="20px" />
    </Flex>
  );
}

export default SidebarBrand;
