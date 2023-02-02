
// import { nh1Vocab } from "../../../data/vocabWords";
import { Box, Typography, useTheme, IconButton } from "@mui/material";
import Letter from "./Letter";
import { tempWordMain } from "../index";
import { tokens } from "../../../theme";

// const tempWord = "AWERAWER";

const Board = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const BOARD_ROWS = 6;
    const WORD_LENGTH = tempWordMain.split("").length;
    // console.log("test: ", WORD_LENGTH);

    // const handleBoard = (round) => {
    //     const word = tempWord.split("")
    //     for (let i = 0; i < BOARD_ROWS; i++) {
    //         <Box
    //             // key={[round, i]}
    //         >
    //             {word.map((letter) => {
    //                 return (
    //                     <Box>
    //                         {letter}
    //                     </Box>
    //                 )
    //             })}
    //         </Box>
    //         // for (let j = 0; j < tempWord.length; j++) {

    //         // }
    //     }
    // }

    return (
        // <Box
        //     backgroundColor="pink"
        //     display="grid"
        //     justifyContent="center"
        //     alignContent="center"
        //     flexGrow="1"
        //     // gridTemplateColumns="repeat(5, 4em)"
        //     gridTemplateColumns={`repeat(${WORD_LENGTH}, 4em)`}
        //     gridTemplateRows={`repeat(${BOARD_ROWS}, 4em)`}
        //     gap=".25em"
        //     marginBottom="1em"
        //     // maxWidth="75%"
        //     margin="20px"
        //     paddingTop="20px"
        //     paddingBottom="20px"
        // >
        <Box
            backgroundColor={colors.primary[400]}
            borderRadius="5px"
            display="flex"
            // justifyContent="center"
            // alignContent="center"
            alignItems="center"
            flexDirection="column"
            // flexGrow="1"
            // gridTemplateColumns="repeat(5, 4em)"
            // gridTemplateColumns={`repeat(${WORD_LENGTH}, 4em)`}
            // gridTemplateRows={`repeat(${BOARD_ROWS}, 4em)`}
            gap=".25em"
            // marginBottom="1em"
            // maxWidth="75%"
            margin="20px"
            paddingTop="20px"
            paddingBottom="20px"
            // border="1px solid yellow"
            maxWidth="80vw"
        >

            {/* {[...Array(BOARD_ROWS*WORD_LENGTH)].map((e, index) => {
                return (
                    <Box
                        key={index}
                        border="1px solid blue"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        {index}
                    </Box>
                )
            })} */}

            {[...Array(BOARD_ROWS)].map((e, index) => {
                return (
                    <Box
                        key={index}
                        // border="1px solid blue"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        gap=".25em"
                        width="90%"
                        // float="left"
                        // maxWidth="50%"
                    >
                        {[...Array(WORD_LENGTH)].map((e, index2) => {
                            return (
                                <Letter
                                    key={index2}
                                    // border="1px solid green"
                                    // display="flex"
                                    // justifyContent="center"
                                    // alignItems="center"
                                    // height="5rem"
                                    // width="5rem"
                                    // id={[index, index2]}
                                    letterPos={index2}
                                    round={index}
                                >
                                    {/* {index2} */}
                                    {/* <Letter round={index} pos={index2} /> ??? */}
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
