
// import { nh1Vocab } from "../../../data/vocabWords";
import { Box, Typography, useTheme, IconButton } from "@mui/material";


const tempWord = "FRUIT";

const Board = () => {

    const BOARD_ROWS = 6;

    const handleBoard = (round) => {
        const word = tempWord.split("")
        for (let i = 0; i < BOARD_ROWS; i++) {
            <Box
                // key={[round, i]}
            >
                {word.map((letter) => {
                    return (
                        <Box>
                            {letter}
                        </Box>
                    )
                })}
            </Box>
            // for (let j = 0; j < tempWord.length; j++) {

            // }
        }
    }

    return (
        <Box
            backgroundColor="pink"
            display="grid"
            justifyContent="center"
            alignContent="center"
            flexGrow="1"
            gridTemplateColumns="repeat(5, 4em)"
            gridTemplateRows="repeat(6, 4em)"
            gap=".25em"
            marginBottom="1em"
        >
            {/* {[...Array(BOARD_ROWS)].map((e,index) => {
                return (
                    <Box
                        // key={[index, 0]}
                    >
                        {handleBoard(index)}
                    </Box>
                )
            })} */}
            <Box>1</Box>
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
            <Box>30</Box>
        </Box>
    );
};

export default Board;
