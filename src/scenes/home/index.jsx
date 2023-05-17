import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const Home = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box 
            m="20px"
            minHeight="70vh"
        >
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                // border="2px solid pink"
            >
                <Header
                    title="English Games"
                    subtitle="Please choose a game!"
                />
            </Box>
            <Box
                // border="2px solid yellow"
                display="flex"
                flexDirection="row"
                // justifyContent="space-around"
                mt="20px"
                textAlign="center"
            >
                <Box
                    // border="2px solid green"
                    width="33%"
                >
                    Word Scramble
                </Box>
                <Box
                    // border="2px solid orange"
                    width="33%"
                >
                    Secret Word
                </Box>
                <Box
                    // border="2px solid lightblue"
                    width="34%"
                >
                    Sentence Scramble
                </Box>
            </Box>
        </Box>
    );
}

export default Home;