
import React, { useContext } from "react";
import { Box, Typography, useTheme, IconButton } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AppContext } from "../index";
import Letter from "./Letter";
import { tokens } from "../../../theme";

const Board = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const matches = useMediaQuery('(min-width: 600px)');


    const { BOARD_ROWS, WORD_LENGTH } = useContext(AppContext);

    return (
        <Box
            backgroundColor={colors.primary[400]}
            borderRadius="5px"
            display="flex"
            alignItems="center"
            flexDirection="column"
            gap=".25em"
            // m="15px"
            m={matches ? "15px" : "5px"}
            paddingTop="20px"
            paddingBottom="20px"
            // border="2px solid yellow" // new
            // maxWidth="70vw" // sets block to certain width but not centered
            height={matches ? "500px" : "350px"}
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
