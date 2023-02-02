import React, { useContext } from "react";
import { AppContext } from "../index";
import { Box, Typography } from "@mui/material";

const Gameover = () => {
    const { gameover, setGameover, secretWord, currentAttempt, totalAttempts} = useContext(AppContext);

    return(
         <Box
                height="auto"
                // width="10rem"
                // border="1px solid green"
                display="flex"
                justifyContent="center"
                margin="10px"
                maxWidth="80vw"
                marginLeft="20px"
                marginRight="20px"
            >
                {/* <Box>
                    {gameover.guessWord ? "Correct!" : "Try again"}
                </Box> */}
                <Box>
                    <Typography>
                        Secret Word: {gameover.gameover ? secretWord : undefined}
                    </Typography>
                    <Typography>
                        Total Attempts: {totalAttempts}
                    </Typography>
                </Box>
                {/* {gameover.guessWord && (<Box>You guess in {totalAttempts} attempts</Box>)} */}
            </Box>
    )

}

export default Gameover;