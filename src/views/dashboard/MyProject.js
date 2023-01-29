
import { Box, Grid } from "@chakra-ui/react";

// Custom components


// Assets
import React from "react";
import Projects from "../../components/projects/Projects";
import banner from "./../../assets/img/auth/banner.png";
import avatar from "./../../assets/img/avatars/avatar4.png";

export default function MyProjects() {
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      
      <Grid
        mb='20px'
        templateRows={{
          base: "1fr",
          lg: "repeat(2, 1fr)",
          "2xl": "1fr",
        }}
        gap={{ base: "20px", xl: "20px" }}
        px={"8%"}>
        <Projects title="پروژه ها" projects={[{name:"جلبک",image:banner,token_info:{symbol:"JOLB"}},{name:"جلبک",image:avatar,token_info:{symbol:"JOLB"}}]}/>
      </Grid>
    </Box>
  );
}
