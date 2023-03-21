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
import ModalComponent from "../../components/Modal";

import { nhYear1 } from "../../data/vocabWords";

const WordScramble = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [gradeLevel, setGradeLevel] = useState({ grade: "", unit: ""});
    const [nh1VocabScrambleArr, setNh1VocabScrambleArr] = useState();
    const [numCorrect, setNumCorrect] = useState([]);
    const [nh1VocabTest, setNh1VocabTest] = useState({});
    const [openModal, setOpenModal] = useState(false);

    const [vocabList, setVocabList] = useState({});

    //test
    const [toggled, setToggled] = useState(false);
    //test

    useEffect(() => {
        // console.log("test: ", gradeLevel)
        // console.log("state check: ", nh1VocabScrambleArr);
        console.log("grade select vocabtest check: ", nh1VocabTest)

        //TODO: unit options rendered on useeffect? idk
        scramblerNew();
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
    }, [nh1VocabTest])

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        console.log("🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔🍔")
        // console.log("test: ", this);
    };
    // const handleClose1st = () => {
    //     setAnchorEl(null);
    //     // setGradeLevel("first");
    //     setGradeLevel({grade: "first"})
    //     setToggled(true);
    //     // console.log("test: ", this);
    // };
    // const handleClose2nd = () => {
    //     setAnchorEl(null);
    //     setGradeLevel("second");
    //     // console.log("test: ", this);
    // };
    // const handleClose3rd = () => {
    //     setAnchorEl(null);
    //     setGradeLevel("third");
    //     // console.log("test: ", this);
    // };
    const handleCloseGradeSelection = (selected) => {
        setAnchorEl(null);
        setGradeLevel({grade: selected});
        setToggled(true);
        console.log("new function called 🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕");
    }

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

    const scramblerNew = () => {
        if (gradeLevel.grade === "first") {
            // let firstGradeVocabArr = [];
            let wat = [];
            for (let part in nhYear1[`${gradeLevel.unit}`]) {
                // console.log("part: ", nhYear1[`${gradeLevel.unit}`][part].vocab)
                // part.vocab.map((word) => {
                //     firstGradeVocabArr.push(word.english_vocab);
                // });
                // nhYear1[`${gradeLevel.unit}`][part].vocab.map((word) => {
                //     firstGradeVocabArr.push(word.english_vocab);
                // });
                let test = nhYear1[`${gradeLevel.unit}`][part].vocab.map((word) => {
                    return {
                        en: word.english_vocab,
                        scrambled: scrambleWord(word.english_vocab),
                        jp: word.japanese_vocab,
                        toggled: false
                    };
                });
                wat = wat.concat(test);
            }
            // console.log("🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱", firstGradeVocabArr);
            // console.log("🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭🎭")
            // const firstGradeVocabArrScrambled = firstGradeVocabArr.map((word) => {
            //     return scrambleWord(word);
            // });
            // console.log("🦺🦺🦺🦺🦺🦺🦺🦺🦺🦺🦺🦺 newscrambled array: ", firstGradeVocabArrScrambled)
            console.log("🎁🎁🎁🎁🎁🎁 wat: ", wat)
        };


        // if (gradeLevel.unit !== "") {
        //     console.log("🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄🎄", );
        //     console.log("🎈🎈🎈🎈🎈 gradeLevel check: ", gradeLevel)
        // }
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
                    // subtitle="図書館"
                    // icon="📚"
                />
                <Box 
                    backgroundColor={colors.primary[300]} 
                    borderRadius="3px"
                >
                    {/* {newListTest.toggled ? } */}
                    <InputBase 
                        sx={{ ml: 2, flex: 1}} 
                        placeholder="Enter Guess Here"
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
                                newListTest.toggled = true;
                                setNumCorrect([...numCorrect, newListTest.en]);
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

    //testing 🎈🎈🎈
    const renderList = () => {
        if (gradeLevel.grade === "first") {
            // return nh1Vocab.map((word, index) => {
            //     // console.log("index: ", index);
            //     // console.log("word: ", word.english_vocab)
            //     // console.log("test: ", nh1VocabScrambleArr[index])
            //     return wordBox(word.english_vocab, nh1VocabScrambleArr[index], nh1VocabTest[index]);
            // });
            return nh1VocabTest.map((word, index) => {
                return wordBox(word.en, word.scrambled, nh1VocabTest[index]);
            });
        } else if (gradeLevel === "second") {

        } else if (gradeLevel === "third") {
            
        }
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
                {/* <Box>
                    <Button
                        position="fixed"
                        top="40%"
                        left="50%"
                        p="12px 24px"
                        z-index="-1"
                        backgroundColor="white"
                        onClick={() => setOpenModal(!openModal)}
                    >
                        Modal
                    </Button>
                    <Modal open={openModal} onClose={() => setOpenModal(false)} />
                </Box> */}
                <Box
                    display="flex"
                    flexDirection="column"
                    gap="10px"
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

                    <Box>
                        <Button
                            position="fixed"
                            onClick={() => setOpenModal(!openModal)}
                        >
                            Modal
                        </Button>
                        <ModalComponent 
                            onClose={() => setOpenModal(false)}
                            open={openModal} 
                            grade={gradeLevel}
                            setGrade={setGradeLevel}
                        />
                    </Box>

                    {/* OG CODE 🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈*/}
                    
                    {/* drop list of grade level? */}
                    {/* <Button
                        id="demo-positioned-button"
                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <Typography color={colors.gray[900]}>
                            {gradeLevel.grade === "" ? "Select Your Grade Level" : gradeLevel.grade + " grade"}
                        </Typography>
                    </Button> */}

                    {/* <Menu
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
                        <MenuItem onClick={() => handleCloseGradeSelection("first")}>First Year</MenuItem>
                        <MenuItem onClick={() => handleCloseGradeSelection("second")}>Second Year</MenuItem>
                        <MenuItem onClick={() => handleCloseGradeSelection("third")}>Third Year</MenuItem>
                    </Menu> */}
                    {/* 🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕 */}
                    {/* {gradeLevel.grade !== "" ? 
                        <>
                            <Button
                                id="demo-positioned-button"
                                aria-controls={open ? 'demo-positioned-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <Typography color={colors.gray[900]}>
                                    Select your unit
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
                                <MenuItem onClick={() => handleCloseGradeSelection("first")}>First Year</MenuItem>
                                <MenuItem onClick={() => handleCloseGradeSelection("second")}>Second Year</MenuItem>
                                <MenuItem onClick={() => handleCloseGradeSelection("third")}>Third Year</MenuItem>
                            </Menu>
                        </> 
                    : undefined} */}
                    {/* OG CODE 🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈🎈*/}

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
                <Box>
                    {toggled ? `${numCorrect.length}/${nh1Vocab.length} found` : undefined}
                </Box>
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
                {gradeLevel.grade === "first" ? 
                    renderList()
                : undefined
                }
                
            </Box>
        </Box>
    );
};

export default WordScramble;