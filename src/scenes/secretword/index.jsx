// import { useState, useEffect } from "react";
// import * as React from 'react';
import React, { useState, useEffect, createContext } from "react";
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

import Board from "./secretword_components/Board";
import Keyboard from "./secretword_components/Keyboard";
import Letter from "./secretword_components/Letter";
// import gameover

export const AppContext = createContext();

const tempWordMain = "FRUIT";


const SecretWord = () => {

    const BOARD_ROWS = 6;
    const WORD_LENGTH = tempWordMain.split("").length;

    const [board, setBoard] = useState([]);
    // const [currentAttempt, setCurrentAttempt] = useState(["0, 0"]);
    const [notUsed, setNotUsed] = useState([]);
    // const [gameover, setGameover] = useState({gameover: false, guessedWord: false});
    const [secretWord, setSecretWord] = useState("");


    const onSelectLetter = () => {

    }

    const onDelete = () => {

    }

    const onEnter = () => {

    }

    const handleSecretWord = () => {
        setSecretWord(tempWordMain) // should get from a list or something?
    }

    const handleDefaultBoard = () => {
        let boardSize = WORD_LENGTH;
        let board = [];
        for (let i = 0; i < BOARD_ROWS; i++) {
            let tempArr = [];
            for (let j = 0; j < boardSize; j++) {
                tempArr.push("");
            }
            board.push(tempArr);
        }
        setBoard(board);
    }

    return (
        <Box>
            <AppContext.Provider
                value={{
                    board,
                    setBoard,
                    // currentAttempt,
                    // setCurrentAttempt,
                    onSelectLetter,
                    onEnter,
                    onDelete,
                    notUsed,
                    setNotUsed,
                    secretWord
                }}
            >
                <Board />
            </AppContext.Provider>
        </Box>
    );
};

export default SecretWord;