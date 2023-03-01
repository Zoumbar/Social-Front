import { Box } from "@mui/material";
const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        src={`http://localhost:3001/assets/${image}`}
        width={size}
        height={size}
        style={{ objectFit: "cover", borderRadius: "50%" }}
        alt="user"
      />
    </Box>
  );
};
