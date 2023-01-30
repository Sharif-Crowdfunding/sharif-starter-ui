// Chakra imports
import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Link,
  Spacer,
  Text,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
// Custom components
import React from "react";
import urls from "../../common/urls";
import { UPDATE_STAGE, useProjectReducer } from "../../providers/project";
// Assets
import Card from "../card/Card";

export default function Project(props) {
  const { dispatch } = useProjectReducer();
  const toast = useToast()
  function action(url, step) {
    axios
      .get(url)
      .then((res) => {
        toast({
          title: "عملیات با موفقیت انجام شد.  ",
          status: "success",
          position: "bottom-right",
          duration: 9000,
          isClosable: true,
          containerStyle: {
            direction: "rtl",
          },
        });
        dispatch({ type: UPDATE_STAGE, payload: { id: id, step: step } });
        return res.data;
      })
      .catch((err) => console.log(err));
  }

  const { title, id, stage, image, ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const brandColor = useColorModeValue("brand.500", "white");
  const bg = useColorModeValue("white", "navy.700");
  return (
    <Card bg={bg} {...rest} p="14px">
      <Flex align="center" direction={{ base: "column", md: "row" }}>
        <Image h="200px" w="200px" src={image} borderRadius="8px" me="20px" />
        <Box mt={{ base: "10px", md: "0" }}>
          <Text
            color={textColorPrimary}
            fontWeight="500"
            fontSize="md"
            mb="4px"
          >
            {title}
          </Text>
          <Text
            fontWeight="500"
            color={textColorSecondary}
            fontSize="sm"
            me="4px"
          >
            <Link fontWeight="500" color={brandColor} href={""} fontSize="sm">
              مشاهده صفحه پروژه
            </Link>
          </Text>
        </Box>
        <Spacer />
        <Box>{getActionByStatus(stage, id, action)}</Box>
      </Flex>
    </Card>
  );
}
function getActionByStatus(development_stage, id, action) {
  switch (development_stage) {
    case 0:
      return (
        <VStack>
          <Button
            onClick={() => action(urls.project.fund(id), 1)}
            w="200px"
            variant="solid"
            colorScheme="teal"
          >
            نهایی کردن پروژه
          </Button>
          <Button
            onClick={() => action(urls.project.cancel(id), 3)}
            w="200px"
            colorScheme="red"
            variant="solid"
          >
            لغو
          </Button>
        </VStack>
      );
    case 1:
      return (
        <VStack>
          <Button
            onClick={() => action(urls.project.release(id), 2)}
            w="200px"
            variant="solid"
            colorScheme="teal"
          >
            انتشار پروژه
          </Button>
          <Button
            onClick={() => action(urls.project.cancel(id), 3)}
            w="200px"
            colorScheme="red"
            variant="solid"
          >
            لغو
          </Button>{" "}
        </VStack>
      );
    case 2:
      return (
        <VStack>
          <Button w="200px" variant="solid" colorScheme="teal">
            بررسی روند پیشرفت پروژه
          </Button>
        </VStack>
      );
    case 3:
      return (
        <VStack>
        </VStack>
      );
    default:
      break;
  }
}
