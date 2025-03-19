import { Box, SxProps, Typography } from "@mui/material";

interface BulletProps {
  text: string;
  backgroundColor?: string;
  color?: string;
  sx?: SxProps;
}

const Bullet = (props: BulletProps) => {
  const { backgroundColor = "primary.main", color = "white", text, sx } = props;

  return (
    <Box
      sx={{
        width: "4rem",
        height: "4rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: backgroundColor,
        borderRadius: "50%",
        textAlign: "center",
        ...sx,
      }}
    >
      <Typography
        variant="h3"
        color={color}
        sx={{ mb: 0, textAlign: "center" }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default Bullet;
