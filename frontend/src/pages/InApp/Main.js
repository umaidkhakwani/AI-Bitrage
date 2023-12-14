import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  Menu,
  MenuItem,
  Paper,
  Select,
  Tab,
  Tabs,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";

import animation6 from "../../images/animation6.gif";
import bg3 from "../../images/app_bg.gif";
import sidebar from "../../images/sidebar.png";
import Bridge from "../../images/bridge_img.png";
import Swap from "../../images/swap_img.png";
import Pool from "../../images/pool_img.png";
import Bridge_select from "../../images/bridge_select.png";
import Swap_select from "../../images/swap_select.png";
import Pool_select from "../../images/pool_select.png";

import transfer from "../../images/transfer.png";
import coin1 from "../../images/coin1.png";
import connect_wallet from "../../images/connect_wallet.png";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import logo_top from "../../images/logo_top.png";
import app_sidebar from "../../images/app_sidebar.gif";

import "../../fonts/fonts.css";
import FooterFunction from "../../footer";
import Bridge_function from "./Bridge";
import Swap_function from "./Swap";
import Pool_function from "./Pool";
import ReplyIcon from "@mui/icons-material/Reply";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import styled from "styled-components";
import useMediaQuery from "@mui/material/useMediaQuery";

function Main() {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isXSmScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLgScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const matches = useMediaQuery("(min-width:600px)");

  const navigate = useNavigate();
  const [pageOption, setpageOption] = useState("swap");
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const [value, setValue] = useState(-1);

  const TabsContainer = styled.div`
    display: flex;
    overflow-x: auto;
    justify-content: ${({ isSmScreen }) =>
      isSmScreen ? "center" : "center"};
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

  const handleChange = (event, newValue) => {
    console.log("newValue", newValue);
    setValue(newValue);
  };

  const handleClickOpen = () => {
    console.log("clicked");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick_Home = () => {
    navigate("/");
  };

  return (
    <div>
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
        {/* ----------------------------------------------  Side Option ------------------------------------------------------- */}
        {!isMdScreen ? (
          <Grid
            container
            direction="column"
            style={{
              width: "6%",
              height: "96%",
              position: "fixed",
              left: "0px",
              top: "23px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              alignContent: "center",
              flexWrap: "nowrap",
              background: `url(${app_sidebar})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: 100,
              borderRadius: "7px",
              left: "100px",
              top: "23px",
            }}
          >
            <Grid item md={2}>
              <Box
                sx={{
                  padding: 0,
                  marginTop: "5px",
                  width: "100%",
                  height: "100%",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <Tooltip title="Homepage" placement="bottom-end">
                  <img
                    src={logo_top}
                    alt="logo"
                    width="90%"
                    height="60%"
                    style={{ margin: "0px", cursor: "pointer" }}
                    onClick={handleClick_Home}
                  />
                </Tooltip>
              </Box>
            </Grid>
            <Grid item md={7}>
              <Box
                sx={{
                  // background: "white",
                  color: "white",
                  width: "100%",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Tooltip title="Bridge" placement="bottom-end">
                  {pageOption === "bridge" ? (
                    <img
                      src={Bridge_select}
                      alt="Documentation Image"
                      style={{
                        width: "80%",
                        height: "70px",
                        cursor: "pointer",
                        margin: "20px 10px",
                      }}
                    />
                  ) : (
                    <img
                      src={Bridge}
                      alt="Documentation Image"
                      style={{
                        width: "80%",
                        height: "70px",
                        cursor: "pointer",
                        margin: "20px 10px",
                      }}
                      onClick={() => setpageOption("bridge")}
                    />
                  )}
                </Tooltip>
                <Tooltip title="Pool" placement="bottom-end">
                  {pageOption === "pool" ? (
                    <img
                      src={Pool_select}
                      alt="Documentation Image"
                      style={{
                        width: "80%",
                        height: "70px",
                        cursor: "pointer",
                        margin: "20px 10px",
                      }}
                    />
                  ) : (
                    <img
                      src={Pool}
                      alt="Documentation Image"
                      style={{
                        width: "80%",
                        height: "70px",
                        cursor: "pointer",
                        margin: "20px 10px",
                      }}
                      onClick={() => setpageOption("pool")}
                    />
                  )}
                </Tooltip>

                <Tooltip title="Swap" placement="bottom-end">
                  {pageOption === "swap" ? (
                    <img
                      src={Swap_select}
                      alt="Documentation Image"
                      style={{
                        width: "80%",
                        height: "70px",
                        cursor: "pointer",
                        margin: "20px 10px",
                      }}
                    />
                  ) : (
                    <img
                      src={Swap}
                      alt="Documentation Image"
                      style={{
                        width: "80%",
                        height: "70px",
                        cursor: "pointer",
                        margin: "20px 10px",
                      }}
                      onClick={() => setpageOption("swap")}
                    />
                  )}
                </Tooltip>
              </Box>
            </Grid>
            <Grid item md={3}>
              <Container
                sx={{
                  // background: "black",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Tooltip title="Home" placement="bottom">
                  <ReplyIcon
                    style={{
                      color: `#ffffff9c`,
                      fontSize: "36px",
                      cursor: "pointer",
                    }}
                    onClick={handleClick_Home}
                  />
                </Tooltip>
              </Container>
            </Grid>
          </Grid>
        ) : null}

        {/* Header for medium and small screens */}

        {isMdScreen ? (
          <Box
            sx={{
              width: "100%",
              height: isSmScreen ? "130px " : "85px", // Adjusted height
              zIndex: "5",
              position: "absolute",
              // left: "5%",
              display: "flex",
              alignItems: "center",
              flexWrap: "nowrap",
              flexDirection: isSmScreen ? "column" : "row",
              justifyContent: "center",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(8px)",
              borderRadius: "10px", // Added border radius for rounded corners
            }}
          >
            <img
              src={logo_top}
              alt="logo"
              style={{ margin: "0px", cursor: "pointer", width: "55px" }}
              onClick={handleClick_Home}
            />
            <TabsContainer isSmScreen={isSmScreen}>
              <TabItem
                selected={activeTab === "Swap"}
                onClick={() => {
                  setpageOption("swap");
                  setActiveTab("Swap");
                }}
              >
                Swap
              </TabItem>
              <TabItem
                selected={activeTab === "Pool"}
                onClick={() => {
                  setpageOption("pool");
                  setActiveTab("Pool");
                }}
              >
                Pool
              </TabItem>
              <TabItem
                selected={activeTab === "Bridge"}
                onClick={() => {
                  setpageOption("bridge");
                  setActiveTab("Bridge");
                }}
              >
                Bridge
              </TabItem>
            </TabsContainer>
            {/* <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
              sx={{
                backgroundColor: "transparent", // Set tabs background to transparent
                width: isXSmScreen ? "80%" : "45%", // Adjust the width here
                "& .MuiTabs-scrollButtons": {
                  // Customize the color of the scroll buttons here
                  color: "white", // Replace with your desired color
                },
              }}
            >
              <Tab
                label="Swap"
                sx={{ color: "white" }}
                onClick={() => setpageOption("swap")}
              />
              <Tab
                label="Pool"
                sx={{ color: "white" }}
                onClick={() => setpageOption("pool")}
              />
              <Tab
                label="Bridge"
                sx={{ color: "white" }}
                onClick={() => setpageOption("bridge")}
              />
            </Tabs> */}
          </Box>
        ) : null}

        {/* ------------------------------------------------------------------------------------------------------------------- */}
        <Paper
          sx={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${bg3})`,
            backgroundSize: "cover",
            overflowY: "auto",
            margin: 0,
            padding: 0,
            willChange: "transform", // Add will-change property
            // position: "relative",
          }}
        >
          <Grid container sx={{ width: "100%", height: "100%" }}>
            <Grid item xs={1} md={1.75} lg={1.75}></Grid> {/* Empty Grid */}
            {/* ----------------------------------------------  Connect Wallet Dialog ------------------------------------------------------- */}
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <Paper sx={{ background: "#5C2D7C" }}>
                <Box
                  sx={{
                    padding: "16px",
                    position: "relative",
                    width: "400px",
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      color: "white",
                      marginBottom: "16px",
                      fontFamily: "Poppins",
                      fontSize: "14px",
                    }}
                  >
                    Connect to a Wallet
                  </Typography>
                  <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                      position: "absolute",
                      top: "8px",
                      right: "8px",
                      color: "white",
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: "40px",
                    }}
                  >
                    {[1, 2, 3, 4].map((index) => (
                      <Box
                        key={index}
                        sx={{
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          // background: "5C2D7C",
                          width: "100%",
                          height: "50px",
                          borderRadius: "10px",
                          cursor: "pointer",
                          marginBottom: "8px",
                          backgroundColor: "rgba(139, 91, 255, 0.3)", // Background color with opacity
                        }}
                      >
                        <img
                          src={connect_wallet}
                          alt="Documentation Image"
                          style={{
                            width: "40px",
                            height: "80%",
                            margin: "0px 10px",
                          }}
                        />
                        <Typography
                          style={{
                            fontFamily: "Maragsa",
                            fontSize: "14px",
                            color: "#9E9D9D",
                          }}
                        >
                          Install Wallet {index}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Paper>
            </Dialog>
            {/* ------------------------------------------------------------------------------------------------------------------- */}
            {/* swap container */}
            <Grid
              item
              xs={12}
              md={10.25}
              lg={10.25}
              zIndex={4}
              sx={{
                background: "transparent",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
                flexDirection: "column",
              }}
            >
              {!isMdScreen ? (
                <Box
                  sx={{
                    display: "flex",
                    // justifyContent: "center",
                    width: "200px",
                    height: "35px",
                    zIndex: "3",
                    background: "5C2D7C",
                    flexDirection: "row",
                    position: "absolute",
                    right: "0px",
                    top: "0px",
                    marginTop: "40px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      background: "white",
                      width: "60%",
                      borderRadius: "7px",
                      cursor: "pointer",
                      margin: "2px",
                      background: "#50A883",
                    }}
                    onClick={handleClickOpen}
                  >
                    <Typography
                      style={{
                        fontFamily: "Aclonica",
                        fontSize: "12px",
                        color: "#ffff",
                      }}
                    >
                      Connect Wallet
                    </Typography>
                  </Box>
                  <img
                    src={connect_wallet}
                    alt="Documentation Image"
                    style={{ width: "20%", height: "100%" }}
                  />
                </Box>
              ) : null}

              {pageOption === "swap" ? (
                <Swap_function />
              ) : pageOption === "bridge" ? (
                <Bridge_function />
              ) : pageOption === "pool" ? (
                <Pool_function />
              ) : (
                ""
              )}

              {/* Connect Wallet */}
              {
                pageOption === "pool" ? "" : null
                // <Box
                //   sx={{
                //     margin: "20px auto",
                //     display: "flex",
                //     justifyContent: "center",
                //     alignItems: "center",
                //     background: "#5C2D7C",
                //     width: isSmScreen
                //       ? "300px"
                //       : isMdScreen
                //       ? "400px"
                //       : "500px",
                //     height: "60px",
                //     borderRadius: "20px",
                //     padding: 0,
                //     position: "relative",
                //     cursor: "pointer",
                //   }}
                //   onClick={handleClickOpen}
                // >
                //   <Typography
                //     style={{
                //       fontFamily: "Maragsa",
                //       fontSize: "18px",
                //       color: "#9E9D9D",
                //       margin: "0px 0px 0px 0px",
                //     }}
                //   >
                //     Connect Wallet
                //   </Typography>
                // </Box>
              }
            </Grid>
            {/* ----------------------------------------------  Animation ------------------------------------------------------- */}
            {/* {!isMdScreen ? (
              <Grid item xs={12} md={0} lg={0}>
                <Box
                  sx={{
                    display: "flex",
                    width: "200px",
                    height: "35px",
                    zIndex: "3",
                    background: "5C2D7C",
                    flexDirection: "row",
                    position: "absolute",
                    marginTop: "40px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      background: "white",
                      width: "60%",
                      borderRadius: "7px",
                      cursor: "pointer",
                      margin: "2px",
                      background: "#50A883",
                    }}
                    onClick={handleClickOpen}
                  >
                    <Typography
                      style={{
                        fontFamily: "Aclonica",
                        fontSize: "12px",
                        color: "#ffff",
                      }}
                    >
                      Connect Wallet
                    </Typography>
                  </Box>
                  <img
                    src={connect_wallet}
                    alt="Documentation Image"
                    style={{ width: "20%", height: "100%" }}
                  />
                </Box>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <img
                    src={animation6}
                    alt="Documentation Image"
                    style={{
                      width: "250%",
                      height: "99%",
                      marginLeft: "-400px",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "250%",
                      height: "99%",
                      marginLeft: "-400px",
                      backgroundColor: "black",
                      opacity: pageOption === "pool" ? 0.7 : 0.3, // Adjust the opacity as needed
                    }}
                  ></div>
                </div>
              </Grid>
            ) : null} */}
            {/* ----------------------------------------------------------------------------------------------------------------- */}
          </Grid>
        </Paper>
      </Paper>
    </div>
  );
}

export default Main;
