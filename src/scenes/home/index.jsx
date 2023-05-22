import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import Link from "@mui/material/Link";
import { Link as RouterLink } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

const Home = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const { t } = useTranslation();

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
                    title={t('english-apps')}
                    subtitle={t('choose-game')}
                />
            </Box>
            <Box
                // border="2px solid yellow"
                display="flex"
                flexDirection="row"
                justifyContent="space-around"
                mt="20px"
                textAlign="center"
            >
                <Box
                    // border="2px solid green"
                    // width="33%"
                >
                    <Link 
                        component={RouterLink}
                        to="wordscramble"
                        underline="none"
                    >
                        <Typography
                            variant="h3"
                            color={colors.gray[100]}
                            sx={{
                                ":hover": {
                                    color: colors.greenAccent[400]
                                }
                            }}
                        >
                            {t('word-scramble')}
                        </Typography>
                    </Link>
                </Box>
                <Box
                    // border="2px solid orange"
                    // width="33%"
                >
                    <Link
                        component={RouterLink}
                        to="/secretword"
                        underline="none"
                    >
                        <Typography
                            variant="h3"
                            color={colors.gray[100]}
                            sx={{
                                ":hover": {
                                    color: colors.greenAccent[400]
                                }
                            }}
                        >
                            {t('secret-word')}
                        </Typography>
                    </Link>
                </Box>
                {/* <Box
                    // border="2px solid lightblue"
                    width="34%"
                >
                    Sentence Scramble
                </Box> */}
            </Box>
        </Box>
    );
}

export default Home;