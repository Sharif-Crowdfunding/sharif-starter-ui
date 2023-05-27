import React, { useState } from "react";

import {  Text, Card, CardHeader, CardBody, Heading, Stack, Box, StackDivider, Image } from "@chakra-ui/react";
import CountdownTimer from "../CountdownTimer";

export default function Banner({ time, project }) {
  console.log( project, time);
   
  return (
    <Card>
      <Box >
        <CountdownTimer />
      </Box>
      <CardHeader>
        <Heading size="md" fontFamily={"MyShFont"}>{project?.name}</Heading>
      </CardHeader>
       <Image src={project?.image} style={{height: "230px"}}/>
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
