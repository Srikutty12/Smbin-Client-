import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import successAnimation from "../../assets/lottie/successful.json";
import Lottie from "react-lottie";
import { useLocation } from "react-router-dom";

const Completion = () => {
  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/home");
  };
  const location = useLocation();

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: successAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid
      display="flex"
      flexDirection="column"
      paddingBottom={12}
      paddingTop={9.5}
      minHeight="100vh"
      justifyContent="center"
      alignContent="center"
      alignItems="center"
      paddingX={2}
    >
      {/* <img width={253} src={SuccessImg} alt="success" /> */}
      <Lottie options={defaultOptions} height={253} width={253} />
      <Typography
        variant="p"
        fontSize={24}
        mt={9}
        fontWeight={700}
        textAlign="center"
      >
        Success!!
      </Typography>
      <Typography
        variant="p"
        fontSize={24}
        fontWeight={700}
        mb={8}
        textAlign="center"
      >
        You have earned {location.state.points} Points
      </Typography>
      <Button
        variant="contained"
        onClick={() => backToHome()}
        style={{ width: "90%", textTransform: "capitalize" }}
      >
        Back to home
      </Button>
    </Grid>
  );
};

export default Completion;
