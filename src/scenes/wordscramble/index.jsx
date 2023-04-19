import { useState, useEffect } from "react";
import * as React from 'react';

import Button from '@mui/material/Button';
import { Box, Typography, useTheme, IconButton, Switch, FormGroup, FormControlLabel} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

import { useTranslation } from 'react-i18next';

import { tokens } from "../../theme";
import Header from "../../components/Header";
import WordBox from "../../components/WordBox";
import ModalComponent from "../../components/Modal";

import { nhYear1, nhYear2, nhYear3 } from "../../data/vocabWords";

const WordScramble = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const { t } = useTranslation();

    const [gradeLevel, setGradeLevel] = useState({ grade: "", unit: ""});
    const [numCorrect, setNumCorrect] = useState([]);
    const [openModal, setOpenModal] = useState(false);

    const [vocabList, setVocabList] = useState({});
    const [playPressed, setPlayPressed] = useState(false);

    //test
    const [toggled, setToggled] = useState(false);
    const [hintsUsed, setHintsUsed] = useState(0);
    const [wrongNum, setWrongNum] = useState(0);
    //test

    useEffect(() => {
        scramblerNew();
    },[gradeLevel]);

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
                backgroundColor={newListTest.toggled ? colors.greenAccent[600] : colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                key={newListTest.en}
            >
                <Box
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
                                }}
                            />}
                            // label="Hint: "
                            label={t('hint')}
                            labelPlacement="start"
                        >
                        </FormControlLabel>
                    </FormGroup>
                </Box>
                <WordBox
                    title={newListTest.toggled ? (num+1 + ". " + newListTest.en) : (num+1 + ". " + newListTest.scrambled)}
                    subtitle={newListTest.hint ? newListTest.jp : undefined}
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
                    sx={
                        newListTest.wrongToggle ? 
                        {
                        "@keyframes shake": {
                            "0%, 100%": {
                                transform: "translateX(0)",
                            },
                            "25%, 75%": {
                                transform: "translateX(5px)",
                                backgroundColor: `${colors.redAccent[500]}`
                            },
                            "50%": {
                                transform: "translateX(-5px)",
                                backgroundColor: `${colors.redAccent[500]}`
                            },
                        },
                        animation: "shake 0.5s linear 1",                        
                        } : {}
                    }
                >
                    <InputBase 
                        sx={{ ml: 2, flex: 1}} 
                        placeholder={t('answer')}
                        id={word}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && e.target.value === newListTest.en) {
                                e.target.value = "";
                                newListTest.toggled = true;
                                setNumCorrect([...numCorrect, newListTest.en]);
                            } else if (e.key === "Enter" && e.target.value !== newListTest.en) {
                                newListTest.wrongToggle = true;
                                let newWrongNum = wrongNum;
                                newWrongNum++
                                setWrongNum(newWrongNum);
                                setTimeout(() => {
                                    newListTest.wrongToggle = false;
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
                                userInput.value = "";
                                newListTest.toggled = true;
                                setNumCorrect([...numCorrect, newListTest.en]);
                            } else {
                                newListTest.wrongToggle = true;
                                let newWrongNum = wrongNum;
                                newWrongNum++
                                setWrongNum(newWrongNum);
                                setTimeout(() => {
                                    newListTest.wrongToggle = false;
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
                    title={t('word-scramble')}
                    subtitle="❌ plape → 👍🏼 apple"
                />
            </Box>
            <Box
                display="flex"
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
                borderRadius="5%"
            >
                <Box
                    height="250px"
                >
                    <Button
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
                gridTemplateColumns="repeat(auto-fit, minmax(325px, 3fr))"
                gridAutoRows="140px"
                gap="20px"
            >
                {playPressed ? renderList() : undefined}
            </Box>
        </Box>
    );
};

export default WordScramble;