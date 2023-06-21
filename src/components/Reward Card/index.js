import { Card, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Coin from "../../assets/coin.svg";
import moment from "moment";

const RewardCard = (props) => {
  let { points, date } = props;
  let timeText = moment(date).fromNow();
  return (
    <Card style={{ boxShadow: "1px 1px 3px #d4dddb", borderRadius: 0 }}>
      <Box paddingY={2.5} paddingX={4}>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid
            item
            xs={2}
            alignItems="center"
            justifyContent="center"
            display="flex"
          >
            <img
              src={Coin}
              width={54}
              height={54}
              alt="coin"
              sx={{
                width: {
                  sx: 44,
                },
                height: {
                  sx: 44,
                },
              }}
            />
          </Grid>
          <Grid item xs={10}>
            <Typography
              variant="p"
              component="p"
              fontSize={14}
              fontWeight={700}
            >
              Earned {points} Points
            </Typography>
            <Typography
              variant="p"
              component="p"
              fontSize={12}
              color="#92a9a4"
              mt={1}
            >
              {timeText}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default RewardCard;
