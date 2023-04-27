import { Box, IconButton, useTheme, Typography } from "@mui/material";
import { tokens } from "../../theme";

const Footer = () => {

    const theme = useTheme(); //grabs theme 
    const colors = tokens(theme.palette.mode);

    return (
        <Box
            border="2px solid yellow"
            bottom="0"
            width="100%"
            // marginLeft="-250px"
            // position="relative"
        >
            <Typography>
                test
            </Typography>
        </Box>
    )
}

export default Footer;
