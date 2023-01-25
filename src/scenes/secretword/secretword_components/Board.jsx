
// import { nh1Vocab } from "../../../data/vocabWords";
import { Box, Typography, useTheme, IconButton } from "@mui/material";
import Letter from "./Letter";
import { tempWordMain } from "../index";

// const tempWord = "AWERAWER";

const Board = () => {

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
            backgroundColor="pink"
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
                        border="1px solid blue"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
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
                                    {index2}
                                    {/* <Letter round={index} pos={index2} /> ??? */}
                                </Letter>
                            )
                        })}
                    </Box>
                )
            })}

            {/* {[...Array(BOARD_ROWS)].map((e,index) => {
                return (
                    <Box
                        // key={[index, 0]}
                    >
                        {handleBoard(index)}
                    </Box>
                )
            })} */}

            {/* {[...Array(BOARD_ROWS)].map((e, index) => {
                return (
                    <Box
                        key={index}
                        backgroundColor="purple"
                    >
                        {[...Array(WORD_LENGTH)].map((e, i) => {
                            return (
                                <Box
                                    key={[index, i]}
                                    backgroundColor="white"
                                >
                                    <Typography
                                        color="orange"
                                    >
                                        test
                                    </Typography>
                                </Box>
                            )
                        })}
                    </Box>
                )
            })} */}

            {/* <Box>1</Box>
            <Box>2</Box>
            <Box>3</Box>
            <Box>4</Box>
            <Box>5</Box>
            <Box>6</Box>
            <Box>7</Box>
            <Box>8</Box>
            <Box>9</Box>
            <Box>10</Box>
            <Box>11</Box>
            <Box>12</Box>
            <Box>13</Box>
            <Box>14</Box>
            <Box>15</Box>
            <Box>16</Box>
            <Box>17</Box>
            <Box>18</Box>
            <Box>19</Box>
            <Box>20</Box>
            <Box>21</Box>
            <Box>22</Box>
            <Box>23</Box>
            <Box>24</Box>
            <Box>25</Box>
            <Box>26</Box>
            <Box>27</Box>
            <Box>28</Box>
            <Box>29</Box>
            <Box>30</Box> */}
        </Box>
    );
};

export default Board;
