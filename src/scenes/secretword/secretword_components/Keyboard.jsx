import React, { useEffect, useContext, useCallback } from "react";
import { Box, Button } from "@mui/material";
import { AppContext } from "../index";
import Key from "./Key";

const Keyboard = () => {

    const keyboardTop = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keyboardMid = ["A", "S", "D", "F", "G", "H", "J", "K","L"];
    const keyboardBot = ["Z", "X", "C", "V", "B", "N", "M"];

    const { onEnter, onDelete, onSelectLetter, notUsed } = useContext(AppContext);

    const handleKeyboard = useCallback((event) => {
        if (event.key === "ENTER") {
            onEnter();
        } else if (event.key === "Backspace") {
            onDelete();
        } else {
            keyboardTop.forEach((key) => {
                if (event.key.toLowerCase() === key.toLowerCase()) {
                    onSelectLetter(key);
                };
            });
            keyboardMid.forEach((key) => {
                if (event.key.toLowerCase() === key.toLowerCase()) {
                    onSelectLetter(key);
                };
            });
            keyboardBot.forEach((key) => {
                if (event.key.toLowerCase() === key.toLowerCase()) {
                    onSelectLetter(key);
                };
            });
        }
        console.log(`${event.key} pressed`);
    });

    useEffect(() => {
        document.addEventListener("keydown", handleKeyboard);
        return () => {
            document.removeEventListener("keydown", handleKeyboard);
        }
    }, [handleKeyboard]);

    return (
        <Box
            // width="700px"
            marginLeft="5em"
            marginRight="10em"
            height="300px"
            marginTop="20px"
            onKeyDown={handleKeyboard}
        >
            <Box
                display="flex"
                // flex="33%"
                // flexDirection="row"
                justifyContent="center"
                margin="5px"
            >
                {keyboardTop.map((key) => {
                    return <Key keyVal={key} disabled={notUsed.includes(key)} />
                })}
            </Box>
            <Box
                display="flex"
                // flex="33%"
                // flexDirection="row"
                justifyContent="center"
                margin="5px"
            >
                {keyboardMid.map((key) => {
                    return <Key keyVal={key} disabled={notUsed.includes(key)} />
                })}
            </Box>
            <Box
                display="flex"
                // flex="33%"
                // flexDirection="row"
                justifyContent="center"
                margin="5px"
            >
                <Key keyVal={"ENTER"} enterOrDelete />
                {keyboardBot.map((key) => {
                    return <Key keyVal={key} disabled={notUsed.includes(key)} />
                })}
                <Key keyVal={"DELETE"} enterOrDelete />
            </Box>
        </Box>
    )
}

export default Keyboard;
