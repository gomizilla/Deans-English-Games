import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const WordBox = ({ title, subtitle, icon }) => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box
            width="100%"
            m="0 30px"
        >
            <Box
                display="flex"
                justifyContent="center"
                mt="-20px"
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    // justifyContent="center"
                    alignItems="center"
                >
                    {icon}
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        sx={{ color: colors.gray[100] }}
                    >
                        {title}
                    </Typography>
                </Box>
                {/* <Box>

                </Box> */}
            </Box>
            <Box
                display="flex"
                justifyContent="center"
                minHeight="22px"
                // border="2px solid white"
            >
                <Typography
                    variant="h5"
                    sx={{ color: colors.greenAccent[200] }}
                >
                    {subtitle}
                </Typography>
                {/* <Typography
                    variant="h5"
                    fontStyle="italic"
                    sx={{ color: colors.greenAccent[600] }}
                >
                </Typography> */}
            </Box>
        </Box>
    );
};

export default WordBox;