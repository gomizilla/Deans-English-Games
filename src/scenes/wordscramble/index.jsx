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

import { nhYear1, nhYear2, nhYear3 } from "../../data/vocabWords";

const WordScramble = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [gradeLevel, setGradeLevel] = useState({ grade: "", unit: ""});
    const [nh1VocabScrambleArr, setNh1VocabScrambleArr] = useState();
    const [numCorrect, setNumCorrect] = useState([]);
    const [nh1VocabTest, setNh1VocabTest] = useState({});
    const [openModal, setOpenModal] = useState(false);

    const [vocabList, setVocabList] = useState({});
    const [playPressed, setPlayPressed] = useState(false);

    //test
    const [toggled, setToggled] = useState(false);
    //test

    useEffect(() => {
        console.log("grade select vocabtest check: ", nh1VocabTest)

        //TODO: unit options rendered on useeffect? idk

        // new 🎈🎈🎈🎈
        scramblerNew();
        console.log("🎇🎇🎇🎇🎇🎇🎇new vocab list check: ", vocabList);
    },[gradeLevel]);

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
            let vocabArr = [];
            for (let part in nhYear1[`${gradeLevel.unit}`]) {
                let vocabObj = nhYear1[`${gradeLevel.unit}`][part].vocab.map((word) => {
                    return {
                        en: word.english_vocab,
                        scrambled: scrambleWord(word.english_vocab),
                        jp: word.japanese_vocab,
                        toggled: false
                    };
                });
                vocabArr = vocabArr.concat(vocabObj);
            };
            setVocabList(vocabArr);
        };

        if (gradeLevel.grade === "second") {
            let vocabArr = [];
            for (let part in nhYear2[`${gradeLevel.unit}`]) {
                let vocabObj = nhYear2[`${gradeLevel.unit}`][part].vocab.map((word) => {
                    return {
                        en: word.english_vocab,
                        scrambled: scrambleWord(word.english_vocab),
                        jp: word.japanese_vocab,
                        toggled: false
                    };
                });
                vocabArr = vocabArr.concat(vocabObj);
            };
            setVocabList(vocabArr);
        };

        if (gradeLevel.grade === "third") {
            let vocabArr = [];
            for (let part in nhYear3[`${gradeLevel.unit}`]) {
                let vocabObj = nhYear3[`${gradeLevel.unit}`][part].vocab.map((word) => {
                    return {
                        en: word.english_vocab,
                        scrambled: scrambleWord(word.english_vocab),
                        jp: word.japanese_vocab,
                        toggled: false
                    };
                });
                vocabArr = vocabArr.concat(vocabObj);
            };
            setVocabList(vocabArr);
        };

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

    const wordBox = (word, scrambledWord, newListTest, num) => {

        // maybe if/else here that renders the whole box based on boolean?
        // maybe get the main box elemeny by id and change display?
        // console.log("newlisttest check in wordbox: ", newListTest)

        return (
            <Box
                // gridColumn="span 1"
                // backgroundColor={colors.primary[400]}
                // display={newListTest.toggled ? "none" : "flex"}
                backgroundColor={newListTest.toggled ? colors.greenAccent[600] : colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="space-around"
                flexDirection="column"
                key={newListTest.en}
                // minWidth="50px"
                // id={word}
            >
                <WordBox
                    title={newListTest.toggled ? (num+1 + ". " + newListTest.en) : (num+1 + ". " + newListTest.scrambled)}
                    // title={newListTest.toggled ? newListTest.en : newListTest.scrambled}
                    // subtitle="図書館"
                    // subtitle={"wat"}
                    // icon="📚"
                />
                <Box 
                    backgroundColor={colors.primary[300]} 
                    borderRadius="3px"
                    display={newListTest.toggled ? "none" : "flex"}
                    ml="10px"
                    mr="10px"
                >
                    {/* {newListTest.toggled ? } */}
                    <InputBase 
                        sx={{ ml: 2, flex: 1}} 
                        placeholder="Enter Guess Here"
                        id={word}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && e.target.value === newListTest.en) {
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
                    >
                        <SearchIcon />
                    </IconButton>
                </Box>

            </Box>
        );
    };

    const renderList = () => {
        if (gradeLevel.grade !== "" && gradeLevel.unit !== "") {
            return vocabList.map((word, index) => {
                return wordBox(word.en, word.scrambled, vocabList[index], index);
            });
        }
    }

    return (
        <Box m="20px">
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
            >
                <Header 
                    title="Word Scramble"
                    subtitle="❌ plape → 👍🏼 apple"
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
                {/* <Box
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
                            Click Here To Play
                        </Button>
                        <ModalComponent 
                            onClose={() => setOpenModal(false)}
                            open={openModal} 
                            grade={gradeLevel}
                            setGrade={setGradeLevel}
                            setPlayPressed={setPlayPressed}
                        />
                    </Box>
                </Box> */}
            </Box>
            <Box
                display="flex"
                // flexDirection="column"
                // alignItems="center"
                justifyContent="center"
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
                border="2px solid white"
                borderRadius="5%"
            >
                <Box
                    height="250px"
                    // width="auto"
                    // display="flex"
                    // justifyContent="center"
                    // alignContent="center"
                    border="2px solid yellow"
                >
                    <Button
                        // position="fixed"
                        // height="250px"
                        onClick={() => setOpenModal(!openModal)}
                        sx={{
                            width: "250px",
                            height: "250px",
                            fontSize: "50px"
                        }}
                    >
                        Play
                    </Button>
                    <ModalComponent 
                        onClose={() => setOpenModal(false)}
                        open={openModal} 
                        grade={gradeLevel}
                        setGrade={setGradeLevel}
                        setPlayPressed={setPlayPressed}
                    />
                </Box>
            </Box>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                mb="20px"
            >
                {/* fix later 🚧🚧🚧*/}

                {/* <Box>
                    {toggled ? `${numCorrect.length}/${nh1Vocab.length} found` : undefined}
                </Box>
                {toggled ? "Scrambled words: " : undefined} */}

                {/* fix later 🚧🚧🚧*/}

                {/* {numCorrect.map((word)=> {
                    return ` ${word} `
                })} */}

                {/* fix later 🚧🚧🚧*/}

                {/* {numCorrect.length === nh1Vocab.length ? 
                <Typography m="20px" variant="h3">
                    Word Scramble Complete!
                </Typography> 
                : undefined} */}

                {/* fix later 🚧🚧🚧*/}

            </Box>
            <Box
                display="grid"
                // gridTemplateColumns="repeat(3, 1fr)"
                gridTemplateColumns="repeat(auto-fit, minmax(325px, 3fr))"
                gridAutoRows="140px"
                gap="20px"
                border="2px solid purple"
            >
                {/* {gradeLevel.grade === "first" ? 
                    renderList()
                : undefined
                } */}
                {/* {(gradeLevel.grade !== "" && gradeLevel.unit !== "") && renderList()} */}
                {playPressed ? renderList() : undefined}
                
            </Box>
        </Box>
    );
};

export default WordScramble;