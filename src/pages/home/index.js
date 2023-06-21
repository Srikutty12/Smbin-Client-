import { Divider, Fab, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import RewardCard from "../../components/Reward Card";
// import rewards from "./rewards";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import DisposeIcon from "../../assets/disposal.png";
import { useNavigate } from "react-router-dom";
import { getPoints } from "../../api/points";
import { useEffect, useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [rewards, setRewards] = useState([]);

  const totalPoints = rewards.reduce((a, b) => a + b.points, 0);
  useEffect(() => {
    let userId = localStorage.getItem("userId");
    let body = {
      userId,
    };
    getPoints(body)
      .then((res) => {
        setRewards(res.data);
      })
      .catch((ex) => console.log("Something went wrong!!", ex));
  }, []);

  return (
    <Grid
      display="flex"
      flexDirection="column"
      paddingBottom={12}
      paddingTop={9.5}
      minHeight="100vh"
    >
      <Typography
        variant="p"
        fontSize={16}
        fontWeight={700}
        mb={1.5}
        textAlign="center"
      >
        YOUR BALANCE
      </Typography>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="p" fontSize={36} fontWeight={700} mr={1}>
          {totalPoints || 0}
        </Typography>
        <Typography variant="p" fontSize={36} fontWeight={300}>
          points
        </Typography>
      </div>
      <Box
        mt={6}
        mb={1.75}
        position="sticky"
        top={0}
        sx={{ backgroundColor: "#f9f9f9" }}
      >
        <Box marginX={3} mb={2} pt={1}>
          <Typography variant="p" fontWeight={700}>
            Reward Point History
          </Typography>
        </Box>
        <Divider style={{ borderColor: "#d4dddb" }} />
      </Box>
      <Box mt={3.5} marginX={3}>
        {rewards.map((it) => (
          <Box mb={2}>
            <RewardCard {...it} />
          </Box>
        ))}
      </Box>
      <Box position="relative">
        <Box position="fixed" margin="0" bottom={10} right={9}>
          <Fab
            color="secondary"
            aria-label="add"
            size="medium"
            variant="extended"
            style={{
              background: "#00676f",
              textTransform: "capitalize",
            }}
            onClick={() => navigate("/instruction")}
          >
            Dispose
            {/* <QrCodeScannerIcon /> */}
          </Fab>
        </Box>
      </Box>
    </Grid>
  );
};

export default Home;
