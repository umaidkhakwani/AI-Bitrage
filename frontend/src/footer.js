import React, { useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import footer_img from "./images/footer.png";
import Telegram from "./images/Telegram.png";
import Discord from "./images/Discord.png";
import Twitter from "./images/Twitter.png";
import "./fonts/fonts.css";
import Header_Function from "./header";

import { Link, useNavigate } from "react-router-dom";


function FooterFunction({callback}) {

  const handleclick = (val) => {
    console.log("footer",val);
    callback(val);
  }

  return (
    <footer>
      <Container
        sx={{
          height: "2px",
          background: "white",
          margin: "300px auto 50px auto",
        }}
      ></Container>
      <Grid container sx={{ direction: "column" }}>
        <Grid
          item
          sx={{
            margin: "20px auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          xs={12}
          md={12}
          lg={12}
        >
          <img
            src={footer_img}
            alt="footer"
            style={{ margin: "0px auto", height: "120px" }}
          />
        </Grid>
        <Grid
          item
          sx={{ margin: "0px auto", height: "210px" }}
          sm={12}
          md={12}
          lg={8}
        >
          <Grid container sx={{ direction: "row", height: "100%" }}>
            <Grid
              item
              sx={{
                margin: "0px auto",
                display: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Lora",
                  fontSize: "30px",
                  color: "white",
                  lineHeight: "1.2",
                }}
              >
                Policies
                <br />
                <br />
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Lora",
                  fontSize: "20px",
                  color: "white",
                  lineHeight: "1.2",
                  cursor:"pointer",
                  textDecoration: "underline",
                }}
                onClick={() => handleclick(10)}

              >
                Terms of use 
                <br />
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Lora",
                  fontSize: "20px",
                  color: "white",
                  lineHeight: "1.2",
                  cursor:"pointer",
                  textDecoration: "underline",
                }}
                onClick={() => handleclick(11)}
              >
                Cookie Policy
                <br />
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Lora",
                  fontSize: "20px",
                  color: "white",
                  lineHeight: "1.2",
                  cursor:"pointer",
                  textDecoration: "underline",
                }}
                onClick={() => handleclick(12)}

              >
                Privacy Policy
                <br />
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                margin: "0px auto",
                display: "column",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Lora",
                  fontSize: "30px",
                  color: "white",
                  lineHeight: "1.2",
                }}
              >
                AI-BITRAGE
                <br />
                <br />
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Lora",
                  fontSize: "20px",
                  color: "white",
                  lineHeight: "1.2",
                }}
              >
                Trade/Swap
                <br />
                Liquidity
                <br />
                Pools
                <br />
                Governance
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                margin: "0px auto",
                display: "column",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Lora",
                  fontSize: "30px",
                  color: "white",
                  lineHeight: "1.2",
                }}
              >
                Developers
                <br />
                <br />
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Lora",
                  fontSize: "20px",
                  color: "white",
                  lineHeight: "1.2",
                  textDecoration: "underline",
                  cursor:"pointer",
                }}
                onClick={() => handleclick(4)}
              >
                Docs
                <br />
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Lora",
                  fontSize: "20px",
                  color: "white",
                  lineHeight: "1.2",
                  textDecoration: "underline",
                  cursor:"pointer",
                }}
                onClick={() => handleclick(13)}
              >
                Bug Bounty
                <br />
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                margin: "0px auto",
                display: "column",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Lora",
                  fontSize: "30px",
                  color: "white",
                  lineHeight: "1.2",
                }}
              >
                Community
                <br />
                <br />
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Lora",
                  fontSize: "20px",
                  color: "white",
                  lineHeight: "1.2",
                }}
              >
                Discord
                <br />
                Medium
                <br />
                Reddit
                <br />
                Telegram
                <br />
                Twitter
                <br />
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          sx={{ margin: "0px auto", height: "50px" }}
          sm={12}
          md={8}
          lg={8}
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
        <Grid item lg={12}>
          <Container
            sx={{
              height: "2px",
              background: "white",
              margin: "10px auto 10px auto",
            }}
          ></Container>
        </Grid>
        <Grid item lg={12}>
          <Typography
            sx={{
              textAlign: "center",
              color: "white",
              margin: "10px 50px 10px 10px",
              fontFamily: "Poppins",
              fontSize: 20,
            }}
          >
            Copyright 2023. All Rights Reserved. Designed and Developed by
            Meptics ltd.
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
}

export default FooterFunction;