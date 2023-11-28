import React, { useState } from "react";
import {
  Box,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";

import animation5 from "../../images/animation5.gif";
import animation6 from "../../images/animation6.gif";
import bg3 from "../../images/background3.png";
import sidebar from "../../images/sidebar.png";
import Bridge from "../../images/Bridge.png";
import Swap from "../../images/Swap.png";
import Pool from "../../images/Pool.png";
import Governance from "../../images/Governance.png";
import Purple_dots from "../../images/Purple_dots.png";
import transfer from "../../images/transfer.png";
import coin1 from "../../images/coin1.png";



import "../../fonts/fonts.css";
import FooterFunction from "../../footer";

function Main() {

  const [userInput, setUserInput] = useState(0);
  const price = 10; // Replace with your actual price

  const handleInputChange = (event) => {
    const value = event.target.value;
    // Check if the input is a number
    if (!isNaN(value)) {
      setUserInput(value);
    }
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
          }}
        >
          <Grid container sx={{ width: "100%", height: "100%" }}>
            <Grid item xs={1} md={1} lg={1}></Grid>
            <Grid
              item
              xs={12}
              md={0.75}
              lg={0.75}
              sx={{ background: `url(${sidebar})` }}
            >
              <Grid
                container
                direction="column"
                sx={{ width: "100%", height: "100%" }}
              >
                <Grid item md={2}>
                  <Box
                    sx={{
                      padding: 0,
                      margin: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Typography
                      variant="body1"
                      padding="0px"
                      sx={{
                        textAlign: "center",
                        color: "white",
                        margin: "40px 0px 0px 0px",
                        padding: "0px", // Set padding to 0
                        fontFamily: "Maragsa",
                        width: "100%",
                        fontSize: 12,
                      }}
                    >
                      AI-Bitrage
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={6}>
                  <Box
                    sx={{
                      // background: "white",
                      color: "white",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Tooltip title="Bridge" placement="bottom-end">
                      <img
                        src={Bridge}
                        alt="Documentation Image"
                        style={{
                          width: "80%",
                          height: "70px",
                          cursor: "pointer",
                          margin: "20px 10px",
                        }}
                      />
                    </Tooltip>
                    <Tooltip title="Pool" placement="bottom-end">
                      <img
                        src={Pool}
                        alt="Documentation Image"
                        style={{
                          width: "80%",
                          height: "70px",
                          cursor: "pointer",
                          margin: "20px 10px",
                        }}
                      />
                    </Tooltip>

                    <Tooltip title="Swap" placement="bottom-end">
                      <img
                        src={Swap}
                        alt="Documentation Image"
                        style={{
                          width: "80%",
                          height: "70px",
                          cursor: "pointer",
                          margin: "20px 10px",
                        }}
                      />
                    </Tooltip>

                    <Tooltip title="Governance" placement="bottom-end">
                      <img
                        src={Governance}
                        alt="Documentation Image"
                        style={{
                          width: "80%",
                          height: "70px",
                          cursor: "pointer",
                          margin: "20px 10px",
                        }}
                      />
                    </Tooltip>

                    <Tooltip title="Options" placement="bottom-end">
                      <img
                        src={Purple_dots}
                        alt="Documentation Image"
                        style={{
                          width: "50%",
                          height: "18px",
                          margin: "10px 22px",
                          cursor: "pointer",
                        }}
                      />
                    </Tooltip>
                  </Box>
                </Grid>
                <Grid item md={4}>
                  <Container
                    sx={{
                      // background: "black",
                      width: "100%",
                      height: "100%",
                    }}
                  ></Container>
                </Grid>
              </Grid>
            </Grid>
            {/* Image */}
            <Grid item xs={12} md={6.25} lg={6.25}>
              <Box
                sx={{
                  margin: "200px auto",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "#5C2D7C",
                  width: "500px",
                  height: "300px",
                  borderRadius: "20px",
                  padding: 0,
                  position: "relative",
                }}
              >
                <img
                  src={transfer}
                  alt="Your Image"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: "2", // Ensure the image is above other elements
                  }}
                />

                <Grid
                  container
                  sx={{
                    width: "100%",
                    height: "100%",
                    margin: "0px",
                    padding: "0px",
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    md={12}
                    lg={12}
                    sx={{
                      height: "50%",
                      width: "100%",
                      boxShadow: "0px 0px 10px 2px black",
                      zIndex: "1",
                    }}
                  >
                    <Grid
                      container
                      item
                      xs={12}
                      md={12}
                      lg={12}
                      sx={{
                        height: "50%",
                        width: "100%",
                        zIndex: "1",
                        padding: "16px", // Adjust padding as needed
                      }}
                    >
                      <Grid item xs={6}>
                        <FormControl width="100px" height="70px">
                          <InputLabel id="select-label">
                            Select Option
                          </InputLabel>
                          <Select labelId="select-label" value={userInput}>
                            <MenuItem value={0}>
                              <img
                                src={coin1}
                                alt="Logo"
                                style={{ width: "24px", marginRight: "8px" }}
                              />
                              Title
                              <br />
                              Price: ${price.toFixed(2)}
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          label="User Input"
                          type="number"
                          value={userInput}
                          onChange={handleInputChange}
                          InputProps={{
                            startAdornment: (
                              <span style={{ marginRight: "8px" }}>
                                Price: ${(price * userInput).toFixed(2)}
                              </span>
                            ),
                            inputProps: {
                              step: 0.01,
                              min: 0,
                            },
                          }}
                          fullWidth
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={12}
                    lg={12}
                    sx={{ height: "50%", width: "100%" }}
                  ></Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <img
                src={animation6}
                alt="Documentation Image"
                style={{ width: "100%", height: "90%" }}
              />
            </Grid>
          </Grid>
        </Paper>
      </Paper>
    </div>
  );
}

export default Main;
