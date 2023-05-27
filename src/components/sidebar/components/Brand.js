import React from "react";

// Chakra imports
import { Flex, Text, useColorModeValue,Stack, useBreakpointValue } from "@chakra-ui/react";

// Custom components
import { HSeparator } from "../../separator/Separator";
import logo from "../../../assets/img/logo/logo.png";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align="center" direction="column">
        <Stack direction={"row"} spacing={6}>
              <img src={logo} style={{ height: "60px" }}></img>
              <Text
                textAlign={useBreakpointValue({ base: "center", md: "right" })}
                color={useColorModeValue("gray.800", "white")}
                fontSize={"2xl"}
                fontWeight="extrabold"
                style={{  marginTop:"10px" }}
              >
                شریف استارتر
              </Text>
            </Stack>
      <HSeparator mb="20px" />
    </Flex>
  );
}

export default SidebarBrand;
