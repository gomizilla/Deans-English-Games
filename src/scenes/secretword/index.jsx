import React, { useState, useEffect, createContext } from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { Box, Typography, useTheme, IconButton } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { tokens } from "../../theme";
// import Header from "../../components/Header";
import WordBox from "../../components/WordBox";
import { nh1Vocab } from "../../data/vocabWords";

import Board from "./secretword_components/Board";
import Keyboard from "./secretword_components/Keyboard";
import Letter from "./secretword_components/Letter";
import Gameover from "./secretword_components/Gameover";
import Header from "../../components/Header";
import { getRandomEnglishWord } from "../../data/vocabWords";

export const AppContext = createContext();

// export const tempWordMain = getRandomEnglishWord(nh1Vocab);


const SecretWord = () => {

    const BOARD_ROWS = 6;
    // const WORD_LENGTH = tempWordMain.split("").length;

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [board, setBoard] = useState([[]]);
    const [currentAttempt, setCurrentAttempt] = useState({round: 0, letterPos: 0});
    const [notUsed, setNotUsed] = useState([]);
    const [secretWord, setSecretWord] = useState("");
    const [buttonClicked, setButtonClicked] = useState(false);
    const [totalAttempts, setTotalAttempts] = useState(0);
    const [gameover, setGameover] = useState({gameover: false, guessWord: false});
    const [WORD_LENGTH, setWORD_LENGTH] = useState(0);

    useEffect(() => {
        handleSecretWord();
    }, []);

    const onSelectLetter = (keyVal) => {
        if (currentAttempt.letterPos > (WORD_LENGTH - 1)) return;
        const currentBoard = [...board];
        currentBoard[currentAttempt.round][currentAttempt.letterPos] = keyVal;
        setBoard(currentBoard);
        setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos + 1});
    }

    const onDelete = () => {
        if (currentAttempt.letterPos === 0) return;
        const currentBoard = [...board];
        currentBoard[currentAttempt.round][currentAttempt.letterPos - 1] = "";
        setBoard(currentBoard);
        setCurrentAttempt({...currentAttempt, letterPos: currentAttempt.letterPos - 1});
    }

    const onEnter = () => {
        if (currentAttempt.letterPos === WORD_LENGTH) {
            setTotalAttempts(totalAttempts + 1);
        }

        if (currentAttempt.letterPos !== WORD_LENGTH) return;
        let currentWord = "";
        for (let i = 0; i < WORD_LENGTH; i++) {
            currentWord += board[currentAttempt.round][i];
        }

        if (secretWord === currentWord) {
            setGameover({gameover: true, guessedWord: true});
            console.log("a winrar is u");
        }

        setCurrentAttempt({round: currentAttempt.round + 1, letterPos: 0});
        console.log("currentword: ", currentWord);
        console.log("secretword: ", secretWord);

        if (currentAttempt.round === BOARD_ROWS - 1 && gameover.guessWord === false) {
            console.log("bing bong");
            setCurrentAttempt({round: 0, letterPos: 0});
            handleDefaultBoard();  
        }
        
    }

    const handleSecretWord = () => {
        const tempWordMain = getRandomEnglishWord(nh1Vocab);
        setWORD_LENGTH(tempWordMain.split("").length)
        const temp = tempWordMain.toUpperCase();
        setSecretWord(temp) // should get from a list or something?
    }

    const handleDefaultBoard = () => {
        let boardSize = WORD_LENGTH;
        let gameBoard = [];
        for (let i = 0; i < BOARD_ROWS; i++) {
            let tempArr = [];
            for (let j = 0; j < boardSize; j++) {
                tempArr.push("");
            }
            gameBoard.push(tempArr);
        }
        setBoard(gameBoard);
        setButtonClicked(true);
        return;
    }

    const handleReplay = () => {

    }

    return (
        <Box m="20px">
            <AppContext.Provider
                value={{
                    board,
                    setBoard,
                    currentAttempt,
                    setCurrentAttempt,
                    onSelectLetter,
                    onEnter,
                    onDelete,
                    notUsed,
                    setNotUsed,
                    secretWord,
                    gameover,
                    setGameover,
                    totalAttempts,
                    BOARD_ROWS,
                    WORD_LENGTH
                }}
            >
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Header 
                        title="Secret Word"
                        subtitle="Find the secret word!"
                    />
                    <Button 
                        sx={{
                            backgroundColor: `${colors.blueAccent[500]}`,
                            "&:hover": {
                                backgroundColor: `${colors.greenAccent[500]}`
                            }
                        }}
                        onClick={!buttonClicked ? handleDefaultBoard : undefined}
                    >
                        <Typography>
                            Play
                        </Typography>
                    </Button>
                </Box>
                {buttonClicked ? <Board/> : undefined}
                {(!gameover.gameover && buttonClicked) ? <Keyboard/> : undefined}
                {buttonClicked ? <Gameover /> : undefined}
            </AppContext.Provider>
        </Box>
    );
};

export default SecretWord;