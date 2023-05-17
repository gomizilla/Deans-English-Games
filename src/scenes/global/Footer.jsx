import { Box, IconButton, useTheme, Typography, Avatar } from "@mui/material";
import { tokens } from "../../theme";

const Footer = () => {

    const theme = useTheme(); //grabs theme 
    const colors = tokens(theme.palette.mode);

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            borderRadius={3}
            // border="2px solid yellow"
            bottom="0"
            // width="100%"
            // marginLeft="-250px"
            // position="relative"
            // position="relative"
            // bottom="0"
            // m="20px"
            ml="20px"
            mr="20px"
            mb="5px"
            // p="10px"
            // justifyContent="center"
            justifyContent="space-between"
            backgroundColor={colors.redAccent[700]}
        >
            <Box
                display="flex"
                flexDirection="column"
                minWidth="60%"
                justifyContent="center"
                alignItems="center"
                // border="2px solid white"
            >
                <Box
                    // border="2px solid pink"
                    // width="30%"
                    display="flex"
                    justifyContent="center"
                    pt="5px"
                    // backgroundColor={colors.greenAccent[700]}
                >
                    <Typography
                        // color={colors.primary[100]}
                        // color="#fff"
                        variant="h5"
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
                    justifyContent="space-evenly"
                    // backgroundColor={colors.greenAccent[700]}
                    pt="5px"
                    gap="50px"
                >
                    <a
                        // href="https://github.com/gomizilla"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Box
                            component="img"
                            width="50px"
                            height="50px"
                            sx={{
                                maxHeight: {xs: "100px"},
                                maxWidth: {xs: "100px"},
                            }}
                            src="/images/github.png"
                            alt="Github"
                        />
                    </a>
                    <a
                        // href="https://www.linkedin.com/in/dean-walton/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <Box
                            component="img"
                            // not working V
                            sx={{
                                width: 50,
                                height: 50,
                                maxHeight: {md: 100},
                                maxWidth: {md: 100}
                            }}
                            src="/images/linkedin.png"
                            alt="LinkedIn"
                        />
                    </a>
                </Box>
            </Box>
            
        </Box>
    )
}

export default Footer;
