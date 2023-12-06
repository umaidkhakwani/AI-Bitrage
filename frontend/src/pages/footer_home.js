import React, { useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import footer_img from "../images/footer.png";
import Telegram from "../images/Telegram.png";
import Discord from "../images/Discord.png";
import Twitter from "../images/Twitter.png";
import "../fonts/fonts.css";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Link, useNavigate } from "react-router-dom";

function FooterFunction_home({ callback2 }) {
  const theme = useTheme();
  const isSmScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const matches = useMediaQuery("(min-width:600px)");

  const handleclick = (val) => {
    console.log("footer", val);
    callback2(val);
  };

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
        {/* Footer Logo */}

        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          sx={{
            margin: "20px auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={footer_img}
            alt="footer"
            style={{ margin: "0px auto", height: "120px" }}
          />
        </Grid>

        {/* Footer Links and Texts*/}

        <Grid
          item
          sm={12}
          md={12}
          lg={8}
          sx={{ margin: "0px auto", height: "auto" }}
        >
          <Grid container sx={{ direction: "row", height: "100%" }}>
            <Grid
              item
              sm={6}
              md={6}
              lg={3}
              sx={{
                margin: "0px auto 20px auto",
                display: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Lora",
                  fontSize: isSmScreen ? "20px" : "30px",
                  color: "white",
                  lineHeight: "1.2",
                  textAlign: "center",
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
                  fontSize: isSmScreen ? "16px" : "20px",
                  color: "white",
                  lineHeight: "1.2",
                  cursor: "pointer",
                  textAlign: "center",
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
                  fontSize: isSmScreen ? "16px" : "20px",
                  color: "white",
                  lineHeight: "1.2",
                  cursor: "pointer",
                  textAlign: "center",
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
                  fontSize: isSmScreen ? "16px" : "20px",

                  color: "white",
                  lineHeight: "1.2",
                  cursor: "pointer",
                  textAlign: "center",
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
              sm={6}
              md={6}
              lg={3}
              sx={{
                margin: "0px auto 20px auto",
                display: "column",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Lora",
                  fontSize: isSmScreen ? "16px" : "30px",
                  color: "white",
                  textAlign: "center",
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
                  fontSize: isSmScreen ? "16px" : "20px",

                  color: "white",
                  textAlign: "center",
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
              sm={6}
              md={6}
              lg={3}
              sx={{
                margin: "0px auto 20px auto",
                display: "column",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Lora",
                  fontSize: isSmScreen ? "20px" : "30px",
                  color: "white",
                  textAlign: "center",
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
                  fontSize: isSmScreen ? "16px" : "20px",

                  color: "white",
                  lineHeight: "1.2",
                  textDecoration: "underline",
                  textAlign: "center",
                  cursor: "pointer",
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
                  fontSize: isSmScreen ? "16px" : "20px",

                  color: "white",
                  lineHeight: "1.2",
                  textDecoration: "underline",
                  textAlign: "center",
                  cursor: "pointer",
                }}
                onClick={() => handleclick(13)}
              >
                Bug Bounty
                <br />
              </Typography>
            </Grid>
            <Grid
              item
              sm={6}
              md={6}
              lg={3}
              sx={{
                margin: "0px auto 20px auto",
                display: "column",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Lora",
                  fontSize: isSmScreen ? "20px" : "30px",
                  color: "white",
                  textAlign: "center",
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
                  fontSize: isSmScreen ? "16px" : "20px",
                  color: "white",
                  textAlign: "center",
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

        {/* Social Media icons */}

        <Grid
          item
          sm={12}
          md={8}
          lg={8}
          sx={{ margin: "0px auto", height: "50px" }}
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

        {/* Bottom White line */}

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Container
            sx={{
              height: "2px",
              background: "white",
              margin: "10px auto 10px auto",
            }}
          ></Container>
        </Grid>

        {/* Copyright */}

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography
            sx={{
              textAlign: "center",
              color: "white",
              display: "flex",
              justifyContent: "center",
              margin:"15px",
              alignItems: "center",
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

export default FooterFunction_home;
