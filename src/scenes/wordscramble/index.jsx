import { Box, Typography, useTheme, IconButton } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import WordBox from "../../components/WordBox";

const WordScramble = () => {

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
                    title="Word Scramble"
                    subtitle="Unscramble the words!"
                />
                <Box>
                    drop list of grade level?
                </Box>
            </Box>
            {/* row 1 */}
            {/* TODO: data for words and method to map(?) words instead of hard coded */}
            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="140px"
                gap="20px"
            >
                {/* one box start*/}
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <WordBox
                        title="Library"
                        subtitle="図書館"
                        icon="📚"
                    />

                </Box>
                {/* one box end*/}

                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <WordBox
                        title="Library"
                        subtitle="図書館"
                        icon="📚"
                    />
                    
                    
                </Box>

                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <WordBox
                        title="Library"
                        subtitle="図書館"
                        icon="📚"
                    />
                    
                    
                </Box>

                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <WordBox
                        title="Library"
                        subtitle="図書館"
                        icon="📚"
                    />
                    
                    
                </Box>

                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <WordBox
                        title="Library"
                        subtitle="図書館"
                        icon="📚"
                    />
                    
                    
                </Box>

                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <WordBox
                        title="Library"
                        subtitle="図書館"
                        icon="📚"
                    />
                    
                    
                </Box>

                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <WordBox
                        title="Library"
                        subtitle="図書館"
                        icon="📚"
                    />
                    
                    
                </Box>

                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <WordBox
                        title="Library"
                        subtitle="図書館"
                        icon="📚"
                    />
                    
                    
                </Box>

                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <WordBox
                        title="Library"
                        subtitle="図書館"
                        icon="📚"
                    />
                    
                    
                </Box>

                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <WordBox
                        title="Library"
                        subtitle="図書館"
                        icon="📚"
                    />
                    
                    
                </Box>

                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <WordBox
                        title="Library"
                        subtitle="図書館"
                        icon="📚"
                    />
                    
                    
                </Box>

                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <WordBox
                        title="Library"
                        subtitle="図書館"
                        icon="📚"
                    />
                    
                    
                </Box>

            </Box>
        </Box>
    );
};

export default WordScramble;