import React, {useState} from 'react'
import { Box, Modal, Typography, useTheme, IconButton, Button } from "@mui/material";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useTranslation } from 'react-i18next';
import FormLabel from '@mui/material/FormLabel';

import { tokens } from '../theme';

function ModalComponent({open, onClose, grade, setGrade, setPlayPressed}) {

    const [currentGrade, setCurrentGrade] = useState("");
    const [currentUnit, setCurrentUnit] = useState("");

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const { t } = useTranslation();

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
        sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}
    >
        <Box
            textAlign="center"
            sx={{
                "@keyframes appear": {
                    "0%": {
                        opacity: "0%",
                    },
                    "25%": {
                        opacity: "25%",
                    },
                    "50%": {
                        opacity: "50%",
                    },
                    "75%": {
                        opacity: "75%",
                    },
                    "100%": {
                        opacity: "100%",
                    },
                },
                animation: "appear 0.25s linear",
            }}
        >
            <Box
                backgroundColor={colors.primary[300]}
                border="5px solid"
                borderRadius="3px"
                display="flex"
                flexDirection="column"
                p="5px"
            >
                <Box>
                    <Typography
                        variant="h2"
                    >
                        {t('choose-your-grade')}
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
                                <FormControlLabel value="first" control={<Radio/>} label={t('grade-1')}/>
                                <FormControlLabel value="second" control={<Radio/>} label={t('grade-2')}/>
                                <FormControlLabel value="third" control={<Radio/>} label={t('grade-3')}/>
                            </Box>
                        </RadioGroup>
                    </FormControl>
                </Box>
                <Box
                    // height={currentGrade ? "180px" : undefined}
                >
                    <Typography
                        variant="h3"
                    >
                        {t('choose-your-unit')}
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
                                <FormControlLabel value="unit1" control={<Radio/>} label={t('unit-1')} />
                                <FormControlLabel value="unit2" control={<Radio/>} label={t('unit-2')} />
                                <FormControlLabel value="unit3" control={<Radio/>} label={t('unit-3')} />
                                <FormControlLabel value="unit4" control={<Radio/>} label={t('unit-4')} />
                                <FormControlLabel value="unit5" control={<Radio/>} label={t('unit-5')} />
                                <FormControlLabel value="unit6" control={<Radio/>} label={t('unit-6')} />
                                <FormControlLabel value="unit7" control={<Radio/>} label={t('unit-7')} />
                                <FormControlLabel value="unit8" control={<Radio/>} label={t('unit-8')} />
                                <FormControlLabel value="unit9" control={<Radio/>} label={t('unit-9')} />
                                <FormControlLabel value="unit10" control={<Radio/>} label={t('unit-10')} />
                                <FormControlLabel value="unit11" control={<Radio/>} label={t('unit-11')} />
                            </Box>
                        }
                        {currentGrade === "second" && 
                            <Box
                                display="grid"
                                gridTemplateColumns="repeat(3, 1fr)"
                            >
                                <FormControlLabel value="unit1" control={<Radio/>} label={t('unit-1')} />
                                <FormControlLabel value="unit2" control={<Radio/>} label={t('unit-2')} />
                                <FormControlLabel value="unit3" control={<Radio/>} label={t('unit-3')} />
                                <FormControlLabel value="unit4" control={<Radio/>} label={t('unit-4')} />
                                <FormControlLabel value="unit5" control={<Radio/>} label={t('unit-5')} />
                                <FormControlLabel value="unit6" control={<Radio/>} label={t('unit-6')} />
                                <FormControlLabel value="unit7" control={<Radio/>} label={t('unit-7')} />
                            </Box>
                        }
                        {currentGrade === "third" && 
                            <Box
                                display="grid"
                                gridTemplateColumns="repeat(3, 1fr)"
                            >
                                <FormControlLabel value="unit1" control={<Radio/>} label={t('unit-1')} />
                                <FormControlLabel value="unit2" control={<Radio/>} label={t('unit-2')} />
                                <FormControlLabel value="unit3" control={<Radio/>} label={t('unit-3')} />
                                <FormControlLabel value="unit4" control={<Radio/>} label={t('unit-4')} />
                                <FormControlLabel value="unit5" control={<Radio/>} label={t('unit-5')} />
                                <FormControlLabel value="unit6" control={<Radio/>} label={t('unit-6')} />
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