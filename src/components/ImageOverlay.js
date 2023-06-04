import React, { useState } from 'react';
import { Box, Image, Flex, Text } from "@chakra-ui/react";
import CountdownTimer from './CountdownTimer';

export default function ImageWithOverlay({image,time}) {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <Flex justifyContent="center" alignItems="center">
      <Box
        position="relative"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        cursor="pointer"
      >
        <Image
          src={image}
          alt="My Image"
          borderRadius="20px"
          filter={isHovered ? "blur(3px)" : "none"}
          style={{height:"150px"}}
        />
        {isHovered && (
          <Box
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            backgroundColor="grey.200"
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderRadius="20px"
          >
            <CountdownTimer endTime={time}/>
          </Box>
        )}
      </Box>
    </Flex>
  );
}