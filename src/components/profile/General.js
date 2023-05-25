// Chakra imports
import { SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import React from "react";
import Card from "../card/Card";
import Information from "./Information";
import { useAuth } from "../../providers/auth";

// Assets
export default function GeneralInformation(props) {
  const { ...rest } = props;
  const { user } = useAuth();
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card mb={{ base: "0px", "2xl": "20px" }} {...rest}>
      <Text
        color={textColorPrimary}
        fontWeight="bold"
        fontSize="2xl"
        mt="10px"
        mb="4px"
      >
        اطلاعات کاربری
      </Text>
      <SimpleGrid columns="2" gap="20px">
        <Information
          boxShadow={cardShadow}
          id="first_name"
          title="نام"
          value={user.data && user.data.first_name}
          editable
        />
        <Information
          boxShadow={cardShadow}
          id="last_name"
          title="نام‌خانوادگی"
          value={user.data && user.data.last_name}
          editable
        />
        <Information
          boxShadow={cardShadow}
          title="نام‌کاربری"
          value={user.data && user.data.username}
        />
        <Information
          boxShadow={cardShadow}
          title="ایمیل"
          value={user.data && user.data.email}
        />
        <Information
          boxShadow={cardShadow}
          id="password"
          title="رمز‌عبور"
          value="**********"
          editable
        />
      </SimpleGrid>
    </Card>
  );
}
