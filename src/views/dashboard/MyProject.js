import { Box, Button, Grid, Text, useToast } from "@chakra-ui/react";
import axios from "axios";

// Custom components

// Assets
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import urls from "../../common/urls";
import { useFetch } from "../../common/useFetch";
import NewProjectModal from "../../components/projects/NewProjectModal";
import Projects from "../../components/projects/Projects";
import {
  MY_PROJECT_REFRESH,
  REFRESH_SUCCESS,
  useProjectReducer,
} from "../../providers/project";

export default function MyProjects() {
  const { state, dispatch } = useProjectReducer();
  const toast = useToast();
  const navigate = useNavigate();
  const { data, error, loading } = useFetch(
    urls.project.getUserProjects(),
    "GET"
  );
  useEffect(() => {
    if (loading) {
      dispatch({ type: MY_PROJECT_REFRESH });
    }
    if (error) {
      console.log(error);
    }
    if (data && data.length > 0) {
      dispatch({ type: REFRESH_SUCCESS, payload: data });
    }
  }, [error, data, loading]);

  function newProjectSubmit(data) {
    axios
      .post(urls.project.create(), data)
      .then((res) => {
        dispatch({ type: REFRESH_SUCCESS, payload: [...state.projects, res.data] });
        toast({
          title: "پروژه با موفقیت ساخته شد.",
          status: "success",
          position: "bottom-right",
          duration: 9000,
          isClosable: true,
          containerStyle: {
            direction: "rtl",
          },
        });
      })
      .catch((err) => console.log(err));
  }
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}

      <Grid mb="20px" gap={{ base: "20px", xl: "20px" }} px={"8%"}>
        <NewProjectModal onSubmit={newProjectSubmit} />
        <Projects title="پروژه ها" projects={state.projects} />
      </Grid>
    </Box>
  );
}
