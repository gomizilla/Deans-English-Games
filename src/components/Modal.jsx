import React, {useState} from 'react'
import { Box, Modal, Typography, useTheme, IconButton, Button } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { tokens } from '../theme';

function ModalComponent({open, onClose, grade, setGrade, setPlayPressed}) {

    const [currentGrade, setCurrentGrade] = useState("");
    const [currentUnit, setCurrentUnit] = useState("");

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const handleChangeGrade = (event) => {
        setCurrentGrade(event.target.value);
        setGrade({grade: event.target.value, unit: currentUnit});
    };

    const handleChangeUnit = (e) => {
        setCurrentUnit(e.target.value);
        setGrade({grade: currentGrade, unit: e.target.value})
    };

    const handleGradeAndUnit = () => {
        setGrade({grade: currentGrade, unit: currentUnit});
        console.log("grade: ", grade);
    };

  return (
    <Modal
        open={open}
        onClose={onClose}
    >
        <Box
            position="absolute"
            top="20%"
            left="40%"
            textAlign="center"
            display="flex"
            justifyContent="center"
        >
            <Box
                backgroundColor={colors.primary[300]}
                border="5px solid"
                display="flex"
                flexDirection="column"
                p="5px"
            >
                <Box>
                    <Typography
                        variant="h2"
                    >
                        Choose your grade
                    </Typography>
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                            defaultValue=""
                            onChange={handleChangeGrade}
                        >
                            <Box
                                display="grid"
                                gridTemplateColumns="repeat(3, 1fr)"
                            >
                                <FormControlLabel value="first" control={<Radio/>} label="Grade 1"/>
                                <FormControlLabel value="second" control={<Radio/>} label="Grade 2"/>
                                <FormControlLabel value="third" control={<Radio/>} label="Grade 3"/>
                            </Box>
                        </RadioGroup>
                    </FormControl>
                </Box>
                <Box>
                    <Typography
                        variant="h3"
                    >
                        Choose your unit
                    </Typography>

                    <RadioGroup
                        aria-labelledby="grade-unit-radio-label"
                        name="grade-unit-radio-buttons-group"
                        defaultValue=""
                        onChange={handleChangeUnit}
                    >
                        {currentGrade === "first" && 
                            <Box
                                display="grid"
                                gridTemplateColumns="repeat(3, 1fr)"
                            >
                                <FormControlLabel value="unit1" control={<Radio/>} label="Unit 1" />
                                <FormControlLabel value="unit2" control={<Radio/>} label="Unit 2" />
                                <FormControlLabel value="unit3" control={<Radio/>} label="Unit 3" />
                                <FormControlLabel value="unit4" control={<Radio/>} label="Unit 4" />
                                <FormControlLabel value="unit5" control={<Radio/>} label="Unit 5" />
                                <FormControlLabel value="unit6" control={<Radio/>} label="Unit 6" />
                                <FormControlLabel value="unit7" control={<Radio/>} label="Unit 7" />
                                <FormControlLabel value="unit8" control={<Radio/>} label="Unit 8" />
                                <FormControlLabel value="unit9" control={<Radio/>} label="Unit 9" />
                                <FormControlLabel value="unit10" control={<Radio/>} label="Unit 10" />
                                <FormControlLabel value="unit11" control={<Radio/>} label="Unit 11" />
                            </Box>
                        }
                        {currentGrade === "second" && 
                            <Box
                                display="grid"
                                gridTemplateColumns="repeat(3, 1fr)"
                            >
                                <FormControlLabel value="unit1" control={<Radio/>} label="Unit 1" />
                                <FormControlLabel value="unit2" control={<Radio/>} label="Unit 2" />
                                <FormControlLabel value="unit3" control={<Radio/>} label="Unit 3" />
                                <FormControlLabel value="unit4" control={<Radio/>} label="Unit 4" />
                                <FormControlLabel value="unit5" control={<Radio/>} label="Unit 5" />
                                <FormControlLabel value="unit6" control={<Radio/>} label="Unit 6" />
                                <FormControlLabel value="unit7" control={<Radio/>} label="Unit 7" />
                            </Box>
                        }
                        {currentGrade === "third" && 
                            <Box
                                display="grid"
                                gridTemplateColumns="repeat(3, 1fr)"
                            >
                                <FormControlLabel value="unit1" control={<Radio/>} label="Unit 1" />
                                <FormControlLabel value="unit2" control={<Radio/>} label="Unit 2" />
                                <FormControlLabel value="unit3" control={<Radio/>} label="Unit 3" />
                                <FormControlLabel value="unit4" control={<Radio/>} label="Unit 4" />
                                <FormControlLabel value="unit5" control={<Radio/>} label="Unit 5" />
                                <FormControlLabel value="unit6" control={<Radio/>} label="Unit 6" />
                            </Box>
                        }

                    </RadioGroup>
                </Box>
                <Box 
                    onClick={onClose}
                    textAlign="center"
                    pt="10px"
                    sx={{
                        "& .MuiButton-root": {
                            background: `${colors.redAccent[500]}`
                        },
                        "& .MuiButton-root:hover": {
                            background: `${colors.greenAccent[500]}`
                        },
                    }}
                >
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => setPlayPressed(true)}
                    >
                        Play!
                    </Button>
                </Box>
            </Box>
        </Box>
    </Modal>
  );
};

export default ModalComponent;