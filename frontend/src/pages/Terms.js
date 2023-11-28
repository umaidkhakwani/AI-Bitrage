import React from "react";
import { Grid, Paper, Typography } from "@mui/material";

import animation5 from "../images/animation5.gif";
import bg1 from "../images/background1.png";
import bg2 from "../images/background2.png";
import "../fonts/fonts.css";
import FooterFunction from "../footer";

function Terms() {
  return (
    <div>
      
          <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{ marginTop: "150px" }}
          >
            <Grid item xs={0} md={4}></Grid>
            <Grid item xs={12} md={4}>
              <Typography
                variant="body1"
                align="center"
                sx={{
                  textAlign: "center",
                  color: "white",
                  marginTop: 2,
                  fontFamily: "Maragsa",
                  fontSize: 40,
                }}
              >
                Terms and conditions?
              </Typography>
              <Typography
                variant="body1"
                align="center"
                sx={{
                  textAlign: "center",
                  color: "white",
                  marginTop: 2,
                  fontFamily: "Lora",
                  fontSize: 18,
                }}
              >
                AI-BITRAGE is a new launchpad being built for the crypto space.
                AI-BITRAGE has a vision of bringing guaranteed profits to all
                users across the space. The launchpad is being developed to
                exist and operate as an Initial Dex Offering (IDO). The IDO is
                backed by investors that would for sure be known as whales if
                their wallets were viewed by the general public.
                <br />
                <br />
                The software is revolutionary and the development team has
                cultivated an algorithm, capable of evaluating Ethereum tokens
                across the blockchain.
                <br />
                <br />
                The algorithm will then signal back that it has detected a
                potential arbitrage, our team will then re check the arbitrage
                for our users safety and our reputation and then go ahead or
                will ignore and wait for the next signal to occur.
                <br />
                <br />
                The algorithm, is developed to monitor every aspect of a new
                token is detail. The details it monitors is the contract, lock,
                renounce, market cap, liquidity, telegram, CoinMarketCap
                listings, CoinGecko listings, website and token mentioning.The
                algorithm was built up on analysis from over a two years of
                research and networking (yes we existed in the golden era of
                2021).
                <br />
                <br />
                All users are probably wondering “why is the word AI implemented
                in this project”?. This is because the algorithm was actually
                developed using AI technology to code this high tech IDO. The
                team thought why not use AI due to its constant learning and
                efforts to always provide accurate and modern knowledge to the
                stage. It made perfect sense and yes you guessed it, it worked.
                We have developed a new way of decentralized trading to the
                fortunate people within crypto.
                <br />
                <br />
                For More Information, Visit our Socials:
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

export default Terms;
