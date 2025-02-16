import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const ProgressCircle = ({ progress = 0.75, size = 40 }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = progress * 360;

  return (
    <Box
      sx={{
        position: "relative",
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        background: `conic-gradient(${colors.greenAccent[500]} ${angle}deg, ${colors.grey[500]} ${angle}deg)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: `${size * 0.6}px`,
          height: `${size * 0.6}px`,
          background: colors.primary[400],
          borderRadius: "50%",
        }}
      />
    </Box>
  );
};

export default ProgressCircle;
