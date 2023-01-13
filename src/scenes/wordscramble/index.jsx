import { useState, useEffect } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


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

    const [gradeLevel, setGradeLevel] = useState();
    const [nh1VocabScrambleArr, setNh1VocabScrambleArr] = useState();

    useEffect(() => {
        // console.log("test: ", gradeLevel)
        console.log("state check: ", nh1VocabScrambleArr);
    },[gradeLevel]);

    useEffect(() => {
        scrambler();
    },[])

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        // console.log("test: ", this);
    };
    const handleClose1st = () => {
        setAnchorEl(null);
        setGradeLevel("first");
        // console.log("test: ", this);
    };
    const handleClose2nd = () => {
        setAnchorEl(null);
        setGradeLevel("second");
        // console.log("test: ", this);
    };
    const handleClose3rd = () => {
        setAnchorEl(null);
        setGradeLevel("third");
        // console.log("test: ", this);
    };

    const scrambler = () => {
        let nh1VocabArray = nh1Vocab.map((word) => {
            return word.english_vocab;
        });
        // console.log("vocab array check: ", nh1VocabArray);
        let nh1VocabScrambled = nh1VocabArray.map((word) => {
            return scrambleWord(word);
        });
        // console.log("scramble check: ", nh1VocabScrambled);
        setNh1VocabScrambleArr(nh1VocabScrambled)
    };

    const scrambleWord = (word) => {
        let scramble = [];
        let newWord = [];
        for (let i = 0; i < word.length; i++) {
            scramble.push(word[i]);
        }
        let wordLength = word.length;
        let j = 0;
        let temp;

        while (wordLength--) {
            j = Math.floor(Math.random() * (wordLength + 1));
            temp = scramble[wordLength];
            newWord[wordLength] = scramble[j];
            scramble[j] = temp;
        }
        let scrambledWord = newWord.join("");
        return scrambledWord;
    };

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
                <Box
                    sx={{
                        "& .MuiButton-root": {
                            background: `${colors.blueAccent[500]}`
                        },
                        "& .MuiButton-root:hover": {
                            background: `${colors.greenAccent[500]}`
                        },
                        "& .MuiTypography-root:hover": {
                            color: `${colors.gray[100]}`
                        },
                        "& .MuiTypography-root:active": {
                            color: `${colors.gray[900]}`
                        },
                    }}
                    // backgroundColor={colors.blueAccent[600]}
                    borderRadius="5%"
                >
                    {/* drop list of grade level? */}
                    <Button
                        id="demo-positioned-button"
                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <Typography color={colors.gray[900]}>
                            Select Your Grade Level
                        </Typography>
                    </Button>
                    <Menu
                        id="demo-positioned-menu"
                        aria-labelledby="demo-positioned-button"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                        <MenuItem onClick={handleClose1st}>First Year</MenuItem>
                        <MenuItem onClick={handleClose2nd}>Second Year</MenuItem>
                        <MenuItem onClick={handleClose3rd}>Third Year</MenuItem>
                    </Menu>
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
                {/* {nh1Vocab.map((word) => {
                    return wordBox(word.english_vocab)
                })} */}
                {/* {nh1VocabScrambleArr.map((word) => {
                    return wordBox(word)
                })} */}
                {/* {!gradeLevel ? undefined 
                : 
                nh1VocabScrambleArr.map((word) => {
                    return wordBox(word);
                })} */}
                {gradeLevel === "first" ? 
                    nh1VocabScrambleArr.map((word) => {
                        return wordBox(word);
                    })
                : undefined
                }
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