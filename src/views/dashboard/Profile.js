import { Box, Grid, Spinner } from "@chakra-ui/react";

// Custom components

// Assets
import React from "react";
import Banner from "../../components/profile/Banner";
import GeneralInformation from "../../components/profile/General";
import { useAuth } from "../../providers/auth";
import banner from "./../../assets/img/auth/banner.png";
import avatar from "./../../assets/img/avatars/avatarSimmmple.png";

export default function Profile() {
  const {user}=useAuth()
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Grid
        mb="20px"
        templateColumns={{
          base: "1fr",
          lg: "repeat(2, 1fr)",
          "2xl": "1.34fr 1.62fr ",
        }}
        templateRows={{
          base: "1fr",
          lg: "repeat(2, 1fr)",
          "2xl": "1fr",
        }}
        gap={{ base: "20px", xl: "20px" }}
        px={"8%"}
      >
        {!user.data? <Spinner /> :<Banner
          gridArea="1 / 1 / 2 / 2"
          banner={banner}
          avatar={avatar}
          name={user.data.first_name +" "+ user.data.last_name}
          job=""
          posts="17"
          followers="9.7k"
          following="274"
        />}
        <GeneralInformation minH="365px" pe="20px" />
      </Grid>
    </Box>
  );
}
