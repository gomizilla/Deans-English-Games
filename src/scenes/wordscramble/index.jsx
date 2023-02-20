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
    const [numCorrect, setNumCorrect] = useState([]);
    const [nh1VocabTest, setNh1VocabTest] = useState({});

    //test
    const [toggled, setToggled] = useState(false);
    //test

    useEffect(() => {
        // console.log("test: ", gradeLevel)
        // console.log("state check: ", nh1VocabScrambleArr);
        console.log("grade select vocabtest check: ", nh1VocabTest)
    },[gradeLevel]);

    useEffect(() => {
        scrambler();
        // renderList();
        console.log("new words test check: ", nh1VocabTest);
    },[]);

    useEffect(() => {
        console.log("num correct check: ", numCorrect);
        if (toggled) {
            console.log("AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH")
            renderList();
        }
    }, [numCorrect])

    useEffect(() => {
        console.log("something changed in nh1vocabtest");
        // wordBox();
        // renderList();
        // if (toggled) {
        //     console.log("AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH")
        //     renderList();
        // }
    }, [nh1VocabTest])

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
        setToggled(true);
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
        setNh1VocabScrambleArr(nh1VocabScrambled);

        //test

        let newWordsTest = nh1Vocab.map((word) => {
            return {
                en: word.english_vocab,
                scrambled: scrambleWord(word.english_vocab),
                jp: "",
                toggled: false
            }
        });
        setNh1VocabTest(newWordsTest);
        // setToggled(true);
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

    const wordBox = (word, scrambledWord, newListTest) => {

        // maybe if/else here that renders the whole box based on boolean?
        // maybe get the main box elemeny by id and change display?
        // console.log("newlisttest check in wordbox: ", newListTest)

        return (
            <Box
                gridColumn="span 3"
                backgroundColor={colors.primary[400]}
                display={newListTest.toggled ? "none" : "flex"}
                // display="flex"
                alignItems="center"
                justifyContent="space-around"
                flexDirection="column"
                key={newListTest.en}
                // id={word}
            >
                <WordBox
                    title={newListTest.scrambled}
                    // title={newListTest.toggled ? newListTest.en : newListTest.scrambled}
                    subtitle="図書館"
                    icon="📚"
                />
                <Box 
                    backgroundColor={colors.primary[300]} 
                    borderRadius="3px"
                >
                    {/* {newListTest.toggled ? } */}
                    <InputBase 
                        sx={{ ml: 2, flex: 1}} 
                        placeholder="Search"
                        id={word}
                        onKeyDown={(e) => {
                            // const userInput = document.getElementById(newListTest.en); //shouldnt be using vanilla js in react ?
                            // console.log("correct check b4: ", correct);
                            // console.log("hhhhhhhhmmmmmmmmmmmm: ", e.target.value);
                            
                            if (e.key === "Enter" && e.target.value === newListTest.en) {
                                // console.log("various checks: ", word, scrambledWord, userInput.value);
                                // correct = true;
                                // setNumCorrect([...numCorrect, userInput.value])
                                // userInput.value = "";
                                // console.log("correct check after: ", correct);
                                // console.log("check: ", this.display);
                                // e.target.display = "none";
                                // setToggled(true);
                                // e.target.backgroundColor = "green";
                                // console.log("check: ", e.target);
                                e.target.value = "";
                                newListTest.toggled = true;
                                console.log("newlsittest check: ", newListTest);
                                console.log("asdfwaoerwuerqweropuqw: ", nh1VocabTest);
                                setNumCorrect([...numCorrect, newListTest.en]);
                            } else if (e.key === "Enter" && e.target.value !== newListTest.en) {
                                alert(`wrong ${e.target.value}`);
                            }
                        }}
                    >

                    </InputBase>
                    <IconButton 
                        type="button" 
                        sx={{ p: 1}} 
                        onClick={()=>{
                            const userInput = document.getElementById(word);
                            if (userInput.value === word) {
                                console.log("various checks: ", word, scrambledWord, userInput.value);
                                userInput.value = "";
                            } else {
                                alert(`wrong (click) ${userInput.value}`);
                            }
                        }}
                        // onKeyDown={(e) => {
                        //     const userInput = document.getElementById(word);
                        //     if (userInput.value === word) {
                        //     console.log("various checks: ", word, scrambledWord, userInput.value);
                        //     userInput.value = "";
                        //     }
                        // }}
                    >
                        <SearchIcon />
                    </IconButton>
                </Box>

            </Box>
        );
    };


    // const handleUserInput = (e) => {
    //     e.preventDefault();
    //     console.log("test: ", e);
    //     // const userInput = document.getElementById("ws-guess");
    //     // const test = this.value
    //     // console.log("hello?", userInput.value)
    //     // console.log("test: ", test);
    //     // ifnot workingbecause originally it used object whereas this is using array
    //     // if (nh1VocabScrambleArr[userInput.value]) {
    //     //     // document.getElementById(`${nh1VocabScrambleArr[userInput.value]}`).className = "correct";
    //     //     document.getElementById(`${nh1VocabScrambleArr[userInput.value]}`).innerHTML = `${userInput.value} ✅`;
    //     //     // setSubmittedWords([...submittedWords, userInput.value]);
    //     //     console.log("testing");
    //     // }
    //     // if (userInput.value === )


    //     // userInput.value = "";
    // }

    //testing 🎈🎈🎈
    const renderList = () => {
        return nh1Vocab.map((word, index) => {
            // console.log("index: ", index);
            // console.log("word: ", word.english_vocab)
            // console.log("test: ", nh1VocabScrambleArr[index])
            return wordBox(word.english_vocab, nh1VocabScrambleArr[index], nh1VocabTest[index]);
        })
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
                flexDirection="column"
                mb="20px"
            >
                {toggled ? "Scrambled words: " : undefined}

                {numCorrect.map((word)=> {
                    return ` ${word} `
                })}

                {numCorrect.length === nh1Vocab.length ? 
                <Typography m="20px" variant="h3">
                    Word Scramble Complete!
                </Typography> 
                : undefined}
                
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
                {/* {gradeLevel === "first" ? 
                    nh1VocabScrambleArr.map((word) => {
                        return wordBox(word);
                    })
                : undefined
                } */}
                {gradeLevel === "first" ? 
                    // nh1Vocab.map((word, index) => {
                    //     // console.log("index: ", index);
                    //     // console.log("word: ", word.english_vocab)
                    //     // console.log("test: ", nh1VocabScrambleArr[index])
                    //     return wordBox(word.english_vocab, nh1VocabScrambleArr[index], nh1VocabTest[index]);
                    // })
                    renderList()
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
            </Box>
        </Box>
    );
};

export default WordScramble;