import React, { useContext, useEffect, useState } from "react";
import { Box, Typography, useTheme, IconButton } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import { AppContext } from "../index";
import { tokens } from "../../../theme";

const Letter = ({ letterPos, round }) => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const matches = useMediaQuery('(min-width: 600px)');

    
    const { board, currentAttempt, secretWord, notUsed, setNotUsed } = useContext(AppContext);
    const letter = board[round][letterPos];
    const correct = secretWord[letterPos] === letter;
    const almost = !correct && letter !== "" && secretWord.includes(letter);

    const letterState = currentAttempt.round > round && (correct ? "correct" : almost ? "almost" : "error");

    const handleColor = () => {
        if (letterState === "correct") {
            return "#538d43";
        } else if (letterState === "almost") {
            return "#b49f39";
        } else if (letterState === "error") {
            return "#3a393c";
        } else {
            return;
        }
    }

    useEffect(() => {
        if (letter !== "" && !correct && !almost) {
            setNotUsed((prev) => [...prev, letter]);
        }
    }, [currentAttempt.round]);

    return (
        <Box
            className="letter"
            border={`2px solid ${colors.gray[400]}`}
            display="flex"
            justifyContent="center"
            alignItems="center"
            height={matches ? "5em" : "3.5em"}
            width={matches ? "5em" : "3.5em"}
            backgroundColor={handleColor}
            color="#fff"
        >
            {letter}
        </Box>
    )
}

export default Letter;
