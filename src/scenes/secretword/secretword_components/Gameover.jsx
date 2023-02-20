import React, { useContext } from "react";
import { AppContext } from "../index";
import { Box, Typography } from "@mui/material";

const Gameover = () => {
    const { gameover, setGameover, secretWord, currentAttempt, totalAttempts} = useContext(AppContext);

    return(
         <Box
                height="auto"
                display="flex"
                justifyContent="center"
                margin="10px"
                marginLeft="20px"
                marginRight="20px"
            >
                <Box>
                    <Typography variant="h5">
                        Total Attempts: {totalAttempts}
                    </Typography>
                    <Typography variant="h5">
                        Secret Word: {gameover.gameover ? secretWord : undefined}
                    </Typography>
                </Box>
            </Box>
    )

}

export default Gameover;