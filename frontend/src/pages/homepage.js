import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import bg1 from "../images/background1.png";
import bg2 from "../images/background2.png";
import animation1 from "../images/animation1.gif";
import animation2 from "../images/animation2.gif";
import animation3 from "../images/animation3.gif";
import home2 from "../images/home2.gif";
import animation4 from "../images/animation4.gif";
import animation5 from "../images/animation5.gif";
import cards_color from "../images/cards.png";
import table_color from "../images/table_color.png";
import Telegram from "../images/Telegram.png";
import Discord from "../images/Discord.png";
import Twitter from "../images/Twitter.png";

import SearchIcon from "@mui/icons-material/Search";
import FooterFunction from "../footer";

import "../fonts/fonts.css";
import Header_Function from "../header";
import FooterFunction_home from "./footer_home";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const tableData = [
  {
    pool: "Pool 1",
    combinedAPR: "10%",
    totalLiquidity: "$1,000,000",
    volume24h: "$100,000",
  },
  {
    pool: "Pool 2",
    combinedAPR: "8%",
    totalLiquidity: "$800,000",
    volume24h: "$80,000",
  },
  {
    pool: "Pool 3",
    combinedAPR: "10%",
    totalLiquidity: "$1,000,000",
    volume24h: "$100,000",
  },
  {
    pool: "Pool 4",
    combinedAPR: "8%",
    totalLiquidity: "$800,000",
    volume24h: "$80,000",
  },
  {
    pool: "Pool 5",
    combinedAPR: "10%",
    totalLiquidity: "$1,000,000",
    volume24h: "$100,000",
  },
  {
    pool: "Pool 6",
    combinedAPR: "8%",
    totalLiquidity: "$800,000",
    volume24h: "$80,000",
  },
  {
    pool: "Pool 7",
    combinedAPR: "10%",
    totalLiquidity: "$1,000,000",
    volume24h: "$100,000",
  },
  {
    pool: "Pool 8",
    combinedAPR: "8%",
    totalLiquidity: "$800,000",
    volume24h: "$80,000",
  },
  {
    pool: "Pool 9",
    combinedAPR: "10%",
    totalLiquidity: "$1,000,000",
    volume24h: "$100,000",
  },
  {
    pool: "Pool 10",
    combinedAPR: "8%",
    totalLiquidity: "$800,000",
    volume24h: "$80,000",
  },
  // Add more dummy data as needed
];

