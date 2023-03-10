import React from "react";
import { Box, Button } from "@mui/material";
import imgport from "../images/op6.png";

const LandingPage = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${imgport})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: 625,
          width: "100%",
        }}
      >
        <Box display="flex" justifyContent="center" gap={8} paddingTop={35}>

            <Button variant="contained" color="success" sx ={{backgroundColor: "#FF8C00", color:"white", width: 200, height:55, fontWeight:"bold", fontSize:20}}>Signup</Button>
            <Button variant="contained" color="success" sx ={{backgroundColor: "#FF8C00", color:"white",width: 200, height:55, fontWeight:"bold", fontSize:20}}>Signin</Button>

        </Box>
      </Box>
    </>
  );
};

export default LandingPage;
