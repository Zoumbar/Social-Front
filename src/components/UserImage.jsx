import { Box } from "@mui/material";
const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        src={`https://social-server.vercel.app/assets/${image}`}
        width={size}
        height={size}
        style={{ objectFit: "cover", borderRadius: "50%" }}
        alt="user"
      />
    </Box>
  );
};
export default UserImage;
