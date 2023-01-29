// Chakra imports
import { Text, useColorModeValue } from "@chakra-ui/react";
// Assets

// Custom components
import React from "react";
import Card from "../card/Card";
import Project from "./Project";

export default function Projects({ title, projects }) {
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card mb={{ base: "0px", "2xl": "20px" }}>
      <Text
        color={textColorPrimary}
        fontWeight="bold"
        fontSize="2xl"
        mt="10px"
        mb="4px"
      >
        {title}
      </Text>
      {projects && projects.length>0 &&
        projects.map((p) => (
          <Project
            boxShadow={cardShadow}
            mb="20px"
            image={p.image}
            symbol={p.token_info.symbol}
            title={p.name}
          />
        ))}
    </Card>
  );
}
