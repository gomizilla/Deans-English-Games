import { useState, useEffect } from "react";
import * as React from 'react';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box, Typography, useTheme, IconButton, Switch, FormGroup, FormControlLabel} from "@mui/material";
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
    // const [nh1VocabScrambleArr, setNh1VocabScrambleArr] = useState();
    const [numCorrect, setNumCorrect] = useState([]);
    // const [nh1VocabTest, setNh1VocabTest] = useState({});
    const [openModal, setOpenModal] = useState(false);

    const [vocabList, setVocabList] = useState({});
    const [playPressed, setPlayPressed] = useState(false);

    //test
    const [toggled, setToggled] = useState(false);
    const [hintsUsed, setHintsUsed] = useState(0);
    const [wrongNum, setWrongNum] = useState(0);
    //test

    useEffect(() => {
        // console.log("grade select vocabtest check: ", nh1VocabTest)
        scramblerNew();
        // console.log("🎇🎇🎇🎇🎇🎇🎇new vocab list check: ", vocabList);
    },[gradeLevel]);

    // useEffect(() => {
    //     console.log("hints used check useeffet: ", hintsUsed)
    // }, [hintsUsed])

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

    const scramblerNew = () => {
        if (gradeLevel.grade === "first") {
            let vocabArr = [];
            for (let part in nhYear1[`${gradeLevel.unit}`]) {
                let vocabObj = nhYear1[`${gradeLevel.unit}`][part].vocab.map((word) => {
                    return {
                        en: word.english_vocab,
                        scrambled: scrambleWord(word.english_vocab),
                        jp: word.japanese_vocab,
                        toggled: false,
                        hint: false,
                        wrongToggle: false,
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
                        toggled: false,
                        hint: false
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
                        toggled: false,
                        hint: false
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
                // justifyContent="space-around"
                justifyContent="center"
                flexDirection="column"
                key={newListTest.en}
                // minWidth="50px"
                // id={word}
                // border="2px solid yellow"
                // p="20px"
                // m="20px"
            >
                <Box
                    // dispaly="flex"
                    // flexDirection="row"
                    // border="2px solid yellow"
                    width="95%"
                    display="flex"
                    alignItems="center"
                    justifyContent="right"
                    m="0"
                    p="0"
                >
                    <FormGroup>
                        <FormControlLabel
                            control={<Switch
                                // defaultChecked={newListTest.hint}
                                color="secondary"
                                onChange={(e) => {

                                    newListTest.hint = e.target.checked;

                                    if (newListTest.hint) {
                                        let addHint = hintsUsed;
                                        addHint++;
                                        setHintsUsed(addHint);
                                    }
                                    if (!newListTest.hint) {
                                        let subHint = hintsUsed;
                                        subHint--;
                                        setHintsUsed(subHint);
                                    }
                                    // console.log("hints used check: ", hintsUsed);
                                }}
                            />}
                            label="Hint: "
                            labelPlacement="start"
                        >
                        </FormControlLabel>
                    </FormGroup>
                </Box>
                <WordBox
                    title={newListTest.toggled ? (num+1 + ". " + newListTest.en) : (num+1 + ". " + newListTest.scrambled)}
                    // title={newListTest.toggled ? newListTest.en : newListTest.scrambled}
                    subtitle={newListTest.hint ? newListTest.jp : undefined}
                    // subtitle={"wat"}
                    // icon="📚"
                />
                <Box 
                    backgroundColor={colors.primary[300]} 
                    borderRadius="3px"
                    display={newListTest.toggled ? "none" : "flex"}
                    ml="10px"
                    // making each key random forces makes react thinks each is different
                    // thus replaying the animation
                    key={Math.random()}
                    // mr="10px"
                    // border="2px solid white"
                    sx={
                        newListTest.wrongToggle ? 
                        {
                        "@keyframes shake": {
                            "0%, 100%": {
                                transform: "translateX(0)",
                                // backgroundColor: "white"
                            },
                            "25%, 75%": {
                                transform: "translateX(5px)",
                                backgroundColor: `${colors.redAccent[500]}`
                            },
                            "50%": {
                                transform: "translateX(-5px)",
                                backgroundColor: `${colors.redAccent[500]}`
                            },
                            // "75%": {
                            //     transform: "translateX(12px)",
                            //     backgroundColor: "blue"
                            // },
                            // "100%": {
                            //     transform: "translateX(0px)",
                            //     // backgroundColor: "orange"
                            // }
                        },
                        // width: "100px",
                        // height: "50px",
                        // backgroundColor: "red",
                        animation: "shake 0.5s linear 1",                        
                        } : {}
                    }
                    // onAnimationEnd={() => {
                    //     newListTest.wrongToggle = false;
                    // }}
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
                                // console.log("newlsittest check: ", newListTest);
                                // console.log("asdfwaoerwuerqweropuqw: ", nh1VocabTest);
                                setNumCorrect([...numCorrect, newListTest.en]);
                            } else if (e.key === "Enter" && e.target.value !== newListTest.en) {
                                // alert(`wrong ${e.target.value}`);
                                // console.log("triggered")
                                // console.log("wrong toggle check before key down: ", newListTest.wrongToggle);
                                newListTest.wrongToggle = true;
                                // console.log("wrong toggle check before key after: ", newListTest.wrongToggle)
                                // newListTest.wrongToggle++;
                                let newWrongNum = wrongNum;
                                newWrongNum++
                                setWrongNum(newWrongNum);
                                // newListTest.wrongToggle = false;
                                setTimeout(() => {
                                    newListTest.wrongToggle = false;
                                    // console.log("wrong toggle check after timeout?: ", newListTest.wrongToggle);
                                }, 100)
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
                                // console.log("various checks: ", word, scrambledWord, userInput.value);
                                userInput.value = "";
                                newListTest.toggled = true;
                                setNumCorrect([...numCorrect, newListTest.en]);
                            } else {
                                // alert(`wrong (click) ${userInput.value}`);
                                newListTest.wrongToggle = true;
                                // console.log("wrong toggle check before key after: ", newListTest.wrongToggle)
                                // newListTest.wrongToggle++;
                                let newWrongNum = wrongNum;
                                newWrongNum++
                                setWrongNum(newWrongNum);
                                // newListTest.wrongToggle = false;
                                setTimeout(() => {
                                    newListTest.wrongToggle = false;
                                    // console.log("wrong toggle check after timeout?: ", newListTest.wrongToggle);
                                }, 100)
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
                // border="2px solid white"
                borderRadius="5%"
            >
                <Box
                    height="250px"
                    // width="auto"
                    // display="flex"
                    // justifyContent="center"
                    // alignContent="center"
                    // border="2px solid yellow"
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

            </Box>
            <Box
                display="grid"
                // gridTemplateColumns="repeat(3, 1fr)"
                gridTemplateColumns="repeat(auto-fit, minmax(325px, 3fr))"
                gridAutoRows="140px"
                gap="20px"
                // border="2px solid purple"
            >
                {playPressed ? renderList() : undefined}
            </Box>
        </Box>
    );
};

export default WordScramble;