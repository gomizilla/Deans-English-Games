import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const Home = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Header
                    title="Dean's English Games"
                    subtitle="Please choose a game from the sidebar!"
                />
            </Box>
        </Box>
    );
}

export default Home;