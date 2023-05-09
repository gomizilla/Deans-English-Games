import { Box, IconButton, useTheme, Typography } from "@mui/material";
import { tokens } from "../../theme";

const Footer = () => {

    const theme = useTheme(); //grabs theme 
    const colors = tokens(theme.palette.mode);

    return (
        <Box
            // border="2px solid yellow"
            bottom="0"
            // width="100%"
            // marginLeft="-250px"
            // position="relative"
            position="relative"
            // bottom="0"
            // m="20px"
            ml="20px"
            mr="20px"
            mb="10px"
            p="10px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            // justifyContent="center"
            justifyContent="space-between"
            backgroundColor={colors.blueAccent[700]}
        >
            <Box
                // border="2px solid pink"
                width="30%"
                display="flex"
                justifyContent="center"
                backgroundColor={colors.greenAccent[700]}
            >
                <Typography
                    // color={colors.primary[100]}
                    // color="#fff"
                    variant="h6"
                >
                    Created by Dean Walton
                </Typography>
                {/* <Typography>
                    asdf
                </Typography> */}
            </Box>
            <Box
                // border="2px solid pink"
                width="30%"
                display="flex"
                justifyContent="center"
                backgroundColor={colors.greenAccent[700]}
            >
                <Typography
                    // color={colors.primary[100]}
                    // color="#fff"
                    variant="h6"
                >
                    Questions / Feedback ?
                </Typography>
                {/* <Typography>
                    asdf
                </Typography> */}
            </Box>
            <Box
                // border="2px solid pink"
                width="30%"
                display="flex"
                justifyContent="center"
                backgroundColor={colors.greenAccent[700]}
            >
                <Typography
                    // color={colors.primary[100]}
                    // color="#fff"
                >
                    area 3
                </Typography>
                {/* <Typography>
                    asdf
                </Typography> */}
            </Box>
        </Box>
    )
}

export default Footer;
