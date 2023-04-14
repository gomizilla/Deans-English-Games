
import React, { useContext } from "react";
import { Box, Typography, useTheme, IconButton } from "@mui/material";
import { AppContext } from "../index";
import Letter from "./Letter";
import { tempWordMain } from "../index";
import { tokens } from "../../../theme";

const Board = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const { BOARD_ROWS, WORD_LENGTH } = useContext(AppContext);

    // const BOARD_ROWS = 6;
    // const WORD_LENGTH = tempWordMain.split("").length;

    return (
        <Box
            backgroundColor={colors.primary[400]}
            borderRadius="5px"
            display="flex"
            alignItems="center"
            flexDirection="column"
            gap=".25em"
            m="15px"
            paddingTop="20px"
            paddingBottom="20px"
            border="2px solid yellow" // new
            maxWidth="70vw" // sets block to certain width but not centered
        >

            {[...Array(BOARD_ROWS)].map((e, index) => {
                return (
                    <Box
                        key={index}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        gap=".25em"
                        width="90%"
                    >
                        {[...Array(WORD_LENGTH)].map((e, index2) => {
                            return (
                                <Letter
                                    key={index2}
                                    letterPos={index2}
                                    round={index}
                                >
                                </Letter>
                            )
                        })}
                    </Box>
                )
            })}
        </Box>
    );
};

export default Board;
