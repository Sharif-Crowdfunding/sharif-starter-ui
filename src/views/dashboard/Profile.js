
import { Box, Grid } from "@chakra-ui/react";

// Custom components


// Assets
import React from "react";
import Banner from "../../components/profile/Banner";
import GeneralInformation from "../../components/profile/General";
import Projects from "../../components/profile/Projects";
import banner from "./../../assets/img/auth/banner.png";
import avatar from "./../../assets/img/avatars/avatar4.png";

export default function Profile() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Grid
        gap={{ base: "20px", xl: "20px" }}
        px={"8%"}>
        <Banner
          gridArea='1 / 1 / 2 / 2'
          banner={banner}
          avatar={avatar}
          name='Adela Parkson'
          job='Product Designer'
          posts='17'
          followers='9.7k'
          following='274'
        />
      </Grid>
      <Grid
        mb='20px'
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
        px={"8%"}>
        <Projects
          gridArea='1 / 2 / 2 / 2'
          banner={banner}
          avatar={avatar}
          name='Adela Parkson'
          job='Product Designer'
          posts='17'
          followers='9.7k'
          following='274'
        />
        <GeneralInformation
          gridArea={{ base: "2 / 1 / 3 / 2", lg: "1 / 2 / 2 / 3" }}
          minH='365px'
          pe='20px'
        />
      </Grid>
    </Box>
  );
}
