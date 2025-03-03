import React from "react";

interface LogoProps {
  color?: string;
  fill?: string;
  strokeWidth?: number;
}

const Logo: React.FC<LogoProps> = (props: LogoProps) => {
  const { color = "white", fill = "none", strokeWidth = 4 } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 180" width="100%">
      <style>
        {`
          .shift-text {
            font-family: Arial, sans-serif;
            font-weight: bold;
            font-size: 180px;
            text-anchor: middle;
            cursor: default;
          }
        `}
      </style>
      <text
        x="300"
        y="100"
        className="shift-text"
        dominantBaseline="central"
        stroke={color}
        strokeWidth={strokeWidth}
        fill={fill}
      >
        SHIFT
      </text>
    </svg>
  );
};

export default Logo;
