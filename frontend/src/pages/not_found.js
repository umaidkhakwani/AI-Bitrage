import React from "react";
import { Grid, Paper, Typography } from "@mui/material";

import home2 from "../images/home2.gif";
import animation5 from "../images/animation5.gif";
import bg1 from "../images/background1.png";
import bg2 from "../images/background2.png";
import "../fonts/fonts.css";
import FooterFunction from "../footer";

function Not_found() {
  return (
    <div>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ marginTop: "150px" }}
      >
        <Grid item xs={0} md={3}>
        <img
            src={home2}
            alt="Documentation Image"
            style={{ width: "750px", height: "430px", marginTop: "0%", marginLeft:"-330px" }}
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography
            variant="body1"
            align="center"
            sx={{
              textAlign: "center",
              color: "white",
              marginTop: 2,
              fontFamily: "Poppins",
              fontSize: 300,
            }}
          >
            404
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              textAlign: "center",
              color: "white",
              marginTop: 2,
              fontFamily: "Poppins",
              fontSize: 80,
            }}
          >
            Not Found
          </Typography>
        </Grid>

        
        {/* Image */}
        <Grid item xs={12} md={4}>
          <img
            src={animation5}
            alt="Documentation Image"
            style={{ width: "100%", height: "auto", marginTop: "100%" }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Not_found;
