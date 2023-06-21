import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import InstructionImg from "../../assets/instruction-2.png";
import useImagePreloader from '../../hooks/useImagePreloader';
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";

const preloadSrcList = [
  InstructionImg
]

const TrashInstruction = () => {
  const { imagesPreloaded } = useImagePreloader(preloadSrcList)
  const navigate = useNavigate();
  const scan = () => {
    navigate("/qr-scan");
  };
  if (imagesPreloaded) {
    console.log("Image Loading")
  }
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
    >
      <Typography
        variant="p"
        fontSize={18}
        fontWeight={700}
        mb={8}
        textAlign="center"
      >
        Put your garbage into the bin
      </Typography>
      <img width={300} src={InstructionImg} alt="Instruction" />
      <Typography
        variant="p"
        fontSize={18}
        fontWeight={700}
        mt={10}
        textAlign="center"
        mb={5.5}
      >
        Click Scan to complete
      </Typography>
      <Button
        variant="contained"
        onClick={() => scan()}
        style={{ width: "90%", boxShadow: 'none' }}
      >
      <QrCodeScannerIcon style={{marginRight: '10px'}} />
        <Typography textTransform={"capitalize"}>Scan</Typography>
      </Button>
    </Grid>
  );
};

export default TrashInstruction;
