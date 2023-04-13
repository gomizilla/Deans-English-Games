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
        if (event.key === "Enter") {
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
    });

    useEffect(() => {
        document.addEventListener("keydown", handleKeyboard);
        return () => {
            document.removeEventListener("keydown", handleKeyboard);
        }
    }, [handleKeyboard]);

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            marginTop="20px"
            onKeyDown={handleKeyboard}
        >
            <Box
                display="flex"
                flex="33%"
                flexDirection="row"
                justifyContent="center"
                margin="5px"
            >
                {keyboardTop.map((key) => {
                    return <Key keyVal={key} disabled={notUsed.includes(key)} id={key}/>
                })}
            </Box>
            <Box
                display="flex"
                flex="33%"
                flexDirection="row"
                justifyContent="center"
                margin="5px"
            >
                {keyboardMid.map((key) => {
                    return <Key keyVal={key} disabled={notUsed.includes(key)} id={key}/>
                })}
            </Box>
            <Box
                display="flex"
                flex="33%"
                flexDirection="row"
                justifyContent="center"
                margin="5px"
            >
                <Key keyVal={"ENTER"} enterOrDelete id="ENTER"/>
                {keyboardBot.map((key) => {
                    return <Key keyVal={key} disabled={notUsed.includes(key)} id={key}/>
                })}
                <Key keyVal={"DELETE"} enterOrDelete id="DELETE"/>
            </Box>
        </Box>
    )
}

export default Keyboard;