function Homepage({ callback }) {
  const navigate = useNavigate();

  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdScreen = useMediaQuery(theme.breakpoints.down("md"));
  const matches = useMediaQuery("(min-width:600px)");

  const [coinsData, setCoinsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = coinsData.filter((row) =>
    row.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const table_color2 = `url(${table_color})`;

  const handle_callback = (val) => {
    callback(val);
  };

  const handleClick = () => {
    navigate("/app");
  };

  const api_link = "https://api.coinranking.com/v2/coins";

  const handleApi = async () => {
    try {
      const response = await axios.get(api_link);
      const data = response.data;
      const nameAndPriceArray = [];

      data.data.coins.forEach((coin) => {
        const { name, price, "24hVolume": volume, change } = coin;
        nameAndPriceArray.push({ name, price, volume, change });
      });
      console.log(nameAndPriceArray);
      console.log(data);
      setCoinsData(nameAndPriceArray);
      return data;
    } catch (error) {
      console.error("Error fetching data from the API:", error);
      throw error; // You can choose to handle or propagate the error as needed
    }
  };

  useEffect(() => {
    handleApi();
  }, []);

  useEffect(() => {
    console.log("filteredData", filteredData);
  }, [filteredData]);

  return (
    <>
      <CssBaseline />

      {/* --------------------------------------  Front Page  ------------------------------------------ */}

      <Paper
        sx={{
          backgroundColor: "transparent",
          width: "50%", // Default width
          margin: "0 auto", // Center the paper
          padding: 2, // Add padding for better visibility
          boxShadow: 0,
          "@media (max-width: 600px)": {
            width: "90%", // Set the width to 90% for xs screen size
          },
          "@media (min-width: 600px) and (max-width: 960px)": {
            width: "90%", // Set the width to 90% for sm screen size
          },
          "@media (min-width: 960px) and (max-width: 1280px)": {
            width: "90%", // Set the width to 90% for md screen size
          },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            color: "white",
            marginTop: 2,
            fontFamily: "Lora",
            fontSize: 30,
          }}
        >
          <strong>AI-BITRAGE</strong>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            color: "white",
            marginTop: 2,
            fontFamily: "Lora",
            fontSize: 20,
          }}
        >
          <span>
            <strong>AI-BITRAGE</strong>
          </span>{" "}
          is a new launchpad being built for the crypto space. AI-BITRAGE has a
          vision of bringing guaranteed profits to all users across the space.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            color: "white",
            marginTop: 2,
            fontFamily: "Lora",
            fontSize: 24,
          }}
        >
          The software is revolutionary and the development team has cultivated
          an algorithm, capable of evaluating{" "}
          <span>
            <strong>Ethereum</strong>
          </span>{" "}
          tokens across the{" "}
          <span>
            <strong>blockchain</strong>
          </span>
          .
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FFFFFF",
            color: "#3D073F",
            borderRadius: "20px",
            margin: " 15px auto 10px", // Center the button
            display: "block",
            // margin: "0 auto", // Center the button
          }}
          onClick={handleClick}
        >
          Launch App
        </Button>
      </Paper>
      {/* {isSmScreen ? (
        <Grid
          item
          sm={12}
          md={8}
          lg={8}
          sx={{ margin: "50px auto", height: "50px" }}
        >
          <Grid
            container
            sx={{ justifyContent: "center", alignItems: "center" }}
          >
            <Grid item sx={{ margin: "0px" }}>
              <img
                src={Twitter}
                alt="Twitter"
                style={{ height: "30px", width: "35px" }}
              />
            </Grid>
            <Grid item sx={{ margin: "0px 30px" }}>
              <img
                src={Discord}
                alt="Discord"
                style={{ height: "30px", width: "35px" }}
              />
            </Grid>
            <Grid item sx={{ margin: "0px" }}>
              <img
                src={Telegram}
                alt="Telegram"
                style={{ height: "30px", width: "35px" }}
              />
            </Grid>
          </Grid>
        </Grid>
      ) : ( */}
      <Grid
        container
        spacing={0}
        sx={{
          backgroundColor: "transparent",
          maxWidth: "100%", // Set maximum width to ensure responsiveness
          height: isSmScreen ? "23%" : isMdScreen ? "25%" : "38%",
          margin: "0 auto", // Center the container
          direction: "row",
          justifyContent: "space-between",
          // paddingBottom: "50px",
          // padding: "0px 15% 50px 15%",
          padding: isSmScreen
            ? "0px 5% 50px 5%"
            : isMdScreen
            ? "0px 10% 50px 10%"
            : "0px 15% 50px 15%",
        }}
      >
        <Grid
          item
          xs={4}
          sm={4}
          md={4}
          lg={4}
          xl={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: isMdScreen ? "100%" : "80%", // Set the default width
            // background: "black",
          }}
        >
          <img
            src={animation1}
            alt="logo"
            style={{ width: isSmScreen ? "80%" : (isMdScreen ? "50%" :"40%")}}
          />
        </Grid>
        <Grid
          item
          xs={4}
          sm={4}
          md={4}
          lg={4}
          xl={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            // background: "white",
            alignItems: "center",
          }}
        >
         <img
            src={animation2}
            alt="logo"
            style={{ width: isSmScreen ? "80%" : (isMdScreen ? "50%" :"40%")}}
          />
        </Grid>
        <Grid
          item
          xs={4}
          sm={4}
          md={4}
          lg={4}
          xl={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // background: "black",
          }}
        >
           <img
            src={animation3}
            alt="logo"
            style={{ width: isSmScreen ? "80%" : (isMdScreen ? "50%" :"40%")}}
          />
        </Grid>
      </Grid>
      {/* )} */}

      {/* -------------------------------------------------------------------------------------------------------- */}

      <Paper
        sx={{
          width: "auto",
          height: "auto",
          backgroundImage: `url(${bg2})`,
          backgroundSize: "inherit",
          overflowY: "hidden",
          margin: 0,
          padding: 0,
          willChange: "transform", // Add will-change property
        }}
      >
        {/* What is AI-BITRAGE? */}
        <Grid container sx={{ margin: "200px 0px", direction: "row" }}>
          <Grid
            item
            xs={10} // For extra-small screens
            sm={10} // For small screens
            md={12} // For medium screens
            lg={6} // For large screens
            xl={6}
          >
            <img
              src={home2}
              alt="logo"
              style={{
                width: "-webkit-fill-available",
                height: "100%",
                marginTop: "0%",
                marginLeft: "-60%",
              }} // Adjust width and height as needed
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Paper
              sx={{
                backgroundColor: "transparent",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: isSmScreen ? "center" : "flex-end",
                textAlign: isSmScreen ? "center" : "left",
                padding: isSmScreen ? "20px" : "0px", // Add padding for better readability on small screens
              }}
            >
              {/* <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  color: "white",
                  margin: isSmScreen ? "10px" : "10px 90px 10px 10px",
                  fontFamily: "Maragsa",
                  fontSize: 40,
                }}
              >
                <strong>
                  33{isSmScreen.toString()}33{matches.toString()}33
                </strong>
              </Typography> */}

              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  color: "white",
                  margin: isSmScreen ? "10px" : "10px 90px 10px 10px",
                  fontFamily: "Maragsa",
                  fontSize: 40,
                }}
              >
                <strong> WHAT IS AI-BITRAGE? </strong>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: isSmScreen ? "center" : "end",
                  margin: isSmScreen ? "10px" : "10px 90px 10px 100px",
                  color: "white",
                  fontFamily: "Lora",
                  fontSize: 20,
                }}
              >
                <span>
                  <strong>AI-BITRAGE</strong>
                </span>{" "}
                AI-BITRAGE is a new launchpad being built for the crypto space.
                AI-BITRAGE has a vision of bringing guaranteed profits to all
                users across the space. The launchpad is being developed to
                exist and operate as an Initial Dex Offering (IDO). The IDO is
                backed by investors that would for sure be known as whales if
                their wallets were viewed by the general public.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: isSmScreen ? "center" : "end",
                  margin: isSmScreen ? "10px" : "10px 90px 10px 100px",
                  color: "white",
                  fontFamily: "Lora",
                  fontSize: 24,
                }}
              >
                The software is revolutionary and the development team has
                cultivated an algorithm, capable of evaluating Ethereum tokens
                across the blockchain.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#FFFFFF",
                  color: "#3D073F",
                  borderRadius: "20px",
                  margin: " 15px auto 10px", // Center the button
                  display: "block",
                  // margin: "0 auto", // Center the button
                }}
                onClick={handleClick}
              >
                Launch App
              </Button>
            </Paper>
          </Grid>
        </Grid>

        {/* Video  */}
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Grid container>
            <Grid
              item
              xs={12} // For extra-small screens
              sm={12} // For small screens
              md={12} // For medium screens
              lg={12} // For large screens
              xl={12} // For extra-large screens
            >
              <video width="100%" height="100%" controls>
                <source src="/path/to/your/local/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Grid>
          </Grid>
        </Container>

        {/* Core Features  */}

        <Grid
          container
          spacing={0}
          sx={{ margin: "100px 0px", direction: "row" }}
        >
          <Grid
            item
            xs={12} // For extra-small screens
            sm={12} // For small screens
            md={6} // For medium screens
            lg={6} // For large screens
            xl={6}
          >
            <Paper
              sx={{
                backgroundColor: "transparent",
                width: isSmScreen ? "90%" : "80%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center", // Align content at the end
                alignItems: isSmScreen ? "center" : "flex-end", // Center the content horizontally
                marginLeft: "auto", // Push the Paper to the right
              }}
            >
              <Container
                width="100%"
                sx={{
                  display: "column",
                  justifyContent: "center",
                  alignItems: isSmScreen ? "center" : "flex-end",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: isSmScreen ? "center" : "start",
                    color: "white",
                    margin: "10px 20px 10px 20px",
                    fontFamily: "Maragsa",
                    fontSize: isSmScreen ? "50px" : "70px",
                    width: "70%",
                  }}
                >
                  <strong> Core </strong>
                  <br />
                  <strong> Features </strong>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: isSmScreen ? "center" : "start",
                    margin: "10px 20px 10px 20px",
                    color: "white",
                    fontFamily: "Lora",
                    fontSize: "22px",
                    width: "70%",
                  }}
                >
                  <strong>Swap</strong>
                  <br />
                  <strong>Bridge</strong>
                  <br />
                  <strong>Pool</strong>
                  <br />
                  <strong>Governance</strong>
                  <br />
                </Typography>
              </Container>
            </Paper>
          </Grid>
          <Grid
            item
            xs={12} // For extra-small screens
            sm={12} // For small screens
            md={6} // For medium screens
            lg={6} // For large screens
            xl={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <img
              src={animation4}
              alt="animation"
              style={{ margin: "0px", width: "70%" }}
            />
          </Grid>
        </Grid>

        {/* How AI-BITRAGE will work? */}

        <Grid container spacing={0} sx={{ margin: "0px", direction: "row" }}>
          <Grid
            item
            xs={12} // For extra-small screens
            sm={12} // For small screens
            md={6} // For medium screens
            lg={6} // For large screens
            xl={6}
          >
            <img
              src={animation5}
              alt="logo"
              style={{ margin: "0px", width: "100%" }}
            />
          </Grid>
          <Grid
            item
            xs={12} // For extra-small screens
            sm={12} // For small screens
            md={6} // For medium screens
            lg={6} // For large screens
            xl={6}
          >
            <Paper
              sx={{
                backgroundColor: "transparent",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center", // Align content at the end
                alignItems: isSmScreen ? "center" : "flex-end", // Center the content horizontally
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  color: "white",
                  margin: isSmScreen ? "20px" : "10px 90px 10px 10px",
                  fontFamily: "Maragsa",
                  fontSize: 40,
                }}
              >
                <strong> How AI-BITRAGE will work? </strong>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: isSmScreen ? "center" : "end",
                  margin: isSmScreen ? "20px" : "10px 90px 10px 100px",
                  color: "white",
                  fontFamily: "Lora",
                  fontSize: 20,
                }}
              >
                The IDO is made for users to stake an amount of Ethereum, on
                each pool of their choice. Each pool will only allow a certain
                amount of users per month to stake Ethereum. E.G. each pool will
                allow a max of 250 users per month (31 days). When the month is
                over, users funds and profits will be unlocked from the pool’s
                and will be accessible for withdrawals back into the users
                wallets. The pool’s have been created to operate on a “first
                come ,first serve” basis.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#FFFFFF",
                  color: "#3D073F",
                  borderRadius: "20px",
                  margin: " 15px auto 10px", // Center the button
                  display: "block",
                  // margin: "0 auto", // Center the button
                }}
                onClick={handleClick}
              >
                Launch App
              </Button>
            </Paper>
          </Grid>
        </Grid>

        {/* Pools */}
        <Grid
          container
          spacing={0}
          sx={{ marginTop: "200px", direction: "column" }}
        >
          <Grid item lg={12}>
            <Typography
              variant="h6"
              sx={{
                textAlign: "center",
                color: "white",
                margin: "10px 50px 10px 10px",
                fontFamily: "Maragsa",
                fontSize: 40,
              }}
            >
              Pools
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Container>
              <Typography
                variant="h6"
                sx={{
                  textAlign: "flex-start",
                  color: "white",
                  margin: "10px 50px 10px 10px",
                  fontFamily: "Maragsa",
                  fontSize: 25,
                }}
              >
                Overview
              </Typography>
              <Grid
                container
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Grid item xs={10} lg={4}>
                  <Card
                    sx={{
                      margin: isMdScreen
                        ? "0px 10px 0px 10px"
                        : "0px 50px 0px 50px",
                      // padding: "10px",
                      background: `url(${cards_color})`,
                      backgroundSize: "100% 100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CardContent
                      sx={{ textAlign: "center", paddingTop: "20px" }}
                    >
                      <Typography
                        variant="h6"
                        color="white"
                        sx={{
                          fontFamily: "Buenard",
                          fontSize: isMdScreen ? "20px" : "30px",
                          padding: "0px",
                        }}
                        gutterBottom
                      >
                        $
                        {coinsData.length > 0
                          ? Number(coinsData[0].price).toFixed(3)
                          : 0}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="white"
                        sx={{
                          fontFamily: "Poppins",
                          fontSize: "13px",
                          margin: "0px",
                          padding: "0px",
                        }}
                      >
                        Price
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={10} lg={4}>
                  <Card
                    sx={{
                      margin: isMdScreen
                        ? "0px 10px 0px 10px"
                        : "0px 50px 0px 50px",
                      // padding: "10px",
                      background: `url(${cards_color})`,
                      backgroundSize: "100% 100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CardContent
                      sx={{ textAlign: "center", paddingTop: "20px" }}
                    >
                      <Typography
                        variant="h6"
                        color="white"
                        sx={{
                          fontFamily: "Buenard",
                          fontSize: isMdScreen ? "20px" : "30px",
                          padding: "0px",
                        }}
                        gutterBottom
                      >
                        $
                        {coinsData.length > 0
                          ? Number(coinsData[0].volume).toFixed(0)
                          : 0}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="white"
                        sx={{
                          fontFamily: "Poppins",
                          fontSize: "13px",
                          margin: "0px",
                          padding: "0px",
                        }}
                      >
                        24h Volume
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={10} lg={4}>
                  <Card
                    sx={{
                      margin: isMdScreen
                        ? "0px 10px 0px 10px"
                        : "0px 50px 0px 50px",
                      // padding: "10px",
                      background: `url(${cards_color})`,
                      backgroundSize: "100% 100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CardContent
                      sx={{ textAlign: "center", paddingTop: "20px" }}
                    >
                      <Typography
                        variant="h6"
                        color="white"
                        sx={{
                          fontFamily: "Buenard",
                          fontSize: isMdScreen ? "20px" : "30px",
                          padding: "0px",
                        }}
                        gutterBottom
                      >
                        $0.99
                      </Typography>
                      <Typography
                        variant="body2"
                        color="white"
                        sx={{
                          fontFamily: "Poppins",
                          fontSize: "13px",
                          margin: "0px",
                          padding: "0px",
                        }}
                      >
                        AI-B Prize
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
              <Grid container sx={{ marginTop: "30px", direction: "row" }}>
                <Grid item xs={12} md={12} lg={2}>
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "flex-start",
                      color: "white",
                      margin: "10px 50px 10px 10px",
                      fontFamily: "Maragsa",
                      fontSize: 25,
                    }}
                  >
                    Pools
                  </Typography>
                </Grid>
                <Grid item xs={12} md={12} lg={6}></Grid>
                <Grid item xs={12} md={12} lg={4}>
                  <Container
                    sx={{
                      width: "80%",
                      height: "100%",
                      backgroundSize: "100% 100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white", // Set text color to white
                    }}
                  >
                    <TextField
                      label="Search Token or Address"
                      variant="outlined"
                      color="primary"
                      value={searchTerm}
                      onChange={handleSearchChange}
                      sx={{
                        background: `url(${cards_color})`,
                        backgroundSize: "100% 100%",

                        width: "100%", // Set width to 100%
                        "& .MuiInputLabel-root": {
                          color: "white", // Set label color to white
                        },
                        "& .MuiInputBase-input": {
                          color: "white", // Set input text color to white
                        },
                      }}
                      InputProps={{
                        endAdornment: <SearchIcon />,
                      }}
                    />
                  </Container>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <Container
                    sx={{
                      height: "1px",
                      background: "white",
                      width: "100%",
                      margin: "10px 0px",
                    }}
                  ></Container>
                </Grid>

                <Grid
                  item
                  xs={12}
                  md={12}
                  lg={12}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflowX: "auto",
                  }}
                >
                  <Container
                    sx={{
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <TableContainer>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell
                              style={{
                                fontFamily: "Poppins",
                                width: "70%",
                                fontSize: isMdScreen ? "10px" : "16px",
                                color: "white",
                              }}
                            >
                              Pool
                            </TableCell>
                            <TableCell
                              style={{
                                fontFamily: "Poppins",
                                color: "white",
                                fontSize: isMdScreen ? "10px" : "16px",
                              }}
                            >
                              Price
                            </TableCell>
                            <TableCell
                              style={{
                                fontFamily: "Poppins",
                                color: "white",
                                fontSize: isMdScreen ? "10px" : "16px",
                              }}
                            >
                              Change
                            </TableCell>
                            <TableCell
                              style={{
                                fontFamily: "Poppins",
                                fontSize: isMdScreen ? "10px" : "16px",
                                color: "white",
                              }}
                            >
                              24h Volume
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {coinsData.length > 0
                            ? filteredData.slice(0, 10).map((row, index) => (
                                <TableRow
                                  key={index}
                                  sx={{
                                    background:
                                      index % 2 === 0
                                        ? table_color2
                                        : "transparent",
                                    fontSize: isMdScreen ? "10px" : "16px",
                                    borderBottom: "none", // Remove bottom border
                                    border: "0px solid white",
                                  }}
                                >
                                  <TableCell
                                    style={{
                                      fontFamily: "Poppins",
                                      color: "white",
                                      fontSize: isMdScreen ? "10px" : "16px",
                                    }}
                                  >
                                    {row.name}
                                  </TableCell>
                                  <TableCell
                                    style={{
                                      fontFamily: "Poppins",
                                      color: "white",
                                      fontSize: isMdScreen ? "10px" : "16px",
                                    }}
                                  >
                                    $
                                    {row.price
                                      ? Number(row.price).toFixed(6)
                                      : "N/A"}
                                  </TableCell>
                                  <TableCell
                                    style={{
                                      fontFamily: "Poppins",
                                      color: "white",
                                      fontSize: isMdScreen ? "10px" : "16px",
                                    }}
                                  >
                                    {row.change}%
                                  </TableCell>
                                  <TableCell
                                    style={{
                                      fontFamily: "Poppins",
                                      color: "white",
                                      fontSize: isMdScreen ? "10px" : "16px",
                                    }}
                                  >
                                    ${row.volume}
                                  </TableCell>
                                </TableRow>
                              ))
                            : "Loading..."}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Container>
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <FooterFunction_home callback2={handle_callback} />
          </Grid>
        </Grid>

        {/* End */}
      </Paper>
    </>
  );
}

export default Homepage;
