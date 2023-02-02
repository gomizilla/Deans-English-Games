import React, { useContext, useEffect, useState } from "react";
import { Box, Typography, useTheme, IconButton } from "@mui/material";
import { AppContext } from "../index";

const Letter = ({ letterPos, round }) => {
    
    const { board, currentAttempt, secretWord, notUsed, setNotUsed } = useContext(AppContext);
    const letter = board[round][letterPos]; //need to fix board UPDATE: think its working?
    // const letter = "awer";
    //test
    // const [letterColor, setLetterColor] = useState();

    const correct = secretWord[letterPos] === letter;
    const almost = !correct && letter !== "" && secretWord.includes(letter);

    const letterState = currentAttempt.round > round && (correct ? "correct" : almost ? "almost" : "error");

    //test
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
        // console.log("board in letter file: ", board);
    }, [currentAttempt.round]);

    return (
        <Box
            className="letter"
            // id={letterState ? letterState : undefined}
            // key={index2}
            border="1px solid green"
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="5rem"
            width="5rem"
            backgroundColor={handleColor}
        >
            {letter}
        </Box>
    )
}

export default Letter;
