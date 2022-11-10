import { m } from "framer-motion";
// @mui
import { styled } from "@mui/material/styles";
import { Box, Typography, Grid } from "@mui/material";
// components
import { varFade } from "../animate";
import { FlashConfig } from "./HomeConfig";

const BoxStyle = styled(Box)({
  paddingTop: "100px",
  width: "900px",
  maxWidth: "100%",
  margin: "0 auto",
  "& .card-box": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "& .card-box>div:first-of-type": {
    width: { xs: "130px", sm: "160px" },
    height: { xs: "130px", sm: "160px" },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    border: "2px solid #0000E6",
    boxShadow: "#0000e6 0px 0px 15px",
  },
});

export default function Flash() {
  const tabViewHander = (e) => {
    window.open(e);
  };
  return (
    <BoxStyle id="flash">
      <m.div variants={varFade().inUp}>
        <Typography variant="h2" textAlign="center" mb={4}>
          POWERED BY FLASH GROUP
        </Typography>
        <Typography variant="body1" textAlign="center" mb={4}>
          The ecosystem of the independent bankers
        </Typography>
      </m.div>
      <Grid container>
        {FlashConfig.map((e, index) => (
          <Grid key={index} item xs={6} md={3} mb={5}>
            <Box className="card-box">
              <Box
                mb={4}
                sx={{
                  width: { xs: "130px", sm: "160px" },
                  height: { xs: "130px", sm: "160px" },
                }}
              >
                <Box
                  component="img"
                  sx={{ width: { xs: "50px", sm: "80px" } }}
                  src={e.src}
                />
              </Box>
              {e.url2 ? (
                <Box textAlign="center">
                  <Typography
                    component="a"
                    variant="a"
                    href={e.url}
                    onClick={() => tabViewHander(e.url2)}
                    target="_blank"
                    sx={{ color: "#fff" }}
                  >
                    {e.name}
                  </Typography>
                </Box>
              ) : (
                <Box textAlign="center">
                  <Typography
                    component="a"
                    variant="a"
                    href={e.url}
                    target="_blank"
                    sx={{ color: "#fff" }}
                  >
                    {e.name}
                  </Typography>
                </Box>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
    </BoxStyle>
  );
}
