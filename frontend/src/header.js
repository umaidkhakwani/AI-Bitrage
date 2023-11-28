import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import logo_top from "./images/logo_top.png";

import bg1 from "./images/background1.png";
import bg2 from "./images/background2.png";
import bg3 from "./images/background3.png";
import { Link, useNavigate } from "react-router-dom";
import Homepage from "./pages/homepage";
import Docs_page from "./pages/docs_page";
import Blog_page from "./pages/blog_page";
import footer_img from "./images/footer.png";
import Telegram from "./images/Telegram.png";
import Discord from "./images/Discord.png";
import Twitter from "./images/Twitter.png";
import Terms from "./pages/Terms";
import FooterFunction from "./footer";
import Privacy_policy from "./pages/privacy_policy";
import Cookie_policy from "./pages/cookie_policy";
import Report_bug from "./pages/report_bug";
import Not_found from "./pages/not_found";

function Header_Function() {
  const navigate = useNavigate();

  const [value, setValue] = useState(-1);
  const [page, setPage] = useState(-1);

  console.log("value", value);

  const handleChange = (event, newValue) => {
    console.log("newValue", newValue);
    setValue(newValue);
    // if(newValue === 0){
    //   navigate("/blog");
    // <Homepage />
    // }else if(newValue === 4){
    //     navigate("/docs");
    // }
  };

  const handleChange_footer = (newValue) => {
    console.log("newValue", newValue);
    setValue(newValue);
    // if(newValue === 0){
    //   navigate("/blog");
    // <Homepage />
    // }else if(newValue === 4){
    //     navigate("/docs");
    // }
  };

  return (
    <header>
      <CssBaseline />

      <Paper
        sx={{
          width: "100%",
          height: "100vh",
          overflowY: "auto",
          margin: 0,
          padding: 0,
          backgroundColor: "black",
        }}
      >
        <Paper
          sx={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${value === -1 ? bg1 : bg3})`,
            backgroundSize: "cover",
            overflowY: "auto",
            margin: 0,
            padding: 0,
            willChange: "transform", // Add will-change property
          }}
        >
          <Container sx={{ backgroundColor: "transparent" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: 1,
                borderColor: "divider",
                width: "100%",
                margin: "auto",
                marginBottom: 2, // Adjust the margin as needed
                backdropFilter: "blur(5px)", // Add backdrop filter for a blurred effect
                padding: "10px", // Add padding for better visibility
              }}
            >
              <img
                src={logo_top}
                alt="logo"
                style={{ margin: "0px", cursor: "pointer" }}
                onClick={() => setValue(-1)}
              />

              <Tabs
                value={value}
                onChange={handleChange}
                centered
                sx={{
                  backgroundColor: "transparent", // Set tabs background to transparent
                  width: "60%", // Adjust the width here
                }}
              >
                <Tab label="Blogs" sx={{ color: "white" }} />
                <Tab
                  icon={<LockIcon />}
                  label="Swap"
                  sx={{ color: "white", pointerEvents: "none" }}
                />
                <Tab
                  icon={<LockIcon />}
                  label="Pool"
                  sx={{ color: "white", pointerEvents: "none" }}
                />
                <Tab
                  icon={<LockIcon />}
                  label="Bridge"
                  sx={{ color: "white", pointerEvents: "none" }}
                />

                <Tab label="Docs" sx={{ color: "white" }} />
                <Tab label="Forum" sx={{ color: "white" }} />
              </Tabs>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#FFFFFF",
                  color: "#3D073F",
                  borderRadius: "20px",
                }}
              >
                Launch App
              </Button>
            </Box>
          </Container>
          {/* <Docs_page /> */}
          {value === -1 ? (
            <Homepage callback={handleChange_footer} />
          ) : value === 0 ? (
            <Blog_page />
          ) : value === 4 ? (
            <Docs_page />
          ) : value === 5 ? (
            <Not_found />
          ) : value === 10 ? (
            <Terms />
          ) : value === 11 ? (
            <Cookie_policy />
          ) : value === 12 ? (
            <Privacy_policy />
          ) :  value === 13 ? (
            <Report_bug />
          ) :(
            <Terms />
          )}
          {value === -1 ? (
            ""
          ) : (
            <FooterFunction callback={handleChange_footer} />
          )}
        </Paper>
      </Paper>
    </header>
  );
}

export default Header_Function;
