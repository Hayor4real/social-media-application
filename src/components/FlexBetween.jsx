import { Box } from "@mui/material";
import { styled } from "@mui/system";

const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}); // using css styled properties

//this allows us to reuse this css properties

export default FlexBetween;
