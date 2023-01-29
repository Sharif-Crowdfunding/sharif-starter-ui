import { ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Button, FormControl, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import urls from "./../../common/urls";

export default function NewProjectForm() {
  const classes = {
    field: {
      marginTop: 2,
      marginBottom: 2,
      display: "block",
      textAlign: "right",
    },
  };
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [tokenName, setTokenName] = useState("");
  const [tokenNumber, setTokenNumber] = useState("");
  const [telegramId, setTelegramId] = useState("");
  const [githubId, setGithubId] = useState("");
  const [website, setWebsite] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);
  };
  return (
    <Box size="sm" sx={{ width: "80%" }}>
      <Text variant="h3" color="textPrimary" component="h2" gutterBottom>
        ثبت پروژه جدید{" "}
      </Text>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <FormControl
          sx={classes.field}
          onChange={(e) => setName(e.target.value)}
          label="نام پروژه"
          variant="outlined"
          color="primary"
          fullWidth
          required
          error={titleError}
        />
        <FormControl
          sx={classes.field}
          onChange={(e) => setWebsite(e.target.value)}
          label="وبسایت"
          variant="outlined"
          color="primary"
          fullWidth
          required
          error={titleError}
        />
        <FormControl
          sx={classes.field}
          onChange={(e) => setTelegramId(e.target.value)}
          label="آیدی تلگرام"
          variant="outlined"
          color="primary"
          fullWidth
          required
          error={titleError}
        />
        <FormControl
          sx={classes.field}
          onChange={(e) => setDetails(e.target.value)}
          label="جزيیات"
          variant="outlined"
          color="primary"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        />
        <FormControl
          sx={classes.field}
          onChange={(e) => setGithubId(e.target.value)}
          label="آیدی Github"
          variant="outlined"
          color="primary"
          fullWidth
          required
          error={titleError}
        />
        <Box>
          <Text
            variant="h4"
            color="textPrimary"
            component="h3"
            gutterBottom
          >
            ثبت اطلاعات توکن پروژه{" "}
          </Text>
          <FormControl
            sx={classes.field}
            onChange={(e) => setTokenName(e.target.value)}
            label="نام توکن"
            variant="outlined"
            color="primary"
            fullWidth
            required
          />
          <FormControl
            sx={classes.field}
            onChange={(e) => setTokenNumber(e.target.value)}
            label="تعداد توکن درخواستی"
            variant="outlined"
            color="primary"
            fullWidth
            required
          />
        </Box>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          startIcon={<ArrowRightIcon />}
          onClick={() =>
            createProject(
              {
                name: name,
                image: "1.jpg",
                basic_info: {
                  website: website,
                  telegram_id: telegramId,
                  details: details,
                  github_id: githubId,
                },
                token_info: {
                  symbol: tokenName,
                  total_supply: tokenNumber,
                },
              },
              navigate
            )
          }
        >
          <Text variant="h4">ثبت اطلاعات</Text>
        </Button>
      </form>
    </Box>
  );
}

function createProject(data, navigate) {
  console.log("create project")
  // axios
  //   .post(urls.project.create(), data)
  //   .then((res) => {
  //     console.log(res);
  //     toast.success("ثبت پروژه با موفقیت انجام شد.", {
  //       position: toast.POSITION.BOTTOM_RIGHT,
  //     });
  //     // navigate("/dashboard/projects");
  //   })
  //   .catch((err) => console.log(err));
}
