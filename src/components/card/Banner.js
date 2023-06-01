import React from "react";

import {
  Text,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  Box,
  StackDivider,
  Image,
} from "@chakra-ui/react";
import CountdownTimer from "../CountdownTimer";

export default function Banner({ time, project }) {
  console.log(project, time);

  return (
    <>
      <Box
        bg="#190793f2"
        w="100%"
        p={4}
        mb={2}
        color="white"
        style={{ borderRadius: "10px" }}
      >
        <CountdownTimer endTime={time} />
      </Box>
      <Card>
        <CardHeader>
          <Heading
            size="lg"
            fontFamily={"MyShFont"}
            style={{ textAlign: "center" }}
          >
            {" "}
             پروژه {project?.name}
          </Heading>
        </CardHeader>
        <Image
          src={project?.image}
          style={{ height: "25%", alignSelf: "center" }}
        />
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading
                size="xm"
                textTransform="uppercase"
                fontFamily={"MyShFont"}
              >
                نام نماد
              </Heading>
              <Text pt="2" fontSize="md">
                {project?.symbol}
              </Text>
            </Box>
            <Box>
              <Heading
                size="xs"
                textTransform="uppercase"
                fontFamily={"MyShFont"}
              >
                آدرس سایت
              </Heading>
              <Text pt="2" fontSize="sm">
                {project?.website}
              </Text>
            </Box>
            <Box>
              <Heading
                size="xs"
                textTransform="uppercase"
                fontFamily={"MyShFont"}
              >
                آیدی تلگرام
              </Heading>
              <Text pt="2" fontSize="sm">
                {project?.telegram_id}
              </Text>
            </Box>
            <Box>
              <Heading
                size="xs"
                textTransform="uppercase"
                fontFamily={"MyShFont"}
              >
                آدرس گیتهاب
              </Heading>
              <Text pt="2" fontSize="sm">
                {project?.github_id}
              </Text>
            </Box>
            <Box>
              <Heading
                size="xs"
                textTransform="uppercase"
                fontFamily={"MyShFont"}
              >
                توضیحات پروژه
              </Heading>
              <Text pt="2" fontSize="sm">
                {project?.details}
              </Text>
            </Box>
            <Box>
              <Heading
                size="xs"
                textTransform="uppercase"
                fontFamily={"MyShFont"}
              >
                 سپیدنامه (white paper)
              </Heading>
              <Text pt="2" fontSize="sm">
              <a href="https://coiniran.com/wp-content/uploads/2018/05/ethereum-whitepaper.pdf" >لینک توضیحات فنی پروژه</a>
                
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}
