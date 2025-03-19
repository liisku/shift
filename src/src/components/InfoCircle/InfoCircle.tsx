import { Box, SxProps, Typography } from "@mui/material";

interface InfoCircleProps {
  size?: "small" | "medium";
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
    size = "medium",
    sx,
  } = props;

  const sizeValue = size === "medium" ? "10rem" : "8rem";
  const fontSize = size === "medium" ? "h3" : "h4";

  return (
    <Box
      sx={{
        width: sizeValue,
        height: sizeValue,
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
      <Typography variant={fontSize} color={color} sx={{ mb: 0 }}>
        {texts.map((text: string) => {
          return (
            <span key={text} style={{ display: "block", float: "none" }}>
              {text}
            </span>
          );
        })}
      </Typography>
    </Box>
  );
};

export default InfoCircle;
