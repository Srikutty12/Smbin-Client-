import { useState } from "react";
import { useZxing } from "react-zxing";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Container, Grid, IconButton, Typography } from "@mui/material";
import { useNavigate, useNavigation } from "react-router-dom";
import { insertPoints } from "../../api/points";

const QRScan = () => {
  const [result, setResult] = useState("");
  const navigate = useNavigate();
  const { ref } = useZxing({
    onResult(result) {
      let data = result.getText();
      let userId = localStorage.getItem("userId");
      setResult(data);
      let parsedData = JSON.parse(data);
      let bodyData = {
        userId,
        points: parsedData?.points,
      };
      insertPoints(bodyData)
        .then((res) => {
          navigate("/complete", { state: { points: parsedData.points } });
        })
        .catch((ex) => {
          console.error("Something went wrong!!");
          navigate("/complete");
        });
    },
  });
  return (
    <Container
      disableGutters
      style={{ height: "100vh", backgroundColor: "black" }}
    >
      <Grid item xs={12} md={12}>
        {/* App bar */}
        <div
          style={{
            display: "flex",
            background: "#276d5e",
            color: "white",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <IconButton
            aria-label="back"
            style={{ color: "white", marginRight: "5px" }}
            onClick={() => navigate(-1)}
          >
            <ArrowBackIcon
              style={{ width: "1.75rem", height: "1.75rem" }}
              color="white"
            />
          </IconButton>
          <Typography color={"white"} fontSize={"1.25rem"}>
            Scan QR Code
          </Typography>
        </div>
        {/* Marker */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            borderWidth: "2px",
            borderColor: "#00FF00",
            borderStyle: "solid",
            backgroundColor: "transparent",
            height: "250px",
            width: "250px",
            transform: "translate(-50%, -50%)",
          }}
        />
        <video
          ref={ref}
          style={{ width: "100%", height: "100%", marginTop: "30px" }}
        />
      </Grid>
    </Container>
  );
};

export default QRScan;
