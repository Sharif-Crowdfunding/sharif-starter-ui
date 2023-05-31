import React from "react";

import {  Text, Card, CardHeader, CardBody, Heading, Stack, Box, StackDivider, Image } from "@chakra-ui/react";
import CountdownTimer from "../CountdownTimer";

export default function Banner({ time, project }) {
  console.log( project, time);
   
  return (
    <Card>
      <Box bg="#190793f2" w="100%" p={4} color="white" style={{borderRadius:"20px"}}>
        <CountdownTimer />
      </Box>
      <CardHeader>
        <Heading size="md" fontFamily={"MyShFont"} style={{textAlign: "center"}}>  عنوان پروژه: {project?.name}</Heading>
      </CardHeader>
       <Image src={project?.image} style={{height: "25%", alignSelf:"center"}}/>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase" fontFamily={"MyShFont"}>
              نام نماد
            </Heading>
            <Text pt="2" fontSize="sm">
              {project?.symbol}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase" fontFamily={"MyShFont"}>
              آدرس سایت
            </Heading>
            <Text pt="2" fontSize="sm">
              {project?.website}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase" fontFamily={"MyShFont"}>
              آیدی تلگرام
            </Heading>
            <Text pt="2" fontSize="sm">
              {project?.telegram_id}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase" fontFamily={"MyShFont"}>
              آدرس گیتهاب
            </Heading>
            <Text pt="2" fontSize="sm">
              {project?.github_id}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase" fontFamily={"MyShFont"}>
              توضیحات پروژه
            </Heading>
            <Text pt="2" fontSize="sm">
              {project?.details}
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}
