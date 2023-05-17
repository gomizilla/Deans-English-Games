import React, { useContext } from "react";
import { AppContext } from "../index";
import { Box, Button, useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { tokens } from "../../../theme";

const Key = ({ keyVal, enterOrDelete, disabled }) => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const matches = useMediaQuery('(min-width: 600px)');

    const { onEnter, onDelete, onSelectLetter } = useContext(AppContext);

    const selectedLetter = () => {
        if (keyVal === "ENTER") {
            onEnter();
        } else if (keyVal === "DELETE") {
            onDelete();
        } else {
            onSelectLetter(keyVal);
        }
    }

    return (
        <Box 
            sx={{
                backgroundColor: disabled ? colors.primary[700] : colors.primary[300], //#3a393c
                "&:hover": {
                    background: `${colors.greenAccent[500]}`
                },
                color: colors.primary[100],
                border: `1px solid ${colors.greenAccent[100]}`,
                borderRadius: "4px",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flex: "33%",
                width: keyVal === "ENTER" || keyVal === "DELETE" ? "4em" : "2.3em",
                // margin: "5px",
                margin: matches ? "5px" : "3px",
                // fontSize: "20px",
                fontSize: matches ? "20px" : "13px",
                height: "4.5em",
                fontWeight: "bolder",
                padding: "5px",
                // background: "linear-gradient(to bottom right, white, white 48%, gray 48%, gray 52%, green 52%, green)"
                background: disabled ? 
                `linear-gradient(to bottom right, ${colors.primary[700]}, ${colors.primary[700]} 48%, 
                    ${colors.redAccent[500]} 48%, ${colors.redAccent[500]} 52%, 
                    ${colors.primary[700]} 52%, ${colors.primary[700]})`
                : undefined    
            }}
            onClick={selectedLetter}
        >
            { keyVal }
        </Box>
    )
}

export default Key;
