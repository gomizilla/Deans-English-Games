import React, { useContext, useEffect, useState } from "react";
import { Box, Typography, useTheme, IconButton } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import { AppContext } from "../index";
import { tokens } from "../../../theme";

const Letter = ({ letterPos, round }) => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const matches = useMediaQuery('(min-width: 600px)');

    
    const { board, currentAttempt, secretWord, notUsed, setNotUsed, totalAttempts, gameover } = useContext(AppContext);
    const letter = board[round][letterPos];
    const correct = secretWord[letterPos] === letter;
    const almost = !correct && letter !== "" && secretWord.includes(letter);

    const letterState = currentAttempt.round > round && (correct ? "correct" : almost ? "almost" : "error");

    const handleColor = () => {
        if (gameover.gameover === true && gameover.guessWord === true) {
            console.log("gameover chekced");
            return;
        }
        if (letterState === "correct") {
            return "#538d43";
        } else if (letterState === "almost") {
            return "#b49f39";
        } else if (letterState === "error") {
            // return "#3a393c";
            return colors.gray[500]
        } else {
            return;
        }
    }

    const handleColorNonActiveRound = () => {
        if (currentAttempt.round === round) return;
        if ((letterState === false && letter !== "") && (totalAttempts > 5)) {
            console.log("🍕🍕🍕🍕🍕🍕🍕🍕🍕🍕");
            if (letter === secretWord[letterPos]) {
                // letterState = "correct";
                return "#538d43";
            } else if (!correct && secretWord.includes(letter)) {
                // letterState = "almost";
                return "#b49f39";
            } else {
                return colors.gray[500];
            }
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
            backgroundColor={letterState === false ? handleColorNonActiveRound : handleColor}
            color={colors.gray[200]}
            // color="#fff"
        >
            {letter}
            {/* {console.log("letter: ", letter, "letterState: ", letterState, "totalAttempts: ", totalAttempts)} */}
        </Box>
    )
}

export default Letter;
