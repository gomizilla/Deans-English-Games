import React, { useContext, useEffect } from "react";
import { Box, Typography, useTheme, IconButton } from "@mui/material";
import { AppContext } from "../index";

const Letter = ({ letterPos, round }) => {
    
    const { board, currentAttempt, secretWord, notUsed, setNotUsed } = useContext(AppContext);
    const letter = board[letterPos][round];

    const correct = secretWord[letterPos] === letter;
    const almost = !correct && letter !== "" && secretWord.includes(letter);

    const letterState = currentAttempt.round > round && (correct ? "correct" : almost ? "almost" : "error");

    useEffect(() => {
        if (letter !== "" && !correct && !almost) {
            setNotUsed((prev) => [...prev, letter]);
        }
    }, [currentAttempt.round]);

    return (
        <Box
            className="letter"
            id={letterState}
        >
            {letter}
        </Box>
    )
}

export default Letter;
