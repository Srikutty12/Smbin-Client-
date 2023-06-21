import { Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { GoogleLogin } from "@react-oauth/google";
import { login } from "../../api/login";

const Login = () => {
  const navigate = useNavigate();
  const signIn = (response) => {
    debugger;
    if (response) {
      console.log(response);
      // Send the ID token to your server for verification
      let body = { idToken: response.credential };
      login(body)
        .then((res) => {
          let token = res.data.token;
          let userId = res.data.userId;
          localStorage.setItem("token", token);
          localStorage.setItem("userId", userId);
          navigate("/home");
        })
        .catch((ex) => console.log("Authentication failed", ex));
    } else {
      navigate("/home");
    }
  };
  return (
    <Container disableGutters>
      <Grid
        alignContent="space-between"
        justifyContent="space-between"
        minHeight={"93vh"}
        display="flex"
        flexDirection="column"
        alignItems="center"
        bgcolor="#f9f9f9"
        paddingBottom={5}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          marginTop="20px"
        >
          <img src={Logo} alt="logo" width="135px" />
          {/* <Typography variant="h3" textAlign="center" pt={10.5}>
            SmartBin
          </Typography> */}
          <Typography variant="h6" textAlign="center" mt={2.5} fontWeight="700">
            Think Globally, Act Locally
          </Typography>
        </Box>

        <div>
          {/* <Button variant="outlined" onClick={() => signIn()}>
            Sign in with Google
          </Button> */}
          <GoogleLogin
            onSuccess={signIn}
            onError={signIn}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </Grid>
    </Container>
  );
};

export default Login;
