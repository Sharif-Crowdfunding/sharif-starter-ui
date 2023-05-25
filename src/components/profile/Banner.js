// Chakra imports
import {
  Avatar,
  Box,
  Button,
  Flex,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import Card from "../card/Card";
import { CopyIcon } from "@chakra-ui/icons";

export default function Banner(props) {
  const { banner, avatar, name, walletAddress } = props;
  const toast = useToast();
  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(walletAddress);
      toast({
        title: "کپی شد",
        status: "success",
        position: "bottom-right",
        duration: 9000,
        isClosable: true,
        containerStyle: {
          direction: "rtl",
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const borderColor = useColorModeValue(
    "white !important",
    "#111C44 !important"
  );
  return (
    <Card mb={{ base: "0px", lg: "20px" }} align="center">
      <Box
        bg={`url(${banner})`}
        bgSize="cover"
        borderRadius="16px"
        h="131px"
        w="100%"
      />
      <Avatar
        mx="auto"
        src={avatar}
        h="87px"
        w="87px"
        mt="-43px"
        border="4px solid"
        borderColor={borderColor}
      />
      <Text color={textColorPrimary} fontWeight="bold" fontSize="xl" mt="10px">
        {name}
      </Text>

      <Flex w="max-content" mx="auto" mt="26px">
        <Flex mx="auto" align="center" direction="column">
          <Text color={textColorSecondary} fontSize="l" fontWeight="bold">
            آدرس کیف پول
          </Text>
          <Text
            color={textColorSecondary}
            fontSize="sm"
            fontWeight="400"
            id="balance"
            mt="20px"
            me="10px"
            defaultValue="0x0"
          >
            {walletAddress}{" "}
            <Button onClick={handleCopyClick}>
              <CopyIcon />
            </Button>
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
}
