import { useState, useEffect } from "react";
import { Box, Typography, useTheme, IconButton } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import WordBox from "../../components/WordBox";
import { nh1Vocab } from "../../data/vocabWords";

const WordScramble = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    useEffect(() => {
        console.log("test: ", nh1Vocab)
    },[])

    const wordBox = (word) => {
        return (
            <Box
                gridColumn="span 3"
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="space-around"
                flexDirection="column"
                key={word}
                // id={word}
            >
                <WordBox
                    title={word}
                    subtitle="図書館"
                    icon="📚"
                />
                    <Box 
                    backgroundColor={colors.primary[300]} 
                    borderRadius="3px"
                >
                    <InputBase sx={{ ml: 2, flex: 1}} placeholder="Search"></InputBase>
                    <IconButton type="button" sx={{ p: 1}}>
                        <SearchIcon />
                    </IconButton>
                </Box>

            </Box>
        );
    }

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
                display="flex"
                justifyContent="center"
                alignItems="center"
                mb="20px"
            >
                drop list of chapter only when grade level is selected?
            </Box>
            <Box
                display="grid"
                gridTemplateColumns="repeat(3, 1fr)"
                gridAutoRows="140px"
                gap="20px"
            >
                {nh1Vocab.map((word) => {
                    return wordBox(word.english_vocab)
                })}
                {/* one box start*/}
                {/* <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-around"
                    flexDirection="column"
                >
                    <WordBox
                        title="Library"
                        subtitle="図書館"
                        icon="📚"
                    />
                     <Box 
                        backgroundColor={colors.primary[300]} 
                        borderRadius="3px"
                    >
                        <InputBase sx={{ ml: 2, flex: 1}} placeholder="Search"></InputBase>
                        <IconButton type="button" sx={{ p: 1}}>
                            <SearchIcon />
                        </IconButton>
                    </Box>

                </Box> */}
                {/* one box end*/}
{/* 
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-around"
                    flexDirection="column"
                >
                    <WordBox
                        title="Library"
                        subtitle="図書館"
                        icon="📚"
                    />
                     <Box 
                        backgroundColor={colors.primary[300]} 
                        borderRadius="3px"
                    >
                        <InputBase sx={{ ml: 2, flex: 1}} placeholder="Search"></InputBase>
                        <IconButton type="button" sx={{ p: 1}}>
                            <SearchIcon />
                        </IconButton>
                    </Box>

                </Box>

                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-around"
                    flexDirection="column"
                >
                    <WordBox
                        title="Library"
                        subtitle="図書館"
                        icon="📚"
                    />
                     <Box 
                        backgroundColor={colors.primary[300]} 
                        borderRadius="3px"
                    >
                        <InputBase sx={{ ml: 2, flex: 1}} placeholder="Search"></InputBase>
                        <IconButton type="button" sx={{ p: 1}}>
                            <SearchIcon />
                        </IconButton>
                    </Box>

                </Box>

                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-around"
                    flexDirection="column"
                >
                    <WordBox
                        title="Library"
                        subtitle="図書館"
                        icon="📚"
                    />
                     <Box 
                        backgroundColor={colors.primary[300]} 
                        borderRadius="3px"
                    >
                        <InputBase sx={{ ml: 2, flex: 1}} placeholder="Search"></InputBase>
                        <IconButton type="button" sx={{ p: 1}}>
                            <SearchIcon />
                        </IconButton>
                    </Box>

                </Box>

                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-around"
                    flexDirection="column"
                >
                    <WordBox
                        title="Library"
                        subtitle="図書館"
                        icon="📚"
                    />
                     <Box 
                        backgroundColor={colors.primary[300]} 
                        borderRadius="3px"
                    >
                        <InputBase sx={{ ml: 2, flex: 1}} placeholder="Search"></InputBase>
                        <IconButton type="button" sx={{ p: 1}}>
                            <SearchIcon />
                        </IconButton>
                    </Box>

                </Box>

                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-around"
                    flexDirection="column"
                >
                    <WordBox
                        title="Library"
                        subtitle="図書館"
                        icon="📚"
                    />
                     <Box 
                        backgroundColor={colors.primary[300]} 
                        borderRadius="3px"
                    >
                        <InputBase sx={{ ml: 2, flex: 1}} placeholder="Search"></InputBase>
                        <IconButton type="button" sx={{ p: 1}}>
                            <SearchIcon />
                        </IconButton>
                    </Box>

                </Box>

                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-around"
                    flexDirection="column"
                >
                    <WordBox
                        title="Library"
                        subtitle="図書館"
                        icon="📚"
                    />
                     <Box 
                        backgroundColor={colors.primary[300]} 
                        borderRadius="3px"
                    >
                        <InputBase sx={{ ml: 2, flex: 1}} placeholder="Search"></InputBase>
                        <IconButton type="button" sx={{ p: 1}}>
                            <SearchIcon />
                        </IconButton>
                    </Box>

                </Box>

                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-around"
                    flexDirection="column"
                >
                    <WordBox
                        title="Library"
                        subtitle="図書館"
                        icon="📚"
                    />
                     <Box 
                        backgroundColor={colors.primary[300]} 
                        borderRadius="3px"
                    >
                        <InputBase sx={{ ml: 2, flex: 1}} placeholder="Search"></InputBase>
                        <IconButton type="button" sx={{ p: 1}}>
                            <SearchIcon />
                        </IconButton>
                    </Box>

                </Box>

                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-around"
                    flexDirection="column"
                >
                    <WordBox
                        title="Library"
                        subtitle="図書館"
                        icon="📚"
                    />
                     <Box 
                        backgroundColor={colors.primary[300]} 
                        borderRadius="3px"
                    >
                        <InputBase sx={{ ml: 2, flex: 1}} placeholder="Search"></InputBase>
                        <IconButton type="button" sx={{ p: 1}}>
                            <SearchIcon />
                        </IconButton>
                    </Box>

                </Box>

                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-around"
                    flexDirection="column"
                >
                    <WordBox
                        title="Library"
                        subtitle="図書館"
                        icon="📚"
                    />
                     <Box 
                        backgroundColor={colors.primary[300]} 
                        borderRadius="3px"
                    >
                        <InputBase sx={{ ml: 2, flex: 1}} placeholder="Search"></InputBase>
                        <IconButton type="button" sx={{ p: 1}}>
                            <SearchIcon />
                        </IconButton>
                    </Box>

                </Box> */}


            </Box>
        </Box>
    );
};

export default WordScramble;