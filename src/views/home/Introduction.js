import {
  Avatar,
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import sharif from "../../assets/img/logo/Sharif_University_Logo.png";
import tehran from "../../assets/img/logo/tehran.png";
import AKUT from "../../assets/img/logo/Amirkabir.jpg";

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function Introduction() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading fontFamily={"MyShFont"}>به امید ایرانی زیباتر</Heading>
          <Text>باتکیه بر جامعه دانشگاهی کشور</Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
                دانشگاه صنعتی شریف در ۱۰ آبان ۱۳۴۴ با هدف تربیت و تأمین بخشی از
                نیروهای متخصص موردنیاز ایران، در سطوح بالای علمی، تأسیس گردید.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar src={sharif} name={"دانشگاه شریف"} />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
                دانشگاه تهران یک دانشگاه دولتی و یکی از بزرگ‌ترین مراکز آموزش
                عالی در ایران است. از این دانشگاه با القاب «دانشگاه مادر» و
                «نماد آموزش عالی» یاد شده‌است.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar src={tehran} name={"دانشگاه تهران"} />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialText>
                پلی‌تکنیک تهران، نخستین مؤسسۀ صنعتی ایران و از باسابقه‌ترین
                مؤسسات آموزش عالی ایران در زمینهٔ فنی و مهندسی است.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar src={AKUT} name={"دانشگاه امیرکبیر"} />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
