import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";

import Bridge from "../../images/Bridge.png";
import bridge_transfer from "../../images/bridge_transfer.png";
import coin1 from "../../images/coin1.png";
import coin2 from "../../images/coin2.png";
import arrow from "../../images/arrow.png";
import btc from "../../images/btc.png";
import usdt from "../../images/usdt.png";
import polygon_left from "../../images/Polygon_left.png";
import polygon_right from "../../images/Polygon_right.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import "../../fonts/fonts.css";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function Bridge_function() {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));

  const matches = useMediaQuery("(min-width:600px)");

  const dummyMenuItems = [
    { id: 1, label: "BTC", value: 0.234, wallet: 10, rate: 40000, image: btc },
    {
      id: 2,
      label: "USDT",
      value: 0.435,
      wallet: 11,
      rate: 23004,
      image: usdt,
    },
    { id: 3, label: "BNB", value: 0.74, wallet: 12, rate: 650, image: btc },
    {
      id: 4,
      label: "Solana",
      value: 0.634,
      wallet: 14,
      rate: 1578,
      image: usdt,
    },
  ];

  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const [userInput, setUserInput] = useState(0);
  const [coinSelected, setcoinSelected] = useState("");
  const [profileAnchorEl2, setProfileAnchorEl2] = useState(null);
  const [userInput2, setUserInput2] = useState(0);
  const [coinSelected2, setcoinSelected2] = useState("");

  const handleProfileClose = () => {
    console.log("wdef");
    setProfileAnchorEl(null);
  };

  const handleMenuItemClick = (menuItem) => {
    console.log(menuItem);
    setcoinSelected(menuItem);
    handleProfileClose(); // Close the menu when an item is selected
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    // Check if the input is a number
    if (!isNaN(value)) {
      setUserInput(value);
    } else {
      setUserInput(0);
    }
  };

  const handleProfileClose2 = () => {
    setProfileAnchorEl2(null);
  };

  const handleMenuItemClick2 = (menuItem) => {
    console.log(menuItem);
    setcoinSelected2(menuItem);
    handleProfileClose2();
  };

  const handleInputChange2 = (event) => {
    const value = event.target.value;
    // Check if the input is a number
    if (!isNaN(value)) {
      setUserInput2(value);
    } else {
      setUserInput2(0);
    }
  };

  return (
    <div>
      {/* 1st Box */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "rgba(255, 255, 255, 0.20)", // Transparent background with 0.25 opacity
          width: isSmScreen ? "300px" : isMdScreen ? "500px" : "600px",
          height: isSmScreen ? "400px" : "380px",
          borderRadius: "20px",
          padding: 0,
          position: "relative",
          marginTop: isSmScreen ? "217px" : isMdScreen ? "65px" : "27px",
        }}
      >
        {/* Bridge container  */}

        <Grid
          container
          sx={{
            width: "100%",
            height: "100%",
            margin: "0px",
            padding: "0px",
          }}
        >
          {/* First Grid which contains icons */}

          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            sx={{
              height: "25%",
              width: "100%",
              zIndex: "1",
              position: "relative",
            }}
          >
            <Container
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <img
                src={btc}
                alt="Coin1"
                style={{ width: "40px", height: "42px", position: "relative" }}
              />
              <img
                src={polygon_left}
                alt="polygon_left"
                style={{ width: "90px", height: "40px", marginLeft: "-15px" }}
              />
              <img
                src={bridge_transfer}
                alt="bridge_transfer"
                style={{ width: "33px", height: "33px" }}
              />
              <img
                src={polygon_right}
                alt="polygon_right"
                style={{ width: "90px", height: "40px", marginRight: "-15px" }}
              />
              <img
                src={usdt}
                alt="coin2"
                style={{ width: "40px", height: "42px", position: "relative" }}
              />
            </Container>
          </Grid>

          {/* second Grid which contains fields */}

          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            sx={{
              height: "50%",
              width: "100%",
              zIndex: "1",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "33%",
                background: "transparent",
                display: "flex",
                direction: "row",
              }}
            >
              <Container
                sx={{
                  height: "80%",
                  width: "45%",
                  background: "black",
                  borderRadius: "20px",
                  // boxShadow: "0 0 40px 5px #50A883", // Add white box shadow
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    width: isSmScreen ? "84%" : isMdScreen ? "80%" : "93%",
                    height: "25px",
                    position: "absolute",
                    left: "15px",
                    top: "10px",
                  }}
                  onClick={(event) => setProfileAnchorEl(event.currentTarget)}
                >
                  <Typography
                    sx={{
                      fontFamily: "Aclonica",
                      fontSize: isSmScreen ? "11px" : "14px",
                      width: "80%",
                      color: "white",
                      margin: "5px",
                    }}
                  >
                    {coinSelected.label || "Network"}
                  </Typography>
                  <KeyboardArrowDownIcon sx={{ color: "white" }} />
                  <Menu
                    anchorEl={profileAnchorEl}
                    open={Boolean(profileAnchorEl)}
                    onClose={handleProfileClose}
                    PaperProps={{
                      sx: {
                        backgroundColor: "rgba(0, 0, 0, 0.8)", // Background color with opacity
                        borderRadius: "10px",
                        minWidth: "170px",
                        marginTop: "5px",
                      },
                    }}
                  >
                    {dummyMenuItems.map((menuItem) => (
                      <MenuItem
                        key={menuItem.id}
                        sx={{
                          color: "#FFFFFF",
                          justifyContent: "center",
                          width: "100%",
                          padding: "0px",
                          margin: "15px 0px",
                        }}
                        onClick={() => handleMenuItemClick(menuItem)}
                      >
                        <Grid
                          container
                          direction="row"
                          sx={{
                            width: "80%",
                            height: "50%",
                            borderRadius: "15px",
                            cursor: "pointer",
                          }}
                        >
                          <Grid item>
                            <img
                              src={menuItem.image}
                              alt={`Coin${menuItem.id}`}
                              style={{ width: "80%", height: "70%" }}
                            />
                          </Grid>
                          <Grid item>
                            <Grid container direction="column">
                              <Grid item>
                                <Typography
                                  style={{
                                    fontFamily: "Poly",
                                    fontSize: "14px",
                                    // color: "#9E9D9D",
                                    margin: "0px 0px 0px 0px",
                                  }}
                                >
                                  {menuItem.label}
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography
                                  style={{
                                    fontFamily: "Poppins",
                                    fontSize: "11px",
                                    color: "black",
                                    // color: "#9E9D9D",
                                    margin: "0px 0px 0px 3px",
                                  }}
                                >
                                  ${menuItem.value.toFixed(2)}
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Container>
              <Container
                sx={{ height: "100%", width: "50%", background: "black" }}
              ></Container>
            </Box>
            <Box
              sx={{ width: "100%", height: "33%", background: "black" }}
            ></Box>
            <Box sx={{ width: "100%", height: "34%", background: "red" }}></Box>

            {/* ----------------------------------------------------------------------- */}

            <Container
              sx={{
                background: "black",
                borderRadius: "20px",
                width: "90%",
                height: "75%",
                display: "flex",
                boxShadow: "0 0 40px 5px #50A883", // Add white box shadow
                position: "relative",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100px",
                  height: "25px",
                  position: "absolute",
                  left: "15px",
                  top: "10px",
                }}
                onClick={(event) => setProfileAnchorEl(event.currentTarget)}
              >
                <img
                  src={btc}
                  alt="Coin1"
                  style={{ width: "25px", height: "25px" }}
                />
                <Typography
                  sx={{
                    fontFamily: "Aclonica",
                    fontSize: isSmScreen ? "9px" : "11px",
                    color: "white",
                    margin: "5px",
                  }}
                >
                  {"BTC"}
                </Typography>
                <KeyboardArrowDownIcon sx={{ color: "white" }} />
              </Box>
            </Container>

            {/* ----------------------------------------------------------------------- */}
          </Grid>

          {/* Third Grid which contains "in wallet" fields */}

          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            sx={{
              height: "25%",
              width: "100%",
              zIndex: "1",
            }}
          ></Grid>
        </Grid>
      </Box>

      {/* 2nd Box */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "rgba(255, 255, 255, 0.20)", // Transparent background with 0.25 opacity
          width: isSmScreen ? "300px" : isMdScreen ? "500px" : "600px",
          height: isSmScreen ? "100px" : "100px",
          borderRadius: "20px",
          padding: 0,
          position: "relative",
          marginTop: "27px",
          marginBottom: isSmScreen ? "45px" : "0px",
        }}
      ></Box>
    </div>
  );
}

export default Bridge_function;
