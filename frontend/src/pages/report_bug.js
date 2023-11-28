import React from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";

import bug from "../images/bug.png";
import bug_background from "../images/bug_background.png";

import bg1 from "../images/background1.png";
import bg2 from "../images/background2.png";
import "../fonts/fonts.css";
import FooterFunction from "../footer";

function Report_bug() {
  return (
    <div>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ marginTop: "150px" }}
      >
        <Grid item xs={0} md={3}>
        {/* <img
            src={home2}
            alt="Documentation Image"
            style={{ width: "750px", height: "430px", marginTop: "0%", marginLeft:"-330px" }}
          /> */}
        </Grid>
        <Grid item xs={12} md={6}>
          <Container
            sx={{
              background: `url(${bug}) center/cover`,
              height: "400px",
              width: "100%",
              position: "relative",
            }}
          >
            <Typography
              variant="body1"
              align="center"
              sx={{
                textAlign: "center",
                color: "white",
                position: "absolute",
                width:"100%",
                top: "40%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontFamily: "Poppins",
                fontSize: 32,
              }}
            >
              GET PAID UPTO $100,000
            </Typography>
            <Typography
              variant="body1"
              align="flex-start"
              sx={{
                textAlign: "center",
                width:"100%",
                color: "white",
                position: "absolute",
                top: "60%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontFamily: "Poppins",
                fontSize: 16,
              }}
            >
              if you report any bug or vulnerability at our Website
            </Typography>
          </Container>
          <Typography
            variant="body1"
            align="center"
            sx={{
              textAlign: "center",
              color: "white",
              marginTop: 2,
              fontFamily: "Poppins",
              fontSize: 18,
            }}
          >
           At Ai-Bitrage, we take security and the integrity of our app seriously. 
           To ensure our users' safety and maintain the highest standard of service, 
           we are excited to announce our Bug Bounty Program. We invite all ethical hackers, 
           cybersecurity experts, and tech enthusiasts to put our app to the test and help us 
           identify any potential vulnerabilities or bugs. If you uncover a bug that could 
           pose a security risk or compromise user data, we will reward you with a whopping 
           $100,000 as a token of our appreciation. Together, let's fortify our platform and 
           pave the way for a safer and more robust user experience. Happy bug hunting!
          </Typography>
          
        </Grid>

        
        {/* Image */}
        <Grid item xs={12} md={3}>
          <img
            src={bug_background}
            alt="Documentation Image"
            style={{ width: "100%", height: "auto", marginTop: "0%" , marginLeft:"-150px"}}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Report_bug;
