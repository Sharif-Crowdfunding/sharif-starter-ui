import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import landingBg from "../../assets/img/home/CROWDFUNDING.jpg";

export default function Hero() {
  return (
    <div dir="rtl" >
      <Stack minH={"80vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text
                as={"span"}
                position={"relative"}
                fontFamily={"MyShFont"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: "absolute",
                  left: 0,
                  bg: "blue.400",
                  zIndex: -1,
                }}
              >
                جمع‌سپاری پروژه‌های دانشگاهی
              </Text>
              <br />{" "}
              <Text color={"blue.400"} as={"span"} fontFamily={"MyShFont"}
>
                برپایه‌ی بلاک‌چین
              </Text>{" "}
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
              توسعه سامانه هوشمند تامین مالی جمعی پروژه‌های دانشگاهی بربستر
              فناوری بلاک‌چین
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                ساخت پروژه جدید
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image alt={"Login Image"} objectFit={"cover"} src={landingBg}  />
        </Flex>
      </Stack>
    </div>
  );
}
