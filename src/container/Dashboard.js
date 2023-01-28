import { Box } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import Profile from "../views/dashboard/Profile";

const Dashboard = () => {
  const params = useParams();
  function GetSection({ section }) {
    switch (section) {
    //   case "projects":
    //     return <MyProjects />;
    //   case "new-project":
    //     return <NewProject />;
    //   case "app":
    //     return <Overview />;
    //   case "portfolio":
    //     return <Portfolio />;
    //   case "auctions":
    //     return <Auction />;
    case "profile":
        return <Profile />
      default:
        return <></>;
    }
  }

  return (
    <>
      <Box>
        <div className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <GetSection section={params.section} />
        </div>
      </Box>
    </>
  );
};

export default Dashboard;
