import React, { useState } from "react";
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

import SearchIcon from "@mui/icons-material/Search";
import FooterFunction from "../footer";

import "../fonts/fonts.css";
import Header_Function from "../header";
import FooterFunction_home from "./footer_home";
import { Link, useNavigate } from "react-router-dom";


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

function Homepage({callback}) {
  const navigate = useNavigate();

  const table_color2 = `url(${table_color})`;

  const handle_callback = (val) => {
    callback(val);
  }

  const handleClick = () =>{
    // navigate('/app');
  }

  return (
    <>
      <CssBaseline />

      {/* <Paper
        sx={{
          width: "100%",
          height: "100vh",
          overflowY: "auto",
          margin: 0,
          padding: 0,
          backgroundColor: "black",
        }}
      > */}
        {/* <Paper
          sx={{
            width: "100%",
            height: "110%",
            backgroundImage: `url(${bg1})`,
            backgroundSize: "cover",
            overflowY: "auto",
            margin: 0,
            padding: 0,
            willChange: "transform", // Add will-change property
          }}
        > */}
          {/* <Header_Function val={-1} /> */}
          <Paper
            sx={{
              backgroundColor: "transparent",
              width: 750, // Set the width to 200px
              margin: "0 auto", // Center the paper
              padding: 2, // Add padding for better visibility
              boxShadow: 0,
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
              is a new launchpad being built for the crypto space. AI-BITRAGE
              has a vision of bringing guaranteed profits to all users across
              the space.
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
              The software is revolutionary and the development team has
              cultivated an algorithm, capable of evaluating{" "}
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
              onClick = {handleClick}
            >
              Launch App
            </Button>
          </Paper>
          <Grid
            container
            spacing={2}
            sx={{
              backgroundColor: "transparent",
              width: 750, // Set the width to 200px
              margin: "0 auto", // Center the paper
              // padding: 2, // Add padding for better visibility
              direction: "row",
              justifyContent: "space-between",
              paddingBottom: "50px",
            }}
          >
            <Grid item sx={{ margin: "0px" }}>
              <img
                src={animation1}
                alt="logo"
                style={{ margin: "0px", width: "150px", height: "200px" }}
              />
            </Grid>
            <Grid item>
              <img
                src={animation2}
                alt="logo"
                style={{ margin: "0px", width: "150px", height: "200px" }}
              />
            </Grid>
            <Grid item>
              <img
                src={animation3}
                alt="logo"
                style={{ margin: "0px", width: "150px", height: "200px" }}
              />
            </Grid>
          </Grid>
        {/* </Paper> */}
        <Paper
          sx={{
            width: "100%",
            height: "705vh",
            backgroundImage: `url(${bg2})`,
            backgroundSize: "cover",
            overflowY: "auto",
            margin: 0,
            padding: 0,
            willChange: "transform", // Add will-change property
          }}
        >
          <Grid
            container
            spacing={0}
            sx={{ margin: "200px 0px", direction: "row" }}
          >
            <Grid item lg={6}>
              <img
                src={home2}
                alt="logo"
                // style={{ margin: "0px", width: "100%", height: "100%" }}
                style={{ width: "800px", height: "430px", marginTop: "0%", marginLeft:"-330px" }} // Adjust width and height as needed
              />
            </Grid>
            <Grid item lg={6}>
              <Paper
                sx={{
                  backgroundColor: "transparent",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center", // Align content at the end
                  alignItems: "flex-end", // Center the content horizontally
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "center",
                    color: "white",
                    margin: "10px 90px 10px 10px",
                    fontFamily: "Maragsa",
                    fontSize: 40,
                  }}
                >
                  <strong> WHAT IS AI-BITRAGE? </strong>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: "end",
                    margin: "10px 90px 10px 100px",
                    color: "white",
                    fontFamily: "Lora",
                    fontSize: 20,
                  }}
                >
                  <span>
                    <strong>AI-BITRAGE</strong>
                  </span>{" "}
                  AI-BITRAGE is a new launchpad being built for the crypto
                  space. AI-BITRAGE has a vision of bringing guaranteed profits
                  to all users across the space. The launchpad is being
                  developed to exist and operate as an Initial Dex Offering
                  (IDO). The IDO is backed by investors that would for sure be
                  known as whales if their wallets were viewed by the general
                  public.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: "end",
                    margin: "10px 90px 10px 100px",
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
                    // margin: " 15px auto 10px", // Center the button
                    display: "block",
                    margin: " 15px 100px 10px", // Center the button
                  }}
                >
                  Launch App
                </Button>
              </Paper>
            </Grid>
          </Grid>
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <video width="840" height="460" controls>
              <source src="/path/to/your/local/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Container>
          <Grid
            container
            spacing={0}
            sx={{ margin: "100px 0px", direction: "row" }}
          >
            <Grid item lg={6}>
              <Paper
                sx={{
                  backgroundColor: "transparent",
                  width: "80%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center", // Align content at the end
                  alignItems: "flex-end", // Center the content horizontally
                  marginLeft: "auto", // Push the Paper to the right
                }}
              >
                <Container
                  width="100%"
                  sx={{
                    display: "column",
                    justifyContent: "center",
                    alignItems: "flex-end",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: "start",
                      color: "white",
                      margin: "10px 20px 10px auto",
                      fontFamily: "Maragsa",
                      fontSize: "70px",
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
                      textAlign: "start",
                      margin: "10px 20px 10px auto",
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
              lg={6}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <img
                src={animation4}
                alt="animation"
                style={{ margin: "0px", width: "70%" }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={0} sx={{ margin: "0px", direction: "row" }}>
            <Grid item lg={6}>
              <img
                src={animation5}
                alt="logo"
                style={{ margin: "0px", width: "100%" }}
              />
            </Grid>
            <Grid item lg={6}>
              <Paper
                sx={{
                  backgroundColor: "transparent",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center", // Align content at the end
                  alignItems: "flex-end", // Center the content horizontally
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "center",
                    color: "white",
                    margin: "10px 90px 10px 10px",
                    fontFamily: "Maragsa",
                    fontSize: 40,
                  }}
                >
                  <strong> How AI-BITRAGE will work? </strong>
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: "end",
                    margin: "10px 90px 10px 100px",
                    color: "white",
                    fontFamily: "Lora",
                    fontSize: 20,
                  }}
                >
                  The IDO is made for users to stake an amount of Ethereum, on
                  each pool of their choice. Each pool will only allow a certain
                  amount of users per month to stake Ethereum. E.G. each pool
                  will allow a max of 250 users per month (31 days). When the
                  month is over, users funds and profits will be unlocked from
                  the pool’s and will be accessible for withdrawals back into
                  the users wallets. The pool’s have been created to operate on
                  a “first come ,first serve” basis.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#FFFFFF",
                    color: "#3D073F",
                    borderRadius: "20px",
                    // margin: " 15px auto 10px", // Center the button
                    display: "block",
                    margin: " 15px 100px 10px", // Center the button
                  }}
                >
                  Launch App
                </Button>
              </Paper>
            </Grid>
          </Grid>
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
            <Grid item lg={12}>
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
                <Grid container spacing={2}>
                  <Grid item xs={12} lg={4}>
                    <Card
                      sx={{
                        margin: "0px",
                        padding: "10px",
                        background: `url(${cards_color})`,
                        backgroundSize: "100% 100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <CardContent
                        sx={{ textAlign: "center", paddingTop: "10px" }}
                      >
                        <Typography
                          variant="h6"
                          color="white"
                          sx={{
                            fontFamily: "Buenard",
                            fontSize: "30px",
                            paddingBottom: "0px",
                            paddingTop: "5px",
                          }}
                          gutterBottom
                        >
                          $999,876
                        </Typography>
                        <Typography
                          variant="body2"
                          color="white"
                          sx={{
                            fontFamily: "Poppins",
                            fontSize: "13px",
                            padding: "0px",
                            margin: "0px",
                          }}
                        >
                          Total Liquidity
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <Card
                      sx={{
                        margin: "0px",
                        padding: "10px",
                        background: `url(${cards_color})`,
                        backgroundSize: "100% 100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <CardContent
                        sx={{ textAlign: "center", paddingTop: "10px" }}
                      >
                        <Typography
                          variant="h6"
                          color="white"
                          sx={{
                            fontFamily: "Buenard",
                            fontSize: "30px",
                            paddingBottom: "0px",
                            paddingTop: "5px",
                          }}
                          gutterBottom
                        >
                          $245,190
                        </Typography>
                        <Typography
                          variant="body2"
                          color="white"
                          sx={{
                            fontFamily: "Poppins",
                            fontSize: "13px",
                            padding: "0px",
                            margin: "0px",
                          }}
                        >
                          24h Volume
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <Card
                      sx={{
                        margin: "0px",
                        padding: "10px",
                        background: `url(${cards_color})`,
                        backgroundSize: "100% 100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <CardContent
                        sx={{ textAlign: "center", paddingTop: "10px" }}
                      >
                        <Typography
                          variant="h6"
                          color="white"
                          sx={{
                            fontFamily: "Buenard",
                            fontSize: "30px",
                            paddingBottom: "0px",
                            paddingTop: "5px",
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
                            padding: "0px",
                            margin: "0px",
                          }}
                        >
                          AI-B Prize
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
                <Grid
                  container
                  spacing={2}
                  sx={{ marginTop: "10px", direction: "row" }}
                >
                  <Grid item sx={12} md={12} lg={2}>
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
                  <Grid item sx={12} md={12} lg={6}></Grid>
                  <Grid item sx={12} md={12} lg={4}>
                    <Container
                      sx={{
                        width: "100%",
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
                  <Grid item sx={12} md={12} lg={12}>
                    <Container
                      sx={{ height: "1px", background: "white" }}
                    ></Container>
                  </Grid>

                  <Grid item sx={12} md={12} lg={12}>
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
                                  color: "white",
                                }}
                              >
                                Pool
                              </TableCell>
                              <TableCell
                                style={{
                                  fontFamily: "Poppins",
                                  color: "white",
                                }}
                              >
                                Combined APR
                              </TableCell>
                              <TableCell
                                style={{
                                  fontFamily: "Poppins",
                                  color: "white",
                                }}
                              >
                                Total Liquidity
                              </TableCell>
                              <TableCell
                                style={{
                                  fontFamily: "Poppins",
                                  color: "white",
                                }}
                              >
                                24h Volume
                              </TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {tableData.map((row, index) => (
                              <TableRow
                                key={index}
                                sx={{
                                  background:
                                    index % 2 === 0
                                      ? table_color2
                                      : "transparent",
                                  borderBottom: "none", // Remove bottom border
                                  border: "0px solid white",
                                }}
                              >
                                <TableCell
                                  style={{
                                    fontFamily: "Poppins",
                                    color: "white",
                                  }}
                                >
                                  {row.pool}
                                </TableCell>
                                <TableCell
                                  style={{
                                    fontFamily: "Poppins",
                                    color: "white",
                                  }}
                                >
                                  {row.combinedAPR}
                                </TableCell>
                                <TableCell
                                  style={{
                                    fontFamily: "Poppins",
                                    color: "white",
                                  }}
                                >
                                  {row.totalLiquidity}
                                </TableCell>
                                <TableCell
                                  style={{
                                    fontFamily: "Poppins",
                                    color: "white",
                                  }}
                                >
                                  {row.volume24h}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Container>
                  </Grid>
                </Grid>
              </Container>
            </Grid>
            <Grid item sx={12} md={12} lg={12}>
              <FooterFunction_home callback2={handle_callback}/>
            </Grid>
          </Grid>
        </Paper>
      {/* </Paper> */}
    </>
  );
}

export default Homepage;
