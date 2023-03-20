import React from 'react'
import { Box, Modal, Typography, useTheme, IconButton, Button } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { tokens } from '../theme';

function ModalComponent({open, onClose, grade, setGrade}) {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    // if (!open) return null;

    const handleChangeGrade = (event) => {
        // setValue(event.target.value);
        console.log("event check: ", event.target.value);
        setGrade({grade: event.target.value})
      };

  return (
    <Modal
        open={open}
        onClose={onClose}
    >
        <Box
            // position="absolute"
            // top="25%"
            // left="45%"
            // border="1px solid yellow"
            // backgroundColor={colors.primary[400]}
        >
            <Box
                position="absolute"
                top="25%"
                left="45%"
                backgroundColor={colors.greenAccent[600]}
                border="1px solid blue"
                display="flex"
                flexDirection="column"
            >
                <Box 
                    onClick={onClose}
                    // border="1px solid pink"
                    textAlign="right"
                    pr="5px"
                >
                    X
                </Box>

                <Box>
                    <Typography>
                        Choose your grade
                    </Typography>
                    <FormControl>
                        {/* <FormLabel>Grade</FormLabel> */}
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            defaultValue=""
                            onChange={handleChangeGrade}
                        >
                            <FormControlLabel value="first" control={<Radio/>} label="Grade 1"/>
                            <FormControlLabel value="second" control={<Radio/>} label="Grade 2"/>
                            <FormControlLabel value="third" control={<Radio/>} label="Grade 3"/>
                        </RadioGroup>
                    </FormControl>
                </Box>
                <Box>
                    <Typography>
                        Choose your Unit and Part
                    </Typography>
                    {/* {grade} */}
                </Box>
                <Box>
                    <button>wat</button>
                    <button>derp</button>
                </Box>
            </Box>
        </Box>
    </Modal>
  );
};

export default ModalComponent;