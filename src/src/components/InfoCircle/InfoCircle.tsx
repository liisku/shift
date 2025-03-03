import { Box, SxProps, Typography } from "@mui/material";

interface InfoCircleProps {
  texts: string[];
  backgroundColor?: string;
  color?: string;
  sx?: SxProps;
}

const InfoCircle = (props: InfoCircleProps) => {
  const {
    backgroundColor = "primary.main",
    color = "white",
    texts,
    sx,
  } = props;

  return (
    <Box
      sx={{
        width: "10rem",
        height: "10rem",
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
      <Typography variant="h3" color={color} sx={{ mb: 0 }}>
        {texts.map((text: string) => {
          return (
            <span style={{ display: "block", float: "none" }}>{text}</span>
          );
        })}
      </Typography>
    </Box>
  );
};

export default InfoCircle;
