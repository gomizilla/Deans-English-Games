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

export const tempWordMain = "awerawer";


const SecretWord = () => {

    const BOARD_ROWS = 6;
    const WORD_LENGTH = tempWordMain.split("").length;

    // const tempBoard = [
    //     ["", "", "", "", ""],
    //     ["", "", "", "", ""],
    //     ["", "", "", "", ""],
    //     ["", "", "", "", ""],
    //     ["", "", "", "", ""],
    //     ["", "", "", "", ""],
    // ];

    const [board, setBoard] = useState([[]]);
    // const [board, setBoard] = useState(tempBoard);
    const [currentAttempt, setCurrentAttempt] = useState({round: 0, letterPos: 0});
    const [notUsed, setNotUsed] = useState([]);
    // const [gameover, setGameover] = useState({gameover: false, guessedWord: false});
    const [secretWord, setSecretWord] = useState("");
    const [buttonClicked, setButtonClicked] = useState(false);

    useEffect(() => {
        handleSecretWord();
        // handleDefaultBoard();
        setSecretWord(tempWordMain);
        console.log("board initial load: ", board);
    }, []);

    useEffect(() => {
        // console.log("board b4: ", board);
        // handleDefaultBoard();
        console.log("board on word change: ", board);
    }, [tempWordMain])


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
        console.log("board", board);
        return;
    }

    return (
        <Box>
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
                    secretWord
                }}
            >
                {/* temp fix, change to MUI or something later*/}
                <button onClick={handleDefaultBoard}>
                    awer
                </button>
                {/* <Board /> */}
                {buttonClicked ? <Board/> : undefined}
                <Keyboard />
            </AppContext.Provider>
        </Box>
    );
};

export default SecretWord;