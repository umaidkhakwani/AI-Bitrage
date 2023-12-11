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
import bg_new from "./images/background_new.png";
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
import launch_App from "./images/launch_App.png";
import Terms from "./pages/Terms";
import FooterFunction from "./footer";
import Privacy_policy from "./pages/privacy_policy";
import Cookie_policy from "./pages/cookie_policy";
import Report_bug from "./pages/report_bug";
import Not_found from "./pages/not_found";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import styled from "styled-components";

const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;


function Header_Function() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLgScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isXlScreen = useMediaQuery(theme.breakpoints.up("lg"))
  const matches = useMediaQuery("(min-width:600px)");


  const [value, setValue] = useState(-1);
  const [page, setPage] = useState(-1);
  const [activeTab, setActiveTab] = useState("");

  const TabsContainer = styled.div`
    display: flex;
    overflow-x: auto;
    justify-content: ${({ isSmScreen }) =>
      isSmScreen ? "flex-start" : "flex-start"};
    background-color: transparent;
    margin: ${({ isSmScreen }) => (isSmScreen ? "20px 0px 0px 0px" : "0px")};
    width: ${({ isSmScreen }) =>
      isSmScreen ? "100%" : "60%"}; /* Ensure the tabs take the full width */
  `;
  const TabItem = styled.div`
    padding: 10px 20px;
    font-family: "Aclonica", sans-serif;
    color: ${({ selected }) => (selected ? "#50A883" : "white")};
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #50a883;
    }
  `;

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  console.log("value", value);

  const handleChange = (event, newValue) => {
    console.log("newValue", newValue);
    setValue(newValue);
    if (newValue > -1 && newValue < 6) {
      setActiveTab(getTabName(newValue));
    } else {
      setActiveTab("");
    }
  };

  const handleChange_footer = (newValue) => {
    console.log("newValue", newValue);
    setValue(newValue);
  };

  const handleClick = () => {
    navigate("/app");
  };

  const getTabName = (index) => {
    // Map index to tab names based on your logic
    const tabNames = ["Blogs", "Swap", "Pool", "Bridge", "Docs", "Forum"];
    return tabNames[index];
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
        {/* <Paper
          sx={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${value === -1 ? bg_new : bg3})`,
            backgroundSize: "cover",
            overflowY: "auto",
            margin: 0,
            backgroundPosition: "center",
            padding: 0,
            willChange: "transform", // Add will-change property
          }}
        > */}
        <Paper sx={{position:"absolute", zIndex:"100", background:"transparent", width:"100%"}}>
          {isSmScreen ? null : (
            <img
              src={launch_App}
              alt="logo"
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "130px",
                // margin: "10px", // Add some margin to the top and right
                cursor: "pointer",
                zIndex:"101",
              }}
              onClick={handleClick}
            />
          )}
          <Box
            sx={{
              backgroundColor: "transparent",
              width: isSmScreen ? "100%" : (matches ? "80%": "97%"),
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                flexDirection: isSmScreen ? "column" : "row",
                justifyContent: "space-between", // Centered horizontally for larger screens
                borderBottom: 1,
                borderColor: "divider",
                width: "100%",
                // margin: "auto",
                // marginBottom: 2, // Adjust the margin as needed
                padding: "10px", // Add padding for better visibility
                backdropFilter: "blur(5px)",
              }}
            >
              <img
                src={logo_top}
                alt="logo"
                style={{ width: "80px", margin: isXlScreen ? "0px 0px 0px 0px" : ( isLgScreen ? " 0px 0px 0px 0px" : "0px"), cursor: "pointer" }}
                onClick={() => {
                  setValue(-1);
                  setActiveTab("");
                }}
              />

              <TabsContainer isSmScreen={isSmScreen}>
                <TabItem
                  selected={activeTab === "Blogs"}
                  onClick={() => handleChange(null, 0)}
                >
                  Blogs
                </TabItem>
                <TabItem
                  selected={activeTab === "Swap"}
                  onClick={() => handleChange(null, 1)}
                >
                  Swap
                </TabItem>
                <TabItem
                  selected={activeTab === "Pool"}
                  onClick={() => handleChange(null, 2)}
                >
                  Pool
                </TabItem>
                <TabItem
                  selected={activeTab === "Bridge"}
                  onClick={() => handleChange(null, 3)}
                >
                  Bridge
                </TabItem>
                <TabItem
                  selected={activeTab === "Docs"}
                  onClick={() => handleChange(null, 4)}
                >
                  Docs
                </TabItem>
                <TabItem
                  selected={activeTab === "Forum"}
                  onClick={() => handleChange(null, 5)}
                >
                  Forum
                </TabItem>
              </TabsContainer>
              

              {/* <Button
                variant="contained"
                sx={{
                  backgroundColor: "#50A883",
                  color: "#ffff",
                  borderRadius: "20px",
                  marginTop: isSmScreen ? 2 : 0,
                  fontFamily: "Maragsa",
                }}
                onClick={handleClick}
              >
                Launch App
              </Button> */}
            </Box>
          </Box>
          </Paper>
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
          ) : value === 13 ? (
            <Report_bug />
          ) : (
            <Terms />
          )}
          {value === -1 ? (
            ""
          ) : (
            <FooterFunction callback={handleChange_footer} />
          )}
        </Paper>
      {/* </Paper> */}
    </header>
  );
}

export default Header_Function;
